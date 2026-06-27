import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRightLeft, Download } from 'lucide-react'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import { LANGUAGE_DATA } from '../languages.js'
import { useAudio } from '../hooks/useAudio.js'
import PhonemicChart from '../components/PhonemicChart.jsx'
import lenguaxLogo from '../assets/Lenguax-Logo-Abbreviated-Square.png'

export default function LanguagePlayerPage() {
  const { lang } = useParams()
  const navigate = useNavigate()
  const langData = LANGUAGE_DATA[lang]
  const [voice, setVoice] = useState(langData?.defaultVoice || 'female')
  const [compact, setCompact] = useState(false)
  const { play, playing, error } = useAudio()
  const chartRef = useRef(null)

  if (!langData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <div className="text-center">
          <p className="text-lg font-medium">Language not found</p>
          <Link to="/" className="text-sky-500 text-sm mt-2 block">← Back to all languages</Link>
        </div>
      </div>
    )
  }

  const exportChart = async () => {
    if (!chartRef.current) return
    const canvas = await html2canvas(chartRef.current, {
      scale: 2, useCORS: true, backgroundColor: '#f9fafb', logging: false,
    })
    const a = document.createElement('a')
    a.download = `${lang}_phonemic_chart.png`
    a.href = canvas.toDataURL()
    a.click()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="no-export sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Languages</span>
        </button>

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

        {/* Compact toggle */}
        <button
          onClick={() => setCompact(c => !c)}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            compact ? 'bg-sky-600 text-white border-sky-600' : 'text-gray-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          {compact ? 'Expand' : 'Compact'}
        </button>

        {/* Compare */}
        <Link
          to={`/compare?a=${lang}`}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Compare</span>
        </Link>

        {/* Export */}
        <button
          onClick={exportChart}
          className="p-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors"
          title="Download as PNG"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Error toast */}
      {error && (
        <div className="fixed top-14 right-4 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow z-50">
          {error}
        </div>
      )}

      {/* Chart */}
      <div ref={chartRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <PhonemicChart
          language={lang}
          langData={langData}
          voice={voice}
          play={play}
          playing={playing}
          compact={compact}
        />
        <div className="no-export mt-6 flex items-center justify-between text-xs text-gray-300">
          <span>lenguax.com/pronunciation</span>
          <img src={lenguaxLogo} alt="Lenguax" className="h-8 w-auto opacity-40" />
        </div>
      </div>
    </div>
  )
}
