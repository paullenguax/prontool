// PhonemeChart.jsx
import React, { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { LANGUAGE_DATA } from "./languages.js";

// Config: your S3 bucket URL
const S3_CONFIG = {
  bucketUrl: "https://8b33twdseq-courses.s3.amazonaws.com/phoneme-audio",
  voiceSet: "default", // later: "american_female", "turkish_male", etc.
};


// Simple audio hook
function useAudioPlayer() {
  const [playing, setPlaying] = useState(null);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.addEventListener("ended", () => setPlaying(null));
    audioRef.current.addEventListener("error", () => {
      setError("Audio not found");
      setPlaying(null);
      setTimeout(() => setError(null), 2000);
    });
    return () => audioRef.current?.pause();
  }, []);

  const sanitize = (s) =>
    s.replace(/[^a-zA-Z0-9\u00C0-\u017F-_]/g, "").replace(/\s+/g, "");

  const play = (language, type, identifier) => {
    if (!audioRef.current) return;
    const safe = sanitize(identifier);
    const url = `${S3_CONFIG.bucketUrl}/${language}-${type}-${safe}${
   S3_CONFIG.voiceSet && S3_CONFIG.voiceSet !== "default"
     ? `-${S3_CONFIG.voiceSet}`
    : ""
 }.mp3`;
    audioRef.current.pause();
    audioRef.current.src = url;
    audioRef.current
      .play()
      .then(() => setPlaying(identifier))
      .catch(() => setError("Playback failed"));
  };

  return { play, playing, error };
}

// A single phoneme cell
function PhonemeCell({
  ipa,
  example,
  highlighted,
  language,
  playAudio,
  playing,
  needsSchwa = false,
  category = "consonant", // 👈 new optional prop
}) {
  const isActive = playing === ipa;
  const [showSchwa, setShowSchwa] = useState(false);
  const [wordActive, setWordActive] = useState(false);


  // click handler
  const handlePhonemeClick = (e) => {
    e.stopPropagation();
    playAudio(language, "phoneme", ipa);

    if (needsSchwa) {
      setShowSchwa(true);
      setTimeout(() => setShowSchwa(false), 800); // quick visual feedback even without audio
    }
  };

  const handleWordClick = (e) => {
  e.stopPropagation();
  playAudio(language, "word", example);
  setWordActive(true);
  setTimeout(() => setWordActive(false), 700); // about 0.7 s highlight
};


  // keep schwa visible while playback succeeds
  useEffect(() => {
    if (isActive && needsSchwa) setShowSchwa(true);
    if (!isActive) setShowSchwa(false);
  }, [isActive, needsSchwa]);

  // colour palettes by category
const colourSet = {
  vowel:
    "bg-emerald-100 hover:bg-emerald-200 active:bg-emerald-300 ring-emerald-400",
  diphthong:
    "bg-teal-100 hover:bg-teal-200 active:bg-teal-300 ring-teal-400",
  consonant:
    "bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 ring-indigo-400",
  tone:
    "bg-amber-100 hover:bg-amber-200 active:bg-amber-300 ring-amber-400",
};

const palette = colourSet[category] || colourSet.consonant;


  // highlight brackets in example words
 const renderHighlight = (text) => {
  if (!text) return example;
  return text.split(/[\[\]]/).map((part, i) =>
    i % 2 === 1 ? (
      <span
        key={i}
        className={`font-semibold transition-colors duration-150 ${
          wordActive ? "text-rose-400" : "text-sky-600"
        }`}
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};


  return (
    <div
      onClick={handlePhonemeClick}
      className={`relative border border-gray-200 rounded-lg p-3 transition-all duration-150 cursor-pointer 
        ${palette}
        ${isActive ? "ring-2" : ""}
      `}
    >
      {/* phoneme + schwa */}
      <div className="text-2xl font-semibold text-gray-900 text-center mb-2 select-none flex items-center justify-center gap-1">
        <span>{ipa}</span>
        <span
          className={`text-rose-400 text-lg font-semibold transition-opacity duration-200 ${
            showSchwa ? "opacity-100" : "opacity-0"
          }`}
        >
          ə
        </span>
      </div>

      {/* divider */}
      <div className="border-t border-gray-300 my-1" />

      {/* example word */}
      {example && (
  <div
    className="text-sm text-gray-700 text-center cursor-pointer"
    onClick={handleWordClick}
  >
    {renderHighlight(highlighted)}
  </div>
)}

    </div>
  );
}




// Main component
export default function PhonemeChart({ LANGUAGE_DATA }) {
  const [selected, setSelected] = useState(null);
  const { play, playing, error } = useAudioPlayer();

  if (!selected) {
    // Landing page
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-gray-800">
        <div className="max-w-4xl w-full px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Interactive Phoneme Chart</h1>
            <p className="text-gray-500">Click on a language to begin</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(LANGUAGE_DATA).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => setSelected(code)}
                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full"
              >
                <span className="text-3xl mb-1">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Chart view
  const lang = LANGUAGE_DATA[selected];
const sectionPalette = {
  vowel: "bg-emerald-50/40",      // 40 % tint of emerald
  diphthong: "bg-teal-50/40",     // soft aqua
  consonant: "bg-indigo-50/40",   // pale violet-blue
  tone: "bg-amber-50/40",         // warm cream for tones
};




  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10 border gray-500">
        {error && (
          <div className="fixed top-4 right-4 bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-md shadow">
            {error}
          </div>
        )}

        <button
          onClick={() => setSelected(null)}
          className="text-sky-600 mb-6 hover:underline"
        >
          ← Back to languages
        </button>

        <h1 className="text-3xl font-bold mb-8">{lang.name}</h1>

        {lang.sections.map((section, i) => (
          <div
            key={i}
            className={`mb-12 border border-gray-100 rounded-xl p-6 shadow-sm transition-colors duration-200 ${
  sectionPalette[section.category] || "bg-white"
}`}

          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            {section.subtitle && (
              <p className="text-gray-500 mb-4 text-sm">{section.subtitle}</p>
            )}

            {section.grid && (
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `repeat(${section.cols || 4}, minmax(0, 1fr))`,
                }}
              >
                {section.grid.flat().map((cell, idx) =>
                  cell ? (
                    <PhonemeCell
                      key={idx}
                      ipa={cell.ipa}
                      example={cell.example}
                      highlighted={cell.highlighted}
                      language={selected}
                      playAudio={play}
                      playing={playing}
                      needsSchwa={cell.needsSchwa}
                      category={section.category}
                    />
                  ) : (
                    <div key={idx} className="border border-transparent" />
                  )
                )}
              </div>
            )}

{section.rows && (
  <div className="space-y-3">
    {section.rows.map((row, rowIdx) => (
      <div key={rowIdx} className="mb-4">
        {row.label && (
          <div className="text-sm font-semibold text-gray-500 mb-2">
            {row.label}
          </div>
        )}
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${section.cols || 4}, minmax(0, 1fr))`,
          }}
        >
          {row.cells.map((cell, idx) =>
            cell ? (
              <PhonemeCell
                key={idx}
                ipa={cell.ipa}
                example={cell.example}
                highlighted={cell.highlighted}
                language={selected}
                playAudio={play}
                playing={playing}
                needsSchwa={cell.needsSchwa}
                category={section.category}
              />
            ) : (
              <div key={idx} className="border border-transparent" />
            )
          )}
        </div>
      </div>
    ))}
  </div>
)}


          </div>
        ))}
      </div>
    </div>
  );
}

