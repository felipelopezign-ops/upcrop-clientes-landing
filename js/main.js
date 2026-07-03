const CLIENTS = [
  {
    id: 'exser',
    name: 'Exser',
    subtitle: 'Exportadora de frutas',
    focus: 'Optimización de procesos de exportación y control de calidad',
    description:
      'Con Exser implementamos soluciones digitales enfocadas en el control de calidad desde el huerto hasta la planta de empaque (packing), además de la digitalización de datos críticos para el comercio exterior. Esto les permite centralizar la información de sus productores y tener una trazabilidad en tiempo real de la fruta destinada a exportación, reduciendo errores administrativos y optimizando los tiempos de despacho.',
    services: ['Control de Calidad', 'Trazabilidad', 'Comercio Exterior'],
    logo: 'assets/logos/exser.png',
    logoAlt: 'Exser',
  },
  {
    id: 'unifrutti',
    name: 'Unifrutti',
    subtitle: 'Productora y exportadora de fruta fresca',
    focus: 'Gestión masiva de operaciones agrícolas y supervisión de procesos',
    description:
      'Para Unifrutti hemos desarrollado módulos a medida para la supervisión e inspección dentro de plantas mediante nuestro rol de Zonal de Proceso, protegiendo el rendimiento del productor ante la exportadora. Asimismo, automatizamos la captura de datos en terreno relativos a la estimación y coordinación de cosecha a gran escala, transformando planillas complejas en respuestas automáticas en minutos a través de UpCrop IA.',
    services: ['Zonal de Proceso', 'Coordinación de Cosecha', 'UpCrop IA'],
    logo: 'assets/logos/unifrutti.png',
    logoAlt: 'Unifrutti',
  },
  {
    id: 'giddings',
    name: 'Giddings',
    subtitle: 'Producción y exportación de berries y cerezas',
    focus: 'Supervisión y control de calidad riguroso en cultivos de alta exigencia',
    description:
      'Trabajamos junto a Giddings en la digitalización de sus controles de calidad en terreno y en la supervisión de labores delicadas como cosechas y raleos. Mediante nuestra plataforma centralizada, el equipo de Giddings puede monitorizar el rendimiento de las cuadrillas y asegurar que la fruta cumpla con los exigentes estándares internacionales antes de ingresar al packing.',
    services: ['Control de Calidad', 'Gestión de Labores', 'Supervisión de Cosecha'],
    logo: 'assets/logos/giddings.png',
    logoAlt: 'Giddings',
  },
  {
    id: 'pi-berries',
    name: 'Pi Berries',
    subtitle: 'Especialistas en producción de frutos rojos',
    focus: 'Trazabilidad integral de punta a punta y mercados de destino',
    description:
      'Para Pi Berries desarrollamos e implementamos una solución integral que digitaliza toda la cadena de trazabilidad, abarcando desde las operaciones en el huerto hasta el proceso de exportación, inclusive llegando al monitoreo en los mercados de destino. Toda la operación crítica corre sobre nuestra plataforma, permitiendo un control logístico y de calidad impecable en tiempo real.',
    services: ['Trazabilidad', 'Control Logístico', 'Exportación'],
    logo: 'assets/logos/pi-berries.png',
    logoAlt: 'Pi Berries',
  },
  {
    id: 'korta',
    name: 'Korta Wines',
    subtitle: 'Producción frutícola de carozo',
    focus: 'Gestión operativa y de packing en cerezas y ciruelas',
    description:
      'Con Korta Wines trabajamos en su división frutícola, estructurando y programando módulos específicos para el control operativo, gestión de labores y packing en sus cultivos de cerezas y ciruelas. La centralización de estos datos clave les permite reaccionar con agilidad durante la temporada alta y optimizar los flujos de trabajo en base a datos objetivos.',
    services: ['Gestión de Labores', 'Gestión de Packing', 'Control Operativo'],
    logo: 'assets/logos/korta-wines.png',
    logoAlt: 'Korta Wines',
  },
  {
    id: 'greenvic',
    name: 'Greenvic',
    subtitle: 'Producción y exportación de fruta orgánica y convencional',
    focus: 'Integración vertical desde el campo hasta el proceso de fruta',
    description:
      'En Greenvic nos enfocamos en conectar digitalmente los procesos de campo con la planta de proceso de fruta. Habilitamos herramientas a medida para que el flujo de información entre la cosecha y la recepción en packing sea continuo, asegurando que los estándares de fruta orgánica y convencional se mantengan controlados y auditables en cada etapa.',
    services: ['Integración Campo-Packing', 'Fruta Orgánica', 'Trazabilidad'],
    logo: 'assets/logos/greenvic.png',
    logoAlt: 'Greenvic',
  },
  {
    id: 'errazuriz',
    name: 'Viña Errázuriz',
    subtitle: 'Empresa vitivinícola',
    focus: 'Control de labores en tiempo real y gestión rigurosa de costos',
    description:
      'Para Viña Errázuriz desarrollamos un sistema avanzado de control de labores en tiempo real con un foco estricto en costos y gastos. Esta funcionalidad permite mapear el rendimiento de los equipos en el campo y asociarlo directamente a los presupuestos operativos, entregando a la gerencia un control financiero milimétrico sobre las tareas diarias.',
    services: ['Control de Labores', 'Costos y Gastos', 'Tiempo Real'],
    logo: 'assets/logos/errazuriz.png',
    logoAlt: 'Viña Errázuriz',
  },
  {
    id: 'zeta',
    name: 'Exportadora Zeta',
    subtitle: 'Exportadora frutícola',
    focus: 'ERP Agrícola integral (Financiero, Técnico, Operativo y Comercial)',
    description:
      'Con Exportadora Zeta programamos un ERP agrícola robusto y completamente a medida que centraliza cuatro pilares críticos: el área financiera, el control técnico operativo en terreno y la gestión comercial de exportación. Es un ecosistema completo donde la administración y el campo operan bajo una misma plataforma, eliminando por completo los silos de información.',
    services: ['ERP Agrícola', 'Gestión Financiera', 'Comercio Exterior'],
    logo: 'assets/logos/exportadora-zeta.png',
    logoAlt: 'Exportadora Zeta',
  },
  {
    id: 'agrofarming',
    name: 'Agrofarming',
    subtitle: 'Operaciones agrícolas',
    focus: 'Inteligencia predictiva en estimación de cosecha y fenología en tiempo real',
    description:
      'Implementamos en Agrofarming un sistema de monitoreo en tiempo real especializado en la estimación de cosecha y el seguimiento de estados fenológicos. Al digitalizar estas variables críticas del ciclo del cultivo, la plataforma modela proyecciones precisas que ayudan al equipo a planificar la logística de materiales y personal con semanas de anticipación.',
    services: ['Estimación de Cosecha', 'Estados Fenológicos', 'Analítica Predictiva'],
    logo: 'assets/logos/agrofarming.png',
    logoAlt: 'Agrofarming',
  },
  {
    id: 'triadge',
    name: 'Triadge',
    subtitle: 'EE.UU.',
    focus: 'Transformación digital punta a punta e integración con el Retail internacional',
    description:
      'Para Triadge en Estados Unidos realizamos una digitalización absoluta de la compañía: programamos desde los módulos operativos del campo y las plantas de proceso, hasta la integración con las cadenas de supermercados que distribuyen sus productos a lo largo de todo EE.UU. Es un ejemplo de cómo UpCrop puede unificar la producción agrícola con los requerimientos del retail norteamericano.',
    services: ['Transformación Digital', 'Integración Retail', 'Operaciones USA'],
    logo: 'assets/logos/triadge.png',
    logoAlt: 'Triadge',
  },
  {
    id: 'bostock',
    name: 'Bostock New Zealand',
    subtitle: 'Producción orgánica en Nueva Zelanda',
    focus: 'Plataforma inteligente de evaluación y analítica de mercados internacionales',
    description:
      'Desarrollamos para Bostock New Zealand una plataforma integral de evaluación de mercados diseñada específicamente para la comercialización de manzana orgánica a nivel global. El sistema centraliza datos comerciales internacionales y tendencias de consumo, permitiendo que las decisiones de distribución y exportación estén respaldadas por analítica predictiva avanzada.',
    services: ['Evaluación de Mercados', 'Analítica Predictiva', 'Comercialización Global'],
    logo: 'assets/logos/bostock.png',
    logoAlt: 'Bostock New Zealand',
  },
];

