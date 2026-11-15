# Hasaan Ahmad — 4-in-1 Developer & AI Portfolio Suite

A multi-design portfolio suite built specifically for **Hasaan Ahmad** (*Full-Stack Developer & AI Solutions · Computer Science at UCP · Software Engineering Intern at iCode Software House*), inspired by [hasaan-portfolio-sable.vercel.app](https://hasaan-portfolio-sable.vercel.app/) and [figma-portfolio-ten.vercel.app](https://figma-portfolio-ten.vercel.app/).

---

## 🎨 4 Complete Portfolio Designs Included

Switch effortlessly between **4 distinct portfolio architectures** at any time using the floating **Design Switcher Dock** at the bottom-left of the screen:

1. **01 · Sable Cyan (`src/designs/Design1Sable.jsx`)**
   - **Aesthetic**: High-contrast obsidian black (`#050507`) & zinc (`#09090b`) with electric cyan (`#22d3ee`) accents and giant outlined `"DEVELOPER"` watermark typography.
   - **Features**: Floating frosted-glass pill navbar (`HA.`), monochrome-to-color portrait, NPM install command bar (`npm i @hasaan_6/rag-chatbot-widget`), editorial bio, Career Path timeline, 5 Project cards with Case Study modals, 7-category Toolkit chip matrix, and "Let's Connect" footer.

2. **02 · Cosmic Bento (`src/designs/Design2Cosmic.jsx`)**
   - **Aesthetic**: Deep midnight violet (`#110720`), neon purple radial glows, cursive signature brand, and glassmorphic Bento cards.
   - **Features**: *"Judges a system by its architecture..."* headline with hand-drawn SVG loop, animated **3-Ring Cosmic Orbital Planetary Skills System**, 4-card Experience Bento Grid, and alternating Lab project showcase.

3. **03 · Terminal OS (`src/designs/Design3Terminal.jsx`)**
   - **Aesthetic**: Cyber-slate (`#06090e`) with emerald (`#10b981`) & amber (`#f59e0b`) monospace telemetry HUD.
   - **Features**: **Interactive Live CLI Terminal** where visitors can execute commands (`help`, `whoami`, `icode`, `projects`, `skills`, `install`, `contact`, `clear`), real-time engineering metrics (90.4%+ CV Accuracy, `@hasaan_6/rag-chatbot-widget`, Tracelens spans, AWS EC2), and blueprint schematic project cards.

4. **04 · Swiss Studio (`src/designs/Design4Editorial.jsx`)**
   - **Aesthetic**: Architectural Swiss grid layout with exposed `1px` structural borders, international orange (`#FF4F00`) accents, and a **Light Alabaster / Dark Obsidian Studio Toggle**.
   - **Features**: Oversized kinetic typography, interactive numbered project ledger rows (`01 — 05`) with hover thumbnails, and structured engineering specification tables.

---

## 🤖 Shared Interactive Features Across All 4 Designs

- **Hasaan RAG AI Assistant (`src/components/RagChatWidget.jsx`)**: Floating `"Chat with AI ✨"` widget at the bottom-right powered by Hasaan's `@hasaan_6/rag-chatbot-widget` concept (simulating vector retrieval over Hasaan's projects, iCode internship, skills, and contact info).
- **Deep-Dive Case Study Modal (`src/components/ProjectCaseStudyModal.jsx`)**: Clicking any project opens a full architectural breakdown featuring *01 / The Problem*, *02 / The Solution*, *03 / Architecture & Stack*, metrics, and direct GitHub / NPM links.
- **Live Info Customizer (`src/components/EditDetailsModal.jsx`)**: Edit any field live in the browser with `localStorage` persistence and 1-click JS config export.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
