// ============================================================
// HASH ROUTER
// ============================================================

const ROUTES = {
    '#/':                   { page: 'main-page',               bg: 'main-page-bg' },
    '#/history':            { page: 'main-page-2',             bg: 'main-page-bg' },
    '#/modern':             { page: 'main-page-3',             bg: 'main-page-bg' },
    '#/battles':            { page: 'battles-intro-page',      bg: 'battles-page-bg' },
    '#/battles/list':       { page: 'battles-buttons-page',    bg: 'battles-page-bg' },
    '#/ottoman/bridge':     { page: 'ottoman-bridge-page',     bg: '' },
    '#/ottoman/karamichos': { page: 'ottoman-karamichos-page', bg: '' },
    '#/ottoman/konakia':    { page: 'ottoman-konakia-page',    bg: '' },
    '#/ottoman/tekes':      { page: 'ottoman-tekes-page',      bg: '' },
    '#/ottoman/old-city':   { page: 'ottoman-old-city-page',   bg: '' },
    '#/ottoman/summary':    { page: 'ottoman-summary-page',    bg: '' }
};

const DEFAULT_ROUTE = '#/';

const OTTOMAN_SEQUENCE = [
    '#/ottoman/bridge',
    '#/ottoman/karamichos',
    '#/ottoman/konakia',
    '#/ottoman/tekes',
    '#/ottoman/old-city',
    '#/ottoman/summary'
];

function router() {
    const hash = location.hash || DEFAULT_ROUTE;
    const route = ROUTES[hash] || ROUTES[DEFAULT_ROUTE];

    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });

    const target = document.querySelector('.' + route.page);
    if (target) {
        target.style.display = 'flex';
        target.querySelectorAll('.hidden-initially').forEach(el => {
            el.classList.remove('hidden-initially');
        });
    }

    document.body.className = route.bg;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target) {
        const h1 = target.querySelector('h1');
        if (h1) {
            h1.setAttribute('tabindex', '-1');
            h1.focus({ preventScroll: true });
        }
    }

    console.log('[router] →', hash, '| page:', route.page);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// ============================================================
// IMAGE MODAL
// ============================================================

function toggleImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (!modal || !modalImg) {
        console.warn('[toggleImage] Modal not found in DOM');
        return;
    }
    modal.style.display = 'block';
    modalImg.src = imgElement.src;
}

// Attach modal close handler (safe — μόνο αν υπάρχει)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function () {
            this.style.display = 'none';
        });
    }
});

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('imageModal');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            return;
        }
    }

    const currentHash = location.hash || DEFAULT_ROUTE;
    const idx = OTTOMAN_SEQUENCE.indexOf(currentHash);

    if (idx !== -1) {
        if (e.key === 'ArrowRight' && idx < OTTOMAN_SEQUENCE.length - 1) {
            location.hash = OTTOMAN_SEQUENCE[idx + 1];
        } else if (e.key === 'ArrowLeft' && idx > 0) {
            location.hash = OTTOMAN_SEQUENCE[idx - 1];
        }
    }
});