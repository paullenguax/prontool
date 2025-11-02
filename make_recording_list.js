// make_recording_list.js
import { LANGUAGE_DATA } from "./src/languages.js";
import fs from "fs";
import process from "process";
import { sanitizeIdentifier } from "./ipaMap.js";



// ---------- CLI ARGUMENTS ----------
const args = process.argv.slice(2);
const langArg = getArg("--lang");
const voiceArg = getArg("--voice") || "default";

function getArg(flag) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1].toLowerCase() : null;
}


// Extract just the word from example (before transliteration)
function extractWord(exampleText) {
  if (!exampleText) return "";
  // Remove content in parentheses
  const withoutParens = exampleText.replace(/\s*\([^)]*\).*$/, '').trim();
  // Split on space and take first part
  return withoutParens.split(/\s+/)[0] || exampleText;
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
    
    const processCell = (cell, type) => {
      if (!cell || !cell.ipa) return;
      
      const ipa = cell.ipa;
      const example = extractWord(cell.example);
    const id = sanitizeIdentifier(ipa);
const safeWord = sanitizeIdentifier(example);
      
      const suffix = voiceArg && voiceArg !== "default" ? `-${voiceArg}` : "";
      const filename = `${langCode}-${type}-${id}${suffix}.mp3`;
      
      textLines.push(`  ${type}: ${ipa.padEnd(10)} example: ${example.padEnd(20)} filename: ${filename}`);
      csvLines.push(`${lang.name},${section.title},${type},${ipa},${example},${filename}`);
      
      // Add word recording (unless it's a tone section)
      if (example && type !== "tone" && safeWord) {
        const wordFile = `${langCode}-word-${safeWord}${suffix}.mp3`;
        textLines.push(`  word: ${example.padEnd(30)} filename: ${wordFile}`);
        csvLines.push(`${lang.name},${section.title},word,,${example},${wordFile}`);
      }
    };
    
    // Process rows (consonants, etc.)
    if (section.rows) {
      for (const row of section.rows) {
        for (const cell of row.cells || []) {
          if (cell) {
            const type = section.category === "tone" ? "tone" : "phoneme";
            processCell(cell, type);
          }
        }
      }
    }
    
    // Process grids (vowels, diphthongs, tones)
    if (section.grid) {
      for (const row of section.grid) {
        for (const cell of row) {
          if (cell) {
            const type = section.category === "tone" ? "tone" : "phoneme";
            processCell(cell, type);
          }
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

console.log(`\n📊 Statistics:`);
console.log(`   Total phonemes: ${csvLines.length - 1}`); // -1 for header
console.log(`   Languages: ${targetLanguages.map(([_, lang]) => lang.name).join(", ")}`);