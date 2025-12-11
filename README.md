# Portfolio di Ciro Luca Cozzolino

Portfolio personale ingegneristico con design moderno, multilingua e supporto PDF.

## 🌟 Release v4 — Highlights

- Mobile: fixed mobile navbar, scrollable hamburger menu in landscape, reduced mobile font-size
- UX: tactile (vibration) + visual feedback on language toggle
- I18n: content updates (education, experiences) with Italian/English bullet lists
- Images: responsive WebP/JPEG variants and `<picture>` markup for conditional loading
- Dev: `optimize.js` script to generate 320/640/1024 variants using `sharp`

## 🛠 Branch & Release

- `main` — production (tagged `v4`)
- `ai-dev` — active development (current work)

## 🎯 Quick Start

Install dependencies and generate responsive images:

```bash
npm install
npm run optimize
```

Then open `index.html` in a browser (use Chrome DevTools device toolbar to test mobile + landscape).

## 📁 Project Structure (selected)

```
portfolio/
├── assets/         # PDF (Tesi, CV, Progetti)
├── images/         # Responsive image variants (generated)
├── index.html      # Markup and picture elements
├── style.css       # All styles and responsive rules
├── script.js       # i18n, UI interactions
├── optimize.js     # Image generation script (sharp)
└── extract_cv.js   # Helper (extract text from CV PDF)
```

## ✅ Notes & Testing

- Language toggle shows the *target* language (EN when page is IT, and viceversa).
- Education sections include bullet lists in both languages; use the language toggle to verify.
- Mobile: open hamburger menu in landscape and ensure it scrolls smoothly; body scroll is locked while menu is open.

