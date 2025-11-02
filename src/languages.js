export const LANGUAGE_DATA = {
  english: {
  name: 'English (British RP)',
  flag: '🇬🇧',
  defaultVoice: 'male',
  sections: [
    {
      title: 'Monophthongs',
      subtitle: 'Arranged by tongue position',
      category: "vowel",
      cols: 5,
      grid: [
        // High vowels
        [
          { ipa: 'iː', example: 'heat', highlighted: 'h[ea]t', description: 'close front unrounded vowel' },
          { ipa: 'ɪ', example: 'hit', highlighted: 'h[i]t', description: 'near-close front unrounded vowel' },
          null,
          { ipa: 'ʊ', example: 'put', highlighted: 'p[u]t', description: 'near-close back rounded vowel' },
          { ipa: 'uː', example: 'pool', highlighted: 'p[oo]l', description: 'close back rounded vowel' },
        ],
        // Mid vowels
        [
          { ipa: 'e', example: 'bread', highlighted: 'br[ea]d', description: 'mid front unrounded vowel' },
          null,
          { ipa: 'ə', example: 'about', highlighted: '[a]bout', description: 'mid central vowel (schwa)' },
          { ipa: 'ɜː', example: 'world', highlighted: 'w[or]ld', description: 'open-mid central unrounded vowel' },
          { ipa: 'ɔː', example: 'horse', highlighted: 'h[or]se', description: 'open-mid back rounded vowel' },
        ],
        // Low vowels
        [
          { ipa: 'æ', example: 'bat', highlighted: 'b[a]t', description: 'near-open front unrounded vowel' },
          null,
          { ipa: 'ʌ', example: 'cup', highlighted: 'c[u]p', description: 'open-mid back unrounded vowel' },
          { ipa: 'aː', example: 'bar', highlighted: 'b[ar]', description: 'open back unrounded vowel' },
          { ipa: 'ɒ', example: 'hot', highlighted: 'h[o]t', description: 'open back rounded vowel' },
        ],
      ],
    },
    {
      title: 'Diphthongs',
      subtitle: 'Grouped by glide target',
      category: "diphthong",
      cols: 3,
      grid: [
        [
          { ipa: 'eɪ', example: 'late', highlighted: 'l[a]te', description: 'closing diphthong to [ɪ]' },
          { ipa: 'aɪ', example: 'why', highlighted: 'wh[y]', description: 'closing diphthong to [ɪ]' },
          { ipa: 'ɔɪ', example: 'toy', highlighted: 't[oy]', description: 'closing diphthong to [ɪ]' },
        ],
        [
          { ipa: 'əʊ', example: 'blow', highlighted: 'bl[ow]', description: 'closing diphthong to [ʊ]' },
          { ipa: 'aʊ', example: 'how', highlighted: 'h[ow]', description: 'closing diphthong to [ʊ]' },
          null,
        ],
        [
          { ipa: 'ɪə', example: 'here', highlighted: 'h[ere]', description: 'centering diphthong' },
          { ipa: 'eə', example: 'there', highlighted: 'th[ere]', description: 'centering diphthong' },
          { ipa: 'ʊə', example: 'tour', highlighted: 't[our]', description: 'centering diphthong' },
        ],
      ],
    },
    {
      title: 'Consonants',
      subtitle: 'Organized by place and voicing',
      category: "consonant",
      cols: 9,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: 'p', example: 'pick', highlighted: '[p]ick', needsSchwa: true, description: 'voiceless bilabial stop' },
            { ipa: 't', example: 'tango', highlighted: '[t]ango', needsSchwa: true, description: 'voiceless alveolar stop' },
            { ipa: 'k', example: 'kilo', highlighted: '[k]ilo', needsSchwa: true, description: 'voiceless velar stop' },
            { ipa: 'tʃ', example: 'choose', highlighted: '[ch]oose', needsSchwa: true, description: 'voiceless postalveolar affricate' },
            { ipa: 'f', example: 'fly', highlighted: '[f]ly', needsSchwa: true, description: 'voiceless labiodental fricative' },
            { ipa: 'θ', example: 'thank', highlighted: '[th]ank', needsSchwa: true, description: 'voiceless dental fricative' },
            { ipa: 's', example: 'stay', highlighted: '[s]tay', needsSchwa: true, description: 'voiceless alveolar fricative' },
            { ipa: 'ʃ', example: 'ship', highlighted: '[sh]ip', needsSchwa: true, description: 'voiceless postalveolar fricative' },
            { ipa: 'h', example: 'high', highlighted: '[h]igh', needsSchwa: true, description: 'voiceless glottal fricative' },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: 'b', example: 'band', highlighted: '[b]and', needsSchwa: true, description: 'voiced bilabial stop' },
            { ipa: 'd', example: 'dark', highlighted: '[d]ark', needsSchwa: true, description: 'voiced alveolar stop' },
            { ipa: 'g', example: 'good', highlighted: '[g]ood', needsSchwa: true, description: 'voiced velar stop' },
            { ipa: 'dʒ', example: 'job', highlighted: '[j]ob', needsSchwa: true, description: 'voiced postalveolar affricate' },
            { ipa: 'v', example: 'victor', highlighted: '[v]ictor', needsSchwa: true, description: 'voiced labiodental fricative' },
            { ipa: 'ð', example: 'these', highlighted: '[th]ese', needsSchwa: true, description: 'voiced dental fricative' },
            { ipa: 'z', example: 'zulu', highlighted: '[z]ulu', needsSchwa: true, description: 'voiced alveolar fricative' },
            { ipa: 'ʒ', example: 'pleasure', highlighted: 'plea[s]ure', needsSchwa: true, description: 'voiced postalveolar fricative' },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: 'm', example: 'mike', highlighted: '[m]ike', needsSchwa: true, description: 'bilabial nasal' },
            { ipa: 'n', example: 'november', highlighted: '[n]ovember', needsSchwa: true, description: 'alveolar nasal' },
            { ipa: 'ŋ', example: 'bring', highlighted: 'bri[ng]', description: 'velar nasal' },
            null,
            { ipa: 'w', example: 'wednesday', highlighted: '[w]ednesday', needsSchwa: true, description: 'labial-velar approximant' },
            null,
            { ipa: 'l', example: 'london', highlighted: '[l]ondon', needsSchwa: true, description: 'alveolar lateral approximant' },
            { ipa: 'r', example: 'robert', highlighted: '[r]obert', needsSchwa: true, description: 'alveolar approximant' },
            { ipa: 'j', example: 'yankee', highlighted: '[y]ankee', needsSchwa: true, description: 'palatal approximant' },
          ],
        },
      ],
    },
  ],
},
  
american_english: {
  name: "English (General American)",
  flag: "🇺🇸",
  sections: [
    {
      title: "Monophthongs",
      subtitle: "Arranged by tongue position",
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: "i", example: "heat", highlighted: "h[ea]t", description: "close front unrounded vowel" },
          { ipa: "ɪ", example: "hit", highlighted: "h[i]t", description: "near-close front unrounded vowel" },
          null,
          { ipa: "ʊ", example: "put", highlighted: "p[u]t", description: "near-close back rounded vowel" },
          { ipa: "u", example: "pool", highlighted: "p[oo]l", description: "close back rounded vowel" },
        ],
        [
          { ipa: "e", example: "bread", highlighted: "br[ea]d", description: "mid front unrounded vowel" },
          { ipa: "ɛ", example: "bet", highlighted: "b[e]t", description: "open-mid front unrounded vowel" },
          { ipa: "ə", example: "about", highlighted: "[a]bout", description: "mid central vowel (schwa)" },
          { ipa: "ʌ", example: "cup", highlighted: "c[u]p", description: "open-mid back unrounded vowel" },
          { ipa: "o", example: "boat", highlighted: "b[oa]t", description: "mid back rounded vowel" },
        ],
        [
          { ipa: "æ", example: "cat", highlighted: "c[a]t", description: "near-open front unrounded vowel" },
          { ipa: "ɑ", example: "father", highlighted: "f[a]ther", description: "open back unrounded vowel" },
          null,
          { ipa: "ɔ", example: "caught", highlighted: "c[augh]t", description: "open-mid back rounded vowel" },
          { ipa: "ɚ", example: "bird", highlighted: "b[ir]d", description: "r-colored schwa" },
        ],
      ],
    },
    {
      title: "Diphthongs",
      subtitle: "Gliding vowel combinations",
      category: "diphthong",
      cols: 3,
      grid: [
        [
          { ipa: "eɪ", example: "late", highlighted: "l[a]te", description: "closing diphthong to [ɪ]" },
          { ipa: "aɪ", example: "why", highlighted: "wh[y]", description: "closing diphthong to [ɪ]" },
          { ipa: "ɔɪ", example: "toy", highlighted: "t[oy]", description: "closing diphthong to [ɪ]" },
        ],
        [
          { ipa: "aʊ", example: "how", highlighted: "h[ow]", description: "closing diphthong to [ʊ]" },
          { ipa: "oʊ", example: "close", highlighted: "cl[o]se", description: "closing diphthong to [ʊ]" },
          null,
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by place and voicing",
      category: "consonant",
      cols: 9,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "p", example: "pick", highlighted: "[p]ick", needsSchwa: true, description: "voiceless bilabial stop" },
            { ipa: "t", example: "tango", highlighted: "[t]ango", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "k", example: "kilo", highlighted: "[k]ilo", needsSchwa: true, description: "voiceless velar stop" },
            { ipa: "tʃ", example: "church", highlighted: "[ch]urch", needsSchwa: true, description: "voiceless postalveolar affricate" },
            { ipa: "f", example: "fly", highlighted: "[f]ly", needsSchwa: true, description: "voiceless labiodental fricative" },
            { ipa: "θ", example: "thank", highlighted: "[th]ank", needsSchwa: true, description: "voiceless dental fricative" },
            { ipa: "s", example: "stay", highlighted: "[s]tay", needsSchwa: true, description: "voiceless alveolar fricative" },
            { ipa: "ʃ", example: "ship", highlighted: "[sh]ip", needsSchwa: true, description: "voiceless postalveolar fricative" },
            { ipa: "h", example: "high", highlighted: "[h]igh", needsSchwa: true, description: "voiceless glottal fricative" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "b", example: "bat", highlighted: "[b]at", needsSchwa: true, description: "voiced bilabial stop" },
            { ipa: "d", example: "dog", highlighted: "[d]og", needsSchwa: true, description: "voiced alveolar stop" },
            { ipa: "g", example: "go", highlighted: "[g]o", needsSchwa: true, description: "voiced velar stop" },
            { ipa: "dʒ", example: "job", highlighted: "[j]ob", needsSchwa: true, description: "voiced postalveolar affricate" },
            { ipa: "v", example: "victor", highlighted: "[v]ictor", needsSchwa: true, description: "voiced labiodental fricative" },
            { ipa: "ð", example: "this", highlighted: "[th]is", needsSchwa: true, description: "voiced dental fricative" },
            { ipa: "z", example: "zoo", highlighted: "[z]oo", needsSchwa: true, description: "voiced alveolar fricative" },
            { ipa: "ʒ", example: "measure", highlighted: "mea[s]ure", needsSchwa: true, description: "voiced postalveolar fricative" },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "mike", highlighted: "[m]ike", needsSchwa: true, description: "bilabial nasal" },
            { ipa: "n", example: "november", highlighted: "[n]ovember", needsSchwa: true, description: "alveolar nasal" },
            { ipa: "ŋ", example: "bring", highlighted: "bri[ng]", description: "velar nasal" },
            null,
            { ipa: "w", example: "wednesday", highlighted: "[w]ednesday", needsSchwa: true, description: "labial-velar approximant" },
            null,
            { ipa: "l", example: "london", highlighted: "[l]ondon", needsSchwa: true, description: "alveolar lateral approximant" },
            { ipa: "r", example: "robert", highlighted: "[r]obert", needsSchwa: true, description: "alveolar approximant" },
            { ipa: "j", example: "yankee", highlighted: "[y]ankee", needsSchwa: true, description: "palatal approximant" },
          ],
        },
      ],
    },
  ],
},


