// App.jsx
import PhonemeChart from './PhonemeChart.jsx';
import { LANGUAGE_DATA } from './languages.js';
import LANGUAGE_STATUS from './language-status.json';

const languageData = Object.fromEntries(
  Object.entries(LANGUAGE_DATA).map(([code, lang]) => [
    code,
    { ...lang, status: LANGUAGE_STATUS[code] || 'active' }
  ])
);

export default function App() {
  return <PhonemeChart languageData={languageData} />;
}
