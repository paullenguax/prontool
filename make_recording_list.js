// make_recording_list.js
import { LANGUAGE_DATA } from "./src/languages.js";
import fs from "fs";
import process from "process";

// ---------- CLI ARGUMENTS ----------
const args = process.argv.slice(2);
const langArg = getArg("--lang");
const voiceArg = getArg("--voice") || "default";

function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1].toLowerCase() : null;
}

// ---------- IPA SANITIZER ----------
const ipaMap = {
  "θ": "theta", "ð": "eth", "ʃ": "sh", "ʒ": "zh", "ŋ": "ng",
  "tʃ": "ch", "dʒ": "dzh", "ɜː": "er", "ə": "schwa", "ʌ": "Lambda",
  "ɔː": "or", "ɒ": "ot", "ɪ": "ih", "ʊ": "uh", "æ": "ae",
  "uː": "oo", "iː": "ee", "eɪ": "ei", "aɪ": "ai", "ɔɪ": "oi",
  "aʊ": "au", "əʊ": "ou", "ɪə": "ia", "eə": "ea", "ʊə": "ua",
  "ɛ̃": "en", "œ̃": "oen", "ɑ̃": "an", "ɔ̃": "on",
  "ā": "a1", "á": "a2", "ǎ": "a3", "à": "a4",
  "mā": "ma1", "má": "ma2", "mǎ": "ma3", "mà": "ma4",
};
function sanitize(str) {
  let safe = str;
  for (const [ipa, replacement] of Object.entries(ipaMap)) {
    safe = safe.replace(new RegExp(ipa, "g"), replacement);
  }
  return safe.replace(/[^a-zA-Z0-9-_]/g, "");
}

// ---------- FILE GENERATOR ----------
const allLanguages = Object.entries(LANGUAGE_DATA);
const targetLanguages = langArg
  ? allLanguages.filter(([code]) => code.toLowerCase().includes(langArg))
  : allLanguages;

if (targetLanguages.length === 0) {
  console.log(`⚠️  No language found for "${langArg}".`);
  process.exit(0);
}

let textLines = [];
let csvLines = ["language,section,type,ipa,example,filename"];

for (const [langCode, lang] of targetLanguages) {
  textLines.push(`\n## ${lang.name}`);
  for (const section of lang.sections) {
    textLines.push(`\n### ${section.title}`);
    const processCell = (ipa, example, type) => {
      const id = sanitize(ipa);
      const safeWord = sanitize(example || "");
      const suffix =
        voiceArg && voiceArg !== "default" ? `-${voiceArg}` : "";
      const filename = `${langCode}-${type}-${id}${suffix}.mp3`;
      const wordFile =
        example && type !== "tone"
          ? `${langCode}-word-${safeWord}${suffix}.mp3`
          : null;

      textLines.push(`${type}: ${ipa.padEnd(6)} example: ${example || ""} filename: ${filename}`);
      csvLines.push(`${lang.name},${section.title},${type},${ipa},${example || ""},${filename}`);
      if (wordFile) {
        textLines.push(`word: ${example} filename: ${wordFile}`);
        csvLines.push(`${lang.name},${section.title},word,,${example},${wordFile}`);
      }
    };

    // consonant rows
    if (section.rows) {
      for (const row of section.rows) {
        for (const cell of row.cells || []) {
          if (!cell) continue;
          processCell(cell.ipa, cell.example, "phoneme");
        }
      }
    }

    // vowel/diphthong/tones grids
    if (section.grid) {
      for (const row of section.grid) {
        for (const cell of row) {
          if (!cell) continue;
          const type =
            section.category === "tone"
              ? "tone"
              : section.category === "vowel" ||
                section.category === "diphthong"
              ? "phoneme"
              : "phoneme";
          processCell(cell.ipa, cell.example, type);
        }
      }
    }
  }
}

fs.writeFileSync("recording_list.txt", textLines.join("\n"), "utf8");
fs.writeFileSync("recording_list.csv", csvLines.join("\n"), "utf8");

console.log(
  `✅  Created recording_list.txt and recording_list.csv for ${
    targetLanguages.length
  } language${targetLanguages.length > 1 ? "s" : ""}${
    voiceArg && voiceArg !== "default" ? ` (voice: ${voiceArg})` : ""
  }.`
);
