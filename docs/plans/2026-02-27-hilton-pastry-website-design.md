# Design Document — Ζαχαροπλαστείο Hilton Website

**Date:** 2026-02-27
**Status:** Approved

---

## Overview

Static single-page website for Ζαχαροπλαστείο Hilton, Θεσσαλονίκη.
Plain HTML/CSS/JS — no build tools, opens directly in browser.

---

## Business Info

- **Όνομα:** Ζαχαροπλαστείο Hilton
- **Διεύθυνση:** Φλέμινγκ 18, Θεσσαλονίκη 546 42
- **Τηλέφωνο:** 2310 821 312
- **Αξιολόγηση:** 4.5 ⭐ (97 κριτικές, Google)
- **Γλώσσα:** Μόνο Ελληνικά

---

## Colors & Typography

| Role         | Value       |
|--------------|-------------|
| Primary red  | `#C0392B`   |
| White        | `#FFFFFF`   |
| Soft gray    | `#F5F5F5`   |
| Dark text    | `#2C2C2C`   |

- **Heading font:** Playfair Display (Google Fonts)
- **Body font:** Lato (Google Fonts)

---

## File Structure

```
Hilton/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── photos/
│   ├── γλυκα.jpg
│   ├── γλυκαα.jpg
│   ├── γλυκακαλο.jpg
│   ├── γλυκακαλο2.jpg
│   └── εξω.jpg
├── customcakesphotos/
│   ├── 2025-07-27.jpg
│   ├── unnamed.jpg
│   ├── unnamed (1).jpg
│   ├── unnamed (2).jpg
│   ├── unnamed (3).jpg
│   ├── unnamed (4).jpg
│   └── unnamed (5).jpg
└── docs/
    └── plans/
        └── 2026-02-27-hilton-pastry-website-design.md
```

---

## Page Sections

### 1. Navbar (sticky)
- Background: white, bottom border κόκκινο
- Links: Γλυκά | Custom Τούρτες | Επικοινωνία
- Smooth scroll σε κάθε section
- Mobile: hamburger menu

### 2. Hero
- Full-width background image: `photos/εξω.jpg`
- Dark overlay (rgba 0,0,0,0.45)
- Centered text:
  - H1: "Ζαχαροπλαστείο Hilton" (Playfair Display, white)
  - Subtitle: "Θεσσαλονίκη — Φλέμινγκ 18" (Lato, white)
- Min-height: 100vh

### 3. Γλυκά Section (id="glyka")
- Background: `#F5F5F5`
- Section title: "Τα Γλυκά μας"
- Photo grid: 3 columns desktop / 2 tablet / 1 mobile
- Photos: 4 γλυκά photos from `photos/`
- Each photo: rounded corners, hover scale effect
- Click → opens lightbox

### 4. Custom Τούρτες Section (id="custom")
- Background: `#FFFFFF`
- Section title: "Custom Τούρτες"
- Photo grid: 3 columns desktop / 2 tablet / 1 mobile
- Photos: 7 photos from `customcakesphotos/`
- Same hover + lightbox behavior

### 5. Πληροφορίες Section (id="info")
- Background: `#C0392B`
- Text: white
- Content:
  - 📍 Φλέμινγκ 18, Θεσσαλονίκη 546 42
  - 📞 2310 821 312
  - ⭐ 4.5 / 5 (97 αξιολογήσεις Google)
  - Ώρες λειτουργίας (αν παρασχεθούν)
- Optional: Google Maps iframe embed

### 6. Footer
- Background: `#2C2C2C`
- Text: "© 2026 Ζαχαροπλαστείο Hilton — Θεσσαλονίκη"

---

## Lightbox Behavior

- Trigger: click on any gallery photo
- Overlay: `rgba(0,0,0,0.9)` full screen
- Shows current photo centered, max 90vw / 90vh
- Controls:
  - X button (top-right) → close
  - ← → arrow buttons → previous/next photo
  - Keyboard: Escape (close), ArrowLeft, ArrowRight
- Each gallery (γλυκά, custom) has its own image array

---

## Responsive Breakpoints

| Breakpoint | Grid columns |
|------------|--------------|
| > 900px    | 3 columns    |
| 600–900px  | 2 columns    |
| < 600px    | 1 column     |

Navbar collapses to hamburger below 600px.

---

## Implementation Notes

- No external JS libraries (pure vanilla JS)
- Google Fonts loaded via `<link>` in `<head>`
- Images use `object-fit: cover` for uniform grid cells
- Smooth scroll via `scroll-behavior: smooth` on `html`
- No backend required — fully static
