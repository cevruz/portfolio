# Portfolio | Ciro Luca Cozzolino

Personal portfolio built with CSS, JavaScript and HTML;
Supports multilingual modes (currently english/italian);

<<<<<<<<< Temporary merge branch 1
## 🌟 Release v4 — Highlights
=========
## 🌟 Release v5.0 — Highlights
>>>>>>>>> Temporary merge branch 2

- **University Project Modals**: Detailed popups for "Progetti Universitari" with interactive image slideshows.
- **Enhanced Mobile UX (v5.0)**: 
    - **Adaptive Layout**: Side-by-side (landscape) and optimized portrait views for project modals.
    - **Improved Navigation**: Modern SVG close buttons with haptic-ready states and glassmorphism styling.
    - **Optimized Visuals**: Responsive slideshow heights and high-clarity technical image rendering.
- **UI & UX Refinements**: 
    - Logo click triggers page refresh.
    - Profile photo features a lateral bouncy pop-in tooltip (Comic bubble style).
    - Centered and localized "Download PDF" actions within modals.
- **Technical Fixes**: Corrected project-specific PDF paths and handled layout inconsistencies in project cards.

## 🛠 Branch & Release

<<<<<<<<< Temporary merge branch 1
- `main` — production (tagged `v4.5`)
- `ai-dev` — active development (current work)
=========
- `main` — production (tagged `v5.0`)
- `ai-dev` — active development
>>>>>>>>> Temporary merge branch 2

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
