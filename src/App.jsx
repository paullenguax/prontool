// App.jsx
import React from 'react';
import PhonemeChart from './PhonemeChart.jsx';
import { LANGUAGE_DATA } from './languages.js';

export default function App() {
  return <PhonemeChart languageData={LANGUAGE_DATA} />;
}