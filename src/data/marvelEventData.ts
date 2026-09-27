export interface Faction {
  id: string;
  name: string;
  alias: string;
  themeColor: string; // hex
  glowColor: string;
  secondaryColor: string;
  icon: string;
  soundFreq: number;
  domain: string;
  motto: string;
  description: string;
  techFocus: string[];
}

export interface InfinityTrack {
  id: string;
  stone: string;
  stoneColor: string;
  stoneGlow: string;
  title: string;
  domain: string;
  bounty: string;
  tagline: string;
  description: string;
  sampleProblems: string[];
  techStack: string[];
  icon: string;
}

export interface TimelineEvent {
  phase: string;
  codename: string;
  date: string;
  time: string;
  title: string;
  description: string;
  status: "completed" | "active" | "upcoming";
  location: string;
  badge: string;
}

export interface PrizeTier {
  rank: string;
  title: string;
  amount: string;
  stone: string;
  stoneColor: string;
  perks: string[];
  featured?: boolean;
}

export interface SpeakerJudge {
  name: string;
  codename: string;
  role: string;
  affiliation: string;
  superpower: string;
  avatar: string;
  skills: string[];
  verifiedBadge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  protocolCategory: "Logistics" | "Eligibility" | "Hacking" | "Bennett Campus";
}

// 5 Hero Factions that modify the interface HUD
export const FACTIONS: Faction[] = [
  {
    id: "stark",
    name: "Stark AI Initiative",
    alias: "Iron Man Protocol",
    themeColor: "#e23636",
    glowColor: "rgba(226, 54, 54, 0.45)",
    secondaryColor: "#fbbf24",
    icon: "ShieldAlert",
    soundFreq: 520,
    domain: "Artificial Intelligence & Cloud Arc Systems",
    motto: "Sometimes you gotta run before you can walk.",
    description: "Architect cutting-edge autonomous agents, neural synthesis pipelines, and high-performance cloud backends that operate at J.A.R.V.I.S. efficiency.",
    techFocus: ["LLM Agents", "PyTorch", "Kubernetes", "Next.js", "Edge Computing"],
  },
  {
    id: "captain",
    name: "Super Soldier Command",
    alias: "First Avenger Protocol",
    themeColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    secondaryColor: "#cbd5e1",
    icon: "Shield",
    soundFreq: 440,
    domain: "Cybersecurity, Zero-Trust & Web3 Defense",
    motto: "I can do this all day.",
    description: "Fortify digital perimeters against multiversal exploits. Design decentralized sovereign identity and zero-knowledge defensive protocols.",
    techFocus: ["Zero-Knowledge Proofs", "Smart Contracts", "Cryptographic Auditing", "Rust", "Solidity"],
  },
  {
    id: "strange",
    name: "Kamar-Taj Quantum Labs",
    alias: "Sorcerer Supreme Protocol",
    themeColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    secondaryColor: "#f59e0b",
    icon: "Eye",
    soundFreq: 660,
    domain: "Quantum Computing & Multiverse Simulators",
    motto: "Dormammu, I've come to bargain.",
    description: "Manipulate temporal datasets, simulate parallel probabilistic outcomes, and conquer combinatorial algorithmic bottlenecks.",
    techFocus: ["Quantum Qiskit", "Temporal Graphs", "Algorithmic Trading", "High Performance C++", "WebGPU"],
  },
  {
    id: "wakanda",
    name: "Wakandan Design Group",
    alias: "Black Panther Protocol",
    themeColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.45)",
    secondaryColor: "#e2e8f0",
    icon: "Cpu",
    soundFreq: 587,
    domain: "Vibranium IoT, Smart Hardware & Green Tech",
    motto: "Wakanda Forever.",
    description: "Harness physical computing, robotics, and energy-efficient embedded systems to solve real-world sustainability and healthcare challenges.",
    techFocus: ["Embedded C / ESP32", "ROS2 Robotics", "CleanTech IoT", "Computer Vision", "BLE Mesh"],
  },
  {
    id: "thor",
    name: "Asgardian Stormgrid",
    alias: "God of Thunder Protocol",
    themeColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.45)",
    secondaryColor: "#38bdf8",
    icon: "Zap",
    soundFreq: 784,
    domain: "High-Throughput Streaming & Distributed Systems",
    motto: "Bring me Thanos!",
    description: "Channel high-voltage data pipelines capable of absorbing gigabytes of telemetry per second without breaking a thread.",
    techFocus: ["Apache Kafka", "Go Distributed Systems", "gRPC", "ClickHouse", "Wasm"],
  },
];

