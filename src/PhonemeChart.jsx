// PhonemeChart.jsx - OPTIMIZED VERSION
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Volume2 } from "lucide-react";
import { LANGUAGE_DATA } from "./languages.js";
import { sanitizeIdentifier } from "../ipaMap.js";


// Config: your S3 bucket URL
const S3_CONFIG = {
  bucketUrl: "https://8b33twdseq-courses.s3.amazonaws.com/phoneme-audio",
  voiceSet: "default",
};



// Cache for sanitized strings - prevents re-computing same values
const sanitizeCache = new Map();



// ============================================================================
// AUDIO PLAYER HOOK - Web Audio API (Super Fast Modern Version)
// ============================================================================
function useAudioPlayer() {
  const ctxRef = useRef(null);
  const cacheRef = useRef(new Map());
  const [playing, setPlaying] = useState(null);
  const [error, setError] = useState(null);

  // Create a single AudioContext
  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;
    return () => ctx.close();
  }, []);

  // Fetch + decode with caching
  const fetchBuffer = useCallback(async (url) => {
    if (cacheRef.current.has(url)) return cacheRef.current.get(url);
    try {
      const res = await fetch(url, { cache: "force-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrBuf = await res.arrayBuffer();
      const buf = await ctxRef.current.decodeAudioData(arrBuf);
      cacheRef.current.set(url, buf);
      return buf;
    } catch (e) {
      console.error("Audio load error", e);
      setError("Audio not found");
      setTimeout(() => setError(null), 2000);
      return null;
    }
  }, []);

  // Play instantly
  const play = useCallback(async (language, type, identifier, voice = "female") => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (ctx.state === "suspended") await ctx.resume(); // required on iOS

    const safe = sanitizeIdentifier(identifier);
    const url = `${S3_CONFIG.bucketUrl}/${language}-${type}-${safe}-${voice}.mp3`;

    setPlaying(identifier);
    const buffer = await fetchBuffer(url);
    if (!buffer) {
      setPlaying(null);
      return;
    }

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.start(0);
    src.onended = () => setPlaying(null);
  }, [fetchBuffer]);

  // Optional: preload ahead of time
  const preloadLanguage = useCallback(async (language, typeList = ["phoneme", "word"], identifiers = [], voice = "female") => {
    const tasks = [];
    for (const type of typeList) {
      for (const id of identifiers) {
        const safe = sanitizeIdentifier(identifier);
        const url = `${S3_CONFIG.bucketUrl}/${language}-${type}-${safe}-${voice}.mp3`;
        if (!cacheRef.current.has(url)) {
          tasks.push(fetchBuffer(url));
        }
      }
    }
    await Promise.allSettled(tasks);
  }, [fetchBuffer]);

  return { play, preloadLanguage, playing, error };
}


