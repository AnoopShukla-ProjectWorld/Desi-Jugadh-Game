import * as THREE from 'three';
import { audio } from './audio.js';
import { AssetFactory } from './models.js';

class Game {
  constructor() {
    this.stage = 0; // 0: Stand, 1: Trench Bridge, 2: Tempt Cow, 3: Ride Scooter, 4: Won
    this.meter = 0;
    this.inventory = null;
    this.isRiding = false;
    this.scooterSpeed = 0;
    this.maxSpeed = 13;
    this.isFalling = false;
    this.plankPlaced = false;
    this.plankZ = 0;
    this.plankHalfWidth = 0.95; // Sturdy bridge width

    // Opening Cutscene State
    this.isCutscene = false;
    this.cutsceneTime = 0;
    this.cutscenePhase = 0;

    // Collectibles & Barriers
    this.coins = [];
    this.warningBarrier = null;

    this.keys = { left: false, right: false, up: false, down: false };

    this.initScene();
    this.initUI();
    this.setupEvents();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initScene() {
    this.container = document.getElementById('game-container');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xfbbf24);
    this.scene.fog = new THREE.FogExp2(0xfde047, 0.015);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(-4, 4.8, 9.5);
    this.camera.lookAt(-2, 1.2, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Sunset Lighting
    const hemiLight = new THREE.HemisphereLight(0xfffbeb, 0x78350f, 0.75);
    this.scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xf59e0b, 1.6);
    sunLight.position.set(12, 24, 18);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    this.scene.add(sunLight);

    // Street Environment
    this.env = AssetFactory.createStreetEnvironment();
    this.scene.add(this.env);

    // Vintage Scooter (with Seated Rider hidden initially)
    this.scooter = AssetFactory.createVintageScooter();
    this.scooter.position.set(-6, 0, -0.5);
    this.scooter.rotation.x = -0.32;
    this.scooter.userData.riderMesh.visible = false;
    this.scene.add(this.scooter);

    // Chacha's Traditional Bhopali Ancestral Home (x = -6.0, z = -4.8)
    this.chachaHome = AssetFactory.createChachaHome();
    this.chachaHome.position.set(-6.0, 0, -4.8);
    this.scene.add(this.chachaHome);

    // Standing Pixar Boy Character (Initially on home verandah behind doors)
    this.player = AssetFactory.createCartoonBoy();
    this.player.position.set(-6.0, 0.32, -4.6);
    this.player.visible = false;
    this.scene.add(this.player);

    // Warning Barrier before Excavation (at x = 8.2)
    this.warningBarrier = AssetFactory.createWarningBarrier();
    this.warningBarrier.position.set(8.2, 0, 0);
    this.scene.add(this.warningBarrier);

    // Road Excavation Trench at x = 11
    this.trench = AssetFactory.createRoadTrench();
    this.trench.position.set(11, 0, 0);
    this.scene.add(this.trench);

    // Cartoon Cow at x = 21.5, z = -0.2
    this.cow = AssetFactory.createCartoonCow();
    this.cow.position.set(21.5, 0, -0.2);
    this.cow.rotation.y = -Math.PI / 2;
    this.scene.add(this.cow);

    // Chachi Character at Sheesh Mahal on Red Carpet (Clear view, outside gate arch at x = 39.8, z = 0.3)
    this.chachi = AssetFactory.createCartoonChachi();
    this.chachi.position.set(39.8, 0, 0.3);
    this.chachi.rotation.y = -Math.PI / 2 - 0.25; // Angled facing the camera
    this.scene.add(this.chachi);

    // Scattered Puzzle Items
    this.items = [];

    const broom = AssetFactory.createBroom();
    broom.position.set(-2.5, 0, 1.8);
    this.scene.add(broom);
    this.items.push(broom);

    const bottle = AssetFactory.createPlasticBottle();
    bottle.position.set(0.5, 0, -2.6);
    this.scene.add(bottle);
    this.items.push(bottle);

    const brick = AssetFactory.createBrick();
    brick.position.set(-1.0, 0, -1.5);
    this.scene.add(brick);
    this.items.push(brick);

    const cardboard = AssetFactory.createCardboard();
    cardboard.position.set(4.8, 0, 2.0);
    this.scene.add(cardboard);
    this.items.push(cardboard);

    const plank = AssetFactory.createTimberPlank();
    plank.position.set(6.8, 0, -2.8);
    this.scene.add(plank);
    this.items.push(plank);

    const tyre = AssetFactory.createOldTyre();
    tyre.position.set(15.5, 0, 1.8);
    this.scene.add(tyre);
    this.items.push(tyre);

    const grass = AssetFactory.createGrassRotiBasket();
    grass.position.set(18.0, 0, -3.2);
    this.scene.add(grass);
    this.items.push(grass);

    // 8 Shiny Collectible Desi Rupee Coins along the road
    const coinCoords = [
      { x: -2.0, z: 0.0 },
      { x: 2.2, z: 0.5 },
      { x: 5.6, z: -0.5 },
      { x: 11.0, z: 0.0 }, // Directly on the plank bridge!
      { x: 15.2, z: 0.8 },
      { x: 26.0, z: -0.6 },
      { x: 32.5, z: 0.6 },
      { x: 38.5, z: 0.0 }
    ];
    this.coins = coinCoords.map(pos => {
      const c = AssetFactory.createDesiCoin();
      c.position.set(pos.x, 0.65, pos.z);
      this.scene.add(c);
      return c;
    });

    // Universal Static Colliders (Permanent Structures in Bhopal Mohalla)
    this.staticColliders = [
      // 1. Chacha's Home main back wall and verandah flanks
      { type: 'box', minX: -9.5, maxX: -2.5, minZ: -10.0, maxZ: -4.7, name: 'HomeBackWall' },
      { type: 'box', minX: -9.5, maxX: -7.0, minZ: -4.7, maxZ: -2.6, name: 'OotlaLeftFlank' },
      { type: 'box', minX: -5.0, maxX: -2.5, minZ: -4.7, maxZ: -2.6, name: 'OotlaRightFlank' },
      { type: 'circle', x: -3.6, z: -3.4, radius: 0.5, name: 'TulsiPot' },
      { type: 'box', minX: -8.5, maxX: -7.6, minZ: -3.8, maxZ: -3.2, name: 'AtlasBicycle' },

      // 2. Chai Tapri (x = 2.0, z = -4.0)
      { type: 'box', minX: 0.5, maxX: 3.5, minZ: -4.8, maxZ: -3.2, name: 'ChaiStall' },

      // 3. North buildings wall along road (sidewalk barrier)
      { type: 'box', minX: 3.6, maxX: 40.0, minZ: -10.0, maxZ: -4.4, name: 'NorthBuildings' },

      // 4. South boundary railing along road
      { type: 'box', minX: -16.0, maxX: 45.0, minZ: 3.2, maxZ: 10.0, name: 'SouthRailing' },

      // 5. Sheesh Mahal Palace Facade Walls & Side Wings (at x = 42.0)
      { type: 'box', minX: 41.6, maxX: 42.6, minZ: -6.0, maxZ: -1.35, name: 'PalaceWallLeft' },
      { type: 'box', minX: 41.6, maxX: 42.6, minZ: 1.35, maxZ: 6.0, name: 'PalaceWallRight' },
      { type: 'box', minX: 45.0, maxX: 55.0, minZ: -6.0, maxZ: 6.0, name: 'PalaceBackBoundary' }
    ];

    // Dazed Character (Spawned after accident)
    this.dazedGuy = AssetFactory.createDazedCharacter();
    this.dazedGuy.visible = false;
    this.scene.add(this.dazedGuy);

    this.isAccident = false;
    this.shakeDuration = 0;

    this.initExhaustParticles();
    this.initConfetti();
  }

  initExhaustParticles() {
    this.particles = [];
    const pGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const pMat = new THREE.MeshBasicMaterial({ color: 0xd1d5db, transparent: true, opacity: 0.6 });
    for (let i = 0; i < 20; i++) {
      const p = new THREE.Mesh(pGeo, pMat);
      p.visible = false;
      this.scene.add(p);
      this.particles.push({ mesh: p, life: 0, maxLife: 1, vel: new THREE.Vector3() });
    }
  }

