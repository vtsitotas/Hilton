# Hilton Pastry Shop Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page static website for Ζαχαροπλαστείο Hilton with photo galleries and lightbox.

**Architecture:** One `index.html` + `css/style.css` + `js/main.js`. No build tools. Photos are served from existing `photos/` and `customcakesphotos/` subfolders. Opens directly in browser by double-clicking `index.html`.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, Flexbox), Vanilla JS (ES6), Google Fonts (Playfair Display + Lato)

---

### Task 1: Create Project Structure

**Files:**
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `index.html`

**Step 1: Create the css and js folders**

In File Explorer (or terminal):
```bash
mkdir -p css js
```

**Step 2: Create empty placeholder files**

Create `css/style.css` with just a comment:
```css
/* Ζαχαροπλαστείο Hilton — styles */
```

Create `js/main.js` with just a comment:
```js
// Ζαχαροπλαστείο Hilton — scripts
```

**Step 3: Verify structure**

Run:
```bash
ls -la
```
Expected output: folders `css/`, `js/`, `photos/`, `customcakesphotos/` all present.

---

### Task 2: HTML Skeleton

**Files:**
- Modify: `index.html`

**Step 1: Write the full HTML skeleton**

Replace `index.html` with:

```html
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ζαχαροπλαστείο Hilton — Θεσσαλονίκη</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <div class="navbar__brand">Hilton</div>
    <button class="navbar__toggle" id="navToggle" aria-label="Μενού">
      <span></span><span></span><span></span>
    </button>
    <ul class="navbar__links" id="navLinks">
      <li><a href="#glyka">Γλυκά</a></li>
      <li><a href="#custom">Custom Τούρτες</a></li>
      <li><a href="#info">Επικοινωνία</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <h1 class="hero__title">Ζαχαροπλαστείο Hilton</h1>
      <p class="hero__subtitle">Θεσσαλονίκη — Φλέμινγκ 18</p>
    </div>
  </section>

  <!-- ΓΛΥΚΑ -->
  <section class="gallery-section" id="glyka">
    <div class="section-inner">
      <h2 class="section-title">Τα Γλυκά μας</h2>
      <div class="gallery" id="glykaGallery">
        <img src="photos/γλυκα.jpg"       alt="Γλυκά"   class="gallery__item" />
        <img src="photos/γλυκαα.jpg"      alt="Γλυκά"   class="gallery__item" />
        <img src="photos/γλυκακαλο.jpg"   alt="Γλυκά"   class="gallery__item" />
        <img src="photos/γλυκακαλο2.jpg"  alt="Γλυκά"   class="gallery__item" />
      </div>
    </div>
  </section>

  <!-- CUSTOM ΤΟΥΡΤΕΣ -->
  <section class="gallery-section gallery-section--white" id="custom">
    <div class="section-inner">
      <h2 class="section-title">Custom Τούρτες</h2>
      <div class="gallery" id="customGallery">
        <img src="customcakesphotos/2025-07-27.jpg"   alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed.jpg"      alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed (1).jpg"  alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed (2).jpg"  alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed (3).jpg"  alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed (4).jpg"  alt="Custom Τούρτα" class="gallery__item" />
        <img src="customcakesphotos/unnamed (5).jpg"  alt="Custom Τούρτα" class="gallery__item" />
      </div>
    </div>
  </section>

  <!-- ΠΛΗΡΟΦΟΡΙΕΣ -->
  <section class="info-section" id="info">
    <div class="section-inner">
      <h2 class="section-title section-title--light">Επικοινωνία</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📍</div>
          <p>Φλέμινγκ 18<br />Θεσσαλονίκη 546 42</p>
        </div>
        <div class="info-card">
          <div class="info-icon">📞</div>
          <p><a href="tel:+302310821312">2310 821 312</a></p>
        </div>
        <div class="info-card">
          <div class="info-icon">⭐</div>
          <p>4.5 / 5<br /><small>97 αξιολογήσεις Google</small></p>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <p>© 2026 Ζαχαροπλαστείο Hilton — Θεσσαλονίκη</p>
  </footer>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Φωτογραφία">
    <button class="lightbox__close" id="lbClose" aria-label="Κλείσιμο">✕</button>
    <button class="lightbox__prev"  id="lbPrev"  aria-label="Προηγούμενο">&#8592;</button>
    <button class="lightbox__next"  id="lbNext"  aria-label="Επόμενο">&#8594;</button>
    <img class="lightbox__img" id="lbImg" src="" alt="Φωτογραφία" />
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

**Step 2: Open index.html in browser**

Double-click `index.html`. Expected: unstyled page with all text content visible. No errors in DevTools console.

---

### Task 3: CSS — Variables, Reset & Base

**Files:**
- Modify: `css/style.css`

**Step 1: Add CSS custom properties, reset, and base typography**

Replace `css/style.css` content with:

```css
/* Ζαχαροπλαστείο Hilton — styles */