// 6 Infinity Stone Flagship Tracks
export const INFINITY_TRACKS: InfinityTrack[] = [
  {
    id: "space-stone",
    stone: "Space Stone",
    stoneColor: "#00f0ff",
    stoneGlow: "rgba(0, 240, 255, 0.5)",
    title: "Tesseract Protocol: Autonomous Mobility & P2P Networks",
    domain: "Smart Cities & Decentralized Networks",
    bounty: "₹45,000",
    tagline: "Warp spatial boundaries through decentralized protocols.",
    description: "Build peer-to-peer mesh networks, smart city traffic telemetry, spatial routing algorithms, and location-aware decentralized apps.",
    sampleProblems: [
      "Decentralized peer-to-peer disaster communication mesh with zero cellular dependencies.",
      "Real-time drone corridor coordination and collision prevention using WebSockets & GIS.",
      "Zero-latency urban transport routing engine with congestion pricing prediction.",
    ],
    techStack: ["Libp2p", "PostGIS", "WebRTC", "Go", "Leaflet/Mapbox"],
    icon: "Compass",
  },
  {
    id: "mind-stone",
    stone: "Mind Stone",
    stoneColor: "#fbbf24",
    stoneGlow: "rgba(251, 191, 36, 0.5)",
    title: "Cerebro-Vision: Autonomous Multi-Agent AI",
    domain: "Generative AI & LLMs",
    bounty: "₹55,000",
    tagline: "Ignite synthetic cognition with autonomous agent clusters.",
    description: "Develop autonomous multi-agent swarms, self-correcting code evaluators, multimodal medical assistants, and intelligent workflow assistants.",
    sampleProblems: [
      "Multi-agent autonomous software auditor that drafts pull request fixes and security tests.",
      "Multimodal clinical triage copilot parsing audio vitals and DICOM radiology scans.",
      "Dynamic education tutor tailoring real-time coding curricula to student mental flow.",
    ],
    techStack: ["LangChain", "Gemini 1.5 Flash", "LlamaIndex", "FastAPI", "VectorDBs"],
    icon: "Brain",
  },
  {
    id: "time-stone",
    stone: "Time Stone",
    stoneColor: "#10b981",
    stoneGlow: "rgba(16, 185, 129, 0.5)",
    title: "Temporal Eye of Agamotto: Predictive Systems",
    domain: "FinTech, Climate Analytics & Forecasting",
    bounty: "₹40,000",
    tagline: "Peer 14,000,605 moves ahead into the future of data.",
    description: "Harness time-series modeling, predictive anomaly detection in financial exchanges, and high-precision climate event modeling.",
    sampleProblems: [
      "High-frequency flash crash anomaly detection engine evaluating order-book depth.",
      "Hyperlocal monsoonal flood prediction model using satellite radar streams.",
      "Dynamic cloud resource scaler anticipating serverless surge traffic before it peaks.",
    ],
    techStack: ["TimescaleDB", "Prophet / ARIMA", "Polars", "Grafana", "Python"],
    icon: "Clock",
  },
  {
    id: "reality-stone",
    stone: "Reality Stone",
    stoneColor: "#ef4444",
    stoneGlow: "rgba(239, 68, 68, 0.5)",
    title: "Aether Matrix: Spatial Computing & Next-Gen Interfaces",
    domain: "AR / VR & Creative Web3D",
    bounty: "₹40,000",
    tagline: "Reshape digital reality with WebXR and tactile 3D.",
    description: "Craft immersive browser-based spatial computing tools, WebXR educational labs, 3D collaborative sandboxes, and mind-bending UI interactions.",
    sampleProblems: [
      "Browser-based spatial anatomy simulation allowing surgical practice via webcam gesture controls.",
      "Immersive 3D architectural twin for Bennett University campus navigation.",
      "WebGPU generative audio-visual synthesizer for creative live coding performances.",
    ],
    techStack: ["Three.js", "WebXR", "GLSL Shaders", "React Three Fiber", "WebAudio"],
    icon: "Layers",
  },
  {
    id: "power-stone",
    stone: "Power Stone",
    stoneColor: "#a855f7",
    stoneGlow: "rgba(168, 85, 247, 0.5)",
    title: "Orb of Destruction: Cyber Warfare & Resilient Systems",
    domain: "DevSecOps, Cloud & High-Throughput Fintech",
    bounty: "₹40,000",
    tagline: "Unleash indestructible infrastructure against hostile threats.",
    description: "Architect bulletproof zero-downtime systems, automated penetration testing engines, DDoS mitigation filters, and quantum-resistant vaults.",
    sampleProblems: [
      "Automated honeypot cluster identifying zero-day API exploit payloads in real time.",
      "Post-quantum cryptographic key-exchange proxy for microservice meshes.",
      "Self-healing Kubernetes operator restoring tainted clusters under stateful stress.",
    ],
    techStack: ["Rust", "eBPF", "Docker / K8s", "Envoy Proxy", "HashiCorp Vault"],
    icon: "ShieldAlert",
  },
  {
    id: "soul-stone",
    stone: "Soul Stone",
    stoneColor: "#f97316",
    stoneGlow: "rgba(249, 115, 22, 0.5)",
    title: "Vormir Covenant: Social Impact & Assistive Tech",
    domain: "HealthTech, Accessibility & Humanitarian Tech",
    bounty: "₹30,000",
    tagline: "Tech built with heart to uplift every human life.",
    description: "Develop assistive software for the visually/auditory impaired, mental health support frameworks, and transparent philanthropic distribution chains.",
    sampleProblems: [
      "Real-time Indian Sign Language (ISL) bidirectional translator running client-side at 60 FPS.",
      "Accessible voice-first banking terminal for rural populations supporting regional dialects.",
      "Blood bank & emergency medical supply matching network during natural crises.",
    ],
    techStack: ["MediaPipe", "TensorFlow.js", "Next.js PWA", "Web Speech API", "Supabase"],
    icon: "HeartHandshake",
  },
];

