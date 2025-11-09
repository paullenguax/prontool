export const LANGUAGE_DATA = {
  "english": {
    "name": "English (British RP)",
    "flag": "🇬🇧",
    "defaultVoice": "male",
    "sections": [
      {
        "title": "Monophthongs",
        "subtitle": "Arranged by tongue position",
        "category": "vowel",
        "list": 
          [
            { "ipa": "iː", "example": "fleece", "highlighted": "fl[ee]ce", "description": "close front unrounded vowel" },
            { "ipa": "ɪ", "example": "kit", "highlighted": "k[i]t", "description": "near-close front unrounded vowel" },
            { "ipa": "ʊ", "example": "foot", "highlighted": "f[oo]t", "description": "near-close back rounded vowel" },
            { "ipa": "uː", "example": "goose", "highlighted": "g[oo]se", "description": "close back rounded vowel" },
            { "ipa": "ɛ", "example": "dress", "highlighted": "dr[e]ss", "description": "open-mid front unrounded vowel" },
            { "ipa": "ə", "example": "comma", "highlighted": "comm[a]", "description": "mid central vowel (schwa)" },
            { "ipa": "ɜː", "example": "nurse", "highlighted": "n[ur]se", "description": "open-mid central unrounded vowel" },
            { "ipa": "ɔː", "example": "thought", "highlighted": "th[ough]t", "description": "open-mid back rounded vowel" },
            { "ipa": "æ", "example": "trap", "highlighted": "tr[a]p", "description": "near-open front unrounded vowel" },
            { "ipa": "ʌ", "example": "strut", "highlighted": "str[u]t", "description": "open-mid back unrounded vowel" },
            { "ipa": "ɑː", "example": "palm", "highlighted": "p[a]lm", "description": "open back unrounded vowel" },
            { "ipa": "ɒ", "example": "lot", "highlighted": "l[o]t", "description": "open back rounded vowel" }
          ]
      },
      {
        "title": "Diphthongs",
        "subtitle": "Grouped by glide target",
        "category": "diphthong",
        "list": [
            { "ipa": "eɪ", "example": "face", "highlighted": "f[a]ce", "description": "closing diphthong to [ɪ]" },
            { "ipa": "aɪ", "example": "price", "highlighted": "pr[i]ce", "description": "closing diphthong to [ɪ]" },
            { "ipa": "ɔɪ", "example": "choice", "highlighted": "ch[oi]ce", "description": "closing diphthong to [ɪ]" },
            { "ipa": "əʊ", "example": "goat", "highlighted": "g[oa]t", "description": "closing diphthong to [ʊ]" },
            { "ipa": "aʊ", "example": "mouth", "highlighted": "m[ou]th", "description": "closing diphthong to [ʊ]" },
            { "ipa": "ɪə", "example": "near", "highlighted": "n[ea]r", "description": "centring diphthong" },
            { "ipa": "eə", "example": "square", "highlighted": "squ[are]", "description": "centring diphthong" },
            { "ipa": "ʊə", "example": "cure", "highlighted": "c[ure]", "description": "centring diphthong" }
        ]
      },
      {
        "title": "Consonants",
        "subtitle": "Organized by place and voicing",
        "category": "consonant",
        "list": [
              { "ipa": "p", "example": "pin", "highlighted": "[p]in", "needsSchwa": true, "description": "voiceless bilabial stop" },
              { "ipa": "t", "example": "tin", "highlighted": "[t]in", "needsSchwa": true, "description": "voiceless alveolar stop" },
              { "ipa": "k", "example": "kin", "highlighted": "[k]in", "needsSchwa": true, "description": "voiceless velar stop" },
              { "ipa": "tʃ", "example": "chin", "highlighted": "[ch]in", "needsSchwa": true, "description": "voiceless postalveolar affricate" },
              { "ipa": "f", "example": "fin", "highlighted": "[f]in", "needsSchwa": true, "description": "voiceless labiodental fricative" },
              { "ipa": "θ", "example": "thin", "highlighted": "[th]in", "needsSchwa": true, "description": "voiceless dental fricative" },
              { "ipa": "s", "example": "sin", "highlighted": "[s]in", "needsSchwa": true, "description": "voiceless alveolar fricative" },
              { "ipa": "ʃ", "example": "shin", "highlighted": "[sh]in", "needsSchwa": true, "description": "voiceless postalveolar fricative" },
              { "ipa": "h", "example": "hint", "highlighted": "[h]int", "needsSchwa": true, "description": "voiceless glottal fricative" },
              { "ipa": "b", "example": "bin", "highlighted": "[b]in", "needsSchwa": true, "description": "voiced bilabial stop" },
              { "ipa": "d", "example": "din", "highlighted": "[d]in", "needsSchwa": true, "description": "voiced alveolar stop" },
              { "ipa": "g", "example": "give", "highlighted": "[g]ive", "needsSchwa": true, "description": "voiced velar stop" },
              { "ipa": "dʒ", "example": "gin", "highlighted": "[g]in", "needsSchwa": true, "description": "voiced postalveolar affricate" },
              { "ipa": "v", "example": "vim", "highlighted": "[v]im", "needsSchwa": true, "description": "voiced labiodental fricative" },
              { "ipa": "ð", "example": "this", "highlighted": "[th]is", "needsSchwa": true, "description": "voiced dental fricative" },
              { "ipa": "z", "example": "zoo", "highlighted": "[z]oo", "needsSchwa": true, "description": "voiced alveolar fricative" },
              { "ipa": "ʒ", "example": "vision", "highlighted": "vi[s]ion", "needsSchwa": true, "description": "voiced postalveolar fricative" },
              { "ipa": "m", "example": "map", "highlighted": "[m]ap", "needsSchwa": true, "description": "bilabial nasal" },
              { "ipa": "n", "example": "nap", "highlighted": "[n]ap", "needsSchwa": true, "description": "alveolar nasal" },
              { "ipa": "ŋ", "example": "sing", "highlighted": "si[ng]", "description": "velar nasal" },
              { "ipa": "w", "example": "win", "highlighted": "[w]in", "needsSchwa": true, "description": "labial-velar approximant" },
              { "ipa": "l", "example": "lip", "highlighted": "[l]ip", "needsSchwa": true, "description": "alveolar lateral approximant" },
              { "ipa": "ɹ", "example": "rip", "highlighted": "[r]ip", "needsSchwa": true, "description": "alveolar approximant" },
              { "ipa": "j", "example": "yes", "highlighted": "[y]es", "needsSchwa": true, "description": "palatal approximant" }
            ]
          }
        ]
      },

  "american_english": {
    "name": "English (General American)",
    "flag": "🇺🇸",
    "defaultVoice": "male",
    "sections": [
      {
        "title": "Monophthongs",
        "subtitle": "Arranged by tongue position",
        "category": "vowel",
        "list": [
          
            { "ipa": "i", "example": "fleece", "highlighted": "fl[ee]ce", "description": "close front unrounded vowel" },
            { "ipa": "ɪ", "example": "kit", "highlighted": "k[i]t", "description": "near-close front unrounded vowel" },
            { "ipa": "ʊ", "example": "foot", "highlighted": "f[oo]t", "description": "near-close back rounded vowel" },
            { "ipa": "u", "example": "goose", "highlighted": "g[oo]se", "description": "close back rounded vowel" },
            { "ipa": "ɛ", "example": "dress", "highlighted": "dr[e]ss", "description": "open-mid front unrounded vowel" },
            { "ipa": "ə", "example": "comma", "highlighted": "comm[a]", "description": "mid central vowel (schwa)" },
            { "ipa": "ʌ", "example": "strut", "highlighted": "str[u]t", "description": "open-mid back unrounded vowel" },
            { "ipa": "æ", "example": "trap", "highlighted": "tr[a]p", "description": "near-open front unrounded vowel" },
            { "ipa": "ɑ", "example": "lot", "highlighted": "l[o]t", "description": "open back unrounded vowel (LOT-PALM merged)" },
            { "ipa": "ɔ", "example": "thought", "highlighted": "th[ough]t", "description": "open-mid back rounded vowel (non-merged)"},
            { "ipa": "ɚ", "example": "nurse", "highlighted": "n[ur]se", "description": "r-colored schwa"},
        ]
      },
      {
        "title": "Diphthongs",
        "subtitle": "Gliding vowel combinations",
        "category": "diphthong",
        "list": [
            { "ipa": "eɪ", "example": "face", "highlighted": "f[a]ce", "description": "mid front to close front" },
            { "ipa": "aɪ", "example": "price", "highlighted": "pr[i]ce", "description": "open to near-close front" },
            { "ipa": "oʊ", "example": "goat", "highlighted": "g[oa]t", "description": "mid back to close back" },
            { "ipa": "aʊ", "example": "mouth", "highlighted": "m[ou]th", "description": "open to near-close back" },
            { "ipa": "ɔɪ", "example": "choice", "highlighted": "ch[oi]ce", "description": "open-mid back to near-close front" },
        ]
      },
      {
        "title": "R-colored Vowels",
        "subtitle": "Rhotic vowel nuclei",
        "category": "vowel",
        "list": [
            { "ipa": "ɪɚ", "example": "near", "highlighted": "n[ea]r", "description": "near r-colored" },
            { "ipa": "ɛɚ", "example": "square", "highlighted": "squ[are]", "description": "square r-colored" },
            { "ipa": "ʊɚ", "example": "cure", "highlighted": "c[ure]", "description": "cure r-colored" },
            { "ipa": "ɔɚ", "example": "north", "highlighted": "n[or]th", "description": "force r-colored" }
        ]
      },
      {
        "title": "Consonants",
        "subtitle": "Organized by place and voicing",
        "category": "consonant",
        "list": [
              { "ipa": "p", "example": "pin", "highlighted": "[p]in", "needsSchwa": true, "description": "voiceless bilabial stop" },
              { "ipa": "t", "example": "tin", "highlighted": "[t]in", "needsSchwa": true, "description": "voiceless alveolar stop" },
              { "ipa": "k", "example": "kin", "highlighted": "[k]in", "needsSchwa": true, "description": "voiceless velar stop" },
              { "ipa": "tʃ", "example": "chin", "highlighted": "[ch]in", "needsSchwa": true, "description": "voiceless postalveolar affricate" },
              { "ipa": "f", "example": "fin", "highlighted": "[f]in", "needsSchwa": true, "description": "voiceless labiodental fricative" },
              { "ipa": "θ", "example": "thin", "highlighted": "[th]in", "needsSchwa": true, "description": "voiceless dental fricative" },
              { "ipa": "s", "example": "sin", "highlighted": "[s]in", "needsSchwa": true, "description": "voiceless alveolar fricative" },
              { "ipa": "ʃ", "example": "shin", "highlighted": "[sh]in", "needsSchwa": true, "description": "voiceless postalveolar fricative" },
              { "ipa": "h", "example": "hint", "highlighted": "[h]int", "needsSchwa": true, "description": "voiceless glottal fricative" },
              { "ipa": "b", "example": "bin", "highlighted": "[b]in", "needsSchwa": true, "description": "voiced bilabial stop" },
              { "ipa": "d", "example": "din", "highlighted": "[d]in", "needsSchwa": true, "description": "voiced alveolar stop" },
              { "ipa": "g", "example": "give", "highlighted": "[g]ive", "needsSchwa": true, "description": "voiced velar stop" },
              { "ipa": "dʒ", "example": "gin", "highlighted": "[g]in", "needsSchwa": true, "description": "voiced postalveolar affricate" },
              { "ipa": "v", "example": "vim", "highlighted": "[v]im", "needsSchwa": true, "description": "voiced labiodental fricative" },
              { "ipa": "ð", "example": "this", "highlighted": "[th]is", "needsSchwa": true, "description": "voiced dental fricative" },
              { "ipa": "z", "example": "zoo", "highlighted": "[z]oo", "needsSchwa": true, "description": "voiced alveolar fricative" },
              { "ipa": "ʒ", "example": "vision", "highlighted": "vi[s]ion", "needsSchwa": true, "description": "voiced postalveolar fricative" },
              { "ipa": "m", "example": "map", "highlighted": "[m]ap", "needsSchwa": true, "description": "bilabial nasal" },
              { "ipa": "n", "example": "nap", "highlighted": "[n]ap", "needsSchwa": true, "description": "alveolar nasal" },
              { "ipa": "ŋ", "example": "sing", "highlighted": "si[ng]", "description": "velar nasal" },
              { "ipa": "w", "example": "win", "highlighted": "[w]in", "needsSchwa": true, "description": "labial-velar approximant" },
              { "ipa": "l", "example": "lip", "highlighted": "[l]ip", "needsSchwa": true, "description": "alveolar lateral approximant" },
              { "ipa": "ɹ", "example": "rip", "highlighted": "[r]ip", "needsSchwa": true, "description": "alveolar approximant" },
              { "ipa": "j", "example": "yes", "highlighted": "[y]es", "needsSchwa": true, "description": "palatal approximant" }
            ]
          }
        ]
  },

 "australian_english": {
  "name": "English (General Australian)",
  "flag": "🇦🇺",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Monophthongs",
      "subtitle": "Arranged by tongue position",
      "category": "vowel",
      "list": [
        { "ipa": "iː", "example": "fleece", "highlighted": "fl[ee]ce", "description": "close front unrounded vowel" },
        { "ipa": "ɪ", "example": "kit", "highlighted": "k[i]t", "description": "near-close front unrounded vowel" },
        { "ipa": "ʊ", "example": "foot", "highlighted": "f[oo]t", "description": "near-close back rounded vowel" },
        { "ipa": "uː", "example": "goose", "highlighted": "g[oo]se", "description": "close central rounded vowel (fronted)" },
        { "ipa": "e", "example": "dress", "highlighted": "dr[e]ss", "description": "mid front unrounded vowel" },
        { "ipa": "ə", "example": "comma", "highlighted": "comm[a]", "description": "mid central vowel (schwa)" },
        { "ipa": "ɜː", "example": "nurse", "highlighted": "n[ur]se", "description": "open-mid central unrounded vowel" },
        { "ipa": "oː", "example": "thought", "highlighted": "th[ough]t", "description": "mid back rounded vowel" },
        { "ipa": "æ", "example": "trap", "highlighted": "tr[a]p", "description": "near-open front unrounded vowel" },
        { "ipa": "a", "example": "palm", "highlighted": "p[a]lm", "description": "open central unrounded vowel" },
        { "ipa": "ɐ", "example": "strut", "highlighted": "str[u]t", "description": "near-open central unrounded vowel" },
        { "ipa": "ɔ", "example": "lot", "highlighted": "l[o]t", "description": "open-mid back rounded vowel" }
      ]
    },
    {
      "title": "Diphthongs",
      "subtitle": "Grouped by glide target",
      "category": "diphthong",
      "list": [
        { "ipa": "æɪ", "example": "face", "highlighted": "f[a]ce", "description": "near-open to close front" },
        { "ipa": "ɑɪ", "example": "price", "highlighted": "pr[i]ce", "description": "open back to close front" },
        { "ipa": "oɪ", "example": "choice", "highlighted": "ch[oi]ce", "description": "mid back to close front" },
        { "ipa": "æʊ", "example": "mouth", "highlighted": "m[ou]th", "description": "near-open to near-close back" },
        { "ipa": "oʊ", "example": "goat", "highlighted": "g[oa]t", "description": "mid back to close back" },
        { "ipa": "ɪə", "example": "near", "highlighted": "n[ea]r", "description": "centring diphthong" },
        { "ipa": "eː", "example": "square", "highlighted": "squ[are]", "description": "long mid front (monophthongized)" },
        { "ipa": "ʊə", "example": "cure", "highlighted": "c[ure]", "description": "centring diphthong" }
      ]
    },
    {
      "title": "Consonants",
      "subtitle": "Organized by place and voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "pin", "highlighted": "[p]in", "needsSchwa": true, "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "tin", "highlighted": "[t]in", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "kin", "highlighted": "[k]in", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "tʃ", "example": "chin", "highlighted": "[ch]in", "needsSchwa": true, "description": "voiceless postalveolar affricate" },
        { "ipa": "f", "example": "fin", "highlighted": "[f]in", "needsSchwa": true, "description": "voiceless labiodental fricative" },
        { "ipa": "θ", "example": "thin", "highlighted": "[th]in", "needsSchwa": true, "description": "voiceless dental fricative" },
        { "ipa": "s", "example": "sin", "highlighted": "[s]in", "needsSchwa": true, "description": "voiceless alveolar fricative" },
        { "ipa": "ʃ", "example": "shin", "highlighted": "[sh]in", "needsSchwa": true, "description": "voiceless postalveolar fricative" },
        { "ipa": "h", "example": "hint", "highlighted": "[h]int", "needsSchwa": true, "description": "voiceless glottal fricative" },
        { "ipa": "b", "example": "bin", "highlighted": "[b]in", "needsSchwa": true, "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "din", "highlighted": "[d]in", "needsSchwa": true, "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "give", "highlighted": "[g]ive", "needsSchwa": true, "description": "voiced velar stop" },
        { "ipa": "dʒ", "example": "gin", "highlighted": "[g]in", "needsSchwa": true, "description": "voiced postalveolar affricate" },
        { "ipa": "v", "example": "vim", "highlighted": "[v]im", "needsSchwa": true, "description": "voiced labiodental fricative" },
        { "ipa": "ð", "example": "this", "highlighted": "[th]is", "needsSchwa": true, "description": "voiced dental fricative" },
        { "ipa": "z", "example": "zoo", "highlighted": "[z]oo", "needsSchwa": true, "description": "voiced alveolar fricative" },
        { "ipa": "ʒ", "example": "vision", "highlighted": "vi[s]ion", "needsSchwa": true, "description": "voiced postalveolar fricative" },
        { "ipa": "m", "example": "map", "highlighted": "[m]ap", "needsSchwa": true, "description": "bilabial nasal" },
        { "ipa": "n", "example": "nap", "highlighted": "[n]ap", "needsSchwa": true, "description": "alveolar nasal" },
        { "ipa": "ŋ", "example": "sing", "highlighted": "si[ng]", "description": "velar nasal" },
        { "ipa": "w", "example": "win", "highlighted": "[w]in", "needsSchwa": true, "description": "labial-velar approximant" },
        { "ipa": "l", "example": "lip", "highlighted": "[l]ip", "needsSchwa": true, "description": "alveolar lateral approximant" },
        { "ipa": "ɹ", "example": "rip", "highlighted": "[r]ip", "needsSchwa": true, "description": "alveolar approximant" },
        { "ipa": "j", "example": "yes", "highlighted": "[y]es", "needsSchwa": true, "description": "palatal approximant" }
      ]
    }
  ]
},