spanish: {
  name: 'Spanish (Castilian)',
  flag: '🇪🇸',
  sections: [
    {
      title: 'Vowels',
      subtitle: 'Five pure vowels',
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: 'i', example: 'sí', highlighted: 's[í]', description: 'close front unrounded vowel' },
          { ipa: 'e', example: 'mes', highlighted: 'm[e]s', description: 'mid front unrounded vowel' },
          { ipa: 'a', example: 'casa', highlighted: 'c[a]sa', description: 'open central unrounded vowel' },
          { ipa: 'o', example: 'sol', highlighted: 's[o]l', description: 'mid back rounded vowel' },
          { ipa: 'u', example: 'tú', highlighted: 't[ú]', description: 'close back rounded vowel' },
        ],
      ],
    },
    {
      title: 'Diphthongs',
      subtitle: 'Common vowel combinations',
      category: "diphthong",
      cols: 4,
      grid: [
        [
          { ipa: 'ai̯', example: 'baile', highlighted: 'b[ai]le', description: 'diphthong: a + i' },
          { ipa: 'ei̯', example: 'seis', highlighted: 's[ei]s', description: 'diphthong: e + i' },
          { ipa: 'oi̯', example: 'hoy', highlighted: 'h[oy]', description: 'diphthong: o + i' },
          { ipa: 'au̯', example: 'auto', highlighted: '[au]to', description: 'diphthong: a + u' },
        ],
        [
          { ipa: 'eu̯', example: 'Europa', highlighted: '[Eu]ropa', description: 'diphthong: e + u' },
          { ipa: 'ou̯', example: 'bou', highlighted: 'b[ou]', description: 'diphthong: o + u' },
          { ipa: 'ie', example: 'bien', highlighted: 'b[ie]n', description: 'rising diphthong' },
          { ipa: 'ue', example: 'bueno', highlighted: 'b[ue]no', description: 'rising diphthong' },
        ],
      ],
    },
    {
      title: 'Consonants',
      subtitle: 'Organized by place and voicing',
      category: "consonant",
      cols: 8,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: 'p', example: 'padre', highlighted: '[p]adre', needsSchwa: true, description: 'voiceless bilabial stop' },
            { ipa: 't', example: 'toro', highlighted: '[t]oro', needsSchwa: true, description: 'voiceless dental stop' },
            { ipa: 'k', example: 'casa', highlighted: '[c]asa', needsSchwa: true, description: 'voiceless velar stop' },
            { ipa: 'tʃ', example: 'chico', highlighted: '[ch]ico', needsSchwa: true, description: 'voiceless postalveolar affricate' },
            { ipa: 'f', example: 'foco', highlighted: '[f]oco', description: 'voiceless labiodental fricative' },
            { ipa: 'θ', example: 'cero', highlighted: '[c]ero', description: 'voiceless dental fricative (Castilian)' },
            { ipa: 's', example: 'sol', highlighted: '[s]ol', description: 'voiceless alveolar fricative' },
            null,
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: 'b', example: 'barco', highlighted: '[b]arco', description: 'voiced bilabial stop/fricative' },
            { ipa: 'd', example: 'dedo', highlighted: '[d]edo', description: 'voiced dental stop/fricative' },
            { ipa: 'g', example: 'gato', highlighted: '[g]ato', description: 'voiced velar stop/fricative' },
            null,
            null,
            null,
            null,
            { ipa: 'x', example: 'jota', highlighted: '[j]ota', description: 'voiceless velar fricative' },
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: 'm', example: 'mano', highlighted: '[m]ano', description: 'bilabial nasal' },
            { ipa: 'n', example: 'nada', highlighted: '[n]ada', description: 'alveolar nasal' },
            { ipa: 'ɲ', example: 'niño', highlighted: 'ni[ñ]o', description: 'palatal nasal' },
            null,
            null,
            { ipa: 'l', example: 'lado', highlighted: '[l]ado', description: 'alveolar lateral approximant' },
            { ipa: 'ʎ', example: 'llave', highlighted: '[ll]ave', description: 'palatal lateral approximant' },
            { ipa: 'r', example: 'perro', highlighted: 'pe[rr]o', description: 'alveolar trill' },
          ],
        },
      ],
    },
  ],
},

 french: {
  name: 'French (Parisian)',
  flag: '🇫🇷',
  sections: [
    {
      title: 'Oral Vowels',
      subtitle: 'Non-nasal vowels',
      category: "vowel",
      cols: 6,
      grid: [
        [
          { ipa: 'i', example: 'si', highlighted: 's[i]', description: 'close front unrounded vowel' },
          { ipa: 'y', example: 'tu', highlighted: 't[u]', description: 'close front rounded vowel' },
          { ipa: 'u', example: 'vous', highlighted: 'v[ou]s', description: 'close back rounded vowel' },
          { ipa: 'e', example: 'été', highlighted: '[é]té', description: 'close-mid front unrounded vowel' },
          { ipa: 'ø', example: 'deux', highlighted: 'd[eu]x', description: 'close-mid front rounded vowel' },
          { ipa: 'o', example: 'beau', highlighted: 'b[eau]', description: 'close-mid back rounded vowel' },
        ],
        [
          { ipa: 'ɛ', example: 'belle', highlighted: 'b[e]lle', description: 'open-mid front unrounded vowel' },
          { ipa: 'œ', example: 'peur', highlighted: 'p[eu]r', description: 'open-mid front rounded vowel' },
          { ipa: 'ɔ', example: 'porte', highlighted: 'p[o]rte', description: 'open-mid back rounded vowel' },
          { ipa: 'a', example: 'patte', highlighted: 'p[a]tte', description: 'open front unrounded vowel' },
          { ipa: 'ə', example: 'le', highlighted: 'l[e]', description: 'mid central vowel (schwa)' },
          null,
        ],
      ],
    },
    {
      title: 'Nasal Vowels',
      subtitle: 'Nasalized vowels',
      category: "vowel",
      cols: 4,
      grid: [
        [
          { ipa: 'ɛ̃', example: 'vin', highlighted: 'v[in]', description: 'open-mid front nasalized vowel' },
          { ipa: 'œ̃', example: 'un', highlighted: '[un]', description: 'open-mid front rounded nasalized vowel' },
          { ipa: 'ɑ̃', example: 'blanc', highlighted: 'bl[an]c', description: 'open back nasalized vowel' },
          { ipa: 'ɔ̃', example: 'bon', highlighted: 'b[on]', description: 'open-mid back nasalized vowel' },
        ],
      ],
    },
    {
      title: 'Consonants',
      subtitle: 'Organized by place and voicing',
      category: "consonant",
      cols: 8,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: 'p', example: 'pain', highlighted: '[p]ain', needsSchwa: true, description: 'voiceless bilabial stop' },
            { ipa: 't', example: 'tu', highlighted: '[t]u', needsSchwa: true, description: 'voiceless alveolar stop' },
            { ipa: 'k', example: 'coeur', highlighted: '[c]oeur', needsSchwa: true, description: 'voiceless velar stop' },
            null,
            { ipa: 'f', example: 'feu', highlighted: '[f]eu', description: 'voiceless labiodental fricative' },
            { ipa: 's', example: 'sous', highlighted: '[s]ous', description: 'voiceless alveolar fricative' },
            { ipa: 'ʃ', example: 'chat', highlighted: '[ch]at', description: 'voiceless postalveolar fricative' },
            null,
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: 'b', example: 'bain', highlighted: '[b]ain', description: 'voiced bilabial stop' },
            { ipa: 'd', example: 'doux', highlighted: '[d]oux', description: 'voiced alveolar stop' },
            { ipa: 'g', example: 'gare', highlighted: '[g]are', description: 'voiced velar stop' },
            null,
            { ipa: 'v', example: 'vous', highlighted: '[v]ous', description: 'voiced labiodental fricative' },
            { ipa: 'z', example: 'rose', highlighted: 'ro[s]e', description: 'voiced alveolar fricative' },
            { ipa: 'ʒ', example: 'je', highlighted: '[j]e', description: 'voiced postalveolar fricative' },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: 'm', example: 'mais', highlighted: '[m]ais', description: 'bilabial nasal' },
            { ipa: 'n', example: 'non', highlighted: '[n]on', description: 'alveolar nasal' },
            { ipa: 'ɲ', example: 'agneau', highlighted: 'a[gn]eau', description: 'palatal nasal' },
            null,
            null,
            { ipa: 'l', example: 'lui', highlighted: '[l]ui', description: 'alveolar lateral approximant' },
            { ipa: 'ʁ', example: 'rue', highlighted: '[r]ue', description: 'uvular fricative' },
            { ipa: 'j', example: 'yeux', highlighted: '[y]eux', description: 'palatal approximant' },
          ],
        },
      ],
    },
  ],
},

