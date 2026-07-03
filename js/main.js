const CLIENTS = [
  {
    id: 'korta',
    name: 'Korta Wines',
    sector: 'Vitivinicultura',
    description:
      'Acompañamos a Korta Wines en la digitalización de sus procesos de control de calidad en uva de mesa, centralizando reportes de campo y packing para decisiones más rápidas durante la temporada exportadora.',
    services: ['Control de Calidad', 'Digitalización de Data', 'Gestión de Packing'],
    logoHTML: '<span class="brand-korta">KORTAWINES</span>',
  },
  {
    id: 'torreon',
    name: 'El Torreón',
    sector: 'Exportadora frutícola',
    description:
      'Desplegamos equipos de supervisión de cosecha y coordinación en terreno para optimizar rendimientos y garantizar el cumplimiento de estándares de exportación en sus operaciones de campo.',
    services: ['Supervisión de Cosecha', 'Coordinación de Cosecha', 'Estimación de Cosecha'],
    logoHTML: `
      <div class="brand-torreon">
        <svg class="brand-torreon-icon" viewBox="0 0 36 36" fill="none">
          <path d="M18 4L6 32h24L18 4z" fill="#0A0A0A"/>
          <rect x="14" y="20" width="8" height="12" fill="#fff"/>
        </svg>
        <span class="brand-torreon-text">EL TORREÓN</span>
      </div>`,
  },
  {
    id: 'greenvic',
    name: 'Greenvic',
    sector: 'Productor & exportador',
    description:
      'Implementamos gestión de labores y supervisión experta de podas, raleos y estimaciones de cosecha, respaldadas con datos objetivos para cada intervención en sus huertos.',
    services: ['Gestión de Labores', 'Estimación de Cosecha', 'Control de Calidad'],
    logoHTML: `
      <div class="brand-greenvic">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="6" fill="#E53E3E"/>
          <circle cx="10" cy="16" r="5" fill="#E53E3E"/>
          <circle cx="22" cy="16" r="5" fill="#E53E3E"/>
          <path d="M16 16v14" stroke="#2D8B3F" stroke-width="3"/>
          <path d="M10 22c4 2 8 2 12 0" stroke="#2D8B3F" stroke-width="2" fill="none"/>
        </svg>
        <span class="brand-greenvic-text">greenvic</span>
      </div>`,
  },
  {
    id: 'exser',
    name: 'EXSER',
    sector: 'Exportadora de uva & cítricos',
    description:
      'Brindamos zonal de proceso y control de calidad en plantas de empaque, protegiendo al productor y maximizando rendimientos ante las exigencias de mercados internacionales.',
    services: ['Zonal de Proceso', 'Control de Calidad', 'Gestión de Packing'],
    logoHTML: `
      <div class="brand-exser">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="14" r="8" fill="#E53E3E"/>
          <circle cx="12" cy="20" r="6" fill="#C53030"/>
          <circle cx="24" cy="20" r="6" fill="#C53030"/>
          <path d="M18 22v10" stroke="#3A8F4E" stroke-width="2.5"/>
        </svg>
        <span class="brand-exser-text">EXSER</span>
      </div>`,
  },
  {
    id: 'unifrutti',
    name: 'Unifrutti',
    sector: 'Trading global de fruta',
    description:
      'Coordinamos equipos de cosecha y trazabilidad digital en operaciones de alta demanda, asegurando ritmo, normativas y bienestar del equipo durante toda la campaña.',
    services: ['Coordinación de Cosecha', 'Trazabilidad', 'Digitalización de Data'],
    logoHTML: `
      <div class="brand-unifrutti">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="18" r="12" fill="#E53E3E"/>
          <path d="M16 6c0-2 2-4 4-2" stroke="#2D8B3F" stroke-width="2" fill="none"/>
          <ellipse cx="16" cy="18" rx="8" ry="10" fill="#C53030" opacity="0.5"/>
        </svg>
        <span class="brand-unifrutti-text">unifrutti<br>traders</span>
      </div>`,
  },
];

const ITEM_HEIGHT = 100;
const VISIBLE_CENTER_RATIO = 0.5;
const SCROLL_DURATION = 35;

let activeIndex = 0;
let isTransitioning = false;
let rafId = null;

