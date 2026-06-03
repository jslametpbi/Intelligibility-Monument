const STORAGE_KEY = 'intelligibilityMonument.final.fixed.v6';
const BUILD_VERSION = '2026.06.04-final-fixed-v6';
const DEFAULT_ADMIN_PIN = '2026';
const ADMIN_PIN_KEY = `${STORAGE_KEY}.adminPin`;
const ADMIN_SESSION_KEY = `${STORAGE_KEY}.adminSession`;


const SPEAKER_TYPES = [
  { id: 'student', label: 'Student Voice', theme: 'Confidence and intelligibility', role: 'Undergraduate learner' },
  { id: 'academic', label: 'Academic Voice', theme: 'Research and global communication', role: 'Lecturer or researcher' },
  { id: 'community', label: 'Community Voice', theme: 'Culture and public voice', role: 'Community or cultural representative' }
];

const PROVINCES = [
  { id: 'aceh', name: 'Aceh', region: 'Sumatra', x: 12, y: 25, languages: 'Acehnese, Gayo, Indonesian, English' },
  { id: 'north-sumatra', name: 'North Sumatra', region: 'Sumatra', x: 17, y: 34, languages: 'Batak, Malay, Indonesian, English' },
  { id: 'west-sumatra', name: 'West Sumatra', region: 'Sumatra', x: 20, y: 44, languages: 'Minangkabau, Indonesian, English' },
  { id: 'riau', name: 'Riau', region: 'Sumatra', x: 25, y: 42, languages: 'Malay, Indonesian, English' },
  { id: 'riau-islands', name: 'Riau Islands', region: 'Sumatra', x: 30, y: 38, languages: 'Malay, Indonesian, English' },
  { id: 'jambi', name: 'Jambi', region: 'Sumatra', x: 27, y: 51, languages: 'Jambi Malay, Indonesian, English' },
  { id: 'bengkulu', name: 'Bengkulu', region: 'Sumatra', x: 25, y: 59, languages: 'Bengkulu Malay, Rejang, Indonesian, English' },
  { id: 'south-sumatra', name: 'South Sumatra', region: 'Sumatra', x: 31, y: 59, languages: 'Palembang Malay, Indonesian, English' },
  { id: 'bangka-belitung', name: 'Bangka Belitung Islands', region: 'Sumatra', x: 35, y: 55, languages: 'Malay, Indonesian, English' },
  { id: 'lampung', name: 'Lampung', region: 'Sumatra', x: 33, y: 69, languages: 'Lampung, Indonesian, English' },
  { id: 'jakarta', name: 'Jakarta', region: 'Java', x: 39, y: 72, languages: 'Betawi, Indonesian, English' },
  { id: 'banten', name: 'Banten', region: 'Java', x: 37, y: 74, languages: 'Sundanese, Bantenese, Indonesian, English' },
  { id: 'west-java', name: 'West Java', region: 'Java', x: 43, y: 75, languages: 'Sundanese, Indonesian, English' },
  { id: 'central-java', name: 'Central Java', region: 'Java', x: 48, y: 77, languages: 'Javanese, Indonesian, English' },
  { id: 'yogyakarta', name: 'Yogyakarta', region: 'Java', x: 50, y: 80, languages: 'Javanese, Indonesian, English' },
  { id: 'east-java', name: 'East Java', region: 'Java', x: 55, y: 78, languages: 'Javanese, Madurese, Indonesian, English' },
  { id: 'bali', name: 'Bali', region: 'Bali & Nusa Tenggara', x: 60, y: 82, languages: 'Balinese, Indonesian, English' },
  { id: 'west-nusa-tenggara', name: 'West Nusa Tenggara', region: 'Bali & Nusa Tenggara', x: 64, y: 83, languages: 'Sasak, Samawa, Mbojo, Indonesian, English' },
  { id: 'east-nusa-tenggara', name: 'East Nusa Tenggara', region: 'Bali & Nusa Tenggara', x: 70, y: 84, languages: 'Tetum, Dawan, Indonesian, English' },
  { id: 'west-kalimantan', name: 'West Kalimantan', region: 'Kalimantan', x: 47, y: 45, languages: 'Malay, Dayak languages, Indonesian, English' },
  { id: 'central-kalimantan', name: 'Central Kalimantan', region: 'Kalimantan', x: 53, y: 52, languages: 'Dayak languages, Indonesian, English' },
  { id: 'south-kalimantan', name: 'South Kalimantan', region: 'Kalimantan', x: 56, y: 63, languages: 'Banjar, Indonesian, English' },
  { id: 'east-kalimantan', name: 'East Kalimantan', region: 'Kalimantan', x: 61, y: 50, languages: 'Kutai, Dayak languages, Indonesian, English' },
  { id: 'north-kalimantan', name: 'North Kalimantan', region: 'Kalimantan', x: 61, y: 38, languages: 'Tidung, Bulungan, Indonesian, English' },
  { id: 'north-sulawesi', name: 'North Sulawesi', region: 'Sulawesi', x: 72, y: 39, languages: 'Minahasan languages, Manado Malay, Indonesian, English' },
  { id: 'gorontalo', name: 'Gorontalo', region: 'Sulawesi', x: 69, y: 45, languages: 'Gorontalo, Indonesian, English' },
  { id: 'central-sulawesi', name: 'Central Sulawesi', region: 'Sulawesi', x: 67, y: 53, languages: 'Kaili, Indonesian, English' },
  { id: 'west-sulawesi', name: 'West Sulawesi', region: 'Sulawesi', x: 64, y: 62, languages: 'Mandar, Indonesian, English' },
  { id: 'south-sulawesi', name: 'South Sulawesi', region: 'Sulawesi', x: 68, y: 67, languages: 'Bugis, Makassar, Indonesian, English' },
  { id: 'southeast-sulawesi', name: 'Southeast Sulawesi', region: 'Sulawesi', x: 73, y: 66, languages: 'Tolaki, Buton, Indonesian, English' },
  { id: 'maluku', name: 'Maluku', region: 'Maluku', x: 80, y: 64, languages: 'Ambonese Malay, local languages, Indonesian, English' },
  { id: 'north-maluku', name: 'North Maluku', region: 'Maluku', x: 79, y: 51, languages: 'Ternate, Tidore, Indonesian, English' },
  { id: 'southwest-papua', name: 'Southwest Papua', region: 'Papua', x: 86, y: 58, languages: 'Papuan local languages, Indonesian, English' },
  { id: 'west-papua', name: 'West Papua', region: 'Papua', x: 88, y: 62, languages: 'Papuan local languages, Indonesian, English' },
  { id: 'central-papua', name: 'Central Papua', region: 'Papua', x: 92, y: 62, languages: 'Papuan local languages, Indonesian, English' },
  { id: 'papua', name: 'Papua', region: 'Papua', x: 96, y: 60, languages: 'Papuan local languages, Indonesian, English' },
  { id: 'highland-papua', name: 'Highland Papua', region: 'Papua', x: 93, y: 54, languages: 'Papuan highland languages, Indonesian, English' },
  { id: 'south-papua', name: 'South Papua', region: 'Papua', x: 94, y: 72, languages: 'Papuan local languages, Indonesian, English' }
];