"spanish": {
  "name": "Spanish (Castilian)",
  "flag": "🇪🇸",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Vowels",
      "subtitle": "Five pure vowels",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "sí", "highlighted": "s[í]", "description": "close front unrounded vowel" },
        { "ipa": "e", "example": "mes", "highlighted": "m[e]s", "description": "mid front unrounded vowel" },
        { "ipa": "a", "example": "casa", "highlighted": "c[a]sa", "description": "open central unrounded vowel" },
        { "ipa": "o", "example": "sol", "highlighted": "s[o]l", "description": "mid back rounded vowel" },
        { "ipa": "u", "example": "tú", "highlighted": "t[ú]", "description": "close back rounded vowel" }
      ]
    },
    {
      "title": "Diphthongs",
      "subtitle": "Common vowel combinations",
      "category": "diphthong",
      "list": [
        { "ipa": "ai̯", "example": "baile", "highlighted": "b[ai]le", "description": "diphthong: a + i" },
        { "ipa": "ei̯", "example": "seis", "highlighted": "s[ei]s", "description": "d krypthong: e + i" },
        { "ipa": "oi̯", "example": "hoy", "highlighted": "h[oy]", "description": "diphthong: o + i" },
        { "ipa": "au̯", "example": "auto", "highlighted": "[au]to", "description": "diphthong: a + u" },
        { "ipa": "eu̯", "example": "Europa", "highlighted": "[Eu]ropa", "description": "diphthong: e + u" },
        { "ipa": "ou̯", "example": "bou", "highlighted": "b[ou]", "description": "diphthong: o + u" },
        { "ipa": "ie", "example": "bien", "highlighted": "b[ie]n", "description": "rising diphthong" },
        { "ipa": "ue", "example": "bueno", "highlighted": "b[ue]no", "description": "rising diphthong" }
      ]
    },
    {
  "title": "Consonants",
  "subtitle": "Organized by place and voicing",
  "category": "consonant",
  "list": [
    { "ipa": "p", "example": "padre", "highlighted": "[p]adre", "needsSchwa": true, "description": "voiceless bilabial stop" },
    { "ipa": "t", "example": "toro", "highlighted": "[t]oro", "needsSchwa": true, "description": "voiceless dental stop" },
    { "ipa": "k", "example": "casa", "highlighted": "[c]asa", "needsSchwa": true, "description": "voiceless velar stop" },
    { "ipa": "tʃ", "example": "chico", "highlighted": "[ch]ico", "needsSchwa": true, "description": "voiceless postalveolar affricate" },
    { "ipa": "f", "example": "foco", "highlighted": "[f]oco", "description": "voiceless labiodental fricative" },
    { "ipa": "θ", "example": "cero", "highlighted": "[c]ero", "description": "voiceless dental fricative (Castilian)" },
    { "ipa": "s", "example": "sol", "highlighted": "[s]ol", "description": "voiceless alveolar fricative" },
    { "ipa": "b", "example": "barco", "highlighted": "[b]arco", "description": "voiced bilabial stop/fricative" },
    { "ipa": "d", "example": "dedo", "highlighted": "[d]edo", "description": "voiced dental stop/fricative" },
    { "ipa": "g", "example": "gato", "highlighted": "[g]ato", "description": "voiced velar stop/fricative" },
    { "ipa": "x", "example": "jota", "highlighted": "[j]ota", "description": "voiceless velar fricative" },
    { "ipa": "m", "example": "mano", "highlighted": "[m]ano", "description": "bilabial nasal" },
    { "ipa": "n", "example": "nada", "highlighted": "[n]ada", "description": "alveolar nasal" },
    { "ipa": "ɲ", "example": "niño", "highlighted": "ni[ñ]o", "description": "palatal nasal" },
    { "ipa": "l", "example": "lado", "highlighted": "[l]ado", "description": "alveolar lateral approximant" },
    { "ipa": "ʎ", "example": "llave", "highlighted": "[ll]ave", "description": "palatal lateral approximant" },
    { "ipa": "ɾ", "example": "caro", "highlighted": "ca[r]o", "description": "alveolar flap (single tap)" },
    { "ipa": "r", "example": "perro", "highlighted": "pe[rr]o", "description": "alveolar trill" }
  ]
}
  ]
}, 