const ITEM_HEIGHT = 210;
const ITEM_WIDTH_MOBILE = 210;
const VISIBLE_CENTER_RATIO = 0.5;
const SCROLL_DURATION = 55;
const MOBILE_SCROLL_DURATION = 45;
const MOBILE_BP = '(max-width: 900px)';

let activeIndex = 0;
let isTransitioning = false;
let rafId = null;
let isMobile = false;
let userPaused = false;

const logoColumn = document.getElementById('logoColumn');
const logoTrack = document.getElementById('logoTrack');
const logoViewport = document.getElementById('logoViewport');
const logoTouchShield = document.getElementById('logoTouchShield');
const logoPrev = document.getElementById('logoPrev');
const logoNext = document.getElementById('logoNext');
const logoPause = document.getElementById('logoPause');
const logoPauseLabel = document.getElementById('logoPauseLabel');
const contentInner = document.getElementById('contentInner');
const contentBadge = document.getElementById('contentBadge');
const contentTitle = document.getElementById('contentTitle');
const contentSubtitle = document.getElementById('contentSubtitle');
const contentDesc = document.getElementById('contentDesc');
const serviceTags = document.getElementById('serviceTags');
const currentIndexEl = document.getElementById('currentIndex');
const totalCountEl = document.getElementById('totalCount');

