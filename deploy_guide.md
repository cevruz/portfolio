# Guida al Completamento e Pubblicazione

## 1. Rinominare la Cartella
**Sì, puoi rinominare la cartella in "portfolio".**
Tuttavia, poiché la cartella è attualmente aperta nel tuo editor (VS Code/IDE), ti consiglio di seguire questi passi per evitare errori:
1.  Chiudi l'editor.
2.  Rinomina la cartella da `project` a `portfolio` in Esplora File.
3.  Riapri l'editor selezionando la nuova cartella `portfolio`.

## 2. Pubblicare su GitHub e GitHub Pages

### A. Creare il Repository su GitHub
Poiché non posso accedere al tuo account GitHub, devi fare questo passaggio dal browser:
1.  Vai su [github.com](https://github.com) e accedi.
2.  Clicca sul **+** in alto a destra -> **New repository**.
3.  Nome repository: `portfolio` (o quello che preferisci).
4.  Assicurati che sia **Public**.
5.  **NON** inizializzarlo con README, .gitignore o License (li abbiamo già o non servono per ora).
6.  Clicca **Create repository**.

### B. Collegare il Reposito Locale
Una volta creato, GitHub ti mostrerà dei comandi. Copia l'URL del repository (es. `https://github.com/tuo-user/portfolio.git`).
Poi, nel terminale dell'editor (dopo aver riaperto la cartella rinominata), esegui:

```bash
git remote add origin https://github.com/TUO-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```
*(Sostituisci l'URL con il tuo reale)*

### C. Attivare GitHub Pages
1.  Vai nelle **Settings** del tuo repository su GitHub.
2.  Nel menu a sinistra, clicca **Pages**.
3.  Sotto **Build and deployment** > **Source**, scegli **Deploy from a branch**.
4.  Sotto **Branch**, seleziona `main` e cartella `/ (root)`.
5.  Clicca **Save**.

Dopo qualche minuto, il tuo sito sarà online all'indirizzo mostrato in quella pagina (solitamente `https://tuo-user.github.io/portfolio/`).

## 3. Workflow di Sviluppo (Come aggiornare il sito)
Esattamente come hai detto:
-   **`ai-dev`**: È il tuo "laboratorio". Qui fai modifiche, rompi cose, testi nuove idee.
-   **`main`**: È la tua "vetrina" (Pubblica). Qui ci va solo codice funzionante.

### Come pubblicare nuove modifiche:
Quando hai finito di lavorare su `ai-dev` e vuoi mandare tutto online:

1.  Salva tutto su ai-dev:
    ```bash
    git add .
    git commit -m "Descrizione modifiche"
    git push origin ai-dev
    ```
2.  Spostati sulla vetrina (main) e unisci:
    ```bash
    git checkout main
    git merge ai-dev
    git push origin main  # <--- Questo aggiorna il sito live!
    ```
3.  Torna in laboratorio:
    ```bash
    git checkout ai-dev
    ```