const COMPONENTS = [
  { id: 'garuda-wings', icon: '🪽', name: 'Garuda-Inspired Wings', material: 'Brushed bronze or bronze-finished stainless steel', meaning: 'Dignity, scholarly ascent, Indonesian cultural presence, and the courage to speak globally without erasing local voice.', digitalFunction: 'Clickable hotspot, heritage explanation, gallery anchor, QR route, and press-kit visual.' },
  { id: 'sound-spine', icon: '〰', name: 'Luminous Sound-Wave Spine', material: 'Translucent glass or acrylic with internal LED illumination', meaning: 'Intelligibility, resonance, rhythm, and the movement of Indonesian English into international academic dialogue.', digitalFunction: 'Connected to audio player, voice archive, night illumination page, and sound-based QR experience.' },
  { id: 'book-base', icon: '📖', name: 'Open-Book Scholarly Base', material: 'Bronze relief over a reinforced plinth', meaning: 'Teaching, research, publication, and the lecturer’s role in producing knowledge for society.', digitalFunction: 'Links to concept paper, scholarly rationale, publications, and dossier documentation.' },
  { id: 'archipelago-platform', icon: '🗺', name: 'Archipelago Platform', material: 'Dark granite or engineered stone with bronze island inlays', meaning: 'Indonesia as a multilingual, multicultural source of global voices, not a peripheral user of English.', digitalFunction: 'Synchronizes with the province map, 114 voice records, and province-level QR cards.' },
  { id: 'qr-station', icon: '▦', name: 'Interactive QR Audio Stations', material: 'Weather-resistant metal, acrylic interface, QR plaque, and optional NFC tag', meaning: 'Public access, open education, visitor participation, and the shift from static monument to living archive.', digitalFunction: 'Generates QR cards for hotspots, provinces, individual voices, materials, and the dossier.' },
  { id: 'paving', icon: '⌁', name: 'Intelligibility Pattern Paving', material: 'Engraved stone with waveform and phonetic motifs', meaning: 'Speech patterns, intelligibility, rhythm, accent diversity, and the ethics of listening.', digitalFunction: 'Links physical ground patterns with pronunciation education and reflective learning resources.' }
];

const HOTSPOTS = [
  { id: 'wings', title: 'Garuda-Inspired Wings', x: 60, y: 23, side: 'alt', componentId: 'garuda-wings', tags: ['Bronze', 'Heritage', 'Identity'], description: 'The wings symbolize dignity, ascent, and Indonesian cultural presence in global academic communication. They frame the monument as a public declaration that local accents can carry international meaning.', relatedProvinceIds: ['aceh', 'bali', 'yogyakarta'] },
  { id: 'spine', title: 'Luminous Sound-Wave Spine', x: 64, y: 31, side: 'alt', componentId: 'sound-spine', tags: ['Glass', 'LED', 'Sound'], description: 'The glowing spine visualizes intelligibility, resonance, and the movement of Indonesian voices across borders. It turns speech into light, making voice a visible public form.', relatedProvinceIds: ['jakarta', 'west-java', 'east-java'] },
  { id: 'book', title: 'Open-Book Scholarly Base', x: 60, y: 52, side: 'alt', componentId: 'book-base', tags: ['Research', 'Education', 'Publication'], description: 'The open book represents teaching, publication, and the lecturer’s contribution to knowledge. It gives the monument an explicitly academic foundation.', relatedProvinceIds: ['central-java', 'yogyakarta', 'east-java'] },
  { id: 'platform', title: 'Archipelago Platform', x: 33, y: 63, componentId: 'archipelago-platform', tags: ['Indonesia', 'Map', 'Diversity'], description: 'The archipelago platform transforms Indonesia’s geography into a learning surface. It links the physical monument to the national voice map and the 114-voice archive.', relatedProvinceIds: ['aceh', 'north-sumatra', 'papua'] },
  { id: 'qr-audio', title: 'Interactive QR Audio Stations', x: 72, y: 68, side: 'alt', componentId: 'qr-station', tags: ['QR', 'Audio', 'Archive'], description: 'The QR stations make the monument interactive. Visitors scan, listen, read transcripts, and enter the digital archive directly from the plaza.', relatedProvinceIds: ['riau-islands', 'jakarta', 'north-sulawesi'] },
  { id: 'paving', title: 'Intelligibility Pattern Paving', x: 43, y: 82, componentId: 'paving', tags: ['Pronunciation', 'Intelligibility', 'ELF'], description: 'The paving engraves speech waves and phonetic motifs into public space. It communicates that pronunciation diversity is not a deficit but a field of meaning.', relatedProvinceIds: ['west-sumatra', 'south-sulawesi', 'maluku'] },
  { id: 'night', title: 'LED Night Illumination', x: 90, y: 83, side: 'alt', componentId: 'sound-spine', tags: ['Lighting', 'Gallery', 'Public Space'], description: 'Night illumination makes the artwork visible after dark and symbolizes voices that continue to travel across time, space, and learning communities.', relatedProvinceIds: ['north-kalimantan', 'north-maluku', 'south-papua'] }
];


const MODEL_FRAMES = [
  {
    id: 'frame-01',
    angle: 0,
    label: 'Front view',
    src: 'assets/model/frame-01.png',
    hotspots: {
      wings: { x: 49, y: 35, align: 'left' },
      spine: { x: 53, y: 23, align: 'right' },
      book: { x: 52, y: 68, align: 'right' },
      platform: { x: 51, y: 81, align: 'left' },
      'qr-audio': { x: 79, y: 69, align: 'right' },
      paving: { x: 50, y: 91, align: 'left' },
      night: { x: 64, y: 82, align: 'right' }
    }
  },
  {
    id: 'frame-02',
    angle: 60,
    label: 'Front-right view',
    src: 'assets/model/frame-02.png',
    hotspots: {
      wings: { x: 56, y: 35, align: 'right' },
      spine: { x: 53, y: 24, align: 'right' },
      book: { x: 53, y: 67, align: 'right' },
      platform: { x: 51, y: 81, align: 'left' },
      'qr-audio': { x: 78, y: 69, align: 'right' },
      paving: { x: 49, y: 90, align: 'left' },
      night: { x: 66, y: 82, align: 'right' }
    }
  },
  {
    id: 'frame-03',
    angle: 120,
    label: 'Side-right view',
    src: 'assets/model/frame-03.png',
    hotspots: {
      wings: { x: 58, y: 35, align: 'right' },
      spine: { x: 52, y: 24, align: 'right' },
      book: { x: 53, y: 67, align: 'right' },
      platform: { x: 50, y: 81, align: 'left' },
      'qr-audio': { x: 78, y: 69, align: 'right' },
      paving: { x: 50, y: 90, align: 'left' },
      night: { x: 65, y: 82, align: 'right' }
    }
  },
  {
    id: 'frame-04',
    angle: 180,
    label: 'Rear view',
    src: 'assets/model/frame-04.png',
    hotspots: {
      wings: { x: 50, y: 34, align: 'left' },
      spine: { x: 52, y: 23, align: 'right' },
      book: { x: 52, y: 68, align: 'right' },
      platform: { x: 51, y: 81, align: 'left' },
      'qr-audio': { x: 80, y: 68, align: 'right' },
      paving: { x: 50, y: 90, align: 'left' },
      night: { x: 64, y: 82, align: 'right' }
    }
  },
  {
    id: 'frame-05',
    angle: 240,
    label: 'Side-left view',
    src: 'assets/model/frame-05.png',
    hotspots: {
      wings: { x: 45, y: 35, align: 'left' },
      spine: { x: 52, y: 24, align: 'right' },
      book: { x: 52, y: 67, align: 'right' },
      platform: { x: 50, y: 81, align: 'left' },
      'qr-audio': { x: 24, y: 69, align: 'left' },
      paving: { x: 49, y: 90, align: 'left' },
      night: { x: 61, y: 82, align: 'right' }
    }
  },
  {
    id: 'frame-06',
    angle: 300,
    label: 'Front-left view',
    src: 'assets/model/frame-06.png',
    hotspots: {
      wings: { x: 43, y: 35, align: 'left' },
      spine: { x: 52, y: 23, align: 'right' },
      book: { x: 51, y: 67, align: 'right' },
      platform: { x: 50, y: 81, align: 'left' },
      'qr-audio': { x: 23, y: 69, align: 'left' },
      paving: { x: 49, y: 90, align: 'left' },
      night: { x: 59, y: 82, align: 'right' }
    }
  }
];