italian: {
  name: "Italian (Standard)",
  flag: "🇮🇹",
  sections: [
    {
      title: "Vowels",
      subtitle: "Seven vowel phonemes",
      category: "vowel",
      cols: 7,
      grid: [
        [
          { ipa: "i", example: "vino", highlighted: "v[i]no", description: "close front unrounded vowel" },
          { ipa: "e", example: "mela", highlighted: "m[e]la", description: "close-mid front unrounded vowel" },
          { ipa: "ɛ", example: "bello", highlighted: "b[e]llo", description: "open-mid front unrounded vowel" },
          { ipa: "a", example: "casa", highlighted: "c[a]sa", description: "open central unrounded vowel" },
          { ipa: "ɔ", example: "cosa", highlighted: "c[o]sa", description: "open-mid back rounded vowel" },
          { ipa: "o", example: "solo", highlighted: "s[o]lo", description: "close-mid back rounded vowel" },
          { ipa: "u", example: "luna", highlighted: "l[u]na", description: "close back rounded vowel" },
        ],
      ],
    },
    {
      title: "Diphthongs",
      subtitle: "Common vowel combinations",
      category: "diphthong",
      cols: 4,
      grid: [
        [
          { ipa: "ai", example: "mai", highlighted: "m[ai]", description: "diphthong: a + i" },
          { ipa: "ei", example: "sei", highlighted: "s[ei]", description: "diphthong: e + i" },
          { ipa: "au", example: "auto", highlighted: "[au]to", description: "diphthong: a + u" },
          { ipa: "eu", example: "europeo", highlighted: "[eu]ropeo", description: "diphthong: e + u" },
        ],
        [
          { ipa: "ja", example: "piano", highlighted: "p[ia]no", description: "rising diphthong" },
          { ipa: "je", example: "ieri", highlighted: "[ie]ri", description: "rising diphthong" },
          { ipa: "wa", example: "quale", highlighted: "q[ua]le", description: "rising diphthong" },
          { ipa: "wɔ", example: "buono", highlighted: "b[uo]no", description: "rising diphthong" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by place and voicing",
      category: "consonant",
      cols: 8,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "p", example: "pane", highlighted: "[p]ane", needsSchwa: true, description: "voiceless bilabial stop" },
            { ipa: "t", example: "tempo", highlighted: "[t]empo", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "k", example: "casa", highlighted: "[c]asa", needsSchwa: true, description: "voiceless velar stop" },
            { ipa: "tʃ", example: "ciao", highlighted: "[c]iao", needsSchwa: true, description: "voiceless postalveolar affricate" },
            { ipa: "f", example: "fare", highlighted: "[f]are", description: "voiceless labiodental fricative" },
            { ipa: "s", example: "sole", highlighted: "[s]ole", description: "voiceless alveolar fricative" },
            null,
            null,
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "b", example: "bello", highlighted: "[b]ello", description: "voiced bilabial stop" },
            { ipa: "d", example: "dare", highlighted: "[d]are", description: "voiced alveolar stop" },
            { ipa: "g", example: "gatto", highlighted: "[g]atto", description: "voiced velar stop" },
            { ipa: "dʒ", example: "gelo", highlighted: "[g]elo", description: "voiced postalveolar affricate" },
            { ipa: "v", example: "vino", highlighted: "[v]ino", description: "voiced labiodental fricative" },
            { ipa: "z", example: "zero", highlighted: "[z]ero", description: "voiced alveolar fricative" },
            null,
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "mare", highlighted: "[m]are", description: "bilabial nasal" },
            { ipa: "n", example: "naso", highlighted: "[n]aso", description: "alveolar nasal" },
            { ipa: "ɲ", example: "gnomo", highlighted: "g[n]omo", description: "palatal nasal" },
            null,
            null,
            { ipa: "l", example: "latte", highlighted: "[l]atte", description: "alveolar lateral approximant" },
            { ipa: "ʎ", example: "figlio", highlighted: "fig[l]io", description: "palatal lateral approximant" },
            { ipa: "r", example: "rosso", highlighted: "[r]osso", description: "alveolar trill" },
          ],
        },
      ],
    },
    {
      title: "Geminate Consonants",
      subtitle: "Phonemic length distinction",
      category: "consonant",
      cols: 4,
      grid: [
        [
          { ipa: "pː", example: "cappa", highlighted: "ca[pp]a", description: "long voiceless bilabial stop" },
          { ipa: "tː", example: "fatto", highlighted: "fa[tt]o", description: "long voiceless alveolar stop" },
          { ipa: "kː", example: "bocca", highlighted: "bo[cc]a", description: "long voiceless velar stop" },
          { ipa: "fː", example: "affetto", highlighted: "a[ff]etto", description: "long voiceless labiodental fricative" },
        ],
        [
          { ipa: "sː", example: "rosso", highlighted: "ro[ss]o", description: "long voiceless alveolar fricative" },
          { ipa: "lː", example: "bello", highlighted: "be[ll]o", description: "long alveolar lateral" },
          { ipa: "rː", example: "carro", highlighted: "ca[rr]o", description: "long alveolar trill" },
          { ipa: "nː", example: "anno", highlighted: "a[nn]o", description: "long alveolar nasal" },
        ],
      ],
    },
  ],
},

turkish: {
  name: "Turkish",
  flag: "🇹🇷",
  sections: [
    {
      title: "Vowels",
      subtitle: "Eight vowel harmony system",
      category: "vowel",
      cols: 4,
      grid: [
        [
          { ipa: "i", example: "bir", highlighted: "b[i]r", description: "close front unrounded vowel" },
          { ipa: "y", example: "gül", highlighted: "g[ü]l", description: "close front rounded vowel" },
          { ipa: "ɯ", example: "kız", highlighted: "k[ı]z", description: "close back unrounded vowel" },
          { ipa: "u", example: "su", highlighted: "s[u]", description: "close back rounded vowel" },
        ],
        [
          { ipa: "e", example: "el", highlighted: "[e]l", description: "mid front unrounded vowel" },
          { ipa: "ø", example: "göz", highlighted: "g[ö]z", description: "mid front rounded vowel" },
          { ipa: "a", example: "kapı", highlighted: "k[a]pı", description: "open front unrounded vowel" },
          { ipa: "o", example: "okul", highlighted: "[o]kul", description: "mid back rounded vowel" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by place and voicing",
      category: "consonant",
      cols: 8,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "p", example: "para", highlighted: "[p]ara", needsSchwa: true, description: "voiceless bilabial stop" },
            { ipa: "t", example: "tak", highlighted: "[t]ak", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "k", example: "kedi", highlighted: "[k]edi", needsSchwa: true, description: "voiceless velar stop" },
            { ipa: "tʃ", example: "çay", highlighted: "[ç]ay", needsSchwa: true, description: "voiceless postalveolar affricate" },
            { ipa: "f", example: "fener", highlighted: "[f]ener", description: "voiceless labiodental fricative" },
            { ipa: "s", example: "sarı", highlighted: "[s]arı", description: "voiceless alveolar fricative" },
            { ipa: "ʃ", example: "şarap", highlighted: "[ş]arap", description: "voiceless postalveolar fricative" },
            { ipa: "h", example: "hava", highlighted: "[h]ava", description: "voiceless glottal fricative" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "b", example: "bal", highlighted: "[b]al", description: "voiced bilabial stop" },
            { ipa: "d", example: "dağ", highlighted: "[d]ağ", description: "voiced alveolar stop" },
            { ipa: "g", example: "gaz", highlighted: "[g]az", description: "voiced velar stop" },
            { ipa: "dʒ", example: "cam", highlighted: "[c]am", description: "voiced postalveolar affricate" },
            { ipa: "v", example: "ver", highlighted: "[v]er", description: "voiced labiodental fricative" },
            { ipa: "z", example: "zaman", highlighted: "[z]aman", description: "voiced alveolar fricative" },
            { ipa: "ʒ", example: "jilet", highlighted: "[j]ilet", description: "voiced postalveolar fricative" },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "masa", highlighted: "[m]asa", description: "bilabial nasal" },
            { ipa: "n", example: "nohut", highlighted: "[n]ohut", description: "alveolar nasal" },
            null,
            null,
            { ipa: "l", example: "lale", highlighted: "[l]ale", description: "alveolar lateral approximant" },
            { ipa: "ɾ", example: "araba", highlighted: "a[r]aba", description: "alveolar tap" },
            { ipa: "j", example: "yeni", highlighted: "[y]eni", description: "palatal approximant" },
            null,
          ],
        },
      ],
    },
  ],
},

