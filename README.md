# Portfolio di Ciro Luca Cozzolino

Portfolio personale ingegneristico con design moderno, multilingua e supporto PDF.

## 🌟 Release v5.3 — Highlights

- **Modern Contact Section (v5.3)**: 
    - **Upward Curtain Animation**: Replaced the previous opening with a single, elegant "curtain" that slides up to reveal contact links.
    - **Interactive Social Card**: Redesigned contact links for Email, WhatsApp, and LinkedIn into a single interactive component.
- **UI & UX Refinements (v5.2/v5.3)**: 
    - **Light Mode Tooltips**: Softened backgrounds and high-contrast text for better readability.
    - **Restored CV Button**: Fixed the "Download CV" button design and centered it for better focus.
    - **Clean Interface**: Removed unnecessary locality details from the contact section.
- **University Project Modals (v5.0)**: Detailed popups with technical slideshows and localized descriptions.

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

