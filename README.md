# 🦸‍♂️ AVENGERS: INITIATIVE '26 // Multiverse of Code
### GeeksforGeeks Student Chapter — Bennett University (Round 1 Task | Marvel × Web Design)

> *"Earth's Mightiest Geeks Assemble to Defend the Digital Realm."*

A cinematic, interactive, and event-ready web experience designed for the flagship hackathon and technical symposium organized by the **GeeksforGeeks Student Chapter, Bennett University** (Greater Noida).

---

## ⚡ Instant Preview & Quick Launch

### Option 1: Standalone 5-File Architecture (Zero Setup Required)
You can run the project **immediately** without installing Node.js, npm, or any build tools:
1. Navigate to the project root directory.
2. Double-click or open **`index.html`** in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).
3. Alternatively, launch a lightweight local server:
   ```bash
   # Using Python 3
   python -m http.server 8080

   # Or using npx
   npx serve .
   ```

### Option 2: Next.js 16 Full-Stack Dev Server
If you wish to explore or run the Next.js 16 + React 19 source tree in `src/`:
```bash
# 1. Install dependencies
npm install

# 2. Run Next.js Turbopack development server
npm run dev

# 3. Access in browser
http://localhost:3000
```

---

## 📁 The 5-File Standalone Architecture

The standalone project is cleanly modularized into **5 core files** plus documentation:

```
├── index.html       # 1. Clean HTML structure, semantic sections, modal dialog & HUD reticle elements
├── styles.css       # 2. Marvel design system: comic halftone, hex forcefields, HUD cursor, glassmorphism
├── data.js          # 3. Centralized event dataset (Factions, 6 Infinity Tracks, TVA Timeline, Prizes, FAQs)
├── audio.js         # 4. Web Audio API tactile sound synthesizer (100% client-side, zero external MP3s)
├── app.js           # 5. Main application controller (Multiverse canvas, expanding HUD cursor, badges, snap)
└── README.md        # Comprehensive project documentation & submission guide
```

### Detailed File Roles:

1. **`index.html` (Markup & Structure)**
   - Semantic HTML5 structure linking `styles.css` in the `<head>` and `data.js`, `audio.js`, and `app.js` at the bottom of `<body>`.
   - Sections include: Sticky Chapter Announcement Bar, Floating Glass Navbar, Cinematic Hero Section with Live Countdown, 5 Hero Faction Alliance, 6 Infinity Stone Tracks, TVA Sacred Timeline Roadmap, Stark Treasury Prizes, S.H.I.E.L.D. Clearance Badge Generator, Avengers Council Mentors, Bennett University Campus Citadel Spotlight, Multiverse Allies & Sponsors, J.A.R.V.I.S. FAQ, Footer with Live IST Clock, Floating Thanos Gauntlet Easter Egg, and Modal Dossier.

2. **`styles.css` (Design System & Animations)**
   - Marvel theme color variables (`--marvel-red`, `--arc-gold`, `--tesseract-cyan`, `--time-emerald`, `--power-purple`).
   - Comic-book halftone dot matrix background pattern (`.bg-comic-dots`).
   - Stark hexagonal forcefield grid (`.bg-hex-grid`).
   - Glassmorphic cyber panels (`.glass-panel`, `.glass-panel-elevated`).
   - 3D comic text shadows (`.text-shadow-comic`).
   - Thanos snap disintegration dust animation (`@keyframes dust-fade`, `.dusted-element`).
   - Stark HUD expanding reticle cursor and holographic tag styles.

3. **`data.js` (Structured Event Data Layer)**
   - `FACTIONS`: 5 Hero Protocols (Stark AI, Super Soldier, Kamar-Taj, Wakanda, Asgardian Stormgrid) with colors, mottos, and tech stacks.
   - `TRACKS`: 6 Infinity Stone Tracks (Space, Mind, Time, Reality, Power, Soul) with real-world problem statements, bounties, and tech tags.
   - `TIMELINE_DATA`: 5 TVA Sacred Timeline phases with dates, times, locations, and directives.
   - `PRIZES`: ₹2,50,000+ prize pool breakdowns, trophies, cloud credits, and incubator grants.
   - `AVATARS`: 6 S.H.I.E.L.D. operative hero avatars (Iron Man, Spider-Man, Doctor Strange, Scarlet Witch, Black Panther, Thor).
   - `COUNCIL`: Avengers Council mentors with affiliations and superpowers.
   - `SPONSORS`: Multiverse allies (GFG, Bennett University, Stark Industries, Wakanda Design, GitHub, Devfolio, Polygon, MLH).
   - `FAQS`: J.A.R.V.I.S. operational Q&A dataset.
   - `CAMPUS_INFO`: Bennett University venue coordinates, transit, and amenities.

4. **`audio.js` (Web Audio API Synthesizer)**
   - Built entirely on the browser's native `AudioContext` with **zero external audio file dependencies** (no broken links, zero latency).
   - `playClick(pitch)`: Tactile UI chirp with exponential decay.
   - `playRepulsorBlast()`: Iron Man repulsor blast acoustic effect (descending triangle frequency sweep from 1500Hz to 180Hz).
   - `playArcCharge()`: Arc reactor charging surge (ascending sawtooth sweep from 140Hz to 1200Hz).
   - `playThanosSnap()`: Synthesized white noise buffer passed through a high-Q 3200Hz bandpass filter.
   - `toggleAmbientDrone()`: 55Hz low drone sine wave with smooth linear ramp gain for a cinematic atmosphere.

