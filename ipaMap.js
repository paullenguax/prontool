// ipaMap.js
// Shared IPA → filename-safe map and sanitizer

export const IPA_MAP = {
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
  "tɕʰ": "tchj",

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
  "kː": "kk2", "tː": "tt2", "pː": "pp2", "sː": "ss2", "lː": "ll", "rː": "rr", "nː": "nn",
};

/**
 * Converts an IPA string to a filename-safe identifier.
 * @param {string} str - IPA or word input
 * @returns {string} sanitized identifier (safe for filenames)
 */
export function sanitizeIdentifier(str) {
  if (!str) return "";
  let safe = str;
  const sortedKeys = Object.keys(IPA_MAP).sort((a, b) => b.length - a.length);
  for (const ipa of sortedKeys) {
    if (safe.includes(ipa)) safe = safe.split(ipa).join(IPA_MAP[ipa]);
  }
  return safe.replace(/[^a-zA-Z0-9-_]/g, "");
}
