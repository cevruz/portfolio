# Portfolio Ciro Luca Cozzolino - Changelog

Questo documento traccia tutte le modifiche apportate al portfolio durante lo sviluppo.

---

## Commit History (ai-dev branch)

### Ultimi commit

| Hash | Descrizione |
|------|-------------|
| `x` | Remove light mode completely, fix timeline and skill bars animations |
| `x` | Hero section glassmorphism: blob foto, nome e pulsante con animazioni fluttuanti, gradient e blend con chi-sono |
| `6cf3450` | Move Home into nav-links for proper spacing, center all nav elements |
| `76c9a27` | Fix navbar spacing, add sophisticated shimmer animation to CV button |
| `f7fc518` | Blend navbar Home button style with nav links, increase spacing |
| `20cac4e` | Remove duplicate CV button from Chi Sono, change navbar logo to Home |
| `f2369ba` | Redesign hero section: centered layout, sequential fade-in animations, improved typography, prominent CTA button |
| `5937610` | Refactor certifications: unified card layout with colored icon badges for all items |
| `b5182ba` | Replace Trinity progress bar with circular badge showing B2.2 level |
| `675ecba` | Add progress bars to certifications section with IntersectionObserver animation |
| `a486d70` | Add Open Graph and Twitter Card meta tags |
| `0a929e4` | Add GitHub link to contacts section with official SVG logo |

---

## Funzionalità Implementate

### 1. Hero Section Glassmorphism (`header`)
- Layout con 3 blob glassmorphism affiancati:
  - **Blob sinistro**: foto profilo circolare (280px) con effetto vetro, border trasparente, shadow scuro
  - **Blob centrale**: card rettangolare con nome (2.5rem) e sottotitolo, backdrop blur
  - **Blob destro**: pulsante "Scarica CV" stilizzato come pillola glassmorphism
- Animazioni fluttuanti diverse per ogni blob (6s, 7s, 8s)
- Gradient verde scuro header (`linear-gradient(to bottom, #0d2818, #1a3d2a, #245c3d)`)
- Blenda seamless con section `#chi-sono` usando pseudo-elemento 100vw
- Versione light mode con gradient verde chiaro
- Responsive: mobile con layout wrap e blob "Scarica CV" ridimensionato

### 2. Navbar
- Logo "Home" integrato nei nav-links
- Tutti i link stilizzati uniformemente con underline animato
- Spaziatura uniforme (gap: 2rem)
- Switch lingua (EN)
- Hamburger menu posizionato a destra su mobile
- REMOVED: Light mode toggle (dark mode only)

### 3. Sezione Competenze - Software
- Barre di progresso animate con IntersectionObserver
- 9 skill bars: Microsoft Office 90%, AutoCAD 80%, Revit 75%, PVSyst/PVGis 70%, MATLAB 70%, Termolog 65%, TRNSYS 65%, OpenStudio 60%, Python 60%
- Animazione transizione 1s ease-out

### 4. Sezione Competenze - Tecniche
- Tag/pill con sfondo accent-green
- Layout flexbox wrappato
- 8 competenze tecniche visualizzate

### 5. Sezione Certificazioni
- Card layout uniforme con icone colorate
- TOEIC: badge verde con punteggio 895/945
- Trinity: badge blu B2.2
- CNC/BIG DATA: badge arancio
- Hover effect con translateY e shadow

### 6. Meta Tags SEO
- Open Graph: og:title, og:description, og:image, og:url, og:type
- Twitter Card: summary_large_image

### 7. Link GitHub
- Icona SVG ufficiale aggiunta alla sezione contatti
- URL: https://github.com/cevruz

### 8. Animazioni Fixate
- Timeline items: Rimossa opacità iniziale, visibili di default
- Skill bars: Corretto width con CSS custom property --bar-width, threshold 0.05
- Skill pills: Rimossa animazione, visibili di default
- IntersectionObserver: threshold abbassato per触发 più facile

### 9. Light Mode Rimosso
- Rimosso pulsante theme-toggle dalla navbar
- Rimossa logica JavaScript per toggle tema
- Sito ora in dark mode only
- Semplificato CSS rimuovendo body.light-mode rules

---

## File Modificati

- `index.html` - Struttura HTML (hero con 3 blob glassmorphism)
- `style.css` - Stili CSS (glassmorphism, animazioni, gradienti, responsive)
- `script.js` - Logica JavaScript

---

## Comandi Git Utili

```bash
# Vedere tutti i commit
git log --oneline

# Vedere le modifiche di un commit
git show <hash>

# Push su GitHub
git push origin ai-dev

# Merge con main
git checkout main
git merge ai-dev
```

---

## Note di Deploy

Il branch `ai-dev` è pronto per il merge con `main` e il deploy su GitHub Pages (https://cevruz.github.io/portfolio/).

---

*Generato automaticamente - Ultimo aggiornamento: Aprile 2026*
