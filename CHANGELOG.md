# Portfolio Ciro Luca Cozzolino - Changelog

Questo documento traccia tutte le modifiche apportate al portfolio durante lo sviluppo.

---

## Commit History (ai-dev branch)

### Ultimi commit

| Hash | Descrizione |
|------|-------------|
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

### 1. Hero Section (`header`)
- Layout centrato con flexbox
- Animazioni sequenziali fade-in + translateY (foto: 0.1s, nome: 0.3s, sottotitolo: 0.5s, CTA: 0.7s)
- Tipografia migliorata: nome 3rem bold, sottotitolo font-weight 300
- Pulsante CV con effetto shimmer all'hover
- Foto circolare con bordo accent-green e glow animato

### 2. Navbar
- Logo "Home" integrato nei nav-links
- Tutti i link stilizzati uniformemente con underline animato
- Spaziatura uniforme (gap: 2rem)
- Toggle tema (sole/luna) e switch lingua (EN)

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

---

## File Modificati

- `index.html` - Struttura HTML
- `style.css` - Stili CSS
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