"french": {
  "name": "French (Parisian)",
  "flag": "🇫🇷",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Oral Vowels",
      "subtitle": "Non-nasal vowels",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "si", "highlighted": "s[i]", "description": "close front unrounded vowel" },
        { "ipa": "y", "example": "tu", "highlighted": "t[u]", "description": "close front rounded vowel" },
        { "ipa": "u", "example": "vous", "highlighted": "v[ou]s", "description": "close back rounded vowel" },
        { "ipa": "e", "example": "été", "highlighted": "[é]té", "description": "close-mid front unrounded vowel" },
        { "ipa": "ø", "example": "deux", "highlighted": "d[eu]x", "description": "close-mid front rounded vowel" },
        { "ipa": "o", "example": "beau", "highlighted": "b[eau]", "description": "close-mid back rounded vowel" },
        { "ipa": "ɛ", "example": "belle", "highlighted": "b[e]lle", "description": "open-mid front unrounded vowel" },
        { "ipa": "œ", "example": "peur", "highlighted": "p[eu]r", "description": "open-mid front rounded vowel" },
        { "ipa": "ɔ", "example": "porte", "highlighted": "p[o]rte", "description": "open-mid back rounded vowel" },
        { "ipa": "a", "example": "patte", "highlighted": "p[a]tte", "description": "open офиц front unrounded vowel" },
        { "ipa": "ə", "example": "le", "highlighted": "l[e]", "description": "mid central vowel (schwa)" }
      ]
    },
    {
      "title": "Nasal Vowels",
      "subtitle": "Nasalized vowels",
      "category": "vowel",
      "list": [
        { "ipa": "ɛ̃", "example": "vin", "highlighted": "v[in]", "description": "open-mid front nasalized vowel" },
        { "ipa": "œ̃", "example": "un", "highlighted": "[un]", "description": "open-mid front rounded nasalized vowel" },
        { "ipa": "ɑ̃", "example": "blanc", "highlighted": "bl[an]c", "description": "open back nasalized vowel" },
        { "ipa": "ɔ̃", "example": "bon", "highlighted": "b[on]", "description": "open-mid back nasalized vowel" }
      ]
    },
    {
      "title": "Consonants",
      "subtitle": "Organized by place and voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "pain", "highlighted": "[p]ain", "needsSchwa": true, "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "tu", "highlighted": "[t]u", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "coeur", "highlighted": "[c]oeur", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "f", "example": "feu", "highlighted": "[f]eu", "description": "voiceless labiodental fricative" },
        { "ipa": "s", "example": "sous", "highlighted": "[s]ous", "description": "voiceless alveolar fricative" },
        { "ipa": "ʃ", "example": "chat", "highlighted": "[ch]at", "description": "voiceless postalveolar fricative" },
        { "ipa": "b", "example": "bain", "highlighted": "[b]ain", "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "doux", "highlighted": "[d]oux", "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "gare", "highlighted": "[g]are", "description": "voiced velar stop" },
        { "ipa": "v", "example": "vous", "highlighted": "[v]ous", "description": "voiced labiodental fricative" },
        { "ipa": "z", "example": "rose", "highlighted": "ro[s]e", "description": "voiced alveolar fricative" },
        { "ipa": "ʒ", "example": "je", "highlighted": "[j]e", "description": "voiced postalveolar fricative" },
        { "ipa": "m", "example": "mais", "highlighted": "[m]ais", "description": "bilabial nasal" },
        { "ipa": "n", "example": "non", "highlighted": "[n]on", "description": "alveolar nasal" },
        { "ipa": "ɲ", "example": "agneau", "highlighted": "a[gn]eau", "description": "palatal nasal" },
        { "ipa": "l", "example": "lui", "highlighted": "[l]ui", "description": "alveolar lateral approximant" },
        { "ipa": "ʁ", "example": "rue", "highlighted": "[r]ue", "description": "uvular fricative" },
        { "ipa": "j", "example": "yeux", "highlighted": "[y]eux", "description": "palatal approximant" },
        { "ipa": "ɥ", "example": "huit", "highlighted": "[h]uit", "description": "labial-palatal approximant" },
        { "ipa": "w", "example": "oui", "highlighted": "[ou]i", "description": "labial-velar approximant" }
      ]
    }
  ]
},

"italian": {
  "name": "Italian (Standard)",
  "flag": "🇮🇹",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Vowels",
      "subtitle": "Seven vowel phonemes",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "vino", "highlighted": "v[i]no", "description": "close front unrounded vowel" },
        { "ipa": "e", "example": "mela", "highlighted": "m[e]la", "description": "close-mid front unrounded vowel" },
        { "ipa": "ɛ", "example": "bello", "highlighted": "b[e]llo", "description": "open-mid front unrounded vowel" },
        { "ipa": "a", "example": "casa", "highlighted": "c[a]sa", "description": "open central unrounded vowel" },
        { "ipa": "ɔ", "example": "cosa", "highlighted": "c[o]sa", "description": "open-mid back rounded vowel" },
        { "ipa": "o", "example": "solo", "highlighted": "s[o]lo", "description": "close-mid back rounded vowel" },
        { "ipa": "u", "example": "luna", "highlighted": "l[u]na", "description": "close back rounded vowel" }
      ]
    },
    {
      "title": "Diphthongs",
      "subtitle": "Common vowel combinations",
      "category": "diphthong",
      "list": [
        { "ipa": "ai", "example": "mai", "highlighted": "m[ai]", "description": "diphthong: a + i" },
        { "ipa": "ei", "example": "sei", "highlighted": "s[ei]", "description": "diphthong: e + i" },
        { "ipa": "au", "example": "auto", "highlighted": "[au]to", "description": "diphthong: a + u" },
        { "ipa": "eu", "example": "europeo", "highlighted": "[eu]ropeo", "description": "diphthong: e + u" },
        { "ipa": "ja", "example": "piano", "highlighted": "p[ia]no", "description": "rising diphthong" },
        { "ipa": "je", "example": "ieri", "highlighted": "[ie]ri", "description": "rising diphthong" },
        { "ipa": "wa", "example": "quale", "highlighted": "q[ua]le", "description": "rising diphthong" },
        { "ipa": "wɔ", "example": "buono", "highlighted": "b[uo]no", "description": "rising diphthong" }
      ]
    },
    {
      "title": "Consonants",
      "subtitle": "Organized by place and voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "pane", "highlighted": "[p]ane", "needsSchwa": true, "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "tempo", "highlighted": "[t]empo", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "casa", "highlighted": "[c]asa", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "tʃ", "example": "ciao", "highlighted": "[c]iao", "needsSchwa": true, "description": "voiceless postalveolar affricate" },
        { "ipa": "f", "example": "fare", "highlighted": "[f]are", "description": "voiceless labiodental fricative" },
        { "ipa": "s", "example": "sole", "highlighted": "[s]ole", "description": "voiceless alveolar fricative" },
        { "ipa": "b", "example": "bello", "highlighted": "[b]ello", "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "dare", "highlighted": "[d]are", "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "gatto", "highlighted": "[g]atto", "description": "voiced velar stop" },
        { "ipa": "dʒ", "example": "gelo", "highlighted": "[g]elo", "description": "voiced postalveolar affricate" },
        { "ipa": "v", "example": "vino", "highlighted": "[v]ino", "description": "voiced labiodental fricative" },
        { "ipa": "z", "example": "zero", "highlighted": "[z]ero", "description": "voiced alveolar fricative" },
        { "ipa": "m", "example": "mare", "highlighted": "[m]are", "description": "bilabial nasal" },
        { "ipa": "n", "example": "naso", "highlighted": "[n]aso", "description": "alveolar nasal" },
        { "ipa": "ɲ", "example": "gnomo", "highlighted": "g[n]omo", "description": "palatal nasal" },
        { "ipa": "l", "example": "latte", "highlighted": "[l]atte", "description": "alveolar lateral approximant" },
        { "ipa": "ʎ", "example": "figlio", "highlighted": "fig[l]io", "description": "palatal lateral approximant" },
        { "ipa": "r", "example": "rosso", "highlighted": "[r]osso", "description": "alveolar trill" }
      ]
    },
    {
      "title": "Geminate Consonants",
      "subtitle": "Phonemic length distinction",
      "category": "consonant",
      "list": [
        { "ipa": "pː", "example": "cappa", "highlighted": "ca[pp]a", "description": "long voiceless bilabial stop" },
        { "ipa": "tː", "example": "fatto", "highlighted": "fa[tt]o", "description": "long voiceless alveolar stop" },
        { "ipa": "kː", "example": "bocca", "highlighted": "bo[cc]a", "description": "long voiceless velar stop" },
        { "ipa": "fː", "example": "affetto", "highlighted": "a[ff]etto", "description": "long voiceless labiodental fricative" },
        { "ipa": "sː", "example": "rosso", "highlighted": "ro[ss]o", "description": "long voiceless alveolar fricative" },
        { "ipa": "lː", "example": "bello", "highlighted": "be[ll]o", "description": "long alveolar lateral" },
        { "ipa": "rː", "example": "carro", "highlighted": "ca[rr]o", "description": "long alveolar trill" },
        { "ipa": "nː", "example": "anno", "highlighted": "a[nn]o", "description": "long alveolar nasal" }
      ]
    }
  ]
},


