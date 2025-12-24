# Portfolio Project: Master Instructions

## 1. Project Vision
* **Goal:** A high-performance, multi-page portfolio with "Liquid Motion" physics.
* **Theme:** "Futuristic AI/ML Enthusiast" (Cyber-Minimalism).
* **Inspiration:** Bettina Sosa (Nav/Motion) + Anime.js (Data Visualization).
* **Tech Stack:** HTML5, CSS3, JavaScript, Anime.js (v3.2.1), Lenis (Smooth Scroll).

## 2. Site Architecture
* `index.html` (Main Landing - 4 Sections)
* `about.html` (Resume, Hobbies, Playlist)
* `projects.html` (Full Gallery)
* `contact.html` (Direct Links)
* `style.css` (Global Variables & Styles)
* `script.js` (Global Animation Logic)

## 3. Design System (The "Void" Look)
* **Colors:**
    * Background: `#050505` (Deep Void).
    * Text: `#E0E0E0` (Primary), `#888888` (Secondary).
    * Accents: `#00F0FF` (Cyan Hologram Glow) & `#FF3366` (Interaction Red).
* **Typography:**
    * **Hero/Headlines:** 'Syncopate' or 'Space Grotesk' (Bold, Architectural).
    * **Data/Body:** 'JetBrains Mono' or 'Fira Code' (The Developer/AI aesthetic).
* **Motion Physics:**
    * **Scroll:** Continuous "Liquid" feeling using Lenis.
    * **Cursor:** Magnetic circle with a slight drag delay.

## 4. Homepage Sections (Detailed Specs)
### Section 1: The Hero (Interactive Interface)
* **Navbar (Bettina Style):**
    * Layout: Logo (Left), Links (Center), Contact (Right).
    * **Interaction:** "The Micro-Nudge." Hovering a link moves it 2px diagonally `transform: translate(2px, -2px)`.
    * **Smart Visibility:** Hides when scrolling down, reappears when scrolling up.
* **Hero Content:**
    * **Left (Text):** Massive (8vw), bold text defining you in 4-5 words (e.g., "ARCHITECTING FUTURE INTELLIGENCE").
    * **Right (Visual):** Profile Photo treated as a **"Hologram"** (Scanline overlay, cyan glow, floating animation).
* **Entrance:** "Terminal Decode." Main text scrambles characters `[_H_e_l...]` -> `[Hello]` on load.

### Section 2: Skills Matrix (The "Data Grid")
* **Layout:** Clean grid of icons/text.
* **Interaction:** "Ripple Stagger." Hovering one item expands it; moving mouse across the grid creates a trail of light (domino effect).

### Section 3: The Spotlight (One Project)
* **Content:** "Travel AI Companion App" ONLY.
* **Layout:** Full-width immersive card.
* **Parallax:** Background image moves slower than the scroll speed.

### Section 4: The Footer (Connection)
* **Headline:** "LET'S CONNECT" (Massive).
* **Meta Data:** Live Local Timezone clock + "AI/ML Enthusiast" tagline.
* **Socials:** Minimal list.

## 5. Subpage Specifications
* **About Page:**
    * **Resume:** "Download CV" button with glitch hover effect.
    * **Hobbies:** Grid cards (Pokemon Go, Cooking, Art).
    * **Music:** Minimalist playlist embed.
* **Projects Page:** Full gallery of remaining work.

## 6. Implementation Roadmap
* [ ] **Step 1: Structural Setup.** Create files, link Anime.js + Lenis CDN, apply Global CSS Variables.
* [ ] **Step 2: The Engine.** Initialize Lenis (Smooth Scroll) and the Magnetic Cursor in `script.js`.
* [ ] **Step 3: Section 1 (Hero).** Build the Split Grid, Hologram CSS, and Terminal Decode animation.
* [ ] **Step 4: Section 2 & 3 (Skills & Project).** Implement the "Ripple Grid" and Parallax Spotlight.
* [ ] **Step 5: Subpages.** Build the About/Hobbies layouts.