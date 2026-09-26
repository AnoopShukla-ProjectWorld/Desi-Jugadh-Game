# Bhopali Safar: The Great Desi Jugaad 🛵💨

> **🏆 Official Entry for MP Game Udaan 2026 Hackathon**  
> **Theme:** JUGAAD (Desi Problem Solving, Street Engineering & Comic Hacks)  
> **Setting:** Authentic Streets of Old Bhopal, Madhya Pradesh  
> **Platform:** WebGL / Three.js (Optimized for Laptop & Desktop Widescreen)

---

## 👥 Creators & Team

| Name | Role | Contributions |
| :--- | :--- | :--- |
| **Anoop Shukla** | **Team Head & Lead Game Architect** | Game Concept, Story Planning, 3D Architecture, Systems Design & Coordination |
| **Sujeet P. Singh** | **Core Game Developer & Level Designer** | Three.js Procedural Modeling, Web Audio Synthesis, Physics & Collision Systems |

---

## 📖 The Story: "Guddu Ka Sehra"

Baaraat is standing at the gates of Sheesh Mahal, Bhopal! Pandit ji is furious, the auspicious wedding Muhurat is ticking away, and Guddu (the groom) is missing his wedding **Sehra**! 

Chachi makes an urgent phone call to Chacha. In sheer shock, Chacha drops his phone on the verandah, shattering it into pieces. To make matters worse, his vintage **Bajaj Chetak** scooter has a snapped kickstand!

Armed only with iconic **Desi Jugaad**, Chacha must:
1. **Fix the Broken Phone:** Tape the shattered screen and back cover together.
2. **Prop up the Chetak:** Find a red construction brick to support the broken kickstand.
3. **Cross the Deep Trench:** Build a timber plank bridge across a 3.6m Bhopal Jal Nigam excavation pit.
4. **Befriend Gau Mata:** Lure the sacred cow resting in the middle of the road with fresh green grass & roti from the Sabzi Mandi.
5. **Reach Sheesh Mahal:** Navigate Chetak through old Bhopal streets and park in the VIP mandap bay before the 3-minute Muhurat runs out!

---

## 🎮 Key Features

- **100% Procedural 3D WebGL:** Zero external heavy 3D assets or GLTF blobs. All 20+ stylized Pixar-aesthetic models (Chacha, Bajaj Chetak, Gau Mata, Sheesh Mahal, Jal Nigam Trench) are generated in real-time code.
- **Iconic Desi Jugaad Puzzle Solving:** Solve problems using bricks, planks, and grass with authentic street logic.
- **Web Audio API Sound Engine:** Procedural two-stroke Chetak engine frequency modulation, supersonic paper plane rocket whoosh, and retro Desi chiptune BGM.
- **Interactive Intro Launch:** Supersonic Paper Plane flight that unlocks browser audio per strict Autoplay security policies.
- **3-Mistake Comic Failsafe:** 3 hearts / lives with custom accident respawn mechanics and real-time 3:00 minute countdown clock.
- **Project Info & Controls Modal:** Interactive 3-tab modal covering Controls, Technical Architecture, and Creator Credits.

---

## ⌨️ Controls & Keybindings

> 💻 **Recommended Experience:** Laptop / Desktop with keyboard on a 16:9 widescreen display.

| Action | Primary Key | Secondary Key |
| :--- | :--- | :--- |
| **Explore & Walk** | `W` `A` `S` `D` | `Arrow Keys` |
| **Interact / Pick / Fix / Park** | `E` | Screen Tap / Click |
| **Scooter Accelerate** | `D` | `Right Arrow` |
| **Scooter Brake / Reverse** | `A` | `Left Arrow` |
| **Scooter Lane Steering** | `W` / `S` | `Up` / `Down Arrows` |
| **Desi Scooter Horn** | `Spacebar` | `H` or 📢 Button |

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Windows 1-Click Launch (Easiest)
Double-click `start-dev.bat` in the project root. It automatically checks dependencies, starts the Vite development server, and opens the game when ready.

### Manual Setup
```bash
# 1. Clone the repository
git clone https://github.com/AnoopShukla-ProjectWorld/Desi-Jugadh-Game.git

# 2. Navigate to project directory
cd Desi-Jugadh-Game

# 3. Install dependencies
npm install

# 4. Start local Vite development server
npm run dev

# 5. Build for production distribution
npm run build
```

---

## 🛠️ Technical Stack & Architecture

- **Core Engine:** [Three.js](https://threejs.org/) (WebGL rendering, ShadowMap, Procedural Mesh Factory)
- **Tooling & Bundler:** [Vite](https://vitejs.dev/) (Instant Hot Module Replacement & production chunking)
- **Audio Synthesis:** Web Audio API (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, Gain Ramping)
- **Physics & Collision:** Custom deterministic AABB (Axis-Aligned Bounding Box) collision system
- **State Architecture:** Multi-phase Finite State Machine (Cutscenes, Free Walk, Driving, Accidents, Victory)

---

## 📜 License & Hackathon Attribution

Developed for **MP Game Udaan 2026 Hackathon**.  
All rights reserved © 2026 Anoop Shukla & Sujeet P. Singh.
