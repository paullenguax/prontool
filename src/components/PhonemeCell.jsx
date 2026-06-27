import React, { useState, useCallback, useMemo } from 'react'

const SUBTYPE_STYLES = {
  oral:      'bg-sky-100 border-sky-300 text-sky-900 hover:bg-sky-200',
  nasal:     'bg-sky-400 border-sky-600 text-white hover:bg-sky-500',
  diphthong: 'bg-indigo-100 border-indigo-300 text-indigo-900 hover:bg-indigo-200',
  unvoiced:  'bg-emerald-50 border-emerald-300 text-emerald-900 hover:bg-emerald-100',
  voiced:    'bg-emerald-200 border-emerald-400 text-emerald-900 hover:bg-emerald-300',
  sonorant:  'bg-emerald-400 border-emerald-600 text-white hover:bg-emerald-500',
  tone:      'bg-amber-100 border-amber-300 text-amber-900 hover:bg-amber-200',
}

const RING_STYLES = {
  oral:      'ring-sky-400',
  nasal:     'ring-sky-200',
  diphthong: 'ring-indigo-400',
  unvoiced:  'ring-emerald-400',
  voiced:    'ring-emerald-500',
  sonorant:  'ring-emerald-200',
  tone:      'ring-amber-400',
}

function parseHighlight(highlighted, example) {
  if (!highlighted) return { word: example || '', parts: null }
  const clean = (example || '').replace(/\s*\([^)]*\).*$/, '').trim().split(/\s+/)[0] || example || ''
  const translit = highlighted.replace(/[\[\]]/g, '')
  const word = clean !== translit ? clean : translit
  const parts = highlighted.split(/[\[\]]/)
  return { word, parts }
}

const PhonemeCell = React.memo(function PhonemeCell({
  ipa, example, highlighted, description, needsSchwa,
  language, voice, play, playing, subtype = 'oral', compact = false,
  showWord = true,
}) {
  const isPlayingPhoneme = playing?.lang === language && playing?.id === ipa && playing?.type === 'phoneme'
  const [wordActive, setWordActive] = useState(false)
  const [showSchwa, setShowSchwa] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  const { word, parts } = useMemo(() => parseHighlight(highlighted, example), [highlighted, example])

  const handlePhoneme = useCallback(() => {
    play(language, 'phoneme', ipa, voice)
    if (needsSchwa) {
      setShowSchwa(true)
      setTimeout(() => setShowSchwa(false), 800)
    }
  }, [play, language, ipa, voice, needsSchwa])

  const handleWord = useCallback(() => {
    play(language, 'word', example, voice)
    setWordActive(true)
    setTimeout(() => setWordActive(false), 700)
  }, [play, language, example, voice])

  const styles = SUBTYPE_STYLES[subtype] || SUBTYPE_STYLES.oral
  const ring   = RING_STYLES[subtype]   || RING_STYLES.oral

  const ipaSize = compact ? 'text-lg' : 'text-2xl'

  return (
    <div className={`relative border rounded-lg overflow-visible ${styles} ${isPlayingPhoneme ? `ring-2 ${ring}` : ''}`}>
      {/* Tooltip */}
      {tooltip && description && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-1.5 text-xs rounded-lg shadow-xl whitespace-nowrap bg-gray-900 text-white pointer-events-none">
          <span className="font-mono mr-1.5">{ipa}</span>{description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rotate-45 bg-gray-900" />
        </div>
      )}

      {/* IPA button */}
      <button
        onClick={handlePhoneme}
        onPointerEnter={() => setTooltip(true)}
        onPointerLeave={() => setTooltip(false)}
        className={`w-full flex items-center justify-center gap-0.5 ${compact ? 'py-1.5 px-1' : 'py-2.5 px-2'} focus:outline-none`}
        aria-label={`Play ${ipa}`}
      >
        <span className={`${ipaSize} font-bold leading-none`}>{ipa}</span>
        {needsSchwa && (
          <span className={`text-sm font-bold transition-opacity ${showSchwa ? 'opacity-100' : 'opacity-0'}`}>
            ə
          </span>
        )}
      </button>

      {/* Word button */}
      {showWord && !compact && example && subtype !== 'tone' && (
        <>
          <div className="border-t border-current opacity-20 mx-2" />
          <button
            onClick={handleWord}
            className="w-full pb-2 pt-1 px-1 text-center focus:outline-none"
            aria-label={`Play word ${word}`}
          >
            <span className={`text-xs leading-tight block ${wordActive ? 'opacity-60' : ''}`}>
              {parts
                ? parts.map((p, i) =>
                    i % 2 === 1
                      ? <span key={i} className={`font-bold underline underline-offset-1 ${wordActive ? 'text-rose-500' : ''}`}>{p}</span>
                      : <span key={i}>{p}</span>
                  )
                : word
              }
            </span>
          </button>
        </>
      )}
    </div>
  )
})

export default PhonemeCell
