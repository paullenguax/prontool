export const LANGUAGE_DATA = {
  english: {
    name: 'English (RP)',
    flag: '🇬🇧',
    sections: [
      {
        title: 'Monophthongs',
        subtitle: 'Single vowel sounds',
        category: "vowel",
        bgColor: 'bg-blue-50',
        cols: 4,
        grid: [
          [
            { ipa: 'iː', example: 'heat', highlighted: 'h[ea]t' },
            { ipa: 'ɪ', example: 'hit', highlighted: 'h[i]t' },
            { ipa: 'ʊ', example: 'put', highlighted: 'p[u]t' },
            { ipa: 'uː', example: 'pool', highlighted: 'p[oo]l' },
          ],
          [
            { ipa: 'e', example: 'bread', highlighted: 'br[ea]d' },
            { ipa: 'ə', example: 'about', highlighted: '[a]bout' },
            { ipa: 'ɜː', example: 'world', highlighted: 'w[or]ld' },
            { ipa: 'ɔː', example: 'horse', highlighted: 'h[or]se' },
          ],
          [
            { ipa: 'æ', example: 'bat', highlighted: 'b[a]t' },
            { ipa: 'ʌ', example: 'cup', highlighted: 'c[u]p' },
            { ipa: 'aː', example: 'bar', highlighted: 'b[ar]' },
            { ipa: 'ɒ', example: 'hot', highlighted: 'h[o]t' },
          ],
        ],
      },
      {
        title: 'Diphthongs',
        subtitle: 'Two vowel sounds combined',
        bgColor: 'bg-purple-50',
        category: "diphthong",
        cols: 3,
        grid: [
          [
            { ipa: 'ɪə', example: 'here', highlighted: 'h[ere]' },
            { ipa: 'eɪ', example: 'late', highlighted: 'l[a]te' },
            null,
          ],
          [
            { ipa: 'ʊə', example: 'tour', highlighted: 't[our]' },
            { ipa: 'ɔɪ', example: 'toy', highlighted: 't[oy]' },
            { ipa: 'əʊ', example: 'blow', highlighted: 'bl[ow]' },
          ],
          [
            { ipa: 'eə', example: 'there', highlighted: 'th[ere]' },
            { ipa: 'aɪ', example: 'why', highlighted: 'wh[y]' },
            { ipa: 'aʊ', example: 'how', highlighted: 'h[ow]' },
          ],
        ],
      },
      {
        title: 'Consonants',
        subtitle: 'Organized by voicing',
        bgColor: 'bg-green-50',
        category: "consonant",
        cols: 8,
        showRowLabels: true,
        rows: [
          {
            label: 'Voiceless',
            bgColor: 'bg-green-200',
            hoverColor: 'hover:bg-green-300',
            cells: [
              { ipa: "t", example: "ten", highlighted: "[t]en", needsSchwa: true },
{ ipa: "p", example: "pen", highlighted: "[p]en", needsSchwa: true },
              { ipa: 'k', example: 'kilo', highlighted: '[k]ilo', needsSchwa: true },
              { ipa: 'f', example: 'fly', highlighted: '[f]ly', needsSchwa: true },
              { ipa: 'θ', example: 'thank', highlighted: '[th]ank', needsSchwa: true },
              { ipa: 's', example: 'stay', highlighted: '[s]tay' },
              { ipa: 'ʃ', example: 'ship', highlighted: '[sh]ip' },
              { ipa: 'tʃ', example: 'choose', highlighted: '[ch]oose', needsSchwa: true },
            ],
          },
          {
            label: 'Voiced',
            bgColor: 'bg-green-300',
            hoverColor: 'hover:bg-green-400',
            cells: [
              { ipa: 'b', example: 'band', highlighted: '[b]and' },
              { ipa: 'd', example: 'dark', highlighted: '[d]ark' },
              { ipa: 'g', example: 'good', highlighted: '[g]ood' },
              { ipa: 'v', example: 'victor', highlighted: '[v]ictor' },
              { ipa: 'ð', example: 'these', highlighted: '[th]ese' },
              { ipa: 'z', example: 'zulu', highlighted: '[z]ulu' },
              { ipa: 'ʒ', example: 'pleasure', highlighted: 'plea[s]ure' },
              { ipa: 'dʒ', example: 'job', highlighted: '[j]ob' },
            ],
          },
          {
            label: 'Other',
            bgColor: 'bg-green-100',
            hoverColor: 'hover:bg-green-200',
            cells: [
              { ipa: 'm', example: 'mike', highlighted: '[m]ike' },
              { ipa: 'n', example: 'november', highlighted: '[n]ovember' },
              { ipa: 'ŋ', example: 'bring', highlighted: 'bri[ng]' },
              { ipa: 'j', example: 'yankee', highlighted: '[y]ankee' },
              { ipa: 'l', example: 'london', highlighted: '[l]ondon' },
              { ipa: 'r', example: 'robert', highlighted: '[r]obert' },
              { ipa: 'w', example: 'wednesday', highlighted: '[w]ednesday' },
              { ipa: 'h', example: 'high', highlighted: '[h]igh' },
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
      subtitle: "Single vowel sounds",
      category: "vowel",
      cols: 4,
      grid: [
        [
          { ipa: "i", example: "beet", highlighted: "b[ee]t" },
          { ipa: "ɪ", example: "bit", highlighted: "b[i]t" },
          { ipa: "ʊ", example: "foot", highlighted: "f[oo]t" },
          { ipa: "u", example: "boot", highlighted: "b[oo]t" },
        ],
        [
          { ipa: "e", example: "bait", highlighted: "b[ai]t" },
          { ipa: "ɛ", example: "bet", highlighted: "b[e]t" },
          { ipa: "ʌ", example: "cup", highlighted: "c[u]p" },
          { ipa: "o", example: "boat", highlighted: "b[oa]t" },
        ],
        [
          { ipa: "æ", example: "cat", highlighted: "c[a]t" },
          { ipa: "ɑ", example: "father", highlighted: "f[a]ther" },
          { ipa: "ɔ", example: "caught", highlighted: "c[augh]t" },
          { ipa: "ɝ", example: "bird", highlighted: "b[ir]d" },
        ],
      ],
    },
    {
      title: "Diphthongs",
      subtitle: "Two vowel sounds combined",
      category: "diphthong",
      cols: 3,
      grid: [
        [
          { ipa: "eɪ", example: "say", highlighted: "s[ay]" },
          { ipa: "aɪ", example: "my", highlighted: "m[y]" },
          { ipa: "ɔɪ", example: "boy", highlighted: "b[oy]" },
        ],
        [
          { ipa: "aʊ", example: "now", highlighted: "n[ow]" },
          { ipa: "oʊ", example: "go", highlighted: "g[o]" },
          { ipa: "ju", example: "few", highlighted: "f[ew]" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by voicing",
      category: "consonant",
      cols: 8,
      rows: [
        {
          label: "Voiceless",
          cells: [
            { ipa: "p", example: "pen", highlighted: "[p]en", needsSchwa: true },
            { ipa: "t", example: "ten", highlighted: "[t]en", needsSchwa: true },
            { ipa: "k", example: "cat", highlighted: "[c]at", needsSchwa: true },
            { ipa: "f", example: "fan", highlighted: "[f]an" },
            { ipa: "θ", example: "think", highlighted: "[th]ink", needsSchwa: true },
            { ipa: "s", example: "see", highlighted: "[s]ee" },
            { ipa: "ʃ", example: "shoe", highlighted: "[sh]oe" },
            { ipa: "tʃ", example: "church", highlighted: "[ch]urch", needsSchwa: true },
          ],
        },
        {
          label: "Voiced",
          cells: [
            { ipa: "b", example: "bat", highlighted: "[b]at" },
            { ipa: "d", example: "dog", highlighted: "[d]og" },
            { ipa: "g", example: "go", highlighted: "[g]o" },
            { ipa: "v", example: "van", highlighted: "[v]an" },
            { ipa: "ð", example: "this", highlighted: "[th]is" },
            { ipa: "z", example: "zoo", highlighted: "[z]oo" },
            { ipa: "ʒ", example: "measure", highlighted: "mea[s]ure" },
            { ipa: "dʒ", example: "judge", highlighted: "[j]udge" },
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
        bgColor: 'bg-blue-50',
        category: "vowel",
        cols: 5,
        grid: [
          [
            { ipa: 'i', example: 'sí', highlighted: 's[í]' },
            { ipa: 'e', example: 'mes', highlighted: 'm[e]s' },
            { ipa: 'a', example: 'casa', highlighted: 'c[a]sa' },
            { ipa: 'o', example: 'sol', highlighted: 's[o]l' },
            { ipa: 'u', example: 'tú', highlighted: 't[ú]' },
          ],
        ],
      },
      {
        title: 'Diphthongs',
        subtitle: 'Common combinations',
        bgColor: 'bg-purple-50',
        category: "diphthong",
        cols: 3,
        grid: [
          [
            { ipa: 'ai̯', example: 'baile', highlighted: 'b[ai]le' },
            { ipa: 'ei̯', example: 'seis', highlighted: 's[ei]s' },
            { ipa: 'au̯', example: 'auto', highlighted: '[au]to' },
          ],
        ],
      },
      {
        title: 'Consonants',
        subtitle: 'Organized by voicing',
        bgColor: 'bg-green-50',
        category: "consonant",
        cols: 6,
        showRowLabels: true,
        rows: [
          {
            label: 'Voiceless',
            bgColor: 'bg-green-200',
            hoverColor: 'hover:bg-green-300',
            cells: [
              { ipa: 'p', example: 'padre', highlighted: '[p]adre' },
              { ipa: 't', example: 'toro', highlighted: '[t]oro' },
              { ipa: 'k', example: 'casa', highlighted: '[c]asa' },
              { ipa: 'f', example: 'foco', highlighted: '[f]oco' },
              { ipa: 's', example: 'sol', highlighted: '[s]ol' },
              { ipa: 'tʃ', example: 'chico', highlighted: '[ch]ico' },
            ],
          },
          {
            label: 'Voiced',
            bgColor: 'bg-green-300',
            hoverColor: 'hover:bg-green-400',
            cells: [
              { ipa: 'b', example: 'barco', highlighted: '[b]arco' },
              { ipa: 'd', example: 'dedo', highlighted: '[d]edo' },
              { ipa: 'g', example: 'gato', highlighted: '[g]ato' },
              { ipa: 'x', example: 'jota', highlighted: '[j]ota' },
              null,
              null,
            ],
          },
          {
            label: 'Sonorants',
            bgColor: 'bg-green-100',
            hoverColor: 'hover:bg-green-200',
            cells: [
              { ipa: 'm', example: 'mano', highlighted: '[m]ano' },
              { ipa: 'n', example: 'nada', highlighted: '[n]ada' },
              { ipa: 'ɲ', example: 'niño', highlighted: 'ni[ñ]o' },
              { ipa: 'l', example: 'lado', highlighted: '[l]ado' },
              { ipa: 'ʎ', example: 'llave', highlighted: '[ll]ave' },
              { ipa: 'r', example: 'perro', highlighted: 'pe[rr]o' },
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
        bgColor: 'bg-blue-50',
        category: "vowel",
        cols: 6,
        grid: [
          [
            { ipa: 'i', example: 'si', highlighted: 's[i]' },
            { ipa: 'y', example: 'tu', highlighted: 't[u]' },
            { ipa: 'u', example: 'vous', highlighted: 'v[ou]s' },
            { ipa: 'e', example: 'été', highlighted: '[é]té' },
            { ipa: 'ø', example: 'deux', highlighted: 'd[eu]x' },
            { ipa: 'o', example: 'beau', highlighted: 'b[eau]' },
          ],
          [
            { ipa: 'ɛ', example: 'belle', highlighted: 'b[e]lle' },
            { ipa: 'œ', example: 'peur', highlighted: 'p[eu]r' },
            { ipa: 'ɔ', example: 'porte', highlighted: 'p[o]rte' },
            { ipa: 'a', example: 'patte', highlighted: 'p[a]tte' },
            { ipa: 'ə', example: 'le', highlighted: 'l[e]' },
            null,
          ],
        ],
      },
      {
        title: 'Nasal Vowels',
        subtitle: 'Nasalized vowels',
        bgColor: 'bg-purple-50',
        category: "vowel",
        cols: 4,
        grid: [
          [
            { ipa: 'ɛ̃', example: 'vin', highlighted: 'v[in]' },
            { ipa: 'œ̃', example: 'un', highlighted: '[un]' },
            { ipa: 'ɑ̃', example: 'blanc', highlighted: 'bl[an]c' },
            { ipa: 'ɔ̃', example: 'bon', highlighted: 'b[on]' },
          ],
        ],
      },
      {
        title: 'Consonants',
        subtitle: 'Organized by voicing',
        bgColor: 'bg-green-50',
        cols: 6,
        category: "consonant",
        showRowLabels: true,
        rows: [
          {
            label: 'Voiceless',
            bgColor: 'bg-green-200',
            hoverColor: 'hover:bg-green-300',
            cells: [
              { ipa: 'p', example: 'pain', highlighted: '[p]ain' },
              { ipa: 't', example: 'tu', highlighted: '[t]u' },
              { ipa: 'k', example: 'coeur', highlighted: '[c]oeur' },
              { ipa: 'f', example: 'feu', highlighted: '[f]eu' },
              { ipa: 's', example: 'sous', highlighted: '[s]ous' },
              { ipa: 'ʃ', example: 'chat', highlighted: '[ch]at' },
            ],
          },
          {
            label: 'Voiced',
            bgColor: 'bg-green-300',
            hoverColor: 'hover:bg-green-400',
            cells: [
              { ipa: 'b', example: 'bain', highlighted: '[b]ain' },
              { ipa: 'd', example: 'doux', highlighted: '[d]oux' },
              { ipa: 'g', example: 'gare', highlighted: '[g]are' },
              { ipa: 'v', example: 'vous', highlighted: '[v]ous' },
              { ipa: 'z', example: 'rose', highlighted: 'ro[s]e' },
              { ipa: 'ʒ', example: 'je', highlighted: '[j]e' },
            ],
          },
          {
            label: 'Sonorants',
            bgColor: 'bg-green-100',
            hoverColor: 'hover:bg-green-200',
            cells: [
              { ipa: 'm', example: 'mais', highlighted: '[m]ais' },
              { ipa: 'n', example: 'non', highlighted: '[n]on' },
              { ipa: 'ɲ', example: 'agneau', highlighted: 'a[gn]eau' },
              { ipa: 'l', example: 'lui', highlighted: '[l]ui' },
              { ipa: 'ʁ', example: 'rue', highlighted: '[r]ue' },
              null,
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
            { ipa: "i", example: "vino", highlighted: "v[i]no" },
            { ipa: "e", example: "mela", highlighted: "m[e]la" },
            { ipa: "ɛ", example: "bello", highlighted: "b[e]llo" },
            { ipa: "a", example: "casa", highlighted: "c[a]sa" },
            { ipa: "ɔ", example: "cosa", highlighted: "c[o]sa" },
            { ipa: "o", example: "solo", highlighted: "s[o]lo" },
            { ipa: "u", example: "luna", highlighted: "l[u]na" },
          ],
        ],
      },
      {
        title: "Consonants",
        subtitle: "Voiceless / Voiced / Sonorants",
        category: "consonant",
        cols: 6,
        rows: [
          {
            label: "Voiceless",
            cells: [
              { ipa: "p", example: "pane", highlighted: "[p]ane", needsSchwa: true },
              { ipa: "t", example: "tempo", highlighted: "[t]empo", needsSchwa: true },
              { ipa: "k", example: "casa", highlighted: "[c]asa", needsSchwa: true },
              { ipa: "f", example: "fare", highlighted: "[f]are" },
              { ipa: "s", example: "sole", highlighted: "[s]ole" },
              { ipa: "tʃ", example: "ciao", highlighted: "[ch]ao", needsSchwa: true },
            ],
          },
          {
            label: "Voiced",
            cells: [
              { ipa: "b", example: "bello", highlighted: "[b]ello" },
              { ipa: "d", example: "dare", highlighted: "[d]are" },
              { ipa: "g", example: "gatto", highlighted: "[g]atto" },
              { ipa: "v", example: "vino", highlighted: "[v]ino" },
              { ipa: "z", example: "zero", highlighted: "[z]ero" },
              { ipa: "dʒ", example: "gelo", highlighted: "[j]elo" },
            ],
          },
          {
            label: "Sonorants",
            cells: [
              { ipa: "m", example: "mare", highlighted: "[m]are" },
              { ipa: "n", example: "naso", highlighted: "[n]aso" },
              { ipa: "ɲ", example: "gnomo", highlighted: "g[n]omo" },
              { ipa: "l", example: "latte", highlighted: "[l]atte" },
              { ipa: "ʎ", example: "figlio", highlighted: "fig[l]io" },
              { ipa: "r", example: "rosso", highlighted: "[r]osso" },
            ],
          },
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
      subtitle: "Eight pure vowels",
      category: "vowel",
      cols: 4,
      grid: [
        [
          { ipa: "i", example: "bir", highlighted: "b[i]r" },
          { ipa: "y", example: "gül", highlighted: "g[ü]l" },
          { ipa: "ɯ", example: "kız", highlighted: "k[ı]z" },
          { ipa: "u", example: "su", highlighted: "s[u]" },
        ],
        [
          { ipa: "e", example: "el", highlighted: "[e]l" },
          { ipa: "ø", example: "göz", highlighted: "g[ö]z" },
          { ipa: "a", example: "kapı", highlighted: "k[a]pı" },
          { ipa: "o", example: "okul", highlighted: "[o]kul" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Organized by voicing",
      category: "consonant",
      cols: 8,
      rows: [
        {
          label: "Voiceless",
          cells: [
            { ipa: "p", example: "para", highlighted: "[p]ara", needsSchwa: true },
            { ipa: "t", example: "tak", highlighted: "[t]ak", needsSchwa: true },
            { ipa: "k", example: "kedi", highlighted: "[k]edi", needsSchwa: true },
            { ipa: "f", example: "fener", highlighted: "[f]ener" },
            { ipa: "s", example: "sarı", highlighted: "[s]arı" },
            { ipa: "ʃ", example: "şarap", highlighted: "[ş]arap" },
            { ipa: "tʃ", example: "çay", highlighted: "[ç]ay", needsSchwa: true },
            null,
          ],
        },
        {
          label: "Voiced",
          cells: [
            { ipa: "b", example: "bal", highlighted: "[b]al" },
            { ipa: "d", example: "dağ", highlighted: "[d]ağ" },
            { ipa: "g", example: "gaz", highlighted: "[g]az" },
            { ipa: "v", example: "ver", highlighted: "[v]er" },
            { ipa: "z", example: "zaman", highlighted: "[z]aman" },
            { ipa: "ʒ", example: "jilet", highlighted: "[j]ilet" },
            null,
            null,
          ],
        },
        {
          label: "Sonorants",
          cells: [
            { ipa: "m", example: "masa", highlighted: "[m]asa" },
            { ipa: "n", example: "nohut", highlighted: "[n]ohut" },
            { ipa: "ɾ", example: "araba", highlighted: "a[r]aba" },
            { ipa: "l", example: "lale", highlighted: "[l]ale" },
            { ipa: "j", example: "yeni", highlighted: "[y]eni" },
            { ipa: "w", example: "", highlighted: "" }, // Turkish has no native /w/
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
          { ipa: "i", example: "si" },
          { ipa: "e", example: "vê" },
          { ipa: "ɛ", example: "pé" },
          { ipa: "a", example: "lá" },
          { ipa: "ɔ", example: "pó" },
          { ipa: "o", example: "avô" },
          { ipa: "u", example: "tu" },
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
          { ipa: "ĩ", example: "fim" },
          { ipa: "ẽ", example: "bem" },
          { ipa: "ã", example: "cão" },
          { ipa: "õ", example: "som" },
          { ipa: "ũ", example: "um" },
        ],
      ],
    },
    {
      title: "Consonants",
      subtitle: "Voiceless / Voiced / Sonorants",
      category: "consonant",
      cols: 6,
      rows: [
        {
          label: "Voiceless",
          cells: [
            { ipa: "p", example: "pão", highlighted: "[p]ão", needsSchwa: true },
            { ipa: "t", example: "tudo", highlighted: "[t]udo", needsSchwa: true },
            { ipa: "k", example: "casa", highlighted: "[c]asa", needsSchwa: true },
            { ipa: "f", example: "fazer", highlighted: "[f]azer" },
            { ipa: "s", example: "sol", highlighted: "[s]ol" },
            { ipa: "ʃ", example: "chá", highlighted: "[ch]á" },
          ],
        },
        {
          label: "Voiced",
          cells: [
            { ipa: "b", example: "bom", highlighted: "[b]om" },
            { ipa: "d", example: "dia", highlighted: "[d]ia" },
            { ipa: "g", example: "gato", highlighted: "[g]ato" },
            { ipa: "v", example: "voz", highlighted: "[v]oz" },
            { ipa: "z", example: "zero", highlighted: "[z]ero" },
            { ipa: "ʒ", example: "já", highlighted: "[j]á" },
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
          label: 'Unaspirated',
          cells: [
            { ipa: 'p', example: '八 bā' },
            { ipa: 't', example: '大 dà' },
            { ipa: 'k', example: '个 gè' },
            { ipa: 'ts', example: '早 zǎo' },
            { ipa: 'tʂ', example: '中 zhōng' },
            { ipa: 'tɕ', example: '家 jiā' },
            null,
          ],
        },
        {
          label: 'Aspirated',
          cells: [
            { ipa: 'pʰ', example: '怕 pà' },
            { ipa: 'tʰ', example: '他 tā' },
            { ipa: 'kʰ', example: '卡 kǎ' },
            { ipa: 'tsʰ', example: '草 cǎo' },
            { ipa: 'tʂʰ', example: '车 chē' },
            { ipa: 'tɕʰ', example: '七 qī' },
            null,
          ],
        },
        {
          label: 'Fricatives',
          cells: [
            { ipa: 'f', example: '发 fā' },
            { ipa: 's', example: '三 sān' },
            { ipa: 'ʂ', example: '是 shì' },
            { ipa: 'ɕ', example: '西 xī' },
            { ipa: 'x', example: '好 hǎo' },
            null,
            null,
          ],
        },
        {
          label: 'Sonorants',
          cells: [
            { ipa: 'm', example: '马 mǎ' },
            { ipa: 'n', example: '你 nǐ' },
            { ipa: 'l', example: '来 lái' },
            { ipa: 'ɻ', example: '人 rén' },
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
          { ipa: 'a', example: '啊 ā' },
          { ipa: 'o', example: '哦 ō' },
          { ipa: 'ɤ', example: '饿 è' },
          { ipa: 'i', example: '衣 yī' },
          { ipa: 'u', example: '五 wǔ' },
          { ipa: 'y', example: '鱼 yú' },
        ],
        [
          { ipa: 'ai', example: '爱 ài' },
          { ipa: 'ei', example: '诶 éi' },
          { ipa: 'au', example: '奥 ào' },
          { ipa: 'ou', example: '欧 ōu' },
          { ipa: 'an', example: '安 ān' },
          { ipa: 'ən', example: '恩 ēn' },
        ],
        [
          { ipa: 'aŋ', example: '昂 áng' },
          { ipa: 'əŋ', example: '鞥 ēng' },
          { ipa: 'ia', example: '呀 yā' },
          { ipa: 'ie', example: '耶 yē' },
          { ipa: 'ua', example: '蛙 wā' },
          { ipa: 'uo', example: '窝 wō' },
        ],
        [
          { ipa: 'yɛ', example: '月 yuè' },
          { ipa: 'iau', example: '腰 yāo' },
          { ipa: 'iou', example: '优 yōu' },
          { ipa: 'uai', example: '歪 wāi' },
          { ipa: 'uei', example: '威 wēi' },
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
          { ipa: 'mā', example: '妈 (mother)' },
          { ipa: 'má', example: '麻 (hemp)' },
          { ipa: 'mǎ', example: '马 (horse)' },
          { ipa: 'mà', example: '骂 (scold)' },
          { ipa: 'ma', example: '吗 (question)' },
        ],
      ],
    },
  ],
},

};