"turkish": {
  "name": "Turkish",
  "flag": "🇹🇷",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Vowels",
      "subtitle": "Eight vowel harmony system",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "[translate:bir]", "highlighted": "b[i]r", "description": "close front unrounded vowel" },
        { "ipa": "y", "example": "[translate:gül]", "highlighted": "g[ü]l", "description": "close front rounded vowel" },
        { "ipa": "ɯ", "example": "[translate:kız]", "highlighted": "k[ı]z", "description": "close back unrounded vowel" },
        { "ipa": "u", "example": "[translate:su]", "highlighted": "s[u]", "description": "close back rounded vowel" },
        { "ipa": "e", "example": "[translate:el]", "highlighted": "[e]l", "description": "mid front unrounded vowel" },
        { "ipa": "ø", "example": "[translate:göz]", "highlighted": "g[ö]z", "description": "mid front rounded vowel" },
        { "ipa": "a", "example": "[translate:kapı]", "highlighted": "k[a]pı", "description": "open front unrounded vowel" },
        { "ipa": "o", "example": "[translate:okul]", "highlighted": "[o]kul", "description": "mid back rounded vowel" }
      ]
    },
    {
      "title": "Consonants",
      "subtitle": "Organized by place and voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "[translate:para]", "highlighted": "[p]ara", "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "[translate:tak]", "highlighted": "[t]ak", "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "[translate:kedi]", "highlighted": "[k]edi", "description": "voiceless velar stop" },
        { "ipa": "tʃ", "example": "[translate:çay]", "highlighted": "[ç]ay", "description": "voiceless postalveolar affricate" },
        { "ipa": "f", "example": "[translate:fener]", "highlighted": "[f]ener", "description": "voiceless labiodental fricative" },
        { "ipa": "s", "example": "[translate:sarı]", "highlighted": "[s]arı", "description": "voiceless alveolar fricative" },
        { "ipa": "ʃ", "example": "[translate:şarap]", "highlighted": "[ş]arap", "description": "voiceless postalveolar fricative" },
        { "ipa": "h", "example": "[translate:hava]", "highlighted": "[h]ava", "description": "voiceless glottal fricative" },
        { "ipa": "b", "example": "[translate:bal]", "highlighted": "[b]al", "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "[translate:dağ]", "highlighted": "[d]ağ", "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "[translate:gaz]", "highlighted": "[g]az", "description": "voiced velar stop" },
        { "ipa": "dʒ", "example": "[translate:cam]", "highlighted": "[c]am", "description": "voiced postalveolar affricate" },
        { "ipa": "v", "example": "[translate:ver]", "highlighted": "[v]er", "description": "voiced labiodental fricative" },
        { "ipa": "z", "example": "[translate:zaman]", "highlighted": "[z]aman", "description": "voiced alveolar fricative" },
        { "ipa": "ʒ", "example": "[translate:jilet]", "highlighted": "[j]ilet", "description": "voiced postalveolar fricative" },
        { "ipa": "m", "example": "[translate:masa]", "highlighted": "[m]asa", "description": "bilabial nasal" },
        { "ipa": "n", "example": "[translate:nohut]", "highlighted": "[n]ohut", "description": "alveolar nasal" },
        { "ipa": "l", "example": "[translate:lale]", "highlighted": "[l]ale", "description": "alveolar lateral approximant" },
        { "ipa": "ɾ", "example": "[translate:araba]", "highlighted": "a[r]aba", "description": "alveolar tap" },
        { "ipa": "j", "example": "[translate:yeni]", "highlighted": "[y]eni", "description": "palatal approximant" }
      ]
    }
  ]
},

"russian": {
  "name": "Russian",
  "flag": "🇷🇺",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Vowels",
      "subtitle": "Stressed vowels",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "мир mir", "highlighted": "m[i]r", "description": "close front unrounded vowel" },
        { "ipa": "ɨ", "example": "мы my", "highlighted": "m[y]", "description": "close central unrounded vowel" },
        { "ipa": "u", "example": "ум um", "highlighted": "[u]m", "description": "close back rounded vowel" },
        { "ipa": "e", "example": "это eto", "highlighted": "[e]to", "description": "mid front unrounded vowel" },
        { "ipa": "o", "example": "он on", "highlighted": "[o]n", "description": "mid back rounded vowel" },
        { "ipa": "a", "example": "дай day", "highlighted": "d[a]y", "description": "open central unrounded vowel" }
      ]
    },
    {
      "title": "Reduced Vowels",
      "subtitle": "Unstressed positions",
      "category": "vowel",
      "list": [
        { "ipa": "ɪ", "example": "пятак pyatak", "highlighted": "p[ya]tak", "description": "reduced i (unstressed)" },
        { "ipa": "ə", "example": "молоко malako", "highlighted": "m[a]lako", "description": "schwa (unstressed)" },
        { "ipa": "ʊ", "example": "хорошо harasho", "highlighted": "harash[o]", "description": "reduced u (unstressed)" }
      ]
    },
    {
      "title": "Stops",
      "subtitle": "Hard/soft pairs",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "пар par", "highlighted": "[p]ar", "needsSchwa": true, "description": "voiceless bilabial stop (hard)" },
        { "ipa": "pʲ", "example": "пять pyatʲ", "highlighted": "[p]yatʲ", "needsSchwa": true, "description": "voiceless bilabial stop (soft)" },
        { "ipa": "t", "example": "там tam", "highlighted": "[t]am", "needsSchwa": true, "description": "voiceless alveolar stop (hard)" },
        { "ipa": "tʲ", "example": "тень tenʲ", "highlighted": "[t]enʲ", "needsSchwa": true, "description": "voiceless alveolar stop (soft)" },
        { "ipa": "k", "example": "кот kot", "highlighted": "[k]ot", "needsSchwa": true, "description": "voiceless velar stop (hard)" },
        { "ipa": "kʲ", "example": "кит kʲit", "highlighted": "[kʲ]it", "needsSchwa": true, "description": "voiceless velar stop (soft)" },
        { "ipa": "b", "example": "был byl", "highlighted": "[b]yl", "description": "voiced bilabial stop (hard)" },
        { "ipa": "bʲ", "example": "бить bʲitʲ", "highlighted": "[bʲ]itʲ", "description": "voiced bilabial stop (soft)" },
        { "ipa": "d", "example": "дом dom", "highlighted": "[d]om", "description": "voiced alveolar stop (hard)" },
        { "ipa": "dʲ", "example": "день dʲenʲ", "highlighted": "[dʲ]enʲ", "description": "voiced alveolar stop (soft)" },
        { "ipa": "g", "example": "год god", "highlighted": "[g]od", "description": "voiced velar stop (hard)" },
        { "ipa": "gʲ", "example": "гид gʲid", "highlighted": "[gʲ]id", "description": "voiced velar stop (soft)" }
      ]
    },
    {
      "title": "Fricatives",
      "subtitle": "Hard/soft pairs",
      "category": "consonant",
      "list": [
        { "ipa": "f", "example": "факт fakt", "highlighted": "[f]akt", "description": "voiceless labiodental fricative (hard)" },
        { "ipa": "fʲ", "example": "фильм fʲilʲm", "highlighted": "[fʲ]ilʲm", "description": "voiceless labiodental fricative (soft)" },
        { "ipa": "s", "example": "сон son", "highlighted": "[s]on", "description": "voiceless alveolar fricative (hard)" },
        { "ipa": "sʲ", "example": "сюда sʲuda", "highlighted": "[sʲ]uda", "description": "voiceless alveolar fricative (soft)" },
        { "ipa": "v", "example": "вода vada", "highlighted": "[v]ada", "description": "voiced labiodental fricative (hard)" },
        { "ipa": "vʲ", "example": "вить vʲitʲ", "highlighted": "[vʲ]itʲ", "description": "voiced labiodental fricative (soft)" },
        { "ipa": "z", "example": "зона zona", "highlighted": "[z]ona", "description": "voiced alveolar fricative (hard)" },
        { "ipa": "zʲ", "example": "зима zʲima", "highlighted": "[zʲ]ima", "description": "voiced alveolar fricative (soft)" },
        { "ipa": "x", "example": "хор xor", "highlighted": "[x]or", "description": "voiceless velar fricative (hard)" },
        { "ipa": "xʲ", "example": "химия xʲimʲija", "highlighted": "[xʲ]imʲija", "description": "voiceless velar fricative (soft)" }
      ]
    },
    {
      "title": "Sibilants & Affricates",
      "subtitle": "Always hard or always soft",
      "category": "consonant",
      "list": [
        { "ipa": "ʂ", "example": "шум ʂum", "highlighted": "[ʂ]um", "description": "voiceless retroflex fricative (always hard)" },
        { "ipa": "ʐ", "example": "жар ʐar", "highlighted": "[ʐ]ar", "description": "voiced retroflex fricative (always hard)" },
        { "ipa": "ts", "example": "цепь tsepʲ", "highlighted": "[ts]epʲ", "needsSchwa": true, "description": "voiceless alveolar affricate (always hard)" },
        { "ipa": "tɕ", "example": "час tɕas", "highlighted": "[tɕ]as", "needsSchwa": true, "description": "voiceless alveolopalatal affricate (always soft)" },
        { "ipa": "ɕː", "example": "щи ɕːi", "highlighted": "[ɕː]i", "description": "long voiceless alveolopalatal fricative (always soft)" },
        { "ipa": "j", "example": "май maj", "highlighted": "ma[j]", "description": "palatal approximant (always soft)" }
      ]
    },
    {
      "title": "Nasals & Liquids",
      "subtitle": "Hard/soft pairs",
      "category": "consonant",
      "list": [
        { "ipa": "m", "example": "мама mama", "highlighted": "[m]ama", "description": "bilabial nasal (hard)" },
        { "ipa": "mʲ", "example": "мясо mʲaso", "highlighted": "[mʲ]aso", "description": "bilabial nasal (soft)" },
        { "ipa": "n", "example": "нос nos", "highlighted": "[n]os", "description": "alveolar nasal (hard)" },
        { "ipa": "nʲ", "example": "няня nʲanʲa", "highlighted": "[nʲ]anʲa", "description": "alveolar nasal (soft)" },
        { "ipa": "l", "example": "лук luk", "highlighted": "[l]uk", "description": "alveolar lateral (hard)" },
        { "ipa": "lʲ", "example": "лить lʲitʲ", "highlighted": "[lʲ]itʲ", "description": "alveolar lateral (soft)" },
        { "ipa": "r", "example": "рот rot", "highlighted": "[r]ot", "description": "alveolar trill (hard)" },
        { "ipa": "rʲ", "example": "ряд rʲat", "highlighted": "[rʲ]at", "description": "alveolar trill (soft)" }
      ]
    }
  ]
},

