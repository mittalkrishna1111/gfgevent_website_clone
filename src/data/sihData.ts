export interface ProblemStatement {
  id: string;
  code: string;
  title: string;
  category: "Software" | "Hardware";
  domain: string;
  organization: string;
  ministry: string;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  expectedOutput: string;
  technologies: string[];
  datasetUrl?: string;
  submissionsCount: number;
}

export interface ThemeDomain {
  id: string;
  title: string;
  categoryTag: string;
  iconName: string;
  description: string;
  problemsCount: number;
  highlightTech: string[];
  gradient: string;
}

export interface TimelinePhase {
  step: string;
  title: string;
  dateRange: string;
  status: "Completed" | "Active" | "Upcoming";
  description: string;
  deliverables: string[];
}

export interface NodalCenter {
  id: string;
  name: string;
  city: string;
  state: string;
  zone: "North" | "South" | "East" | "West" | "Central";
  tracksHosted: string[];
  teamsCount: number;
  featured: boolean;
}

export interface PartnerOrg {
  name: string;
  role: string;
  category: "Ministry" | "PSU" | "Technology Partner" | "Organizing Body";
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Eligibility" | "Teams & SPOC" | "Grand Finale" | "Hardware & Software";
}

export const SIH_STATS = {
  teamsRegistered: 52400,
  institutionsCount: 1280,
  problemStatements: 485,
  prizePoolCr: 2.5,
  nodalCentersCount: 75,
  patentsFiled: 240,
  startupsIncubated: 180,
  solutionDeploymentRate: 64,
};

