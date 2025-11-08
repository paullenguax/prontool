// ipaMap.js
// Shared IPA → filename-safe map and sanitizer
// Updated for RP, General American, and General Australian English

export const IPA_MAP = {
  // === ENGLISH VOWELS ===
  "θ": "theta", "ð": "eth", "ʃ": "sh", "ʒ": "zh", "ŋ": "ng",
  "tʃ": "ch", "dʒ": "dzh",

  // Monophthongs
  "iː": "ee",     // RP, Aus: fleece
  "ɪ": "ih",      // kit
  "ʊ": "uh",      // foot
  "uː": "oo",     // goose
  "e": "eh",      // RP: dress
  "ɛ": "eh",      // GenAm: dress
  "ə": "schwa",   // comma
  "ɜː": "er",     // RP: nurse
  "ʌ": "Lambda",  // strut
  "ɔː": "or",     // RP: thought
  "ɒ": "ot",      // RP: lot
  "æ": "ae",      // trap
  "ɑː": "aa",     // RP: palm
  "ɑ": "ah",      // GenAm: palm
  "ɔ": "oh",      // GenAm: thought (non-merged)
  "o": "oh",      // GenAm: goat (mid, before diphthong)
  "oː": "aw",     // Aus: thought

  // Australian-specific
  "ɐ": "uhr",     // strut (avoid conflict with ʊ)

  // R-colored vowels (General American)
  "ɚ": "er",      // nurse
  "ɪɚ": "eer",    // near
  "ɛɚ": "air",    // square
  "ʊɚ": "oor",    // cure
  "ɔɚ": "oar",    // north

  // Diphthongs
  "eɪ": "ei",     // face (RP, GenAm)
  "æɪ": "ay",     // Aus: face
  "aɪ": "ai",     // price (RP, GenAm)
  "ɑɪ": "ahy",    // Aus: price
  "ɔɪ": "oi",     // choice
  "əʊ": "ou",     // RP: goat
  "oʊ": "ow",     // GenAm: goat
  "aʊ": "au",     // mouth (RP, GenAm)
  "æʊ": "aow",    // Aus: mouth
  "ɪə": "ia",     // near (RP, Aus)
  "eə": "ea",     // square (RP)
  "ʊə": "ua",     // cure (RP)
  "eː": "air2",   // Aus: square (monophthongized)

  // === CONSONANTS ===
  "ɹ": "r",       // GenAm, Aus: rip (rhotic approximant)
  "l": "l", "m": "m", "n": "n", "w": "w", "j": "y", "h": "h",

  // === LENGTH & MODIFIERS ===
  "ː": "long",    // length marker (optional in English)

  // === FRENCH NASALS ===
  "ɛ̃": "en", "œ̃": "oen", "ɑ̃": "an", "ɔ̃": "on",

  // === OTHER VOWELS ===
  "ø": "oe", "œ": "oeh", "ɤ": "uh2", "ɯ": "u-", "ɨ": "i-",

  // === SPANISH / PORTUGUESE ===
  "ɲ": "ny", "ʎ": "ly", "ɾ": "tap", "ʁ": "R",

  // === MANDARIN TONES ===
  "ā": "a1", "á": "a2", "ǎ": "a3", "à": "a4",
  "ē": "e1", "é": "e2", "ě": "e3", "è": "e4",
  "ī": "i1", "í": "i2", "ǐ": "i3", "ì": "i4",
  "ō": "o1", "ó": "o2", "ǒ": "o3", "ò": "o4",
  "ū": "u1", "ú": "u2", "ǔ": "u3", "ù": "u4",
  "mā": "ma1", "má": "ma2", "mǎ": "ma3", "mà": "ma4",
  "ǖ": "yu1", "ǘ": "yu2", "ǚ": "yu3", "ǜ": "yu4",
  "ɕ": "cj",
"tɕ": "qj",
"tɕʰ": "qjh",
"ɻ": "r2",
"ia": "ya", "ie": "ye", "ua": "wa", "uo": "wo",
"yɛ": "yue", "iau": "yao", "iou": "you", "uai": "wai", "uei": "wei",
 "ɚ": "er2",     // èr
"ŋ̍": "ng3",     // ńg (syllabic)
  // === ASPIRATION / PALATALIZATION ===
  "ʰ": "h", "ʲ": "j", "ˤ": "pharyn",

  // === SPECIAL CONSONANTS ===
  "ʂ": "sr", "ʐ": "zr", "ɕ": "cj", "ʑ": "zj",
  "tɕ": "tcj", "dʑ": "dzj", "ɸ": "ph", "ç": "hj",
  "ʕ": "ain", "ħ": "hh", "ɣ": "gh",
  "ʈ": "tr", "ɖ": "dr", "ʈʰ": "trh", "ɖʱ": "drh",
  "ɟ": "dyh", "ɟʱ": "dyhh", "ʋ": "v2", "ɽ": "rd",
  "ɳ": "nr", "ɴ": "nu",

  // === TURKISH / JAPANESE ===
  "tɕʰ": "tchj",

  // === KOREAN FORTIS ===
  "p͈": "pp", "t͈": "tt", "k͈": "kk", "s͈": "ss", "t͈ɕ": "ttcj",

  // === ARABIC ===
  "ʔ": "q2", "q": "q",

  // === RUSSIAN ===
  "ts": "ts", "tɕ": "tch", "ɕː": "shch",

  // === HINDI COMPLEX ===
  "t̪": "t-d", "d̪": "d-d", "t̪ʰ": "t-dh", "d̪ʰ": "d-dh",
  "pʱ": "ph2", "bʱ": "bh", "gʱ": "gh2", "dʱ": "dh",
  "cʰ": "chh", "ɦ": "hv",

  // === PORTUGUESE NASAL VOWELS ===
  "ĩ": "in", "ẽ": "en2", "ã": "an2", "õ": "on2", "ũ": "un",
 "ãw̃": "aun", "õj̃": "onj", "ãj̃": "anj",

  // === DIPHTHONGS WITH TONE/LENGTH ===
  "ai̯": "ai2", "ei̯": "ei2", "oi̯": "oi2",
  "au̯": "au2", "eu̯": "eu2", "ou̯": "ou2",

  // Add these to the appropriate section:
"x": "x",        // voiceless velar fricative (Mandarin, Spanish, Russian, Arabic)
"y": "yv",       // close front rounded vowel (French, Turkish, Korean)
"tʂ": "tsr",     // voiceless retroflex affricate (Mandarin)

  // === JAPANESE LONG VOWELS ===
  "aː": "aa", "iː": "ii", "ɯː": "uu2", "eː": "ee", "oː": "oo2",
  "kː": "kk2", "tː": "tt2", "pː": "pp2", "sː": "ss2",
  "lː": "ll", "rː": "rr", "nː": "nn",
};

/**
 * Converts an IPA string to a filename-safe identifier.
 * @param {string} str - IPA or word input
 * @returns {string} sanitized identifier (safe for filenames)
 */
export function sanitizeIdentifier(str) {
  if (!str) return "";
  let safe = str.trim();

  // Sort keys by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(IPA_MAP).sort((a, b) => b.length - a.length);

  // Replace IPA symbols with safe strings
  for (const ipa of sortedKeys) {
    const regex = new RegExp(ipa.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    safe = safe.replace(regex, IPA_MAP[ipa]);
  }

  // Remove any remaining non-alphanumeric chars except - and _
  return safe.replace(/[^a-zA-Z0-9-_]/g, "");
}