// make_voice_recording_pack.js
import { LANGUAGE_DATA } from "./src/languages.js";
import fs from "fs";
import process from "process";
import { sanitizeIdentifier } from "./ipaMap.js";

// ---------- CLI ----------
const args = process.argv.slice(2);
const langArg = getArg("--lang");
const voiceArg = getArg("--voice") || "male";

function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1].toLowerCase() : null;
}

// ---------- Helpers ----------
function extractWord(example) {
  if (!example) return "";
  const noParens = example.replace(/\s*\([^)]*\).*$/, "").trim();
  return noParens.split(/\s+/)[0] || example;
}

function extractPhonemeSound(highlighted, fallback) {
  if (!highlighted) return fallback;
  const m = highlighted.match(/\[([^\]]+)\]/);
  return m ? m[1] : fallback;
}

function formatEmphasis(highlighted, example) {
  if (!highlighted) return example;
  return highlighted.replace(/\[([^\]]+)\]/g, (_, p) => p.toUpperCase());
}

// ---------- Data ----------
const allLangs = Object.entries(LANGUAGE_DATA);
const target = langArg
  ? allLangs.filter(([c]) => c.toLowerCase().includes(langArg))
  : allLangs;

if (target.length === 0) {
  console.log(`No language matches "${langArg}".`);
  process.exit(0);
}

let actorLines = [];
let csvLines = ["language,section,type,ipa,example,phoneme_sound,emphasis,filename"];

// ------------------------------------------------------------
// Process every language
// ------------------------------------------------------------
for (const [langCode, lang] of target) {
  const header = "=".repeat(70);
  actorLines.push("");
  actorLines.push(header);
  actorLines.push(`${lang.name.toUpperCase()} – ${voiceArg.toUpperCase()} VOICE`);
  actorLines.push(header);
  actorLines.push("");

  for (const section of lang.sections) {
    actorLines.push(`\n### ${section.title} ###`);
    if (section.subtitle) actorLines.push(`*${section.subtitle}*`);
    actorLines.push("");

    const processCell = (cell, type) => {
      if (!cell?.ipa) return;

      const ipa = cell.ipa;
      const word = extractWord(cell.example);
      const phonemeSound = extractPhonemeSound(cell.highlighted, ipa);
      const emphasis = formatEmphasis(cell.highlighted, cell.example);
      const id = sanitizeIdentifier(ipa);
      const safeWord = sanitizeIdentifier(word);

      const suffix = `-${voiceArg}`;
      const phonemeFile = `${langCode}-${type}-${id}${suffix}.mp3`;
      const wordFile = word && type !== "tone" && safeWord
        ? `${langCode}-word-${safeWord}${suffix}.mp3`
        : "";

      // ---- Actor script ----
      actorLines.push(`1) Say the word: **${word}**`);
      actorLines.push(
        `2) Repeat the isolated sound: **-${phonemeSound}-**` +
        (cell.needsSchwa ? ` (add a quick “uh” after: ${phonemeSound}-uh)` : "") +
        (type === "tone" ? "  [focus on the pitch contour]" : "")
      );
      actorLines.push("");
      actorLines.push("---");
      actorLines.push("");

      // ---- CSV ----
      csvLines.push(
        `"${lang.name}","${section.title}",${type},"${ipa}","${word}","${phonemeSound}","${emphasis}","${phonemeFile}"`
      );
      if (wordFile) {
        csvLines.push(
          `"${lang.name}","${section.title}",word,"","${word}","","","${wordFile}"`
        );
      }
    };

    // SUPPORT: list, grid, OR rows
    const cells = section.list || 
                  (section.grid ? section.grid.flat() : []) ||
                  (section.rows ? section.rows.flatMap(r => r.cells || []) : []);

    const type = section.category === "tone" ? "tone" : "phoneme";

    for (const cell of cells) {
      if (cell) processCell(cell, type);
    }
  }
}

// ------------------------------------------------------------
// Write files
// ------------------------------------------------------------
fs.writeFileSync("voice_actor_script.txt", actorLines.join("\n"), "utf8");
fs.writeFileSync("filenames_for_upload.csv", csvLines.join("\n"), "utf8");

console.log(`\nCreated:`);
console.log(`   • voice_actor_script.txt   (give to voice actor)`);
console.log(`   • filenames_for_upload.csv (your filename list)`);
console.log(`\n   Language(s): ${target.map(([_, l]) => l.name).join(", ")}`);
console.log(`   Voice: ${voiceArg}`);
console.log(`   Total recordings: ${csvLines.length - 1}`);