russian: {
  name: "Russian",
  flag: "🇷🇺",
  sections: [
    {
      title: "Vowels",
      subtitle: "Stressed vowels",
      category: "vowel",
      cols: 3,
      grid: [
        [
          { ipa: "i", example: "мир mir", highlighted: "m[i]r", description: "close front unrounded vowel" },
          { ipa: "ɨ", example: "мы my", highlighted: "m[y]", description: "close central unrounded vowel" },
          { ipa: "u", example: "ум um", highlighted: "[u]m", description: "close back rounded vowel" },
        ],
        [
          { ipa: "e", example: "это eto", highlighted: "[e]to", description: "mid front unrounded vowel" },
          null,
          { ipa: "o", example: "он on", highlighted: "[o]n", description: "mid back rounded vowel" },
        ],
        [
          null,
          { ipa: "a", example: "дай day", highlighted: "d[a]y", description: "open central unrounded vowel" },
          null,
        ],
      ],
    },
    {
      title: "Reduced Vowels",
      subtitle: "Unstressed positions",
      category: "vowel",
      cols: 3,
      grid: [
        [
          { ipa: "ɪ", example: "пятак pyatak", highlighted: "p[ya]tak", description: "reduced i (unstressed)" },
          { ipa: "ə", example: "молоко malako", highlighted: "m[a]lako", description: "schwa (unstressed)" },
          { ipa: "ʊ", example: "хорошо harasho", highlighted: "harash[o]", description: "reduced u (unstressed)" },
        ],
      ],
    },
    {
      title: "Stops",
      subtitle: "Hard/soft pairs",
      category: "consonant",
      cols: 6,
      rows: [
        {
          bgColor: 'bg-purple-200',
          hoverColor: 'hover:bg-purple-300',
          cells: [
            { ipa: "p", example: "пар par", highlighted: "[p]ar", needsSchwa: true, description: "voiceless bilabial stop (hard)" },
            { ipa: "pʲ", example: "пять pyatʲ", highlighted: "[p]yatʲ", needsSchwa: true, description: "voiceless bilabial stop (soft)" },
            { ipa: "t", example: "там tam", highlighted: "[t]am", needsSchwa: true, description: "voiceless alveolar stop (hard)" },
            { ipa: "tʲ", example: "тень tenʲ", highlighted: "[t]enʲ", needsSchwa: true, description: "voiceless alveolar stop (soft)" },
            { ipa: "k", example: "кот kot", highlighted: "[k]ot", needsSchwa: true, description: "voiceless velar stop (hard)" },
            { ipa: "kʲ", example: "кит kʲit", highlighted: "[kʲ]it", needsSchwa: true, description: "voiceless velar stop (soft)" },
          ],
        },
        {
          bgColor: 'bg-purple-400',
          hoverColor: 'hover:bg-purple-500',
          cells: [
            { ipa: "b", example: "был byl", highlighted: "[b]yl", description: "voiced bilabial stop (hard)" },
            { ipa: "bʲ", example: "бить bʲitʲ", highlighted: "[bʲ]itʲ", description: "voiced bilabial stop (soft)" },
            { ipa: "d", example: "дом dom", highlighted: "[d]om", description: "voiced alveolar stop (hard)" },
            { ipa: "dʲ", example: "день dʲenʲ", highlighted: "[dʲ]enʲ", description: "voiced alveolar stop (soft)" },
            { ipa: "g", example: "год god", highlighted: "[g]od", description: "voiced velar stop (hard)" },
            { ipa: "gʲ", example: "гид gʲid", highlighted: "[gʲ]id", description: "voiced velar stop (soft)" },
          ],
        },
      ],
    },
    {
      title: "Fricatives",
      subtitle: "Hard/soft pairs",
      category: "consonant",
      cols: 4,
      rows: [
        {
          bgColor: 'bg-purple-200',
          hoverColor: 'hover:bg-purple-300',
          cells: [
            { ipa: "f", example: "факт fakt", highlighted: "[f]akt", description: "voiceless labiodental fricative (hard)" },
            { ipa: "fʲ", example: "фильм fʲilʲm", highlighted: "[fʲ]ilʲm", description: "voiceless labiodental fricative (soft)" },
            { ipa: "s", example: "сон son", highlighted: "[s]on", description: "voiceless alveolar fricative (hard)" },
            { ipa: "sʲ", example: "сюда sʲuda", highlighted: "[sʲ]uda", description: "voiceless alveolar fricative (soft)" },
          ],
        },
        {
          bgColor: 'bg-purple-400',
          hoverColor: 'hover:bg-purple-500',
          cells: [
            { ipa: "v", example: "вода vada", highlighted: "[v]ada", description: "voiced labiodental fricative (hard)" },
            { ipa: "vʲ", example: "вить vʲitʲ", highlighted: "[vʲ]itʲ", description: "voiced labiodental fricative (soft)" },
            { ipa: "z", example: "зона zona", highlighted: "[z]ona", description: "voiced alveolar fricative (hard)" },
            { ipa: "zʲ", example: "зима zʲima", highlighted: "[zʲ]ima", description: "voiced alveolar fricative (soft)" },
          ],
        },
        {
          bgColor: 'bg-purple-200',
          hoverColor: 'hover:bg-purple-300',
          cells: [
            { ipa: "x", example: "хор xor", highlighted: "[x]or", description: "voiceless velar fricative (hard)" },
            { ipa: "xʲ", example: "химия xʲimʲija", highlighted: "[xʲ]imʲija", description: "voiceless velar fricative (soft)" },
            null,
            null,
          ],
        },
      ],
    },
    {
      title: "Sibilants & Affricates",
      subtitle: "Always hard or always soft",
      category: "consonant",
      cols: 3,
      rows: [
        {
          bgColor: 'bg-indigo-200',
          hoverColor: 'hover:bg-indigo-300',
          cells: [
            { ipa: "ʂ", example: "шум ʂum", highlighted: "[ʂ]um", description: "voiceless retroflex fricative (always hard)" },
            { ipa: "ʐ", example: "жар ʐar", highlighted: "[ʐ]ar", description: "voiced retroflex fricative (always hard)" },
            { ipa: "ts", example: "цепь tsepʲ", highlighted: "[ts]epʲ", needsSchwa: true, description: "voiceless alveolar affricate (always hard)" },
          ],
        },
        {
          bgColor: 'bg-indigo-400',
          hoverColor: 'hover:bg-indigo-500',
          cells: [
            { ipa: "tɕ", example: "час tɕas", highlighted: "[tɕ]as", needsSchwa: true, description: "voiceless alveolopalatal affricate (always soft)" },
            { ipa: "ɕː", example: "щи ɕːi", highlighted: "[ɕː]i", description: "long voiceless alveolopalatal fricative (always soft)" },
            { ipa: "j", example: "май maj", highlighted: "ma[j]", description: "palatal approximant (always soft)" },
          ],
        },
      ],
    },
    {
      title: "Nasals & Liquids",
      subtitle: "Hard/soft pairs",
      category: "consonant",
      cols: 4,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "мама mama", highlighted: "[m]ama", description: "bilabial nasal (hard)" },
            { ipa: "mʲ", example: "мясо mʲaso", highlighted: "[mʲ]aso", description: "bilabial nasal (soft)" },
            { ipa: "n", example: "нос nos", highlighted: "[n]os", description: "alveolar nasal (hard)" },
            { ipa: "nʲ", example: "няня nʲanʲa", highlighted: "[nʲ]anʲa", description: "alveolar nasal (soft)" },
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "l", example: "лук luk", highlighted: "[l]uk", description: "alveolar lateral (hard)" },
            { ipa: "lʲ", example: "лить lʲitʲ", highlighted: "[lʲ]itʲ", description: "alveolar lateral (soft)" },
            { ipa: "r", example: "рот rot", highlighted: "[r]ot", description: "alveolar trill (hard)" },
            { ipa: "rʲ", example: "ряд rʲat", highlighted: "[rʲ]at", description: "alveolar trill (soft)" },
          ],
        },
      ],
    },
  ],
},