const mobileQuery = window.matchMedia(MOBILE_BP);

function isMobileView() {
  return mobileQuery.matches;
}

function buildLogoTrack() {
  const allClients = [...CLIENTS, ...CLIENTS];
  logoTrack.innerHTML = allClients
    .map(
      (client, i) => `
    <div class="logo-item" data-index="${i % CLIENTS.length}" data-orig="${i}">
      <img src="${client.logo}" alt="${client.logoAlt}" class="client-logo" loading="lazy" draggable="false" />
    </div>`
    )
    .join('');

  logoTrack.style.setProperty('--scroll-duration', `${SCROLL_DURATION}s`);
  logoTrack.style.setProperty('--item-height', `${ITEM_HEIGHT}px`);
  logoTrack.style.setProperty('--item-width', `${ITEM_WIDTH_MOBILE}px`);
  logoTrack.classList.add('animate');
  totalCountEl.textContent = String(CLIENTS.length).padStart(2, '0');
}

function applyTrackDimensions() {
  if (isMobileView()) {
    logoTrack.style.setProperty('--item-width', `${ITEM_WIDTH_MOBILE}px`);
    logoTrack.style.setProperty('--scroll-duration', `${MOBILE_SCROLL_DURATION}s`);
  } else {
    logoTrack.style.setProperty('--item-height', `${ITEM_HEIGHT}px`);
    logoTrack.style.setProperty('--scroll-duration', `${SCROLL_DURATION}s`);
  }
}

