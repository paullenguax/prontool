// PhonemeChart.jsx – FIXED: Dark mode readability + removed bounce animation
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  Volume2, Search, Download, X,
  Minimize2, Maximize2, ArrowRightLeft
} from "lucide-react";
import { sanitizeIdentifier } from "../ipaMap.js";
import html2canvas from "html2canvas";
import lenguaxLogo from "./assets/Lenguax-Logo-Abbreviated-Square.png";

const S3_CONFIG = { bucketUrl: "https://8b33twdseq-courses.s3.amazonaws.com/phoneme-audio" };

// Dark mode removed for simplicity

// ────────────────────────────────────── AUDIO PLAYER ──────────────────────────────────────
function useAudioPlayer() {
  const ctxRef = useRef(null);
  const cacheRef = useRef(new Map());
  const [playing, setPlaying] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;
    return () => ctx.close();
  }, []);

  const fetchBuffer = useCallback(async (url) => {
    if (cacheRef.current.has(url)) return cacheRef.current.get(url);
    try {
      const res = await fetch(url, { cache: "force-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = await ctxRef.current.decodeAudioData(await res.arrayBuffer());
      cacheRef.current.set(url, buf);
      return buf;
    } catch (e) {
      setError("Audio not found");
      setTimeout(() => setError(null), 2000);
      return null;
    }
  }, []);

  const play = useCallback(async (lang, type, id, voice = "female") => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (ctx.state === "suspended") await ctx.resume();
    const safe = sanitizeIdentifier(id);
    const url = `${S3_CONFIG.bucketUrl}/${lang}-${type}-${safe}-${voice}.mp3`;
    setPlaying({ lang, id, type });
    const buffer = await fetchBuffer(url);
    if (!buffer) { setPlaying(null); return; }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.start(0);
    src.onended = () => setPlaying(null);
  }, [fetchBuffer]);

  const preloadLanguage = useCallback(async (lang, ids = [], voice = "female") => {
    const tasks = ids.flatMap(id => {
      const safe = sanitizeIdentifier(id);
      return [
        fetchBuffer(`${S3_CONFIG.bucketUrl}/${lang}-phoneme-${safe}-${voice}.mp3`),
        fetchBuffer(`${S3_CONFIG.bucketUrl}/${lang}-word-${safe}-${voice}.mp3`)
      ];
    });
    await Promise.allSettled(tasks);
  }, [fetchBuffer]);

  return { play, preloadLanguage, playing: playing ? { lang: playing.lang, id: playing.id, type: playing.type } : null, error };
}