export const THEME_DOMAINS: ThemeDomain[] = [
  {
    id: "smart-automation",
    title: "Smart Automation & Robotics",
    categoryTag: "AI & Software",
    iconName: "Cpu",
    description: "Autonomous industrial bots, edge computing, smart warehouse robotics, and generative AI copilot systems for public services.",
    problemsCount: 54,
    highlightTech: ["PyTorch", "ROS2", "Computer Vision", "Edge AI", "CUDA"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "clean-green-tech",
    title: "Clean & Green Technology",
    categoryTag: "Hardware & Green",
    iconName: "Leaf",
    description: "Carbon footprint monitoring, micro-plastic filtration, intelligent waste segregation, and industrial effluent tracking systems.",
    problemsCount: 42,
    highlightTech: ["IoT Sensors", "Embedded C++", "Spectroscopy", "GIS"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "healthcare-medtech",
    title: "Healthcare & MedTech",
    categoryTag: "AI & Software",
    iconName: "Activity",
    description: "Telemedicine for remote Himalayan & desert dispensaries, AI-driven diagnostic imaging, and counterfeit drug detection pipelines.",
    problemsCount: 68,
    highlightTech: ["FHIR", "DICOM Imaging", "Transformers", "Mobile SDKs"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "agriculture-rural",
    title: "Agriculture, FoodTech & Rural Dev",
    categoryTag: "Civic Tech",
    iconName: "Sprout",
    description: "Drone-based hyperspectral crop health surveillance, cold-chain temperature telemetry, and AI pest outbreak forecasting.",
    problemsCount: 47,
    highlightTech: ["Drone Autonomy", "LoRaWAN", "NDVI Indices", "Offline-First Mobile"],
    gradient: "from-lime-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "cybersecurity-defence",
    title: "Cybersecurity & National Defence",
    categoryTag: "Defence & Space",
    iconName: "ShieldCheck",
    description: "Zero-trust identity mesh for defense networks, automated firmware vulnerability scanners, and deepfake radar systems.",
    problemsCount: 39,
    highlightTech: ["eBPF", "Quantum-Resistant Crypto", "Rust", "SIEM Plugins"],
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: "space-tech-robotics",
    title: "Space Exploration & Geospatial",
    categoryTag: "Defence & Space",
    iconName: "Globe",
    description: "Satellite SAR image anomaly detection, CubeSat telemetry compression, and debris trajectory prediction models.",
    problemsCount: 31,
    highlightTech: ["Orbital Mechanics", "SAR Processing", "TensorFlow", "CartoDB"],
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
  {
    id: "smart-vehicles-ev",
    title: "Smart Mobility & EV Infrastructure",
    categoryTag: "Hardware & Green",
    iconName: "Zap",
    description: "Dynamic EV battery health prognostic twin, smart battery swapping protocols, and city fleet congestion mitigation.",
    problemsCount: 36,
    highlightTech: ["CAN Bus", "Digital Twin", "OCPP 2.0", "MATLAB Simulink"],
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
  {
    id: "disaster-management",
    title: "Disaster Resilience & Early Warning",
    categoryTag: "Civic Tech",
    iconName: "Radio",
    description: "Flash flood real-time river level radar warning, seismic tremor sensor mesh, and AI emergency evacuation router.",
    problemsCount: 29,
    highlightTech: ["GeoJSON", "Satellite Weather APIs", "WebSockets", "Mesh Radio"],
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    id: "blockchain-fintech",
    title: "Blockchain, FinTech & Governance",
    categoryTag: "AI & Software",
    iconName: "Coins",
    description: "Tamper-proof educational credential registry, smart escrow for DBT agricultural subsidies, and automated audit trails.",
    problemsCount: 34,
    highlightTech: ["Solidity", "Zero Knowledge Proofs", "Hyperledger", "E-Governance"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
];

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "ps-01",
    code: "SIH1601",
    title: "AI-Powered Real-Time Anomaly & Defect Detection in Railway Track Inspection Video Feeds",
    category: "Software",
    domain: "Smart Automation & Robotics",
    organization: "Ministry of Railways",
    ministry: "Govt of India",
    complexity: "Advanced",
    description: "Indian Railways inspects tens of thousands of kilometers of track daily via vehicle-mounted cameras. Develop an edge-capable computer vision system that detects rail fractures, missing fishplates, displaced ballast, and sleeper fissures in real-time under varying illumination and weather conditions.",
    expectedOutput: "A high-throughput inference pipeline running at 60 FPS on edge hardware, generating geolocated alert payloads with bounding box visual confirmation and confidence scoring.",
    technologies: ["YOLOv10", "TensorRT", "OpenCV", "FastAPI", "React Native"],
    submissionsCount: 142,
  },
  {
    id: "ps-02",
    code: "SIH1602",
    title: "Autonomous LoRa-Based Drone Mesh for Forest Fire Perimeter Telemetry & Smoke Signature Analysis",
    category: "Hardware",
    domain: "Disaster Resilience & Early Warning",
    organization: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
    ministry: "Govt of India",
    complexity: "Advanced",
    description: "In inaccessible forest terrains like Similipal and Bandipur, cellular coverage is nil. Teams must engineer an autonomous dual-drone swarm capable of relaying thermal imagery and carbon monoxide concentrations over a decentralized LoRa mesh network to base camp.",
    expectedOutput: "Working hardware prototype of a micro-UAV fitted with thermal sensor, STM32 microcontroller, LoRa transceiver, and a dashboard mapping fire vector propagation.",
    technologies: ["STM32", "LoRaWAN", "Thermal FLIR", "ArduPilot", "Python"],
    submissionsCount: 89,
  },
  {
    id: "ps-03",
    code: "SIH1603",
    title: "Decentralized Zero-Knowledge Verification for Tribal Land Rights & Forest Rights Act (FRA) Claims",
    category: "Software",
    domain: "Blockchain, FinTech & Governance",
    organization: "Ministry of Tribal Affairs",
    ministry: "Govt of India",
    complexity: "Intermediate",
    description: "Develop a transparent, tamper-proof registry for FRA claim processing that ensures historical land claim documents, gram sabha approvals, and satellite boundary polygons cannot be altered while preserving claimant privacy through zero-knowledge proofs.",
    expectedOutput: "Smart contracts on an EVM-compatible chain, offline-capable field verification progressive web app, and an administrative dashboard for District Collectors.",
    technologies: ["Circom / zk-SNARKs", "Solidity", "Next.js", "IPFS", "PostgreSQL"],
    submissionsCount: 97,
  },
  {
    id: "ps-04",
    code: "SIH1604",
    title: "Hyperspectral Satellite Image De-clouding & Soil Moisture Estimation for Smallholder Farmers",
    category: "Software",
    domain: "Space Exploration & Geospatial",
    organization: "Indian Space Research Organisation (ISRO)",
    ministry: "Department of Space",
    complexity: "Advanced",
    description: "Cloud cover severely impedes optical satellite monitoring during the crucial Kharif monsoon sowing season. Build a generative diffusion model that infers cloud-penetrating synthetic NDVI and soil moisture indices by fusing optical Sentinel-2 and radar Sentinel-1 SAR data.",
    expectedOutput: "A machine learning pipeline processing GeoTIFF arrays to reconstruct sub-surface moisture maps with less than 6% root mean square error (RMSE).",
    technologies: ["PyTorch", "Rasterio", "Google Earth Engine", "Diffusion Models"],
    submissionsCount: 114,
  },
  {
    id: "ps-05",
    code: "SIH1605",
    title: "Low-Cost Smart Acoustic Device for Early Detection of Neonatal Respiratory Distress in Primary Health Centers",
    category: "Hardware",
    domain: "Healthcare & MedTech",
    organization: "Ministry of Health & Family Welfare (MoHFW)",
    ministry: "Govt of India",
    complexity: "Intermediate",
    description: "Rural primary healthcare centers often lack pediatricians. Create a handheld digital stethoscope powered by an on-device micro-DSP that analyzes breath sound acoustics to differentiate between normal respiration, wheeze, stridor, and grunting in neonates.",
    expectedOutput: "Handheld electronic stethoscope prototype with Bluetooth LE link, LED diagnostic triage indicator, and a companion Android application in 8 regional languages.",
    technologies: ["ESP32-S3", "MEMS Microphones", "TinyML", "Flutter", "C++"],
    submissionsCount: 108,
  },
  {
    id: "ps-06",
    code: "SIH1606",
    title: "Predictive Lithium-Ion Battery Thermal Runaway Warning System for High-Density 2-Wheeler Swappable Packs",
    category: "Hardware",
    domain: "Smart Mobility & EV Infrastructure",
    organization: "Ministry of Heavy Industries",
    ministry: "Govt of India",
    complexity: "Advanced",
    description: "Indian summers with ambient temperatures exceeding 47°C present severe risks of battery thermal runaway. Build an active BMS expansion module with multi-point impedance spectroscopy and gas detection to alert drivers 90 seconds prior to critical thermal propagation.",
    expectedOutput: "Functional BMS daughterboard with SPI/CAN bus integration, custom firmware, and live CAN packet visualizer showing cell-level impedance metrics.",
    technologies: ["CAN Bus", "Impedance Spectroscopy", "FreeRTOS", "Altium Designer"],
    submissionsCount: 76,
  },
  {
    id: "ps-07",
    code: "SIH1607",
    title: "Multilingual Voice-First Micro-Advisory for Farmer Credit and KCC Eligibility Verification",
    category: "Software",
    domain: "Agriculture, FoodTech & Rural Dev",
    organization: "NABARD",
    ministry: "Ministry of Finance",
    complexity: "Beginner",
    description: "Illiteracy or language barriers prevent millions of farmers from accessing formal Kisan Credit Cards. Build an open-source voice bot operating across 12 Indian regional dialects with Whisper ASR that guides farmers through step-by-step documentation and eligibility estimation.",
    expectedOutput: "Interactive voice response PWA supporting streaming audio synthesis and low-latency speech recognition over 2G/3G mobile networks.",
    technologies: ["Bhashini API", "Whisper", "LangChain", "WebRTC", "FastAPI"],
    submissionsCount: 165,
  },
  {
    id: "ps-08",
    code: "SIH1608",
    title: "Automated eBPF-Driven Zero-Day Kernel Rootkit Detection for Critical Public Infrastructure",
    category: "Software",
    domain: "Cybersecurity & National Defence",
    organization: "CERT-In / MeitY",
    ministry: "Ministry of Electronics and IT",
    complexity: "Advanced",
    description: "Power grids and nuclear telemetry servers require deterministic kernel inspection without introducing latency or stability risks. Implement an eBPF sensor monitor that identifies syscall hooking, namespace escaping, and hidden process structures in Linux 6.x kernels.",
    expectedOutput: "eBPF probe suite in Rust/C with minimal CPU overhead (<1.5%), paired with an interactive live telemetry dashboard streaming security events.",
    technologies: ["eBPF (Aya / Cilium)", "Rust", "Grafana", "Prometheus", "Linux Kernel"],
    submissionsCount: 82,
  },
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    step: "01",
    title: "College Internal Hackathon & SPOC Endorsement",
    dateRange: "August 15 – September 20, 2026",
    status: "Completed",
    description: "Every participating AICTE/UGC recognized college organises an internal round to screen and nominate their top 30 student squads (minimum 1 female member mandatory per squad).",
    deliverables: [
      "College SPOC verification & registration on SIH portal",
      "Upload internal jury scorecards & video pitches",
      "Student squad roster lock (6 members per team)",
    ],
  },
  {
    step: "02",
    title: "Central Idea Submission & Ministry Scrutiny",
    dateRange: "September 25 – October 25, 2026",
    status: "Active",
    description: "Teams submit comprehensive design presentations (PPT), architecture flowcharts, and 3-minute video prototypes mapped directly against ministry problem statements.",
    deliverables: [
      "Standardized 7-slide SIH technical deck",
      "Detailed bill of materials (for Hardware edition)",
      "Ministry technical jury evaluation & stage-1 shortlist",
    ],
  },
  {
    step: "03",
    title: "Mentorship Clinic & Grand Finale Shortlisting",
    dateRange: "November 01 – November 18, 2026",
    status: "Upcoming",
    description: "Shortlisted finalist teams receive direct feedback sessions with senior scientists, technical directors from ministries, and industry mentors to polish system architecture.",
    deliverables: [
      "Announcement of top 1,500 finalist squads",
      "Allotment of 75+ premier Nodal Centers nationwide",
      "Travel arrangements & logistics confirmation by AICTE",
    ],
  },
  {
    step: "04",
    title: "The 36-Hour Non-Stop Grand Finale",
    dateRange: "December 11 – December 13, 2026",
    status: "Upcoming",
    description: "The nation plugs in. 36 hours of relentless programming for software squads, and 5 consecutive days of fabrication for hardware squads across premier IITs, NITs, and IIITs.",
    deliverables: [
      "Round 1, Round 2, and Final Jury grilling",
      "Live nationwide Prime Ministerial video address",
      "Selection of winners: ₹1,00,000 cash prize per problem statement",
    ],
  },
  {
    step: "05",
    title: "Incubation, Seed Grants & Ministry Pilot Adoption",
    dateRange: "January 2027 Onwards",
    status: "Upcoming",
    description: "Winning prototypes transition into deployable intellectual property through AICTE's Innovation Cell, startup incubation grants up to ₹10 Lakhs, and ministry pilot trials.",
    deliverables: [
      "IPR filing assistance & patent attorney support",
      "Fast-track entry into national startup incubators",
      "Production deployment in sponsoring government departments",
    ],
  },
];

export const NODAL_CENTERS: NodalCenter[] = [
  {
    id: "nc-01",
    name: "Indian Institute of Technology (IIT) Delhi",
    city: "New Delhi",
    state: "Delhi NCR",
    zone: "North",
    tracksHosted: ["Smart Automation & Robotics", "Cybersecurity & Defence"],
    teamsCount: 42,
    featured: true,
  },
  {
    id: "nc-02",
    name: "Indian Institute of Technology (IIT) Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    zone: "West",
    tracksHosted: ["Smart Mobility & EV Infrastructure", "Space Tech & Robotics"],
    teamsCount: 48,
    featured: true,
  },
  {
    id: "nc-03",
    name: "National Institute of Technology (NIT) Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    zone: "South",
    tracksHosted: ["Clean & Green Technology", "Agriculture & Rural Dev"],
    teamsCount: 36,
    featured: true,
  },
  {
    id: "nc-04",
    name: "Indian Institute of Engineering Science and Technology (IIEST) Shibpur",
    city: "Kolkata",
    state: "West Bengal",
    zone: "East",
    tracksHosted: ["Disaster Resilience & Early Warning", "Blockchain & FinTech"],
    teamsCount: 30,
    featured: false,
  },
  {
    id: "nc-05",
    name: "College of Engineering, Pune (COEP)",
    city: "Pune",
    state: "Maharashtra",
    zone: "West",
    tracksHosted: ["Healthcare & MedTech", "Smart Automation & Robotics"],
    teamsCount: 38,
    featured: true,
  },
  {
    id: "nc-06",
    name: "National Institute of Technology (NIT) Rourkela",
    city: "Rourkela",
    state: "Odisha",
    zone: "East",
    tracksHosted: ["Clean & Green Technology", "Smart Mining"],
    teamsCount: 28,
    featured: false,
  },
  {
    id: "nc-07",
    name: "Indian Institute of Information Technology (IIIT) Allahabad",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    zone: "Central",
    tracksHosted: ["Cybersecurity & Defence", "Blockchain & FinTech"],
    teamsCount: 34,
    featured: true,
  },
  {
    id: "nc-08",
    name: "BMS College of Engineering",
    city: "Bengaluru",
    state: "Karnataka",
    zone: "South",
    tracksHosted: ["Space Tech & Robotics", "Healthcare & MedTech"],
    teamsCount: 44,
    featured: false,
  },
];

export const PARTNERS_ORGS: PartnerOrg[] = [
  { name: "Ministry of Education (MoE)", role: "Principal Organizer", category: "Organizing Body", badge: "Govt of India" },
  { name: "AICTE", role: "All India Council for Technical Education", category: "Organizing Body", badge: "Apex Statutory" },
  { name: "Innovation Cell (MIC)", role: "Program Director", category: "Organizing Body", badge: "MoE Initiative" },
  { name: "ISRO", role: "Department of Space", category: "Ministry", badge: "Space Partner" },
  { name: "DRDO", role: "Defence Research & Development", category: "Ministry", badge: "Defence Partner" },
  { name: "Ministry of Railways", role: "Public Transportation Infrastructure", category: "Ministry", badge: "Railways" },
  { name: "Ministry of Jal Shakti", role: "Water Resources & Clean Ganga", category: "Ministry", badge: "Jal Jeevan" },
  { name: "Amazon Web Services (AWS)", role: "Cloud & Compute Sponsor", category: "Technology Partner", badge: "Cloud Credits" },
  { name: "Intel", role: "Edge AI & Hardware Lab Partner", category: "Technology Partner", badge: "AI Accelerator" },
  { name: "Persistent Systems", role: "Founding Technology Partner", category: "Technology Partner", badge: "Execution Partner" },
  { name: "Cisco Systems", role: "Networking & Cyber Defense Partner", category: "Technology Partner", badge: "Tech Leader" },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-01",
    question: "Who is eligible to participate in the Smart India Hackathon?",
    answer: "Regular undergraduate and postgraduate students from AICTE/UGC recognized higher education institutions across India are eligible. Each team must consist of exactly 6 members, including at least one female team member. Inter-college teams are not permitted; all 6 students must belong to the same parent institution.",
    category: "Eligibility",
  },
  {
    id: "faq-02",
    question: "What is the role of the College SPOC (Single Point of Contact)?",
    answer: "The College SPOC is an authorized faculty member appointed by the head of the institution. Only the SPOC has credentials to register shortlisted teams on the official SIH portal after conducting an internal college hackathon. Individual student submissions directly to the portal without SPOC endorsement are automatically disqualified.",
    category: "Teams & SPOC",
  },
  {
    id: "faq-03",
    question: "How does the Software Edition differ from the Hardware Edition?",
    answer: "The Software Edition is a continuous 36-hour digital coding sprint where teams develop functional software, web/mobile applications, or machine learning models. The Hardware Edition is a 5-day on-site fabrication sprint where teams assemble and test physical prototypes (circuits, mechanics, IoT rigs) with components subsidized up to ₹25,000 per team.",
    category: "Hardware & Software",
  },
  {
    id: "faq-04",
    question: "What travel and lodging accommodations are provided for the Grand Finale?",
    answer: "All finalists receive reimbursement for sleeper class train travel (or equivalent AC-3 tier where specified) upon submitting genuine railway tickets. Free boarding, high-speed Wi-Fi, 24/7 catering, safety services, and comfortable rest zones are fully provided at the designated Nodal Center for all 6 team members and up to 2 faculty mentors.",
    category: "Grand Finale",
  },
  {
    id: "faq-05",
    question: "Who retains Intellectual Property (IP) rights to the solutions created?",
    answer: "The participating students and their mentors retain primary Intellectual Property (IP) rights. However, the sponsoring Ministry, State Government, or Industry partner reserves a non-exclusive, perpetual right to pilot, customize, and deploy the solution internally for public interest and national development.",
    category: "Eligibility",
  },
  {
    id: "faq-06",
    question: "What is the cash prize structure for winning teams?",
    answer: "Each Problem Statement carries a standardized national cash award of ₹1,00,000 (INR One Lakh) along with trophy, certificates of excellence, and fast-track eligibility into the AICTE Innovation Cell's Startup Incubation Scheme with seed grant support up to ₹10 Lakhs.",
    category: "Grand Finale",
  },
];
