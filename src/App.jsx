import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LanguageGridPage from './pages/LanguageGridPage.jsx'
import LanguagePlayerPage from './pages/LanguagePlayerPage.jsx'
import ComparePage from './pages/ComparePage.jsx'

export default function App() {
  return (
    <BrowserRouter basename="/pronunciation">
      <Routes>
        <Route path="/"        element={<LanguageGridPage />} />
        <Route path="/:lang"   element={<LanguagePlayerPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
