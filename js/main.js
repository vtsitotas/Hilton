// Ζαχαροπλαστείο Hilton — scripts

// ── Hamburger menu ────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Navbar active link on scroll ──────────────
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.navbar__links a[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.dataset.section === entry.target.id);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll reveal animations ──────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger siblings inside the same parent
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      const delay = idx * 80; // ms stagger
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Lightbox ──────────────────────────────────
const lightbox      = document.getElementById('lightbox');
const lbImg         = document.getElementById('lbImg');
const lbClose       = document.getElementById('lbClose');
const lbPrev        = document.getElementById('lbPrev');
const lbNext        = document.getElementById('lbNext');

let currentImages   = [];
let currentAlts     = [];
let currentIndex    = 0;
let lightboxTrigger = null;

function openLightbox(images, alts, index, triggerEl) {
  currentImages   = images;
  currentAlts     = alts;
  currentIndex    = index;
  lightboxTrigger = triggerEl;
  lbImg.src = images[index];
  lbImg.alt = alts[index];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lbImg.src = '';
  lbImg.alt = '';
  document.body.style.overflow = '';
  if (lightboxTrigger) lightboxTrigger.focus();
}

function showImage(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  lbImg.src = currentImages[currentIndex];
  lbImg.alt = currentAlts[currentIndex];
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click',  () => showImage(currentIndex - 1));
lbNext.addEventListener('click',  () => showImage(currentIndex + 1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});

function attachGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  const items = Array.from(gallery.querySelectorAll('.gallery__item'));
  const srcs  = items.map(img => img.src);
  const alts  = items.map(img => img.alt);

  items.forEach((img, i) => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => openLightbox(srcs, alts, i, img));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(srcs, alts, i, img);
      }
    });
  });
}

attachGallery('glykaGallery');
attachGallery('customGallery');

// ── Scroll-to-top button ──────────────────────
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Touch swipe for lightbox ──────────────────
let touchStartX = 0;
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) showImage(currentIndex + (diff > 0 ? 1 : -1));
}, { passive: true });