/* ── Variables ───────────────────────────────── */
:root {
  --red:       #C0392B;
  --red-dark:  #a93226;
  --white:     #FFFFFF;
  --gray-soft: #F5F5F5;
  --dark:      #2C2C2C;
  --gap:       1.5rem;
  --radius:    10px;
}

/* ── Reset ───────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Lato', sans-serif;
  color: var(--dark);
  background: var(--white);
}
img { display: block; max-width: 100%; }
a  { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ── Typography ──────────────────────────────── */
h1, h2 { font-family: 'Playfair Display', serif; }
```

**Step 2: Verify in browser**

Reload. Expected: fonts change to Lato (if internet available), page still readable.

---

### Task 4: CSS — Navbar

**Files:**
- Modify: `css/style.css` (append)

**Step 1: Append navbar styles**

```css
/* ── Navbar ──────────────────────────────────── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background: var(--white);
  border-bottom: 3px solid var(--red);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.navbar__brand {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--red);
  letter-spacing: 1px;
}

.navbar__links {
  display: flex;
  gap: 2rem;
}

.navbar__links a {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--dark);
  transition: color 0.2s;
}

.navbar__links a:hover { color: var(--red); }

/* Hamburger button — hidden on desktop */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.navbar__toggle span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--dark);
  border-radius: 2px;
  transition: background 0.2s;
}
.navbar__toggle:hover span { background: var(--red); }

/* Mobile nav */
@media (max-width: 600px) {
  .navbar__toggle { display: flex; }
  .navbar__links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    border-bottom: 3px solid var(--red);
    padding: 1rem 2rem;
    gap: 1rem;
  }
  .navbar__links.open { display: flex; }
}
```

**Step 2: Verify**

Reload. Expected: sticky navbar with red bottom border. Links visible on desktop. On mobile (narrow window) only hamburger shows.

---

### Task 5: CSS — Hero

**Files:**
- Modify: `css/style.css` (append)

**Step 1: Append hero styles**

```css
/* ── Hero ────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  background: url('../photos/εξω.jpg') center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
}

.hero__content {
  position: relative;
  z-index: 1;
  color: var(--white);
  padding: 0 1rem;
}

.hero__title {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0.9;
}
```

**Step 2: Verify**

Reload. Expected: full-viewport hero with background photo, dark overlay, white title text centered.

---

### Task 6: CSS — Gallery Sections

**Files:**
- Modify: `css/style.css` (append)

**Step 1: Append gallery styles**

```css
/* ── Sections shared ─────────────────────────── */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--dark);
}

.section-title--light { color: var(--white); }

/* ── Gallery sections ────────────────────────── */
.gallery-section          { background: var(--gray-soft); }
.gallery-section--white   { background: var(--white); }

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
}

.gallery__item {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}

.gallery__item:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(192, 57, 43, 0.25);
}

@media (max-width: 900px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .gallery { grid-template-columns: 1fr; }
}
```

**Step 2: Verify**

Reload. Expected: 3-column photo grid on desktop, photos uniform height, hover scale effect.

---

### Task 7: CSS — Info Section & Footer

**Files:**
- Modify: `css/style.css` (append)

**Step 1: Append info + footer styles**

```css
/* ── Info section ────────────────────────────── */
.info-section { background: var(--red); }

.info-grid {
  display: flex;
  gap: var(--gap);
  justify-content: center;
  flex-wrap: wrap;
}

.info-card {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: var(--radius);
  padding: 2rem 2.5rem;
  text-align: center;
  color: var(--white);
  min-width: 180px;
  flex: 1 1 200px;
  max-width: 260px;
}

.info-icon { font-size: 2rem; margin-bottom: 0.75rem; }

.info-card p  { font-size: 1rem; line-height: 1.6; }
.info-card a  { color: var(--white); text-decoration: underline; }
.info-card small { opacity: 0.8; font-size: 0.85rem; }