portuguese: {
  name: "Portuguese (Brazilian)",
  flag: "🇧🇷",
  sections: [
    {
      title: "Oral Vowels",
      subtitle: "Non-nasal vowels",
      category: "vowel",
      cols: 7,
      grid: [
        [
          { ipa: "i", example: "si", highlighted: "s[i]", description: "close front unrounded vowel" },
          { ipa: "e", example: "vê", highlighted: "v[ê]", description: "close-mid front unrounded vowel" },
          { ipa: "ɛ", example: "pé", highlighted: "p[é]", description: "open-mid front unrounded vowel" },
          { ipa: "a", example: "lá", highlighted: "l[á]", description: "open central unrounded vowel" },
          { ipa: "ɔ", example: "pó", highlighted: "p[ó]", description: "open-mid back rounded vowel" },
          { ipa: "o", example: "avô", highlighted: "av[ô]", description: "close-mid back rounded vowel" },
          { ipa: "u", example: "tu", highlighted: "t[u]", description: "close back rounded vowel" },
        ],
      ],
    },
    {
      title: "Nasal Vowels",
      subtitle: "Nasalized vowels",
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: "ĩ", example: "fim", highlighted: "f[im]", description: "nasalized close front vowel" },
          { ipa: "ẽ", example: "bem", highlighted: "b[em]", description: "nasalized close-mid front vowel" },
          { ipa: "ã", example: "cão", highlighted: "c[ão]", description: "nasalized open vowel" },
          { ipa: "õ", example: "som", highlighted: "s[om]", description: "nasalized close-mid back vowel" },
          { ipa: "ũ", example: "um", highlighted: "[um]", description: "nasalized close back vowel" },
        ],
      ],
    },
    {
      title: "Diphthongs",
      subtitle: "Common oral diphthongs",
      category: "diphthong",
      cols: 4,
      grid: [
        [
          { ipa: "aj", example: "pai", highlighted: "p[ai]", description: "diphthong: a + i" },
          { ipa: "ej", example: "lei", highlighted: "l[ei]", description: "diphthong: e + i" },
          { ipa: "ɛj", example: "papéis", highlighted: "pap[éis]", description: "diphthong: ɛ + i" },
          { ipa: "oj", example: "boi", highlighted: "b[oi]", description: "diphthong: o + i" },
        ],
        [
          { ipa: "aw", example: "mau", highlighted: "m[au]", description: "diphthong: a + u" },
          { ipa: "ew", example: "meu", highlighted: "m[eu]", description: "diphthong: e + u" },
          { ipa: "ɛw", example: "céu", highlighted: "c[éu]", description: "diphthong: ɛ + u" },
          { ipa: "iw", example: "viu", highlighted: "v[iu]", description: "diphthong: i + u" },
        ],
      ],
    },
    {
      title: "Nasal Diphthongs",
      subtitle: "Nasalized combinations",
      category: "diphthong",
      cols: 3,
      grid: [
        [
          { ipa: "ãw̃", example: "mão", highlighted: "m[ão]", description: "nasalized diphthong" },
          { ipa: "õj̃", example: "põe", highlighted: "p[õe]", description: "nasalized diphthong" },
          { ipa: "ãj̃", example: "mãe", highlighted: "m[ãe]", description: "nasalized diphthong" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by place and voicing",
      category: "consonant",
      cols: 8,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "p", example: "pão", highlighted: "[p]ão", needsSchwa: true, description: "voiceless bilabial stop" },
            { ipa: "t", example: "tudo", highlighted: "[t]udo", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "k", example: "casa", highlighted: "[c]asa", needsSchwa: true, description: "voiceless velar stop" },
            { ipa: "tʃ", example: "tia", highlighted: "[t]ia", needsSchwa: true, description: "voiceless postalveolar affricate (before i)" },
            { ipa: "f", example: "fazer", highlighted: "[f]azer", description: "voiceless labiodental fricative" },
            { ipa: "s", example: "sol", highlighted: "[s]ol", description: "voiceless alveolar fricative" },
            { ipa: "ʃ", example: "chá", highlighted: "[ch]á", description: "voiceless postalveolar fricative" },
            null,
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "b", example: "bom", highlighted: "[b]om", description: "voiced bilabial stop" },
            { ipa: "d", example: "dia", highlighted: "[d]ia", description: "voiced alveolar stop" },
            { ipa: "g", example: "gato", highlighted: "[g]ato", description: "voiced velar stop" },
            { ipa: "dʒ", example: "dia", highlighted: "[d]ia", description: "voiced postalveolar affricate (before i)" },
            { ipa: "v", example: "voz", highlighted: "[v]oz", description: "voiced labiodental fricative" },
            { ipa: "z", example: "zero", highlighted: "[z]ero", description: "voiced alveolar fricative" },
            { ipa: "ʒ", example: "já", highlighted: "[j]á", description: "voiced postalveolar fricative" },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "mar", highlighted: "[m]ar", description: "bilabial nasal" },
            { ipa: "n", example: "não", highlighted: "[n]ão", description: "alveolar nasal" },
            { ipa: "ɲ", example: "ninho", highlighted: "ni[nh]o", description: "palatal nasal" },
            null,
            null,
            { ipa: "l", example: "lua", highlighted: "[l]ua", description: "alveolar lateral approximant" },
            { ipa: "ʎ", example: "olho", highlighted: "o[lh]o", description: "palatal lateral approximant" },
            { ipa: "ɾ", example: "caro", highlighted: "ca[r]o", description: "alveolar tap" },
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            null,
            null,
            null,
            null,
            null,
            { ipa: "ʁ", example: "rato", highlighted: "[r]ato", description: "uvular fricative" },
            { ipa: "w", example: "mau", highlighted: "ma[u]", description: "labial-velar approximant" },
            { ipa: "j", example: "pai", highlighted: "pa[i]", description: "palatal approximant" },
          ],
        },
      ],
    },
  ],
},

mandarin: {
  name: 'Mandarin Chinese',
  flag: '🇨🇳',
  sections: [
    {
      title: 'Initials (声母)',
      subtitle: 'Consonant sounds at syllable start',
      category: 'consonant',
      cols: 7,
      rows: [
        {
          bgColor: 'bg-blue-200',
          hoverColor: 'hover:bg-blue-300',
          cells: [
            { ipa: 'p', example: '八 bā', highlighted: '[b]ā', description: 'unaspirated bilabial stop' },
            { ipa: 't', example: '大 dà', highlighted: '[d]à', description: 'unaspirated alveolar stop' },
            { ipa: 'k', example: '个 gè', highlighted: '[g]è', description: 'unaspirated velar stop' },
            { ipa: 'ts', example: '早 zǎo', highlighted: '[z]ǎo', description: 'unaspirated alveolar affricate' },
            { ipa: 'tʂ', example: '中 zhōng', highlighted: '[zh]ōng', description: 'unaspirated retroflex affricate' },
            { ipa: 'tɕ', example: '家 jiā', highlighted: '[j]iā', description: 'unaspirated alveolo-palatal affricate' },
            null,
          ],
        },
        {
          bgColor: 'bg-blue-300',
          hoverColor: 'hover:bg-blue-400',
          cells: [
            { ipa: 'pʰ', example: '怕 pà', highlighted: '[p]à', description: 'aspirated bilabial stop' },
            { ipa: 'tʰ', example: '他 tā', highlighted: '[t]ā', description: 'aspirated alveolar stop' },
            { ipa: 'kʰ', example: '卡 kǎ', highlighted: '[k]ǎ', description: 'aspirated velar stop' },
            { ipa: 'tsʰ', example: '草 cǎo', highlighted: '[c]ǎo', description: 'aspirated alveolar affricate' },
            { ipa: 'tʂʰ', example: '车 chē', highlighted: '[ch]ē', description: 'aspirated retroflex affricate' },
            { ipa: 'tɕʰ', example: '七 qī', highlighted: '[q]ī', description: 'aspirated alveolo-palatal affricate' },
            null,
          ],
        },
        {
          bgColor: 'bg-cyan-200',
          hoverColor: 'hover:bg-cyan-300',
          cells: [
            { ipa: 'f', example: '发 fā', highlighted: '[f]ā', description: 'voiceless labiodental fricative' },
            { ipa: 's', example: '三 sān', highlighted: '[s]ān', description: 'voiceless alveolar fricative' },
            { ipa: 'ʂ', example: '是 shì', highlighted: '[sh]ì', description: 'voiceless retroflex fricative' },
            { ipa: 'ɕ', example: '西 xī', highlighted: '[x]ī', description: 'voiceless alveolo-palatal fricative' },
            { ipa: 'x', example: '好 hǎo', highlighted: '[h]ǎo', description: 'voiceless velar fricative' },
            null,
            null,
          ],
        },
        {
          bgColor: 'bg-teal-100',
          hoverColor: 'hover:bg-teal-200',
          cells: [
            { ipa: 'm', example: '马 mǎ', highlighted: '[m]ǎ', description: 'bilabial nasal' },
            { ipa: 'n', example: '你 nǐ', highlighted: '[n]ǐ', description: 'alveolar nasal' },
            { ipa: 'l', example: '来 lái', highlighted: '[l]ái', description: 'alveolar lateral approximant' },
            { ipa: 'ɻ', example: '人 rén', highlighted: '[r]én', description: 'retroflex approximant' },
            null,
            null,
            null,
          ],
        },
      ],
    },
    {
      title: 'Finals (韵母)',
      subtitle: 'Vowel sounds and syllable endings',
      category: 'vowel',
      cols: 6,
      grid: [
        [
          { ipa: 'a', example: '啊 ā', highlighted: '[ā]', description: 'open back unrounded vowel' },
          { ipa: 'o', example: '哦 ō', highlighted: '[ō]', description: 'close-mid back rounded vowel' },
          { ipa: 'ɤ', example: '饿 è', highlighted: '[è]', description: 'close-mid back unrounded vowel' },
          { ipa: 'i', example: '衣 yī', highlighted: '[yī]', description: 'close front unrounded vowel' },
          { ipa: 'u', example: '五 wǔ', highlighted: '[wǔ]', description: 'close back rounded vowel' },
          { ipa: 'y', example: '鱼 yú', highlighted: '[yú]', description: 'close front rounded vowel' },
        ],
        [
          { ipa: 'ai', example: '爱 ài', highlighted: '[ài]', description: 'diphthong: a + i' },
          { ipa: 'ei', example: '诶 éi', highlighted: '[éi]', description: 'diphthong: e + i' },
          { ipa: 'au', example: '奥 ào', highlighted: '[ào]', description: 'diphthong: a + u' },
          { ipa: 'ou', example: '欧 ōu', highlighted: '[ōu]', description: 'diphthong: o + u' },
          { ipa: 'an', example: '安 ān', highlighted: '[ān]', description: 'vowel + alveolar nasal' },
          { ipa: 'ən', example: '恩 ēn', highlighted: '[ēn]', description: 'schwa + alveolar nasal' },
        ],
        [
          { ipa: 'aŋ', example: '昂 áng', highlighted: '[áng]', description: 'vowel + velar nasal' },
          { ipa: 'əŋ', example: '鞥 ēng', highlighted: '[ēng]', description: 'schwa + velar nasal' },
          { ipa: 'ia', example: '呀 yā', highlighted: 'y[ā]', description: 'i + a combination' },
          { ipa: 'ie', example: '耶 yē', highlighted: 'y[ē]', description: 'i + e combination' },
          { ipa: 'ua', example: '蛙 wā', highlighted: 'w[ā]', description: 'u + a combination' },
          { ipa: 'uo', example: '窝 wō', highlighted: 'w[ō]', description: 'u + o combination' },
        ],
        [
          { ipa: 'yɛ', example: '月 yuè', highlighted: '[yuè]', description: 'ü + e combination' },
          { ipa: 'iau', example: '腰 yāo', highlighted: 'y[āo]', description: 'i + a + u combination' },
          { ipa: 'iou', example: '优 yōu', highlighted: 'y[ōu]', description: 'i + o + u combination' },
          { ipa: 'uai', example: '歪 wāi', highlighted: 'w[āi]', description: 'u + a + i combination' },
          { ipa: 'uei', example: '威 wēi', highlighted: 'w[ēi]', description: 'u + e + i combination' },
          null,
        ],
      ],
    },
    {
      title: 'Tones (声调)',
      subtitle: 'Same syllable, different meanings',
      category: 'tone',
      cols: 5,
      grid: [
        [
          { ipa: 'mā', example: '妈 (mother)', description: 'first tone - high level' },
          { ipa: 'má', example: '麻 (hemp)', description: 'second tone - rising' },
          { ipa: 'mǎ', example: '马 (horse)', description: 'third tone - dipping' },
          { ipa: 'mà', example: '骂 (scold)', description: 'fourth tone - falling' },
          { ipa: 'ma', example: '吗 (question)', description: 'neutral tone - unstressed' },
        ],
      ],
    },
  ],
},

