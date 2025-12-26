# Portfolio di Ciro Luca Cozzolino

Personal portfolio built with CSS, JavaScript and HTML;
Supports multilingual modes (currently english/italian);

## 🌟 Release v4 — Highlights

- **UI Interactive**: Logo click refreshes the page; Profile photo click shows a "thank you" tooltip bubble.
- **Tooltip Style**: Lateral "comic bubble" on desktop, responsive (bottom-centered) on mobile.
- Mobile: fixed mobile navbar, scrollable hamburger menu in landscape, reduced mobile font-size
- UX: tactile (vibration) + visual feedback on language toggle
- I18n: content updates (education, experiences) with Italian/English bullet lists
- Images: responsive WebP/JPEG variants and `<picture>` markup for conditional loading
- Dev: `optimize.js` script to generate 320/640/1024 variants using `sharp`

## 🛠 Branch & Release

- `main` — production (tagged `v4.5`)
- `ai-dev` — active development (current work)

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