  emitSmoke(pos) {
    const p = this.particles.find(pt => !pt.mesh.visible);
    if (!p) return;
    p.mesh.position.copy(pos);
    p.mesh.visible = true;
    p.life = 0;
    p.maxLife = 0.6 + Math.random() * 0.4;
    p.mesh.scale.setScalar(0.4);
    p.vel.set(-1.5 - Math.random() * 1.5, 0.4 + Math.random() * 0.5, (Math.random() - 0.5) * 0.6);
  }

  // Confetti Particle Explosion for Victory
  initConfetti() {
    this.confetti = [];
    const colors = [0xef4444, 0xf59e0b, 0x10b981, 0x3b82f6, 0x8b5cf6, 0xec4899];
    for (let i = 0; i < 90; i++) {
      const cGeo = new THREE.PlaneGeometry(0.18, 0.12);
      const cMat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(cGeo, cMat);
      mesh.visible = false;
      this.scene.add(mesh);
      this.confetti.push({
        mesh,
        vel: new THREE.Vector3(),
        rotVel: new THREE.Vector3(),
        active: false
      });
    }
  }

  burstConfetti(centerPos) {
    this.confetti.forEach(c => {
      c.mesh.position.set(
        centerPos.x + (Math.random() - 0.5) * 4,
        centerPos.y + 3.5 + Math.random() * 2,
        centerPos.z + (Math.random() - 0.5) * 4
      );
      c.vel.set(
        (Math.random() - 0.5) * 6,
        2 + Math.random() * 4,
        (Math.random() - 0.5) * 6
      );
      c.rotVel.set(Math.random() * 8, Math.random() * 8, Math.random() * 8);
      c.mesh.visible = true;
      c.active = true;
    });
  }

  // Unified Real-Time Colliders (Dynamic Scooter & Cow + Static World Obstacles)
  getColliders() {
    const list = [...this.staticColliders];

    // 1. Dynamic Solid Scooter Barrier (Active whenever player is on foot)
    if (!this.isRiding && this.scooter) {
      list.push({
        type: 'box',
        minX: this.scooter.position.x - 1.15,
        maxX: this.scooter.position.x + 1.15,
        minZ: this.scooter.position.z - 0.55,
        maxZ: this.scooter.position.z + 0.55,
        name: 'Scooter'
      });
    }

    // 2. Dynamic Solid Cow Barrier (Follows cow wherever Gau Mata moves)
    if (this.cow) {
      list.push({
        type: 'circle',
        x: this.cow.position.x,
        z: this.cow.position.z,
        radius: 1.45,
        name: 'Cow'
      });
    }

    // 3. Deep Road Excavation Trench (Blocks crossing unless timber plank is placed)
    if (!this.plankPlaced && this.trench) {
      list.push({
        type: 'box',
        minX: 9.3,
        maxX: 12.7,
        minZ: -3.5,
        maxZ: 3.5,
        name: 'TrenchVoid'
      });
    }

    return list;
  }

  initUI() {
    this.meterFill = document.getElementById('jugaad-bar-fill');
    this.meterPercent = document.getElementById('meter-percent');
    this.questText = document.getElementById('quest-text');
    this.dialogueBox = document.getElementById('dialogue-box');
    this.dialogueSpeaker = document.getElementById('dialogue-speaker');
    this.dialogueText = document.getElementById('dialogue-text');
    this.promptTip = document.getElementById('prompt-text');
    this.jugaadPopup = document.getElementById('jugaad-popup');
    this.victoryModal = document.getElementById('victory-modal');

    this.showDialogue(
      'Chacha',
      'Arre miyaan! Scooter ka stand toot gaya! Mohalle me kabaad dhundo aur Laal Eent jaisa koi thos stand banao!'
    );
  }

  showDialogue(speaker, text) {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    this.dialogueSpeaker.textContent = `🗣️ ${speaker}`;
    this.dialogueText.textContent = `"${text}"`;
    this.dialogueBox.style.display = 'block';
    clearTimeout(this.dialogueTimeout);
    this.dialogueTimeout = setTimeout(() => {
      this.dialogueBox.style.display = 'none';
    }, 5500);
  }

  triggerJugaadToast(title) {
    this.jugaadPopup.textContent = title;
    this.jugaadPopup.classList.add('show');
    audio.playJugaadSuccess();
    setTimeout(() => {
      this.jugaadPopup.classList.remove('show');
    }, 2800);
  }

  updateMeter(val) {
    this.meter = Math.min(100, val);
    this.meterFill.style.width = `${this.meter}%`;
    this.meterPercent.textContent = `${this.meter}%`;
  }

  // 1. Cinematic Opening Cutscene (Sheesh Mahal Call -> Mohalla Flyover -> Chacha's Home Departure)
  startCutscene() {
    this.isCutscene = true;
    this.cutsceneTime = 0;
    this.cutscenePhase = 1;

    // Reset Chacha Home doors closed initially
    if (this.chachaHome) this.chachaHome.userData.closeDoors();

    // Chacha starts inside doorway, hidden initially
    this.player.position.set(-6.0, 0.32, -4.6);
    this.player.visible = false;
    if (this.player.userData.setPhoneCallPose) this.player.userData.setPhoneCallPose(false);

    const overlay = document.getElementById('cutscene-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
    }

    const speakerTitle = document.getElementById('cutscene-speaker-title');
    const cutsceneText = document.getElementById('cutscene-text');
    if (speakerTitle) speakerTitle.textContent = '👰 Chachi (Sheesh Mahal Mandap)';
    if (cutsceneText) cutsceneText.textContent = '"Arey suno! Baaraat dwar par khadi hai! Pandit ji gusse me hain! Guddu ka dulha sehra leke turant aao!"';

    audio.playPhoneRing();

    // Position camera framing Chachi from comfortable medium-wide angle (NOT zoomed in / chipka hua)
    this.camera.position.set(34.2, 1.85, 2.8);
    this.camera.lookAt(39.8, 1.25, 0.3);
  }