japanese: {
  name: "Japanese (Tokyo)",
  flag: "🇯🇵",
  sections: [
    {
      title: "Vowels",
      subtitle: "Five vowel phonemes",
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: "a", example: "あか aka", highlighted: "[a]ka", description: "open front unrounded vowel" },
          { ipa: "i", example: "いぬ inu", highlighted: "[i]nu", description: "close front unrounded vowel" },
          { ipa: "ɯ", example: "うま uma", highlighted: "[u]ma", description: "close back unrounded vowel" },
          { ipa: "e", example: "えき eki", highlighted: "[e]ki", description: "mid front unrounded vowel" },
          { ipa: "o", example: "おか oka", highlighted: "[o]ka", description: "mid back rounded vowel" },
        ],
      ],
    },
    {
      title: "Long Vowels",
      subtitle: "Phonemic length distinction",
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: "aː", example: "おかあさん okaasan", highlighted: "ok[aa]san", nativeHighlighted: "お[かあ]さん", description: "long open front vowel" },
          { ipa: "iː", example: "おにいさん oniisan", highlighted: "on[ii]san", nativeHighlighted: "お[にい]さん", description: "long close front vowel" },
          { ipa: "ɯː", example: "すうじ suuji", highlighted: "s[uu]ji", nativeHighlighted: "[すう]じ", description: "long close back unrounded vowel" },
          { ipa: "eː", example: "せんせい sensee", highlighted: "sens[ee]", nativeHighlighted: "せん[せい]", description: "long mid front vowel" },
          { ipa: "oː", example: "そう soo", highlighted: "s[oo]", nativeHighlighted: "[そう]", description: "long mid back vowel" },
        ],
      ],
    },
    {
      title: "Stops",
      subtitle: "Organized by voicing",
      category: "consonant",
      cols: 3,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "p", example: "ぱん pan", highlighted: "[p]an", needsSchwa: true, description: "voiceless bilabial stop" },
            { ipa: "t", example: "たこ tako", highlighted: "[t]ako", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "k", example: "かき kaki", highlighted: "[k]aki", needsSchwa: true, description: "voiceless velar stop" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "b", example: "ばん ban", highlighted: "[b]an", description: "voiced bilabial stop" },
            { ipa: "d", example: "だれ dare", highlighted: "[d]are", description: "voiced alveolar stop" },
            { ipa: "g", example: "がく gaku", highlighted: "[g]aku", description: "voiced velar stop" },
          ],
        },
      ],
    },
    {
      title: "Affricates",
      subtitle: "Organized by voicing",
      category: "consonant",
      cols: 2,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "ts", example: "つき tsuki", highlighted: "[ts]uki", needsSchwa: true, description: "voiceless alveolar affricate" },
            { ipa: "tɕ", example: "ちず chizu", highlighted: "[ch]izu", needsSchwa: true, description: "voiceless alveolo-palatal affricate" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            { ipa: "dz", example: "つづく tsuzuku", highlighted: "tsu[dz]uku", description: "voiced alveolar affricate" },
            { ipa: "dʑ", example: "じかん jikan", highlighted: "[j]ikan", description: "voiced alveolo-palatal affricate" },
          ],
        },
      ],
    },
    {
      title: "Fricatives",
      subtitle: "Various positions",
      category: "consonant",
      cols: 5,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "ɸ", example: "ふね fune", highlighted: "[f]une", description: "voiceless bilabial fricative" },
            { ipa: "s", example: "さけ sake", highlighted: "[s]ake", description: "voiceless alveolar fricative" },
            { ipa: "ɕ", example: "しお shio", highlighted: "[sh]io", description: "voiceless alveolo-palatal fricative" },
            { ipa: "ç", example: "ひと hito", highlighted: "[h]ito", description: "voiceless palatal fricative" },
            { ipa: "h", example: "はな hana", highlighted: "[h]ana", description: "voiceless glottal fricative" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            null,
            { ipa: "z", example: "ざる zaru", highlighted: "[z]aru", description: "voiced alveolar fricative" },
            { ipa: "ʑ", example: "じしょ jisho", highlighted: "[j]isho", description: "voiced alveolo-palatal fricative" },
            null,
            null,
          ],
        },
      ],
    },
    {
      title: "Nasals",
      subtitle: "Including moraic nasal",
      category: "consonant",
      cols: 4,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "まめ mame", highlighted: "[m]ame", description: "bilabial nasal" },
            { ipa: "n", example: "なに nani", highlighted: "[n]ani", description: "alveolar nasal" },
            { ipa: "ɲ", example: "にゃ nya", highlighted: "[ny]a", description: "palatal nasal" },
            null,
          ],
        },
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "ɴ", example: "ほん hon", highlighted: "ho[n]", description: "uvular nasal (moraic ん)" },
            { ipa: "m", example: "さんぽ sanpo", highlighted: "sa[n]po", description: "bilabial (moraic ん before p/b)" },
            { ipa: "n", example: "さんだる sandaru", highlighted: "sa[n]daru", description: "alveolar (moraic ん before t/d/n)" },
            { ipa: "ŋ", example: "さんが sanga", highlighted: "sa[n]ga", description: "velar (moraic ん before k/g)" },
          ],
        },
      ],
    },
    {
      title: "Liquids & Approximants",
      subtitle: "Sonorants",
      category: "consonant",
      cols: 3,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "ɾ", example: "らく raku", highlighted: "[r]aku", description: "alveolar tap" },
            { ipa: "j", example: "やま yama", highlighted: "[y]ama", description: "palatal approximant" },
            { ipa: "w", example: "わに wani", highlighted: "[w]ani", description: "labial-velar approximant" },
          ],
        },
      ],
    },
    {
      title: "Geminate Consonants",
      subtitle: "Sokuon (っ) - phonemic length",
      category: "consonant",
      cols: 4,
      grid: [
        [
          { ipa: "kː", example: "がっこう gakkou", highlighted: "ga[kk]ou", nativeHighlighted: "が[っこ]う", description: "long voiceless velar stop" },
          { ipa: "tː", example: "まった matta", highlighted: "ma[tt]a", nativeHighlighted: "ま[った]", description: "long voiceless alveolar stop" },
          { ipa: "pː", example: "いっぱい ippai", highlighted: "i[pp]ai", nativeHighlighted: "い[っぱ]い", description: "long voiceless bilabial stop" },
          { ipa: "sː", example: "ずっと zutto", highlighted: "zu[tt]o", nativeHighlighted: "ず[っと]", description: "long voiceless alveolar fricative" },
        ],
      ],
    },
  ],
},