// ────────────────────────────────────── RESPONSIVE GRID ──────────────────────────────────────
const ResponsiveGrid = ({ children, compact }) => {
  const min = compact ? "70px" : "100px";
  const max = compact ? "110px" : "150px";
  const vw = compact ? "12vw" : "14vw";
  return (
    <div className="overflow-visible">
      <div
        className="grid gap-1.5 sm:gap-2"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(clamp(${min},${vw},${max}),1fr))`
        }}
      >
        {children}
      </div>
    </div>
  );
};

// ────────────────────────────────────── PHONEME CELL ──────────────────────────────────────
const PhonemeCell = React.memo(function PhonemeCell({
  ipa, example, highlighted, language, playAudio, playing, voice,
  needsSchwa = false, category, description, compact, compareIPA, compareLang
}) {
  const isPlaying = playing?.lang === language && playing?.id === ipa && playing?.type === 'phoneme';
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSchwa, setShowSchwa] = useState(false);
  const [wordActive, setWordActive] = useState(false);

  const nativeScript = useMemo(() => {
    if (!example) return "";
    const clean = example.replace(/\s*\([^)]*\).*$/, "").trim();
    return clean.split(/\s+/)[0] || clean;
  }, [example]);

  const translit = useMemo(() => (highlighted || example || "").replace(/[\[\]]/g, ""), [highlighted, example]);
  const displayWord = nativeScript !== translit ? nativeScript : translit;

  const handlePhoneme = useCallback(() => {
    playAudio(language, "phoneme", ipa, voice);
    if (needsSchwa) {
      setShowSchwa(true);
      setTimeout(() => setShowSchwa(false), 800);
    }
  }, [playAudio, language, ipa, voice, needsSchwa]);

  const handleWord = useCallback(() => {
    playAudio(language, "word", example, voice);
    setWordActive(true);
    setTimeout(() => setWordActive(false), 700);
  }, [playAudio, language, example, voice]);

  useEffect(() => {
    if (isPlaying && needsSchwa) setShowSchwa(true);
    if (!isPlaying) setShowSchwa(false);
  }, [isPlaying, needsSchwa]);

  const palette = useMemo(() => {
    const base = "backdrop-blur-sm border border-gray-200 rounded-lg overflow-visible transition-all duration-200";
    const categories = {
      vowel: "bg-emerald-50/80 hover:bg-emerald-100/90 ring-emerald-500 text-emerald-900",
      diphthong: "bg-blue-50/80 hover:bg-blue-100/90 ring-blue-500 text-blue-900",
      consonant: "bg-slate-50/80 hover:bg-slate-100/90 ring-slate-500 text-slate-900",
      tone: "bg-orange-50/80 hover:bg-orange-100/90 ring-orange-500 text-orange-900",
    };
    return `${base} ${categories[category] || categories.consonant}`;
  }, [category]);

  const renderedHighlight = useMemo(() => {
    if (!highlighted) return <span>{displayWord}</span>;
    return highlighted.split(/[\[\]]/).map((part, i) =>
      i % 2 === 1 ? (
        <span
          key={i}
          className={`font-bold transition-all duration-300 ${
            wordActive
              ? "text-rose-500 scale-110 drop-shadow-lg"
              : "text-sky-600"
          }`}
        >
          {part}
        </span>
      ) : <span key={i}>{part}</span>
    );
  }, [highlighted, displayWord, wordActive]);

  const isDifferent = compareLang && compareIPA !== null && compareIPA !== ipa;

  return (
    <div className={`${palette} relative overflow-visible`}>
      {isDifferent && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          !
        </div>
      )}
      <button
        onClick={handlePhoneme}
        onPointerEnter={() => setShowTooltip(true)}
        onPointerLeave={() => setShowTooltip(false)}
        className={`relative w-full p-2 ${compact ? "sm:p-2.5" : "sm:p-3"} text-center select-none focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-transparent`}
        aria-label={`Play phoneme ${ipa}`}
      >
        {description && showTooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-1.5 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap border bg-gray-900 text-white border-gray-800">
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg">{ipa}</span>
              <span>{description}</span>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rotate-45 bg-gray-900 border-l border-b border-gray-800" />
          </div>
        )}
        <div className={`flex items-center justify-center gap-0.5 ${compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} font-bold`}>
          <span>{ipa}</span>
          <span className={`text-rose-500 ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold transition-opacity ${showSchwa ? "opacity-100" : "opacity-0"}`}>ə</span>
        </div>
      </button>
      {!compact && example && category !== "tone" && (
        <>
          <div className="border-t border-gray-300 mx-2" />
          <button
            onClick={handleWord}
            className="w-full p-2 sm:p-3 text-center focus:outline-none"
            aria-label={`Play word ${displayWord}`}
          >
            <div className="text-xs sm:text-sm space-y-0.5">
              {nativeScript !== translit && (
                <div className="text-sm sm:text-base font-medium">{nativeScript}</div>
              )}
              <div className={nativeScript !== translit ? "text-xs" : "text-sm sm:text-base"}>
                <span className="block">{renderedHighlight}</span>
              </div>
            </div>
          </button>
        </>
      )}
    </div>
  );
});

// ────────────────────────────────────── COMPARE MODAL ──────────────────────────────────────
const CompareModal = ({ isOpen, onClose, onSelect, selectedLang, languageData }) => {
  if (!isOpen) return null;
  const languages = Object.entries(languageData)
    .filter(([code]) => code !== selectedLang)
    .map(([code, lang]) => ({ code, ...lang }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl p-6 shadow-2xl bg-white text-gray-900">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Compare Languages</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto space-y-1">
          {languages.map(({ code, name, flag }) => (
            <button
              key={code}
              onClick={() => {
                onSelect(code);
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg transition-all font-medium border hover:bg-gray-100 hover:text-gray-900 border-gray-300"
            >
              <span className="text-2xl">{flag}</span>
              <span className="text-left">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ────────────────────────────────────── CHART VIEW ──────────────────────────────────────
const ChartView = ({ language, voice, compact, playAudio, playing, compareLang, languageData, selected }) => {
  const lang = languageData[language];
  const sections = useMemo(() => {
    if (!compareLang) return lang.sections;
    const compareData = languageData[compareLang];
    const ipaMap = new Map();
    compareData.sections.forEach(sec => {
      sec.list?.forEach(cell => {
        if (cell.ipa) ipaMap.set(cell.ipa, cell.ipa);
      });
    });
    return lang.sections.map(sec => ({
      ...sec,
      list: sec.list?.map(cell => ({
        ...cell,
        compareIPA: cell.ipa ? ipaMap.get(cell.ipa) : null
      }))
    }));
  }, [lang, compareLang, languageData]);

  return (
    <div>
      {language === selected && (
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl">{lang.flag}</span>
          <h1 className="text-2xl sm:text-3xl font-bold">{lang.name}</h1>
        </div>
      )}
      {sections.map((section, i) => (
        <div
          key={i}
          className="mb-6 rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-sm border bg-white/70 border-gray-200"
        >
          <h2 className={`font-bold ${compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"} mb-1`}>
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-sm text-gray-500 mb-3">
              {section.subtitle}
            </p>
          )}
          {section.list && (
            <ResponsiveGrid compact={compact}>
              {section.list.map((cell, idx) => (
                <PhonemeCell
                  key={`${cell.ipa}-${idx}`}
                  {...cell}
                  language={language}
                  playAudio={playAudio}
                  playing={playing}
                  voice={voice}
                  category={section.category}
                  compact={compact}
                  compareIPA={cell.compareIPA}
                  compareLang={compareLang}
                />
              ))}
            </ResponsiveGrid>
          )}
        </div>
      ))}
    </div>
  );
};

