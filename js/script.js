/**
 * ==========================================================================
 * AVENGERS: INITIATIVE '26 // Multiverse of Code
 * GeeksforGeeks Student Chapter — Bennett University
 * Pure Vanilla JavaScript Controller (Zero Frameworks, Zero External CDNs)
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------------------------------------
  // 1. Centralized Multiverse Event Dataset
  // ------------------------------------------------------------------------
  const FACTIONS = [
    {
      id: "stark",
      name: "Stark AI Initiative",
      alias: "Iron Man Protocol",
      color: "#e23636",
      secondary: "#fbbf24",
      domain: "Artificial Intelligence & Cloud Arc Systems",
      motto: "Sometimes you gotta run before you can walk.",
      desc: "Architect cutting-edge autonomous agents, neural synthesis pipelines, and high-performance cloud backends that operate at J.A.R.V.I.S. efficiency.",
      tech: ["LLM Agents", "PyTorch", "Kubernetes", "Next.js", "Edge Computing"]
    },
    {
      id: "captain",
      name: "Super Soldier Command",
      alias: "First Avenger Protocol",
      color: "#3b82f6",
      secondary: "#cbd5e1",
      domain: "Cybersecurity, Zero-Trust & Web3 Defense",
      motto: "I can do this all day.",
      desc: "Fortify digital perimeters against multiversal exploits. Design decentralized sovereign identity and zero-knowledge defensive protocols.",
      tech: ["Zero-Knowledge Proofs", "Smart Contracts", "Cryptographic Auditing", "Rust", "Solidity"]
    },
    {
      id: "strange",
      name: "Kamar-Taj Quantum Labs",
      alias: "Sorcerer Supreme Protocol",
      color: "#10b981",
      secondary: "#f59e0b",
      domain: "Quantum Computing & Multiverse Simulators",
      motto: "Dormammu, I've come to bargain.",
      desc: "Manipulate temporal datasets, simulate parallel probabilistic outcomes, and conquer combinatorial algorithmic bottlenecks.",
      tech: ["Quantum Qiskit", "Temporal Graphs", "Algorithmic Trading", "High Performance C++", "WebGPU"]
    },
    {
      id: "wakanda",
      name: "Wakandan Design Group",
      alias: "Black Panther Protocol",
      color: "#a855f7",
      secondary: "#e2e8f0",
      domain: "Vibranium IoT, Smart Hardware & Green Tech",
      motto: "Wakanda Forever.",
      desc: "Harness physical computing, robotics, and energy-efficient embedded systems to solve real-world sustainability and healthcare challenges.",
      tech: ["Embedded C / ESP32", "ROS2 Robotics", "CleanTech IoT", "Computer Vision", "BLE Mesh"]
    },
    {
      id: "thor",
      name: "Asgardian Stormgrid",
      alias: "God of Thunder Protocol",
      color: "#00f0ff",
      secondary: "#38bdf8",
      domain: "High-Throughput Streaming & Distributed Systems",
      motto: "Bring me Thanos!",
      desc: "Channel high-voltage data pipelines capable of absorbing gigabytes of telemetry per second without breaking a thread.",
      tech: ["Apache Kafka", "Go Distributed Systems", "gRPC", "ClickHouse", "Wasm"]
    }
  ];

  const TRACKS = [
    {
      id: "space",
      stone: "Space Stone",
      color: "#00f0ff",
      title: "Tesseract Protocol: Autonomous Mobility & P2P Networks",
      domain: "Smart Cities & Decentralized Networks",
      bounty: "₹45,000",
      desc: "Build peer-to-peer mesh networks, smart city traffic telemetry, and decentralized location protocols.",
      problems: [
        "Decentralized P2P disaster mesh network without cellular towers",
        "Real-time autonomous drone corridor coordination using WebSockets",
        "Zero-latency urban transport routing engine"
      ],
      tech: ["Libp2p", "PostGIS", "WebRTC", "Go", "Leaflet"]
    },
    {
      id: "mind",
      stone: "Mind Stone",
      color: "#fbbf24",
      title: "Cerebro-Vision: Autonomous Multi-Agent AI",
      domain: "Generative AI & LLMs",
      bounty: "₹55,000",
      desc: "Develop autonomous multi-agent swarms, self-correcting code evaluators, and multimodal assistants.",
      problems: [
        "Multi-agent software security auditor drafting automated PR fixes",
        "Multimodal clinical triage copilot parsing audio and patient vitals",
        "Dynamic coding tutor tailoring real-time curricula"
      ],
      tech: ["LangChain", "Gemini 1.5", "FastAPI", "VectorDB", "PyTorch"]
    },
    {
      id: "time",
      stone: "Time Stone",
      color: "#10b981",
      title: "Temporal Eye of Agamotto: Predictive Systems",
      domain: "FinTech & Climate Analytics",
      bounty: "₹40,000",
      desc: "Harness time-series modeling and predictive anomaly detection in high-frequency financial exchanges.",
      problems: [
        "Flash crash anomaly detection on high-frequency order books",
        "Hyperlocal monsoonal flood prediction via satellite telemetry",
        "Serverless cloud capacity autoscaler using temporal forecasting"
      ],
      tech: ["TimescaleDB", "Prophet", "Polars", "Grafana", "Python"]
    },
    {
      id: "reality",
      stone: "Reality Stone",
      color: "#ef4444",
      title: "Aether Matrix: Spatial Computing & Next-Gen Interfaces",
      domain: "AR / VR & Creative Web3D",
      bounty: "₹40,000",
      desc: "Craft immersive browser-based spatial computing tools, WebXR educational sandboxes, and mind-bending UI.",
      problems: [
        "Browser spatial anatomy simulation via webcam hand gestures",
        "3D architectural digital twin for Bennett University campus",
        "WebGPU generative audio-visual synthesizer"
      ],
      tech: ["Three.js", "WebXR", "GLSL Shaders", "WebAudio API", "React Three Fiber"]
    },
    {
      id: "power",
      stone: "Power Stone",
      color: "#a855f7",
      title: "Orb of Destruction: Cyber Warfare & Resilient Systems",
      domain: "DevSecOps & High-Throughput Fintech",
      bounty: "₹40,000",
      desc: "Architect bulletproof zero-downtime systems, automated penetration testing engines, and DDoS filters.",
      problems: [
        "Automated honeypot identifying zero-day exploits in real-time",
        "Post-quantum cryptographic key exchange proxy",
        "Self-healing Kubernetes operator for edge clusters"
      ],
      tech: ["Rust", "eBPF", "Docker", "Envoy Proxy", "Kubernetes"]
    },
    {
      id: "soul",
      stone: "Soul Stone",
      color: "#f97316",
      title: "Vormir Covenant: Social Impact & Assistive Tech",
      domain: "HealthTech & Humanitarian Tech",
      bounty: "₹30,000",
      desc: "Develop assistive software for the visually/auditory impaired and transparent philanthropic supply chains.",
      problems: [
        "Indian Sign Language bidirectional translator running at 60 FPS",
        "Voice-first banking terminal for regional Indian dialects",
        "Emergency blood bank matching and logistics network"
      ],
      tech: ["MediaPipe", "TensorFlow.js", "Next.js", "Web Speech API", "TailwindCSS"]
    }
  ];

  const TIMELINE_DATA = [
    {
      phase: "PHASE 01",
      codename: "AVENGERS ASSEMBLE",
      date: "OCTOBER 01 – 14, 2026",
      time: "23:59 IST",
      title: "Registration & Clearance Application",
      desc: "Squad recruitment open across universities. Submit your S.H.I.E.L.D. clearance pass and choose your primary Hero Faction alignment.",
      location: "Global Digital Portal"
    },
    {
      phase: "PHASE 02",
      codename: "MULTIVERSE NEXUS",
      date: "OCTOBER 15, 2026",
      time: "18:00 IST",
      title: "Idea Synopsis & Shortlisting",
      desc: "Top 100 shortlisted squads announced. Problem statements finalized. Official Discord war room access granted.",
      location: "Discord War Room"
    },
    {
      phase: "PHASE 03",
      codename: "STARK EXPO KICKOFF",
      date: "OCTOBER 16, 2026",
      time: "09:00 IST",
      title: "In-Person Check-in & Hacking Begins",
      desc: "Arrival at Bennett University Greater Noida campus. Opening keynote by tech pioneers and 36-hour countdown ignition.",
      location: "Auditorium, Bennett University"
    },
    {
      phase: "PHASE 04",
      codename: "MIDNIGHT PROTOCOL",
      date: "OCTOBER 17, 2026",
      time: "00:00 – 04:00 IST",
      title: "Midnight Mentorship & Infinity Gaming",
      desc: "1-on-1 dossier reviews with Silicon Valley mentors, midnight pizzas, Red Bull, and retro Marvel arcade showdowns.",
      location: "Tech Labs, Bennett University"
    },
    {
      phase: "PHASE 05",
      codename: "THE ENDGAME",
      date: "OCTOBER 18, 2026",
      time: "17:00 IST",
      title: "Final Expo & Living Tribunal Judging",
      desc: "Top 10 finalists pitch on the main stage. ₹2,50,000+ prize pool and hand-forged Stark Trophy distribution.",
      location: "Main Stage & Live Stream"
    }
  ];

  const PRIZES = [
    {
      rank: "CHAMPION",
      title: "The Infinity Gauntlet: Grand Winner",
      amount: "₹1,00,000",
      stone: "All 6 Stones",
      color: "#fbbf24",
      perks: [
        "Custom Hand-Forged Infinity Trophy",
        "$2,500+ Cloud Credits",
        "GFG Pro Annual Subscriptions",
        "Bennett Univ Incubator Grant Access"
      ]
    },
    {
      rank: "RUNNER UP",
      title: "Vibranium Shield: 1st Runner Up",
      amount: "₹60,000",
      stone: "Space & Power",
      color: "#00f0ff",
      perks: [
        "Vibranium Shield Trophy",
        "$1,500+ Cloud Credits",
        "GFG Premium Vouchers",
        "Direct Fast-Track Interview"
      ]
    },
    {
      rank: "2ND RUNNER UP",
      title: "Stormbreaker: 2nd Runner Up",
      amount: "₹35,000",
      stone: "Thunder Core",
      color: "#a855f7",
      perks: [
        "Stormbreaker Acrylic Trophy",
        "$750 Cloud Credits",
        "GFG Goodies & Swag Kit",
        "Certificate of Excellence"
      ]
    },
    {
      rank: "SPECIAL CATEGORY",
      title: "Best All-Women Squad // Captain Marvel",
      amount: "₹25,000",
      stone: "Cosmic Flame",
      color: "#ef4444",
      perks: [
        "Women in Tech Leadership Grant",
        "Dedicated VC Pitch Session",
        "Official Marvel Collector Merch"
      ]
    },
    {
      rank: "SPECIAL CATEGORY",
      title: "Best Freshman Squad // Spider-Man Rookie",
      amount: "₹15,000",
      stone: "Web-Slinger",
      color: "#e23636",
      perks: [
        "Rookie Multiverse Plaque",
        "DSA Mastery Free Course Access",
        "Bennett Tech Club Mentorship"
      ]
    },
    {
      rank: "SPECIAL CATEGORY",
      title: "Wakanda Design Group // Best Hardware",
      amount: "₹15,000",
      stone: "Vibranium Core",
      color: "#10b981",
      perks: [
        "Hardware Components Grant",
        "Bennett Maker Lab 6-Mo Access",
        "Dev Kits & Sensor Bundles"
      ]
    }
  ];

  const AVATARS = [
    { id: "ironman", name: "Iron Man", color: "#e23636", initials: "IM" },
    { id: "spiderman", name: "Spider-Man", color: "#ef4444", initials: "SM" },
    { id: "strange", name: "Doctor Strange", color: "#10b981", initials: "DS" },
    { id: "wanda", name: "Scarlet Witch", color: "#dc2626", initials: "SW" },
    { id: "panther", name: "Black Panther", color: "#a855f7", initials: "BP" },
    { id: "thor", name: "Thor Odinson", color: "#00f0ff", initials: "TH" }
  ];

  const COUNCIL = [
    {
      name: "Dr. Aakash Stark",
      codename: "Architect Supreme",
      role: "Principal AI Scientist",
      aff: "Google DeepMind / Ex-Stark Lab",
      power: "100B+ Param Model Distillation & Quantum Optimizers"
    },
    {
      name: "Vikram Banner",
      codename: "The Distributed Hulk",
      role: "VP of Engineering & Systems",
      aff: "PostgreSQL Core Contributor",
      power: "Zero-Latency 10M QPS Database Architectures"
    },
    {
      name: "Dr. Natasha Romanoff",
      codename: "Black Widow Sentinel",
      role: "Chief Security Officer",
      aff: "Zero-Day Exploits & Sovereign Web3",
      power: "Penetrating Zero-Trust Firewalls in Under 60s"
    },
    {
      name: "Prof. Rajesh Strange",
      codename: "Time Weaver",
      role: "Head of Computer Science",
      aff: "Bennett University (Times Group)",
      power: "Nurturing 1,000+ Student Builders into Founders"
    }
  ];

  const SPONSORS = [
    { name: "GeeksforGeeks", tier: "Title Organizer" },
    { name: "Bennett University", tier: "Academic Host" },
    { name: "Stark Industries", tier: "Multiverse Partner" },
    { name: "Wakanda Design", tier: "Hardware Partner" },
    { name: "Devfolio", tier: "Platform Partner" },
    { name: "GitHub", tier: "Developer Tooling" },
    { name: "Polygon", tier: "Web3 Sponsor" },
    { name: "Major League Hacking", tier: "Global Ally" }
  ];

  const FAQS = [
    {
      q: "Who is eligible to assemble for Multiverse of Code 2026?",
      a: "Any undergraduate or postgraduate student enrolled in any recognized university or college across India is eligible! Our 6 Infinity Tracks are structured with rookie and advanced tiers."
    },
    {
      q: "Is the hackathon completely free to attend?",
      a: "YES! 100% free. Participation, food, midnight energy drinks, Wi-Fi, swag kits, and dorm access at Bennett University are completely sponsored."
    },
    {
      q: "Where is Bennett University located and what amenities are provided?",
      a: "Bennett University is located in TechZone 2, Greater Noida, Delhi NCR. Hacking takes place in the Apple iMac Labs and NVIDIA Supercomputing AI workstations with 1 Gbps fiber internet."
    },
    {
      q: "What is the team size allowed?",
      a: "Teams must consist of 2 to 4 members. Inter-college teams and inter-departmental collaborations are welcome and encouraged!"
    },
    {
      q: "Can we start working on our project before the hackathon begins?",
      a: "No pre-built code is permitted. All code commits must be written during the 36-hour sprint at Bennett University starting October 16 at 09:00 IST."
    }
  ];

  // ------------------------------------------------------------------------
  // 2. Pure Web Audio API Sound Synthesizer
  // ------------------------------------------------------------------------
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.ambientOsc = null;
      this.ambientGain = null;
      this.isAmbientPlaying = false;
    }

    getCtx() {
      if (!this.ctx && typeof window !== "undefined") {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) this.ctx = new AudioClass();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return this.ctx;
    }

    playClick(pitch = 880) {
      if (this.isMuted) return;
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(pitch, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(pitch * 1.4, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playRepulsorBlast() {
      if (this.isMuted) return;
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(1500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } catch (e) {}
    }

    playArcCharge() {
      if (this.isMuted) return;
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.25);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch (e) {}
    }

    playThanosSnap() {
      if (this.isMuted) return;
      const ctx = this.getCtx();
      if (!ctx) return;
      try {
        const bufferSize = ctx.sampleRate * 0.1;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(3200, ctx.currentTime);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.4, ctx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start();
      } catch (e) {}
    }

    toggleAmbientDrone() {
      const ctx = this.getCtx();
      if (!ctx) return false;
      if (this.isAmbientPlaying) {
        if (this.ambientGain) this.ambientGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        setTimeout(() => {
          try {
            this.ambientOsc?.stop();
            this.ambientOsc?.disconnect();
            this.isAmbientPlaying = false;
          } catch (e) {}
        }, 600);
        return false;
      } else {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(55, ctx.currentTime);
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.035, ctx.currentTime + 1.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          this.ambientOsc = osc;
          this.ambientGain = gain;
          this.isAmbientPlaying = true;
          return true;
        } catch (e) {
          return false;
        }
      }
    }
  }

  const soundFX = new SoundEngine();

  // Audio Buttons Wiring
  const humBtn = document.getElementById("cosmic-hum-btn");
  if (humBtn) {
    humBtn.addEventListener("click", () => {
      soundFX.playClick(880);
      const isPlaying = soundFX.toggleAmbientDrone();
      document.getElementById("hum-text").innerText = isPlaying ? "COSMIC HUM: ON" : "COSMIC HUM";
      humBtn.classList.toggle("is-active", isPlaying);
    });
  }

  const muteBtn = document.getElementById("mute-btn");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      soundFX.isMuted = !soundFX.isMuted;
      muteBtn.innerHTML = soundFX.isMuted
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    });
  }

  // ------------------------------------------------------------------------
  // 3. Interactive Multiverse Particle Canvas
  // ------------------------------------------------------------------------
  const canvas = document.getElementById("multiverse-canvas");
  const ctx = canvas ? canvas.getContext("2d") : null;
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  let primaryColor = "#e23636";
  let secondaryColor = "#fbbf24";
  const mouse = { x: width / 2, y: height / 2, active: false };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  const particles = [];
  const PARTICLE_COUNT = 75;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * (width || window.innerWidth),
      y: Math.random() * (height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
    });
  }

  function renderCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const force = (1 - dist / 120) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      ctx.fillStyle = primaryColor;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 90) {
          ctx.strokeStyle = primaryColor;
          ctx.globalAlpha = (1 - d / 90) * 0.15;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(renderCanvas);
  }
  if (ctx) renderCanvas();

  // ------------------------------------------------------------------------
  // 4. Stark HUD Expanding Reticle Cursor
  // ------------------------------------------------------------------------
  const cursor = document.getElementById("custom-cursor");
  const cursorContent = document.getElementById("cursor-content");
  const cursorFeatureText = document.getElementById("cursor-feature-text");
  const cursorTag = document.getElementById("cursor-tag");
  const cursorTagName = document.getElementById("cursor-tag-name");

  window.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
    if (cursorTag) {
      cursorTag.style.left = (e.clientX + 22) + "px";
      cursorTag.style.top = (e.clientY - 36) + "px";
    }
  });

  document.addEventListener("mouseover", (e) => {
    const featEl = e.target.closest("[data-feature]");
    if (featEl && cursor && cursorContent && cursorFeatureText && cursorTag && cursorTagName) {
      const featName = featEl.getAttribute("data-feature");
      const color = featEl.getAttribute("data-feature-color") || "#00f0ff";

      cursor.style.width = "88px";
      cursor.style.height = "88px";
      cursor.style.backgroundColor = "rgba(4, 8, 20, 0.85)";
      cursor.style.borderColor = color;
      cursor.style.borderWidth = "2px";
      cursor.style.boxShadow = `0 0 25px ${color}60, inset 0 0 15px ${color}30`;

      cursorContent.style.display = "flex";
      cursorFeatureText.innerText = featName;
      cursorFeatureText.style.color = color;

      cursorTag.style.display = "flex";
      cursorTagName.innerText = featName;
      cursorTag.style.borderColor = color;
      cursorTag.style.color = color;
    } else if (cursor) {
      const btn = e.target.closest("button, a, select, input");
      if (btn) {
        cursor.style.width = "48px";
        cursor.style.height = "48px";
        cursor.style.backgroundColor = "rgba(226, 54, 54, 0.25)";
        cursor.style.borderColor = "rgba(251, 191, 36, 0.9)";
        cursor.style.borderWidth = "1.5px";
        cursor.style.boxShadow = "0 0 15px rgba(251, 191, 36, 0.4)";
      } else {
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.backgroundColor = "rgba(226, 54, 54, 0.9)";
        cursor.style.borderColor = "rgba(255, 255, 255, 0.6)";
        cursor.style.borderWidth = "1px";
        cursor.style.boxShadow = "0 0 10px rgba(226, 54, 54, 0.6)";
      }
      if (cursorContent) cursorContent.style.display = "none";
      if (cursorTag) cursorTag.style.display = "none";
    }
  });

  // ------------------------------------------------------------------------
  // 5. Mobile Hamburger Navigation
  // ------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener("click", () => {
      soundFX.playClick(600);
      const isOpen = hamburgerBtn.classList.toggle("is-active");
      mobileNav.classList.toggle("is-open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileNav.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        soundFX.playClick(720);
        hamburgerBtn.classList.remove("is-active");
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Live Countdown Timer to Bennett University Event
  // ------------------------------------------------------------------------
  const targetDate = new Date("2026-10-16T09:00:00+05:30").getTime();
  const cdDays = document.getElementById("cd-days");
  const cdHours = document.getElementById("cd-hours");
  const cdMinutes = document.getElementById("cd-minutes");
  const cdSeconds = document.getElementById("cd-seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0 && cdDays && cdHours && cdMinutes && cdSeconds) {
      cdDays.innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      cdHours.innerText = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      cdMinutes.innerText = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
      cdSeconds.innerText = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // ------------------------------------------------------------------------
  // 7. Hero Factions Protocol Switcher
  // ------------------------------------------------------------------------
  const factionBtnsContainer = document.getElementById("faction-buttons-container");
  if (factionBtnsContainer) {
    FACTIONS.forEach((f, idx) => {
      const btn = document.createElement("button");
      btn.className = `faction-btn ${idx === 0 ? "is-active" : ""}`;
      btn.setAttribute("data-feature", f.alias.toUpperCase());
      btn.setAttribute("data-feature-color", f.color);
      btn.innerHTML = `<span style="color:${f.color}">●</span> <span>${f.name}</span>`;
      btn.addEventListener("click", () => selectFaction(f, btn));
      factionBtnsContainer.appendChild(btn);
    });

    function selectFaction(f, activeBtn) {
      soundFX.playClick(650);
      primaryColor = f.color;
      secondaryColor = f.secondary;

      document.querySelectorAll("#faction-buttons-container .faction-btn").forEach((b) => {
        b.classList.remove("is-active");
        b.style.borderColor = "";
      });
      activeBtn.classList.add("is-active");
      activeBtn.style.borderColor = f.color;

      const dossier = document.getElementById("active-faction-dossier");
      if (dossier) {
        dossier.style.borderColor = f.color;
        dossier.style.boxShadow = `0 0 35px ${f.color}50`;
      }

      const aliasEl = document.getElementById("faction-alias");
      if (aliasEl) {
        aliasEl.innerText = f.alias;
        aliasEl.style.color = f.color;
      }
      const nameEl = document.getElementById("faction-name");
      if (nameEl) nameEl.innerText = f.name;

      const mottoEl = document.getElementById("faction-motto");
      if (mottoEl) mottoEl.innerText = `"${f.motto}"`;

      const domainEl = document.getElementById("faction-domain");
      if (domainEl) domainEl.innerText = f.domain;

      const descEl = document.getElementById("faction-desc");
      if (descEl) descEl.innerText = f.desc;

      const cta = document.getElementById("faction-cta");
      if (cta) {
        cta.style.backgroundColor = f.color;
        cta.innerText = `CLAIM PASS AS ${f.name.toUpperCase()}`;
      }

      const iconBox = document.getElementById("faction-icon-box");
      if (iconBox) {
        iconBox.style.borderColor = f.color;
        iconBox.style.backgroundColor = `${f.color}20`;
        iconBox.style.color = f.color;
      }

      const techContainer = document.getElementById("faction-tech");
      if (techContainer) {
        techContainer.innerHTML = "";
        f.tech.forEach((t) => {
          const span = document.createElement("span");
          span.className = "tech-tag-pill";
          span.innerText = `#${t}`;
          techContainer.appendChild(span);
        });
      }
    }

    if (factionBtnsContainer.children.length > 0) {
      selectFaction(FACTIONS[0], factionBtnsContainer.children[0]);
    }
  }

  // ------------------------------------------------------------------------
  // 8. The 6 Infinity Stone Tracks & Modal
  // ------------------------------------------------------------------------
  const tracksGrid = document.getElementById("tracks-grid");
  const trackModal = document.getElementById("track-modal");
  const trackModalCard = document.getElementById("track-modal-card");

  if (tracksGrid) {
    TRACKS.forEach((t) => {
      const card = document.createElement("div");
      card.className = "glass-panel track-card";
      card.setAttribute("data-feature", t.stone.toUpperCase());
      card.setAttribute("data-feature-color", t.color);
      card.style.borderColor = `${t.color}35`;

      card.innerHTML = `
        <div class="track-card-top">
          <div class="track-meta">
            <span class="stone-pill" style="background:${t.color}20; color:${t.color}">● ${t.stone}</span>
            <span class="bounty-pill">BOUNTY ${t.bounty}</span>
          </div>
          <div class="track-domain-txt">${t.domain}</div>
          <h3 class="track-title-txt">${t.title}</h3>
          <p class="track-desc-txt">${t.desc}</p>
        </div>
        <div>
          <div class="track-tech-row">
            ${t.tech.map((tc) => `<span class="track-tech-badge">${tc}</span>`).join("")}
          </div>
          <div class="track-view-action" style="color:${t.color}">
            <span>VIEW MISSION DOSSIER</span>
            <span>→</span>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openTrackModal(t));
      tracksGrid.appendChild(card);
    });
  }

  function openTrackModal(t) {
    soundFX.playClick(900);
    if (!trackModal || !trackModalCard) return;

    trackModalCard.style.borderColor = t.color;
    trackModalCard.style.boxShadow = `0 0 35px ${t.color}50`;

    const stoneTag = document.getElementById("modal-stone-tag");
    if (stoneTag) {
      stoneTag.innerText = `${t.stone} PROTOCOL`;
      stoneTag.style.backgroundColor = `${t.color}20`;
      stoneTag.style.color = t.color;
    }

    const titleEl = document.getElementById("modal-title");
    if (titleEl) titleEl.innerText = t.title;

    const bountyEl = document.getElementById("modal-bounty");
    if (bountyEl) bountyEl.innerText = `TRACK BOUNTY: ${t.bounty}`;

    const descEl = document.getElementById("modal-desc");
    if (descEl) descEl.innerText = t.desc;

    const probContainer = document.getElementById("modal-problems");
    if (probContainer) {
      probContainer.innerHTML = t.problems
        .map(
          (p) => `
        <div class="modal-problem-card">
          <span style="color:${t.color}; font-weight:bold;">✓</span>
          <span>${p}</span>
        </div>
      `
        )
        .join("");
    }

    const techContainer = document.getElementById("modal-tech");
    if (techContainer) {
      techContainer.innerHTML = t.tech
        .map((tc) => `<span class="tech-tag-pill">#${tc}</span>`)
        .join("");
    }

    trackModal.classList.add("is-open");
  }

  function closeTrackModal() {
    if (trackModal) trackModal.classList.remove("is-open");
  }

  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeTrackModal);

  if (trackModal) {
    trackModal.addEventListener("click", (e) => {
      if (e.target === trackModal) closeTrackModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTrackModal();
  });

  const modalRegisterBtn = document.getElementById("modal-register-btn");
  if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener("click", () => {
      closeTrackModal();
      soundFX.playArcCharge();
    });
  }

  // ------------------------------------------------------------------------
  // 9. TVA Sacred Timeline Interactive Roadmap
  // ------------------------------------------------------------------------
  const timelineTabsContainer = document.getElementById("timeline-tabs");
  if (timelineTabsContainer) {
    TIMELINE_DATA.forEach((item, idx) => {
      const tab = document.createElement("button");
      tab.className = `timeline-tab-btn ${idx === 0 ? "is-active" : ""}`;
      tab.setAttribute("data-feature", item.codename);
      tab.setAttribute("data-feature-color", "#fbbf24");
      tab.innerHTML = `
        <div class="timeline-phase-tag">${item.phase}</div>
        <div class="timeline-codename-txt">${item.codename}</div>
        <div class="timeline-date-txt">${item.date}</div>
      `;
      tab.addEventListener("click", () => selectTimelinePhase(item, tab));
      timelineTabsContainer.appendChild(tab);
    });

    function selectTimelinePhase(item, tab) {
      soundFX.playClick(720);
      document.querySelectorAll("#timeline-tabs .timeline-tab-btn").forEach((b) => {
        b.classList.remove("is-active");
      });
      tab.classList.add("is-active");

      const detail = document.getElementById("timeline-detail-card");
      if (detail) {
        detail.innerHTML = `
          <div class="timeline-card-grid">
            <div class="timeline-meta-col">
              <span class="timeline-phase-pill">${item.phase} // ${item.codename}</span>
              <h3 class="timeline-title-heading">${item.title}</h3>
              <div class="timeline-meta-list">
                <div><strong>DATE:</strong> ${item.date}</div>
                <div><strong>TIME:</strong> ${item.time}</div>
                <div><strong>LOCATION:</strong> ${item.location}</div>
              </div>
            </div>
            <div class="timeline-directive-col">
              <div class="timeline-directive-lbl">MISSION DIRECTIVE</div>
              <p class="timeline-desc-txt">${item.desc}</p>
            </div>
          </div>
        `;
      }
    }

    if (timelineTabsContainer.children.length > 0) {
      selectTimelinePhase(TIMELINE_DATA[0], timelineTabsContainer.children[0]);
    }
  }

  // ------------------------------------------------------------------------
  // 10. Stark Treasury & Prizes Rendering
  // ------------------------------------------------------------------------
  const prizesGrid = document.getElementById("prizes-grid");
  if (prizesGrid) {
    PRIZES.forEach((pz, idx) => {
      const card = document.createElement("div");
      card.className = `glass-panel prize-card ${idx === 0 ? "champion" : ""}`;
      card.setAttribute("data-feature", pz.amount);
      card.setAttribute("data-feature-color", pz.color);
      card.innerHTML = `
        <div>
          <div class="prize-header">
            <span class="prize-rank-txt">${pz.rank}</span>
            <span class="stone-pill" style="background:${pz.color}20; color:${pz.color}">● ${pz.stone}</span>
          </div>
          <h3 class="prize-title-txt">${pz.title}</h3>
          <div class="prize-amount-txt" style="color:${pz.color}">${pz.amount}</div>
          <div class="prize-perks-list">
            ${pz.perks
              .map(
                (pk) =>
                  `<div class="prize-perk-item"><span style="color:${pz.color}">✓</span> <span>${pk}</span></div>`
              )
              .join("")}
          </div>
        </div>
      `;
      prizesGrid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // 11. S.H.I.E.L.D. Clearance Badge Interactive Generator
  // ------------------------------------------------------------------------
  const avatarSelector = document.getElementById("avatar-selector");
  if (avatarSelector) {
    AVATARS.forEach((av, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `avatar-pick-btn ${idx === 0 ? "is-active" : ""}`;
      btn.setAttribute("data-feature", av.name.toUpperCase());
      btn.setAttribute("data-feature-color", av.color);
      btn.innerHTML = `
        <div class="avatar-circle-icon" style="background:${av.color}">${av.initials}</div>
        <span class="avatar-name-txt">${av.name}</span>
      `;
      btn.addEventListener("click", () => {
        soundFX.playClick(750);
        document.querySelectorAll("#avatar-selector .avatar-pick-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const avatarBox = document.getElementById("badge-avatar-box");
        if (avatarBox) {
          avatarBox.style.borderColor = av.color;
          avatarBox.style.backgroundColor = `${av.color}25`;
          document.getElementById("badge-avatar-initials").innerText = av.initials;
        }
      });
      avatarSelector.appendChild(btn);
    });
  }

  // Live Input Bindings
  const inputName = document.getElementById("input-name");
  if (inputName) {
    inputName.addEventListener("input", (e) => {
      document.getElementById("badge-name-display").innerText =
        e.target.value.toUpperCase() || "UNKNOWN OPERATIVE";
    });
  }

  const inputUniv = document.getElementById("input-univ");
  if (inputUniv) {
    inputUniv.addEventListener("input", (e) => {
      document.getElementById("badge-univ-display").innerText =
        e.target.value || "Bennett University";
    });
  }

  const inputRole = document.getElementById("input-role");
  if (inputRole) {
    inputRole.addEventListener("change", (e) => {
      document.getElementById("badge-role-display").innerText = `Track: ${e.target.value}`;
    });
  }

  const inputGithub = document.getElementById("input-github");
  if (inputGithub) {
    inputGithub.addEventListener("input", (e) => {
      document.getElementById("badge-github-display").innerText = `@${e.target.value || "hacker"}`;
    });
  }

  // Pure Vanilla Canvas Confetti Explosion (Zero External Dependencies)
  function fireVanillaConfetti() {
    const confettiCanvas = document.getElementById("confetti-canvas");
    if (!confettiCanvas) return;
    const cCtx = confettiCanvas.getContext("2d");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ["#e23636", "#fbbf24", "#00f0ff", "#10b981", "#a855f7"];
    const pieces = [];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.65,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 14 - 6,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
      });
    }

    let animationFrame;
    function renderConfetti() {
      cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      let alive = false;
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.rotation += p.rotationSpeed;
        p.alpha -= 0.012; // Fade

        if (p.alpha > 0) {
          alive = true;
          cCtx.save();
          cCtx.translate(p.x, p.y);
          cCtx.rotate((p.rotation * Math.PI) / 180);
          cCtx.fillStyle = p.color;
          cCtx.globalAlpha = Math.max(0, p.alpha);
          cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          cCtx.restore();
        }
      }
      if (alive) {
        animationFrame = requestAnimationFrame(renderConfetti);
      } else {
        cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }
    renderConfetti();
  }

  const badgeForm = document.getElementById("badge-form");
  if (badgeForm) {
    badgeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      soundFX.playArcCharge();
      fireVanillaConfetti();
      const alertBox = document.getElementById("badge-success-alert");
      if (alertBox) alertBox.classList.add("is-visible");
    });
  }

  const btnCopyId = document.getElementById("btn-copy-id");
  if (btnCopyId) {
    btnCopyId.addEventListener("click", () => {
      const ticketId = document.getElementById("badge-ticket-id")?.innerText || "GFG-BU-8492-AVX";
      navigator.clipboard.writeText(ticketId);
      btnCopyId.innerText = "COPIED!";
      setTimeout(() => (btnCopyId.innerText = "COPY ID"), 2000);
    });
  }

  const btnPrintPass = document.getElementById("btn-print-pass");
  if (btnPrintPass) {
    btnPrintPass.addEventListener("click", () => window.print());
  }

  // ------------------------------------------------------------------------
  // 12. Avengers Council Mentors Rendering
  // ------------------------------------------------------------------------
  const councilGrid = document.getElementById("council-grid");
  if (councilGrid) {
    COUNCIL.forEach((c) => {
      const card = document.createElement("div");
      card.className = "glass-panel mentor-card";
      card.setAttribute("data-feature", c.codename.toUpperCase());
      card.setAttribute("data-feature-color", "#e23636");
      card.innerHTML = `
        <div class="mentor-badge-av">#AV</div>
        <div class="mentor-codename">${c.codename}</div>
        <h4 class="mentor-name">${c.name}</h4>
        <div class="mentor-role">${c.role}</div>
        <div class="mentor-aff">${c.aff}</div>
        <div class="mentor-power-box">
          <span class="power-lbl">SUPERPOWER</span>
          ${c.power}
        </div>
      `;
      councilGrid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // 13. Multiverse Allies & Sponsors Grid
  // ------------------------------------------------------------------------
  const sponsorsGrid = document.getElementById("sponsors-grid");
  if (sponsorsGrid) {
    SPONSORS.forEach((s) => {
      const el = document.createElement("div");
      el.className = "glass-panel sponsor-card";
      el.innerHTML = `
        <div class="sponsor-tier-txt">${s.tier}</div>
        <div class="sponsor-name-txt">${s.name}</div>
      `;
      sponsorsGrid.appendChild(el);
    });
  }

  // ------------------------------------------------------------------------
  // 14. J.A.R.V.I.S. FAQ Accordion
  // ------------------------------------------------------------------------
  const faqContainer = document.getElementById("faq-container");
  if (faqContainer) {
    FAQS.forEach((f) => {
      const item = document.createElement("div");
      item.className = "faq-item";
      item.setAttribute("data-feature", "JARVIS QUERY");
      item.setAttribute("data-feature-color", "#00f0ff");
      item.innerHTML = `
        <button class="faq-question-btn" type="button">
          <div class="faq-query-label">
            <span class="faq-query-tag">> QUERY:</span>
            <span class="faq-query-text">${f.q}</span>
          </div>
          <span class="faq-toggle-icon">▼</span>
        </button>
        <div class="faq-answer-panel">
          <div class="faq-response-card">
            <span class="faq-jarvis-lead">J.A.R.V.I.S. RESPONSE:</span>
            ${f.a}
          </div>
        </div>
      `;

      const qBtn = item.querySelector(".faq-question-btn");
      qBtn.addEventListener("click", () => {
        soundFX.playClick(800);
        item.classList.toggle("is-open");
      });
      faqContainer.appendChild(item);
    });
  }

  // ------------------------------------------------------------------------
  // 15. Thanos Gauntlet Snap Easter Egg
  // ------------------------------------------------------------------------
  const gauntletBtn = document.getElementById("gauntlet-btn");
  const snapBanner = document.getElementById("snap-banner");
  const reverseBtn = document.getElementById("reverse-snap-btn");
  let isSnapped = false;

  if (gauntletBtn) {
    gauntletBtn.addEventListener("click", () => {
      if (isSnapped) {
        reverseSnap();
      } else {
        soundFX.playThanosSnap();
        const targets = document.querySelectorAll(".glass-panel, .glass-panel-elevated");
        targets.forEach((el, i) => {
          if (i % 2 === 0) el.classList.add("dusted-element");
        });
        isSnapped = true;
        if (snapBanner) snapBanner.classList.add("is-active");
        gauntletBtn.style.borderColor = "var(--time-emerald)";
        document.getElementById("snap-tooltip").innerText = "Time Stone: Restore Multiverse";
      }
    });
  }

  if (reverseBtn) {
    reverseBtn.addEventListener("click", reverseSnap);
  }

  function reverseSnap() {
    soundFX.playClick(990);
    document.querySelectorAll(".dusted-element").forEach((el) => {
      el.classList.remove("dusted-element");
    });
    isSnapped = false;
    if (snapBanner) snapBanner.classList.remove("is-active");
    if (gauntletBtn) gauntletBtn.style.borderColor = "var(--arc-gold)";
    const tooltip = document.getElementById("snap-tooltip");
    if (tooltip) tooltip.innerText = "Thanos Snap // Disintegrate 50%";
  }

  // ------------------------------------------------------------------------
  // 16. Return to Top & Telemetry Clock
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById("btn-back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      soundFX.playRepulsorBlast();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function updateClock() {
    const clockEl = document.getElementById("footer-ist-clock");
    if (clockEl) {
      const now = new Date();
      clockEl.innerText =
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        }) + " IST";
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Smooth scroll click handler for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          soundFX.playClick(720);
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

});
