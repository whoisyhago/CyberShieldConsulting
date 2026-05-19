/* ─────────────────────────────────────────────
   CYBERSHIELD · MAIN JS
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  // ── Mobile drawer ──
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const drawerClose = drawer ? drawer.querySelector('.drawer-close') : null;
  const drawerOverlay = drawer ? drawer.querySelector('.drawer-overlay') : null;
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (burger && drawer) {
    burger.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ── Header scroll shadow ──
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ── Active nav link based on current page ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-desktop a, .drawer-list a');
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