arabic: {
  name: "Arabic (MSA)",
  flag: "🇸🇦",
  sections: [
    {
      title: "Short Vowels (حركات)",
      subtitle: "Three basic vowels",
      category: "vowel",
      cols: 3,
      grid: [
        [
          { ipa: "a", example: "كتب kataba", highlighted: "k[a]taba", description: "open front unrounded vowel" },
          { ipa: "i", example: "بنت bint", highlighted: "b[i]nt", description: "close front unrounded vowel" },
          { ipa: "u", example: "كتب kutiba", highlighted: "k[u]tiba", description: "close back rounded vowel" },
        ],
      ],
    },
    {
      title: "Long Vowels",
      subtitle: "Extended vowel duration",
      category: "vowel",
      cols: 3,
      grid: [
        [
          { ipa: "aː", example: "باب baab", highlighted: "b[aa]b", nativeHighlighted: "ب[ا]ب", description: "long open front vowel" },
          { ipa: "iː", example: "كبير kabiir", highlighted: "kab[ii]r", nativeHighlighted: "كب[ي]ر", description: "long close front vowel" },
          { ipa: "uː", example: "نور nuur", highlighted: "n[uu]r", nativeHighlighted: "ن[و]ر", description: "long close back vowel" },
        ],
      ],
    },
    {
      title: "Plain Stops & Affricates",
      subtitle: "Non-emphatic consonants",
      category: "consonant",
      cols: 5,
      rows: [
        {
          bgColor: 'bg-green-200',
          hoverColor: 'hover:bg-green-300',
          cells: [
            { ipa: "b", example: "باب baab", highlighted: "[b]aab", description: "voiced bilabial stop" },
            { ipa: "t", example: "تين tiin", highlighted: "[t]iin", needsSchwa: true, description: "voiceless alveolar stop" },
            { ipa: "d", example: "دار daar", highlighted: "[d]aar", description: "voiced alveolar stop" },
            { ipa: "k", example: "كتب kataba", highlighted: "[k]ataba", needsSchwa: true, description: "voiceless velar stop" },
            { ipa: "q", example: "قلب qalb", highlighted: "[q]alb", needsSchwa: true, description: "voiceless uvular stop" },
          ],
        },
        {
          bgColor: 'bg-green-300',
          hoverColor: 'hover:bg-green-400',
          cells: [
            null,
            null,
            { ipa: "dʒ", example: "جمال dʒamal", highlighted: "[dʒ]amal", description: "voiced postalveolar affricate" },
            null,
            { ipa: "ʔ", example: "أسد ʔasad", highlighted: "[ʔ]asad", description: "glottal stop" },
          ],
        },
      ],
    },
    {
      title: "Emphatic Consonants",
      subtitle: "Pharyngealized (velarized)",
      category: "consonant",
      cols: 4,
      rows: [
        {
          bgColor: 'bg-amber-300',
          hoverColor: 'hover:bg-amber-400',
          cells: [
            { ipa: "tˤ", example: "طير tˤayr", highlighted: "[tˤ]ayr", needsSchwa: true, description: "voiceless pharyngealized alveolar stop" },
            { ipa: "dˤ", example: "ضرب dˤarab", highlighted: "[dˤ]arab", description: "voiced pharyngealized alveolar stop" },
            { ipa: "sˤ", example: "صبر sˤabr", highlighted: "[sˤ]abr", description: "voiceless pharyngealized alveolar fricative" },
            { ipa: "ðˤ", example: "ظهر ðˤahr", highlighted: "[ðˤ]ahr", description: "voiced pharyngealized dental fricative" },
          ],
        },
      ],
    },
    {
      title: "Fricatives",
      subtitle: "Various positions",
      category: "consonant",
      cols: 7,
      rows: [
        {
          bgColor: 'bg-cyan-200',
          hoverColor: 'hover:bg-cyan-300',
          cells: [
            { ipa: "f", example: "فم fam", highlighted: "[f]am", description: "voiceless labiodental fricative" },
            { ipa: "θ", example: "ثلج θalj", highlighted: "[θ]alj", description: "voiceless dental fricative" },
            { ipa: "ð", example: "ذهب ðahab", highlighted: "[ð]ahab", description: "voiced dental fricative" },
            { ipa: "s", example: "سمك samak", highlighted: "[s]amak", description: "voiceless alveolar fricative" },
            { ipa: "z", example: "زيت zayt", highlighted: "[z]ayt", description: "voiced alveolar fricative" },
            { ipa: "ʃ", example: "شمس ʃams", highlighted: "[ʃ]ams", description: "voiceless postalveolar fricative" },
            { ipa: "h", example: "هواء hawaʔ", highlighted: "[h]awaʔ", description: "voiceless glottal fricative" },
          ],
        },
      ],
    },
    {
      title: "Pharyngeal & Uvular",
      subtitle: "Back consonants",
      category: "consonant",
      cols: 4,
      rows: [
        {
          bgColor: 'bg-orange-200',
          hoverColor: 'hover:bg-orange-300',
          cells: [
            { ipa: "x", example: "خبز xubz", highlighted: "[x]ubz", description: "voiceless uvular fricative" },
            { ipa: "ɣ", example: "غرب ɣarb", highlighted: "[ɣ]arb", description: "voiced uvular fricative" },
            { ipa: "ħ", example: "حب ħubb", highlighted: "[ħ]ubb", description: "voiceless pharyngeal fricative" },
            { ipa: "ʕ", example: "عين ʕayn", highlighted: "[ʕ]ayn", description: "voiced pharyngeal fricative" },
          ],
        },
      ],
    },
    {
      title: "Sonorants",
      subtitle: "Nasals, liquids, approximants",
      category: "consonant",
      cols: 6,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "ماء maaʔ", highlighted: "[m]aaʔ", description: "bilabial nasal" },
            { ipa: "n", example: "نار naar", highlighted: "[n]aar", description: "alveolar nasal" },
            { ipa: "l", example: "ليل layl", highlighted: "[l]ayl", description: "alveolar lateral approximant" },
            { ipa: "r", example: "رأس raʔs", highlighted: "[r]aʔs", description: "alveolar trill" },
            { ipa: "j", example: "يد yad", highlighted: "[y]ad", description: "palatal approximant" },
            { ipa: "w", example: "ورد ward", highlighted: "[w]ard", description: "labial-velar approximant" },
          ],
        },
      ],
    },
  ],
},

hindi: {
  name: "Hindi (Standard)",
  flag: "🇮🇳",
  sections: [
    {
      title: "Vowels (स्वर)",
      subtitle: "Short and long vowels",
      category: "vowel",
      cols: 5,
      grid: [
        [
          { ipa: "i", example: "इति iti", highlighted: "[i]ti", description: "close front unrounded vowel (short)" },
          { ipa: "iː", example: "ईश्वर iːʃwar", highlighted: "[iː]ʃwar", description: "close front unrounded vowel (long)" },
          { ipa: "u", example: "उठा uʈʰaː", highlighted: "[u]ʈʰaː", description: "close back rounded vowel (short)" },
          { ipa: "uː", example: "ऊंचा uːnʧaː", highlighted: "[uː]nʧaː", description: "close back rounded vowel (long)" },
          null,
        ],
        [
          { ipa: "eː", example: "एक eːk", highlighted: "[eː]k", description: "close-mid front unrounded vowel" },
          { ipa: "oː", example: "ओखली oːkhli", highlighted: "[oː]khli", description: "close-mid back rounded vowel" },
          { ipa: "ɛː", example: "ऐनक ɛːnak", highlighted: "[ɛː]nak", description: "open-mid front unrounded vowel" },
          { ipa: "ɔː", example: "औरत ɔːrat", highlighted: "[ɔː]rat", description: "open-mid back rounded vowel" },
          null,
        ],
        [
          { ipa: "ə", example: "अगर əgar", highlighted: "[ə]gar", description: "mid central vowel (schwa)" },
          { ipa: "aː", example: "आम aːm", highlighted: "[aː]m", description: "open central unrounded vowel (long)" },
          null,
          null,
          null,
        ],
      ],
    },
    {
      title: "Stops (स्पर्श व्यंजन)",
      subtitle: "Four-way distinction: voicing × aspiration",
      category: "consonant",
      cols: 5,
      rows: [
        {
          bgColor: 'bg-blue-200',
          hoverColor: 'hover:bg-blue-300',
          cells: [
            { ipa: "p", example: "पानी paːniː", highlighted: "[p]aːniː", needsSchwa: true, description: "voiceless bilabial stop (unaspirated)" },
            { ipa: "t̪", example: "ताज t̪aːdʒ", highlighted: "[t̪]aːdʒ", needsSchwa: true, description: "voiceless dental stop (unaspirated)" },
            { ipa: "ʈ", example: "टोपी ʈoːpiː", highlighted: "[ʈ]oːpiː", needsSchwa: true, description: "voiceless retroflex stop (unaspirated)" },
            { ipa: "c", example: "चाय caːj", highlighted: "[c]aːj", needsSchwa: true, description: "voiceless palatal stop (unaspirated)" },
            { ipa: "k", example: "काम kaːm", highlighted: "[k]aːm", needsSchwa: true, description: "voiceless velar stop (unaspirated)" },
          ],
        },
        {
          bgColor: 'bg-blue-300',
          hoverColor: 'hover:bg-blue-400',
          cells: [
            { ipa: "pʰ", example: "फल pʰal", highlighted: "[pʰ]al", needsSchwa: true, description: "voiceless bilabial stop (aspirated)" },
            { ipa: "t̪ʰ", example: "थाली t̪ʰaːliː", highlighted: "[t̪ʰ]aːliː", needsSchwa: true, description: "voiceless dental stop (aspirated)" },
            { ipa: "ʈʰ", example: "ठंडा ʈʰəɳɖaː", highlighted: "[ʈʰ]əɳɖaː", needsSchwa: true, description: "voiceless retroflex stop (aspirated)" },
            { ipa: "cʰ", example: "छत cʰət", highlighted: "[cʰ]ət", needsSchwa: true, description: "voiceless palatal stop (aspirated)" },
            { ipa: "kʰ", example: "खाना kʰaːnaː", highlighted: "[kʰ]aːnaː", needsSchwa: true, description: "voiceless velar stop (aspirated)" },
          ],
        },
        {
          bgColor: 'bg-blue-400',
          hoverColor: 'hover:bg-blue-500',
          cells: [
            { ipa: "b", example: "बड़ा bəɽaː", highlighted: "[b]əɽaː", description: "voiced bilabial stop (unaspirated)" },
            { ipa: "d̪", example: "दाल d̪aːl", highlighted: "[d̪]aːl", description: "voiced dental stop (unaspirated)" },
            { ipa: "ɖ", example: "डाल ɖaːl", highlighted: "[ɖ]aːl", description: "voiced retroflex stop (unaspirated)" },
            { ipa: "ɟ", example: "जल ɟəl", highlighted: "[ɟ]əl", description: "voiced palatal stop (unaspirated)" },
            { ipa: "g", example: "गाना gaːnaː", highlighted: "[g]aːnaː", description: "voiced velar stop (unaspirated)" },
          ],
        },
        {
          bgColor: 'bg-blue-500',
          hoverColor: 'hover:bg-blue-600',
          cells: [
            { ipa: "bʱ", example: "भाई bʱaːiː", highlighted: "[bʱ]aːiː", description: "voiced bilabial stop (aspirated)" },
            { ipa: "d̪ʱ", example: "धन d̪ʱən", highlighted: "[d̪ʱ]ən", description: "voiced dental stop (aspirated)" },
            { ipa: "ɖʱ", example: "ढोल ɖʱoːl", highlighted: "[ɖʱ]oːl", description: "voiced retroflex stop (aspirated)" },
            { ipa: "ɟʱ", example: "झील ɟʱiːl", highlighted: "[ɟʱ]iːl", description: "voiced palatal stop (aspirated)" },
            { ipa: "gʱ", example: "घर gʱər", highlighted: "[gʱ]ər", description: "voiced velar stop (aspirated)" },
          ],
        },
      ],
    },
    {
      title: "Nasals (नासिक्य)",
      subtitle: "Five places of articulation",
      category: "consonant",
      cols: 5,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "माता maːt̪aː", highlighted: "[m]aːt̪aː", description: "bilabial nasal" },
            { ipa: "n", example: "नाक naːk", highlighted: "[n]aːk", description: "dental nasal" },
            { ipa: "ɳ", example: "पानी paːɳiː", highlighted: "paː[ɳ]iː", description: "retroflex nasal" },
            { ipa: "ɲ", example: "ज्ञान ɡjaːn", highlighted: "ɡ[ɲ]aːn", description: "palatal nasal" },
            { ipa: "ŋ", example: "रंग rəŋɡ", highlighted: "rə[ŋ]ɡ", description: "velar nasal" },
          ],
        },
      ],
    },
    {
      title: "Fricatives & Approximants",
      subtitle: "Sonorants and continuants",
      category: "consonant",
      cols: 6,
      rows: [
        {
          bgColor: 'bg-cyan-200',
          hoverColor: 'hover:bg-cyan-300',
          cells: [
            { ipa: "s", example: "साथ saːt̪ʰ", highlighted: "[s]aːt̪ʰ", description: "voiceless alveolar fricative" },
            { ipa: "ʃ", example: "शहर ʃəɦər", highlighted: "[ʃ]əɦər", description: "voiceless postalveolar fricative" },
            { ipa: "ɦ", example: "हाथ ɦaːt̪ʰ", highlighted: "[ɦ]aːt̪ʰ", description: "voiced glottal fricative" },
            null,
            null,
            null,
          ],
        },
        {
          bgColor: 'bg-teal-100',
          hoverColor: 'hover:bg-teal-200',
          cells: [
            { ipa: "l", example: "लाल laːl", highlighted: "[l]aːl", description: "alveolar lateral approximant" },
            { ipa: "r", example: "राम raːm", highlighted: "[r]aːm", description: "alveolar trill" },
            { ipa: "ɽ", example: "बड़ा bəɽaː", highlighted: "bə[ɽ]aː", description: "retroflex flap" },
            { ipa: "j", example: "यह jəɦ", highlighted: "[j]əɦ", description: "palatal approximant" },
            { ipa: "ʋ", example: "वह ʋəɦ", highlighted: "[ʋ]əɦ", description: "labiodental approximant" },
            null,
          ],
        },
      ],
    },
  ],
},