// TVA / Sacred Timeline Roadmap
export const SACRED_TIMELINE: TimelineEvent[] = [
  {
    phase: "PHASE 01",
    codename: "AVENGERS ASSEMBLE",
    date: "OCTOBER 01 – 14, 2026",
    time: "23:59 IST",
    title: "Registration & Clearance Application",
    description: "Squad recruitment open across universities. Submit your S.H.I.E.L.D. clearance pass and declare your faction alignment.",
    status: "active",
    location: "Global Digital Portal",
    badge: "Applications Open",
  },
  {
    phase: "PHASE 02",
    codename: "MULTIVERSE NEXUS",
    date: "OCTOBER 15, 2026",
    time: "18:00 IST",
    title: "Idea Synopsis & Stone Allocation",
    description: "Top 100 shortlisted squads announced. Problem statements finalized and starter kits distributed via Stark Industries GitHub.",
    status: "upcoming",
    location: "Discord War Room",
    badge: "Shortlisting",
  },
  {
    phase: "PHASE 03",
    codename: "STARK EXPO KICKOFF",
    date: "OCTOBER 16, 2026",
    time: "09:00 IST",
    title: "In-Person Check-in & Hacking Begins",
    description: "Arrival at Bennett University Greater Noida campus. Opening keynote by tech pioneers, team badge issuance, and 36-hour countdown ignition.",
    status: "upcoming",
    location: "Auditorium, Bennett University",
    badge: "Day 1 / In-Person",
  },
  {
    phase: "PHASE 04",
    codename: "MIDNIGHT PROTOCOL",
    date: "OCTOBER 17, 2026",
    time: "00:00 – 04:00 IST",
    title: "Midnight Mentorship & Infinity Gaming Hour",
    description: "1-on-1 dossier reviews with Silicon Valley & Bangalore mentors, midnight energy pizzas, Red Bull boosts, and retro Marvel arcade showdowns.",
    status: "upcoming",
    location: "Tech Labs, Bennett University",
    badge: "Sprint & Mentorship",
  },
  {
    phase: "PHASE 05",
    codename: "THE ENDGAME",
    date: "OCTOBER 17 – 18, 2026",
    time: "17:00 IST",
    title: "Final Expo, Living Tribunal Judging & Awards",
    description: "Top 10 finalists pitch on the main stage to venture capitalists and tech directors. ₹2,50,000+ prize pool and Stark Trophy distribution.",
    status: "upcoming",
    location: "Main Stage & Live Stream",
    badge: "Grand Finale",
  },
];

