// App.jsx
import React from 'react';
import PhonemeChart from './PhonemeChart.jsx';
import { LANGUAGE_DATA } from './languages.js';

export default function App() {
  return <PhonemeChart LANGUAGE_DATA={LANGUAGE_DATA} />;
}