korean: {
  name: "Korean (Seoul)",
  flag: "🇰🇷",
  sections: [
    {
      title: "Vowels (모음)",
      subtitle: "Monophthongs",
      category: "vowel",
      cols: 7,
      grid: [
        [
          { ipa: "i", example: "이 i", highlighted: "[i]", description: "close front unrounded vowel" },
          { ipa: "e", example: "에 e", highlighted: "[e]", description: "mid front unrounded vowel" },
          { ipa: "ɛ", example: "애 ɛ", highlighted: "[ɛ]", description: "open-mid front unrounded vowel" },
          { ipa: "a", example: "아 a", highlighted: "[a]", description: "open front unrounded vowel" },
          { ipa: "ʌ", example: "어 ʌ", highlighted: "[ʌ]", description: "open-mid back unrounded vowel" },
          { ipa: "o", example: "오 o", highlighted: "[o]", description: "mid back rounded vowel" },
          { ipa: "u", example: "우 u", highlighted: "[u]", description: "close back rounded vowel" },
        ],
        [
          { ipa: "ɯ", example: "으 ɯ", highlighted: "[ɯ]", description: "close back unrounded vowel" },
          { ipa: "we", example: "웨 we", highlighted: "[we]", description: "diphthong: w + e" },
          { ipa: "wɛ", example: "왜 wɛ", highlighted: "[wɛ]", description: "diphthong: w + ɛ" },
          { ipa: "wa", example: "와 wa", highlighted: "[wa]", description: "diphthong: w + a" },
          { ipa: "wʌ", example: "워 wʌ", highlighted: "[wʌ]", description: "diphthong: w + ʌ" },
          { ipa: "ø", example: "외 ø", highlighted: "[ø]", description: "mid front rounded vowel" },
          { ipa: "y", example: "위 y", highlighted: "[y]", description: "close front rounded vowel" },
        ],
      ],
    },
    {
      title: "Stops (파열음)",
      subtitle: "Three-way distinction: lenis/aspirated/fortis",
      category: "consonant",
      cols: 9,
      rows: [
        {
          bgColor: 'bg-blue-200',
          hoverColor: 'hover:bg-blue-300',
          cells: [
            { ipa: "p", example: "바다 pada", highlighted: "[p]ada", description: "lenis bilabial stop" },
            { ipa: "pʰ", example: "파도 pʰado", highlighted: "[pʰ]ado", needsSchwa: true, description: "aspirated bilabial stop" },
            { ipa: "p͈", example: "빠다 p͈ada", highlighted: "[p͈]ada", needsSchwa: true, description: "fortis bilabial stop" },
            { ipa: "t", example: "다리 tari", highlighted: "[t]ari", description: "lenis alveolar stop" },
            { ipa: "tʰ", example: "타다 tʰada", highlighted: "[tʰ]ada", needsSchwa: true, description: "aspirated alveolar stop" },
            { ipa: "t͈", example: "따다 t͈ada", highlighted: "[t͈]ada", needsSchwa: true, description: "fortis alveolar stop" },
            { ipa: "k", example: "가다 kada", highlighted: "[k]ada", description: "lenis velar stop" },
            { ipa: "kʰ", example: "카드 kʰadɯ", highlighted: "[kʰ]adɯ", needsSchwa: true, description: "aspirated velar stop" },
            { ipa: "k͈", example: "까다 k͈ada", highlighted: "[k͈]ada", needsSchwa: true, description: "fortis velar stop" },
          ],
        },
      ],
    },
    {
      title: "Affricates (파찰음)",
      subtitle: "Three-way distinction",
      category: "consonant",
      cols: 3,
      rows: [
        {
          bgColor: 'bg-blue-300',
          hoverColor: 'hover:bg-blue-400',
          cells: [
            { ipa: "tɕ", example: "자다 tɕada", highlighted: "[tɕ]ada", description: "lenis alveolopalatal affricate" },
            { ipa: "tɕʰ", example: "차다 tɕʰada", highlighted: "[tɕʰ]ada", needsSchwa: true, description: "aspirated alveolopalatal affricate" },
            { ipa: "t͈ɕ", example: "짜다 t͈ɕada", highlighted: "[t͈ɕ]ada", needsSchwa: true, description: "fortis alveolopalatal affricate" },
          ],
        },
      ],
    },
    {
      title: "Fricatives (마찰음)",
      subtitle: "Plain and fortis",
      category: "consonant",
      cols: 3,
      rows: [
        {
          bgColor: 'bg-cyan-200',
          hoverColor: 'hover:bg-cyan-300',
          cells: [
            { ipa: "s", example: "사다 sada", highlighted: "[s]ada", description: "lenis alveolar fricative" },
            { ipa: "s͈", example: "싸다 s͈ada", highlighted: "[s͈]ada", description: "fortis alveolar fricative" },
            { ipa: "h", example: "하다 hada", highlighted: "[h]ada", description: "voiceless glottal fricative" },
          ],
        },
      ],
    },
    {
      title: "Sonorants (공명음)",
      subtitle: "Nasals, liquids, approximants",
      category: "consonant",
      cols: 6,
      rows: [
        {
          bgColor: 'bg-green-100',
          hoverColor: 'hover:bg-green-200',
          cells: [
            { ipa: "m", example: "마다 mada", highlighted: "[m]ada", description: "bilabial nasal" },
            { ipa: "n", example: "나다 nada", highlighted: "[n]ada", description: "alveolar nasal" },
            { ipa: "ŋ", example: "강 kaŋ", highlighted: "ka[ŋ]", description: "velar nasal" },
            { ipa: "l", example: "라디오 ladio", highlighted: "[l]adio", description: "alveolar lateral approximant" },
            { ipa: "ɾ", example: "가리 kaɾi", highlighted: "ka[ɾ]i", description: "alveolar tap (intervocalic)" },
            null,
          ],
        },
      ],
    },
  ],
},

};

