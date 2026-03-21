// admin-server.js — run with: npm run admin
import express from 'express';
import multer from 'multer';
import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { LANGUAGE_DATA } from './src/languages.js';
import { sanitizeIdentifier } from './ipaMap.js';

dotenv.config();

const __dir = dirname(fileURLToPath(import.meta.url));
const STATUS_FILE = join(__dir, 'src/language-status.json');
const BUCKET = process.env.S3_BUCKET || '8b33twdseq-courses';
const PREFIX = process.env.S3_PREFIX || 'phoneme-audio';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 15 * 1024 * 1024 } });
const app = express();
app.use(express.json());

// ── Helpers ───────────────────────────────────────────────────────────────────

function readStatus() {
  if (existsSync(STATUS_FILE)) return JSON.parse(readFileSync(STATUS_FILE, 'utf8'));
  return Object.fromEntries(Object.keys(LANGUAGE_DATA).map(k => [k, 'active']));
}

function writeStatus(status) {
  writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

function extractWord(example) {
  if (!example) return '';
  return example.replace(/\s*\([^)]*\).*$/, '').trim().split(/\s+/)[0] || '';
}

function getExpectedFiles(langCode, voice) {
  const lang = LANGUAGE_DATA[langCode];
  if (!lang) return [];
  const seen = new Set();
  const files = [];
  for (const section of lang.sections) {
    const type = section.category === 'tone' ? 'tone' : 'phoneme';
    for (const cell of section.list || []) {
      if (!cell.ipa) continue;
      const phonemeKey = `${PREFIX}/${langCode}-${type}-${sanitizeIdentifier(cell.ipa)}-${voice}.mp3`;
      if (!seen.has(phonemeKey)) {
        seen.add(phonemeKey);
        files.push({ key: phonemeKey, label: cell.ipa, type, section: section.title });
      }
      if (cell.example && section.category !== 'tone') {
        const word = extractWord(cell.example);
        const wordKey = `${PREFIX}/${langCode}-word-${sanitizeIdentifier(word)}-${voice}.mp3`;
        if (word && !seen.has(wordKey)) {
          seen.add(wordKey);
          files.push({ key: wordKey, label: word, type: 'word', section: section.title });
        }
      }
    }
  }
  return files;
}

async function checkFile(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return true;
  } catch { return false; }
}

// ── Routes ────────────────────────────────────────────────────────────────────

app.get('/api/languages', (req, res) => {
  const status = readStatus();
  res.json(Object.entries(LANGUAGE_DATA).map(([code, lang]) => ({
    code, name: lang.name, flag: lang.flag,
    defaultVoice: lang.defaultVoice || 'female',
    status: status[code] || 'active',
  })));
});

app.post('/api/languages/:code/status', (req, res) => {
  const { code } = req.params;
  const { status: s } = req.body;
  if (!LANGUAGE_DATA[code] || !['active', 'coming_soon'].includes(s)) return res.status(400).end();
  const status = readStatus();
  status[code] = s;
  writeStatus(status);
  res.json({ ok: true });
});

app.get('/api/audio/:lang/:voice', async (req, res) => {
  const { lang, voice } = req.params;
  if (!LANGUAGE_DATA[lang] || !['male', 'female'].includes(voice)) return res.status(400).end();
  const files = getExpectedFiles(lang, voice);
  const results = [];
  for (let i = 0; i < files.length; i += 20) {
    const batch = files.slice(i, i + 20);
    const checked = await Promise.all(
      batch.map(f => checkFile(f.key).then(exists => ({ ...f, exists })))
    );
    results.push(...checked);
  }
  res.json(results);
});

app.post('/api/audio/upload', upload.single('file'), async (req, res) => {
  const { key } = req.body;
  if (!key || !req.file) return res.status(400).json({ error: 'Missing key or file' });
  if (!key.startsWith(PREFIX + '/')) return res.status(403).json({ error: 'Invalid key' });
  try {
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: req.file.buffer,
      ContentType: 'audio/mpeg',
    }));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/', (_, res) => res.send(adminHTML()));

app.listen(3001, () => {
  console.log('\n  Lenguax Admin  →  http://localhost:3001\n');
});

// ── HTML ──────────────────────────────────────────────────────────────────────

function adminHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lenguax Admin</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .toggle-track { width:44px; height:24px; background:#d1d5db; border-radius:12px; transition:.25s; position:relative; cursor:pointer; flex-shrink:0; }
    .toggle-track.on { background:#16a34a; }
    .toggle-thumb { width:18px; height:18px; background:white; border-radius:50%; position:absolute; top:3px; left:3px; transition:.25s; box-shadow:0 1px 3px rgba(0,0,0,.2); }
    .toggle-track.on .toggle-thumb { left:23px; }
  </style>
</head>
<body class="bg-gray-100 min-h-screen font-sans text-gray-900">

<header class="bg-gray-900 text-white px-6 py-4 flex items-center gap-3">
  <h1 class="text-lg font-bold tracking-tight">Lenguax Admin</h1>
</header>

<div class="max-w-5xl mx-auto px-4 py-6">

  <!-- Tabs -->
  <div class="flex gap-1 mb-6 border-b border-gray-200">
    <button onclick="showTab('languages')" id="tab-languages"
      class="px-5 py-2.5 text-sm font-medium border-b-2 border-blue-600 text-blue-600 -mb-px">
      Languages
    </button>
    <button onclick="showTab('audio')" id="tab-audio"
      class="px-5 py-2.5 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-800 -mb-px">
      Audio
    </button>
  </div>

  <!-- Languages Tab -->
  <div id="pane-languages">
    <p class="text-sm text-gray-500 mb-4">Toggle languages between Active (visible and clickable) and Coming Soon (shown greyed out on the site).</p>
    <div id="lang-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
    <p class="text-xs text-gray-400 mt-4">Changes are saved immediately to <code>src/language-status.json</code>. Run <code>npm run build</code> to publish.</p>
  </div>

  <!-- Audio Tab -->
  <div id="pane-audio" class="hidden">
    <div class="flex items-center gap-3 mb-6">
      <div class="flex rounded-lg overflow-hidden border border-gray-300 text-sm">
        <button onclick="setVoice('female')" id="v-female"
          class="px-4 py-2 font-medium bg-blue-600 text-white">Female</button>
        <button onclick="setVoice('male')" id="v-male"
          class="px-4 py-2 font-medium bg-white text-gray-700 hover:bg-gray-50">Male</button>
      </div>
      <button onclick="checkAll()"
        class="px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700">
        Check All
      </button>
    </div>
    <div id="audio-list" class="space-y-3"></div>
  </div>

</div>

<script>
let languages = [];
let voice = 'female';

async function init() {
  languages = await fetch('/api/languages').then(r => r.json());
  renderLanguages();
  renderAudioList();
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

function showTab(tab) {
  ['languages', 'audio'].forEach(t => {
    document.getElementById('pane-' + t).classList.toggle('hidden', t !== tab);
    const btn = document.getElementById('tab-' + t);
    btn.className = t === tab
      ? 'px-5 py-2.5 text-sm font-medium border-b-2 border-blue-600 text-blue-600 -mb-px'
      : 'px-5 py-2.5 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-800 -mb-px';
  });
}

// ── Languages ─────────────────────────────────────────────────────────────────

function renderLanguages() {
  document.getElementById('lang-grid').innerHTML = languages.map(lang => {
    const active = lang.status === 'active';
    return \`
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="text-4xl mb-2">\${lang.flag}</div>
        <div class="font-semibold text-sm mb-1">\${lang.name}</div>
        <div class="text-xs text-gray-400 mb-3">\${lang.defaultVoice}</div>
        <div class="flex items-center gap-2">
          <div class="toggle-track \${active ? 'on' : ''}" id="track-\${lang.code}" onclick="toggleStatus('\${lang.code}')">
            <div class="toggle-thumb"></div>
          </div>
          <span class="text-xs font-medium \${active ? 'text-green-700' : 'text-gray-400'}" id="status-label-\${lang.code}">
            \${active ? 'Active' : 'Coming Soon'}
          </span>
        </div>
      </div>
    \`;
  }).join('');
}

async function toggleStatus(code) {
  const lang = languages.find(l => l.code === code);
  const newStatus = lang.status === 'active' ? 'coming_soon' : 'active';
  await fetch(\`/api/languages/\${code}/status\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus }),
  });
  lang.status = newStatus;
  const active = newStatus === 'active';
  const track = document.getElementById('track-' + code);
  const label = document.getElementById('status-label-' + code);
  track.classList.toggle('on', active);
  label.textContent = active ? 'Active' : 'Coming Soon';
  label.className = \`text-xs font-medium \${active ? 'text-green-700' : 'text-gray-400'}\`;
}

// ── Audio ─────────────────────────────────────────────────────────────────────

function setVoice(v) {
  voice = v;
  document.getElementById('v-female').className = \`px-4 py-2 text-sm font-medium \${v === 'female' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}\`;
  document.getElementById('v-male').className = \`px-4 py-2 text-sm font-medium \${v === 'male' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}\`;
}

function renderAudioList() {
  document.getElementById('audio-list').innerHTML = languages.map(lang => \`
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl">\${lang.flag}</span>
          <div>
            <span class="font-semibold text-sm">\${lang.name}</span>
            \${lang.status === 'coming_soon' ? '<span class="ml-2 text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">Coming Soon</span>' : ''}
          </div>
        </div>
        <button onclick="checkLang('\${lang.code}')" id="check-btn-\${lang.code}"
          class="px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 rounded-lg transition-all">
          Check
        </button>
      </div>
      <div id="audio-results-\${lang.code}" class="hidden border-t border-gray-100 px-4 py-3"></div>
    </div>
  \`).join('');
}

async function checkAll() {
  for (const lang of languages) await checkLang(lang.code);
}

async function checkLang(code) {
  const btn = document.getElementById('check-btn-' + code);
  const results = document.getElementById('audio-results-' + code);
  btn.textContent = 'Checking…';
  btn.disabled = true;
  results.classList.remove('hidden');
  results.innerHTML = '<div class="text-sm text-gray-400 py-1">Checking S3…</div>';

  const files = await fetch(\`/api/audio/\${code}/\${voice}\`).then(r => r.json());
  const present = files.filter(f => f.exists).length;
  const missing = files.filter(f => !f.exists);
  const pct = files.length ? Math.round((present / files.length) * 100) : 100;
  const colour = pct === 100 ? 'bg-green-500' : pct > 50 ? 'bg-blue-500' : 'bg-amber-500';

  let html = \`
    <div class="mb-3">
      <div class="flex justify-between text-xs text-gray-500 mb-1">
        <span>\${present} / \${files.length} recordings</span>
        <span>\${pct}%</span>
      </div>
      <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full rounded-full \${colour}" style="width:\${pct}%"></div>
      </div>
    </div>
  \`;

  if (missing.length === 0) {
    html += '<div class="text-sm text-green-600 font-medium">All recordings present ✓</div>';
  } else {
    html += \`<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">\${missing.length} missing</div>\`;
    html += '<div class="space-y-1 max-h-72 overflow-y-auto pr-1">';
    missing.forEach((f, i) => {
      const rowId = 'row-' + code + '-' + i;
      const filename = f.key.split('/').pop();
      html += \`
        <div class="flex items-center justify-between py-1.5 border-b border-gray-50 gap-3" id="\${rowId}">
          <div class="min-w-0">
            <span class="text-xs font-mono text-gray-700 truncate block">\${filename}</span>
            <span class="text-xs text-gray-400">\${f.section} · \${f.type}</span>
          </div>
          <label class="flex-shrink-0 cursor-pointer px-3 py-1 text-xs font-medium bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg whitespace-nowrap transition-all">
            Upload
            <input type="file" accept=".mp3,audio/*" class="hidden"
              onchange="uploadFile(this, '\${f.key}', '\${rowId}')">
          </label>
        </div>
      \`;
    });
    html += '</div>';
  }

  results.innerHTML = html;
  btn.textContent = 'Recheck';
  btn.disabled = false;
}

async function uploadFile(input, key, rowId) {
  const file = input.files[0];
  if (!file) return;
  const row = document.getElementById(rowId);
  const label = input.parentElement;
  label.textContent = 'Uploading…';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('key', key);

  const res = await fetch('/api/audio/upload', { method: 'POST', body: formData });
  if (res.ok) {
    row.innerHTML = \`<span class="text-xs text-green-600 font-medium py-1.5 block">\${key.split('/').pop()} ✓</span>\`;
  } else {
    const err = await res.json();
    label.textContent = 'Failed — retry';
    label.className = label.className.replace('blue', 'red');
    console.error(err);
  }
}

init();
</script>
</body>
</html>`;
}