function updateContent(index, animate = true) {
  if (index === activeIndex && animate) return;
  activeIndex = index;
  const client = CLIENTS[index];

  const applyContent = () => {
    contentBadge.textContent = client.focus;
    contentTitle.textContent = client.name;
    contentSubtitle.textContent = client.subtitle;
    contentDesc.textContent = client.description;
    serviceTags.innerHTML = client.services.map((s) => `<li>${s}</li>`).join('');
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

function setActiveLogoClass(index) {
  logoTrack.querySelectorAll('.logo-item').forEach((item) => {
    item.classList.toggle('active', parseInt(item.dataset.index, 10) === index);
  });
}

function highlightActiveLogo() {
  if (isMobileView() && userPaused) return;

  const mobile = isMobileView();
  const items = logoTrack.querySelectorAll('.logo-item');
  const viewportRect = logoViewport.getBoundingClientRect();

  const viewportCenter = mobile
    ? viewportRect.left + viewportRect.width / 2
    : viewportRect.top + viewportRect.height * VISIBLE_CENTER_RATIO;

  let closestItem = null;
  let closestDist = Infinity;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = mobile
      ? rect.left + rect.width / 2
      : rect.top + rect.height / 2;
    const dist = Math.abs(itemCenter - viewportCenter);

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

function getTrackTranslate() {
  const style = window.getComputedStyle(logoTrack);
  const matrix = style.transform;
  if (matrix === 'none') return { x: 0, y: 0 };
  const values = matrix.match(/matrix.*\((.+)\)/);
  if (!values) return { x: 0, y: 0 };
  const parts = values[1].split(', ').map(parseFloat);
  if (parts.length === 6) return { x: parts[4], y: parts[5] };
  return { x: parts[12] || 0, y: parts[13] || 0 };
}

function getMobileCenterOffset(index) {
  const viewportWidth = logoViewport.clientWidth;
  return -(index * ITEM_WIDTH_MOBILE) + viewportWidth / 2 - ITEM_WIDTH_MOBILE / 2;
}

function freezeMobileTrack() {
  const { x } = getTrackTranslate();
  logoTrack.style.animation = 'none';
  logoTrack.style.transform = `translateX(${x}px)`;
}

function resumeMobileInfiniteScroll() {
  logoTrack.style.transition = '';
  logoTrack.style.animation = '';
  logoTrack.style.transform = '';
  logoTrack.classList.add('animate');
  logoTrack.style.animationPlayState = 'running';
}

function mobileGoTo(index, animateContent = true) {
  freezeMobileTrack();
  logoTrack.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
  logoTrack.style.transform = `translateX(${getMobileCenterOffset(index)}px)`;
  setActiveLogoClass(index);
  updateContent(index, animateContent);
  setTimeout(() => {
    logoTrack.style.transition = '';
  }, 460);
}

function updatePauseButton() {
  logoPause.classList.toggle('is-paused', userPaused);
  logoPause.setAttribute('aria-label', userPaused ? 'Reanudar animación' : 'Pausar animación');
  if (logoPauseLabel) logoPauseLabel.textContent = userPaused ? 'Reproducir' : 'Pausar';
  logoColumn.classList.toggle('user-paused', userPaused);
}

function setPaused(paused) {
  userPaused = paused;
  updatePauseButton();

  if (!isMobileView()) {
    logoTrack.style.animationPlayState = paused ? 'paused' : 'running';
    return;
  }

  if (paused) {
    freezeMobileTrack();
    logoTrack.style.animationPlayState = 'paused';
  } else {
    resumeMobileInfiniteScroll();
  }
}

function goToPrev() {
  if (isMobileView()) {
    setPaused(true);
    mobileGoTo((activeIndex - 1 + CLIENTS.length) % CLIENTS.length);
    return;
  }
  jumpToClient((activeIndex - 1 + CLIENTS.length) % CLIENTS.length);
}

function goToNext() {
  if (isMobileView()) {
    setPaused(true);
    mobileGoTo((activeIndex + 1) % CLIENTS.length);
    return;
  }
  jumpToClient((activeIndex + 1) % CLIENTS.length);
}

function jumpToClient(index) {
  logoTrack.style.animationPlayState = 'paused';

  const offset = index * ITEM_HEIGHT;
  const { y: currentY } = getTrackTranslate();
  const totalHeight = CLIENTS.length * ITEM_HEIGHT;
  const normalizedCurrent = currentY % totalHeight;
  const diff = Math.abs(normalizedCurrent + offset);

  let targetY = -offset;
  if (diff > totalHeight / 2) {
    targetY = currentY - (totalHeight - diff);
  } else {
    targetY = currentY + (-offset - normalizedCurrent);
  }

  logoTrack.style.animation = 'none';
  logoTrack.style.transform = `translateY(${targetY}px)`;
  setActiveLogoClass(index);
  updateContent(index);

  setTimeout(() => {
    logoTrack.style.animation = '';
    logoTrack.style.transform = '';
    logoTrack.style.animationPlayState = userPaused ? 'paused' : 'running';
  }, 50);
}

function initMobileMode() {
  userPaused = true;
  updatePauseButton();
  logoTrack.classList.add('animate');
  freezeMobileTrack();
  mobileGoTo(activeIndex, false);
}

function initDesktopMode() {
  logoTrack.style.transition = '';
  logoTrack.style.animation = '';
  logoTrack.style.transform = '';
  logoTrack.classList.add('animate');
  logoTrack.style.animationPlayState = userPaused ? 'paused' : 'running';
}

function applyViewportMode() {
  const wasMobile = isMobile;
  isMobile = mobileQuery.matches;
  logoColumn.classList.toggle('is-mobile', isMobile);
  applyTrackDimensions();

  if (isMobile) {
    initMobileMode();
  } else if (wasMobile) {
    userPaused = false;
    updatePauseButton();
    initDesktopMode();
  }
}

function blockTouch(e) {
  if (!isMobileView()) return;
  if (e.target.closest('.logo-ctrl')) return;
  e.preventDefault();
  e.stopPropagation();
}

function initClickHandlers() {
  logoTrack.addEventListener('click', (e) => {
    if (isMobileView()) return;
    const item = e.target.closest('.logo-item');
    if (!item) return;
    jumpToClient(parseInt(item.dataset.index, 10));
  });

  logoPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    goToPrev();
  });
  logoNext.addEventListener('click', (e) => {
    e.stopPropagation();
    goToNext();
  });
  logoPause.addEventListener('click', (e) => {
    e.stopPropagation();
    setPaused(!userPaused);
  });

  const touchBlockers = [logoViewport, logoTrack, logoTouchShield, logoColumn];
  touchBlockers.forEach((el) => {
    if (!el) return;
    ['touchstart', 'touchmove', 'touchend'].forEach((evt) => {
      el.addEventListener(evt, blockTouch, { passive: false, capture: true });
    });
  });
}

function init() {
  buildLogoTrack();
  updateContent(0, false);
  setActiveLogoClass(0);
  initClickHandlers();
  applyViewportMode();
  rafId = requestAnimationFrame(trackScroll);
  mobileQuery.addEventListener('change', applyViewportMode);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (isMobileView() && !userPaused) freezeMobileTrack();
    logoTrack.style.animationPlayState = 'paused';
    cancelAnimationFrame(rafId);
    rafId = null;
  } else {
    if (isMobileView()) {
      if (userPaused) freezeMobileTrack();
      else resumeMobileInfiniteScroll();
    } else {
      logoTrack.style.animationPlayState = userPaused ? 'paused' : 'running';
    }
    if (!rafId) rafId = requestAnimationFrame(trackScroll);
  }
});

init();
