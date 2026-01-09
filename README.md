# Portfolio di Ciro Luca Cozzolino

Portfolio personale ingegneristico con design moderno, multilingua e supporto PDF.

## 🌟 Release v5.3 — Highlights

- **v5.4**: UI Polish & Heading unification. Fixed Contact Icon contrast in Light Mode and unified Header typography colors to absolute white for a cleaner look.
- **v5.3**: Interactive Contact Card with Curtain Animation. Added "Connettiamoci!" interactive button with upward sliding effect.
- **v5.2**: UI Refinements & Contrast Fixes. Improved accessibility in Light Mode and updated footer year (2026).

## 🛠 Branch & Release

- `main` — production (tagged `v5.3`)
- `ai-dev` — active development

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

If you want, I can add a short changelog file (`CHANGELOG.md`) and tidy the translations into separate JSON files.

