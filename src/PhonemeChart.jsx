// PhonemeChart.jsx – FINAL + MODAL + ALL FIXES
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  Volume2, Moon, Sun, Search, Download, X,
  Minimize2, Maximize2, ArrowRightLeft
} from "lucide-react";
import { sanitizeIdentifier } from "../ipaMap.js";
import html2canvas from "html2canvas";

const S3_CONFIG = { bucketUrl: "https://8b33twdseq-courses.s3.amazonaws.com/phoneme-audio" };

// ────────────────────────────────────── DARK MODE ──────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e) => setDark(e.matches);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return [dark, setDark];
}

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
    setPlaying({ lang, id });
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

  return { play, preloadLanguage, playing: playing ? { lang: playing.lang, id: playing.id } : null, error };
}

// ────────────────────────────────────── RESPONSIVE GRID ──────────────────────────────────────
const ResponsiveGrid = ({ children, compact }) => {
  const min = compact ? "60px" : "80px";
  const max = compact ? "90px" : "120px";
  const vw = compact ? "10vw" : "12vw";

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
  needsSchwa = false, category, description, dark, compact, compareIPA, compareLang
}) {
  const isPlaying = playing?.lang === language && playing?.id === ipa;
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
    const light = {
      vowel: "bg-emerald-50/80 hover:bg-emerald-100/90 ring-emerald-500 text-emerald-900",
      diphthong: "bg-blue-50/80 hover:bg-blue-100/90 ring-blue-500 text-blue-900",
      consonant: "bg-slate-50/80 hover:bg-slate-100/90 ring-slate-500 text-slate-900",
      tone: "bg-orange-50/80 hover:bg-orange-100/90 ring-orange-500 text-orange-900",
    };
    const darkM = {
      vowel: "bg-emerald-900/60 hover:bg-emerald-800/80 ring-emerald-600 text-emerald-100",
      diphthong: "bg-blue-900/60 hover:bg-blue-800/80 ring-blue-600 text-blue-100",
      consonant: "bg-slate-800/60 hover:bg-slate-700/80 ring-slate-500 text-slate-100",
      tone: "bg-orange-900/60 hover:bg-orange-800/80 ring-orange-600 text-orange-100",
    };
    const set = dark ? darkM : light;
    return `backdrop-blur-sm border ${dark ? "border-white/10" : "border-gray-200"} rounded-lg overflow-visible transition-all duration-200 ${set[category] || set.consonant}`;
  }, [category, dark]);

  const renderedHighlight = useMemo(() => {
    if (!highlighted) return <span>{displayWord}</span>;
    return highlighted.split(/[\[\]]/).map((part, i) =>
      i % 2 === 1 ? (
        <span
          key={i}
          className={`font-bold transition-all duration-300 ${
            wordActive
              ? "text-rose-500 scale-110 drop-shadow-lg"
              : dark ? "text-sky-300" : "text-sky-600"
          }`}
        >
          {part}
        </span>
      ) : <span key={i}>{part}</span>
    );
  }, [highlighted, displayWord, wordActive, dark]);

  const isDifferent = compareLang && compareIPA !== null && compareIPA !== ipa;

  return (
    <div className={`${palette} relative overflow-visible`}>
      {isPlaying && <div className="absolute inset-0 rounded-lg ring-2 ring-inset animate-ping ring-current opacity-75" />}
      {isDifferent && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
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
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-1.5 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-200 ${
            dark
              ? "bg-slate-800 text-slate-100 border border-slate-700"
              : "bg-gray-900 text-white"
          }`}>
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg">{ipa}</span>
              <span>{description}</span>
            </div>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rotate-45 ${
              dark ? "bg-slate-800 border-l border-b border-slate-700" : "bg-gray-900"
            }`} />
          </div>
        )}

        <div className={`flex items-center justify-center gap-0.5 ${compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} font-bold`}>
          <span>{ipa}</span>
          <span className={`text-rose-500 ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-bold transition-opacity ${showSchwa ? "opacity-100" : "opacity-0"}`}>ə</span>
        </div>
      </button>

      {!compact && example && category !== "tone" && (
        <>
          <div className={`border-t ${dark ? "border-white/10" : "border-gray-300"} mx-2`} />
          <button
            onClick={handleWord}
            className="w-full p-2 sm:p-3 text-center focus:outline-none"
            aria-label={`Play word ${displayWord}`}
          >
            <div className="text-xs sm:text-sm space-y-0.5">
              {nativeScript !== translit && (
                <div className="text-sm sm:text-base font-medium truncate">{nativeScript}</div>
              )}
              <div className={nativeScript !== translit ? "text-xs" : "text-sm sm:text-base"}>
                <span className="block truncate">{renderedHighlight}</span>
              </div>
            </div>
          </button>
        </>
      )}
    </div>
  );
});

