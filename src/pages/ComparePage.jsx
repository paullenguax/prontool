import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { LANGUAGE_DATA } from '../languages.js'
import { useAudio } from '../hooks/useAudio.js'
import PhonemicChart from '../components/PhonemicChart.jsx'

const active = Object.entries(LANGUAGE_DATA).filter(([, l]) => l.status !== 'coming_soon')

export default function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [langA, setLangA] = useState(searchParams.get('a') || '')
  const [langB, setLangB] = useState(searchParams.get('b') || '')
  const [voice, setVoice] = useState('female')
  const { play, playing, error } = useAudio()

  useEffect(() => {
    const p = {}
    if (langA) p.a = langA
    if (langB) p.b = langB
    setSearchParams(p, { replace: true })
  }, [langA, langB, setSearchParams])

  const dataA = langA ? LANGUAGE_DATA[langA] : null
  const dataB = langB ? LANGUAGE_DATA[langB] : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
        <Link
          to={langA ? `/${langA}` : '/'}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </Link>

        <div className="flex-1" />

        {/* Voice toggle */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          {['female', 'male'].map(v => (
            <button
              key={v}
              onClick={() => setVoice(v)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors capitalize ${
                voice === v ? 'bg-sky-600 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="fixed top-14 right-4 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow z-50">
          {error}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <h1 className="text-lg font-semibold text-gray-700 mb-4">Compare Languages</h1>

        {/* Pickers */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <LanguagePicker
            label="Language A"
            value={langA}
            onChange={setLangA}
            exclude={langB}
          />
          <LanguagePicker
            label="Language B"
            value={langB}
            onChange={setLangB}
            exclude={langA}
          />
        </div>

        {/* Charts */}
        {dataA || dataB ? (
          <div className="grid md:grid-cols-2 gap-8">
            <ChartPanel lang={langA} langData={dataA} voice={voice} play={play} playing={playing} onClear={() => setLangA('')} />
            <ChartPanel lang={langB} langData={dataB} voice={voice} play={play} playing={playing} onClear={() => setLangB('')} />
          </div>
        ) : (
          <p className="text-center text-gray-400 py-20">Select two languages above to compare their phonemic inventories.</p>
        )}
      </div>
    </div>
  )
}

function LanguagePicker({ label, value, onChange, exclude }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <option value="">— choose —</option>
        {active
          .filter(([code]) => code !== exclude)
          .map(([code, lang]) => (
            <option key={code} value={code}>{lang.flag} {lang.name}</option>
          ))}
      </select>
    </div>
  )
}

function ChartPanel({ lang, langData, voice, play, playing, onClear }) {
  if (!langData) {
    return (
      <div className="border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center min-h-64 text-gray-400 text-sm">
        No language selected
      </div>
    )
  }
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative">
      <button
        onClick={onClear}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        title="Remove"
      >
        <X className="w-4 h-4" />
      </button>
      <PhonemicChart
        language={lang}
        langData={langData}
        voice={voice}
        play={play}
        playing={playing}
        compact
      />
    </div>
  )
}