  endCutscene() {
    if (!this.isCutscene) return;
    this.isCutscene = false;

    // Ensure Chacha's doors remain open
    if (this.chachaHome) this.chachaHome.userData.openDoors();

    // Chacha safely in front of verandah steps entering driveway at (-5.5, 0, -1.8) facing scooter
    this.player.position.set(-5.5, 0, -1.8);
    this.player.rotation.y = 0.5; // looking towards scooter
    this.player.visible = true;
    if (this.player.userData.setPhoneCallPose) this.player.userData.setPhoneCallPose(false);
    if (this.player.userData.rightArmPivot) this.player.userData.rightArmPivot.rotation.set(0, 0, 0);
    if (this.player.userData.leftArmPivot) this.player.userData.leftArmPivot.rotation.set(0, 0, 0);
    if (this.player.userData.leftLegPivot) this.player.userData.leftLegPivot.rotation.set(0, 0, 0);
    if (this.player.userData.rightLegPivot) this.player.userData.rightLegPivot.rotation.set(0, 0, 0);

    const overlay = document.getElementById('cutscene-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.opacity = '1';
      }, 400);
    }

    // Return camera smoothly to player gameplay view
    this.camera.position.set(-4.5, 4.8, 8.5);
    this.camera.lookAt(-3.0, 1.2, 0);

    this.showDialogue(
      'Chacha',
      'Arre miyaan! Chetak scooter ka stand toot gaya! Mohalle me kabaad dhundo aur Laal Eent jaisa koi thos stand banao!'
    );
    this.questText.textContent = 'Scooter khadi nahi ho rahi! Paas se laal eent (brick) dhundo aur stand banao!';
    this.promptTip.innerHTML = 'W/A/S/D to Move | [E] to Inspect / Pick up items | [Space] to Honk';
  }

  // 2. Floating 3D -> Screen Score FX
  spawnFloatingScore(text, worldPos) {
    const container = document.getElementById('floating-score-container');
    if (!container) return;
    const v = worldPos.clone();
    v.project(this.camera);
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-(v.y * 0.5) + 0.5) * window.innerHeight;

    const el = document.createElement('div');
    el.className = 'floating-score';
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    container.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1100);
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('keydown', (e) => {
      audio.init();
      if (!audio.musicPlaying) audio.startDesiBGM();

      // Skip cutscene on Space / Enter / Escape
      if (this.isCutscene && (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape')) {
        this.endCutscene();
        return;
      }

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = true;
      if (e.code === 'ArrowUp' || e.code === 'KeyW') this.keys.up = true;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') this.keys.down = true;

      if (e.code === 'KeyE') this.handleAction();
      if (e.code === 'Space' || e.code === 'KeyH') {
        audio.playHorn();
      }
    });

    const btnSkipCutscene = document.getElementById('btn-skip-cutscene');
    if (btnSkipCutscene) {
      btnSkipCutscene.addEventListener('click', (e) => {
        e.stopPropagation();
        this.endCutscene();
      });
    }

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
      if (e.code === 'ArrowUp' || e.code === 'KeyW') this.keys.up = false;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') this.keys.down = false;
    });

    // D-Pad buttons
    const bindHold = (btnId, key) => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      btn.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        audio.init();
        if (!audio.musicPlaying) audio.startDesiBGM();
        this.keys[key] = true;
      });
      btn.addEventListener('pointerup', (e) => { e.stopPropagation(); this.keys[key] = false; });
      btn.addEventListener('pointerleave', (e) => { e.stopPropagation(); this.keys[key] = false; });
    };

    bindHold('btn-up', 'up');
    bindHold('btn-down', 'down');
    bindHold('btn-left', 'left');
    bindHold('btn-right', 'right');

    const btnE = document.getElementById('btn-e');
    if (btnE) {
      btnE.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        audio.init();
        if (!audio.musicPlaying) audio.startDesiBGM();
        this.handleAction();
      });
    }

    const btnHonk = document.getElementById('btn-honk');
    if (btnHonk) {
      btnHonk.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        audio.init();
        audio.playHorn();
      });
    }

    window.addEventListener('pointerdown', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      // Do NOT trigger in-game actions while on landing, map, or intro overlays!
      const landing = document.getElementById('landing-screen');
      const intro = document.getElementById('intro-screen');
      const map = document.getElementById('level-map-screen');
      if ((landing && landing.style.display !== 'none') ||
          (intro && intro.style.display !== 'none') ||
          (map && map.style.display === 'flex')) {
        return;
      }
      audio.init();
      if (!audio.musicPlaying) audio.startDesiBGM();
      this.handleAction();
    });

    // Replay button inside victory modal
    const btnReplay = document.getElementById('btn-replay');
    if (btnReplay) {
      btnReplay.addEventListener('click', () => {
        window.location.reload();
      });
    }

    // Accident respawn button
    const btnAccRespawn = document.getElementById('btn-accident-respawn');
    if (btnAccRespawn) {
      btnAccRespawn.addEventListener('click', () => {
        this.resetAfterAccident();
      });
    }

    // Initialize persistent Stars & Desi Swag Score
    this.initStats();

    // 1. Supersonic Paper Plane Intro Launch Screen (Constant-Speed Arc-Length Flight)
    const introScreen = document.getElementById('intro-screen');
    const plane = document.getElementById('flying-plane');
    if (introScreen && plane) {
      // Cubic Bezier curve control points matching user's exact red marker trajectory
      const p0 = { x: -0.22, y: 0.26 }; // Enter offscreen left at y=26%
      const p1 = { x: 0.22, y: 0.64 };  // Control point pulling down into the scoop
      const p2 = { x: 0.54, y: 0.66 };  // Control point curving the scoop bottom
      const p3 = { x: 1.20, y: -0.20 }; // Exit past top-right corner

      // Precompute 300 points for precise arc-length parameterization (strictly constant speed!)
      const samples = 300;
      const rawPts = [];
      const rawTans = [];
      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const inv = 1 - t;
        const x = inv*inv*inv * p0.x + 3*inv*inv*t * p1.x + 3*inv*t*t * p2.x + t*t*t * p3.x;
        const y = inv*inv*inv * p0.y + 3*inv*inv*t * p1.y + 3*inv*t*t * p2.y + t*t*t * p3.y;
        const dx = 3*inv*inv * (p1.x - p0.x) + 6*inv*t * (p2.x - p1.x) + 3*t*t * (p3.x - p2.x);
        const dy = 3*inv*inv * (p1.y - p0.y) + 6*inv*t * (p2.y - p1.y) + 3*t*t * (p3.y - p2.y);
        rawPts.push({ x, y });
        rawTans.push({ dx, dy });
      }

      const arcLengths = [0];
      let totalLen = 0;
      for (let i = 1; i < rawPts.length; i++) {
        totalLen += Math.hypot(rawPts[i].x - rawPts[i-1].x, rawPts[i].y - rawPts[i-1].y);
        arcLengths.push(totalLen);
      }

      // Function returning point & continuous tangent angle at uniform normalized distance u in [0, 1]
      const getAtDistance = (u) => {
        const target = u * totalLen;
        let low = 0, high = arcLengths.length - 1;
        while (low < high) {
          const mid = (low + high) >> 1;
          if (arcLengths[mid] < target) low = mid + 1;
          else high = mid;
        }
        const idx = Math.max(1, low);
        const segLen = arcLengths[idx] - arcLengths[idx - 1] || 1e-6;
        const frac = (target - arcLengths[idx - 1]) / segLen;
        
        const x = rawPts[idx - 1].x + frac * (rawPts[idx].x - rawPts[idx - 1].x);
        const y = rawPts[idx - 1].y + frac * (rawPts[idx].y - rawPts[idx - 1].y);
        const dx = rawTans[idx - 1].dx + frac * (rawTans[idx].dx - rawTans[idx - 1].dx);
        const dy = rawTans[idx - 1].dy + frac * (rawTans[idx].dy - rawTans[idx - 1].dy);
        // Plane graphic points at -29.3deg naturally, so rotate by:
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 29.3;
        return { x, y, angle };
      };

      let startTime = null;
      let flightEnded = false;
      const duration = 2400; // 2.4 seconds uniform, constant speed throughout

      const stepFlight = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        // Strictly linear u => strictly constant physical speed across entire path!
        const u = Math.min(1, elapsed / duration);

        const pos = getAtDistance(u);
        const scrW = window.innerWidth;
        const scrH = window.innerHeight;
        const px = pos.x * scrW;
        const py = pos.y * scrH;

        // Smooth 3D Banking derived from flight direction
        const bankY = -pos.angle * 0.32;
        const bankX = Math.sin(u * Math.PI) * 10;
        const scale = 0.72 + u * 0.58;

        plane.style.left = `${px}px`;
        plane.style.top = `${py}px`;
        plane.style.transform = `translate(-50%, -50%) perspective(800px) rotateZ(${pos.angle}deg) rotateY(${bankY}deg) rotateX(${bankX}deg) scale(${scale})`;
        plane.style.opacity = u < 0.04 ? `${u / 0.04}` : (u > 0.94 ? `${(1 - u) / 0.06}` : '1');

        if (u < 1) {
          requestAnimationFrame(stepFlight);
        } else {
          // Flight completed! STOP whoosh sound immediately so it never bleeds into landing page!
          flightEnded = true;
          audio.stopPlaneWhoosh();

          introScreen.style.opacity = '0';
          introScreen.style.transition = 'opacity 0.6s ease';
          setTimeout(() => {
            introScreen.style.display = 'none';
          }, 600);
        }
      };

      // 1. Start flight immediately on page load (0ms delay)
      requestAnimationFrame(stepFlight);

      // 2. Play supersonic plane whoosh audio ONLY for the flight
      audio.playPlaneWhoosh();

      // If browser autoplay policy initially suspended audio on page reload,
      // allow first click to resume it ONLY while plane is still airborne!
      const unlockDuringFlight = () => {
        if (!flightEnded) {
          audio.init();
          audio.playPlaneWhoosh();
        }
        window.removeEventListener('pointerdown', unlockDuringFlight);
      };
      window.addEventListener('pointerdown', unlockDuringFlight);
    }

    // 2. Landing Screen & Sound Toggle
    const btnToggleSound = document.getElementById('btn-toggle-sound');
    if (btnToggleSound) {
      btnToggleSound.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMuted = audio.toggleMute();
        btnToggleSound.textContent = isMuted ? '🔇' : '🔊';
        btnToggleSound.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
      });
    }

    // 3. Candy-Crush Roadmap Surprise Desi Hack Gift Boxes
    const giftBox1 = document.getElementById('gift-box-1');
    if (giftBox1) {
      giftBox1.addEventListener('click', () => {
        audio.init();
        audio.playJugaadSuccess();
        this.addScore(150, 0);
        alert("🎁 DESI JUGAAD HACK #1 (Bhopal Scooter Secret):\n\n'Agar scooter ki kick jam ho jaye ya subah thand me start na ho — gaadi ko 45° right tilt karke 3 second ruko, phir single kick maaro, 100% start!'\n\n🏆 Bonus: +150 Desi Swag Points Added!");
      });
    }

    const giftBox2 = document.getElementById('gift-box-2');
    if (giftBox2) {
      giftBox2.addEventListener('click', () => {
        audio.init();
        audio.playJugaadSuccess();
        this.addScore(150, 0);
        alert("🎁 DESI JUGAAD HACK #2 (Universal Desi Rule):\n\n'Gaadi ka fuse udd jaye toh mohalle ke paan wale se safety pin ya cigarette silver foil lo aur socket bypass karo! Desi jugaad zindabad!'\n\n🏆 Bonus: +150 Desi Swag Points Added!");
      });
    }

    // Landing Screen & Winding Roadmap Menu Handlers
    const landingScreen = document.getElementById('landing-screen');
    const levelMapScreen = document.getElementById('level-map-screen');
    const settingsModal = document.getElementById('settings-modal');

    const startGame = () => {
      if (landingScreen) landingScreen.style.display = 'none';
      if (levelMapScreen) levelMapScreen.style.display = 'none';
      audio.init();
      if (!audio.musicPlaying) audio.startDesiBGM();
      this.startCutscene();
    };

    const btnStart = document.getElementById('btn-start-game');
    if (btnStart) btnStart.addEventListener('click', startGame);

    const nodeLevel1 = document.getElementById('node-level-1');
    if (nodeLevel1) nodeLevel1.addEventListener('click', startGame);

    const btnOpenMap = document.getElementById('btn-open-map');
    if (btnOpenMap) {
      btnOpenMap.addEventListener('click', () => {
        if (levelMapScreen) levelMapScreen.style.display = 'flex';
      });
    }

    const btnCloseMap = document.getElementById('btn-close-map');
    if (btnCloseMap) {
      btnCloseMap.addEventListener('click', () => {
        if (levelMapScreen) levelMapScreen.style.display = 'none';
      });
    }

    const btnOpenSettings = document.getElementById('btn-open-settings');
    if (btnOpenSettings) {
      btnOpenSettings.addEventListener('click', () => {
        if (settingsModal) settingsModal.style.display = 'flex';
      });
    }

    const btnCloseSettings = document.getElementById('btn-close-settings');
    if (btnCloseSettings) {
      btnCloseSettings.addEventListener('click', () => {
        if (settingsModal) settingsModal.style.display = 'none';
      });
    }
  }

  initStats() {
    let savedStars = localStorage.getItem('bhopali_stars') || '3';
    let savedScore = localStorage.getItem('bhopali_swag') || '1000';
    const topStars = document.getElementById('top-stars');
    const topScore = document.getElementById('top-score');
    if (topStars) topStars.textContent = savedStars;
    if (topScore) topScore.textContent = savedScore;
  }

  addScore(points, stars = 0) {
    let currentScore = parseInt(localStorage.getItem('bhopali_swag') || '1000', 10);
    let currentStars = parseInt(localStorage.getItem('bhopali_stars') || '3', 10);
    currentScore += points;
    currentStars = Math.min(12, currentStars + stars);
    localStorage.setItem('bhopali_swag', currentScore.toString());
    localStorage.setItem('bhopali_stars', currentStars.toString());
    const topStars = document.getElementById('top-stars');
    const topScore = document.getElementById('top-score');
    if (topStars) topStars.textContent = currentStars;
    if (topScore) topScore.textContent = currentScore;
  }

  // Realistic Accident Animation Sequence
  triggerCowAccident() {
    this.isAccident = true;
    this.scooterSpeed = 0;
    audio.stopScooterEngine();
    audio.playTireScreech();
    audio.playMetalCrash();
    audio.playCowAlarmed();

    this.shakeDuration = 0.55;

    // 1. Hide seated rider from scooter
    this.scooter.userData.riderMesh.visible = false;

    // 2. Spawn dazed Pixar boy thrown forward in front of cow
    this.dazedGuy.position.set(this.scooter.position.x + 2.5, 0, this.scooter.position.z);
    this.dazedGuy.visible = true;

    // 3. Scooter flips onto front wheel and falls on its side
    this.scooter.position.y = 0.35;
    this.scooter.rotation.z = -0.55;
    this.scooter.rotation.x = -0.65;

    // 4. Cow looks alarmed
    if (this.cow.userData.headGroup) {
      this.cow.userData.headGroup.rotation.x = -0.3;
    }

    this.triggerJugaadToast('💥 ACCIDENT! GAU MATA SE TAKKAR! 💥');
    this.showDialogue(
      'Chacha',
      'ARRE BAAP RE! ACCIDENT HO GAYA! Gau Mata se takra gaye! Pehle sabzi market se roti & ghaas laake unhe side karna tha miyaan!'
    );

    const accModal = document.getElementById('accident-modal');
    if (accModal) {
      setTimeout(() => {
        accModal.style.display = 'flex';
      }, 1100);
    }
  }

  resetAfterAccident() {
    const accModal = document.getElementById('accident-modal');
    if (accModal) accModal.style.display = 'none';

    this.isAccident = false;
    this.isRiding = false;
    this.scooterSpeed = 0;

    // Hide dazed guy
    this.dazedGuy.visible = false;

    // Restore scooter before cow
    this.scooter.position.set(14.0, 0, 0);
    this.scooter.rotation.set(0, 0, 0);
    this.scooter.userData.riderMesh.visible = false;

    // Restore walking player
    this.player.position.set(15.0, 0, 0.5);
    this.player.visible = true;
    this.player.rotation.set(0, 0, 0);

    audio.stopScooterEngine();
    this.questText.textContent = 'Pehle Sabzi Market se Taazi Ghaas & Roti laao aur Gau Mata ko side karo!';
    this.promptTip.innerHTML = 'Walk to Grass Basket <b>[E]</b> | Feed Gau Mata before riding!';
  }

  // Handle Pick, Place, Inspect, and Mount
  handleAction() {
    if (this.isFalling) return;
    const pPos = this.player.position;

    // 1. Not carrying: Pick up nearest item
    if (!this.inventory) {
      let nearestItem = null;
      let minDist = 2.2;

      this.items.forEach(item => {
        const d = pPos.distanceTo(item.position);
        if (d < minDist) {
          minDist = d;
          nearestItem = item;
        }
      });

      if (nearestItem) {
        this.inventory = nearestItem;
        this.items = this.items.filter(it => it !== nearestItem);
        this.scene.remove(nearestItem);
        this.player.add(nearestItem);

        // Position item directly in Chacha's hands in front of torso
        nearestItem.position.set(0, 0.88, 0.48);
        nearestItem.rotation.set(0, 0, 0);

        // Bring both arms forward to firmly hold the object
        if (this.player.userData.leftArmPivot && this.player.userData.rightArmPivot) {
          this.player.userData.leftArmPivot.rotation.set(-1.25, -0.15, -0.22);
          this.player.userData.rightArmPivot.rotation.set(-1.25, 0.15, 0.22);
        }

        audio.playBrickThud();
        this.promptTip.innerHTML = `Carrying: <b>${nearestItem.userData.title}</b>. Press [E] to use or drop!`;
        return;
      }
    }

    // 2. Carrying an item: Test / Use / Place
    if (this.inventory) {
      const carried = this.inventory;

      // CRISIS 1: Near Scooter (-6, 0, -0.5)
      const distToScooter = pPos.distanceTo(this.scooter.position);
      if (this.stage === 0 && distToScooter < 2.8) {
        if (carried.userData.type === 'brick') {
          this.player.remove(carried);
          this.scene.add(carried);
          carried.position.set(-6.1, 0, -0.9);
          this.scooter.rotation.x = 0; // Stands upright!
          this.inventory = null;
          this.stage = 1;
          this.updateMeter(25);
          audio.playBrickThud();
          this.triggerJugaadToast('🎉 JUGAAD 1: LAAL EENT KA STAND! (+25%)');

          // Auto-mount Chacha on scooter so the ride immediately begins!
          this.isRiding = true;
          this.player.visible = false;
          this.scooter.userData.riderMesh.visible = true;
          audio.startScooterEngine();
          audio.playHorn();

          this.showDialogue(
            'Chacha',
            'Dhup-dhup-dhup! Chetak start ho gayi! Ab steering sambhalo aur aage sadak par badho!'
          );
          this.questText.textContent = 'Scooter drive karo aage! Savdhan, sadak par nazar rakhein!';
          this.promptTip.innerHTML = 'Drive [W/S/A/D] | [E] Stop & Dismount | [Space] Honk';
          return;
        } else {
          this.showDialogue('Chacha', carried.userData.rejectMsg || 'Yeh cheez scooter ka stand nahi ban sakti!');
          return;
        }
      }

      // CRISIS 2: Near 3D Deep Chasm (11, 0, 0)
      const distToTrench = pPos.distanceTo(this.trench.position);
      if (this.stage === 1 && distToTrench < 3.8) {
        if (carried.userData.type === 'plank') {
          // Snap plank across trench spanning from Platform 1 (x=9.2) to Platform 2 (x=12.8)!
          this.player.remove(carried);
          this.scene.add(carried);
          
          this.plankZ = Math.max(-2.2, Math.min(2.2, pPos.z)); // Place bridge at current lane!
          carried.position.set(11.0, 0.09, this.plankZ);
          carried.rotation.set(0, 0, 0);

          this.plankPlaced = true;
          this.inventory = null;
          if (this.player.userData.leftArmPivot && this.player.userData.rightArmPivot) {
            this.player.userData.leftArmPivot.rotation.set(0, 0, 0);
            this.player.userData.rightArmPivot.rotation.set(0, 0, 0);
          }
          this.updateMeter(50);
          audio.playPlankSnap();
          this.triggerJugaadToast('🎉 JUGAAD 2: TIMBER BRIDGE READY! (+25%)');
          this.showDialogue(
            'Chacha',
            'Bhari lakdi ka phatta lag gaya! Bridge taiyaar hai! Ab vaapis scooter pe baitho [E] aur sambhalke bridge cross karo!'
          );
          this.questText.textContent = 'Scooter par baitho [E] aur dhyan se lakdi ke phatte ke upar se drive karo!';
          this.promptTip.innerHTML = 'Press <b>[E]</b> near scooter to mount | Drive across plank carefully!';
          return;
        } else {
          this.showDialogue('Chacha', carried.userData.rejectMsg || 'Isse bridge nahi banega!');
          return;
        }
      }

      // CRISIS 3: Near Cow (21.5, 0, -0.2)
      const distToCow = pPos.distanceTo(this.cow.position);
      if (this.stage === 2 && distToCow < 3.6) {
        if (carried.userData.type === 'grass') {
          this.player.remove(carried);
          this.scene.add(carried);
          carried.position.set(21.5, 0, -2.8);
          this.inventory = null;
          if (this.player.userData.leftArmPivot && this.player.userData.rightArmPivot) {
            this.player.userData.leftArmPivot.rotation.set(0, 0, 0);
            this.player.userData.rightArmPivot.rotation.set(0, 0, 0);
          }
          this.stage = 3;
          this.updateMeter(75);

          this.cow.userData.isDistracted = true;
          this.cow.userData.state = 'moving';
          audio.playCowMoo();
          this.triggerJugaadToast('🎉 JUGAAD 3: GAU MATA RASTA CLEAR! (+25%)');
          this.showDialogue(
            'Chacha',
            'Gau Mata khush, rasta saaf! Ab jaldi se scooter pe baitho [E] aur full throttle VIP road se Sheesh Mahal bhagao!'
          );
          this.questText.textContent = 'Scooter par baitho [E] aur full speed Sheesh Mahal gate me entry maaro!';
          this.promptTip.innerHTML = 'Press <b>[E]</b> to Mount Scooter | Race to Sheesh Mahal!';
          return;
        } else {
          this.showDialogue('Chacha', carried.userData.rejectMsg || 'Gau Mata isko nahi khayengi!');
          return;
        }
      }

      // Drop item anywhere
      this.player.remove(carried);
      this.scene.add(carried);
      carried.position.set(pPos.x, 0, pPos.z);
      this.items.push(carried);
      this.inventory = null;
      if (this.player.userData.leftArmPivot && this.player.userData.rightArmPivot) {
        this.player.userData.leftArmPivot.rotation.set(0, 0, 0);
        this.player.userData.rightArmPivot.rotation.set(0, 0, 0);
      }
      this.promptTip.textContent = `Dropped ${carried.userData.title}.`;
      return;
    }

    // 3. Mount Scooter (Once stand is fixed) - SEATED RIDER POSE!
    if (this.stage >= 1 && !this.isRiding) {
      const distToScooter = pPos.distanceTo(this.scooter.position);
      if (distToScooter < 2.8) {
        this.isRiding = true;
        this.player.visible = false;
        this.scooter.userData.riderMesh.visible = true;
        audio.startScooterEngine();
        audio.playHorn();
        this.showDialogue(
          'Chacha',
          'Dhup-dhup-dhup! Scooter start! Ab steering sambhalo, aur dhyan se phatte ke upar se nikalna!'
        );
        this.questText.textContent = 'Dhyan se chalayein! Phatte ke upar se gaddhe ko cross karein!';
        this.promptTip.innerHTML = 'Drive [W/S/A/D] | Cross Plank Carefully | [Space] Honk | [E] Stop & Dismount';
        return;
      }
    }

    if (this.isRiding) {
      if (Math.abs(this.scooterSpeed) < 1.0) {
        // Stop and Dismount
        this.isRiding = false;
        this.player.position.set(this.scooter.position.x, 0, this.scooter.position.z + 1.1);
        this.player.visible = true;
        this.scooter.userData.riderMesh.visible = false;
        audio.stopScooterEngine();
        this.promptTip.textContent = 'Dismounted scooter. Press [E] near scooter to mount again.';
        return;
      } else {
        audio.playHorn();
      }
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = 0.016;
    const time = performance.now() * 0.002;

    // --- 0. CINEMATIC CUTSCENE FLYOVER ---
    if (this.isCutscene) {
      this.cutsceneTime += delta;
      const t = this.cutsceneTime;

      if (t < 2.8) {
        // Shot 1: Chachi talking urgently on phone at Sheesh Mahal Mandap (Camera pulled back at comfortable medium-wide angle)
        this.camera.position.set(34.2, 1.85, 2.8);
        this.camera.lookAt(39.8, 1.25, 0.3);

        // Animated head nod & phone gesture while talking
        if (this.chachi && this.chachi.userData.headGroup) {
          this.chachi.userData.headGroup.rotation.x = Math.sin(time * 6) * 0.08;
          this.chachi.userData.headGroup.rotation.z = 0.12 + Math.sin(time * 4) * 0.05;
        }
        if (this.chachi && this.chachi.userData.phoneArmPivot) {
          this.chachi.userData.phoneArmPivot.rotation.x = Math.sin(time * 5) * 0.06;
        }
      } else if (t < 4.8) {
        // Shot 2: Fast cinematic flyover tracking backwards from Sheesh Mahal to Chacha's mohalla home
        const u = (t - 2.8) / 2.0; // 0 to 1
        const easeU = u * u * (3 - 2 * u); // SmoothStep

        const camX = THREE.MathUtils.lerp(34.2, -2.8, easeU);
        const camY = THREE.MathUtils.lerp(1.85, 2.2, easeU);
        const camZ = THREE.MathUtils.lerp(2.8, 0.8, easeU);

        const lookX = THREE.MathUtils.lerp(39.8, -6.0, easeU);
        const lookY = THREE.MathUtils.lerp(1.25, 1.35, easeU);
        const lookZ = THREE.MathUtils.lerp(0.3, -3.6, easeU);

        this.camera.position.set(camX, camY, camZ);
        this.camera.lookAt(lookX, lookY, lookZ);

        // Transition speech toast to Chacha's phone reply
        if (this.cutscenePhase === 1) {
          this.cutscenePhase = 2;
          const speakerTitle = document.getElementById('cutscene-speaker-title');
          const cutsceneText = document.getElementById('cutscene-text');
          if (speakerTitle) speakerTitle.textContent = '🛵 Chacha (Mohalla Driveway)';
          if (cutsceneText) cutsceneText.textContent = '"Haan haan bhagyawan! Bas 5 minute me Chetak leke pohoch raha hoon!"';
        }
      } else if (t < 7.0) {
        // Shot 3A: Chacha's ancestral doors open, Chacha steps JUST OUTSIDE THE DOOR ON THE VERANDAH and talks on phone!
        if (this.chachaHome) this.chachaHome.userData.openDoors();
        this.player.visible = true;
        if (this.player.userData.setPhoneCallPose) {
          this.player.userData.setPhoneCallPose(true);
        }

        // Chacha steps only from inside door (-6.0, 0.32, -4.6) to just outside on verandah (-6.0, 0.32, -3.6)
        const stepProg = Math.min(1, (t - 4.8) / 0.8);
        const wz = THREE.MathUtils.lerp(-4.6, -3.6, stepProg);
        this.player.position.set(-6.0, 0.32, wz);
        this.player.rotation.y = 0.2; // Facing camera / verandah

        if (stepProg < 1) {
          if (this.player.userData.leftLegPivot) this.player.userData.leftLegPivot.rotation.x = Math.sin(stepProg * Math.PI) * 0.3;
        } else {
          if (this.player.userData.leftLegPivot) this.player.userData.leftLegPivot.rotation.x = 0;
          if (this.player.userData.rightLegPivot) this.player.userData.rightLegPivot.rotation.x = 0;
        }

        // Animated head nod and phone gesture while talking on phone (just like Chachi!)
        if (this.player.userData.headGroup) {
          this.player.userData.headGroup.rotation.x = Math.sin(time * 5) * 0.06;
          this.player.userData.headGroup.rotation.z = -0.06 + Math.sin(time * 3) * 0.03;
        }
        if (this.player.userData.phoneArmGroup) {
          this.player.userData.phoneArmGroup.rotation.x = Math.sin(time * 4) * 0.04;
        }

        if (this.player.userData.leftArmPivot) {
          this.player.userData.leftArmPivot.rotation.x = Math.sin(t * 4) * 0.12;
        }

        // Camera pulled back at comfortable medium-wide angle framing verandah, nameplate, and Chacha
        this.camera.position.set(-3.0, 2.1, 0.8);
        this.camera.lookAt(-6.0, 1.35, -3.6);
      } else if (t < 8.4) {
        // Shot 3B: Call ends, Chacha lowers phone, spots broken kickstand from verandah
        if (this.player.userData.setPhoneCallPose) {
          this.player.userData.setPhoneCallPose(false);
        }
        if (this.player.userData.rightArmPivot) this.player.userData.rightArmPivot.rotation.set(0, 0, 0);
        if (this.player.userData.leftArmPivot) this.player.userData.leftArmPivot.rotation.set(0, 0, 0);

        if (this.cutscenePhase === 2) {
          this.cutscenePhase = 3;
          const speakerTitle = document.getElementById('cutscene-speaker-title');
          const cutsceneText = document.getElementById('cutscene-text');
          if (speakerTitle) speakerTitle.textContent = '🛵 Chacha (Mohalla Driveway)';
          if (cutsceneText) cutsceneText.textContent = '"Arre baap re! Chetak ka stand toot ke gir gaya! Mohalle me kabaad dhundo aur Laal Eent jaisa koi jugaad stand banao!"';
        }

        // Camera shifts to medium view framing Chacha on verandah looking towards scooter
        this.camera.position.set(-3.2, 2.2, 1.8);
        this.camera.lookAt(-4.4, 0.9, -1.0);
      } else {
        this.endCutscene();
      }

      this.renderer.render(this.scene, this.camera);
      return;
    }

    // --- COIN ROTATION, BOBBING & PICKUP CHECK ---
    const activePos = this.isRiding ? this.scooter.position : this.player.position;
    this.coins.forEach((coin, idx) => {
      if (!coin.userData.isCollected) {
        coin.rotation.y += delta * 2.8;
        coin.position.y = coin.userData.initialY + Math.sin(time * 5 + idx) * 0.08;

        const dist = activePos.distanceTo(coin.position);
        if (dist < 1.6) {
          coin.userData.isCollected = true;
          coin.visible = false;
          audio.playCoinChime();
          this.addScore(50, 0);
          this.spawnFloatingScore('+50 SWAG 🪙', coin.position);
        }
      }
    });

    // --- 1. WALKING PLAYER PHYSICS & COLLISION ---
    if (!this.isRiding && this.stage < 4 && !this.isFalling) {
      let vx = 0;
      let vz = 0;

      if (this.keys.left) vx -= 1;
      if (this.keys.right) vx += 1;
      if (this.keys.up) vz -= 1;
      if (this.keys.down) vz += 1;

      const moveLen = Math.hypot(vx, vz);

      if (moveLen > 0.01) {
        vx = (vx / moveLen) * 4.5 * delta;
        vz = (vz / moveLen) * 4.5 * delta;

        let nextX = this.player.position.x + vx;
        let nextZ = this.player.position.z + vz;

        nextX = Math.max(-8.5, Math.min(43.5, nextX));
        nextZ = Math.max(-4.4, Math.min(3.0, nextZ));

        const colliders = this.getColliders();
        const pR = (this.player.userData && this.player.userData.radius) || 0.35;

        // Resolve X movement with solid obstacles (Dynamic Scooter, Cow, Walls, Stalls)
        for (const c of colliders) {
          if (c.type === 'circle') {
            const dx = nextX - c.x;
            const dz = this.player.position.z - c.z;
            const dist = Math.hypot(dx, dz);
            const minDist = c.radius + pR;
            if (dist < minDist && dist > 0.0001) {
              const push = minDist - dist;
              nextX += (dx / dist) * push;
            }
          } else if (c.type === 'box') {
            const curZ = this.player.position.z;
            if (curZ > c.minZ - pR && curZ < c.maxZ + pR) {
              if (nextX > c.minX - pR && nextX < c.maxX + pR) {
                if (vx > 0) nextX = c.minX - pR;
                else if (vx < 0) nextX = c.maxX + pR;
                else {
                  const dL = Math.abs(nextX - (c.minX - pR));
                  const dR = Math.abs(nextX - (c.maxX + pR));
                  nextX = dL < dR ? c.minX - pR : c.maxX + pR;
                }
              }
            }
          }
        }

        // Resolve Z movement with solid obstacles
        for (const c of colliders) {
          if (c.type === 'circle') {
            const dx = nextX - c.x;
            const dz = nextZ - c.z;
            const dist = Math.hypot(dx, dz);
            const minDist = c.radius + pR;
            if (dist < minDist && dist > 0.0001) {
              const push = minDist - dist;
              nextZ += (dz / dist) * push;
            }
          } else if (c.type === 'box') {
            if (nextX > c.minX - pR && nextX < c.maxX + pR) {
              if (nextZ > c.minZ - pR && nextZ < c.maxZ + pR) {
                if (vz > 0) nextZ = c.minZ - pR;
                else if (vz < 0) nextZ = c.maxZ + pR;
                else {
                  const dT = Math.abs(nextZ - (c.minZ - pR));
                  const dB = Math.abs(nextZ - (c.maxZ + pR));
                  nextZ = dT < dB ? c.minZ - pR : c.maxZ + pR;
                }
              }
            }
          }
        }

        // Dynamic step height for Chacha's verandah
        if (nextX >= -7.5 && nextX <= -4.5 && nextZ <= -2.2) {
          if (nextZ <= -2.8) {
            this.player.position.y = 0.32;
          } else {
            this.player.position.y = 0.16;
          }
        } else {
          this.player.position.y = 0.0;
        }

        this.player.position.x = nextX;
        this.player.position.z = nextZ;

        // Facing
        const targetAngle = Math.atan2(vx, vz);
        let diff = targetAngle - this.player.rotation.y;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.player.rotation.y += diff * 0.22;

        // Walk cycle
        this.player.userData.walkPhase += moveLen * 3.8;
        const swing = Math.sin(this.player.userData.walkPhase) * 0.65;
        this.player.userData.leftLegPivot.rotation.x = swing;
        this.player.userData.rightLegPivot.rotation.x = -swing;

        if (this.inventory) {
          // TWO-HANDED CARRY ANIMATION: Arms stay raised forward holding object with subtle walking bob
          const holdBob = Math.sin(this.player.userData.walkPhase * 2) * 0.04;
          this.player.userData.leftArmPivot.rotation.set(-1.25 + holdBob, -0.15, -0.22);
          this.player.userData.rightArmPivot.rotation.set(-1.25 - holdBob, 0.15, 0.22);
        } else {
          this.player.userData.leftArmPivot.rotation.set(-swing * 0.75, 0, 0);
          this.player.userData.rightArmPivot.rotation.set(swing * 0.75, 0, 0);
        }
        this.player.userData.torsoGroup.position.y = 1.25 + Math.abs(Math.sin(this.player.userData.walkPhase * 2)) * 0.05;
      } else {
        this.player.userData.leftLegPivot.rotation.x *= 0.8;
        this.player.userData.rightLegPivot.rotation.x *= 0.8;
        if (this.inventory) {
          // Stationary carry: Both arms held forward holding item
          this.player.userData.leftArmPivot.rotation.set(-1.25, -0.15, -0.22);
          this.player.userData.rightArmPivot.rotation.set(-1.25, 0.15, 0.22);
        } else {
          this.player.userData.leftArmPivot.rotation.x *= 0.8;
          this.player.userData.leftArmPivot.rotation.z *= 0.8;
          this.player.userData.rightArmPivot.rotation.x *= 0.8;
          this.player.userData.rightArmPivot.rotation.z *= 0.8;
        }
        this.player.userData.torsoGroup.position.y = THREE.MathUtils.lerp(this.player.userData.torsoGroup.position.y, 1.25, 0.1);
      }

      // --- TRENCH CROSSING LOGIC FOR WALKING CHACHA ---
      if (this.player.position.x >= 9.2 && this.player.position.x <= 12.8) {
        const onPlank = this.plankPlaced && Math.abs(this.player.position.z - this.plankZ) <= this.plankHalfWidth;
        if (onPlank) {
          // Sturdy on plank!
          this.player.position.y = 0.09;
        } else if (!this.isFalling) {
          // Trigger downward fall into deep trench
          this.isFalling = true;
          this.fallVelocity = 0;
          audio.playSplash();
          audio.playBrickThud();
          this.showDialogue('Chacha', 'Arey Baap Re! 2 meter gehre gaddhe me gir gaye! Phatte ke upar se chalo!');
          this.triggerJugaadToast('⚠️ SPLASH! GEHRE GADDHE ME GIR GAYE!');

          setTimeout(() => {
            this.player.position.set(7.5, 0, this.plankPlaced ? this.plankZ : 0);
            this.player.position.y = 0;
            this.player.rotation.z = 0;
            this.isFalling = false;
            this.fallVelocity = 0;
          }, 1800);
        }
      } else {
        if (!this.isFalling) this.player.position.y = 0;
      }

      this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, this.player.position.x + 3.2, 0.06);
      this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, this.player.position.z + 8.8, 0.06);
      this.camera.lookAt(this.player.position.x + 1, 1.3, this.player.position.z);

      this.updatePrompt();
    }

    // Continuous downward gravity descent while falling into pit
    if (this.isFalling && !this.isRiding) {
      this.fallVelocity = (this.fallVelocity || 0) - 26 * delta;
      this.player.position.y = Math.max(-2.15, this.player.position.y + this.fallVelocity * delta);
      this.player.rotation.z = THREE.MathUtils.lerp(this.player.rotation.z, 0.45, 0.12);
    }

    // --- 2. GAU MATA BEHAVIOR: NATURAL ROTATION & FORWARD WALK TO GRASS ---
    if (this.cow.userData.isDistracted && this.cow.userData.state === 'moving') {
      const targetX = 21.5;
      const targetZ = -2.8;
      const dx = targetX - this.cow.position.x;
      const dz = targetZ - this.cow.position.z;
      const distToGrass = Math.hypot(dx, dz);

      // Calculate angle so cow faces grass head-first (+X local)
      const targetAngle = Math.atan2(-dz, dx);
      this.cow.rotation.y = THREE.MathUtils.lerp(this.cow.rotation.y, targetAngle, 0.08);

      if (distToGrass > 0.85) {
        const moveSpeed = 1.35 * delta;
        this.cow.position.x += Math.cos(this.cow.rotation.y) * moveSpeed;
        this.cow.position.z -= Math.sin(this.cow.rotation.y) * moveSpeed;
        this.cow.position.y = Math.abs(Math.sin(time * 8)) * 0.04; // Gentle walking step
      } else {
        this.cow.userData.state = 'eating';
        this.cow.position.y = 0;
        this.colliders = this.colliders.filter(c => c.name !== 'Cow');
        if (this.cow.userData.headGroup) {
          this.cow.userData.headGroup.rotation.x = 0.35; // Head lowered directly into grass
        }
      }
    }
    if (this.cow.userData.state === 'eating' && this.cow.userData.headGroup) {
      this.cow.userData.headGroup.rotation.x = 0.35 + Math.sin(time * 4) * 0.08; // Chewing grass
      this.cow.userData.tailGroup.rotation.z = Math.sin(time * 6) * 0.28; // Happy tail wag
    } else if (this.cow.userData.headGroup) {
      this.cow.userData.headGroup.rotation.x = Math.sin(time * 3) * 0.06;
      this.cow.userData.tailGroup.rotation.z = Math.sin(time * 5) * 0.22;
    }

    // --- 3. SCOOTER RIDING & SKILL-BASED TRENCH BRIDGE CROSSING ---
    if (this.isRiding && this.stage >= 1 && this.stage <= 3 && !this.isFalling) {
      if (this.keys.right) {
        this.scooterSpeed = Math.min(this.maxSpeed, this.scooterSpeed + 9 * delta);
      } else if (this.keys.left) {
        this.scooterSpeed = Math.max(-2, this.scooterSpeed - 8 * delta);
      } else {
        this.scooterSpeed *= 0.96;
      }

      // Steer across road width
      if (this.keys.up) this.scooter.position.z = Math.max(-2.5, this.scooter.position.z - 3.5 * delta);
      if (this.keys.down) this.scooter.position.z = Math.min(2.5, this.scooter.position.z + 3.5 * delta);

      this.scooter.position.x += this.scooterSpeed * delta;

      // Wheel rotation
      const wheelRot = (this.scooterSpeed * delta) / 0.34;
      this.scooter.userData.frontWheel.rotation.z -= wheelRot;
      this.scooter.userData.rearWheel.rotation.z -= wheelRot;

      // Gentle suspension bounce
      this.scooter.position.y = Math.abs(Math.sin(time * 16)) * 0.04;

      // STAGE 1: Warning barrier slowdown before trench if plank is NOT placed
      if (this.stage === 1 && !this.plankPlaced) {
        if (this.scooter.position.x >= 7.6) {
          if (this.scooter.position.x > 8.4) {
            this.scooter.position.x = 8.4;
            this.scooterSpeed = 0;
          } else {
            this.scooterSpeed = Math.min(1.5, this.scooterSpeed);
          }
          if (Math.abs(this.scooterSpeed) < 0.6) {
            this.promptTip.innerHTML = '⚠️ Trench Ahead! Press <b>[E]</b> to Dismount & find timber plank!';
          }
        }
      }

      // --- TRENCH CRASH CHECK FOR SCOOTER ---
      if (this.scooter.position.x >= 9.2 && this.scooter.position.x <= 12.8) {
        const onPlank = this.plankPlaced && Math.abs(this.scooter.position.z - this.plankZ) <= this.plankHalfWidth;
        if (onPlank) {
          // Riding safely ON TOP of the wooden timber bridge without sinking into wood!
          this.scooter.position.y = 0.18;
        } else {
          // CRASH! Drove into the open ditch!
          this.isFalling = true;
          this.scooterFallVel = 0;
          this.scooterSpeed = 0;
          audio.stopScooterEngine();
          audio.playSplash();
          audio.playBrickThud();
          this.triggerJugaadToast('💥 CRASH! SCOOTER GEHRE GADDHE ME GIR GAYI!');
          this.showDialogue('Chacha', 'Arey miyaan! Dhyan se handle sambhalo, phatte ke side me gehre khadde me gira diya!');

          setTimeout(() => {
            // Respawn safely aligned with bridge!
            this.scooter.position.set(7.0, 0, this.plankZ);
            this.scooter.rotation.z = 0;
            this.scooter.position.y = 0;
            this.isFalling = false;
            this.scooterFallVel = 0;
            audio.startScooterEngine();
          }, 1800);
        }
      }

      // Progress from Stage 1 to Stage 2 once trench is safely crossed!
      if (this.stage === 1 && this.plankPlaced && this.scooter.position.x > 13.5) {
        this.stage = 2;
        this.triggerJugaadToast('✨ TRENCH CROSSED! KEEP GOING! ✨');
        this.showDialogue('Chacha', 'Wah miyaan! Phatte ke upar se nikal gaye! Ab aage VIP road badho!');
        this.questText.textContent = 'Aage sadak par dekhein! Gau Mata raste me aaram kar rahi hain!';
      }

      // STAGE 2: Cow Roadblock Slowdown before Cow if NOT distracted
      if (this.stage === 2 && !this.cow.userData.isDistracted) {
        if (this.scooter.position.x >= 17.2) {
          if (this.scooter.position.x > 18.2) {
            this.scooter.position.x = 18.2;
            this.scooterSpeed = 0;
          } else {
            this.scooterSpeed = Math.min(1.8, this.scooterSpeed);
          }
          if (Math.abs(this.scooterSpeed) < 0.6) {
            this.promptTip.innerHTML = '🐮 Gau Mata Roadblock! Press <b>[E]</b> to Dismount & fetch grass basket!';
          }
        }
      }

      // Progress from Stage 2 to Stage 3 once Cow roadblock is cleared!
      if (this.stage === 2 && this.cow.userData.isDistracted && this.scooter.position.x > 23.0) {
        this.stage = 3;
        this.triggerJugaadToast('✨ ROAD CLEAR! FULL THROTTLE! ✨');
        this.questText.textContent = 'Full throttle bhagao! Sheesh Mahal gate me entry maaro!';
      }

      // Continuous downward gravity descent for falling scooter
      if (this.isFalling && this.isRiding) {
        this.scooterFallVel = (this.scooterFallVel || 0) - 26 * delta;
        this.scooter.position.y = Math.max(-2.0, this.scooter.position.y + this.scooterFallVel * delta);
        this.scooter.rotation.z = THREE.MathUtils.lerp(this.scooter.rotation.z, -0.65, 0.12);
      }

      // --- COW ACCIDENT COLLISION CHECK ---
      const distToCow = Math.hypot(
        this.scooter.position.x - this.cow.position.x,
        this.scooter.position.z - this.cow.position.z
      );
      if (distToCow < 2.5 && !this.isAccident && !this.cow.userData.isDistracted) {
        this.triggerCowAccident();
        return;
      }

      // Exhaust smoke
      const exhaustPos = this.scooter.localToWorld(this.scooter.userData.exhaustPos.clone());
      if (Math.random() < 0.4 && Math.abs(this.scooterSpeed) > 0.5) {
        this.emitSmoke(exhaustPos);
      }

      audio.setEngineSpeed(Math.abs(this.scooterSpeed) / this.maxSpeed);

      this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, this.scooter.position.x + 4.5, 0.08);
      this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, this.scooter.position.z + 8.8, 0.08);
      this.camera.lookAt(this.scooter.position.x + 2, 1.4, this.scooter.position.z);

      // --- 4. GRAND FINISH LINE VICTORY (TRIGGERS ONLY AFTER ENTERING INSIDE PALACE GATE at x >= 43.5) ---
      if (this.scooter.position.x >= 43.5) {
        this.stage = 4;
        this.updateMeter(100);
        audio.stopScooterEngine();

        // Confetti explosion
        this.burstConfetti(this.scooter.position);
        this.addScore(500, 1);

        this.triggerJugaadToast('🏆 VICTORY: SHEESH MAHAL ARRIVED! 🏆');
        this.showDialogue(
          'Chacha',
          'Wah Miyaan! Sheesh Mahal ke mandap me entry ho gayi! Guddu ka sehra aur Chacha ki izzat dono bach gayi!'
        );
        this.questText.textContent = '🌟 CONGRATULATIONS! You mastered the Bhopal Mohalla Jugaad!';
        this.promptTip.innerHTML = 'Wah Miyaan! 100% Desi Swag Champion! 🏆';

        // Show Full Victory Modal
        if (this.victoryModal) {
          setTimeout(() => {
            this.victoryModal.style.display = 'flex';
          }, 1200);
        }
      }
    }

    // --- 5. UPDATE CONFETTI PARTICLES ---
    this.confetti.forEach(c => {
      if (c.active) {
        c.mesh.position.addScaledVector(c.vel, delta);
        c.vel.y -= 3.5 * delta; // Gravity
        c.mesh.rotation.x += c.rotVel.x * delta;
        c.mesh.rotation.y += c.rotVel.y * delta;
        if (c.mesh.position.y < 0.05) {
          c.mesh.position.y = 0.05;
          c.vel.set(0, 0, 0);
        }
      }
    });

    // --- 6. EXHAUST PARTICLES ---
    this.particles.forEach(p => {
      if (p.mesh.visible) {
        p.life += delta;
        p.mesh.position.addScaledVector(p.vel, delta);
        p.mesh.scale.setScalar(0.4 + (p.life / p.maxLife) * 0.8);
        p.mesh.material.opacity = (1 - p.life / p.maxLife) * 0.5;
        if (p.life >= p.maxLife) p.mesh.visible = false;
      }
    });

    // --- 7. ACCIDENT CAMERA SHAKE & SPINNING STARS ---
    if (this.dazedGuy && this.dazedGuy.visible && this.dazedGuy.userData.starsOrbit) {
      this.dazedGuy.userData.starsOrbit.rotation.y += 0.08;
    }

    if (this.shakeDuration > 0) {
      this.shakeDuration -= delta;
      this.camera.position.x += (Math.random() - 0.5) * 0.4;
      this.camera.position.y += (Math.random() - 0.5) * 0.35;
    }

    this.renderer.render(this.scene, this.camera);
  }

  updatePrompt() {
    const pPos = this.player.position;

    if (!this.inventory) {
      let nearestItem = null;
      let minDist = 2.2;
      this.items.forEach(it => {
        const d = pPos.distanceTo(it.position);
        if (d < minDist) {
          minDist = d;
          nearestItem = it;
        }
      });

      if (nearestItem) {
        this.promptTip.innerHTML = `✨ Press <b>[E]</b> to Inspect / Pick up <b>${nearestItem.userData.title}</b>`;
        return;
      }

      if (this.stage >= 1) {
        if (pPos.distanceTo(this.scooter.position) < 2.8) {
          this.promptTip.innerHTML = '✨ Press <b>[E]</b> to Kickstart & Mount Chetak Scooter!';
          return;
        }
      }

      this.promptTip.innerHTML = 'Explore the mohalla with <b>W, A, S, D</b> | Find the right Jugaad objects!';
    } else {
      if (this.stage === 0 && pPos.distanceTo(this.scooter.position) < 2.8) {
        this.promptTip.innerHTML = `✨ Press <b>[E]</b> to test <b>${this.inventory.userData.title}</b> as Scooter Stand!`;
      } else if (this.stage === 1 && pPos.distanceTo(this.trench.position) < 3.4) {
        this.promptTip.innerHTML = `✨ Press <b>[E]</b> to place <b>${this.inventory.userData.title}</b> across Trench!`;
      } else if (this.stage === 2 && pPos.distanceTo(this.cow.position) < 3.6) {
        this.promptTip.innerHTML = `✨ Press <b>[E]</b> to offer <b>${this.inventory.userData.title}</b> to Gau Mata!`;
      } else {
        this.promptTip.innerHTML = `Carrying: <b>${this.inventory.userData.title}</b> | Press <b>[E]</b> anywhere to drop`;
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