"portuguese": {
  "name": "Portuguese (Brazilian)",
  "flag": "🇧🇷",
  "defaultVoice": "female",
  "sections": [
    {
      "title": "Oral Vowels",
      "subtitle": "Non-nasal vowels (stressed positions)",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "mil", "highlighted": "m[i]l", "description": "close front unrounded vowel" },
        { "ipa": "e", "example": "vê", "highlighted": "v[ê]", "description": "close-mid front unrounded vowel" },
        { "ipa": "ɛ", "example": "pé", "highlighted": "p[é]", "description": "open-mid front unrounded vowel" },
        { "ipa": "a", "example": "lá", "highlighted": "l[á]", "description": "open central unrounded vowel" },
        { "ipa": "ɔ", "example": "pó", "highlighted": "p[ó]", "description": "open-mid back rounded vowel" },
        { "ipa": "o", "example": "avô", "highlighted": "av[ô]", "description": "close-mid back rounded vowel" },
        { "ipa": "u", "example": "luz", "highlighted": "l[u]z", "description": "close back rounded vowel" }
      ]
    },
    {
      "title": "Nasal Vowels",
      "subtitle": "Nasalized vowels",
      "category": "vowel",
      "list": [
        { "ipa": "ĩ", "example": "fim", "highlighted": "f[ĩ]m", "description": "nasalized close front vowel" },
        { "ipa": "ẽ", "example": "bem", "highlighted": "b[ẽ]m", "description": "nasalized close-mid front vowel" },
        { "ipa": "ã", "example": "lã", "highlighted": "l[ã]", "description": "nasalized open vowel" },
        { "ipa": "õ", "example": "som", "highlighted": "s[õ]m", "description": "nasalized close-mid back vowel" },
        { "ipa": "ũ", "example": "um", "highlighted": "[ũ]m", "description": "nasalized close back vowel" }
      ]
    },
    {
      "title": "Diphthongs",
      "subtitle": "Common oral diphthongs",
      "category": "diphthong",
      "list": [
        { "ipa": "aj", "example": "pai", "highlighted": "p[ai]", "description": "diphthong: a + i" },
        { "ipa": "ej", "example": "lei", "highlighted": "l[ei]", "description": "diphthong: e + i" },
        { "ipa": "ɛj", "example": "papéis", "highlighted": "pap[éis]", "description": "diphthong: ɛ + i" },
        { "ipa": "oj", "example": "boi", "highlighted": "b[oi]", "description": "diphthong: o + i" },
        { "ipa": "aw", "example": "mau", "highlighted": "m[au]", "description": "diphthong: a + u" },
        { "ipa": "ew", "example": "meu", "highlighted": "m[eu]", "description": "diphthong: e + u" },
        { "ipa": "ɛw", "example": "céu", "highlighted": "c[éu]", "description": "diphthong: ɛ + u" },
        { "ipa": "iw", "example": "viu", "highlighted": "v[iu]", "description": "diphthong: i + u" }
      ]
    },
    {
      "title": "Nasal Diphthongs",
      "subtitle": "Nasalized combinations",
      "category": "diphthong",
      "list": [
        { "ipa": "ãw̃", "example": "mão", "highlighted": "m[ão]", "description": "nasalized diphthong" },
        { "ipa": "õj̃", "example": "põe", "highlighted": "p[õe]", "description": "nasalized diphthong" },
        { "ipa": "ãj̃", "example": "mãe", "highlighted": "m[ãe]", "description": "nasalized diphthong" }
      ]
    },
    {
      "title": "Consonants",
      "subtitle": "Organized by place and voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "pão", "highlighted": "[p]ão", "needsSchwa": true, "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "tudo", "highlighted": "[t]udo", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "casa", "highlighted": "[c]asa", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "tʃ", "example": "tia", "highlighted": "[t]ia", "needsSchwa": true, "description": "voiceless postalveolar affricate (before i)" },
        { "ipa": "f", "example": "fazer", "highlighted": "[f]azer", "description": "voiceless labiodental fricative" },
        { "ipa": "s", "example": "sol", "highlighted": "[s]ol", "description": "voiceless alveolar fricative" },
        { "ipa": "ʃ", "example": "chá", "highlighted": "[ch]á", "description": "voiceless postalveolar fricative" },
        { "ipa": "b", "example": "bom", "highlighted": "[b]om", "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "dado", "highlighted": "[d]ado", "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "gato", "highlighted": "[g]ato", "description": "voiced velar stop" },
        { "ipa": "dʒ", "example": "dia", "highlighted": "[d]ia", "description": "voiced postalveolar affricate (before i)" },
        { "ipa": "v", "example": "voz", "highlighted": "[v]oz", "description": "voiced labiodental fricative" },
        { "ipa": "z", "example": "zero", "highlighted": "[z]ero", "description": "voiced alveolar fricative" },
        { "ipa": "ʒ", "example": "já", "highlighted": "[j]á", "description": "voiced postalveolar fricative" },
        { "ipa": "m", "example": "mar", "highlighted": "[m]ar", "description": "bilabial nasal" },
        { "ipa": "n", "example": "não", "highlighted": "[n]ão", "description": "alveolar nasal" },
        { "ipa": "ɲ", "example": "ninho", "highlighted": "ni[nh]o", "description": "palatal nasal" },
        { "ipa": "l", "example": "lua", "highlighted": "[l]ua", "description": "alveolar lateral approximant" },
        { "ipa": "ʎ", "example": "olho", "highlighted": "o[lh]o", "description": "palatal lateral approximant" },
        { "ipa": "ɾ", "example": "caro", "highlighted": "ca[r]o", "description": "alveolar tap" },
        { "ipa": "ʁ", "example": "rato", "highlighted": "[r]ato", "description": "uvular fricative (varies regionally)" },
        { "ipa": "w", "example": "mau", "highlighted": "ma[u]", "description": "labial-velar approximant" },
        { "ipa": "j", "example": "iate", "highlighted": "[i]ate", "description": "palatal approximant" }
      ]
    }
  ]
},

