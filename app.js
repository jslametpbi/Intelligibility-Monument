const STORAGE_KEY = 'intelligibilityMonumentApp.v1';

const REGIONS = [
  { id: 'sumatra', name: 'Sumatra', x: 22, y: 48 },
  { id: 'java', name: 'Java', x: 39, y: 69 },
  { id: 'kalimantan', name: 'Kalimantan', x: 50, y: 45 },
  { id: 'sulawesi', name: 'Sulawesi', x: 66, y: 48 },
  { id: 'bali-nusa', name: 'Bali & Nusa Tenggara', x: 55, y: 75 },
  { id: 'maluku', name: 'Maluku', x: 78, y: 58 },
  { id: 'papua', name: 'Papua', x: 89, y: 59 }
];

const HOTSPOTS = {
  wings: {
    title: 'Garuda-Inspired Wings',
    description: 'The wings symbolize dignity, ascent, and Indonesian cultural presence in global academic communication. They connect heritage with the future of multilingual academic voices.',
    tags: ['Bronze', 'Heritage', 'Identity'],
    linkedComponent: 'garuda-wings'
  },
  spine: {
    title: 'Luminous Sound-Wave Spine',
    description: 'A vertical glass and LED sound-wave form visualizes intelligibility, resonance, and the movement of Indonesian voices toward international dialogue.',
    tags: ['Glass', 'LED', 'Sound'],
    linkedComponent: 'sound-spine'
  },
  book: {
    title: 'Open-Book Scholarly Base',
    description: 'The open book represents research, teaching, publication, and the lecturer’s contribution to knowledge production.',
    tags: ['Scholarship', 'Education', 'Research'],
    linkedComponent: 'book-base'
  },
  platform: {
    title: 'Archipelago Platform',
    description: 'The platform transforms the Indonesian archipelago into a public learning surface, showing that local voices can carry global meaning.',
    tags: ['Indonesia', 'Public Space', 'Map'],
    linkedComponent: 'archipelago-platform'
  },
  qr: {
    title: 'Interactive QR Audio Stations',
    description: 'QR stations connect the physical monument to the digital archive, allowing visitors to hear voices, read transcripts, and access educational resources.',
    tags: ['QR', 'Audio', 'Digital Archive'],
    linkedComponent: 'qr-station'
  }
};