const DEFAULT_IDENTITY = {
  title: 'The Intelligibility Monument',
  subtitle: 'Indonesian Voices in Global English',
  owner: 'Dr. Joko Slamet, Cipta Wacana University, Malang, Indonesia',
  location: 'University Plaza, Indonesia',
  height: '6–8 meters',
  concept: 'A monumental public artwork celebrating Indonesian voices, intelligibility, and global academic communication through sculpture, sound, and interactive learning.'
};

const TIMELINE = [
  { phase: 'Phase 1', title: 'Concept and Dossier', text: 'Finalize philosophy, design statement, work specifications, curatorial statement, institutional endorsement, and copyright documentation.' },
  { phase: 'Phase 2', title: 'Voice Documentation', text: 'Collect real voices ethically from all provinces, prepare consent, transcripts, metadata, and province-level representation.' },
  { phase: 'Phase 3', title: 'Prototype and Digital Twin', text: 'Build a scale model, online archive, QR station, visual gallery, and international exhibition webpage.' },
  { phase: 'Phase 4', title: 'Fabrication and Installation', text: 'Coordinate engineering, safety, materials, lighting, accessibility, plaque text, and public inauguration.' },
  { phase: 'Phase 5', title: 'International Dissemination', text: 'Submit to international art, design, education-technology, and public-humanities exhibitions with media and scholarly documentation.' }
];

function makeDefaultVoices() {
  const voices = [];
  for (const province of PROVINCES) {
    for (const type of SPEAKER_TYPES) {
      const id = `${province.id}-${type.id}`;
      const number = String(voices.length + 1).padStart(3, '0');
      voices.push({
        id,
        provinceId: province.id,
        province: province.name,
        region: province.region,
        speakerType: type.label,
        role: type.role,
        name: `${province.name} ${type.label} ${number}`,
        theme: type.theme,
        language: province.languages,
        quote: type.id === 'student'
          ? `My English voice from ${province.name} carries my identity, and intelligibility helps my ideas travel.`
          : type.id === 'academic'
            ? `Academic English should create access for ${province.name} voices, not force them to disappear.`
            : `Our local voice from ${province.name} can meet the world when people listen for meaning.`,
        transcript: `This ${type.label.toLowerCase()} from ${province.name} is a representative digital record prepared for the Intelligibility Monument archive. It documents the principle that Indonesian English voices should be valued through intelligibility, clarity of meaning, cultural identity, and ethical listening. Replace this demo text with a real consent-based recording and transcript during field documentation.`,
        audioData: '',
        externalAudio: '',
        isDemo: true,
        createdAt: new Date().toISOString()
      });
    }
  }
  return voices;
}

const DEFAULT_STATE = {
  version: BUILD_VERSION,
  identity: DEFAULT_IDENTITY,
  voices: makeDefaultVoices(),
  selectedProvinceId: 'all',
  selectedSpeakerType: 'all'
};

let state = loadState();
let activeHotspotId = HOTSPOTS[0].id;
let activeProvinceId = state.selectedProvinceId === 'all' ? 'east-java' : state.selectedProvinceId;
let activeVoiceId = state.voices[0]?.id || null;
let modelRotation = 0;
let currentModelFrameIndex = 0;
let modelAutoTimer = null;
let modelDragStart = null;

function $(selector, parent = document) { return parent.querySelector(selector); }
function $all(selector, parent = document) { return Array.from(parent.querySelectorAll(selector)); }
function byId(id) { return document.getElementById(id); }
function slug(text = '') { return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
function esc(text = '') { return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c])); }
function getProvince(id) { return PROVINCES.find(p => p.id === id) || PROVINCES[0]; }
function getComponent(id) { return COMPONENTS.find(c => c.id === id) || COMPONENTS[0]; }
function getHotspot(id) { return HOTSPOTS.find(h => h.id === id) || HOTSPOTS[0]; }
function getVoice(id) { return state.voices.find(v => v.id === id) || state.voices[0]; }


function getModelFrameIndex(rotation = 0) {
  const normalized = ((Number(rotation) || 0) % 360 + 360) % 360;
  return Math.floor((normalized + 30) / 60) % MODEL_FRAMES.length;
}
function currentModelFrame() { return MODEL_FRAMES[currentModelFrameIndex] || MODEL_FRAMES[0]; }
function modelHotspotSpec(hotspotId) {
  return currentModelFrame().hotspots[hotspotId] || { x: 50, y: 50, align: 'left' };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    const merged = {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      identity: { ...DEFAULT_IDENTITY, ...(parsed.identity || {}) },
      voices: Array.isArray(parsed.voices) && parsed.voices.length ? parsed.voices : makeDefaultVoices()
    };
    return merged;
  } catch (error) {
    console.warn('State load failed; using defaults.', error);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function baseUrl() {
  return `${location.origin}${location.pathname}`;
}

function deepLink(type, id = '') {
  return `${baseUrl()}#${type}${id ? `=${encodeURIComponent(id)}` : ''}`;
}

function qrImageUrl(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=12&data=${encodeURIComponent(url)}`;
}

function toast(message) {
  const el = byId('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2800);
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    toast('Browser speech is not available here.');
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = .92;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function setSectionActive() {
  const hash = location.hash || '#home';
  const base = hash.replace('#','').split('=')[0];
  const sectionMap = { hotspot: 'monument', voice: 'voices', province: 'map', material: 'materials', qr: 'qr', platform: 'home' };
  const target = sectionMap[base] || base || 'home';
  $all('.main-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${target}`));
}

