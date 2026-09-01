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

window.openMobileNav = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const drawer = document.getElementById('mobile-nav-drawer') || document.getElementById('mobile-nav-overlay');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!drawer) return;
  drawer.classList.remove('hidden');
  drawer.classList.add('active');
  drawer.style.display = 'block';
  if (iconOpen) iconOpen.classList.add('hidden');
  if (iconClose) iconClose.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};
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
  // Clean up any previous ambient/spotlight containers if present in DOM
  const existingAmbient = document.querySelector('.ambient-light-container, .interactive-spotlight');
  if (existingAmbient) existingAmbient.remove();

  initHeaderScroll();
  initMobileAccordions();
  initSmoothScroll();
  initResponsiveWatcher();
  initDropdownToggles();
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

  // Close drawer on clicking inner sublinks or CTA links
  const links = document.querySelectorAll('.drawer-sublinks a, .drawer-link-main, .drawer-inner a');
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
          wrappers.forEach(w => {
            if (w !== wrapper) w.classList.remove('touch-active');
          });
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
      if (!href || href === '#' || href === '#!') return;
      try {
        const targetId = href.replace(/^#/, '');
        const target = document.getElementById(targetId) || document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset || 0) - headerOffset;
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
