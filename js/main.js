/**
 * RETRIEVAL STUDIO — iPhone Safari Optimized Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initFullscreenMobileNav();
  initSmoothScroll();
});

// 1. Header scroll solidify on iPhone Safari
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 15) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. Fullscreen Native iPhone Mobile Navigation Overlay
function initFullscreenMobileNav() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!openBtn || !overlay) return;

  const openNav = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  const closeNav = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };

  openBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Close when any link inside overlay is clicked
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  // Handle ESC key for accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeNav();
    }
  });
}

// 3. Native Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
