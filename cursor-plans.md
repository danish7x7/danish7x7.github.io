# Portfolio Project: Master Instructions

## 1. Project Context
* **Goal:** Refactor existing GitHub Pages skeleton into a high-performance "Futuristic AI" portfolio.
* **Tech Stack:** HTML5, CSS3 (in `style.css`), JavaScript (in `script.js`), Anime.js (v3.2.1).
* **Aesthetic:** "Cyber-Minimalism." Think: Data dashboards, sci-fi HUDs, clean lines, and deep dark backgrounds.

## 2. Design System (The "AI" Look)
* **Color Palette:**
    * Background: `#050505` (The Void - deeper than black).
    * Card Surface: `#111111` (Slightly lighter).
    * Text: `#E0E0E0` (Primary), `#888888` (Secondary/Dimmed).
    * Accents: `#00FFC2` (Cyber Cyan) — used *only* for active states/cursors.
* **Typography:**
    * Headers: Monospaced font (`'JetBrains Mono'`, `'Fira Code'`, or `'Courier New'`) to simulate code.
    * Body: Clean Sans-Serif (`'Inter'` or `'Arial'`).
* **UI Elements:**
    * 1px borders with low opacity (`rgba(255, 255, 255, 0.1)`).
    * 0px border-radius (sharp edges) for a "machine" look.

## 3. Anime.js Integration Plan
* **Library:** `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>`
* **Animation A (Hero):** "Decoding Text" effect. Letters scramble/type out on load.
* **Animation B (Grid):** "Staggered Fade." Elements slide up and fade in with a delay.
* **Animation C (Interactions):** Buttons/Links should have a "glitch" or rapid color shift on hover.

## 4. Implementation Roadmap
* [ ] **Step 0: Separation.** Extract CSS from `index.html` into `style.css`. Extract JS into `script.js`. Link them all correctly.
* [ ] **Step 1: The Void (Design).** Apply the dark palette, monospace fonts, and sharp borders to the CSS.
* [ ] **Step 2: Anime.js Setup.** Inject the CDN link and set up the `script.js` file.
* [ ] **Step 3: The Motion.** Implement the "Decoding Text" and "Staggered Grid" animations.