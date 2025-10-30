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
  category = "consonant",
  description,
  rowBgColor,
  rowHoverColor,
}) {
  const isActive = playing === ipa;
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSchwa, setShowSchwa] = useState(false);
  const [wordActive, setWordActive] = useState(false);

  // Extract native script from example (before transliteration)
  const extractNativeScript = (exampleText) => {
    if (!exampleText) return "";
    // Remove content in parentheses and everything after
    const withoutParens = exampleText.replace(/\s*\([^)]*\).*$/, '').trim();
    // Split on space and take first part (native script)
    return withoutParens.split(/\s+/)[0] || exampleText;
  };

  // Phoneme click handler
  const handlePhonemeClick = () => {
    playAudio(language, "phoneme", ipa);
    if (needsSchwa) {
      setShowSchwa(true);
      setTimeout(() => setShowSchwa(false), 800);
    }
  };

  // Word click handler
  const handleWordClick = () => {
    playAudio(language, "word", example);
    setWordActive(true);
    setTimeout(() => setWordActive(false), 700);
  };

  // Keep schwa visible while playing
  useEffect(() => {
    if (isActive && needsSchwa) setShowSchwa(true);
    if (!isActive) setShowSchwa(false);
  }, [isActive, needsSchwa]);

  // Color palettes by category
  const colourSet = {
    vowel: "bg-sky-50 hover:bg-sky-100 focus:bg-sky-100 ring-sky-400",
    diphthong: "bg-cyan-50 hover:bg-cyan-100 focus:bg-cyan-100 ring-cyan-400",
    consonant: "bg-slate-50 hover:bg-slate-100 focus:bg-slate-100 ring-slate-400",
    tone: "bg-orange-50 hover:bg-orange-100 focus:bg-orange-100 ring-orange-400",
  };

  const palette = rowBgColor && rowHoverColor
    ? `${rowBgColor} ${rowHoverColor} focus:${rowHoverColor.replace('hover:', '')} ring-green-600`
    : colourSet[category] || colourSet.consonant;

  // Highlight brackets in example words
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

  const nativeScript = extractNativeScript(example);
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
              {renderHighlight(highlighted)}
            </div>
          </div>
        </button>
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
    vowel: "bg-sky-50/30",
    diphthong: "bg-cyan-50/30",
    consonant: "bg-slate-50/20",
    tone: "bg-orange-50/30",
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
                      description={cell.description}
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
                            nativeHighlighted={cell.nativeHighlighted}
                            language={selected}
                            playAudio={play}
                            playing={playing}
                            needsSchwa={cell.needsSchwa}
                            category={section.category}
                            description={cell.description}
                            rowBgColor={row.bgColor}
                            rowHoverColor={row.hoverColor}
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