"mandarin": {
  "name": "Mandarin Chinese",
  "flag": "🇨🇳",
  "defaultVoice": "female",
  "sections": [
    {
      "title": "Initials (声母)",
      "subtitle": "Consonant sounds at syllable start (Pinyin in examples for reference)",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "八 bā (eight)", "highlighted": "[b]ā", "description": "unaspirated bilabial stop" },
        { "ipa": "t", "example": "大 dà (big)", "highlighted": "[d]à", "description": "unaspirated alveolar stop" },
        { "ipa": "k", "example": "个 gè (one)", "highlighted": "[g]è", "description": "unaspirated velar stop" },
        { "ipa": "ts", "example": "早 zǎo (early)", "highlighted": "[z]ǎo", "description": "unaspirated alveolar affricate" },
        { "ipa": "tʂ", "example": "中 zhōng (middle)", "highlighted": "[zh]ōng", "description": "unaspirated retroflex affricate" },
        { "ipa": "tɕ", "example": "家 jiā (home)", "highlighted": "[j]iā", "description": "unaspirated alveolo-palatal affricate" },
        { "ipa": "pʰ", "example": "怕 pà (fear)", "highlighted": "[p]à", "description": "aspirated bilabial stop" },
        { "ipa": "tʰ", "example": "他 tā (he)", "highlighted": "[t]ā", "description": "aspirated alveolar stop" },
        { "ipa": "kʰ", "example": "卡 kǎ (card)", "highlighted": "[k]ǎ", "description": "aspirated velar stop" },
        { "ipa": "tsʰ", "example": "草 cǎo (grass)", "highlighted": "[c]ǎo", "description": "aspirated alveolar affricate" },
        { "ipa": "tʂʰ", "example": "车 chē (car)", "highlighted": "[ch]ē", "description": "aspirated retroflex affricate" },
        { "ipa": "tɕʰ", "example": "七 qī (seven)", "highlighted": "[q]ī", "description": "aspirated alveolo-palatal affricate" },
        { "ipa": "f", "example": "发 fā (send)", "highlighted": "[f]ā", "description": "voiceless labiodental fricative" },
        { "ipa": "s", "example": "三 sān (three)", "highlighted": "[s]ān", "description": "voiceless alveolar fricative" },
        { "ipa": "ʂ", "example": "是 shì (is)", "highlighted": "[sh]ì", "description": "voiceless retroflex fricative" },
        { "ipa": "ɕ", "example": "西 xī (west)", "highlighted": "[x]ī", "description": "voiceless alveolo-palatal fricative" },
        { "ipa": "x", "example": "好 hǎo (good)", "highlighted": "[h]ǎo", "description": "voiceless velar fricative" },
        { "ipa": "m", "example": "马 mǎ (horse)", "highlighted": "[m]ǎ", "description": "bilabial nasal" },
        { "ipa": "n", "example": "你 nǐ (you)", "highlighted": "[n]ǐ", "description": "alveolar nasal" },
        { "ipa": "l", "example": "来 lái (come)", "highlighted": "[l]ái", "description": "alveolar lateral approximant" },
        { "ipa": "ɻ", "example": "人 rén (person)", "highlighted": "[r]én", "description": "retroflex approximant" }
      ]
    },
    {
      "title": "Finals (韵母)",
      "subtitle": "Vowel sounds and syllable endings (note: \"i\" has allophones after certain initials)",
      "category": "vowel",
      "list": [
        // Simple vowels
        { "ipa": "a", "example": "啊 a (ah)", "highlighted": "[a]", "description": "open back unrounded vowel" },
        { "ipa": "o", "example": "波 bō (wave)", "highlighted": "b[ō]", "description": "close-mid back rounded vowel" },
        { "ipa": "ɤ", "example": "饿 è (hungry)", "highlighted": "[è]", "description": "close-mid back unrounded vowel" },
        { "ipa": "i", "example": "一 yī (one)", "highlighted": "y[ī]", "description": "close front unrounded vowel" },
        { "ipa": "u", "example": "五 wǔ (five)", "highlighted": "w[ǔ]", "description": "close back rounded vowel" },
        { "ipa": "y", "example": "鱼 yú (fish)", "highlighted": "y[ú]", "description": "close front rounded vowel" },
        
        // Diphthongs
        { "ipa": "ai", "example": "爱 ài (love)", "highlighted": "[ài]", "description": "diphthong: a + i" },
        { "ipa": "ei", "example": "北 běi (north)", "highlighted": "b[ěi]", "description": "diphthong: e + i" },
        { "ipa": "au", "example": "高 gāo (high)", "highlighted": "g[āo]", "description": "diphthong: a + u" },
        { "ipa": "ou", "example": "口 kǒu (mouth)", "highlighted": "k[ǒu]", "description": "diphthong: o + u" },
        { "ipa": "ia", "example": "鸭 yā (duck)", "highlighted": "y[ā]", "description": "i + a combination" },
        { "ipa": "ie", "example": "谢 xiè (thank)", "highlighted": "xi[è]", "description": "i + e combination" },
        
        // Nasal finals
        { "ipa": "an", "example": "安 ān (safe)", "highlighted": "[ān]", "description": "vowel + alveolar nasal" },
        { "ipa": "ən", "example": "恩 ēn (grace)", "highlighted": "[ēn]", "description": "schwa + alveolar nasal" },
        { "ipa": "aŋ", "example": "昂 áng (high)", "highlighted": "[áng]", "description": "vowel + velar nasal" },
        { "ipa": "əŋ", "example": "鞥 ēng (interj.)", "highlighted": "[ēng]", "description": "schwa + velar nasal" },
        { "ipa": "in", "example": "因 yīn (cause)", "highlighted": "y[īn]", "description": "i + alveolar nasal" },
        { "ipa": "iŋ", "example": "英 yīng (hero)", "highlighted": "y[īng]", "description": "i + velar nasal" },
        { "ipa": "un", "example": "温 wēn (warm)", "highlighted": "w[ēn]", "description": "u + alveolar nasal" },
        { "ipa": "yn", "example": "云 yún (cloud)", "highlighted": "y[ún]", "description": "ü + alveolar nasal" },
        { "ipa": "ʊŋ", "example": "翁 wēng (old man)", "highlighted": "w[ēng]", "description": "u + velar nasal (ong)" },
        { "ipa": "yʊŋ", "example": "穷 qióng (poor)", "highlighted": "qi[óng]", "description": "ü + velar nasal (iong)" },
        { "ipa": "ian", "example": "言 yán (speak)", "highlighted": "y[án]", "description": "i + a + n" },
        { "ipa": "uan", "example": "弯 wān (bend)", "highlighted": "w[ān]", "description": "u + a + n" },
        
        // Triphthongs and specials
        { "ipa": "yɛ", "example": "月 yuè (month)", "highlighted": "[yuè]", "description": "ü + e combination" },
        { "ipa": "yɛn", "example": "远 yuǎn (far)", "highlighted": "yu[ǎn]", "description": "ü + e + n (üan)" },
        { "ipa": "iaŋ", "example": "羊 yáng (sheep)", "highlighted": "y[áng]", "description": "i + a + ng" },
        { "ipa": "uaŋ", "example": "王 wáng (king)", "highlighted": "w[áng]", "description": "u + a + ng" },
        { "ipa": "ua", "example": "瓜 guā (melon)", "highlighted": "gu[ā]", "description": "u + a combination" },
        { "ipa": "iau", "example": "腰 yāo (waist)", "highlighted": "y[āo]", "description": "i + a + u combination" },
        { "ipa": "iou", "example": "优 yōu (excellent)", "highlighted": "y[ōu]", "description": "i + o + u combination" },
        { "ipa": "uai", "example": "歪 wāi (crooked)", "highlighted": "w[āi]", "description": "u + a + i combination" },
        { "ipa": "uei", "example": "为 wèi (for)", "highlighted": "w[èi]", "description": "u + e + i combination" },
        { "ipa": "ɚ", "example": "二 èr (two)", "highlighted": "è[r]", "description": "r-colored vowel" },
        { "ipa": "ŋ̍", "example": "嗯 ńg (hmm)", "highlighted": "[ńg]", "description": "syllabic velar nasal" }
      ]
    },
    {
      "title": "Tones (声调)",
      "subtitle": "Same syllable, different meanings (demonstrated with \"ma\")",
      "category": "tone",
      "list": [
        { "ipa": "mā", "example": "妈 mā (mother)", "description": "first tone - high level" },
        { "ipa": "má", "example": "麻 má (hemp)", "description": "second tone - rising" },
        { "ipa": "mǎ", "example": "马 mǎ (horse)", "description": "third tone - dipping" },
        { "ipa": "mà", "example": "骂 mà (scold)", "description": "fourth tone - falling" },
        { "ipa": "ma", "example": "吗 ma (question particle)", "description": "neutral tone - unstressed" }
      ]
    }
  ]
},

"japanese": {
  "name": "Japanese (Tokyo)",
  "flag": "🇯🇵",
  "defaultVoice": "female",
  "sections": [
    {
      "title": "Vowels",
      "subtitle": "Five vowel phonemes",
      "category": "vowel",
      "list": [
        { "ipa": "a", "example": "あか aka", "highlighted": "[a]ka", "description": "open front unrounded vowel" },
        { "ipa": "i", "example": "いぬ inu", "highlighted": "[i]nu", "description": "close front unrounded vowel" },
        { "ipa": "ɯ", "example": "うま uma", "highlighted": "[u]ma", "description": "close back unrounded vowel" },
        { "ipa": "e", "example": "えき eki", "highlighted": "[e]ki", "description": "mid front unrounded vowel" },
        { "ipa": "o", "example": "おか oka", "highlighted": "[o]ka", "description": "mid back rounded vowel" }
      ]
    },
    {
      "title": "Long Vowels",
      "subtitle": "Phonemic length distinction",
      "category": "vowel",
      "list": [
        { "ipa": "aː", "example": "おかあさん okaasan", "highlighted": "ok[aa]san", "description": "long open front vowel" },
        { "ipa": "iː", "example": "おにいさん oniisan", "highlighted": "on[ii]san", "description": "long close front vowel" },
        { "ipa": "ɯː", "example": "すうじ suuji", "highlighted": "s[uu]ji", "description": "long close back unrounded vowel" },
        { "ipa": "eː", "example": "せんせい sensee", "highlighted": "sens[ee]", "description": "long mid front vowel" },
        { "ipa": "oː", "example": "そう soo", "highlighted": "s[oo]", "description": "long mid back rounded vowel" }
      ]
    },
    {
      "title": "Stops",
      "subtitle": "Organized by voicing",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "ぱん pan", "highlighted": "[p]an", "needsSchwa": true, "description": "voiceless bilabial stop" },
        { "ipa": "t", "example": "たこ tako", "highlighted": "[t]ako", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "k", "example": "かき kaki", "highlighted": "[k]aki", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "b", "example": "ばん ban", "highlighted": "[b]an", "description": "voiced bilabial stop" },
        { "ipa": "d", "example": "だれ dare", "highlighted": "[d]are", "description": "voiced alveolar stop" },
        { "ipa": "g", "example": "がく gaku", "highlighted": "[g]aku", "description": "voiced velar stop" }
      ]
    },
    {
      "title": "Affricates",
      "subtitle": "Organized by voicing",
      "category": "consonant",
      "list": [
        { "ipa": "ts", "example": "つき tsuki", "highlighted": "[ts]uki", "needsSchwa": true, "description": "voiceless alveolar affricate" },
        { "ipa": "tɕ", "example": "ちず chizu", "highlighted": "[ch]izu", "needsSchwa": true, "description": "voiceless alveolo-palatal affricate" },
        { "ipa": "dz", "example": "つづく tsuzuku", "highlighted": "tsu[dz]uku", "description": "voiced alveolar affricate" },
        { "ipa": "dʑ", "example": "じかん jikan", "highlighted": "[j]ikan", "description": "voiced alveolo-palatal affricate" }
      ]
    },
    {
      "title": "Fricatives",
      "subtitle": "Various positions",
      "category": "consonant",
      "list": [
        { "ipa": "ɸ", "example": "ふね fune", "highlighted": "[f]une", "description": "voiceless bilabial fricative" },
        { "ipa": "s", "example": "さけ sake", "highlighted": "[s]ake", "description": "voiceless alveolar fricative" },
        { "ipa": "ɕ", "example": "しお shio", "highlighted": "[sh]io", "description": "voiceless alveolo-palatal fricative" },
        { "ipa": "ç", "example": "ひと hito", "highlighted": "[h]ito", "description": "voiceless palatal fricative" },
        { "ipa": "h", "example": "はな hana", "highlighted": "[h]ana", "description": "voiceless glottal fricative" },
        { "ipa": "z", "example": "ざる zaru", "highlighted": "[z]aru", "description": "voiced alveolar fricative" },
        { "ipa": "ʑ", "example": "じしょ jisho", "highlighted": "[j]isho", "description": "voiced alveolo-palatal fricative" }
      ]
    },
    {
      "title": "Nasals",
      "subtitle": "Including moraic nasal",
      "category": "consonant",
      "list": [
        { "ipa": "m", "example": "まめ mame", "highlighted": "[m]ame", "description": "bilabial nasal" },
        { "ipa": "n", "example": "なに nani", "highlighted": "[n]ani", "description": "alveolar nasal" },
        { "ipa": "ɲ", "example": "にゃ nya", "highlighted": "[ny]a", "description": "palatal nasal" },
        { "ipa": "ɴ", "example": "ほん hon", "highlighted": "ho[n]", "description": "uvular nasal (moraic ん)" },
        { "ipa": "m", "example": "さんぽ sanpo", "highlighted": "sa[n]po", "description": "bilabial (moraic ん before p/b)" },
        { "ipa": "n", "example": "さんだる sandaru", "highlighted": "sa[n]daru", "description": "alveolar (moraic ん before t/d/n)" },
        { "ipa": "ŋ", "example": "さんが sanga", "highlighted": "sa[n]ga", "description": "velar (moraic ん before k/g)" }
      ]
    },
    {
      "title": "Liquids & Approximants",
      "subtitle": "Sonorants",
      "category": "consonant",
      "list": [
        { "ipa": "ɾ", "example": "らく raku", "highlighted": "[r]aku", "description": "alveolar tap" },
        { "ipa": "j", "example": "やま yama", "highlighted": "[y]ama", "description": "palatal approximant" },
        { "ipa": "w", "example": "わに wani", "highlighted": "[w]ani", "description": "labial-velar approximant" }
      ]
    },
    {
      "title": "Geminate Consonants",
      "subtitle": "Sokuon (っ) - phonemic length",
      "category": "consonant",
      "list": [
        { "ipa": "kː", "example": "がっこう gakkou", "highlighted": "ga[kk]ou", "description": "long voiceless velar stop" },
        { "ipa": "tː", "example": "まった matta", "highlighted": "ma[tt]a", "description": "long voiceless alveolar stop" },
        { "ipa": "pː", "example": "いっぱい ippai", "highlighted": "i[pp]ai", "description": "long voiceless bilabial stop" },
        { "ipa": "sː", "example": "ずっと zutto", "highlighted": "zu[tt]o", "description": "long voiceless alveolar fricative" }
      ]
    }
  ]
},

