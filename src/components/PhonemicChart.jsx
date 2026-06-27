import React, { useMemo } from 'react'
import PhonemeCell from './PhonemeCell.jsx'

// ─── Derive subtype for a cell given its section ───────────────────────────
function cellSubtype(section, rowIdx) {
  if (section.category === 'tone') return 'tone'
  if (section.category === 'diphthong') return section.subtype || 'diphthong'
  if (section.category === 'vowel') return section.subtype || 'oral'
  // consonant
  if (section.rowSubtypes && rowIdx !== undefined) return section.rowSubtypes[rowIdx] ?? 'sonorant'
  return 'unvoiced'
}

// ─── Grid of cells (handles rows or list) ─────────────────────────────────
function SectionGrid({ section, language, voice, play, playing, compact }) {
  const colCount = useMemo(() => {
    if (section.rows) return Math.max(...section.rows.map(r => r.length))
    return null
  }, [section])

  if (section.rows) {
    return (
      <div className="space-y-1">
        {section.rows.map((row, rowIdx) => {
          const subtype = cellSubtype(section, rowIdx)
          const padded = row.length < colCount
            ? [...row, ...Array(colCount - row.length).fill(null)]
            : row
          return (
            <div
              key={rowIdx}
              className="grid gap-1"
              style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0,1fr))` }}
            >
              {padded.map((cell, colIdx) =>
                cell ? (
                  <PhonemeCell
                    key={`${cell.ipa}-${rowIdx}-${colIdx}`}
                    {...cell}
                    subtype={subtype}
                    language={language}
                    voice={voice}
                    play={play}
                    playing={playing}
                    compact={compact}
                  />
                ) : (
                  <div key={`empty-${rowIdx}-${colIdx}`} />
                )
              )}
            </div>
          )
        })}
      </div>
    )
  }

  if (section.list) {
    const subtype = cellSubtype(section)
    return (
      <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(72px,1fr))' }}>
        {section.list.map((cell, idx) => (
          <PhonemeCell
            key={`${cell.ipa}-${idx}`}
            {...cell}
            subtype={subtype}
            language={language}
            voice={voice}
            play={play}
            playing={playing}
            compact={compact}
          />
        ))}
      </div>
    )
  }

  return null
}

// ─── One labelled section block ────────────────────────────────────────────
function SectionBlock({ section, language, voice, play, playing, compact }) {
  const allIpas = useMemo(() => {
    const cells = section.rows
      ? section.rows.flat().filter(Boolean)
      : (section.list || [])
    return cells.map(c => c.ipa).filter(Boolean)
  }, [section])

  return (
    <div className="flex gap-3 items-start">
      {/* Rotated label */}
      <div className="flex-shrink-0 w-6 flex items-center justify-center">
        <span
          className="text-xs font-bold tracking-widest uppercase text-gray-400 whitespace-nowrap select-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {section.title}
        </span>
      </div>

      {/* Grid */}
      <div className="flex-1 min-w-0">
        {section.subtitle && (
          <p className="text-xs text-gray-400 mb-1.5">{section.subtitle}</p>
        )}
        <SectionGrid
          section={section}
          language={language}
          voice={voice}
          play={play}
          playing={playing}
          compact={compact}
        />
        {allIpas.length > 1 && section.category !== 'tone' && (
          <button
            onClick={() => {/* play all handled by parent */}}
            className="mt-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            ▶ play all
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Legend ────────────────────────────────────────────────────────────────
const LEGEND = [
  { subtype: 'oral',      label: 'Oral vowels',   bg: 'bg-sky-100 border-sky-300' },
  { subtype: 'nasal',     label: 'Nasal vowels',  bg: 'bg-sky-400 border-sky-600' },
  { subtype: 'diphthong', label: 'Diphthongs',    bg: 'bg-indigo-100 border-indigo-300' },
  { subtype: 'unvoiced',  label: 'Voiceless',     bg: 'bg-emerald-50 border-emerald-300' },
  { subtype: 'voiced',    label: 'Voiced',        bg: 'bg-emerald-200 border-emerald-400' },
  { subtype: 'sonorant',  label: 'Sonorant',      bg: 'bg-emerald-400 border-emerald-600' },
  { subtype: 'tone',      label: 'Tones',         bg: 'bg-amber-100 border-amber-300' },
]

function usePresentSubtypes(sections) {
  return useMemo(() => {
    const seen = new Set()
    for (const sec of sections) {
      if (sec.category === 'tone') { seen.add('tone'); continue }
      if (sec.category === 'diphthong') { seen.add(sec.subtype || 'diphthong'); continue }
      if (sec.category === 'vowel') { seen.add(sec.subtype || 'oral'); continue }
      // consonant
      if (sec.rowSubtypes) sec.rowSubtypes.forEach(s => seen.add(s))
      else seen.add('unvoiced')
    }
    return LEGEND.filter(l => seen.has(l.subtype))
  }, [sections])
}

// ─── Main chart ────────────────────────────────────────────────────────────
export default function PhonemicChart({
  language, langData, voice, play, playing, compact = false,
}) {
  const sections = langData.sections
  const legend = usePresentSubtypes(sections)

  return (
    <div className="flex gap-6 items-start">
      {/* Sections column */}
      <div className="flex-1 min-w-0 space-y-5">
        {sections.map((sec, i) => (
          <SectionBlock
            key={i}
            section={sec}
            language={language}
            voice={voice}
            play={play}
            playing={playing}
            compact={compact}
          />
        ))}
      </div>

      {/* Sidebar: flag + title + legend */}
      <div className="flex-shrink-0 w-40 space-y-4 pt-1">
        <div className="text-right space-y-1">
          <div className="text-4xl">{langData.flag}</div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide leading-tight">
            Interactive<br />Phonemic Chart
          </p>
          <p className="text-base font-bold text-gray-800 leading-snug">{langData.name}</p>
        </div>

        <div className="border-t border-gray-200 pt-3 space-y-1.5">
          {legend.map(({ subtype, label, bg }) => (
            <div key={subtype} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded border flex-shrink-0 ${bg}`} />
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-300 leading-tight">© Lenguax English Language Training, Testing & Research Ltd.</p>
      </div>
    </div>
  )
}