// ────────────────────────────────────── MAIN COMPONENT ──────────────────────────────────────
export default function PhonemeChart({ languageData }) {
  const [selected, setSelected] = useState(null);
  const [compareLang, setCompareLang] = useState(null);
  const [voice, setVoice] = useState('female');
  const [search, setSearch] = useState("");
  const [compact, setCompact] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const { play, preloadLanguage, playing, error } = useAudioPlayer();
  const chartRef = useRef(null);
  const lang = selected && languageData[selected];

  useEffect(() => {
    if (selected && lang) {
      const ids = lang.sections.flatMap(s => (s.list || []).map(c => c.ipa || c.example));
      preloadLanguage(selected, ids, voice);
    }
    if (compareLang && languageData[compareLang]) {
      const ids = languageData[compareLang].sections.flatMap(s => (s.list || []).map(c => c.ipa || c.example));
      preloadLanguage(compareLang, ids, voice);
    }
  }, [selected, compareLang, voice, preloadLanguage, lang]);

  const selectLanguage = useCallback(code => {
    setSelected(code);
    setVoice(languageData[code].defaultVoice || "female");
    setSearch("");
    setCompact(false);
    setCompareLang(null);
    setShowCompareModal(false);
  }, [languageData]);

  const selectCompareLanguage = useCallback(code => {
    setCompareLang(code);
    setShowCompareModal(false);
  }, []);

  const filteredSections = useMemo(() => {
    if (!lang || !search) return lang?.sections;
    const q = search.toLowerCase();
    return lang.sections.map(sec => {
      if (!sec.list) return sec;
      const filtered = sec.list.filter(cell =>
        cell.ipa?.toLowerCase().includes(q) ||
        cell.example?.toLowerCase().includes(q) ||
        cell.description?.toLowerCase().includes(q)
      );
      return filtered.length ? { ...sec, list: filtered } : null;
    }).filter(Boolean);
  }, [lang, search]);

  const exportChart = async () => {
    if (!chartRef.current) return;
    
    // Hide all elements with no-export class
    const elementsToHide = document.querySelectorAll('.no-export');
    elementsToHide.forEach(el => el.style.display = 'none');
    
    // Wait for layout to settle
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Capture the chart
    const canvas = await html2canvas(chartRef.current, { 
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#fafafa',
      logging: false,
      width: chartRef.current.scrollWidth,
      height: chartRef.current.scrollHeight
    });
    
    // Add logo watermark
    const finalCanvas = document.createElement('canvas');
    const ctx = finalCanvas.getContext('2d');
    const padding = 40;
    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height + padding * 2;
    
    // Fill background
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
    
    // Draw the chart
    ctx.drawImage(canvas, 0, padding);
    
    // Load and draw logo
    const logo = new Image();
    logo.onload = () => {
      const logoHeight = 60;
      const logoWidth = (logo.width / logo.height) * logoHeight;
      const x = finalCanvas.width - logoWidth - 40;
      const y = finalCanvas.height - logoHeight - 20;
      ctx.drawImage(logo, x, y, logoWidth, logoHeight);
      
      // Download
      const a = document.createElement("a");
      a.download = `${lang.name.replace(/[^a-z0-9]/gi, "_")}_${compareLang ? "vs_" + languageData[compareLang].name.replace(/[^a-z0-9]/gi, "_") : "chart"}.png`;
      a.href = finalCanvas.toDataURL();
      a.click();
      
      // Restore hidden elements
      elementsToHide.forEach(el => el.style.display = '');
    };
    logo.onerror = () => {
      // If logo fails, just download without it
      const a = document.createElement("a");
      a.download = `${lang.name.replace(/[^a-z0-9]/gi, "_")}_${compareLang ? "vs_" + languageData[compareLang].name.replace(/[^a-z0-9]/gi, "_") : "chart"}.png`;
      a.href = finalCanvas.toDataURL();
      a.click();
      elementsToHide.forEach(el => el.style.display = '');
    };
    
    // Use imported logo
    logo.src = lenguaxLogo;
  };

  if (!selected) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-gray-800">
        <div className="max-w-4xl w-full px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Interactive Phoneme Chart</h1>
            <p className="text-gray-500">Click a language to explore</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(languageData).map(([code, l]) => (
              <button
                key={code}
                onClick={() => selectLanguage(code)}
                className="flex flex-col items-center justify-center rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="text-4xl mb-2">{l.flag}</span>
                <span className="font-semibold">{l.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <div ref={chartRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {error && (
          <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow z-50">
            {error}
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 no-export">
            <button
              onClick={() => { setSelected(null); setCompareLang(null); }}
              className="text-sky-500 hover:text-sky-600 font-medium flex items-center gap-2"
            >Back</button>
          </div>

          {/* TOOLBAR */}
          <div className="flex flex-wrap items-center gap-2 no-export">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search..."
                className="pl-10 pr-8 py-2 rounded-lg text-sm w-48 bg-white text-gray-900 border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-sky-500"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* Compact */}
            <button
              onClick={() => setCompact(!compact)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 border ${
                compact
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {compact ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">Compact</span>
            </button>

            {/* Voice */}
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {["male", "female"].map(v => (
                <button
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${
                    voice === v
                      ? "bg-sky-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {v === "male" ? "Male" : "Female"}
                </button>
              ))}
            </div>

            {/* Export */}
            <button
              onClick={exportChart}
              className="p-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-md transition-all"
            >
              <Download className="w-5 h-5" />
            </button>

            {/* Logo */}
            <img 
              src={lenguaxLogo} 
              alt="Lenguax" 
              className="h-16 w-auto ml-2"
            />
          </div>
        </div>

        {/* CHARTS */}
        <div className={compareLang ? "grid md:grid-cols-2 gap-8" : ""}>
          <div>
            <ChartView
              language={selected}
              voice={voice}
              compact={compact}
              playAudio={play}
              playing={playing}
              compareLang={compareLang}
              languageData={languageData}
              selected={selected}
            />
          </div>
          {compareLang && (
            <div className="border-l pl-6">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                  <span className="text-5xl">{languageData[compareLang].flag}</span>
                  {languageData[compareLang].name}
                </h1>
                <button onClick={() => setCompareLang(null)} className="text-red-500 hover:text-red-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ChartView
                language={compareLang}
                voice={voice}
                compact={compact}
                playAudio={play}
                playing={playing}
                compareLang={selected}
                languageData={languageData}
                selected={selected}
              />
            </div>
          )}
        </div>

        {/* COMPARE BUTTON + MODAL */}
        {!compareLang && (
          <>
            <button
              onClick={() => setShowCompareModal(true)}
              className="no-export fixed bottom-6 right-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-sky-500/50 transform hover:scale-110 transition-all z-50 flex items-center gap-2"
            >
              <ArrowRightLeft className="w-6 h-6" />
              <span className="hidden sm:inline font-semibold">Compare</span>
            </button>
            <CompareModal
              isOpen={showCompareModal}
              onClose={() => setShowCompareModal(false)}
              onSelect={selectCompareLanguage}
              selectedLang={selected}
              languageData={languageData}
            />
          </>
        )}
      </div>
    </div>
  );
}