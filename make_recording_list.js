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
  // English
  "θ": "theta", "ð": "eth", "ʃ": "sh", "ʒ": "zh", "ŋ": "ng",
  "tʃ": "ch", "dʒ": "dzh", "ɜː": "er", "ə": "schwa", "ʌ": "Lambda",
  "ɔː": "or", "ɒ": "ot", "ɪ": "ih", "ʊ": "uh", "æ": "ae",
  "uː": "oo", "iː": "ee", "aː": "aa",
  
  // Diphthongs
  "eɪ": "ei", "aɪ": "ai", "ɔɪ": "oi", "aʊ": "au", "əʊ": "ou",
  "ɪə": "ia", "eə": "ea", "ʊə": "ua", "oʊ": "ow",
  
  // French nasals
  "ɛ̃": "en", "œ̃": "oen", "ɑ̃": "an", "ɔ̃": "on",
  
  // Other vowels
  "ɛ": "eh", "ɔ": "oh", "ø": "oe", "œ": "oeh", "ɤ": "uh2",
  "ɯ": "u-", "ɨ": "i-", "ɚ": "er2",
  
  // Spanish/Portuguese
  "ɲ": "ny", "ʎ": "ly", "ɾ": "tap", "ʁ": "R",
  
  // Mandarin tones
  "ā": "a1", "á": "a2", "ǎ": "a3", "à": "a4",
  "ē": "e1", "é": "e2", "ě": "e3", "è": "e4",
  "ī": "i1", "í": "i2", "ǐ": "i3", "ì": "i4",
  "ō": "o1", "ó": "o2", "ǒ": "o3", "ò": "o4",
  "ū": "u1", "ú": "u2", "ǔ": "u3", "ù": "u4",
  "mā": "ma1", "má": "ma2", "mǎ": "ma3", "mà": "ma4",
  "ǖ": "yu1", "ǘ": "yu2", "ǚ": "yu3", "ǜ": "yu4",
  
  // Aspirated/palatalized markers
  "ʰ": "h", "ʲ": "j", "ˤ": "pharyn", "ː": "long",
  
  // Special consonants
  "ʂ": "sr", "ʐ": "zr", "ɕ": "cj", "ʑ": "zj", "tɕ": "tcj", "dʑ": "dzj",
  "ɸ": "ph", "ç": "hj", "ʕ": "ain", "ħ": "hh", "ɣ": "gh",
  "ʈ": "tr", "ɖ": "dr", "ʈʰ": "trh", "ɖʱ": "drh",
  "ɟ": "dyh", "ɟʱ": "dyhh", "ʋ": "v2", "ɽ": "rd",
  "ɳ": "nr", "ɴ": "nu",
  
  // Turkish/Japanese
  "ɯ": "iu", "tɕʰ": "tchj",
  
  // Korean fortis
  "p͈": "pp", "t͈": "tt", "k͈": "kk", "s͈": "ss", "t͈ɕ": "ttcj",
  
  // Arabic
  "ʔ": "q2", "q": "q",
  
  // Russian
  "ts": "ts", "tɕ": "tch", "ɕː": "shch",
  
  // Hindi complex
  "t̪": "t-d", "d̪": "d-d", "t̪ʰ": "t-dh", "d̪ʰ": "d-dh",
  "pʱ": "ph2", "bʱ": "bh", "gʱ": "gh2", "dʱ": "dh",
  "cʰ": "chh", "ɦ": "hv",
  
  // Nasal vowels (Portuguese)
  "ĩ": "in", "ẽ": "en2", "ã": "an2", "õ": "on2", "ũ": "un",
  "ãw̃": "aun", "õj̃": "onj", "ãj̃": "anj",
  
  // Diphthongs with tone/length
  "ai̯": "ai2", "ei̯": "ei2", "oi̯": "oi2", "au̯": "au2", "eu̯": "eu2", "ou̯": "ou2",
  
  // Japanese long vowels
  "aː": "aa", "iː": "ii", "ɯː": "uu2", "eː": "ee", "oː": "oo2",
  "kː": "kk2", "tː": "tt2", "pː": "pp2", "sː": "ss2",
};

function sanitize(str) {
  let safe = str;
  // Sort by length (longest first) to handle multi-character sequences
  const sortedKeys = Object.keys(ipaMap).sort((a, b) => b.length - a.length);
  for (const ipa of sortedKeys) {
    safe = safe.split(ipa).join(ipaMap[ipa]);
  }
  // Remove any remaining non-alphanumeric except dash and underscore
  return safe.replace(/[^a-zA-Z0-9-_]/g, "");
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
      const id = sanitize(ipa);
      const safeWord = sanitize(example);
      
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