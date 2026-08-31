/**
 * RETRIEVAL STUDIO — Fail-Proof Mobile Navigation, FAQ Accordion & Atmospheric Engine
 */

// Global Navigation Controller (Works directly via inline onclick and touch listeners)
window.openMobileNav = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeMobileNav = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

window.toggleMobileNav = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) return;
  if (overlay.classList.contains('open')) {
    window.closeMobileNav(e);
  } else {
    window.openMobileNav(e);
  }
};

// Global FAQ Accordion Toggle
window.toggleFaq = function(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  const isOpen = !answer.classList.contains('hidden');

  // Close all other FAQs in the same container for clean accordion behavior
  document.querySelectorAll('.faq-answer').forEach(el => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('.faq-icon').forEach(el => {
    el.style.transform = 'rotate(0deg)';
  });

  if (!isOpen) {
    answer.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(45deg)';
  }
};

function initApp() {
  initBackgroundCanvas();
  initCursorSpotlight();
  initHeaderScroll();
  initMobileNavListeners();
  initSmoothScroll();
  initScrollReveal();
}

// Ensure execution regardless of script load timing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Mobile Nav Listeners
function initMobileNavListeners() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openMobileNav();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.closeMobileNav();
    });
  }

  if (overlay) {
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        window.closeMobileNav();
      });
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMobileNav();
    }
  });

  // Auto-close and clear overlay state when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      window.closeMobileNav();
      const overlay = document.getElementById('mobile-nav-overlay');
      if (overlay) overlay.style.display = '';
    }
  }, { passive: true });
}

// 2. Interactive Ambient Particle & Neural Constellation Canvas
function initBackgroundCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };

  const particleCount = window.innerWidth < 768 ? 28 : 60;
  const maxDistance = window.innerWidth < 768 ? 85 : 120;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('touchend', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.5 + 0.8;
      this.baseAlpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 1.0;
          this.y -= dirY * force * 1.0;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(181, 196, 255, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(47, 107, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

// 3. Interactive Cursor Spotlight / Ambient Glow
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    spotlight.style.opacity = '1';
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
  });

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
}

// 4. Header scroll solidify on iPhone Safari
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

// 5. Native Smooth Scroll
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

// 6. Scroll Reveal Observer (Smooth entrance from Down to Up)
function initScrollReveal() {
  const elements = document.querySelectorAll('section, .touch-card, .timeline-node');
  
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.04
  });

  elements.forEach(el => {
    if (!el.classList.contains('no-reveal')) {
      el.classList.add('reveal');
      observer.observe(el);
    }
  });
}