/* ── Footer ──────────────────────────────────── */
.footer {
  background: var(--dark);
  color: rgba(255,255,255,0.6);
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}
```

**Step 2: Verify**

Reload. Expected: red info section with 3 cards (address, phone, rating), dark footer.

---

### Task 8: CSS — Lightbox

**Files:**
- Modify: `css/style.css` (append)

**Step 1: Append lightbox styles**

```css
/* ── Lightbox ────────────────────────────────── */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.92);
  align-items: center;
  justify-content: center;
}

.lightbox.active { display: flex; }

.lightbox__img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 6px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
}

.lightbox__close,
.lightbox__prev,
.lightbox__next {
  position: absolute;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--white);
  font-size: 1.4rem;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.lightbox__close:hover,
.lightbox__prev:hover,
.lightbox__next:hover { background: var(--red); }

.lightbox__close { top: 1.2rem; right: 1.2rem; }
.lightbox__prev  { left: 1.2rem;  top: 50%; transform: translateY(-50%); }
.lightbox__next  { right: 1.2rem; top: 50%; transform: translateY(-50%); }

@media (max-width: 600px) {
  .lightbox__prev { left: 0.5rem; }
  .lightbox__next { right: 0.5rem; }
}
```

**Step 2: Verify**

Reload. Expected: no visual change yet (lightbox hidden). No console errors.

---

### Task 9: JS — Hamburger Menu + Smooth Scroll

**Files:**
- Modify: `js/main.js`

**Step 1: Add hamburger and nav link logic**

Replace `js/main.js` with:

```js
// Ζαχαροπλαστείο Hilton — scripts

// ── Hamburger menu ────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
```

**Step 2: Verify**

On mobile width (<600px): click hamburger → links appear. Click a link → links disappear and page scrolls.

---

### Task 10: JS — Lightbox

**Files:**
- Modify: `js/main.js` (append)

**Step 1: Append lightbox logic**

```js
// ── Lightbox ──────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');

let currentImages = [];
let currentIndex  = 0;

function openLightbox(images, index) {
  currentImages = images;
  currentIndex  = index;
  lbImg.src     = images[index];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lbImg.src = '';
  document.body.style.overflow = '';
}

function showImage(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  lbImg.src = currentImages[currentIndex];
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click',  () => showImage(currentIndex - 1));
lbNext.addEventListener('click',  () => showImage(currentIndex + 1));

// Close on backdrop click (outside image)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});

// Attach click handlers to each gallery
function attachGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  const items = Array.from(gallery.querySelectorAll('.gallery__item'));
  const srcs  = items.map(img => img.src);
  items.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(srcs, i));
  });
}

attachGallery('glykaGallery');
attachGallery('customGallery');
```

**Step 2: Full manual verification checklist**

Open `index.html` in browser and test:

- [ ] Navbar sticks to top while scrolling
- [ ] Clicking nav links smooth-scrolls to correct section
- [ ] On mobile width: hamburger toggles nav links
- [ ] Hero image fills full viewport
- [ ] Γλυκά grid shows 4 photos, 3 columns on desktop
- [ ] Custom Τούρτες grid shows 7 photos
- [ ] Hover on any photo → subtle scale + red shadow
- [ ] Click photo → lightbox opens with that photo
- [ ] Lightbox ← / → arrows cycle through gallery
- [ ] Keyboard ArrowLeft / ArrowRight works
- [ ] Escape or X closes lightbox
- [ ] Click outside photo in lightbox → closes
- [ ] Lightbox does NOT mix γλυκά and custom photos
- [ ] Info section shows address, phone, stars
- [ ] Footer visible at bottom

---

### Task 11: Final Polish

**Files:**
- Modify: `css/style.css`

**Step 1: Add scroll-padding so sticky navbar doesn't cover section headings**

In the `:root {}` block, add after existing variables:
```css
scroll-padding-top: 68px;
```

**Step 2: Verify**

Click a nav link. Expected: section heading is fully visible below navbar, not hidden behind it.

**Step 3: Done!**

The website is complete. File list:
```
index.html
css/style.css
js/main.js
photos/          (existing)
customcakesphotos/ (existing)
docs/plans/
```

No build step needed. Send the whole `Hilton/` folder to any host (Netlify Drop, GitHub Pages, etc.) or open `index.html` locally.