const logoTrack = document.getElementById('logoTrack');
const logoViewport = document.getElementById('logoViewport');
const contentInner = document.getElementById('contentInner');
const contentBadge = document.getElementById('contentBadge');
const contentTitle = document.getElementById('contentTitle');
const contentDesc = document.getElementById('contentDesc');
const serviceTags = document.getElementById('serviceTags');
const currentIndexEl = document.getElementById('currentIndex');
const totalCountEl = document.getElementById('totalCount');

function buildLogoTrack() {
  const allClients = [...CLIENTS, ...CLIENTS];
  logoTrack.innerHTML = allClients
    .map(
      (client, i) => `
    <div class="logo-item" data-index="${i % CLIENTS.length}" data-orig="${i}">
      ${client.logoHTML}
    </div>`
    )
    .join('');

  logoTrack.style.setProperty('--scroll-duration', `${SCROLL_DURATION}s`);
  logoTrack.classList.add('animate');

  totalCountEl.textContent = String(CLIENTS.length).padStart(2, '0');
}

function updateContent(index, animate = true) {
  if (index === activeIndex && animate) return;
  activeIndex = index;
  const client = CLIENTS[index];

  const applyContent = () => {
    contentBadge.textContent = client.sector;
    contentTitle.textContent = client.name;
    contentDesc.textContent = client.description;
    serviceTags.innerHTML = client.services
      .map((s) => `<li>${s}</li>`)
      .join('');
    currentIndexEl.textContent = String(index + 1).padStart(2, '0');
    contentInner.classList.remove('content-fade');
    isTransitioning = false;
  };

  if (animate) {
    isTransitioning = true;
    contentInner.classList.add('content-fade');
    setTimeout(applyContent, 350);
  } else {
    applyContent();
  }
}

function highlightActiveLogo() {
  const items = logoTrack.querySelectorAll('.logo-item');
  const viewportRect = logoViewport.getBoundingClientRect();
  const centerY = viewportRect.top + viewportRect.height * VISIBLE_CENTER_RATIO;

  let closestItem = null;
  let closestDist = Infinity;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    const dist = Math.abs(itemCenter - centerY);

    if (dist < closestDist) {
      closestDist = dist;
      closestItem = item;
    }

    item.classList.remove('active');
  });

  if (closestItem) {
    closestItem.classList.add('active');
    const index = parseInt(closestItem.dataset.index, 10);
    if (!isTransitioning && index !== activeIndex) {
      updateContent(index);
    }
  }
}

function trackScroll() {
  highlightActiveLogo();
  rafId = requestAnimationFrame(trackScroll);
}

function jumpToClient(index) {
  const trackStyle = getComputedStyle(logoTrack);
  const isPaused = trackStyle.animationPlayState === 'paused';

  logoTrack.style.animationPlayState = 'paused';

  const offset = index * ITEM_HEIGHT;
  const currentTransform = getTrackTranslateY();
  const totalHeight = CLIENTS.length * ITEM_HEIGHT;

  let targetY = -offset;
  const normalizedCurrent = currentTransform % totalHeight;
  const diff = Math.abs(normalizedCurrent + offset);

  if (diff > totalHeight / 2) {
    targetY = currentTransform - (totalHeight - diff);
  } else {
    targetY = currentTransform + (-offset - normalizedCurrent);
  }

  logoTrack.style.animation = 'none';
  logoTrack.style.transform = `translateY(${targetY}px)`;

  updateContent(index);

  setTimeout(() => {
    logoTrack.style.animation = '';
    logoTrack.style.transform = '';
    if (!isPaused) logoTrack.style.animationPlayState = 'running';
  }, 50);
}

function getTrackTranslateY() {
  const style = window.getComputedStyle(logoTrack);
  const matrix = style.transform;
  if (matrix === 'none') return 0;
  const values = matrix.match(/matrix.*\((.+)\)/);
  if (!values) return 0;
  const parts = values[1].split(', ');
  return parseFloat(parts[5] || parts[13] || 0);
}

function initClickHandlers() {
  logoTrack.addEventListener('click', (e) => {
    const item = e.target.closest('.logo-item');
    if (!item) return;
    jumpToClient(parseInt(item.dataset.index, 10));
  });
}

function init() {
  buildLogoTrack();
  updateContent(0, false);
  initClickHandlers();
  rafId = requestAnimationFrame(trackScroll);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    logoTrack.style.animationPlayState = 'paused';
    cancelAnimationFrame(rafId);
  } else {
    logoTrack.style.animationPlayState = 'running';
    rafId = requestAnimationFrame(trackScroll);
  }
});

init();