// Prize Pool & Treasury
export const PRIZE_TIERS: PrizeTier[] = [
  {
    rank: "CHAMPION",
    title: "The Infinity Gauntlet: Grand Winner",
    amount: "₹1,00,000",
    stone: "All 6 Infinity Stones",
    stoneColor: "#fbbf24",
    perks: [
      "Custom Hand-Forged Infinity Gauntlet Trophy",
      "Direct Interview Fast-track with Sponsor Startups",
      "Cloud Credits worth $2,500+",
      "Official GeeksforGeeks Pro Subscriptions & Swag Kits",
      "Bennett University Innovation Incubator Grant eligibility",
    ],
    featured: true,
  },
  {
    rank: "RUNNER UP",
    title: "Vibranium Shield: 1st Runner Up",
    amount: "₹60,000",
    stone: "Space & Power Core",
    stoneColor: "#00f0ff",
    perks: [
      "Official Vibranium Shield Commemorative Trophy",
      "Cloud Credits worth $1,500+",
      "GFG Premium Course Vouchers",
      "Exclusive Stark Industries Hardware Gear Kit",
    ],
  },
  {
    rank: "2ND RUNNER UP",
    title: "Stormbreaker: 2nd Runner Up",
    amount: "₹35,000",
    stone: "Thunder Core",
    stoneColor: "#a855f7",
    perks: [
      "Stormbreaker Acrylic Trophy",
      "Cloud Credits worth $750",
      "GFG Goodies & Swag Bag",
      "Mentorship Fastlane with Tech Leaders",
    ],
  },
  {
    rank: "SPECIAL CATEGORY",
    title: "Best All-Women Squad // Captain Marvel Award",
    amount: "₹25,000",
    stone: "Cosmic Flame",
    stoneColor: "#ef4444",
    perks: [
      "Women in Tech Leadership Fellowship",
      "Dedicated Venture Capitalist Pitch Session",
      "Custom Marvel Merchandise & Certifications",
    ],
  },
  {
    rank: "SPECIAL CATEGORY",
    title: "Best Freshman Squad // Spider-Man Rookie Award",
    amount: "₹15,000",
    stone: "Web-Slinger",
    stoneColor: "#e23636",
    perks: [
      "Rookie of the Year Multiverse Plaque",
      "GeeksforGeeks DSA Mastery Access",
      "Exclusive Bennett University Tech Club Mentorship",
    ],
  },
  {
    rank: "SPECIAL CATEGORY",
    title: "Wakanda Design Group // Best Hardware Prototype",
    amount: "₹15,000",
    stone: "Vibranium Core",
    stoneColor: "#10b981",
    perks: [
      "Hardware Component Grants",
      "Maker Lab Residency Access",
      "Microcontroller Dev Kits & Sensors",
    ],
  },
];

// Avengers Council (Speakers & Mentors)
export const ADVISORY_COUNCIL: SpeakerJudge[] = [
  {
    name: "Dr. Aakash Stark",
    codename: "Architect Supreme",
    role: "Principal AI Scientist",
    affiliation: "Google DeepMind / Ex-Stark Lab",
    superpower: "100B+ Param Model Distillation & Quantum Optimizers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    skills: ["Generative AI", "Agentic Systems", "PyTorch"],
    verifiedBadge: "Omega Level",
  },
  {
    name: "Vikram Banner",
    codename: "The Distributed Hulk",
    role: "VP of Engineering & Systems",
    affiliation: "PostgreSQL Core Contributor",
    superpower: "Zero-Latency 10M QPS Database Architectures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    skills: ["Distributed DBs", "Rust", "Kernel BPF"],
    verifiedBadge: "Alpha Level",
  },
  {
    name: "Dr. Natasha Romanoff",
    codename: "Black Widow Sentinel",
    role: "Chief Information Security Officer",
    affiliation: "Zero-Day Exploits & Sovereign Web3",
    superpower: "Penetrating Zero-Trust Firewalls in Under 60 Seconds",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    skills: ["Offensive Security", "Smart Contracts", "Cryptanalysis"],
    verifiedBadge: "Omega Level",
  },
  {
    name: "Prof. Rajesh Strange",
    codename: "Time Weaver",
    role: "Head of Computer Science",
    affiliation: "Bennett University (Times of India Group)",
    superpower: "Nurturing 1,000+ Student Builders into Global Unicorn Founders",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    skills: ["Algorithms", "Deep Tech", "Incubation"],
    verifiedBadge: "Sorcerer Supreme",
  },
];