"arabic": {
  "name": "Arabic (MSA)",
  "flag": "🇸🇦",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Short Vowels (حركات)",
      "subtitle": "Three basic vowels",
      "category": "vowel",
      "list": [
        { "ipa": "a", "example": "كتب kataba", "highlighted": "k[a]taba", "description": "open front unrounded vowel" },
        { "ipa": "i", "example": "بنت bint", "highlighted": "b[i]nt", "description": "close front unrounded vowel" },
        { "ipa": "u", "example": "كتب kutiba", "highlighted": "k[u]tiba", "description": "close back rounded vowel" }
      ]
    },
    {
      "title": "Long Vowels",
      "subtitle": "Extended vowel duration",
      "category": "vowel",
      "list": [
        { "ipa": "aː", "example": "باب baab", "highlighted": "b[aa]b", "description": "long open front vowel" },
        { "ipa": "iː", "example": "كبير kabiir", "highlighted": "kab[ii]r", "description": "long close front vowel" },
        { "ipa": "uː", "example": "نور nuur", "highlighted": "n[uu]r", "description": "long close back vowel" }
      ]
    },
    {
      "title": "Plain Stops & Affricates",
      "subtitle": "Non-emphatic consonants",
      "category": "consonant",
      "list": [
        { "ipa": "b", "example": "باب baab", "highlighted": "[b]aab", "description": "voiced bilabial stop" },
        { "ipa": "t", "example": "تين tiin", "highlighted": "[t]iin", "needsSchwa": true, "description": "voiceless alveolar stop" },
        { "ipa": "d", "example": "دار daar", "highlighted": "[d]aar", "description": "voiced alveolar stop" },
        { "ipa": "k", "example": "كتب kataba", "highlighted": "[k]ataba", "needsSchwa": true, "description": "voiceless velar stop" },
        { "ipa": "q", "example": "قلب qalb", "highlighted": "[q]alb", "needsSchwa": true, "description": "voiceless uvular stop" },
        { "ipa": "dʒ", "example": "جمال dʒamal", "highlighted": "[dʒ]amal", "description": "voiced postalveolar affricate" },
        { "ipa": "ʔ", "example": "أسد ʔasad", "highlighted": "[ʔ]asad", "description": "glottal stop" }
      ]
    },
    {
      "title": "Emphatic Consonants",
      "subtitle": "Pharyngealized (velarized)",
      "category": "consonant",
      "list": [
        { "ipa": "tˤ", "example": "طير tˤayr", "highlighted": "[tˤ]ayr", "needsSchwa": true, "description": "voiceless pharyngealized alveolar stop" },
        { "ipa": "dˤ", "example": "ضرب dˤarab", "highlighted": "[dˤ]arab", "description": "voiced pharyngealized alveolar stop" },
        { "ipa": "sˤ", "example": "صبر sˤabr", "highlighted": "[sˤ]abr", "description": "voiceless pharyngealized alveolar fricative" },
        { "ipa": "ðˤ", "example": "ظهر ðˤahr", "highlighted": "[ðˤ]ahr", "description": "voiced pharyngealized dental fricative" }
      ]
    },
    {
      "title": "Fricatives",
      "subtitle": "Various positions",
      "category": "consonant",
      "list": [
        { "ipa": "f", "example": "فم fam", "highlighted": "[f]am", "description": "voiceless labiodental fricative" },
        { "ipa": "θ", "example": "ثلج θalj", "highlighted": "[θ]alj", "description": "voiceless dental fricative" },
        { "ipa": "ð", "example": "ذهب ðahab", "highlighted": "[ð]ahab", "description": "voiced dental fricative" },
        { "ipa": "s", "example": "سمك samak", "highlighted": "[s]amak", "description": "voiceless alveolar fricative" },
        { "ipa": "z", "example": "زيت zayt", "highlighted": "[z]ayt", "description": "voiced alveolar fricative" },
        { "ipa": "ʃ", "example": "شمس ʃams", "highlighted": "[ʃ]ams", "description": "voiceless postalveolar fricative" },
        { "ipa": "h", "example": "هواء hawaʔ", "highlighted": "[h]awaʔ", "description": "voiceless glottal fricative" }
      ]
    },
    {
      "title": "Pharyngeal & Uvular",
      "subtitle": "Back consonants",
      "category": "consonant",
      "list": [
        { "ipa": "x", "example": "خبز xubz", "highlighted": "[x]ubz", "description": "voiceless uvular fricative" },
        { "ipa": "ɣ", "example": "غرب ɣarb", "highlighted": "[ɣ]arb", "description": "voiced uvular fricative" },
        { "ipa": "ħ", "example": "حب ħubb", "highlighted": "[ħ]ubb", "description": "voiceless pharyngeal fricative" },
        { "ipa": "ʕ", "example": "عين ʕayn", "highlighted": "[ʕ]ayn", "description": "voiced pharyngeal fricative" }
      ]
    },
    {
      "title": "Sonorants",
      "subtitle": "Nasals, liquids, approximants",
      "category": "consonant",
      "list": [
        { "ipa": "m", "example": "ماء maaʔ", "highlighted": "[m]aaʔ", "description": "bilabial nasal" },
        { "ipa": "n", "example": "نار naar", "highlighted": "[n]aar", "description": "alveolar nasal" },
        { "ipa": "l", "example": "ليل layl", "highlighted": "[l]ayl", "description": "alveolar lateral approximant" },
        { "ipa": "r", "example": "رأس raʔs", "highlighted": "[r]aʔs", "description": "alveolar trill" },
        { "ipa": "j", "example": "يد yad", "highlighted": "[y]ad", "description": "palatal approximant" },
        { "ipa": "w", "example": "ورد ward", "highlighted": "[w]ard", "description": "labial-velar approximant" }
      ]
    }
  ]
},

