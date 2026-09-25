import * as THREE from 'three';

// High-Fidelity Stylized 3D Asset Factory (Pixar/DreamWorks aesthetic)
export class AssetFactory {
  // 1. Stylized Pixar/Cartoon Boy (Matching Image 1) - Standing / Walking
  static createCartoonBoy() {
    const character = new THREE.Group();
    character.name = "CartoonCharacter";

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c096, roughness: 0.5 });
    const blueShirtMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.65 });
    const denimPantsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.4 });
    const whiteShoeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const irisMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x7f1d1d });
    const teethMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Torso Group
    const torsoGroup = new THREE.Group();
    torsoGroup.name = "TorsoGroup";
    torsoGroup.position.set(0, 1.25, 0);

    const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.28, 0.65, 18), blueShirtMat);
    chest.castShadow = true;
    torsoGroup.add(chest);

    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 8, 16), blueShirtMat);
    collar.position.set(0, 0.35, 0);
    collar.rotation.x = Math.PI / 2;
    torsoGroup.add(collar);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 12), skinMat);
    neck.position.set(0, 0.42, 0);
    torsoGroup.add(neck);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.72, 0);

    const headGeo = new THREE.SphereGeometry(0.35, 24, 24);
    headGeo.scale(1.0, 1.08, 1.0);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.castShadow = true;
    headGroup.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.38, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.65), hairMat);
    hair.position.set(0, 0.08, -0.04);
    headGroup.add(hair);

    const quiff = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 8), hairMat);
    quiff.rotation.set(-0.4, 0, 0.6);
    quiff.position.set(0.12, 0.32, 0.25);
    headGroup.add(quiff);

    // Eyes
    [-0.14, 0.14].forEach((eyeX, idx) => {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(eyeX, 0.06, 0.31);

      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 14), eyeWhiteMat);
      sclera.scale.set(1.0, 1.15, 0.5);
      eyeGroup.add(sclera);

      const iris = new THREE.Mesh(new THREE.CircleGeometry(0.052, 16), irisMat);
      iris.position.set(0, 0, 0.048);
      eyeGroup.add(iris);

      const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.032, 14), pupilMat);
      pupil.position.set(0, 0, 0.05);
      eyeGroup.add(pupil);

      const hl = new THREE.Mesh(new THREE.CircleGeometry(0.014, 10), highlightMat);
      hl.position.set(0.015, 0.015, 0.052);
      eyeGroup.add(hl);

      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.028, 0.03), hairMat);
      brow.position.set(0, 0.14, 0.02);
      brow.rotation.z = idx === 0 ? 0.12 : -0.12;
      eyeGroup.add(brow);

      headGroup.add(eyeGroup);
    });

    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), skinMat);
    nose.position.set(0, -0.04, 0.36);
    headGroup.add(nose);

    const mouth = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.04, 14, 1, false, 0, Math.PI), mouthMat);
    mouth.rotation.x = Math.PI / 2;
    mouth.position.set(0, -0.16, 0.32);
    headGroup.add(mouth);

    const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.02), teethMat);
    teeth.position.set(0, -0.145, 0.33);
    headGroup.add(teeth);

    [-0.35, 0.35].forEach(earX => {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), skinMat);
      ear.scale.set(0.5, 1.2, 0.8);
      ear.position.set(earX, 0.02, 0);
      headGroup.add(ear);
    });

    torsoGroup.add(headGroup);

    // Arms
    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(0.36, 0.25, 0);
    const armUpperL = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.36, 10), blueShirtMat);
    armUpperL.position.y = -0.18;
    leftArmPivot.add(armUpperL);
    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.32, 10), skinMat);
    forearmL.position.y = -0.48;
    leftArmPivot.add(forearmL);
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), skinMat);
    handL.position.y = -0.66;
    leftArmPivot.add(handL);
    torsoGroup.add(leftArmPivot);

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(-0.36, 0.25, 0);
    const armUpperR = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.36, 10), blueShirtMat);
    armUpperR.position.y = -0.18;
    rightArmPivot.add(armUpperR);
    const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.32, 10), skinMat);
    forearmR.position.y = -0.48;
    rightArmPivot.add(forearmR);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 10), skinMat);
    handR.position.y = -0.66;
    rightArmPivot.add(handR);

    // Handheld Smartphone Prop (visible during call cutscene)
    const phoneProp = new THREE.Mesh(
      new THREE.BoxGeometry(0.075, 0.15, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.85, roughness: 0.2 })
    );
    phoneProp.position.set(0, -0.66, 0.08);
    phoneProp.visible = false;
    rightArmPivot.add(phoneProp);

    torsoGroup.add(rightArmPivot);

    character.add(torsoGroup);

    // Legs
    const leftLegPivot = new THREE.Group();
    leftLegPivot.position.set(0.16, 0.95, 0);
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.72, 12), denimPantsMat);
    legL.position.y = -0.36;
    leftLegPivot.add(legL);

    const shoeL = new THREE.Group();
    shoeL.position.set(0, -0.76, 0.08);
    shoeL.add(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.36), whiteShoeMat));
    const upperL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), blueShirtMat);
    upperL.position.set(0, 0.08, -0.02);
    shoeL.add(upperL);
    leftLegPivot.add(shoeL);
    character.add(leftLegPivot);

    const rightLegPivot = new THREE.Group();
    rightLegPivot.position.set(-0.16, 0.95, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.72, 12), denimPantsMat);
    legR.position.y = -0.36;
    rightLegPivot.add(legR);

    const shoeR = new THREE.Group();
    shoeR.position.set(0, -0.76, 0.08);
    shoeR.add(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.36), whiteShoeMat));
    const upperR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.28), blueShirtMat);
    upperR.position.set(0, 0.08, -0.02);
    shoeR.add(upperR);
    rightLegPivot.add(shoeR);
    character.add(rightLegPivot);

    character.userData = {
      torsoGroup,
      leftArmPivot,
      rightArmPivot,
      leftLegPivot,
      rightLegPivot,
      phoneProp,
      walkPhase: 0,
      radius: 0.5
    };

    return character;
  }

  // 2. Seated Pixar Rider Model Mounted on Scooter
  static createSeatedRider() {
    const rider = new THREE.Group();
    rider.name = "SeatedRider";

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c096, roughness: 0.5 });
    const blueShirtMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.65 });
    const denimPantsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.4 });
    const whiteShoeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    // Torso sitting on seat (x = -0.2, y = 1.34)
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.26, 0.58, 16), blueShirtMat);
    torso.position.set(-0.2, 1.32, 0);
    torso.rotation.z = -0.15; // Leaning slightly forward towards handlebar
    rider.add(torso);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(-0.1, 1.82, 0);

    const headGeo = new THREE.SphereGeometry(0.32, 22, 22);
    headGeo.scale(1.0, 1.08, 1.0);
    const head = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.35, 18, 18, 0, Math.PI * 2, 0, Math.PI * 0.65), hairMat);
    hair.position.set(0, 0.08, -0.04);
    headGroup.add(hair);

    const quiff = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.32, 8), hairMat);
    quiff.rotation.set(-0.4, 0, 0.6);
    quiff.position.set(0.12, 0.3, 0.22);
    headGroup.add(quiff);

    // Expressive cartoon eyes facing forward (+X)
    [-0.12, 0.12].forEach(eyeZ => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 14), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      eye.scale.set(0.5, 1, 1);
      eye.position.set(0.26, 0.06, eyeZ);
      headGroup.add(eye);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), new THREE.MeshBasicMaterial({ color: 0x0284c7 }));
      pupil.position.set(0.3, 0.06, eyeZ);
      headGroup.add(pupil);

      const hl = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      hl.position.set(0.32, 0.08, eyeZ + 0.015);
      headGroup.add(hl);

      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.025, 0.11), hairMat);
      brow.position.set(0.25, 0.14, eyeZ);
      headGroup.add(brow);
    });

    // Button nose & smile
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), skinMat);
    nose.position.set(0.32, -0.02, 0);
    headGroup.add(nose);

    const smile = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 6, 12, Math.PI), new THREE.MeshBasicMaterial({ color: 0x831843 }));
    smile.position.set(0.28, -0.12, 0);
    smile.rotation.y = Math.PI / 2;
    headGroup.add(smile);

    rider.add(headGroup);

    // Arms reaching forward to grip the handlebars (Handlebar at x = 0.75, y = 1.58)
    [-0.32, 0.32].forEach(armZ => {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.75, 8), blueShirtMat);
      arm.position.set(0.25, 1.48, armZ);
      arm.rotation.set(0, 0, -1.05); // Angled forward to handlebar grips
      rider.add(arm);

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), skinMat);
      hand.position.set(0.68, 1.56, armZ);
      rider.add(hand);
    });

    // Seated bent legs resting on floorboard
    [-0.22, 0.22].forEach(legZ => {
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.18, 0.18), denimPantsMat);
      thigh.position.set(0.12, 1.02, legZ);
      rider.add(thigh);

      const shin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), denimPantsMat);
      shin.position.set(0.38, 0.72, legZ);
      rider.add(shin);

      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.1, 0.18), whiteShoeMat);
      shoe.position.set(0.42, 0.44, legZ);
      rider.add(shoe);
    });

    return rider;
  }

  // 3. Dazed Character after Accident (Sitting on road with spinning stars)
  static createDazedCharacter() {
    const group = new THREE.Group();
    group.name = "DazedAccidentCharacter";

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c096, roughness: 0.5 });
    const blueShirtMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.65 });
    const denimPantsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.4 });
    const whiteShoeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const starMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });

    // Torso sitting tilted on ground
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.26, 0.6, 16), blueShirtMat);
    torso.position.set(0, 0.45, 0);
    torso.rotation.z = 0.25; // Slumped back
    group.add(torso);

    // Head tilted
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 20), skinMat);
    head.position.set(-0.1, 0.95, 0);
    head.rotation.z = 0.3;
    group.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.65), hairMat);
    hair.position.set(-0.1, 1.02, -0.04);
    group.add(hair);

    // Comic Dizzy Swirly Eyes (Crosses: + +)
    const eyeCrossMat = new THREE.MeshBasicMaterial({ color: 0x18181b });
    [-0.1, 0.1].forEach(eZ => {
      const bar1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), eyeCrossMat);
      bar1.position.set(0.22, 0.98, eZ);
      bar1.rotation.y = Math.PI / 2;
      bar1.rotation.z = Math.PI / 4;
      group.add(bar1);

      const bar2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), eyeCrossMat);
      bar2.position.set(0.22, 0.98, eZ);
      bar2.rotation.y = Math.PI / 2;
      bar2.rotation.z = -Math.PI / 4;
      group.add(bar2);
    });

    // Dazed open mouth "O"
    const mouthO = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.02, 6, 12), new THREE.MeshBasicMaterial({ color: 0x831843 }));
    mouthO.position.set(0.22, 0.82, 0);
    mouthO.rotation.y = Math.PI / 2;
    group.add(mouthO);

    // Arm rubbing head in pain
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.5, 8), blueShirtMat);
    armL.position.set(0.12, 0.8, 0.25);
    armL.rotation.set(0.8, 0, -1.1);
    group.add(armL);

    // Outstretched legs on the road
    [-0.2, 0.2].forEach(lZ => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.16), denimPantsMat);
      leg.position.set(0.4, 0.12, lZ);
      leg.rotation.z = -0.15;
      group.add(leg);

      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.16), whiteShoeMat);
      shoe.position.set(0.75, 0.15, lZ);
      group.add(shoe);
    });

    // Halo of 3 Spinning Yellow Stars above head
    const starsOrbit = new THREE.Group();
    starsOrbit.name = "StarsOrbit";
    starsOrbit.position.set(-0.1, 1.45, 0);
    for (let s = 0; s < 3; s++) {
      const angle = (s / 3) * Math.PI * 2;
      const star = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.16, 5), starMat);
      star.position.set(Math.cos(angle) * 0.45, 0, Math.sin(angle) * 0.45);
      starsOrbit.add(star);
    }
    group.add(starsOrbit);

    group.userData = { starsOrbit };
    return group;
  }

  // 3. Vintage Classic Scooter (Bajaj Chetak Style) with Real Fallen Pose & Detailed Wheels/Seat
  static createVintageScooter() {
    const group = new THREE.Group();
    group.name = "VintageScooter";

    const paintMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, roughness: 0.35, metalness: 0.2 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.1, metalness: 0.9 });
    const rubberMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.85 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.25, metalness: 0.85 });
    const hubMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.7 });
    const seatLeatherMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.6 });
    const seatTanMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.65 });
    const seamPipingMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const brickMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.9 });

    // Floorboard & Chassis
    const floor = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.14, 0.76), paintMat);
    floor.position.set(0, 0.35, 0);
    floor.castShadow = true;
    group.add(floor);

    // Rubber Grip Strips on Floorboard
    [-0.2, 0, 0.2].forEach(fz => {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.03, 0.05), rubberMat);
      strip.position.set(0.1, 0.43, fz);
      group.add(strip);
    });

    // Front Apron / Legshield
    const apron = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.28, 0.98), paintMat);
    apron.position.set(0.85, 0.95, 0);
    apron.rotation.z = -0.14;
    apron.castShadow = true;
    group.add(apron);

    // Front Mudguard
    const mud = new THREE.Mesh(new THREE.SphereGeometry(0.44, 18, 14, 0, Math.PI), paintMat);
    mud.position.set(0.95, 0.55, 0);
    mud.rotation.x = Math.PI / 2;
    group.add(mud);

    // Chrome Bezel Headlight
    const headlightBezel = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.06, 20), chromeMat);
    headlightBezel.rotation.z = Math.PI / 2;
    headlightBezel.position.set(1.02, 1.55, 0);
    group.add(headlightBezel);

    const headlightLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.12, 20),
      new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xfef08a, emissiveIntensity: 0.85 })
    );
    headlightLens.rotation.z = Math.PI / 2;
    headlightLens.position.set(1.04, 1.55, 0);
    group.add(headlightLens);

    // Rearview Mirrors
    [-0.40, 0.40].forEach(mZ => {
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.35, 8), chromeMat);
      rod.position.set(0.72, 1.75, mZ);
      rod.rotation.z = 0.2;
      group.add(rod);

      const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.02, 16), chromeMat);
      mirror.rotation.x = Math.PI / 2;
      mirror.position.set(0.75, 1.92, mZ);
      group.add(mirror);
    });

    // Handlebar & Grips
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.18, 12), chromeMat);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0.75, 1.58, 0);
    group.add(handle);

    [-0.56, 0.56].forEach(gZ => {
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.14, 12), rubberMat);
      grip.rotation.x = Math.PI / 2;
      grip.position.set(0.75, 1.58, gZ);
      group.add(grip);
    });

    // --- REAR BODY & ENGINE COWL (Bajaj Chetak Iconic Full-Body Contours) ---
    // 1. Central Body Core: Solidly connects floorboard (y=0.42) to underside of seat (y=0.88) with ZERO gap!
    const bodyCore = new THREE.Mesh(new THREE.BoxGeometry(1.28, 0.46, 0.52), paintMat);
    bodyCore.position.set(-0.30, 0.65, 0);
    bodyCore.castShadow = true;
    group.add(bodyCore);

    // 2. Sculpted Bulbous Engine Cowls (Curved Chetak Side Pods covering rear mechanics)
    const cowlGeo = new THREE.SphereGeometry(0.52, 24, 20);
    cowlGeo.scale(1.26, 0.78, 0.82);
    const cowl = new THREE.Mesh(cowlGeo, paintMat);
    cowl.position.set(-0.34, 0.64, 0);
    cowl.castShadow = true;
    group.add(cowl);

    // Rear curved inner mudguard arch
    const rearFender = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.32, 16, 1, true, 0, Math.PI), paintMat);
    rearFender.rotation.z = Math.PI / 2;
    rearFender.rotation.y = Math.PI / 2;
    rearFender.position.set(-0.76, 0.40, 0);
    group.add(rearFender);

    // --- CURVED BAJAJ CHETAK DUAL-TONE SEAT (Flush on top of body: base at y=0.88, cushion at y=0.96) ---
    const seatGroup = new THREE.Group();
    seatGroup.position.set(-0.20, 0.96, 0);

    // Main contoured seat cushion
    const seatBase = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.16, 0.56), seatLeatherMat);
    seatBase.castShadow = true;
    seatGroup.add(seatBase);

    // Raised pillion contour at back
    const seatBack = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.52), seatTanMat);
    seatBack.position.set(-0.28, 0.08, 0);
    seatGroup.add(seatBack);

    // Golden Piping Seam Edge around seat
    const piping = new THREE.Mesh(new THREE.BoxGeometry(1.26, 0.02, 0.58), seamPipingMat);
    piping.position.y = 0.01;
    seatGroup.add(piping);

    // Chrome Pillion Grab-Rail (Iconic Chetak handle securely hugging the rear of seat)
    const grabRail = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.022, 8, 22, Math.PI), chromeMat);
    grabRail.rotation.y = Math.PI / 2;
    grabRail.rotation.x = Math.PI / 2;
    grabRail.position.set(-0.62, 0.04, 0);
    seatGroup.add(grabRail);

    // Solid chrome mounting brackets anchoring handle directly into seat metal base
    [-0.22, 0.22].forEach(gz => {
      const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.035, 0.03), chromeMat);
      bracket.position.set(-0.58, 0.02, gz);
      seatGroup.add(bracket);
    });

    group.add(seatGroup);

    // --- WHEEL FACTORY (PREVENT TYRE SINKING: Bottom of tyre touches y = 0.00 exactly) ---
    // Outer radius = 0.24 + 0.10 = 0.34m, so wheel center y = 0.34m -> tyre bottom = 0.00m!
    const createVisibleWheel = (xPos) => {
      const wGroup = new THREE.Group();
      wGroup.position.set(xPos, 0.34, 0);

      // Deep Black Rubber Tyre
      const tyre = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.10, 16, 28), rubberMat);
      wGroup.add(tyre);

      // Metallic Split Alloy Rim
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.14, 18), rimMat);
      rim.rotation.x = Math.PI / 2;
      wGroup.add(rim);

      // Center Chrome Hubcap
      const hubL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10, 0, Math.PI), chromeMat);
      hubL.rotation.y = Math.PI / 2;
      hubL.position.z = 0.07;
      wGroup.add(hubL);

      const hubR = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10, 0, Math.PI), chromeMat);
      hubR.rotation.y = -Math.PI / 2;
      hubR.position.z = -0.07;
      wGroup.add(hubR);

      // Orange Brake Drum Accent
      const brakeDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.15, 12), hubMat);
      brakeDrum.rotation.x = Math.PI / 2;
      wGroup.add(brakeDrum);

      return wGroup;
    };

    // FRONT WHEEL: at x = 0.95
    const fw = createVisibleWheel(0.95);
    group.add(fw);

    // REAR WHEEL: perfectly centered on rear axle at x = -0.76 (CLEARLY VISIBLE OUTSIDE BODY)
    const rw = createVisibleWheel(-0.76);
    group.add(rw);

    // --- EXTERNAL REAR TAIL RACK & STEPNEY (SPARE WHEEL) ---
    // Mounted completely externally behind the rear body shell on a chrome tubular carrier
    const rackGroup = new THREE.Group();
    rackGroup.position.set(-1.08, 0.68, 0);

    // Chrome Carrier Bars extending from chassis to spare wheel
    [-0.12, 0.12].forEach(rz => {
      const rackBar = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.30, 8), chromeMat);
      rackBar.rotation.z = Math.PI / 3;
      rackBar.position.set(-0.06, 0.04, rz);
      rackGroup.add(rackBar);
    });

    // Stepney / Spare Wheel mounted externally on carrier
    const spareTyre = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.09, 14, 24), rubberMat);
    spareTyre.rotation.y = Math.PI / 2;
    spareTyre.position.set(-0.20, 0.06, 0);
    rackGroup.add(spareTyre);

    const spareRim = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.10, 16), rimMat);
    spareRim.rotation.z = Math.PI / 2;
    spareRim.position.set(-0.20, 0.06, 0);
    rackGroup.add(spareRim);

    group.add(rackGroup);

    // Chrome Exhaust Pipe (Tucked neatly below engine on right side)
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.85, 10), chromeMat);
    exhaust.rotation.z = Math.PI / 2;
    exhaust.position.set(-1.05, 0.22, -0.32);
    group.add(exhaust);

    // --- BROKEN KICKSTAND VISUAL DETAIL ---
    const standGroup = new THREE.Group();
    standGroup.name = "BrokenKickstand";
    standGroup.position.set(-0.05, 0.26, 0);

    // Mount bracket
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.28), chromeMat);
    standGroup.add(bracket);

    // Broken dangling stand rod (snapped off at jagged angle)
    const danglingRod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.22, 8), chromeMat);
    danglingRod.rotation.z = 0.7;
    danglingRod.rotation.x = 0.4;
    danglingRod.position.set(-0.04, -0.10, -0.10);
    standGroup.add(danglingRod);

    // Exposed fractured red metal tip
    const fractureTip = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 0.025), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    fractureTip.position.set(-0.12, -0.18, -0.15);
    standGroup.add(fractureTip);

    group.add(standGroup);

    // --- BRICK JUGAAD PROP MESH (Visible when stand is fixed with brick) ---
    const brickSupport = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.34, 0.34), brickMat);
    brickSupport.name = "BrickPropSupport";
    brickSupport.position.set(-0.42, 0.17, -0.42);
    brickSupport.rotation.y = 0.25;
    brickSupport.visible = false; // Initially hidden, turns true when Jugaad applied
    group.add(brickSupport);

    // ATTACH SEATED PIXAR RIDER (Hidden when not riding)
    const rider = AssetFactory.createSeatedRider();
    rider.name = "ScooterRiderMesh";
    rider.visible = false;
    group.add(rider);

    // Method to apply authentic ground fallen pose vs upright driving pose
    const setFallenState = (isFallen) => {
      if (isFallen) {
        // Naturally resting on road asphalt on its side cowl
        group.position.y = 0.22;
        group.rotation.set(0.18, 0, -1.35);
        brickSupport.visible = false;
        rider.visible = false;
      } else {
        // Upright supported by brick / kickstand
        group.position.y = 0;
        group.rotation.set(0, 0, 0);
        brickSupport.visible = true;
      }
    };

    group.userData = {
      frontWheel: fw,
      rearWheel: rw,
      riderMesh: rider,
      brickSupport,
      standGroup,
      setFallenState,
      exhaustPos: new THREE.Vector3(-1.48, 0.28, -0.32),
      radius: 1.2
    };

    return group;
  }

  // 4. Cute Cartoon Cow (Gau Mata) with Connected Leg Joints & Expressive Face
  static createCartoonCow() {
    const cowGroup = new THREE.Group();
    cowGroup.name = "CartoonCow";

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.7 });
    const spotMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.85 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.55 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.35, metalness: 0.2 });
    const collarMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.6 });
    const bellMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.75, roughness: 0.2 });
    const hoofMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.75 });

    // Main Body
    const bodyGeo = new THREE.SphereGeometry(0.72, 24, 20);
    bodyGeo.scale(1.42, 1.05, 1.05);
    const body = new THREE.Mesh(bodyGeo, whiteMat);
    body.position.set(0, 0.90, 0);
    body.castShadow = true;
    cowGroup.add(body);

    // Natural Cow Patches / Spots
    const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 12), spotMat);
    s1.scale.set(1.2, 0.8, 0.2);
    s1.position.set(-0.35, 1.15, 0.65);
    cowGroup.add(s1);

    const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 12), spotMat);
    s2.scale.set(1.1, 0.9, 0.2);
    s2.position.set(0.30, 0.90, -0.65);
    cowGroup.add(s2);

    // Auspicious Red Ribbon Collar with Golden Brass Bell
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.06, 8, 20), collarMat);
    collar.position.set(0.70, 1.12, 0);
    collar.rotation.y = Math.PI / 2;
    cowGroup.add(collar);

    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 0.16, 12), bellMat);
    bell.position.set(0.74, 0.74, 0);
    cowGroup.add(bell);

    // Head Group facing forward (+X)
    const headGroup = new THREE.Group();
    headGroup.position.set(1.02, 1.35, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.46, 22, 22), whiteMat);
    head.scale.set(1.05, 1.10, 0.95);
    head.castShadow = true;
    headGroup.add(head);

    // Cute Dark Patch on one eye
    const eyePatch = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), spotMat);
    eyePatch.scale.set(0.8, 1.0, 0.4);
    eyePatch.position.set(0.12, 0.18, 0.30);
    headGroup.add(eyePatch);

    // Big Cute Cartoon Eyes
    [-0.20, 0.20].forEach(eyeZ => {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.10, 14, 14), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      sclera.position.set(0.28, 0.14, eyeZ);
      headGroup.add(sclera);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 10), new THREE.MeshBasicMaterial({ color: 0x1c1917 }));
      pupil.position.set(0.34, 0.14, eyeZ);
      headGroup.add(pupil);

      const glint = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      glint.position.set(0.36, 0.16, eyeZ + 0.02);
      headGroup.add(glint);
    });

    // Friendly Pink Muzzle / Snout
    const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.32, 18, 16), pinkMat);
    muzzle.scale.set(1.15, 0.72, 1.12);
    muzzle.position.set(0.42, -0.14, 0);
    headGroup.add(muzzle);

    // Dark Nostrils
    [-0.10, 0.10].forEach(nZ => {
      const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0x374151 }));
      nostril.position.set(0.72, -0.10, nZ);
      headGroup.add(nostril);
    });

    // Golden Curved Horns
    [-0.24, 0.24].forEach((hZ, i) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.32, 10), hornMat);
      horn.position.set(-0.06, 0.50, hZ);
      horn.rotation.z = -0.35;
      horn.rotation.x = i === 0 ? -0.35 : 0.35;
      headGroup.add(horn);

      // Drooping Cute Ears
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.38, 8), whiteMat);
      ear.scale.set(1.1, 1, 0.4);
      ear.position.set(-0.14, 0.22, hZ * 1.4);
      ear.rotation.set(i === 0 ? -1.1 : 1.1, 0, -0.3);
      headGroup.add(ear);
    });

    cowGroup.add(headGroup);

    // --- 4 SOLID LEGS WITH INTEGRATED SHOULDER/HIP JOINTS (NO FLOATING STICKS) ---
    [
      [0.62, 0.54],   // Front Right
      [0.62, -0.54],  // Front Left
      [-0.62, 0.54],  // Rear Right
      [-0.62, -0.54]  // Rear Left
    ].forEach(([lx, lz]) => {
      const legGroup = new THREE.Group();
      legGroup.position.set(lx, 0, lz);

      // Anatomical rounded shoulder/hip joint connecting leg seamlessly into body
      const joint = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), whiteMat);
      joint.position.y = 0.65;
      legGroup.add(joint);

      // Main upper leg
      const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.48, 12), whiteMat);
      legMesh.position.y = 0.38;
      legMesh.castShadow = true;
      legGroup.add(legMesh);

      // Dark brown hoof resting firmly on ground (y = 0.0)
      const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.14, 12), hoofMat);
      hoof.position.y = 0.07;
      legGroup.add(hoof);

      cowGroup.add(legGroup);
    });

    // Animated Wagging Tail
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-1.0, 0.85, 0);
    const tailMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.72, 8), whiteMat);
    tailMesh.position.y = -0.32;
    tailMesh.rotation.z = 0.22;
    tailGroup.add(tailMesh);
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.24, 8), spotMat);
    tuft.position.set(0.14, -0.70, 0);
    tailGroup.add(tuft);
    cowGroup.add(tailGroup);

    cowGroup.userData = {
      headGroup,
      tailGroup,
      isDistracted: false,
      state: "sitting",
      radius: 1.4
    };

    return cowGroup;
  }

  // 5. Realistic 3D Excavated Chasm & Deep Road Pit (True 3D Void, Depth = -2.2m)
  static createRoadTrench() {
    const trenchGroup = new THREE.Group();
    trenchGroup.name = "RoadExcavationTrench";

    const pitBottomMat = new THREE.MeshStandardMaterial({ color: 0x221711, roughness: 0.98 });
    const mudPuddleMat = new THREE.MeshStandardMaterial({ color: 0x140e0b, roughness: 0.15, metalness: 0.3 });
    const earthWallMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.95 });
    const asphaltCrustMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.9 });
    const stoneStrataMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.85 });
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, metalness: 0.65, roughness: 0.35 });
    const pipeBandMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.3 });
    const rebarMat = new THREE.MeshStandardMaterial({ color: 0x78350f, metalness: 0.7, roughness: 0.4 });
    const gravelMat = new THREE.MeshStandardMaterial({ color: 0x44403c, roughness: 0.95 });
    const coneOrangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.4 });
    const coneWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });

    // --- A. DEEP PIT FLOOR AT y = -2.2m (3.6m wide along X, 7.2m across Z) ---
    const pitFloor = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.3, 7.2), pitBottomMat);
    pitFloor.position.set(0, -2.35, 0);
    pitFloor.receiveShadow = true;
    trenchGroup.add(pitFloor);

    // Muddy water puddle in the bottom
    const puddle = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 4.8), mudPuddleMat);
    puddle.rotation.x = -Math.PI / 2;
    puddle.position.set(0.1, -2.19, 0);
    puddle.receiveShadow = true;
    trenchGroup.add(puddle);

    // --- B. VERTICAL EXCAVATION WALLS WITH GEOLOGICAL STRATA ---
    [-1, 1].forEach(side => {
      const wallX = side * 1.8;

      // Bottom red clay/mud layer (y: -2.2 to -0.4)
      const clayWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.8, 7.2), earthWallMat);
      clayWall.position.set(wallX, -1.3, 0);
      clayWall.receiveShadow = true;
      trenchGroup.add(clayWall);

      // Sub-base gravel/aggregate layer (y: -0.4 to -0.15)
      const stoneWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 7.2), stoneStrataMat);
      stoneWall.position.set(wallX, -0.275, 0);
      stoneWall.receiveShadow = true;
      trenchGroup.add(stoneWall);

      // Top asphalt crust layer (y: -0.15 to 0.0)
      const asphaltLip = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 7.2), asphaltCrustMat);
      asphaltLip.position.set(wallX, -0.075, 0);
      asphaltLip.receiveShadow = true;
      trenchGroup.add(asphaltLip);

      // --- C. JAGGED BROKEN ASPHALT EDGES & PROTRUDING CHUNKS ---
      for (let z = -3.2; z <= 3.2; z += 0.45) {
        const chunkLen = 0.2 + (Math.sin(z * 4.2 + side) * 0.5 + 0.5) * 0.35;
        const chunkGeo = new THREE.BoxGeometry(chunkLen, 0.14, 0.4);
        const chunk = new THREE.Mesh(chunkGeo, asphaltCrustMat);
        // Jutting inwards into the void
        chunk.position.set(wallX - side * (chunkLen / 2 - 0.05), -0.07, z + (Math.random() - 0.5) * 0.1);
        chunk.rotation.y = (Math.random() - 0.5) * 0.2;
        chunk.castShadow = true;
        trenchGroup.add(chunk);
      }
    });

    // --- D. NORTH & SOUTH PIT RETAINING WALLS (Seals pit so no yellow background shines through) ---
    const sideWallN = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 0.3), earthWallMat);
    sideWallN.position.set(0, -1.2, -3.55);
    sideWallN.receiveShadow = true;
    trenchGroup.add(sideWallN);

    const sideWallS = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 0.3), earthWallMat);
    sideWallS.position.set(0, -1.2, 3.55);
    sideWallS.receiveShadow = true;
    trenchGroup.add(sideWallS);

    // --- E. REAL BLUE WATER SURFACE AT ACTUAL PIT BOTTOM (y = -2.18) ---
    const waterGeo = new THREE.PlaneGeometry(3.55, 6.95);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.45,
      transparent: true,
      opacity: 0.82
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -2.18, 0);
    water.receiveShadow = true;
    trenchGroup.add(water);

    // --- F. RUBBLE HEAPS, CONCRETE BLOCKS & STONES IN PIT BOTTOM ---
    for (let i = 0; i < 35; i++) {
      const gX = (Math.random() - 0.5) * 3.0;
      const gZ = (Math.random() - 0.5) * 6.5;
      const isBlock = i % 4 === 0;
      const rockGeo = isBlock
        ? new THREE.BoxGeometry(0.35 + Math.random() * 0.3, 0.25 + Math.random() * 0.2, 0.35 + Math.random() * 0.3)
        : new THREE.DodecahedronGeometry(0.15 + Math.random() * 0.2);
      const rock = new THREE.Mesh(rockGeo, isBlock ? stoneStrataMat : gravelMat);
      rock.position.set(gX, -2.15 + Math.random() * 0.15, gZ);
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rock.castShadow = true;
      rock.receiveShadow = true;
      trenchGroup.add(rock);
    }

    // Pickaxe embedded in dirt heap at bottom
    const pickHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0x78350f }));
    pickHandle.position.set(0.7, -1.6, 1.3);
    pickHandle.rotation.set(0.2, 0, -0.4);
    trenchGroup.add(pickHandle);

    const pickHead = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.5, 6), new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.85 }));
    pickHead.position.set(0.95, -1.1, 1.4);
    pickHead.rotation.z = Math.PI / 2;
    trenchGroup.add(pickHead);

    // --- F. SURFACE TRAFFIC WARNING CONES ON BOTH ROAD EDGES ---
    [
      [-1.95, -3.1], [-1.95, 3.1],
      [1.95, -3.1], [1.95, 3.1]
    ].forEach(([cx, cz]) => {
      const coneGroup = new THREE.Group();
      coneGroup.position.set(cx, 0, cz);

      // Base
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.42), coneOrangeMat);
      base.position.y = 0.025;
      coneGroup.add(base);

      // Orange cone
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 14), coneOrangeMat);
      cone.position.y = 0.35;
      coneGroup.add(cone);

      // Reflective white stripe
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.14, 0.18, 14), coneWhiteMat);
      stripe.position.y = 0.36;
      coneGroup.add(stripe);

      trenchGroup.add(coneGroup);
    });

    return trenchGroup;
  }

  // --- PUZZLE ITEMS ---
  static createBrick() {
    const group = new THREE.Group();
    group.name = "Item_Brick";
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.35), new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.9 }));
    mesh.position.y = 0.175;
    mesh.castShadow = true;
    group.add(mesh);
    group.userData = { type: 'brick', isCorrect: true, title: 'Laal Eent (Heavy Brick)' };
    return group;
  }

  static createBroom() {
    const group = new THREE.Group();
    group.name = "Item_Broom";

    const woodMat = new THREE.MeshStandardMaterial({ color: 0xa16207, roughness: 0.8 });
    const strawMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.95 });
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 });

    // Straight Bamboo Handle lying along X-axis
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.05, 8), woodMat);
    handle.rotation.z = Math.PI / 2;
    handle.position.set(-0.15, 0.06, 0);
    handle.castShadow = true;
    group.add(handle);

    // Natural bound straw bristles bundle extending from the handle along X-axis
    const bristles = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.48, 12), strawMat);
    bristles.rotation.z = -Math.PI / 2;
    bristles.position.set(0.54, 0.06, 0);
    bristles.castShadow = true;
    group.add(bristles);

    // Metal / Twine binding collars wrapping around the straw base
    [-0.04, 0.04].forEach(offX => {
      const binding = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.04, 12), wireMat);
      binding.rotation.z = Math.PI / 2;
      binding.position.set(0.34 + offX, 0.06, 0);
      group.add(binding);
    });

    group.userData = {
      type: 'broom',
      isCorrect: false,
      title: 'Purani Jhadu (Broom)',
      rejectMsg: '⚠️ CRACK! Jhadu toot gayi — Scooter ka wazan nahi sambhal payi!'
    };
    return group;
  }

  static createPlasticBottle() {
    const group = new THREE.Group();
    group.name = "Item_Bottle";
    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.45, 10), new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 }));
    bottle.rotation.z = Math.PI / 2;
    bottle.position.y = 0.1;
    group.add(bottle);
    group.userData = { type: 'bottle', isCorrect: false, title: 'Plastic Bottle', rejectMsg: 'Plastic bottle se scooter ka bojh kaise rukega? Dab jayegi!' };
    return group;
  }

  // 4.2m Heavy Timber Plank Bridge (Spans across 3.6m chasm from Platform 1 to Platform 2)
  static createTimberPlank() {
    const group = new THREE.Group();
    group.name = "Item_Plank";

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.85 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, metalness: 0.8, roughness: 0.3 });

    // 4 thick timber balks side-by-side (Length: 4.2m, Total Width: 1.8m, Thickness: 0.18m)
    for (let i = 0; i < 4; i++) {
      const balkZ = -0.675 + i * 0.45;
      const balk = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.18, 0.42), woodMat);
      balk.position.set(0, 0.09, balkZ);
      balk.castShadow = true;
      balk.receiveShadow = true;
      group.add(balk);
    }

    // Steel tie-plates and cross braces on both ends
    [-1.9, 1.9, 0].forEach(bx => {
      const tiePlate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.20, 1.84), steelMat);
      tiePlate.position.set(bx, 0.095, 0);
      group.add(tiePlate);
    });

    group.userData = {
      type: 'plank',
      isCorrect: true,
      title: 'Bhari Lakdi ka Phatta (Timber Plank Bridge)',
      widthZ: 1.8,
      lengthX: 4.2
    };
    return group;
  }

  static createCardboard() {
    const group = new THREE.Group();
    group.name = "Item_Cardboard";
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 1.4), new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.9 }));
    mesh.position.y = 0.02;
    group.add(mesh);
    group.userData = { type: 'cardboard', isCorrect: false, title: 'Patla Gatta (Cardboard)', rejectMsg: 'Yeh patla gatta gaddhe par rakha toh scooter seedha kichad me dhas jayegi! Bhari lakdi ka phatta dalo!' };
    return group;
  }

  static createGrassRotiBasket() {
    const group = new THREE.Group();
    group.name = "Item_Grass";
    const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.35, 0.3, 14), new THREE.MeshStandardMaterial({ color: 0x78350f }));
    basket.position.y = 0.15;
    group.add(basket);

    const grass = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), new THREE.MeshStandardMaterial({ color: 0x16a34a }));
    grass.position.y = 0.28;
    group.add(grass);

    const roti = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 12), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
    roti.position.set(0.05, 0.42, 0.05);
    group.add(roti);

    group.userData = { type: 'grass', isCorrect: true, title: 'Taazi Ghaas & Garma-Garam Roti' };
    return group;
  }

  static createOldTyre() {
    const group = new THREE.Group();
    group.name = "Item_Tyre";
    const tyre = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.12, 10, 20), new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.9 }));
    tyre.rotation.x = Math.PI / 2;
    tyre.position.y = 0.12;
    group.add(tyre);
    group.userData = { type: 'tyre', isCorrect: false, title: 'Purana Cycle Tyre', rejectMsg: 'Gau Mata tyre dekh kar nahi hilengi miyaan! Unko taazi ghaas ya roti do!' };
    return group;
  }

  // Street Environment & Grand Finish Arch
  static createStreetEnvironment() {
    const envGroup = new THREE.Group();

    // --- 1. TWO SEPARATE SOLID ROAD PLATFORMS WITH REAL 3.6m PHYSICAL VOID CHASM ---
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x292524, roughness: 0.92 });
    const lineWhiteMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });

    // PLATFORM 1: APPROACH ROAD (x: -16.0 to 9.2, Solid elevated road at y = 0.0)
    const roadPlat1 = new THREE.Mesh(new THREE.BoxGeometry(25.2, 0.4, 7.0), asphaltMat);
    roadPlat1.position.set(-3.4, -0.2, 0);
    roadPlat1.receiveShadow = true;
    envGroup.add(roadPlat1);

    // Dashed center road line on Platform 1
    for (let cx = -14; cx <= 7.5; cx += 2.5) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.18), lineWhiteMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(cx, 0.005, 0);
      envGroup.add(dash);
    }

    // PLATFORM 2: DESTINATION ROAD (x: 12.8 to 46.0, Solid elevated road at y = 0.0)
    const roadPlat2 = new THREE.Mesh(new THREE.BoxGeometry(33.2, 0.4, 7.0), asphaltMat);
    roadPlat2.position.set(29.4, -0.2, 0);
    roadPlat2.receiveShadow = true;
    envGroup.add(roadPlat2);

    // Dashed center road line on Platform 2
    for (let cx = 14.5; cx <= 44; cx += 2.5) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.18), lineWhiteMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(cx, 0.005, 0);
      envGroup.add(dash);
    }
    // [REAL 3D VOID]: Between x = 9.2 and x = 12.8 there is NO road floor.
    // The deep chasm descends 2.2 meters down to the mud floor below!

    // Sidewalk
    const walk = new THREE.Mesh(new THREE.BoxGeometry(65, 0.35, 3.5), new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 }));
    walk.position.set(15, 0.08, -5.2);
    walk.receiveShadow = true;
    envGroup.add(walk);

    // Railing
    const rail = new THREE.Mesh(new THREE.BoxGeometry(65, 0.3, 0.4), new THREE.MeshStandardMaterial({ color: 0x475569 }));
    rail.position.set(15, 0.1, 3.6);
    envGroup.add(rail);

    // Buildings along the street
    const bColors = [0xfef08a, 0xfca5a5, 0x93c5fd, 0x86efac, 0xfde047, 0xf9a8d4];
    for (let i = 0; i < 9; i++) {
      // Reserve dedicated space at x = -6.0 for Chacha's Ancestral Home!
      if (i === 1) continue;

      const bMesh = new THREE.Mesh(new THREE.BoxGeometry(6.0, 7.0 + (i % 3) * 2, 4.0), new THREE.MeshStandardMaterial({ color: bColors[i % bColors.length], roughness: 0.85 }));
      bMesh.position.set(-10 + i * 6.8, (7.0 + (i % 3) * 2) / 2, -7.2);
      bMesh.castShadow = true;
      envGroup.add(bMesh);

      const balc = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.8, 0.8), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
      balc.position.set(-10 + i * 6.8, 3.5, -5.0);
      envGroup.add(balc);
    }

    // Chai Stall (with authentic 4 support pillars holding up the blue canopy roof)
    const stallGroup = new THREE.Group();
    stallGroup.position.set(2, 0.2, -4.0);
    const stall = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.1, 1.4), new THREE.MeshStandardMaterial({ color: 0x9a3412 }));
    stall.position.y = 0.55;
    stallGroup.add(stall);

    const kettle = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.45, 14), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.75, roughness: 0.2 }));
    kettle.position.set(0.6, 1.32, 0);
    stallGroup.add(kettle);

    // 4 Solid Bamboo / Timber Support Pillars holding up the roof
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
    [
      [-1.25, -0.60],
      [1.25, -0.60],
      [-1.25, 0.60],
      [1.25, 0.60]
    ].forEach(([px, pz]) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.5, 8), poleMat);
      pole.position.set(px, 1.25, pz);
      pole.castShadow = true;
      stallGroup.add(pole);
    });

    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 0.7, 4), new THREE.MeshStandardMaterial({ color: 0x2563eb }));
    roof.position.set(0, 2.6, 0);
    roof.rotation.y = Math.PI / 4;
    stallGroup.add(roof);
    envGroup.add(stallGroup);

    // Lamp Posts
    for (let x = -8; x <= 38; x += 12) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.5, 8), new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8 }));
      pole.position.set(x, 2.25, -3.8);
      envGroup.add(pole);

      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
      lamp.position.set(x, 4.4, -3.6);
      envGroup.add(lamp);

      const light = new THREE.PointLight(0xfde047, 1.2, 10);
      light.position.set(x, 4.2, -3.4);
      envGroup.add(light);
    }

    // --- SHEESH MAHAL: COMPACT ROYAL PALACE WEDDING FACADE (x = 42.0, Height = 3.8m) ---
    const sheeshMahal = new THREE.Group();
    sheeshMahal.name = "SheeshMahalWeddingVenue";
    sheeshMahal.position.set(42.0, 0, 0);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.65, metalness: 0.15 });
    const trimGoldMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.35, metalness: 0.6 });
    const royalRedMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.6 });
    const carpetMat = new THREE.MeshStandardMaterial({ color: 0x881337, roughness: 0.8 });

    // 1. Red Carpet centered on road leading straight through the gate
    const redCarpet = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 2.8), carpetMat);
    redCarpet.rotation.x = -Math.PI / 2;
    redCarpet.position.set(-0.2, 0.015, 0);
    redCarpet.receiveShadow = true;
    sheeshMahal.add(redCarpet);

    [-1.4, 1.4].forEach(cz => {
      const border = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 0.14), trimGoldMat);
      border.rotation.x = -Math.PI / 2;
      border.position.set(-0.2, 0.02, cz);
      sheeshMahal.add(border);
    });

    // 2. Palace Sandstone Facade Wall (Height: 3.8m, Width: 8.6m)
    // Left Wing Wall (z: -4.3 to -1.45)
    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.38, 3.8, 2.85), stoneMat);
    wallLeft.position.set(0, 1.90, -2.88);
    wallLeft.castShadow = true;
    sheeshMahal.add(wallLeft);

    // Right Wing Wall (z: 1.45 to 4.3)
    const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.38, 3.8, 2.85), stoneMat);
    wallRight.position.set(0, 1.90, 2.88);
    wallRight.castShadow = true;
    sheeshMahal.add(wallRight);

    // Top Arch Lintel above central gate (connecting the two walls at y: 3.0 to 3.8m)
    const archLintel = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.80, 2.9), stoneMat);
    archLintel.position.set(0, 3.40, 0);
    archLintel.castShadow = true;
    sheeshMahal.add(archLintel);

    // Ornamental Palace Cornice / Parapet along the top of wall (y = 3.85m)
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.22, 8.8), trimGoldMat);
    parapet.position.set(0, 3.91, 0);
    sheeshMahal.add(parapet);

    // 3. Decorative Gate Pillars framing the 2.8m central opening
    [-1.45, 1.45].forEach(pz => {
      const pCol = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.20, 3.8, 14), trimGoldMat);
      pCol.position.set(0.04, 1.90, pz);
      pCol.castShadow = true;
      sheeshMahal.add(pCol);

      // Miniature corner decorative chhatri / dome at y = 4.15m
      const chhatri = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.7), trimGoldMat);
      chhatri.position.set(0, 4.15, pz);
      sheeshMahal.add(chhatri);
    });

    // 4. Tasteful Marigold Flower Garlands (Genda Phool) framing the central gate
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.8 });
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.8 });

    // Horizontal garland across the gate top
    for (let gz = -1.35; gz <= 1.35; gz += 0.22) {
      const bead = new THREE.Mesh(new THREE.SphereGeometry(0.075, 6, 6), Math.round(gz * 10) % 2 === 0 ? orangeMat : yellowMat);
      bead.position.set(-0.24, 2.95, gz);
      sheeshMahal.add(bead);
    }
    // Vertical hanging garland strings along both sides of gate
    [-1.42, 1.42].forEach(gz => {
      for (let gy = 0.6; gy <= 2.9; gy += 0.26) {
        const bead = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), Math.round(gy * 10) % 2 === 0 ? orangeMat : yellowMat);
        bead.position.set(-0.24, gy, gz);
        sheeshMahal.add(bead);
      }
    });

    // 5. Wedding Shamiana Canopy behind the gate (x = 1.6, y = 4.1)
    const canopyRoof = new THREE.Mesh(new THREE.ConeGeometry(2.8, 1.1, 4), royalRedMat);
    canopyRoof.position.set(1.6, 4.35, 0);
    canopyRoof.rotation.y = Math.PI / 4;
    sheeshMahal.add(canopyRoof);

    // Warm Festive Fairy Lights
    const fairyLight = new THREE.PointLight(0xfef08a, 1.8, 9.0);
    fairyLight.position.set(-0.2, 3.2, 0);
    sheeshMahal.add(fairyLight);

    // 6. High-Contrast Readable Wedding Signboard (Angled for camera visibility)
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#4a0418';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 16;
    ctx.strokeRect(8, 8, 1008, 240);

    ctx.fillStyle = '#fde047';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 6;
    ctx.font = 'bold 62px sans-serif';
    ctx.textAlign = 'center';
    ctx.strokeText('🌸 SHEESH MAHAL: GUDDU KI BAARAAT 🌸', 512, 102);
    ctx.fillText('🌸 SHEESH MAHAL: GUDDU KI BAARAAT 🌸', 512, 102);

    ctx.fillStyle = '#ffffff';
    ctx.strokeText('★ DULHE KA SEHRA MANDAP ★', 512, 185);
    ctx.fillText('★ DULHE KA SEHRA MANDAP ★', 512, 185);

    const textTex = new THREE.CanvasTexture(canvas);
    const signPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 0.85),
      new THREE.MeshBasicMaterial({ map: textTex, transparent: true })
    );
    // Angled slightly toward camera (+Z) for clear diagonal reading!
    signPlane.rotation.y = -Math.PI / 2 + 0.35;
    signPlane.position.set(-0.25, 3.38, 0.15);
    sheeshMahal.add(signPlane);

    envGroup.add(sheeshMahal);

    return envGroup;
  }

  // 13. Shiny Golden Desi Rupee Coin (Collectible with '₹' symbol)
  static createDesiCoin() {
    const coinGroup = new THREE.Group();
    coinGroup.name = "DesiCoin";

    // Create Canvas Texture with gold rim and Indian Rupee Symbol
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Shiny gold circle background
    const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 120);
    grad.addColorStop(0, '#fef08a');
    grad.addColorStop(0.5, '#f59e0b');
    grad.addColorStop(1, '#b45309');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(128, 128, 120, 0, Math.PI * 2);
    ctx.fill();

    // Concentric gold border
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(128, 128, 108, 0, Math.PI * 2);
    ctx.stroke();

    // Embossed '₹' text
    ctx.font = 'bold 120px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#78350f';
    ctx.fillText('₹', 130, 132);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('₹', 126, 126);

    const coinTex = new THREE.CanvasTexture(canvas);

    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.85,
      roughness: 0.25,
      map: coinTex
    });
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.3
    });

    // Cylinder with custom face materials
    const coinMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.06, 24),
      [edgeMat, coinMat, coinMat]
    );
    coinMesh.rotation.x = Math.PI / 2;
    coinMesh.castShadow = true;
    coinGroup.add(coinMesh);

    // Subtle gentle golden glow pointlight
    const glow = new THREE.PointLight(0xfef08a, 0.8, 2.2);
    glow.position.set(0, 0, 0);
    coinGroup.add(glow);

    coinGroup.userData = {
      isCollected: false,
      initialY: 0.65,
      rotSpeed: 2.8
    };
    coinGroup.position.y = 0.65;

    return coinGroup;
  }

  // 14. Road Excavation Warning Barrier ("SAVDHAN! AAGE GADDHA HAI")
  static createWarningBarrier() {
    const barrier = new THREE.Group();
    barrier.name = "WarningBarrier";

    const postMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const coneOrangeMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5 });
    const whiteStripeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    // 2 Striped Road Cones
    [-1.6, 1.6].forEach(cz => {
      const cone = new THREE.Group();
      cone.position.set(0, 0, cz);

      const base = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.42), postMat);
      base.position.y = 0.025;
      cone.add(base);

      const coneMesh = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 14), coneOrangeMat);
      coneMesh.position.y = 0.35;
      cone.add(coneMesh);

      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.16, 14), whiteStripeMat);
      stripe.position.y = 0.34;
      cone.add(stripe);

      barrier.add(cone);
    });

    // Warning Signboard Banner across road
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Yellow / Black warning diagonal background
    ctx.fillStyle = '#facc15';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#111827';
    ctx.fillRect(10, 10, 492, 108);

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚠️ SAVDHAN! AAGE GADDHA HAI ⚠️', 256, 44);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('ROAD WORK IN PROGRESS (JUGAAD REQUIRED)', 256, 88);

    const signTex = new THREE.CanvasTexture(canvas);
    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.55, 2.8),
      new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.5 })
    );
    signBoard.position.set(0, 0.72, 0);
    barrier.add(signBoard);

    // Two support legs
    [-1.25, 1.25].forEach(lz => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.75, 8), postMat);
      leg.position.set(0, 0.375, lz);
      barrier.add(leg);
    });

    return barrier;
  }

  // 15. Stylized Pixar Indian Chachi (Auntie at Sheesh Mahal talking urgently on phone)
  static createCartoonChachi() {
    const chachi = new THREE.Group();
    chachi.name = "CartoonChachi";

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf3bd94, roughness: 0.5 });
    const sareePinkMat = new THREE.MeshStandardMaterial({ color: 0xdb2777, roughness: 0.65 }); // Royal Magenta Pink
    const blouseMat = new THREE.MeshStandardMaterial({ color: 0x9d174d, roughness: 0.55 });
    const zariGoldMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8, roughness: 0.25 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.4 });
    const gajraWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    // Torso / Saree Drape
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 1.22, 0);

    const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.24, 0.60, 16), blouseMat);
    torsoGroup.add(chest);

    // Diagonal Saree Pallu across chest
    const pallu = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.65, 0.32), sareePinkMat);
    pallu.rotation.z = -0.35;
    pallu.position.set(0.04, 0.02, 0.05);
    torsoGroup.add(pallu);

    // Gold Zari border on pallu
    const palluBorder = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.66, 0.33), zariGoldMat);
    palluBorder.rotation.z = -0.35;
    palluBorder.position.set(0.11, 0.02, 0.05);
    torsoGroup.add(palluBorder);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.12, 0.18, 12), skinMat);
    neck.position.set(0, 0.38, 0);
    torsoGroup.add(neck);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.66, 0);

    const headGeo = new THREE.SphereGeometry(0.32, 22, 22);
    headGeo.scale(1.0, 1.05, 1.0);
    const head = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(head);

    // Neat hair parted in middle
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.35, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.68), hairMat);
    hair.position.set(0, 0.06, -0.04);
    headGroup.add(hair);

    // Traditional Bun (Juda) at back of head
    const juda = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), hairMat);
    juda.position.set(0, -0.05, -0.34);
    headGroup.add(juda);

    // White Jasmine Flower Garland (Gajra) wrapped around Juda
    const gajra = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.04, 8, 16), gajraWhiteMat);
    gajra.position.set(0, -0.05, -0.34);
    headGroup.add(gajra);

    // Traditional Red Bindi on forehead
    const bindi = new THREE.Mesh(new THREE.CircleGeometry(0.025, 12), new THREE.MeshBasicMaterial({ color: 0xbe123c }));
    bindi.position.set(0, 0.11, 0.33);
    headGroup.add(bindi);

    // Expressive cartoon eyes
    [-0.11, 0.11].forEach(eZ => {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      sclera.scale.set(1.0, 1.15, 0.5);
      sclera.position.set(eZ, 0.04, 0.29);
      headGroup.add(sclera);

      const iris = new THREE.Mesh(new THREE.CircleGeometry(0.042, 12), new THREE.MeshBasicMaterial({ color: 0x451a03 }));
      iris.position.set(eZ, 0.04, 0.33);
      headGroup.add(iris);

      const hl = new THREE.Mesh(new THREE.CircleGeometry(0.012, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      hl.position.set(eZ + 0.01, 0.055, 0.332);
      headGroup.add(hl);
    });

    // Gold Jhumka Earrings
    [-0.32, 0.32].forEach(jZ => {
      const stud = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), zariGoldMat);
      stud.position.set(jZ, 0.02, 0);
      headGroup.add(stud);

      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.08, 10), zariGoldMat);
      bell.position.set(jZ, -0.06, 0);
      headGroup.add(bell);
    });

    // Nose & gentle mouth
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), skinMat);
    nose.position.set(0, -0.04, 0.33);
    headGroup.add(nose);

    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.025, 0.02), new THREE.MeshBasicMaterial({ color: 0xbe123c }));
    mouth.position.set(0, -0.14, 0.30);
    headGroup.add(mouth);

    torsoGroup.add(headGroup);

    // Left Arm resting naturally by side with gold bangles
    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(0.32, 0.22, 0);
    const armUpperL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.35, 10), blouseMat);
    armUpperL.position.y = -0.17;
    leftArmPivot.add(armUpperL);
    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.32, 10), skinMat);
    forearmL.position.y = -0.48;
    leftArmPivot.add(forearmL);
    const banglesL = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 6, 12), zariGoldMat);
    banglesL.position.y = -0.58;
    banglesL.rotation.x = Math.PI / 2;
    leftArmPivot.add(banglesL);
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), skinMat);
    handL.position.y = -0.66;
    leftArmPivot.add(handL);
    torsoGroup.add(leftArmPivot);

    // RIGHT ARM: BENT HOLDING PHONE TO EAR (Talking on phone!)
    const phoneArmPivot = new THREE.Group();
    phoneArmPivot.position.set(-0.32, 0.22, 0);

    const armUpperR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.32, 10), blouseMat);
    armUpperR.position.y = -0.16;
    phoneArmPivot.add(armUpperR);

    // Forearm bent up bringing phone to ear
    const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.34, 10), skinMat);
    forearmR.position.set(0.12, 0.14, 0.12);
    forearmR.rotation.set(-1.6, 0.3, -0.4);
    phoneArmPivot.add(forearmR);

    // Gold Bangles on right wrist
    const banglesR = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 6, 12), zariGoldMat);
    banglesR.position.set(0.10, 0.32, 0.15);
    banglesR.rotation.x = Math.PI / 2;
    phoneArmPivot.add(banglesR);

    // Right Hand holding phone
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), skinMat);
    handR.position.set(0.08, 0.38, 0.18);
    phoneArmPivot.add(handR);

    // Smartphone
    const phone = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.02), phoneMat);
    phone.position.set(0.06, 0.40, 0.22);
    phone.rotation.set(-0.2, 0.4, 0.1);
    phoneArmPivot.add(phone);

    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.065, 0.13), screenMat);
    screen.position.set(0.06, 0.40, 0.231);
    screen.rotation.set(-0.2, 0.4, 0.1);
    phoneArmPivot.add(screen);

    torsoGroup.add(phoneArmPivot);
    chachi.add(torsoGroup);

    // Flowing Long Saree Skirt & Pleats
    const sareeSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 0.95, 18), sareePinkMat);
    sareeSkirt.position.set(0, 0.48, 0);
    sareeSkirt.castShadow = true;
    chachi.add(sareeSkirt);

    // Gold Zari Border along the bottom of the saree
    const bottomZari = new THREE.Mesh(new THREE.CylinderGeometry(0.382, 0.385, 0.08, 18), zariGoldMat);
    bottomZari.position.set(0, 0.05, 0);
    chachi.add(bottomZari);

    // Saree Pleats in front
    const pleats = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.85, 0.08), sareePinkMat);
    pleats.position.set(0, 0.45, 0.32);
    chachi.add(pleats);

    chachi.userData = {
      headGroup,
      phoneArmPivot,
      torsoGroup
    };

    return chachi;
  }

  // 16. Chacha's Traditional Bhopali Ancestral Home (With Carved Double Doors, Ootla Verandah, Tulsi, Bicycle & Steps)
  static createChachaHome() {
    const home = new THREE.Group();
    home.name = "ChachaHome";

    const wallMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.85 }); // Warm ochre lime wash
    const brickTrimMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.6 }); // Teakwood
    const roofTileMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.8 }); // Terracotta khaprail
    const stonePlinthMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.9 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8, roughness: 0.25 });
    const cycleMat = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.5, roughness: 0.5 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });

    // 1. Main House Wall Block (Width: 6.6m, Height: 7.2m, Depth: 3.5m)
    const wall = new THREE.Mesh(new THREE.BoxGeometry(6.6, 7.2, 3.5), wallMat);
    wall.position.set(0, 3.6, -1.75);
    wall.castShadow = true;
    home.add(wall);

    // Decorative Plaster Cornice below roof
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.28, 0.4), brickTrimMat);
    cornice.position.set(0, 7.1, 0.1);
    home.add(cornice);

    // Terracotta Clay Tile Slanted Overhang Roof (Khaprail Chhat)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.24, 1.4), roofTileMat);
    roof.rotation.x = 0.35;
    roof.position.set(0, 7.3, 0.45);
    home.add(roof);

    // 2. Raised Stone Verandah Plinth (Ootla / Chhabootra)
    const ootla = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.32, 2.0), stonePlinthMat);
    ootla.position.set(0, 0.16, 1.0);
    ootla.receiveShadow = true;
    home.add(ootla);

    // 2 Stone Steps leading down to street driveway
    const step1 = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.16, 0.5), stonePlinthMat);
    step1.position.set(0, 0.08, 2.25);
    step1.receiveShadow = true;
    home.add(step1);

    // 3. Antique Carved Teakwood Door Frame (Archway)
    const frameLeft = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.6, 0.22), woodMat);
    frameLeft.position.set(-1.0, 1.45, 0.05);
    home.add(frameLeft);

    const frameRight = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.6, 0.22), woodMat);
    frameRight.position.set(1.0, 1.45, 0.05);
    home.add(frameRight);

    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.24, 0.24), woodMat);
    frameTop.position.set(0, 2.75, 0.05);
    home.add(frameTop);

    // 4. Carved Double Door Leaves (Pivoting Outward)
    const doorPivotL = new THREE.Group();
    doorPivotL.position.set(-0.91, 1.45, 0.05);
    const doorLeafL = new THREE.Mesh(new THREE.BoxGeometry(0.88, 2.4, 0.06), woodMat);
    doorLeafL.position.set(0.44, 0, 0);
    doorPivotL.add(doorLeafL);
    // Brass handle knocker
    const knockerL = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12), brassMat);
    knockerL.position.set(0.78, 0, 0.04);
    doorPivotL.add(knockerL);
    home.add(doorPivotL);

    const doorPivotR = new THREE.Group();
    doorPivotR.position.set(0.91, 1.45, 0.05);
    const doorLeafR = new THREE.Mesh(new THREE.BoxGeometry(0.88, 2.4, 0.06), woodMat);
    doorLeafR.position.set(-0.44, 0, 0);
    doorPivotR.add(doorLeafR);
    // Brass handle knocker
    const knockerR = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12), brassMat);
    knockerR.position.set(-0.78, 0, 0.04);
    doorPivotR.add(knockerR);
    home.add(doorPivotR);

    // Dark Doorway Interior Void (seen when doors open)
    const doorwayVoid = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.5), new THREE.MeshBasicMaterial({ color: 0x09090b }));
    doorwayVoid.position.set(0, 1.45, 0.01);
    home.add(doorwayVoid);

    // 5. Hand-Painted Traditional Wooden Nameplate: "चाचा का निवास"
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#451a03';
    ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, 500, 116);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🏠 चाचा का निवास 🏠', 256, 42);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('(लाला का बाड़ा, पुराना भोपाल)', 256, 88);

    const nameplateTex = new THREE.CanvasTexture(canvas);
    const nameplate = new THREE.Mesh(
      new THREE.BoxGeometry(1.9, 0.48, 0.05),
      new THREE.MeshStandardMaterial({ map: nameplateTex, roughness: 0.6 })
    );
    nameplate.position.set(0, 3.25, 0.12);
    home.add(nameplate);

    // Hanging Brass Lantern (Laalten) with warm ambient light
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.28, 8), brassMat);
    lantern.position.set(1.4, 2.8, 0.35);
    home.add(lantern);

    const lanternLight = new THREE.PointLight(0xfef08a, 1.2, 5.0);
    lanternLight.position.set(1.4, 2.65, 0.45);
    home.add(lanternLight);

    // 6. Sacred Tulsi Vrindavan / Potted Tulsi Plant on Ootla
    const tulsiPot = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), brickTrimMat);
    tulsiPot.position.set(2.4, 0.53, 1.4);
    home.add(tulsiPot);

    const tulsiLeaves = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), leafMat);
    tulsiLeaves.position.set(2.4, 0.88, 1.4);
    home.add(tulsiLeaves);

    // 7. Vintage Indian Roadster Bicycle (Atlas/Hero) leaning against house wall
    const cycleGroup = new THREE.Group();
    cycleGroup.position.set(-2.2, 0.45, 1.2);
    cycleGroup.rotation.y = 0.2;
    cycleGroup.rotation.z = -0.15; // Leaning against wall

    // Wheels
    [-0.55, 0.55].forEach(cx => {
      const cWheel = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.025, 8, 18), cycleMat);
      cWheel.position.set(cx, 0, 0);
      cycleGroup.add(cWheel);
    });

    // Frame tubes
    const cFrame = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.03, 0.03), cycleMat);
    cFrame.position.set(0, 0.15, 0);
    cycleGroup.add(cFrame);

    const cHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 8), cycleMat);
    cHandle.rotation.x = Math.PI / 2;
    cHandle.position.set(0.55, 0.42, 0);
    cycleGroup.add(cHandle);

    home.add(cycleGroup);

    home.userData = {
      doorPivotL,
      doorPivotR,
      openDoors: () => {
        doorPivotL.rotation.y = -Math.PI * 0.45;
        doorPivotR.rotation.y = Math.PI * 0.45;
      },
      closeDoors: () => {
        doorPivotL.rotation.y = 0;
        doorPivotR.rotation.y = 0;
      }
    };

    return home;
  }
}