// Event FAQs
export const EVENT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    protocolCategory: "Eligibility",
    question: "Who is eligible to assemble for Multiverse of Code 2026?",
    answer: "Any undergraduate or postgraduate student enrolled in any recognized university or college across India is eligible! Whether you are a freshman writing your first line of Python or a senior deploying Kubernetes clusters, our 6 Infinity Tracks are structured with rookie, general, and specialized tiers.",
  },
  {
    id: "faq-2",
    protocolCategory: "Logistics",
    question: "Is the hackathon completely free to attend?",
    answer: "YES! 100% free. Thanks to the GeeksforGeeks Student Chapter Bennett University and our multiversal industry sponsors, participation, food, midnight energy drinks, Wi-Fi, swag kits, and dorm access are completely free for all shortlisted teams.",
  },
  {
    id: "faq-3",
    protocolCategory: "Bennett Campus",
    question: "Where is Bennett University located and what amenities are provided?",
    answer: "Bennett University is located in TechZone 2, Greater Noida, Delhi NCR (accessible via Noida-Greater Noida Metro & expressways). Hacking takes place in the state-of-the-art Apple iMac Labs, NVIDIA Supercomputing AI workstations, air-conditioned hacking bays, and 24/7 dining halls with high-speed 1 Gbps fiber optic internet.",
  },
  {
    id: "faq-4",
    protocolCategory: "Hacking",
    question: "What is the team size allowed?",
    answer: "Teams must consist of 2 to 4 members. Inter-college teams and inter-departmental collaborations are welcome and strongly encouraged! If you don't have a full squad yet, join the official GFG Bennett University Discord to recruit heroes.",
  },
  {
    id: "faq-5",
    protocolCategory: "Hacking",
    question: "Can we start working on our project before the hackathon begins?",
    answer: "No pre-built code is permitted. You may brainstorm ideas, read APIs, and review documentation in Phase 1, but all commits, lines of code, and prototypes must be initiated during the 36-hour sprint at Bennett University starting October 16 at 09:00 IST.",
  },
  {
    id: "faq-6",
    protocolCategory: "Logistics",
    question: "Will accommodation and meals be provided for outstation participants?",
    answer: "Yes! Shortlisted outstation teams receive overnight campus accommodation in Bennett University's modern student residences, plus 5 full meals, continuous coffee/tea stations, and midnight snacks.",
  },
];

// Marvel Hero Avatars for S.H.I.E.L.D. Badge Generator
export const HERO_AVATARS = [
  { id: "ironman", name: "Iron Man", role: "AI & Systems Architect", badge: "Mark LXXXV", color: "#e23636" },
  { id: "spiderman", name: "Spider-Man", role: "Full-Stack Web Slinger", badge: "Queens Sector", color: "#ef4444" },
  { id: "strange", name: "Doctor Strange", role: "Quantum & Algorithms", badge: "Eye of Agamotto", color: "#10b981" },
  { id: "wanda", name: "Scarlet Witch", role: "Reality Manipulation & WebXR", badge: "Chaos Magic", color: "#dc2626" },
  { id: "panther", name: "Black Panther", role: "Hardware & IoT Sentinel", badge: "Vibranium Weave", color: "#a855f7" },
  { id: "thor", name: "Thor Odinson", role: "High-Throughput Cloud", badge: "Stormbreaker", color: "#00f0ff" },
];

export const SPONSORS = [
  { name: "GeeksforGeeks", tier: "Title Organizer", domain: "Developer Ecosystem & Learning" },
  { name: "Bennett University", tier: "Academic Host & Venue", domain: "Times of India Group Institution" },
  { name: "Stark Industries", tier: "Multiverse Partner", domain: "Advanced Quantum & AI Robotics" },
  { name: "Wakanda Design Group", tier: "Hardware Partner", domain: "Vibranium CleanTech Innovations" },
  { name: "Devfolio", tier: "Platform Partner", domain: "Hackathon Management & Submissions" },
  { name: "GitHub", tier: "Developer Tooling", domain: "Octocat Open Source Community" },
  { name: "Polygon", tier: "Web3 Track Sponsor", domain: "Zero-Knowledge Rollup Protocols" },
  { name: "Major League Hacking", tier: "Global League Ally", domain: "Student Hacker Community" },
];