// ============================================================================
// PHONEME CELL COMPONENT - Optimized with React.memo
// ============================================================================
const PhonemeCell = React.memo(function PhonemeCell({
  ipa,
  example,
  highlighted,
  language,
  playAudio,
  playing,
  voice,
  needsSchwa = false,
  category = "consonant",
  description,
  rowBgColor,
  rowHoverColor,
}) {
  const isActive = playing === ipa;
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSchwa, setShowSchwa] = useState(false);
  const [wordActive, setWordActive] = useState(false);

  // Extract native script from example (memoized)
  const nativeScript = useMemo(() => {
    if (!example) return "";
    const withoutParens = example.replace(/\s*\([^)]*\).*$/, '').trim();
    return withoutParens.split(/\s+/)[0] || example;
  }, [example]);

  // Phoneme click handler
  const handlePhonemeClick = useCallback(() => {
    playAudio(language, "phoneme", ipa, voice);
    if (needsSchwa) {
      setShowSchwa(true);
      setTimeout(() => setShowSchwa(false), 800);
    }
  }, [playAudio, language, ipa, voice, needsSchwa]);

  // Word click handler
  const handleWordClick = useCallback(() => {
    playAudio(language, "word", example, voice);
    setWordActive(true);
    setTimeout(() => setWordActive(false), 700);
  }, [playAudio, language, example, voice]);

  // Keep schwa visible while playing
  useEffect(() => {
    if (isActive && needsSchwa) setShowSchwa(true);
    if (!isActive) setShowSchwa(false);
  }, [isActive, needsSchwa]);

  // Color palettes by category (memoized)
  const palette = useMemo(() => {
    if (rowBgColor && rowHoverColor) {
      return `${rowBgColor} ${rowHoverColor} focus:${rowHoverColor.replace('hover:', '')} ring-green-600`;
    }
    
    const colourSet = {
      vowel: "bg-sky-50 hover:bg-sky-100 focus:bg-sky-100 ring-sky-400",
      diphthong: "bg-cyan-50 hover:bg-cyan-100 focus:bg-cyan-100 ring-cyan-400",
      consonant: "bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 ring-slate-400",
      tone: "bg-orange-50 hover:bg-orange-100 focus:bg-orange-100 ring-orange-400",
    };
    
    return colourSet[category] || colourSet.consonant;
  }, [category, rowBgColor, rowHoverColor]);

  // Highlight brackets in example words (memoized)
  const renderedHighlight = useMemo(() => {
    const text = highlighted || example;
    if (!text) return null;
    
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
  }, [highlighted, example, wordActive]);

  const translit = (highlighted || example || "").replace(/[\[\]]/g, '');
  const isDifferent = nativeScript !== translit;

  return (
    <div className="relative border border-gray-200 rounded-lg overflow-visible">
      {/* Phoneme button - top half */}
      <button
        onClick={handlePhonemeClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative w-full p-3 transition-all duration-150 focus:outline-none focus:z-10 ${palette} ${
          isActive ? "ring-2 ring-inset" : ""
        }`}
        aria-label={`Play ${category === 'tone' ? 'tone' : 'phoneme'} ${ipa}${description ? `: ${description}` : ''}`}
      >
        {/* Tooltip */}
        {description && showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20 bg-gray-900 text-white text-xs rounded px-3 py-1.5 whitespace-nowrap shadow-lg pointer-events-none">
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
        
        {/* IPA + schwa (or tone with example) */}
        {category === 'tone' ? (
          // For tones: show IPA and example together
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-gray-900 text-center select-none">
              {ipa}
            </div>
            {example && (
              <div className="text-base font-medium text-gray-700 text-center">
                {nativeScript}
              </div>
            )}
          </div>
        ) : (
          // For phonemes: show IPA with optional schwa
          <div className="text-2xl font-semibold text-gray-900 text-center select-none flex items-center justify-center gap-1">
            <span>{ipa}</span>
            <span
              className={`text-rose-400 text-lg font-semibold transition-opacity duration-200 ${
                showSchwa ? "opacity-100" : "opacity-0"
              }`}
            >
              ə
            </span>
          </div>
        )}
      </button>

      {/* Divider - subtle and inset */}
      {example && category !== "tone" && <div className="border-t border-gray-300 mx-3" />}

      {/* Word button - bottom half (only if not a tone) */}
      {example && category !== "tone" && (
        <button
          onClick={handleWordClick}
          className={`w-full p-3 transition-all duration-150 focus:outline-none focus:z-10 ${palette}`}
          aria-label={`Play word ${nativeScript}`}
        >
          <div className="text-sm text-gray-700 text-center space-y-0.5">
            {isDifferent && (
              <div className="text-base font-medium">
                {nativeScript}
              </div>
            )}
            <div className={isDifferent ? "text-xs" : "text-base"}>
              {renderedHighlight}
            </div>
          </div>
        </button>
      )}
    </div>
  );
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function PhonemeChart({ LANGUAGE_DATA }) {
  const [selected, setSelected] = useState(null);
  const [voice, setVoice] = useState('female');
const { play, preloadLanguage, playing, error } = useAudioPlayer();

useEffect(() => {
  if (selected) {
    const lang = LANGUAGE_DATA[selected];
    const ids = lang.sections.flatMap(sec =>
      (sec.grid ? sec.grid.flat() : sec.rows?.flatMap(r => r.cells))?.filter(Boolean).map(c => c.ipa || c.example)
    );
    preloadLanguage(selected, ["phoneme", "word"], ids, voice);
  }
}, [selected, voice, preloadLanguage]);

  // Handle language selection and set default voice
  const selectLanguage = useCallback((code) => {
    setSelected(code);
    const defaultVoice = LANGUAGE_DATA[code].defaultVoice || 'female';
    setVoice(defaultVoice);
  }, [LANGUAGE_DATA]);

  const handleVoiceToggle = useCallback((newVoice) => {
    setVoice(newVoice);
  }, []);

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
                onClick={() => selectLanguage(code)}
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
    vowel: "bg-sky-50/30",
    diphthong: "bg-cyan-50/30",
    consonant: "bg-slate-50/20",
    tone: "bg-orange-50/30",
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-6 border gray-500">
        {error && (
          <div className="fixed top-4 right-4 bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-md shadow z-50">
            {error}
          </div>
        )}

        <div className="mb-6">
          <button
            onClick={() => setSelected(null)}
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium hover:gap-3 transition-all mb-4"
          >
            <span className="text-lg">←</span>
            <span>Back to all languages</span>
          </button>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{lang.flag}</span>
              <h1 className="text-3xl font-bold text-gray-900">{lang.name}</h1>
            </div>
            
            {/* Voice toggle */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => handleVoiceToggle('male')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  voice === 'male'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                👨 Male
              </button>
              <button
                onClick={() => handleVoiceToggle('female')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  voice === 'female'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                👩 Female
              </button>
            </div>
          </div>
        </div>

        {lang.sections.map((section, i) => (
          <div
            key={i}
            className={`mb-6 border border-gray-100 rounded-xl p-4 shadow-sm transition-colors duration-200 ${
              sectionPalette[section.category] || "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold mb-1.5">{section.title}</h2>
            {section.subtitle && (
              <p className="text-gray-500 mb-3 text-sm">{section.subtitle}</p>
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
                      key={`${cell.ipa || cell.example || idx}`}
                      ipa={cell.ipa}
                      example={cell.example}
                      highlighted={cell.highlighted}
                      language={selected}
                      playAudio={play}
                      playing={playing}
                      voice={voice}
                      needsSchwa={cell.needsSchwa}
                      category={section.category}
                      description={cell.description}
                    />
                  ) : (
                    <div key={`empty-${idx}`} className="border border-transparent" />
                  )
                )}
              </div>
            )}

            {section.rows && (
              <div className="space-y-2">
                {section.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="mb-2">
                    <div
                      className="grid gap-2"
                      style={{
                        gridTemplateColumns: `repeat(${section.cols || 4}, minmax(0, 1fr))`,
                      }}
                    >
                      {row.cells.map((cell, idx) =>
                        cell ? (
                          <PhonemeCell
                            key={`${cell.ipa}-${rowIdx}-${idx}`}
                            ipa={cell.ipa}
                            example={cell.example}
                            highlighted={cell.highlighted}
                            nativeHighlighted={cell.nativeHighlighted}
                            language={selected}
                            playAudio={play}
                            playing={playing}
                            voice={voice}
                            needsSchwa={cell.needsSchwa}
                            category={section.category}
                            description={cell.description}
                            rowBgColor={row.bgColor}
                            rowHoverColor={row.hoverColor}
                          />
                        ) : (
                          <div key={`empty-${rowIdx}-${idx}`} className="border border-transparent" />
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