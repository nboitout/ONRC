/* NTRO – main.js */

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
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
  }
})();

// Sticky header shadow
(function () {
  const header = document.querySelector('.header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Scroll-to-top button
(function () {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// Cookie banner
(function () {
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  if (!banner) return;
  if (localStorage.getItem('ntro_cookies')) {
    banner.classList.add('hidden');
    return;
  }
  if (accept) accept.addEventListener('click', () => {
    localStorage.setItem('ntro_cookies', '1');
    banner.classList.add('hidden');
  });
  if (decline) decline.addEventListener('click', () => {
    localStorage.setItem('ntro_cookies', '0');
    banner.classList.add('hidden');
  });
})();

// Animated counters
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = target * easeOut(progress);
      el.textContent = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach((el) => observer.observe(el));
})();

// Tab switching (online services)
(function () {
  document.querySelectorAll('[data-tab-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.dataset.tabTarget);
      if (!panel) return;
      const group = btn.closest('[data-tab-group]');
      if (group) {
        group.querySelectorAll('[data-tab-target]').forEach((b) => b.classList.remove('tab--active'));
        group.querySelectorAll('[data-tab-panel]').forEach((p) => p.hidden = true);
      }
      btn.classList.add('tab--active');
      panel.hidden = false;
    });
  });
})();

// Search form handling
(function () {
  const form = document.getElementById('searchForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="search"], input[type="text"]');
    const select = form.querySelector('select');
    const query = input ? input.value.trim() : '';
    const category = select ? select.value : '';
    if (!query) { input && input.focus(); return; }
    const url = `https://portal.onrc.ro/search?q=${encodeURIComponent(query)}&cat=${encodeURIComponent(category)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();

// Accessibility: keyboard navigation for dropdown menus
(function () {
  document.querySelectorAll('.nav__item').forEach((item) => {
    const link = item.querySelector('.nav__link');
    const dropdown = item.querySelector('.nav__dropdown');
    if (!link || !dropdown) return;

    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const open = dropdown.style.visibility !== 'visible';
        dropdown.style.visibility = open ? 'visible' : 'hidden';
        dropdown.style.opacity  = open ? '1' : '0';
        dropdown.style.transform = open ? 'translateY(0)' : 'translateY(-8px)';
      }
    });
  });
})();