// ────────────────────────────────────── COMPARE MODAL ──────────────────────────────────────
const CompareModal = ({ isOpen, onClose, onSelect, selectedLang, dark, languageData }) => {
  if (!isOpen) return null;

  const languages = Object.entries(languageData)
    .filter(([code]) => code !== selectedLang)
    .map(([code, lang]) => ({ code, ...lang }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className={`w-full max-w-md rounded-xl p-6 shadow-2xl ${
        dark ? "bg-slate-800 text-slate-100" : "bg-white text-gray-900"
      }`}>
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
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                dark 
                  ? "hover:bg-slate-700 text-slate-100" 
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <span className="text-2xl">{flag}</span>
              <span className="font-medium text-left">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ────────────────────────────────────── CHART VIEW ──────────────────────────────────────
const ChartView = ({ language, voice, compact, dark, playAudio, playing, compareLang, languageData, selected }) => {
  const lang = languageData[language];

  const sections = useMemo(() => {
    if (!compareLang) return lang.sections;

    const compareData = languageData[compareLang];
    const ipaMap = new Map();

    compareData.sections.forEach(sec => {
      sec.list?.forEach(cell => {
        if (cell.ipa) {
          ipaMap.set(cell.ipa, cell.ipa);
        }
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
          className={`mb-6 rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-sm border ${
            dark ? "bg-white/5 border-white/10" : "bg-white/70 border-gray-200"
          }`}
        >
          <h2 className={`font-bold ${compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"} mb-1`}>
            {section.title}
          </h2>
          {section.subtitle && (
            <p className={`text-sm ${dark ? "text-slate-400" : "text-gray-500"} mb-3`}>
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
                  dark={dark}
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
  const [dark, setDark] = useDarkMode();
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
    const canvas = await html2canvas(chartRef.current, { scale: 2 });
    const a = document.createElement("a");
    a.download = `${lang.name.replace(/[^a-z0-9]/gi, "_")}_vs_${compareLang ? languageData[compareLang].name.replace(/[^a-z0-9]/gi, "_") : "solo"}_phoneme_chart.png`;
    a.href = canvas.toDataURL();
    a.click();
  };

  if (!selected) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center transition-colors ${dark ? "bg-slate-900 text-slate-100" : "bg-neutral-50 text-gray-800"}`}>
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
                className={`flex flex-col items-center justify-center rounded-xl p-6 shadow-lg transition-all hover:scale-105 ${
                  dark ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:shadow-xl"
                }`}
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
    <div className={`min-h-screen transition-colors ${dark ? "bg-slate-900 text-slate-100" : "bg-neutral-50 text-gray-900"}`}>
      <div ref={chartRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {error && (
          <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow z-50">
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setSelected(null); setCompareLang(null); }}
              className="text-sky-500 hover:text-sky-600 font-medium flex items-center gap-2"
            >Back</button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search..."
                className={`pl-10 pr-8 py-2 rounded-lg text-sm w-48 ${dark ? "bg-slate-800 text-slate-100" : "bg-white text-gray-900"} border ${dark ? "border-slate-700" : "border-gray-300"} focus:ring-2 focus:ring-sky-500`}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            <button
              onClick={() => setCompact(!compact)}
              className={`p-2 rounded-lg flex items-center gap-1 text-xs font-medium ${compact ? "bg-sky-500 text-white" : dark ? "bg-slate-800 text-slate-300" : "bg-white text-gray-700 border border-gray-300"}`}
            >
              {compact ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">Compact</span>
            </button>

            <div className={`flex rounded-lg p-1 ${dark ? "bg-slate-800" : "bg-white"} border ${dark ? "border-slate-700" : "border-gray-300"}`}>
              {["male", "female"].map(v => (
                <button
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`px-2 py-1 rounded text-xs transition ${voice === v ? "bg-sky-500 text-white" : dark ? "text-slate-400" : "text-gray-600"}`}
                >
                  {v === "male" ? "Male" : "Female"}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-lg ${dark ? "bg-slate-800 text-yellow-400" : "bg-white text-gray-700"} border ${dark ? "border-slate-700" : "border-gray-300"}`}
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={exportChart} className="p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={compareLang ? "grid md:grid-cols-2 gap-8" : ""}>
          <div>
            <ChartView
              language={selected}
              voice={voice}
              compact={compact}
              dark={dark}
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
                dark={dark}
                playAudio={play}
                playing={playing}
                compareLang={selected}
                languageData={languageData}
                selected={selected}
              />
            </div>
          )}
        </div>

        {/* NEW: COMPARE BUTTON + MODAL */}
        {!compareLang && (
          <>
            <button
              onClick={() => setShowCompareModal(true)}
              className="fixed bottom-6 right-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-sky-500/50 transform hover:scale-110 transition-all z-50 flex items-center gap-2"
            >
              <ArrowRightLeft className="w-6 h-6" />
              <span className="hidden sm:inline font-semibold">Compare</span>
            </button>

            <CompareModal
              isOpen={showCompareModal}
              onClose={() => setShowCompareModal(false)}
              onSelect={selectCompareLanguage}
              selectedLang={selected}
              dark={dark}
              languageData={languageData}
            />
          </>
        )}
      </div>
    </div>
  );
}