import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.js'
import { LANGUAGE_DATA } from '../languages.js'
import lenguaxLogo from '../assets/Lenguax-Logo-Abbreviated-Square.png'

export default function LanguageGridPage() {
  const navigate = useNavigate()
  const [statusOverrides, setStatusOverrides] = useState({})

  useEffect(() => {
    getDoc(doc(db, 'pronunciation_config', 'status'))
      .then(snap => { if (snap.exists()) setStatusOverrides(snap.data()) })
      .catch(() => {})
  }, [])

  const languages = Object.entries(LANGUAGE_DATA).map(([code, lang]) => ({
    code,
    ...lang,
    status: statusOverrides[code] ?? lang.status ?? 'active',
  }))

  const active    = languages.filter(l => l.status !== 'coming_soon')
  const comingSoon = languages.filter(l => l.status === 'coming_soon')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Interactive Phonemic Charts</h1>
            <p className="text-gray-500 mt-1">Select a language to explore its sound system</p>
          </div>
          <img src={lenguaxLogo} alt="Lenguax" className="h-12 w-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {active.map(({ code, name, flag }) => (
            <button
              key={code}
              onClick={() => navigate(`/${code}`)}
              className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{flag}</span>
              <span className="text-sm font-semibold text-gray-700 text-center leading-tight">{name}</span>
            </button>
          ))}
        </div>

        {comingSoon.length > 0 && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Coming soon</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {comingSoon.map(({ code, name, flag }) => (
                <div
                  key={code}
                  className="flex flex-col items-center gap-1.5 p-4 bg-white rounded-xl border border-gray-100 opacity-50 select-none"
                >
                  <span className="text-3xl grayscale">{flag}</span>
                  <span className="text-xs text-gray-500 text-center leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <p className="text-xs text-gray-300 text-center mt-12">
          © Lenguax English Language Training, Testing & Research Ltd. · lenguax.com
        </p>
      </div>
    </div>
  )
}
