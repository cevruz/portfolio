# Portfolio di Ciro Luca Cozzolino

Portfolio personale ingegneristico con design moderno, multilingua e supporto PDF.

## 🌟 Release v4.5 — Highlights

**Dark/Light Mode Theme Toggle**
- Persistent localStorage theme preference (dark by default)
- Full CSS variable system supporting both themes
- SVG icons (sun/moon) with dynamic display toggle showing action state
- Haptic feedback integrated with theme toggle

**Enhanced Visual Design**
- Header with soft green gradient (#9BBF9B → #A8CCA8) in light mode
- Firma (signature text) with glowing gradient animation in both themes (dark gray in light mode)
- Footer redesigned for light mode (light gray background with subtle border)
- Improved contrast: black text in light mode for better readability
- All elements properly styled for light/dark modes

**UI/UX Improvements**
- Hamburger menu transforms to "X" with smooth CSS animation when open
- Reduced navbar spacing (gap: 1rem, compact logo positioning)
- Mobile & desktop fully responsive and consistent
- Theme toggle preserves user preference across sessions

## 📋 Previous Release (v4)

- Mobile: fixed mobile navbar, scrollable hamburger menu in landscape, reduced mobile font-size
- UX: tactile (vibration) + visual feedback on language toggle
- I18n: content updates (education, experiences) with Italian/English bullet lists
- Images: responsive WebP/JPEG variants and `<picture>` markup for conditional loading
- Dev: `optimize.js` script to generate 320/640/1024 variants using `sharp`

## 🛠 Branch & Release

- `main` — production (tagged `v4.5`)
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