function handleDeepLink() {
  setSectionActive();
  const raw = location.hash.replace('#','');
  if (!raw.includes('=')) return;
  const [type, encoded] = raw.split('=');
  const id = decodeURIComponent(encoded || '');
  if (type === 'hotspot') {
    setTimeout(() => selectHotspot(id, true), 100);
    byId('monument')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (type === 'voice') {
    setTimeout(() => selectVoice(id, true), 100);
    byId('voices')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (type === 'province') {
    if (id !== 'all') setTimeout(() => selectProvince(id, true), 100);
    byId('map')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (type === 'material') {
    byId('materials')?.scrollIntoView({ behavior: 'smooth' });
    toast('Material route opened.');
  }
}

function renderHome() {
  byId('homeConcept').textContent = state.identity.concept;
  const realCount = state.voices.filter(v => !v.isDemo).length;
  const demoCount = state.voices.length;
  const stats = [
    { value: PROVINCES.length, label: 'Provinces represented' },
    { value: demoCount, label: 'Voice records ready' },
    { value: HOTSPOTS.length, label: 'Clickable QR spots' },
    { value: realCount, label: 'Real recordings added' }
  ];
  byId('homeStats').innerHTML = stats.map(s => `<div class="stat"><strong>${s.value}</strong><span>${esc(s.label)}</span></div>`).join('');
}

function renderHotspots() {
  const layer = byId('hotspotLayer');
  layer.innerHTML = HOTSPOTS.map(h => `
    <button class="board-hotspot ${h.side === 'alt' ? 'alt' : ''} ${h.id === activeHotspotId ? 'active' : ''}" style="left:${h.x}%;top:${h.y}%" data-hotspot-id="${h.id}" type="button" aria-label="Open ${esc(h.title)} hotspot">
      <span class="dot">＋</span><span class="label">${esc(h.title)}</span>
    </button>
  `).join('');
  $all('[data-hotspot-id]').forEach(btn => btn.addEventListener('click', () => selectHotspot(btn.dataset.hotspotId, true)));
  renderHotspotPanel();
}

function render360Model() {
  const stage = byId('modelStage');
  if (!stage) return;
  const frame = currentModelFrame();
  const hotspotMarkup = HOTSPOTS.map(h => {
    const spec = modelHotspotSpec(h.id);
    return `
      <button class="model-hotspot ${spec.align === 'right' ? 'alt' : ''} ${h.id === activeHotspotId ? 'active' : ''}" style="left:${spec.x}%;top:${spec.y}%" data-model-hotspot="${h.id}" type="button" aria-label="Open ${esc(h.title)} hotspot in 360 view">
        <span class="dot">＋</span><span class="label">${esc(h.title)}</span>
      </button>`;
  }).join('');
  stage.innerHTML = `
    <img class="model-frame-image" src="${frame.src}" alt="Photoreal 360 digital twin of the monument, ${esc(frame.label)}" />
    <div class="model-view-chip">${esc(frame.label)} · ${Math.round(modelRotation)}°</div>
    <div class="model-hotspot-layer">${hotspotMarkup}</div>`;
  $all('[data-model-hotspot]', stage).forEach(btn => {
    btn.addEventListener('click', event => {
      event.stopPropagation();
      selectHotspot(btn.dataset.modelHotspot, true);
      byId('hotspotPanel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  updateModelSelection();
  renderModelSpotPanel();
}

function setModelRotation(value) {
  modelRotation = ((Number(value) || 0) % 360 + 360) % 360;
  const slider = byId('modelRotation');
  if (slider) slider.value = Math.round(modelRotation);
  const label = byId('modelAngle');
  if (label) label.textContent = `${Math.round(modelRotation)}°`;
  const nextIndex = getModelFrameIndex(modelRotation);
  if (nextIndex !== currentModelFrameIndex || !byId('modelStage')?.querySelector('.model-frame-image')) {
    currentModelFrameIndex = nextIndex;
    render360Model();
  } else {
    const chip = byId('modelStage')?.querySelector('.model-view-chip');
    if (chip) chip.textContent = `${currentModelFrame().label} · ${Math.round(modelRotation)}°`;
    updateModelSelection();
  }
}

function updateModelSelection() {
  $all('[data-model-hotspot]').forEach(el => el.classList.toggle('active', el.dataset.modelHotspot === activeHotspotId));
}

function toggleModelAuto() {
  const btn = byId('modelAuto');
  if (modelAutoTimer) {
    clearInterval(modelAutoTimer);
    modelAutoTimer = null;
    if (btn) { btn.textContent = 'Auto Rotate'; btn.setAttribute('aria-pressed', 'false'); }
    return;
  }
  modelAutoTimer = setInterval(() => setModelRotation(modelRotation + 60), 650);
  if (btn) { btn.textContent = 'Stop Rotation'; btn.setAttribute('aria-pressed', 'true'); }
}

function init360Events() {
  const viewport = byId('modelViewport');
  const slider = byId('modelRotation');
  if (slider) slider.addEventListener('input', e => setModelRotation(e.target.value));
  byId('modelPrev')?.addEventListener('click', () => setModelRotation(modelRotation - 60));
  byId('modelReset')?.addEventListener('click', () => setModelRotation(0));
  byId('modelAuto')?.addEventListener('click', toggleModelAuto);
  byId('modelNext')?.addEventListener('click', () => setModelRotation(modelRotation + 60));
  byId('modelQrBtn')?.addEventListener('click', () => openQrModal(`hotspot:${activeHotspotId}`));
  if (!viewport) return;
  viewport.addEventListener('pointerdown', e => {
    modelDragStart = { x: e.clientX, rotation: modelRotation };
    viewport.setPointerCapture?.(e.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', e => {
    if (!modelDragStart) return;
    const delta = e.clientX - modelDragStart.x;
    setModelRotation(modelDragStart.rotation + delta * .8);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(type => viewport.addEventListener(type, () => {
    modelDragStart = null;
    viewport.classList.remove('dragging');
  }));
}

function selectHotspot(id, updateHash = false) {
  activeHotspotId = id;
  if (updateHash) history.replaceState(null, '', `#hotspot=${encodeURIComponent(id)}`);
  renderHotspots();
  render360Model();
  updateModelSelection();
  renderModelSpotPanel();
}

function renderModelSpotPanel() {
  const panel = byId('modelSpotPanel');
  if (!panel) return;
  const h = getHotspot(activeHotspotId);
  const comp = getComponent(h.componentId);
  const link = deepLink('hotspot', h.id);
  panel.innerHTML = `
    <p class="eyebrow">Selected spot</p>
    <h3>${esc(h.title)}</h3>
    <img class="qr-side-large" src="${qrImageUrl(link)}" alt="QR for ${esc(h.title)}" />
    <p>${esc(h.description)}</p>
    <div class="mini-tags">${h.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
    <div class="detail-meta-block">
      <p><strong>Material</strong><br><span style="color:var(--muted)">${esc(comp.material)}</span></p>
      <p><strong>Meaning</strong><br><span style="color:var(--muted)">${esc(comp.meaning)}</span></p>
    </div>
    <div class="panel-actions">
      <button class="primary-btn compact" data-open-qr="hotspot:${h.id}" type="button">Open Large QR</button>
      <button class="ghost-btn compact" data-speak="${esc(h.description)}" type="button">Listen</button>
      <button class="ghost-btn compact" data-open-material="${comp.id}" type="button">Material</button>
    </div>`;
  bindDynamicActions(panel);
}

function renderHotspotPanel() {
  const h = getHotspot(activeHotspotId);
  const comp = getComponent(h.componentId);
  const link = deepLink('hotspot', h.id);
  const relatedVoices = state.voices.filter(v => h.relatedProvinceIds.includes(v.provinceId)).slice(0, 6);
  byId('hotspotPanel').innerHTML = `
    <p class="eyebrow">Selected clickable spot</p>
    <h3>${esc(h.title)}</h3>
    <p>${esc(h.description)}</p>
    <div class="mini-tags">${h.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
    <img class="qr-small" src="${qrImageUrl(link)}" alt="QR for ${esc(h.title)}" />
    <div class="detail-meta-block">
      <p><strong>Material and structure</strong><br><span style="color:var(--muted)">${esc(comp.material)}</span></p>
      <p><strong>Symbolic meaning</strong><br><span style="color:var(--muted)">${esc(comp.meaning)}</span></p>
      <p><strong>Digital function</strong><br><span style="color:var(--muted)">${esc(comp.digitalFunction)}</span></p>
      <p><strong>Visitor interaction</strong><br><span style="color:var(--muted)">Scan the QR, read the explanation, open related voices, browse the archive, and connect the physical monument with its digital twin.</span></p>
    </div>
    <div class="panel-actions">
      <button class="primary-btn compact" data-open-qr="hotspot:${h.id}" type="button">Open QR</button>
      <button class="ghost-btn compact" data-speak="${esc(h.description)}" type="button">Listen</button>
      <button class="ghost-btn compact" data-open-material="${comp.id}" type="button">Material</button>
    </div>
    <div class="province-list-mini">
      ${relatedVoices.map(v => `<button type="button" data-jump-voice="${v.id}"><strong>${esc(v.province)}</strong><br><span>${esc(v.speakerType)} · ${esc(v.theme)}</span></button>`).join('')}
    </div>
  `;
  bindDynamicActions(byId('hotspotPanel'));
}

function renderProvinceOptions() {
  const opts = `<option value="all">All provinces</option>` + PROVINCES.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
  byId('provinceFilter').innerHTML = opts;
  byId('adminProvince').innerHTML = PROVINCES.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
}

function filteredVoices() {
  const q = byId('voiceSearch')?.value.trim().toLowerCase() || '';
  const provinceId = byId('provinceFilter')?.value || state.selectedProvinceId || 'all';
  const speaker = byId('speakerFilter')?.value || state.selectedSpeakerType || 'all';
  return state.voices.filter(v => {
    const matchesProvince = provinceId === 'all' || v.provinceId === provinceId;
    const matchesSpeaker = speaker === 'all' || v.speakerType === speaker;
    const haystack = `${v.name} ${v.province} ${v.region} ${v.speakerType} ${v.role} ${v.language} ${v.theme} ${v.quote} ${v.transcript}`.toLowerCase();
    return matchesProvince && matchesSpeaker && (!q || haystack.includes(q));
  });
}

function renderVoices() {
  const list = filteredVoices();
  if (!list.find(v => v.id === activeVoiceId)) activeVoiceId = list[0]?.id || state.voices[0]?.id;
  renderFeaturedVoice();
  byId('voiceList').innerHTML = list.length ? list.map(v => voiceCardHtml(v)).join('') : `<div class="voice-card"><p>No voice records match your search.</p></div>`;
  bindDynamicActions(byId('voiceList'));
}

function voiceCardHtml(v) {
  return `
    <article class="voice-card" id="voice-card-${esc(v.id)}">
      <div>
        <h4>${esc(v.name)}</h4>
        <div class="voice-meta"><span>${esc(v.province)}</span><span>${esc(v.speakerType)}</span><span>${esc(v.region)}</span>${v.isDemo ? '<span>Demo slot</span>' : '<span>Real record</span>'}</div>
        <p>${esc(v.quote)}</p>
      </div>
      <div class="voice-actions">
        <button class="icon-btn" title="Open voice" data-jump-voice="${v.id}" type="button">↗</button>
        <button class="icon-btn" title="Listen" data-speak="${esc(v.transcript)}" type="button">▶</button>
        <button class="icon-btn" title="QR" data-open-qr="voice:${v.id}" type="button">▦</button>
      </div>
    </article>
  `;
}

function renderFeaturedVoice() {
  const v = getVoice(activeVoiceId);
  if (!v) return;
  const link = deepLink('voice', v.id);
  byId('featuredVoice').innerHTML = `
    <p class="eyebrow">Featured voice</p>
    <h3>${esc(v.name)}</h3>
    <div class="mini-tags"><span>${esc(v.province)}</span><span>${esc(v.speakerType)}</span><span>${v.isDemo ? 'Demo slot' : 'Real recording'}</span></div>
    <p><strong>Theme:</strong> ${esc(v.theme)}</p>
    <p>${esc(v.quote)}</p>
    <p>${esc(v.transcript)}</p>
    ${v.audioData || v.externalAudio ? `<audio controls src="${esc(v.audioData || v.externalAudio)}"></audio>` : `<div class="helper">No uploaded audio yet. Use the Listen button for browser text-to-speech, or add real audio in Admin Studio.</div>`}
    <img class="qr-small" src="${qrImageUrl(link)}" alt="QR for ${esc(v.name)}" />
    <div class="panel-actions">
      <button class="primary-btn compact" data-speak="${esc(v.transcript)}" type="button">Listen</button>
      <button class="ghost-btn compact" data-open-qr="voice:${v.id}" type="button">Open QR</button>
      <button class="ghost-btn compact" data-province="${v.provinceId}" type="button">Province</button>
    </div>
  `;
  bindDynamicActions(byId('featuredVoice'));
}

function selectVoice(id, updateHash = false) {
  const v = getVoice(id);
  if (!v) return;
  activeVoiceId = id;
  if (updateHash) history.replaceState(null, '', `#voice=${encodeURIComponent(id)}`);
  byId('provinceFilter').value = v.provinceId;
  state.selectedProvinceId = v.provinceId;
  saveState();
  renderVoices();
  setTimeout(() => byId(`voice-card-${CSS.escape(id)}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
}

function renderMap() {
  const map = byId('provinceMap');
  map.innerHTML = PROVINCES.map(p => {
    const count = state.voices.filter(v => v.provinceId === p.id).length;
    return `<button class="province-dot ${count ? 'has-voices' : ''} ${p.id === activeProvinceId ? 'active' : ''}" style="left:${p.x}%;top:${p.y}%" data-province="${p.id}" title="${esc(p.name)}: ${count} voices" type="button"><span>${esc(p.name)} · ${count}</span></button>`;
  }).join('');
  $all('.province-dot', map).forEach(btn => btn.addEventListener('click', () => selectProvince(btn.dataset.province, true)));
  renderProvincePanel();
}

function selectProvince(id, updateHash = false) {
  activeProvinceId = id;
  if (updateHash) history.replaceState(null, '', `#province=${encodeURIComponent(id)}`);
  state.selectedProvinceId = id;
  saveState();
  renderMap();
}

function renderProvincePanel() {
  const p = getProvince(activeProvinceId);
  const voices = state.voices.filter(v => v.provinceId === p.id);
  byId('provincePanel').innerHTML = `
    <p class="eyebrow">Province access</p>
    <h3>${esc(p.name)}</h3>
    <p><strong>Region:</strong> ${esc(p.region)}</p>
    <p><strong>Language note:</strong> ${esc(p.languages)}</p>
    <div class="stat-grid" style="grid-template-columns:repeat(2,1fr);margin:16px 0"><div class="stat"><strong>${voices.length}</strong><span>Voice records</span></div><div class="stat"><strong>1</strong><span>Province QR</span></div></div>
    <div class="panel-actions">
      <button class="primary-btn compact" data-filter-province="${p.id}" type="button">Open Voices</button>
      <button class="ghost-btn compact" data-open-qr="province:${p.id}" type="button">Province QR</button>
    </div>
    <div class="province-list-mini">
      ${voices.map(v => `<button type="button" data-jump-voice="${v.id}"><strong>${esc(v.speakerType)}</strong><br><span>${esc(v.name)}</span></button>`).join('')}
    </div>
  `;
  bindDynamicActions(byId('provincePanel'));
}

function renderComponents() {
  byId('componentGrid').innerHTML = COMPONENTS.map(c => `
    <article class="component-card card" id="material-${esc(c.id)}">
      <div class="component-icon">${c.icon}</div>
      <h3>${esc(c.name)}</h3>
      <p><strong>Material:</strong> ${esc(c.material)}</p>
      <p><strong>Meaning:</strong> ${esc(c.meaning)}</p>
      <p><strong>Digital function:</strong> ${esc(c.digitalFunction)}</p>
      <div class="spacer"></div>
      <div class="panel-actions">
        <button class="primary-btn compact" data-open-qr="material:${c.id}" type="button">QR</button>
        <button class="ghost-btn compact" data-speak="${esc(c.meaning)}" type="button">Listen</button>
      </div>
    </article>
  `).join('');
  bindDynamicActions(byId('componentGrid'));
}

function allQrTargets() {
  return [
    { key: 'platform-home', type: 'Platform', title: 'The Intelligibility Monument Platform', url: deepLink('platform','home'), caption: 'Scan to open the full digital platform.' },
    ...HOTSPOTS.map(h => ({ key: `hotspot:${h.id}`, type: 'Hotspot', title: h.title, url: deepLink('hotspot', h.id), caption: `Scan to open the ${h.title} monument element.` })),
    { key: 'province-all', type: 'Province Map', title: 'All Provinces Voice Map', url: `${baseUrl()}#map`, caption: 'Scan to open the interactive province voice map.' },
    ...PROVINCES.map(p => ({ key: `province:${p.id}`, type: 'Province', title: p.name, url: deepLink('province', p.id), caption: `Scan to open ${p.name} voice records.` })),
    ...COMPONENTS.map(c => ({ key: `material:${c.id}`, type: 'Material', title: c.name, url: deepLink('material', c.id), caption: `Scan to open the material and symbolism record for ${c.name}.` })),
    ...state.voices.map(v => ({ key: `voice:${v.id}`, type: 'Voice', title: v.name, url: deepLink('voice', v.id), caption: `Scan to listen to ${v.province} ${v.speakerType}.` })),
    { key: 'dossier', type: 'Dossier', title: 'International Recognition Dossier', url: `${baseUrl()}#archive`, caption: 'Scan to open the recognition dossier.' }
  ];
}

function renderQrControls(selectedKey = null) {
  const targets = allQrTargets();
  const select = byId('qrTarget');
  const previous = selectedKey || select.value || 'platform-home';
  select.innerHTML = targets.map(t => `<option value="${esc(t.key)}">${esc(t.type)} · ${esc(t.title)}</option>`).join('');
  select.value = targets.find(t => t.key === previous) ? previous : 'platform-home';
  renderQrCard(select.value);
  const topTargets = targets.filter(t => ['Platform','Hotspot','Province','Material','Dossier'].includes(t.type)).slice(0, 70);
  byId('qrDirectory').innerHTML = `
    <p class="eyebrow">QR directory</p>
    <h3>Frequently Used QR Routes</h3>
    <div class="qr-dir-grid">
      ${topTargets.map(t => `<div class="qr-dir-item"><div><strong>${esc(t.title)}</strong><span>${esc(t.type)}</span></div><button class="icon-btn" data-open-qr="${esc(t.key)}" type="button">▦</button></div>`).join('')}
    </div>
  `;
  bindDynamicActions(byId('qrDirectory'));
}

function renderQrCard(key) {
  const target = allQrTargets().find(t => t.key === key) || allQrTargets()[0];
  byId('qrTitle').textContent = target.title;
  byId('qrType').textContent = target.type;
  byId('qrCaption').textContent = target.caption;
  byId('qrUrl').value = target.url;
  const img = byId('qrImg');
  img.src = qrImageUrl(target.url);
  img.onerror = () => {
    img.style.display = 'none';
    byId('qrFallback').style.display = 'block';
  };
  img.onload = () => {
    img.style.display = 'block';
    byId('qrFallback').style.display = 'none';
  };
}

function openQrModal(key) {
  const target = allQrTargets().find(t => t.key === key) || allQrTargets()[0];
  showModal(`
    <p class="eyebrow">Large QR access</p>
    <h3 id="modalTitle">${esc(target.title)}</h3>
    <div class="modal-grid qr-modal-grid">
      <div class="qr-card" style="margin:0">
        <div class="qr-card-head"><strong>${esc(target.title)}</strong><span>${esc(target.type)}</span></div>
        <img src="${qrImageUrl(target.url)}" alt="QR for ${esc(target.title)}" style="width:340px;height:340px;margin:18px auto" />
        <p>${esc(target.caption)}</p>
      </div>
      <div>
        <p>${esc(target.caption)}</p>
        <input value="${esc(target.url)}" readonly />
        <div class="panel-actions">
          <button class="primary-btn compact" data-copy="${esc(target.url)}" type="button">Copy Link</button>
          <button class="ghost-btn compact" data-open-direct="${esc(target.url)}" type="button">Open Route</button>
        </div>
      </div>
    </div>
  `);
}

function showModal(html) {
  byId('modalContent').innerHTML = html;
  byId('modal').hidden = false;
  bindDynamicActions(byId('modalContent'));
}

function closeModal() {
  byId('modal').hidden = true;
}

function renderDossier() {
  const realCount = state.voices.filter(v => !v.isDemo).length;
  const voiceCount = state.voices.length;
  const byRegion = [...new Set(PROVINCES.map(p => p.region))].map(region => ({ region, count: state.voices.filter(v => v.region === region).length }));
  byId('dossier').innerHTML = `
    <div class="dossier-section">
      <p class="eyebrow">Work identity</p>
      <h3>${esc(state.identity.title)}</h3>
      <p><strong>Subtitle:</strong> ${esc(state.identity.subtitle)}</p>
      <p><strong>Owner:</strong> ${esc(state.identity.owner)}</p>
      <p><strong>Location:</strong> ${esc(state.identity.location)}</p>
      <p><strong>Suggested height:</strong> ${esc(state.identity.height)}</p>
      <p>${esc(state.identity.concept)}</p>
    </div>
    <div class="dossier-section">
      <h3>Integrated Artistic and Academic Contribution</h3>
      <p>The monument integrates public sculpture, Indonesian cultural symbolism, English as a Lingua Franca, intelligibility-oriented pronunciation education, digital archive practice, and QR-based visitor interaction.</p>
    </div>
    <div class="dossier-section">
      <h3>National Voice Representation</h3>
      <ul>
        <li>${PROVINCES.length} Indonesian provinces represented.</li>
        <li>${voiceCount} voice records prepared, with ${realCount} real recordings currently added and ${voiceCount - realCount} editable demo slots.</li>
        <li>Three records per province: student voice, academic voice, and community voice.</li>
        ${byRegion.map(r => `<li>${esc(r.region)}: ${r.count} records.</li>`).join('')}
      </ul>
    </div>
    <div class="dossier-section">
      <h3>Clickable Monument Elements</h3>
      <ul>${HOTSPOTS.map(h => `<li><strong>${esc(h.title)}:</strong> ${esc(h.description)}</li>`).join('')}</ul>
    </div>
    <div class="dossier-section">
      <h3>Materials and Technical Identity</h3>
      <ul>${COMPONENTS.map(c => `<li><strong>${esc(c.name)}:</strong> ${esc(c.material)}. ${esc(c.meaning)}</li>`).join('')}</ul>
    </div>
    <div class="dossier-section">
      <h3>Implementation and Dissemination Strategy</h3>
      <ul>${TIMELINE.map(t => `<li><strong>${esc(t.phase)} · ${esc(t.title)}:</strong> ${esc(t.text)}</li>`).join('')}</ul>
    </div>
    <div class="dossier-section">
      <h3>Evidence Package to Prepare</h3>
      <ul>
        <li>Curatorial statement and expert validation.</li>
        <li>Professional photos, installation video, and night-illumination video.</li>
        <li>Voice consent forms, transcripts, and metadata archive.</li>
        <li>International exhibition invitation, catalogue, public discussion, or media coverage.</li>
        <li>Copyright/HKI registration for visual design, digital archive, and documentation package.</li>
      </ul>
    </div>
  `;
  byId('archiveSide').innerHTML = `
    <p class="eyebrow">Archive preview</p>
    <h3>Documentation Assets</h3>
    <img src="assets/design-board.png" alt="Design board preview" />
    <p>The design board, website visual, QR cards, voice archive, and dossier should be stored together as one professional documentation package.</p>
    <div class="panel-actions">
      <button class="primary-btn compact" data-open-qr="dossier" type="button">Dossier QR</button>
      <button class="ghost-btn compact" id="exportDataSide" type="button">Export JSON</button>
    </div>
  `;
  bindDynamicActions(byId('archiveSide'));
}

function bindDynamicActions(parent = document) {
  $all('[data-speak]', parent).forEach(btn => btn.onclick = () => speak(btn.dataset.speak));
  $all('[data-open-qr]', parent).forEach(btn => btn.onclick = () => {
    const key = btn.dataset.openQr;
    renderQrControls(key);
    openQrModal(key);
  });
  $all('[data-jump-voice]', parent).forEach(btn => btn.onclick = () => selectVoice(btn.dataset.jumpVoice, true));
  $all('[data-province]', parent).forEach(btn => btn.onclick = () => selectProvince(btn.dataset.province, true));
  $all('[data-filter-province]', parent).forEach(btn => btn.onclick = () => {
    byId('provinceFilter').value = btn.dataset.filterProvince;
    byId('speakerFilter').value = 'all';
    byId('voiceSearch').value = '';
    renderVoices();
    byId('voices').scrollIntoView({ behavior: 'smooth' });
  });
  $all('[data-open-material]', parent).forEach(btn => btn.onclick = () => {
    const id = btn.dataset.openMaterial;
    byId('materials').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => byId(`material-${CSS.escape(id)}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 160);
  });
  $all('[data-copy]', parent).forEach(btn => btn.onclick = async () => {
    await navigator.clipboard.writeText(btn.dataset.copy);
    toast('Link copied.');
  });
  $all('[data-open-direct]', parent).forEach(btn => btn.onclick = () => { location.href = btn.dataset.openDirect; closeModal(); setTimeout(handleDeepLink, 80); });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `intelligibility-monument-data-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('JSON data exported.');
}

function downloadTextFile(filename, html) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadCurrentQrCard() {
  const target = allQrTargets().find(t => t.key === byId('qrTarget').value) || allQrTargets()[0];
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(target.title)} QR Card</title><style>body{font-family:Arial,sans-serif;display:grid;place-items:center;min-height:100vh;background:#f5efe2}.card{width:360px;text-align:center;border:1px solid #c79d4f;border-radius:24px;background:white;padding:24px;box-shadow:0 18px 60px #0002}h1{font-family:Georgia,serif;font-size:24px}img{width:260px;height:260px}.type{color:#9b6f32;text-transform:uppercase;letter-spacing:.12em;font-size:12px}.url{font-size:12px;word-break:break-all;color:#555}</style></head><body><div class="card"><p class="type">${esc(target.type)}</p><h1>${esc(target.title)}</h1><img src="${qrImageUrl(target.url)}" alt="QR"><p>${esc(target.caption)}</p><p class="url">${esc(target.url)}</p></div></body></html>`;
  downloadTextFile(`${slug(target.title)}-qr-card.html`, html);
  toast('QR card downloaded as HTML.');
}

function downloadQrSheet() {
  const targets = allQrTargets().filter(t => ['Platform','Hotspot','Province','Material','Dossier'].includes(t.type));
  const cards = targets.map(t => `<article><p>${esc(t.type)}</p><h2>${esc(t.title)}</h2><img src="${qrImageUrl(t.url)}"><small>${esc(t.caption)}</small></article>`).join('');
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Intelligibility Monument QR Sheet</title><style>body{font-family:Arial,sans-serif;margin:24px;background:#fff}h1{font-family:Georgia,serif}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}article{break-inside:avoid;border:1px solid #c79d4f;border-radius:18px;padding:14px;text-align:center}article p{text-transform:uppercase;letter-spacing:.1em;color:#9b6f32;font-size:11px}h2{font-size:16px}img{width:160px;height:160px}small{display:block;color:#555}</style></head><body><h1>The Intelligibility Monument QR Sheet</h1><div class="grid">${cards}</div></body></html>`;
  downloadTextFile('intelligibility-monument-qr-sheet.html', html);
  toast('QR sheet downloaded as HTML.');
}

function encodePin(pin) {
  try { return btoa(`IMON:${String(pin).trim()}`); } catch { return `IMON:${String(pin).trim()}`; }
}

function storedAdminPin() {
  return localStorage.getItem(ADMIN_PIN_KEY) || encodePin(DEFAULT_ADMIN_PIN);
}

function adminUnlocked() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'unlocked';
}

function renderAdminSecurity() {
  const unlocked = adminUnlocked();
  const gate = byId('adminGate');
  const workspace = byId('adminWorkspace');
  const status = byId('adminStatus');
  if (gate) gate.hidden = unlocked;
  if (workspace) workspace.hidden = !unlocked;
  if (status) {
    status.textContent = unlocked ? 'Unlocked' : 'Locked';
    status.classList.toggle('unlocked', unlocked);
  }
}

function initAdminSecurity() {
  renderAdminSecurity();
  byId('adminPinForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = byId('adminPinInput');
    if (encodePin(input.value) === storedAdminPin()) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'unlocked');
      input.value = '';
      renderAdminSecurity();
      toast('Admin unlocked.');
    } else {
      input.value = '';
      toast('Incorrect PIN.');
    }
  });
  byId('adminLock')?.addEventListener('click', () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    renderAdminSecurity();
    toast('Admin locked.');
  });
  byId('pinChangeForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const currentPin = e.currentTarget.elements.currentPin.value;
    const newPin = e.currentTarget.elements.newPin.value.trim();
    if (encodePin(currentPin) !== storedAdminPin()) {
      toast('Current PIN is incorrect.');
      return;
    }
    if (newPin.length < 4) {
      toast('New PIN must contain at least 4 characters.');
      return;
    }
    localStorage.setItem(ADMIN_PIN_KEY, encodePin(newPin));
    e.currentTarget.reset();
    toast('Admin PIN changed.');
  });
}

function initForms() {
  const form = byId('identityForm');
  Object.keys(DEFAULT_IDENTITY).forEach(key => {
    if (form.elements[key]) form.elements[key].value = state.identity[key] || '';
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    state.identity = { ...state.identity, ...Object.fromEntries(fd.entries()) };
    saveState();
    renderAll();
    toast('Monument identity saved.');
  });

  byId('voiceForm').addEventListener('submit', async e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const province = getProvince(fd.get('province'));
    const speakerType = fd.get('speakerType');
    const name = fd.get('name') || `${province.name} ${speakerType}`;
    const id = `${province.id}-${slug(speakerType)}-${slug(name)}-${Date.now().toString(36)}`;
    let audioData = '';
    const file = e.currentTarget.elements.audio.files[0];
    if (file) audioData = await fileToDataUrl(file);
    const voice = {
      id, provinceId: province.id, province: province.name, region: province.region,
      speakerType, role: SPEAKER_TYPES.find(t => t.label === speakerType)?.role || speakerType,
      name, theme: fd.get('theme') || 'Intelligibility and identity',
      language: fd.get('language') || province.languages,
      quote: fd.get('quote') || `A voice from ${province.name} for global English communication.`,
      transcript: fd.get('transcript') || `This voice record represents ${province.name} in the Intelligibility Monument archive.`,
      audioData, externalAudio: '', isDemo: false, createdAt: new Date().toISOString()
    };
    state.voices.unshift(voice);
    activeVoiceId = voice.id;
    state.selectedProvinceId = province.id;
    saveState();
    e.currentTarget.reset();
    renderAll();
    byId('voices').scrollIntoView({ behavior: 'smooth' });
    toast('New voice saved and integrated.');
  });

  byId('importData').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      state = { ...structuredClone(DEFAULT_STATE), ...parsed, identity: { ...DEFAULT_IDENTITY, ...(parsed.identity || {}) }, voices: Array.isArray(parsed.voices) ? parsed.voices : makeDefaultVoices() };
      saveState();
      renderAll();
      toast('Data imported successfully.');
    } catch (error) {
      toast('Import failed. Please use a valid JSON backup.');
    }
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function initEvents() {
  init360Events();
  initAdminSecurity();
  byId('themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem(`${STORAGE_KEY}.theme`, document.body.classList.contains('light') ? 'light' : 'dark');
  });
  if (localStorage.getItem(`${STORAGE_KEY}.theme`) === 'light') document.body.classList.add('light');

  $('.nav-toggle').addEventListener('click', e => {
    const nav = $('.main-nav');
    nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
  $all('.main-nav a').forEach(a => a.addEventListener('click', () => $('.main-nav').classList.remove('open')));
  window.addEventListener('hashchange', handleDeepLink);
  window.addEventListener('scroll', setSectionActive, { passive: true });

  byId('voiceSearch').addEventListener('input', renderVoices);
  byId('provinceFilter').addEventListener('change', e => { state.selectedProvinceId = e.target.value; saveState(); renderVoices(); });
  byId('speakerFilter').addEventListener('change', e => { state.selectedSpeakerType = e.target.value; saveState(); renderVoices(); });
  byId('clearFilters').addEventListener('click', () => { byId('voiceSearch').value = ''; byId('provinceFilter').value = 'all'; byId('speakerFilter').value = 'all'; renderVoices(); });
  byId('speakFeatured').addEventListener('click', () => speak(getVoice(activeVoiceId)?.transcript || state.identity.concept));
  byId('qrTarget').addEventListener('change', e => renderQrCard(e.target.value));
  byId('copyQr').addEventListener('click', async () => { await navigator.clipboard.writeText(byId('qrUrl').value); toast('QR link copied.'); });
  byId('downloadQrHtml').addEventListener('click', downloadCurrentQrCard);
  byId('downloadQrSheet').addEventListener('click', downloadQrSheet);
  byId('printDossier').addEventListener('click', () => window.print());
  byId('exportData').addEventListener('click', exportData);
  byId('exportDataTop').addEventListener('click', exportData);
  byId('resetDefault').addEventListener('click', () => { if (confirm('Reset to the 114-voice default framework?')) { state = structuredClone(DEFAULT_STATE); saveState(); renderAll(); toast('Default framework restored.'); } });
  byId('clearLocal').addEventListener('click', () => { if (confirm('Clear local browser data?')) { localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(ADMIN_PIN_KEY); sessionStorage.removeItem(ADMIN_SESSION_KEY); state = structuredClone(DEFAULT_STATE); renderAll(); toast('Browser data cleared and default PIN restored.'); } });
  $all('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.addEventListener('click', e => {
    if (e.target.matches('[data-open-form="voice"]')) byId('admin').scrollIntoView({ behavior: 'smooth' });
    if (e.target.matches('#exportDataSide')) exportData();
  });
}

function renderAll() {
  renderHome();
  renderHotspots();
  render360Model();
  renderProvinceOptions();
  byId('provinceFilter').value = state.selectedProvinceId || 'all';
  byId('speakerFilter').value = state.selectedSpeakerType || 'all';
  renderVoices();
  renderMap();
  renderComponents();
  renderQrControls();
  renderDossier();
  const form = byId('identityForm');
  if (form) Object.keys(DEFAULT_IDENTITY).forEach(key => { if (form.elements[key]) form.elements[key].value = state.identity[key] || ''; });
  bindDynamicActions(document);
  renderAdminSecurity();
  setSectionActive();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProvinceOptions();
  initForms();
  initEvents();
  renderAll();
  handleDeepLink();
});