const DEFAULT_STATE = {
  monument: {
    title: 'The Intelligibility Monument',
    subtitle: 'Indonesian Voices in Global English',
    location: 'University Plaza, Indonesia',
    height: '6–8 meters',
    concept: 'A monumental public artwork celebrating Indonesian voices, intelligibility, and global academic communication through sculpture, sound, and interactive learning.',
    owner: 'Dr. Joko Slamet, Cipta Wacana University, Malang, Indonesia'
  },
  components: [
    {
      id: 'garuda-wings', icon: '🪽', name: 'Garuda-Inspired Wings', material: 'Brushed bronze or bronze-finished stainless steel',
      meaning: 'Cultural dignity, ascent, scholarly courage, and Indonesian presence in global knowledge exchange.',
      digitalFunction: 'Hotspot explanation, gallery anchor, and heritage statement.'
    },
    {
      id: 'sound-spine', icon: '〰', name: 'Luminous Sound-Wave Spine', material: 'Translucent glass or acrylic with internal LED strips',
      meaning: 'Intelligibility, resonance, and the non-native English voice as a legitimate global academic medium.',
      digitalFunction: 'Links to audio player, voice archive, and night illumination gallery.'
    },
    {
      id: 'book-base', icon: '📖', name: 'Open-Book Scholarly Base', material: 'Bronze relief over reinforced plinth',
      meaning: 'Teaching, research, publication, and the lecturer’s contribution to knowledge.',
      digitalFunction: 'Links to concept paper, academic rationale, and research references.'
    },
    {
      id: 'archipelago-platform', icon: '🗺', name: 'Archipelago Platform', material: 'Dark granite or engineered stone with bronze island inlays',
      meaning: 'The Indonesian archipelago as a multilingual, multicultural source of global voices.',
      digitalFunction: 'Synchronizes with the interactive voice map and regional archive.'
    },
    {
      id: 'qr-station', icon: '▦', name: 'Interactive QR Audio Stations', material: 'Weather-resistant metal, acrylic screen, QR plaque, and optional NFC tag',
      meaning: 'Public access, participation, and open educational interaction.',
      digitalFunction: 'Generates linked QR cards for voices, sections, and archive pages.'
    },
    {
      id: 'paving', icon: '⌁', name: 'Intelligibility Pattern Paving', material: 'Engraved stone with waveform and phonetic motifs',
      meaning: 'Speech patterns, intelligibility, rhythm, and the diversity of English accents.',
      digitalFunction: 'Connects the physical ground pattern with educational explanations in the app.'
    }
  ],
  voices: [
    {
      id: crypto.randomUUID(), name: 'Voice ST-01', region: 'java', province: 'East Java', language: 'Javanese, Indonesian, English', role: 'Undergraduate student', theme: 'Confidence',
      quote: 'My accent is part of my identity. What matters is whether my idea can be understood.',
      transcript: 'This voice represents Indonesian EFL learners who negotiate confidence, intelligibility, and academic identity when speaking English in global contexts.',
      audioData: ''
    },
    {
      id: crypto.randomUUID(), name: 'Voice LT-02', region: 'sumatra', province: 'West Sumatra', language: 'Minangkabau, Indonesian, English', role: 'Lecturer voice', theme: 'Academic communication',
      quote: 'Global English should open access, not erase local voices.',
      transcript: 'This entry emphasizes the role of lecturers in validating multilingual English and promoting intelligibility-oriented academic communication.',
      audioData: ''
    },
    {
      id: crypto.randomUUID(), name: 'Voice ST-03', region: 'sulawesi', province: 'South Sulawesi', language: 'Bugis, Indonesian, English', role: 'Undergraduate student', theme: 'Intelligibility',
      quote: 'When others understand my message, I feel that my English is meaningful.',
      transcript: 'This voice highlights the principle of intelligibility as a practical and ethical goal for English language education.',
      audioData: ''
    }
  ],
  timeline: [
    { phase: 'Phase 1', title: 'Concept & Dossier', text: 'Finalize philosophy, visual identity, curatorial statement, site plan, and academic justification.' },
    { phase: 'Phase 2', title: 'Prototype & Digital Twin', text: 'Build a scale model, online visual system, voice archive, QR station workflow, and gallery documentation.' },
    { phase: 'Phase 3', title: 'Fabrication & Installation', text: 'Coordinate engineering, materials, lighting, safety, plaque text, and campus/public installation.' },
    { phase: 'Phase 4', title: 'International Dissemination', text: 'Submit documentation to international exhibitions, publish an article, and secure media/curator review.' }
  ]
};

