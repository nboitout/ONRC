/* NTRO — main.js v2 */

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav    = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Sticky header class
(function () {
  const h = document.querySelector('.header');
  if (!h) return;
  window.addEventListener('scroll', () => h.classList.toggle('header--scrolled', window.scrollY > 20), { passive: true });
})();

// Scroll-to-top
(function () {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// Cookie consent
(function () {
  const banner  = document.getElementById('cookieBanner');
  const accept  = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  if (!banner) return;
  if (localStorage.getItem('ntro_consent')) { banner.classList.add('hidden'); return; }
  const dismiss = (val) => { localStorage.setItem('ntro_consent', val); banner.classList.add('hidden'); };
  accept  && accept.addEventListener('click',  () => dismiss('1'));
  decline && decline.addEventListener('click', () => dismiss('0'));
})();

// Animated counters
(function () {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const run  = (el) => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix   || '';
    const decimals = parseInt(el.dataset.decimals || '0');
    const dur = 1600;
    const t0  = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = (target * ease(p)).toFixed(decimals)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
})();

// News tabs
(function () {
  const tabs   = document.querySelectorAll('[data-tab-target]');
  const panels = document.querySelectorAll('[role="tabpanel"]');
  if (!tabs.length) return;
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.tabTarget);
      if (!target) return;
      tabs.forEach((b)   => { b.classList.remove('news-tab--active'); b.setAttribute('aria-selected', 'false'); });
      panels.forEach((p) => { p.hidden = true; p.classList.remove('news-panel--active'); });
      btn.classList.add('news-tab--active');
      btn.setAttribute('aria-selected', 'true');
      target.hidden = false;
      target.classList.add('news-panel--active');
    });
  });
})();

// Search form
(function () {
  const form = document.getElementById('searchForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q    = form.querySelector('input[type="search"]');
    const type = form.querySelector('select');
    if (!q || !q.value.trim()) { q && q.focus(); return; }
    const url = `https://portal.onrc.ro/search?q=${encodeURIComponent(q.value.trim())}&type=${encodeURIComponent(type ? type.value : '')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
