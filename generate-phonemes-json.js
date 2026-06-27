// Run: node generate-phonemes-json.js
// Outputs: public/phonemes.json — fetched by RaterSystemNew admin for script generation
import { LANGUAGE_DATA } from './src/languages.js'
import fs from 'fs'

function flattenCells(section) {
  if (section.list) return section.list.filter(Boolean)
  if (section.rows) return section.rows.flat().filter(Boolean)
  if (section.grid) return section.grid.flat().filter(Boolean)
  return []
}

const out = {}

for (const [langCode, lang] of Object.entries(LANGUAGE_DATA)) {
  out[langCode] = {
    name: lang.name,
    flag: lang.flag,
    defaultVoice: lang.defaultVoice ?? 'female',
    sections: lang.sections.map(s => ({
      title: s.title,
      subtitle: s.subtitle ?? '',
      category: s.category ?? 'phoneme',
      cells: flattenCells(s).map(c => ({
        ipa:        c.ipa,
        example:    c.example ?? '',
        highlighted: c.highlighted ?? '',
        needsSchwa: c.needsSchwa ?? false,
      })),
    })).filter(s => s.cells.length > 0),
  }
}

fs.mkdirSync('public', { recursive: true })
fs.writeFileSync('public/phonemes.json', JSON.stringify(out, null, 2))
console.log(`Written public/phonemes.json (${Object.keys(out).length} languages)`)
