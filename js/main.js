/**
 * RETRIEVAL — Core Client Runtime & Navigation Engine
 */

// Mobile Navigation Toggle
window.toggleMobileMenu = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const drawer = document.getElementById('mobile-nav-drawer') || document.getElementById('mobile-nav-overlay');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('active') || drawer.classList.contains('open') || drawer.style.display === 'block' || drawer.style.display === 'flex';

  if (!isOpen) {
    drawer.classList.remove('hidden');
    drawer.classList.add('active');
    drawer.style.display = 'block';
    if (iconOpen) iconOpen.classList.add('hidden');
    if (iconClose) iconClose.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    drawer.classList.remove('open');
    drawer.classList.add('hidden');
    drawer.style.display = 'none';
    if (iconOpen) iconOpen.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

window.openMobileNav = window.toggleMobileMenu;
window.closeMobileNav = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const drawer = document.getElementById('mobile-nav-drawer') || document.getElementById('mobile-nav-overlay');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!drawer) return;
  drawer.classList.remove('active');
  drawer.classList.remove('open');
  drawer.classList.add('hidden');
  drawer.style.display = 'none';
  if (iconOpen) iconOpen.classList.remove('hidden');
  if (iconClose) iconClose.classList.add('hidden');
  document.body.style.overflow = '';
};

// FAQ Accordion Toggle
window.toggleFaq = function(button) {
  const item = button.closest('.faq-item') || button.parentElement;
  const answer = item ? item.querySelector('.faq-answer') : button.nextElementSibling;
  if (!item || !answer) return;

  const isOpen = item.classList.contains('active');

  // Close other FAQ items in same parent container for clean accordion flow
  const container = item.closest('.faq-container') || document;
  container.querySelectorAll('.faq-item').forEach(el => {
    if (el !== item) {
      el.classList.remove('active');
      const ans = el.querySelector('.faq-answer');
      if (ans) {
        ans.classList.add('hidden');
        ans.style.display = 'none';
      }
    }
  });

  if (!isOpen) {
    item.classList.add('active');
    answer.classList.remove('hidden');
    answer.style.display = 'block';
  } else {
    item.classList.remove('active');
    answer.classList.add('hidden');
    answer.style.display = 'none';
  }
};

// Dispatch Form to Telegram
window.dispatchToTelegram = function(topicInputId, targetInputId) {
  const topicEl = document.getElementById(topicInputId || 'inq-topic');
  const targetEl = document.getElementById(targetInputId || 'inq-username');
  const topic = topicEl ? topicEl.value.trim() : 'General Case Evaluation';
  const target = targetEl ? targetEl.value.trim() : 'N/A';

  const message = `• Inquiry: ${topic || 'Case Evaluation'}\n• Target Asset/Link: ${target || 'N/A'}\n• Channel: RETRIEVAL Direct Portal`;
  const url = `https://t.me/unban777?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

function initApp() {
  // Clean up any previous ambient containers if present in DOM
  const existingAmbient = document.querySelector('.ambient-light-container');
  if (existingAmbient) existingAmbient.remove();

  initInteractiveSpotlight();
  initHeaderScroll();
  initMobileAccordions();
  initSmoothScroll();
  initResponsiveWatcher();
  initDropdownToggles();
  initScrollReveal();
}

function initInteractiveSpotlight() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let spotlight = document.querySelector('.interactive-spotlight');
  if (!spotlight) {
    spotlight = document.createElement('div');
    spotlight.className = 'interactive-spotlight';
    spotlight.setAttribute('aria-hidden', 'true');
    document.body.prepend(spotlight);
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 3;
  let currX = mouseX;
  let currY = mouseY;
  let isMoving = false;

  const updateSpotlight = () => {
    currX += (mouseX - currX) * 0.09;
    currY += (mouseY - currY) * 0.09;
    spotlight.style.transform = `translate3d(${currX}px, ${currY}px, 0)`;

    if (Math.abs(mouseX - currX) > 0.2 || Math.abs(mouseY - currY) > 0.2) {
      requestAnimationFrame(updateSpotlight);
    } else {
      isMoving = false;
    }
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      spotlight.classList.add('active');
      requestAnimationFrame(updateSpotlight);
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    spotlight.classList.remove('active');
  });
}

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.bento-card, .review-card, .case-study-card, .stat-item, .faq-item, .grid-form-card, section h2, .glass-card, .touch-card')
      .forEach(el => el.classList.add('revealed'));
    return;
  }

  const elements = document.querySelectorAll('.bento-card, .review-card, .case-study-card, .stat-item, .faq-item, .grid-form-card, section h2, .glass-card, .touch-card');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.02,
    rootMargin: '0px 0px 60px 0px'
  });

  elements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    if (el.parentElement && (el.parentElement.classList.contains('stats-metrics-grid') || el.parentElement.classList.contains('grid-capabilities'))) {
      el.style.transitionDelay = `${(index % 4) * 0.05}s`;
    }
    observer.observe(el);
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header') || document.getElementById('main-header') || document.querySelector('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileAccordions() {
  const triggers = document.querySelectorAll('.drawer-accordion-trigger');
  triggers.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const parent = this.closest('.drawer-accordion-group');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });

  // Close drawer on clicking inner sublinks
  const links = document.querySelectorAll('.drawer-sublinks a, .drawer-link-main');
  links.forEach(link => {
    link.addEventListener('click', () => {
      window.closeMobileNav();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMobileNav();
    }
  });
}

function initResponsiveWatcher() {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      window.closeMobileNav();
    }
  });
}

function initDropdownToggles() {
  const wrappers = document.querySelectorAll('.nav-dropdown-wrapper');
  wrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.nav-dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth >= 1024 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
          e.preventDefault();
          wrapper.classList.toggle('touch-active');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown-wrapper')) {
      wrappers.forEach(w => w.classList.remove('touch-active'));
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      try {
        const targetId = href.replace(/^#/, '');
        const target = document.getElementById(targetId) || document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } catch (err) {
        // Fallback to normal navigation
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