let state = loadState();
let selectedRegion = 'all';
let currentVoiceId = state.voices[0]?.id || null;

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(stored);
    return { ...structuredClone(DEFAULT_STATE), ...parsed };
  } catch (error) {
    console.warn('Using default state because saved data could not be loaded.', error);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(selector, parent = document) {
  return parent.querySelector(selector);
}

function $all(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function escapeHtml(text = '') {
  return String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function regionName(id) {
  return REGIONS.find(region => region.id === id)?.name || 'Indonesia';
}

function getFilteredVoices() {
  const query = $('#voiceSearch')?.value?.trim().toLowerCase() || '';
  return state.voices.filter(voice => {
    const matchesRegion = selectedRegion === 'all' || voice.region === selectedRegion;
    const haystack = `${voice.name} ${voice.region} ${voice.province} ${voice.language} ${voice.role} ${voice.theme} ${voice.quote} ${voice.transcript}`.toLowerCase();
    return matchesRegion && (!query || haystack.includes(query));
  });
}

function initNavigation() {
  const links = $all('.main-nav a, .hero-actions a');
  const sections = $all('.section[id]');

  function activateFromHash() {
    const id = location.hash?.replace('#', '') || 'home';
    sections.forEach(section => section.classList.toggle('active-section', section.id === id));
    $all('.main-nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  }

  window.addEventListener('hashchange', activateFromHash);
  links.forEach(link => link.addEventListener('click', () => setTimeout(activateFromHash, 0)));
  activateFromHash();

  $('.nav-toggle').addEventListener('click', (event) => {
    const nav = $('.main-nav');
    nav.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  $('#themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('intelligibilityMonumentTheme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  if (localStorage.getItem('intelligibilityMonumentTheme') === 'light') {
    document.body.classList.add('light-mode');
  }
}

function renderStats() {
  const regionCount = new Set(state.voices.map(voice => voice.region)).size;
  const languageCount = new Set(state.voices.flatMap(voice => (voice.language || '').split(',').map(item => item.trim()).filter(Boolean))).size;
  $('#homeStats').innerHTML = `
    <div class="stat"><strong>${state.voices.length}</strong><span>Recorded voices</span></div>
    <div class="stat"><strong>${regionCount}</strong><span>Regions represented</span></div>
    <div class="stat"><strong>${languageCount}</strong><span>Language backgrounds</span></div>
  `;
  $('#homeConcept').textContent = state.monument.concept;
}

function renderHotspotPanel(key = 'wings') {
  const item = HOTSPOTS[key];
  $('#hotspotPanel').innerHTML = `
    <p class="eyebrow">Selected element</p>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.description)}</p>
    <div class="mini-tags">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    <p class="helper">Connected component: ${escapeHtml(state.components.find(component => component.id === item.linkedComponent)?.name || item.title)}</p>
  `;
}

function initMonument() {
  $all('.hotspot').forEach(button => {
    button.addEventListener('click', () => renderHotspotPanel(button.dataset.hotspot));
  });
  $('#rotateRange').addEventListener('input', (event) => {
    $('#cssMonument').style.transform = `rotateY(${event.target.value}deg)`;
  });
  renderHotspotPanel();
}

function populateRegionControls() {
  const select = $('#regionFilter');
  select.innerHTML = '<option value="all">All regions</option>' + REGIONS.map(region => `<option value="${region.id}">${region.name}</option>`).join('');
  const formRegion = $('#voiceForm select[name="region"]');
  formRegion.innerHTML = REGIONS.map(region => `<option value="${region.id}">${region.name}</option>`).join('');
}

function renderMap() {
  const counts = Object.fromEntries(REGIONS.map(region => [region.id, state.voices.filter(voice => voice.region === region.id).length]));
  $('#indonesiaMap').innerHTML = `
    <svg viewBox="0 0 100 100" role="img" aria-label="Stylized map of Indonesia">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="1.2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M8 52 C18 40, 26 43, 34 58 S48 69, 61 67 S83 53, 96 62" fill="none" stroke="rgba(200,162,105,.38)" stroke-width="1.2" stroke-dasharray="2 3" />
      <path d="M15 43 C25 28, 44 25, 59 35 S73 55, 91 45" fill="none" stroke="rgba(255,255,255,.08)" stroke-width=".8" />
      ${REGIONS.map(region => `
        <g class="map-region" data-region="${region.id}">
          <circle class="map-node" cx="${region.x}" cy="${region.y}" r="${counts[region.id] ? 8 : 5}" fill="${selectedRegion === region.id ? 'var(--gold-2)' : 'var(--gold)'}" opacity="${counts[region.id] ? 0.95 : 0.38}" filter="url(#glow)"></circle>
          <text x="${region.x}" y="${region.y + 14}" text-anchor="middle" fill="var(--text)" font-size="3.3">${region.name}</text>
          <text x="${region.x}" y="${region.y - 10}" text-anchor="middle" fill="var(--gold-2)" font-size="4">${counts[region.id] || 0}</text>
        </g>
      `).join('')}
    </svg>
  `;
  $all('.map-region').forEach(node => node.addEventListener('click', () => {
    selectedRegion = node.dataset.region;
    $('#regionFilter').value = selectedRegion;
    renderVoices();
  }));
}

function renderRegionSummary(filtered) {
  const total = filtered.length;
  const label = selectedRegion === 'all' ? 'all Indonesian regions' : regionName(selectedRegion);
  $('#regionSummary').innerHTML = `<strong>${total}</strong> voice record${total === 1 ? '' : 's'} shown for <strong>${escapeHtml(label)}</strong>. The same records are used by the voice archive, QR generator, and dossier.`;
}

function renderFeaturedVoice() {
  const voice = state.voices.find(item => item.id === currentVoiceId) || state.voices[0];
  if (!voice) {
    $('#featuredVoice').innerHTML = '<h3>No voice yet</h3><p>Add the first voice record to activate the audio archive.</p>';
    return;
  }
  currentVoiceId = voice.id;
  $('#featuredVoice').innerHTML = `
    <p class="eyebrow">Featured voice</p>
    <h3>${escapeHtml(voice.name)}</h3>
    <p>“${escapeHtml(voice.quote)}”</p>
    <div class="voice-meta">
      <span>${escapeHtml(regionName(voice.region))}</span>
      <span>${escapeHtml(voice.province || 'Province not set')}</span>
      <span>${escapeHtml(voice.theme || 'Voice archive')}</span>
    </div>
    <div class="voice-actions" style="margin-top:12px">
      ${voice.audioData ? `<audio controls src="${voice.audioData}"></audio>` : `<button type="button" data-speak="${voice.id}">Read with browser voice</button>`}
      <button type="button" data-qrvoice="${voice.id}">Generate QR</button>
    </div>
  `;
  const speakBtn = $('#featuredVoice [data-speak]');
  if (speakBtn) speakBtn.addEventListener('click', () => speakVoice(voice.id));
  const qrBtn = $('#featuredVoice [data-qrvoice]');
  if (qrBtn) qrBtn.addEventListener('click', () => {
    location.hash = '#archive';
    $('#qrTarget').value = `voice:${voice.id}`;
    renderQr();
  });
}

function renderVoices() {
  renderMap();
  const filtered = getFilteredVoices();
  renderRegionSummary(filtered);
  renderFeaturedVoice();
  $('#voiceList').innerHTML = filtered.map(voice => `
    <article class="voice-card">
      <h4>${escapeHtml(voice.name)}</h4>
      <div class="voice-meta">
        <span>${escapeHtml(regionName(voice.region))}</span>
        <span>${escapeHtml(voice.province || 'Province not set')}</span>
        <span>${escapeHtml(voice.language || 'Language background')}</span>
        <span>${escapeHtml(voice.role || 'Participant')}</span>
      </div>
      <p>“${escapeHtml(voice.quote)}”</p>
      <div class="voice-actions">
        <button type="button" data-feature="${voice.id}">Feature</button>
        <button type="button" data-speak="${voice.id}">Listen</button>
        <button type="button" data-qrvoice="${voice.id}">QR</button>
        <button type="button" data-delete="${voice.id}">Delete</button>
      </div>
    </article>
  `).join('') || '<p class="helper">No voices match this filter.</p>';

  $all('[data-feature]').forEach(btn => btn.addEventListener('click', () => { currentVoiceId = btn.dataset.feature; renderFeaturedVoice(); }));
  $all('[data-speak]').forEach(btn => btn.addEventListener('click', () => speakVoice(btn.dataset.speak)));
  $all('[data-qrvoice]').forEach(btn => btn.addEventListener('click', () => { location.hash = '#archive'; $('#qrTarget').value = `voice:${btn.dataset.qrvoice}`; renderQr(); }));
  $all('[data-delete]').forEach(btn => btn.addEventListener('click', () => deleteVoice(btn.dataset.delete)));
}

function speakVoice(id) {
  const voice = state.voices.find(item => item.id === id);
  if (!voice || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${voice.quote}. ${voice.transcript || ''}`);
  utterance.lang = 'en-US';
  utterance.rate = 0.92;
  speechSynthesis.speak(utterance);
}

function deleteVoice(id) {
  const voice = state.voices.find(item => item.id === id);
  if (!voice) return;
  if (!confirm(`Delete ${voice.name}?`)) return;
  state.voices = state.voices.filter(item => item.id !== id);
  if (currentVoiceId === id) currentVoiceId = state.voices[0]?.id || null;
  saveState();
  renderAll();
}

function initVoiceForm() {
  const dialog = $('#voiceDialog');
  $('#openVoiceForm').addEventListener('click', () => dialog.showModal());
  $('#closeVoiceForm').addEventListener('click', () => dialog.close());
  $('#cancelVoice').addEventListener('click', () => dialog.close());

  $('#voiceForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const audioFile = formData.get('audio');
    let audioData = '';
    if (audioFile && audioFile.size) {
      audioData = await fileToDataUrl(audioFile);
    }
    const voice = {
      id: crypto.randomUUID(),
      name: formData.get('name'),
      region: formData.get('region'),
      province: formData.get('province'),
      language: formData.get('language'),
      role: formData.get('role'),
      theme: formData.get('theme'),
      quote: formData.get('quote'),
      transcript: formData.get('transcript'),
      audioData
    };
    state.voices.unshift(voice);
    currentVoiceId = voice.id;
    saveState();
    form.reset();
    dialog.close();
    renderAll();
    location.hash = '#voices';
  });

  $('#regionFilter').addEventListener('change', (event) => {
    selectedRegion = event.target.value;
    renderVoices();
  });
  $('#voiceSearch').addEventListener('input', renderVoices);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderComponents() {
  $('#componentGrid').innerHTML = state.components.map(component => `
    <article class="component-card card" id="component-${component.id}">
      <div class="component-icon">${component.icon}</div>
      <h3>${escapeHtml(component.name)}</h3>
      <p><strong>Material:</strong> ${escapeHtml(component.material)}</p>
      <p><strong>Meaning:</strong> ${escapeHtml(component.meaning)}</p>
      <p><strong>Digital function:</strong> ${escapeHtml(component.digitalFunction)}</p>
    </article>
  `).join('');
}

function generateDossierText() {
  const regionNames = [...new Set(state.voices.map(voice => regionName(voice.region)))].join(', ') || 'Indonesia';
  return `# ${state.monument.title}\n${state.monument.subtitle}\n\nOwner / proposer: ${state.monument.owner}\nLocation: ${state.monument.location}\nSuggested height: ${state.monument.height}\n\nConcept Statement\n${state.monument.concept}\n\nCore Components\n${state.components.map((c, i) => `${i + 1}. ${c.name}: ${c.meaning} Material: ${c.material}.`).join('\n')}\n\nVoice Archive\nThe digital archive currently contains ${state.voices.length} voice record(s) representing ${regionNames}. The archive supports public listening, transcripts, QR station access, and educational use.\n\nInternational Recognition Strategy\n1. Prepare a bilingual curatorial statement and visual catalogue.\n2. Document the physical work with professional photos, video, and installation notes.\n3. Register copyright or HKI for the concept, visual identity, catalogue, and digital archive.\n4. Submit the project to international public art, digital humanities, education technology, or university museum exhibitions.\n5. Publish a scholarly article explaining the work as research-based public art in ELF, intelligibility, and language education.\n6. Collect external media coverage, curator review, public responses, and institutional endorsement.\n\nImplementation Timeline\n${state.timeline.map(t => `- ${t.phase}: ${t.title}. ${t.text}`).join('\n')}`;
}

function renderDossier() {
  const voiceItems = state.voices.slice(0, 5).map(voice => `<li><strong>${escapeHtml(voice.name)}</strong>, ${escapeHtml(regionName(voice.region))}: “${escapeHtml(voice.quote)}”</li>`).join('');
  $('#dossier').innerHTML = `
    <h3>${escapeHtml(state.monument.title)}</h3>
    <p><strong>${escapeHtml(state.monument.subtitle)}</strong></p>
    <p>${escapeHtml(state.monument.concept)}</p>
    <h4>Technical Identity</h4>
    <ul>
      <li>Location: ${escapeHtml(state.monument.location)}</li>
      <li>Suggested height: ${escapeHtml(state.monument.height)}</li>
      <li>Core materials: bronze, glass/acrylic, granite/stone, LED, QR/NFC interface.</li>
      <li>Integrated app modules: monument visual, voice map, archive, QR station, materials, dossier, and admin studio.</li>
    </ul>
    <h4>Voice Archive Sample</h4>
    <ul>${voiceItems || '<li>No voice records yet.</li>'}</ul>
    <h4>Recognition Evidence to Prepare</h4>
    <ul>
      <li>Curator or expert assessment letter.</li>
      <li>Photos, installation video, concept board, and digital twin screenshots.</li>
      <li>Official invitation, exhibition catalogue, or international showcase record.</li>
      <li>Media coverage, public discussion evidence, and visitor analytics.</li>
      <li>HKI/copyright certificate for design, catalogue, video, and digital archive.</li>
    </ul>
  `;
}

function populateQrTargets() {
  const voiceOptions = state.voices.map(voice => `<option value="voice:${voice.id}">Voice: ${escapeHtml(voice.name)} (${escapeHtml(regionName(voice.region))})</option>`).join('');
  $('#qrTarget').innerHTML = `
    <option value="section:home">Home / Main Concept</option>
    <option value="section:monument">Monument Visual</option>
    <option value="section:voices">Voice Map</option>
    <option value="section:materials">Materials & Structure</option>
    <option value="section:archive">Digital Archive</option>
    ${voiceOptions}
  `;
}

function getTargetUrl() {
  const value = $('#qrTarget').value || 'section:home';
  const base = location.href.split('#')[0];
  if (value.startsWith('section:')) return `${base}#${value.split(':')[1]}`;
  const id = value.split(':')[1];
  return `${base}#voices?voice=${encodeURIComponent(id)}`;
}

function renderQr() {
  const url = getTargetUrl();
  $('#qrUrl').value = url;
  const img = $('#qrImg');
  const canvas = $('#qrFallback');
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(url)}`;
  drawFallbackQr(canvas, url);
  img.onerror = () => {
    img.style.display = 'none';
    canvas.style.display = 'block';
  };
  img.onload = () => {
    img.style.display = 'block';
    canvas.style.display = 'none';
  };
}

function drawFallbackQr(canvas, text) {
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  ctx.fillStyle = '#f8f2e8';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#06121b';
  function finder(x, y) {
    ctx.fillRect(x, y, 44, 44);
    ctx.fillStyle = '#f8f2e8'; ctx.fillRect(x + 8, y + 8, 28, 28);
    ctx.fillStyle = '#06121b'; ctx.fillRect(x + 16, y + 16, 12, 12);
  }
  finder(16, 16); finder(size - 60, 16); finder(16, size - 60);
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  const cell = 8;
  for (let y = 8; y < 26; y++) {
    for (let x = 8; x < 26; x++) {
      const inFinder = (x < 8 && y < 8) || (x > 20 && y < 8) || (x < 8 && y > 20);
      if (inFinder) continue;
      const value = Math.sin((x * 31 + y * 17 + hash) * 12.9898) * 43758.5453;
      if (value - Math.floor(value) > .56) ctx.fillRect(x * cell, y * cell, cell - 1, cell - 1);
    }
  }
}

function initQr() {
  $('#qrTarget').addEventListener('change', renderQr);
  $('#downloadQrCard').addEventListener('click', () => {
    const targetText = $('#qrTarget').selectedOptions[0]?.textContent || 'Monument QR';
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 540;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#06121b'; ctx.fillRect(0,0,900,540);
    ctx.fillStyle = '#c8a269'; ctx.fillRect(36,36,828,468);
    ctx.fillStyle = '#081c28'; ctx.fillRect(48,48,804,444);
    ctx.fillStyle = '#f4ead9'; ctx.font = '36px Georgia'; ctx.fillText(state.monument.title, 86, 112);
    ctx.fillStyle = '#c8a269'; ctx.font = '22px sans-serif'; ctx.fillText(targetText, 86, 154);
    ctx.fillStyle = '#c8bba6'; ctx.font = '20px sans-serif'; ctx.fillText('Scan to access the digital archive and listen to Indonesian voices.', 86, 198);
    const qrCanvas = $('#qrFallback');
    ctx.drawImage(qrCanvas, 86, 238, 220, 220);
    ctx.fillStyle = '#f4ead9'; ctx.font = '20px monospace'; wrapText(ctx, $('#qrUrl').value, 342, 268, 460, 28);
    const link = document.createElement('a');
    link.download = 'intelligibility-monument-qr-card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split('');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n];
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n];
      y += lineHeight;
    } else line = testLine;
  }
  ctx.fillText(line, x, y);
}

function renderTimeline() {
  $('#timelineGrid').innerHTML = state.timeline.map(item => `
    <article class="timeline-item card">
      <strong>${escapeHtml(item.phase)}</strong>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join('');
  $('#visitLocationTitle').textContent = state.monument.location;
}

function initArchiveActions() {
  $('#printDossier').addEventListener('click', () => window.print());
  $('#exportJson').addEventListener('click', exportData);
  $('#copyDossier').addEventListener('click', async () => {
    await navigator.clipboard.writeText(generateDossierText());
    alert('Dossier text copied.');
  });
  $('#importJson').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      state = JSON.parse(await file.text());
      saveState();
      renderAll();
      alert('Data imported successfully.');
    } catch (error) {
      alert('Import failed. Please use a valid exported JSON file.');
    }
  });
  $('#resetData').addEventListener('click', () => {
    if (!confirm('Reset all saved data to the demo version?')) return;
    state = structuredClone(DEFAULT_STATE);
    saveState();
    renderAll();
  });
  $('#generatePressRelease').addEventListener('click', renderPressRelease);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'intelligibility-monument-data.json';
  link.click();
  URL.revokeObjectURL(url);
}

function renderPressRelease() {
  const release = $('#pressRelease');
  release.classList.remove('hidden');
  release.innerHTML = `
    <h3>Press Release Draft</h3>
    <p><strong>${escapeHtml(state.monument.title)}</strong>, subtitled <strong>${escapeHtml(state.monument.subtitle)}</strong>, is proposed as a research-based monumental public artwork that celebrates Indonesian voices, intelligibility, and global academic communication.</p>
    <p>The monument integrates Garuda-inspired wings, a luminous sound-wave spine, an open-book scholarly base, an archipelago platform, and QR audio stations connected to a digital archive of Indonesian English voices.</p>
    <p>Designed for ${escapeHtml(state.monument.location)}, the project functions as public art, educational infrastructure, cultural documentation, and an international dissemination platform for Indonesian scholarship in English language education.</p>
  `;
}

function initAdmin() {
  const form = $('#conceptForm');
  form.title.value = state.monument.title;
  form.subtitle.value = state.monument.subtitle;
  form.location.value = state.monument.location;
  form.height.value = state.monument.height;
  form.concept.value = state.monument.concept;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    state.monument.title = data.get('title');
    state.monument.subtitle = data.get('subtitle');
    state.monument.location = data.get('location');
    state.monument.height = data.get('height');
    state.monument.concept = data.get('concept');
    saveState();
    renderAll();
    alert('Monument identity saved and integrated into all sections.');
  });
}

function renderAdminValues() {
  const form = $('#conceptForm');
  form.title.value = state.monument.title;
  form.subtitle.value = state.monument.subtitle;
  form.location.value = state.monument.location;
  form.height.value = state.monument.height;
  form.concept.value = state.monument.concept;
}

function renderAll() {
  renderStats();
  renderVoices();
  renderComponents();
  renderDossier();
  populateQrTargets();
  renderQr();
  renderTimeline();
  renderAdminValues();
  document.title = state.monument.title;
}

function init() {
  initNavigation();
  populateRegionControls();
  initMonument();
  initVoiceForm();
  initQr();
  initArchiveActions();
  initAdmin();
  renderAll();
}

init();
