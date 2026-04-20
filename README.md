# Portfolio di Ciro Luca Cozzolino

A personal portfolio designed to complement my CV and enhance understanding and engagement.

## 🌟 Release v5 — Highlights

- **v5.4**: Skill bars animation & readability. Fixed broken theme toggle code, improved contrast on skill bars (glow, bolder text), removed light mode (dark only).
- **v5.3**: Interactive Contact Card with Curtain Animation. Added "Connettiamoci!" interactive button with upward sliding effect.
- **v5.2**: UI Refinements & Contrast Fixes. Improved accessibility in Light Mode and updated footer year (2026).

## 🛠 Branch & Release

- `main` — production
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