"hindi": {
  "name": "Hindi (Standard)",
  "flag": "🇮🇳",
  "defaultVoice": "male",
  "sections": [
    {
      "title": "Vowels (स्वर)",
      "subtitle": "Short and long vowels",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "इति iti", "highlighted": "[i]ti", "description": "close front unrounded vowel (short)" },
        { "ipa": "iː", "example": "ईश्वर iːʃwar", "highlighted": "[iː]ʃwar", "description": "close front unrounded vowel (long)" },
        { "ipa": "u", "example": "उठा uʈʰaː", "highlighted": "[u]ʈʰaː", "description": "close back rounded vowel (short)" },
        { "ipa": "uː", "example": "ऊंचा uːnʧaː", "highlighted": "[uː]nʧaː", "description": "close back rounded vowel (long)" },
        { "ipa": "eː", "example": "एक eːk", "highlighted": "[eː]k", "description": "close-mid front unrounded vowel" },
        { "ipa": "oː", "example": "ओखली oːkhli", "highlighted": "[oː]khli", "description": "close-mid back rounded vowel" },
        { "ipa": "ɛː", "example": "ऐनक ɛːnak", "highlighted": "[ɛː]nak", "description": "open-mid front unrounded vowel" },
        { "ipa": "ɔː", "example": "औरत ɔːrat", "highlighted": "[ɔː]rat", "description": "open-mid back rounded vowel" },
        { "ipa": "ə", "example": "अगर əgar", "highlighted": "[ə]gar", "description": "mid central vowel (schwa)" },
        { "ipa": "aː", "example": "आम aːm", "highlighted": "[aː]m", "description": "open central unrounded vowel (long)" }
      ]
    },
    {
      "title": "Stops (स्पर्श व्यंजन)",
      "subtitle": "Four-way distinction: voicing × aspiration",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "पानी paːniː", "highlighted": "[p]aːniː", "needsSchwa": true, "description": "voiceless bilabial stop (unaspirated)" },
        { "ipa": "t̪", "example": "ताज t̪aːdʒ", "highlighted": "[t̪]aːdʒ", "needsSchwa": true, "description": "voiceless dental stop (unaspirated)" },
        { "ipa": "ʈ", "example": "टोपी ʈoːpiː", "highlighted": "[ʈ]oːpiː", "needsSchwa": true, "description": "voiceless retroflex stop (unaspirated)" },
        { "ipa": "c", "example": "चाय caːj", "highlighted": "[c]aːj", "needsSchwa": true, "description": "voiceless palatal stop (unaspirated)" },
        { "ipa": "k", "example": "काम kaːm", "highlighted": "[k]aːm", "needsSchwa": true, "description": "voiceless velar stop (unaspirated)" },
        { "ipa": "pʰ", "example": "फल pʰal", "highlighted": "[pʰ]al", "needsSchwa": true, "description": "voiceless bilabial stop (aspirated)" },
        { "ipa": "t̪ʰ", "example": "थाली t̪ʰaːliː", "highlighted": "[t̪ʰ]aːliː", "needsSchwa": true, "description": "voiceless dental stop (aspirated)" },
        { "ipa": "ʈʰ", "example": "ठंडा ʈʰəɳɖaː", "highlighted": "[ʈʰ]əɳɖaː", "needsSchwa": true, "description": "voiceless retroflex stop (aspirated)" },
        { "ipa": "cʰ", "example": "छत cʰət", "highlighted": "[cʰ]ət", "needsSchwa": true, "description": "voiceless palatal stop (aspirated)" },
        { "ipa": "kʰ", "example": "खाना kʰaːnaː", "highlighted": "[kʰ]aːnaː", "needsSchwa": true, "description": "voiceless velar stop (aspirated)" },
        { "ipa": "b", "example": "बड़ा bəɽaː", "highlighted": "[b]əɽaː", "description": "voiced bilabial stop (unaspirated)" },
        { "ipa": "d̪", "example": "दाल d̪aːl", "highlighted": "[d̪]aːl", "description": "voiced dental stop (unaspirated)" },
        { "ipa": "ɖ", "example": "डाल ɖaːl", "highlighted": "[ɖ]aːl", "description": "voiced retroflex stop (unaspirated)" },
        { "ipa": "ɟ", "example": "जल ɟəl", "highlighted": "[ɟ]əl", "description": "voiced palatal stop (unaspirated)" },
        { "ipa": "g", "example": "गाना gaːnaː", "highlighted": "[g]aːnaː", "description": "voiced velar stop (unaspirated)" },
        { "ipa": "bʱ", "example": "भाई bʱaːiː", "highlighted": "[bʱ]aːiː", "description": "voiced bilabial stop (aspirated)" },
        { "ipa": "d̪ʱ", "example": "धन d̪ʱən", "highlighted": "[d̪ʱ]ən", "description": "voiced dental stop (aspirated)" },
        { "ipa": "ɖʱ", "example": "ढोल ɖʱoːl", "highlighted": "[ɖʱ]oːl", "description": "voiced retroflex stop (aspirated)" },
        { "ipa": "ɟʱ", "example": "झील ɟʱiːl", "highlighted": "[ɟʱ]iːl", "description": "voiced palatal stop (aspirated)" },
        { "ipa": "gʱ", "example": "घर gʱər", "highlighted": "[gʱ]ər", "description": "voiced velar stop (aspirated)" }
      ]
    },
    {
      "title": "Nasals (नासिक्य)",
      "subtitle": "Five places of articulation",
      "category": "consonant",
      "list": [
        { "ipa": "m", "example": "माता maːt̪aː", "highlighted": "[m]aːt̪aː", "description": "bilabial nasal" },
        { "ipa": "n", "example": "नाक naːk", "highlighted": "[n]aːk", "description": "dental nasal" },
        { "ipa": "ɳ", "example": "पानी paːɳiː", "highlighted": "paː[ɳ]iː", "description": "retroflex nasal" },
        { "ipa": "ɲ", "example": "ज्ञान ɡjaːn", "highlighted": "ɡ[ɲ]aːn", "description": "palatal nasal" },
        { "ipa": "ŋ", "example": "रंग rəŋɡ", "highlighted": "rə[ŋ]ɡ", "description": "velar nasal" }
      ]
    },
    {
      "title": "Fricatives & Approximants",
      "subtitle": "Sonorants and continuants",
      "category": "consonant",
      "list": [
        { "ipa": "s", "example": "साथ saːt̪ʰ", "highlighted": "[s]aːt̪ʰ", "description": "voiceless alveolar fricative" },
        { "ipa": "ʃ", "example": "शहर ʃəɦər", "highlighted": "[ʃ]əɦər", "description": "voiceless postalveolar fricative" },
        { "ipa": "ɦ", "example": "हाथ ɦaːt̪ʰ", "highlighted": "[ɦ]aːt̪ʰ", "description": "voiced glottal fricative" },
        { "ipa": "l", "example": "लाल laːl", "highlighted": "[l]aːl", "description": "alveolar lateral approximant" },
        { "ipa": "r", "example": "राम raːm", "highlighted": "[r]aːm", "description": "alveolar trill" },
        { "ipa": "ɽ", "example": "बड़ा bəɽaː", "highlighted": "bə[ɽ]aː", "description": "retroflex flap" },
        { "ipa": "j", "example": "यह jəɦ", "highlighted": "[j]əɦ", "description": "palatal approximant" },
        { "ipa": "ʋ", "example": "वह ʋəɦ", "highlighted": "[ʋ]əɦ", "description": "labiodental approximant" }
      ]
    }
  ]
},

"korean": {
  "name": "Korean (Seoul)",
  "flag": "🇰🇷",
  "defaultVoice": "female",
  "sections": [
    {
      "title": "Vowels (모음)",
      "subtitle": "Monophthongs",
      "category": "vowel",
      "list": [
        { "ipa": "i", "example": "이 i", "highlighted": "[i]", "description": "close front unrounded vowel" },
        { "ipa": "e", "example": "에 e", "highlighted": "[e]", "description": "mid front unrounded vowel" },
        { "ipa": "ɛ", "example": "애 ɛ", "highlighted": "[ɛ]", "description": "open-mid front unrounded vowel" },
        { "ipa": "a", "example": "아 a", "highlighted": "[a]", "description": "open front unrounded vowel" },
        { "ipa": "ʌ", "example": "어 ʌ", "highlighted": "[ʌ]", "description": "open-mid back unrounded vowel" },
        { "ipa": "o", "example": "오 o", "highlighted": "[o]", "description": "mid back rounded vowel" },
        { "ipa": "u", "example": "우 u", "highlighted": "[u]", "description": "close back rounded vowel" },
        { "ipa": "ɯ", "example": "으 ɯ", "highlighted": "[ɯ]", "description": "close back unrounded vowel" },
        { "ipa": "we", "example": "웨 we", "highlighted": "[we]", "description": "diphthong: w + e" },
        { "ipa": "wɛ", "example": "왜 wɛ", "highlighted": "[wɛ]", "description": "diphthong: w + ɛ" },
        { "ipa": "wa", "example": "와 wa", "highlighted": "[wa]", "description": "diphthong: w + a" },
        { "ipa": "wʌ", "example": "워 wʌ", "highlighted": "[wʌ]", "description": "diphthong: w + ʌ" },
        { "ipa": "ø", "example": "외 ø", "highlighted": "[ø]", "description": "mid front rounded vowel" },
        { "ipa": "y", "example": "위 y", "highlighted": "[y]", "description": "close front rounded vowel" }
      ]
    },
    {
      "title": "Stops (파열음)",
      "subtitle": "Three-way distinction: lenis/aspirated/fortis",
      "category": "consonant",
      "list": [
        { "ipa": "p", "example": "바다 pada", "highlighted": "[p]ada", "description": "lenis bilabial stop" },
        { "ipa": "pʰ", "example": "파도 pʰado", "highlighted": "[pʰ]ado", "needsSchwa": true, "description": "aspirated bilabial stop" },
        { "ipa": "p͈", "example": "빠다 p͈ada", "highlighted": "[p͈]ada", "needsSchwa": true, "description": "fortis bilabial stop" },
        { "ipa": "t", "example": "다리 tari", "highlighted": "[t]ari", "description": "lenis alveolar stop" },
        { "ipa": "tʰ", "example": "타다 tʰada", "highlighted": "[tʰ]ada", "needsSchwa": true, "description": "aspirated alveolar stop" },
        { "ipa": "t͈", "example": "따다 t͈ada", "highlighted": "[t͈]ada", "needsSchwa": true, "description": "fortis alveolar stop" },
        { "ipa": "k", "example": "가다 kada", "highlighted": "[k]ada", "description": "lenis velar stop" },
        { "ipa": "kʰ", "example": "카드 kʰadɯ", "highlighted": "[kʰ]adɯ", "needsSchwa": true, "description": "aspirated velar stop" },
        { "ipa": "k͈", "example": "까다 k͈ada", "highlighted": "[k͈]ada", "needsSchwa": true, "description": "fortis velar stop" }
      ]
    },
    {
      "title": "Affricates (파찰음)",
      "subtitle": "Three-way distinction",
      "category": "consonant",
      "list": [
        { "ipa": "tɕ", "example": "자다 tɕada", "highlighted": "[tɕ]ada", "description": "lenis alveolopalatal affricate" },
        { "ipa": "tɕʰ", "example": "차다 tɕʰada", "highlighted": "[tɕʰ]ada", "needsSchwa": true, "description": "aspirated alveolopalatal affricate" },
        { "ipa": "t͈ɕ", "example": "짜다 t͈ɕada", "highlighted": "[t͈ɕ]ada", "needsSchwa": true, "description": "fortis alveolopalatal affricate" }
      ]
    },
    {
      "title": "Fricatives (마찰음)",
      "subtitle": "Plain and fortis",
      "category": "consonant",
      "list": [
        { "ipa": "s", "example": "사다 sada", "highlighted": "[s]ada", "description": "lenis alveolar fricative" },
        { "ipa": "s͈", "example": "싸다 s͈ada", "highlighted": "[s͈]ada", "description": "fortis alveolar fricative" },
        { "ipa": "h", "example": "하다 hada", "highlighted": "[h]ada", "description": "voiceless glottal fricative" }
      ]
    },
    {
      "title": "Sonorants (공명음)",
      "subtitle": "Nasals, liquids, approximants",
      "category": "consonant",
      "list": [
        { "ipa": "m", "example": "마다 mada", "highlighted": "[m]ada", "description": "bilabial nasal" },
        { "ipa": "n", "example": "나다 nada", "highlighted": "[n]ada", "description": "alveolar nasal" },
        { "ipa": "ŋ", "example": "강 kaŋ", "highlighted": "ka[ŋ]", "description": "velar nasal" },
        { "ipa": "l", "example": "라디오 ladio", "highlighted": "[l]adio", "description": "alveolar lateral approximant" },
        { "ipa": "ɾ", "example": "가리 kaɾi", "highlighted": "ka[ɾ]i", "description": "alveolar tap (intervocalic)" }
      ]
    }
  ]
},

};

