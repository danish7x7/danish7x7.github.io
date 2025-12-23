# Portfolio Project: Master Instructions

## 1. Project Vision
* **Goal:** A high-performance, interactive portfolio ("Awwwards" style).
* **Inspiration:** "Her Project" portfolio (Smooth scrolling, custom cursor, fluid project transitions).
* **Theme:** Futuristic AI/ML Enthusiast. Minimalist but motion-heavy.
* **Tech Stack:**
    * **Core:** HTML5, CSS3, JavaScript.
    * **Motion:** Anime.js (General animations).
    * **Scrolling:** Lenis (Essential for that "smooth" scroll feel).
    * **3D (Optional):** Three.js (Only if we need a specific background blob/mesh).

## 2. Design System & Layout
* **Cursor:** Custom circular cursor.
    * *Behavior:* Follows mouse with a slight delay (magnetic feel).
    * *State:* Expands or shows text ("View") when hovering over projects.
* **Typography:**
    * Headlines: Large, architectural Sans-Serif (e.g., 'Syncopate' or 'Space Grotesk').
    * Details: Monospace (for the "AI/ML" vibe).
* **Navigation:**
    * *Top:* Minimal "Menu" button (triggers full-screen overlay).
    * *Bottom:* "Let's Work Together" footer with dynamic Timezone (e.g., "Local time: 14:00 PM").
* **Color Palette:**
    * Deep Void (#050505) background.
    * Text: Soft White (#EAEAEA).
    * Accents: Subtle gradients or thin lines.

## 3. Key Features Implementation
### A. The "Liquid" Scroll (Lenis)
* Use `@studio-freight/lenis` for the smooth scrolling effect.
* Note: Anime.js animations must sync with this scroll position.

### B. The "Project Flow" (Gallery)
* Layout: Large vertical cards with parallax images.
* Interaction: As you scroll, images should scale slightly or move slower than the text (Parallax).
* "View Project" Button: Appears or magnetizes to the cursor when hovering a card.

### C. The Footer (Personal)
* Large typography: "LET'S WORK TOGETHER".
* Live Timezone Clock: JS function to show your local time.
* Socials: Clean list.

## 4. MVP Roadmap (Step-by-Step)
* [ ] **Step 1: Setup Smooth Scroll.** Install/Link `Lenis` and initialize it in `script.js`.
* [ ] **Step 2: Custom Cursor.** Create the HTML div for the cursor and write the Anime.js code to make it track the mouse with `easing: 'easeOutExpo'`.
* [ ] **Step 3: Hero Section.** Build the "AI/ML Enthusiast" intro with large typography.
* [ ] **Step 4: Project Gallery.** Create the HTML structure for project cards. Implement the "Parallax" effect using Anime.js on scroll.
* [ ] **Step 5: Overlay Menu.** Build the full-screen menu that slides down when "Menu" is clicked.