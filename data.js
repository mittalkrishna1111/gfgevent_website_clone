/**
 * ==========================================================================
 * AVENGERS: INITIATIVE '26 // Multiverse of Code
 * GeeksforGeeks Student Chapter — Bennett University
 * Global Multiverse Dataset (Factions, Tracks, Timeline, Prizes, Mentors, FAQs)
 * ==========================================================================
 */

// 1. The 5 Avengers Hero Factions
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

// 2. The 6 Infinity Stone Tracks
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

// 3. TVA Sacred Timeline Phases
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

// 4. Stark Treasury Prizes & Bounties
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

// 5. S.H.I.E.L.D. Hero Avatar Seals
const AVATARS = [
  { id: "ironman", name: "Iron Man", color: "#e23636", initials: "IM" },
  { id: "spiderman", name: "Spider-Man", color: "#ef4444", initials: "SM" },
  { id: "strange", name: "Doctor Strange", color: "#10b981", initials: "DS" },
  { id: "wanda", name: "Scarlet Witch", color: "#dc2626", initials: "SW" },
  { id: "panther", name: "Black Panther", color: "#a855f7", initials: "BP" },
  { id: "thor", name: "Thor Odinson", color: "#00f0ff", initials: "TH" }
];

// 6. Avengers Council & Advisory Mentors
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

// 7. Multiverse Allies & Sponsors
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

// 8. J.A.R.V.I.S. Operational FAQ
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

// 9. Bennett University Campus Details
const CAMPUS_INFO = {
  institution: "Bennett University (The Times Group)",
  location: "Plot Nos 8, 11, TechZone 2, Greater Noida, UP 201310",
  coordinates: "28.4595° N, 77.5140° E",
  metro: "Pari Chowk / Alpha 1 Metro Station (Aqua Line)",
  amenities: [
    "1 Gbps Fiber Wi-Fi",
    "NVIDIA DGX Supercomputing Cluster",
    "Apple iMac Developer Studio",
    "24/7 Hacker Lounge & Cafeteria",
    "Dedicated Rest & Sleeping Zones"
  ]
};