5. **`app.js` (Interaction & Animation Controller)**
   - **Interactive Multiverse Canvas**: 75-particle vortex with real-time mouse gravitational repulsion and connecting energy filaments reactive to the active faction's color.
   - **Stark HUD Expanding Feature Cursor**: Detects `data-feature` and `data-feature-color` on elements, expanding into an 88px targeting reticle with corner brackets and a floating holographic tag displaying the feature name.
   - **Live Countdown Timer**: Real-time ticker counting down to October 16, 2026, 09:00 IST at Bennett University.
   - **Faction Switcher**: Dynamic protocol realignment that recalculates site accent colors, active dossiers, motto, tech badges, and canvas particle filaments.
   - **Interactive Infinity Track Dossiers**: Opens modal problem statement breakdowns for each stone track.
   - **TVA Sacred Timeline**: Interactive phase tab switcher with mission directives.
   - **S.H.I.E.L.D. Clearance Badge Generator**: Real-time pass generator where typing reflects instantly on the holographic ID card, avatar seal selector, and celebratory `canvas-confetti` explosion upon claiming pass.
   - **Thanos Snap Easter Egg**: Disintegrates 50% of the cards into cosmic dust, with a Time Stone Rewind button to restore reality.
   - **Live Bennett University IST Clock**: Accurate digital clock synchronized to `Asia/Kolkata`.

---

## 🎨 Key Marvel Features & Interactions

| Feature | Description | Marvel Lore / Theme |
| :--- | :--- | :--- |
| **Stark HUD Expanding Cursor** | Hovering over any feature card or button expands the cursor into an 88px targeting reticle and reveals a floating holographic feature tag. | Iron Man / Stark J.A.R.V.I.S. Heads-Up Display |
| **5 Avengers Factions** | Switch between Stark AI, Super Soldier, Kamar-Taj, Wakanda, and Asgard to dynamically re-theme accents, sound effects, and canvas particles. | Avengers Protocols |
| **6 Infinity Stone Tracks** | Space (P2P/IoT), Mind (Agentic AI), Time (Fintech/Predictive), Reality (AR/Web3D), Power (Cyber Warfare), Soul (Assistive Tech). | The 6 Infinity Stones |
| **TVA Sacred Timeline** | Interactive roadmap charting phases from registration to the Grand Finale at Bennett University. | *Loki* / TVA Temporal Loom |
| **S.H.I.E.L.D. Badge Generator** | Hackers configure callsign, university, track, and hero seal to generate their official clearance pass with a confetti burst. | S.H.I.E.L.D. Level 7 Omega Clearance |
| **Thanos Gauntlet Snap** | Click the floating golden gauntlet to disintegrate 50% of screen elements into dust; click Time Stone to rewind reality. | *Avengers: Infinity War* & *Endgame* |
| **Native Web Audio Engine** | Client-side synthesized UI sounds (repulsor blast, arc reactor charging, clicks, cosmic hum) using Web Audio API. | Stark Sound Engineering |

---

## 🏛️ Venue Citadel Information

- **Host Citadel**: Bennett University (The Times Group)
- **Address**: Plot Nos 8, 11, TechZone 2, Greater Noida, Uttar Pradesh 201310
- **Coordinates**: `28.4595° N, 77.5140° E`
- **Nearest Metro**: Pari Chowk / Alpha 1 Metro Station (Aqua Line)
- **Organizing Body**: GeeksforGeeks Student Chapter, Bennett University

---

## 📋 Evaluation Rubric Alignment (Round 1 Task)

- **🦸 Marvel-Inspired Visual Identity**: Halftone comic dots, hexagonal energy forcefields, Stark HUD reticles, 3D extruded comic typography, and authentic Marvel color grading.
- **🎬 Strong, Cinematic Hero Section**: Bold headline, live countdown to Bennett University kickoff, live telemetry metrics, and particle vortex canvas.
- **📋 Event Information & Highlights**: 6 Infinity Tracks, TVA Sacred Timeline, ₹2.5L+ prizes breakdown, Avengers Council mentors, and Bennett campus directives.
- **⚡ Interactive Elements & Animations**: Dynamic faction protocol switcher, expanding HUD reticle cursor, modal dossiers, Thanos snap disintegration, and Web Audio synthesis.
- **📝 Registration / CTA Section**: Interactive S.H.I.E.L.D. clearance pass generator with live ticket preview and celebratory confetti explosion.
- **📱 Fully Responsive Design**: Flawless layout scaling across mobile (375px+), tablet, laptop, and ultra-wide screens.
- **🎨 Consistent Typography, Spacing & Visual Hierarchy**: Clean typography hierarchy combining monospace HUD telemetry, bold comic titles, and readable body text.

---

*Developed for the Junior Core Technical Team Recruitment — GeeksforGeeks Student Chapter, Bennett University.*
