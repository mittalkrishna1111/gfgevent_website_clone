export interface ExoSuitVariant {
  id: string;
  name: string;
  code: string;
  role: string;
  tagline: string;
  description: string;
  themeColor: string;
  glowColor: string;
  accentColor: string;
  classType: "Assault" | "Stealth" | "Siege" | "Tactical Recon";
  specs: {
    armorRating: number; // 0-100
    kineticSpeed: number; // 0-100
    synapticSync: number; // 0-100
    energyEfficiency: number; // 0-100
    shieldCapacity: string;
    peakThrust: string;
    neuralLatency: string;
    dryMass: string;
  };
  features: string[];
  hotspots: {
    id: string;
    title: string;
    desc: string;
    x: number; // percentage
    y: number; // percentage
    system: string;
  }[];
}

export interface ProductFeature {
  id: string;
  index: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  category: string;
  telemetryMetric: string;
  telemetryValue: string;
  iconName: string;
  accent: "crimson" | "cyan" | "amber";
  specs: { label: string; val: string }[];
}

export interface RoadmapStage {
  id: string;
  stageNumber: string;
  timeframe: string;
  title: string;
  subtitle: string;
  description: string;
  status: "Completed" | "Current Deployment" | "Imminent" | "Future Phase";
  deliverables: string[];
  telemetryCode: string;
}

export interface BenchmarkItem {
  metric: string;
  legacyVal: number;
  legacyUnit: string;
  aetherisVal: number;
  aetherisUnit: string;
  unit: string;
  advantage: string;
  description: string;
}

export const EXO_SUITS: ExoSuitVariant[] = [
  {
    id: "vanguard-phantom",
    name: "Vanguard Phantom",
    code: "NX-01 // PHANTOM",
    role: "Sub-Visual Infiltration & High-G Kinetic Interception",
    tagline: "Unseen until the impact. Unstoppable upon contact.",
    description:
      "Engineered with a meta-material refractive mantle and hyper-conductive carbon nanotube musculature. The Vanguard Phantom operates below sensor resolution thresholds while delivering catastrophic kinetic energy transfer via zero-point synaptic discharge.",
    themeColor: "#ff2a55",
    glowColor: "rgba(255, 42, 85, 0.4)",
    accentColor: "#ff7597",
    classType: "Stealth",
    specs: {
      armorRating: 82,
      kineticSpeed: 98,
      synapticSync: 99,
      energyEfficiency: 91,
      shieldCapacity: "1,200 Terajoules",
      peakThrust: "Mach 4.2 Vector",
      neuralLatency: "0.12 ms",
      dryMass: "84.5 kg",
    },
    features: [
      "Light-Bending Adaptive Optical Metamaterial",
      "Gravitational Dampening Inertia Shunts",
      "Twin Micro-Plasma Arc Blades",
      "Quantum Entangled Tactical Telemetry Link",
    ],
    hotspots: [
      {
        id: "cranial-sensor",
        title: "Photonic Neural Crown",
        desc: "360° LiDAR, sub-millimeter infrared, and predictive threat vector targeting HUD.",
        x: 50,
        y: 18,
        system: "Targeting & HUD",
      },
      {
        id: "core-reactor",
        title: "Cold Fusion Micro-Reactor",
        desc: "4.8 GW continuous yield with zero thermodynamic footprint signature.",
        x: 50,
        y: 40,
        system: "Zero-Point Cell",
      },
      {
        id: "kinetic-gauntlet",
        title: "Resonance Gauntlet Core",
        desc: "High-frequency kinetic emitters capable of breaching reinforced reinforced alloys.",
        x: 24,
        y: 52,
        system: "Offensive Matrix",
      },
      {
        id: "vector-thrusters",
        title: "Atmospheric Grav-Thrusters",
        desc: "Instantaneous vector realignment with 42G internal pilot deceleration compensation.",
        x: 50,
        y: 82,
        system: "Propulsion",
      },
    ],
  },
  {
    id: "titan-omega",
    name: "Titan Omega",
    code: "NX-02 // OMEGA",
    role: "Super-Heavy Kinetic Fortress & Planetary Defense Bastion",
    tagline: "The immovable line against planetary orbital threats.",
    description:
      "Constructed with crystalline boron-carbide plating and an overlapping localized kinetic shield matrix. The Titan Omega withstands orbital hypervelocity artillery while anchoring forward perimeter defense lines without structural degradation.",
    themeColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.4)",
    accentColor: "#6ee7b7",
    classType: "Siege",
    specs: {
      armorRating: 99,
      kineticSpeed: 74,
      synapticSync: 94,
      energyEfficiency: 96,
      shieldCapacity: "4,600 Terajoules",
      peakThrust: "Mach 2.8 Vector",
      neuralLatency: "0.19 ms",
      dryMass: "192.0 kg",
    },
    features: [
      "Boron-Carbide Self-Healing Lattice",
      "Multi-Layer Kinetic Dispersion Aegis",
      "Heavy Rail-Charge Shoulder Battery",
      "Ground-Anchoring Seismic Spike Array",
    ],
    hotspots: [
      {
        id: "shield-generator",
        title: "Aegis Projection Emitter",
        desc: "Projects a 12-meter hemispherical barrier deflecting heavy ballistic ordnance.",
        x: 50,
        y: 35,
        system: "Kinetic Defense",
      },
      {
        id: "shoulder-mortar",
        title: "Magnetic Rail Launcher",
        desc: "Hyper-velocity tungsten dart dispersal at Mach 7.4 muzzle velocities.",
        x: 28,
        y: 28,
        system: "Heavy Artillery",
      },
      {
        id: "spine-reinforce",
        title: "Titanium Spinal Exoskeleton",
        desc: "Multi-ton hydraulic torque transfer relieving pilot fatigue to absolute zero.",
        x: 50,
        y: 55,
        system: "Structural Integrity",
      },
      {
        id: "seismic-anchors",
        title: "Hydraulic Seismic Bracing",
        desc: "Deep-surface micro-anchors absorbing extreme incoming shockwaves.",
        x: 50,
        y: 88,
        system: "Stability",
      },
    ],
  },
  {
    id: "strider-valkyrie",
    name: "Strider Valkyrie",
    code: "NX-03 // VALKYRIE",
    role: "Sub-Orbital Air Superiority & Precision Rapid Response",
    tagline: "Dominating every ceiling from stratospheric void to street level.",
    description:
      "Featuring variable-geometry magnetic aerofoils and scram-assist plasma thrusters. The Strider Valkyrie glides through upper atmospheric friction layers at supersonic cruise velocities, transitioning seamlessly to vertical close-quarters engagement.",
    themeColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    accentColor: "#fbbf24",
    classType: "Tactical Recon",
    specs: {
      armorRating: 80,
      kineticSpeed: 99,
      synapticSync: 97,
      energyEfficiency: 93,
      shieldCapacity: "1,800 Terajoules",
      peakThrust: "Mach 5.1 Scram",
      neuralLatency: "0.14 ms",
      dryMass: "96.4 kg",
    },
    features: [
      "Foldable Variable-Swept Plasma Wings",
      "Sub-Orbital Thermal Dispersion Tiles",
      "Long-Range Photonic Pulse Carbine",
      "Micro-Drone Swarm Deployment Bay",
    ],
    hotspots: [
      {
        id: "wing-foils",
        title: "Superconducting Plasma Wings",
        desc: "Generate localized ionic lift with near-zero acoustic sonic boom signature.",
        x: 18,
        y: 38,
        system: "Aerodynamics",
      },
      {
        id: "scram-manifold",
        title: "Dual Scramjet Turbines",
        desc: "Continuous high-Mach flight envelope capable of orbital egress insertion.",
        x: 50,
        y: 52,
        system: "Propulsion",
      },
      {
        id: "drone-bay",
        title: "Autonomous Recon Hive",
        desc: "Deploys 8 micro-scouts for real-time terrain reconstruction and targeting.",
        x: 50,
        y: 25,
        system: "Auxiliary Drones",
      },
      {
        id: "stabilizer-fins",
        title: "Vectored Aerofoil Rudders",
        desc: "Millisecond-precise roll and yaw compensation during transonic dives.",
        x: 50,
        y: 78,
        system: "Flight Control",
      },
    ],
  },
  {
    id: "cyber-chronos",
    name: "Cyber Chronos",
    code: "NX-04 // CHRONOS",
    role: "Quantum Electronic Warfare & Autonomous Hive Command",
    tagline: "Paralyzing enemy battlefields before the first projectile fires.",
    description:
      "Built around a cryogenic quantum processing node directly interfacing with planetary satellite constellations. The Cyber Chronos calculates 14 million combat contingencies per millisecond, overriding hostile autonomous platforms instantaneously.",
    themeColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    accentColor: "#c084fc",
    classType: "Assault",
    specs: {
      armorRating: 86,
      kineticSpeed: 91,
      synapticSync: 100,
      energyEfficiency: 98,
      shieldCapacity: "2,400 Terajoules",
      peakThrust: "Mach 3.6 Vector",
      neuralLatency: "0.08 ms",
      dryMass: "102.5 kg",
    },
    features: [
      "Cryogenic Quantum Processing Array",
      "Broad-Spectrum EMP Disruptor Spire",
      "Predictive Combat Matrix Simulation Engine",
      "Biometric Neuro-Overclock Injector",
    ],
    hotspots: [
      {
        id: "quantum-node",
        title: "Cryogenic Qubit Cluster",
        desc: "Instantaneous decryption of enemy military comms and autonomous kill-switch injection.",
        x: 50,
        y: 22,
        system: "Quantum Logic",
      },
      {
        id: "emp-disruptor",
        title: "High-Flux EMP Emitter",
        desc: "Neutralizes incoming smart munitions and vehicle electronic systems in 300m radius.",
        x: 32,
        y: 44,
        system: "EW Warfare",
      },
      {
        id: "satellite-uplink",
        title: "Quantum Entanglement Antenna",
        desc: "Direct link to orbital defense network with zero jamming vulnerability.",
        x: 65,
        y: 30,
        system: "Communications",
      },
      {
        id: "thermal-vent",
        title: "Liquid Helium Heat Shunt",
        desc: "Maintains processing nodes at 4 Kelvin even during maximum combat overclocks.",
        x: 50,
        y: 70,
        system: "Thermodynamics",
      },
    ],
  },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "kinetic-dissipation",
    index: "01",
    title: "Adaptive Kinetic Dissipation",
    shortDesc:
      "Multi-layered carbon-nanotube lattices redistribute hypervelocity ballistic and blast energy away from pilot vital zones in under 0.4ms.",
    detailedDesc:
      "Utilizing shear-thickening fluid polymers sandwiched between graphene sheets, incoming kinetic energy is absorbed and converted into harmless thermal dissipation throughout the suit's exterior thermal radiator channels.",
    category: "Defensive Lattice",
    telemetryMetric: "Impact Dampening",
    telemetryValue: "99.4%",
    iconName: "ShieldAlert",
    accent: "crimson",
    specs: [
      { label: "Tensile Strength", val: "140 GPa" },
      { label: "Reaction Window", val: "0.38 ms" },
      { label: "Energy Dispersal", val: "8.2 MJ/cm²" },
    ],
  },
  {
    id: "zero-point-core",
    index: "02",
    title: "Sub-Atomic Cold Fusion Core",
    shortDesc:
      "An onboard micro-fusion torus producing 4.8 Gigawatts of uninterrupted clean output for up to 140 continuous operational hours.",
    detailedDesc:
      "The micro-fusion reactor suspends a magnetized deuterium-tritium plasma pocket within a superconducting magnetic bottle, generating zero ionizing radiation and self-contained zero-point ignition.",
    category: "Power Architecture",
    telemetryMetric: "Continuous Output",
    telemetryValue: "4.8 GW",
    iconName: "Zap",
    accent: "cyan",
    specs: [
      { label: "Core Temp", val: "42.5 M°C" },
      { label: "Operational Life", val: "140 hrs" },
      { label: "Cold Restart", val: "1.2 sec" },
    ],
  },
  {
    id: "predictive-hud",
    index: "03",
    title: "Neural Telemetry & Predictive HUD",
    shortDesc:
      "Quantum synaptic link overlays tactical trajectories, enemy firing solutions, and real-time biological vitals directly onto visual cortex.",
    detailedDesc:
      "Direct neural bridging bypasses ocular nerve delay by projecting high-frequency photonic waveforms into the pilot's visual processing cortex, providing a 360-degree spherical spatial awareness overlay.",
    category: "Cognitive Synergy",
    telemetryMetric: "Synaptic Latency",
    telemetryValue: "0.14 ms",
    iconName: "Eye",
    accent: "crimson",
    specs: [
      { label: "Spatial Resolution", val: "16K Per Eye" },
      { label: "Threat Forecasting", val: "1.8 sec ahead" },
      { label: "Neural Bandwidth", val: "40 Tbps" },
    ],
  },
  {
    id: "grav-thrusters",
    index: "04",
    title: "Gravitational Vector Propulsion",
    shortDesc:
      "Tri-nozzle ion-plasma thrusters deliver instantaneous Mach 4.2 sprint velocities with full multi-axis vector stabilization.",
    detailedDesc:
      "Employing magnetoplasmadynamic acceleration coupled with localized gravitational field manipulation, the propulsion assembly allows for instantaneous 90-degree vector redirects at supersonic velocities.",
    category: "Kinetics & Flight",
    telemetryMetric: "Acceleration Peak",
    telemetryValue: "42 G-Force",
    iconName: "Wind",
    accent: "cyan",
    specs: [
      { label: "Max Speed", val: "Mach 4.2" },
      { label: "G-Compensation", val: "100% Inertial" },
      { label: "Altitude Ceiling", val: "85,000 ft" },
    ],
  },
  {
    id: "biomesh-rejuv",
    index: "05",
    title: "Cellular Bio-Regeneration Mesh",
    shortDesc:
      "Sub-dermal nano-synthetic weave delivers pressurized coagulants, adrenaline micro-dosing, and real-time tissue stabilization.",
    detailedDesc:
      "In the event of pilot trauma, thousands of microscopic capillary pods automatically dispense synthetic clotting factors, anti-shock compounds, and localized neuro-blockers to keep the operator at peak performance.",
    category: "Life Support",
    telemetryMetric: "Pilot Stabilization",
    telemetryValue: "Instantaneous",
    iconName: "Activity",
    accent: "amber",
    specs: [
      { label: "Hemostasis Time", val: "< 2.0 sec" },
      { label: "Bio-Sensors", val: "14,000 Nodes" },
      { label: "Oxygen Reserve", val: "72 Hours" },
    ],
  },
  {
    id: "cloaking-shroud",
    index: "06",
    title: "Multi-Spectrum Cloaking Shroud",
    shortDesc:
      "Phase-shifting optical metamaterials bend electromagnetic radiation across visible, infrared, and radar bands for complete stealth.",
    detailedDesc:
      "Active metamaterial elements dynamically adjust their refractive index to match ambient environmental wave patterns, making the exosuit indistinguishable from background space radiation or planetary terrain.",
    category: "Stealth Matrix",
    telemetryMetric: "Radar Signature",
    telemetryValue: "-48 dBsm",
    iconName: "Disc",
    accent: "crimson",
    specs: [
      { label: "Optical Invisibility", val: "99.8%" },
      { label: "Thermal Masking", val: "Below 3 Kelvin" },
      { label: "Sonar Dampening", val: "Sub-Audible" },
    ],
  },
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: "phase-1",
    stageNumber: "PHASE 01",
    timeframe: "Q1 2025",
    title: "Biometric Neural Calibration",
    subtitle: "Synaptic DNA Mesh Binding & Initial Telemetry Testing",
    description:
      "Achieved sub-millisecond synaptic synchronization with human pilots. Established molecular binding between the graphene interior suit liner and human neuromuscular pathways without cellular rejection.",
    status: "Completed",
    deliverables: [
      "Zero-Rejection Neuro-Electrode Integration",
      "Initial 0.28ms Synaptic Response Achieved",
      "Dynamic G-Force Pilot Stress Testing Passed",
    ],
    telemetryCode: "SYN-01 // COMPLETE",
  },
  {
    id: "phase-2",
    stageNumber: "PHASE 02",
    timeframe: "Q2 - Q3 2025",
    title: "Cold Fusion Core Integration",
    subtitle: "Zero-Point Torus Power Plant & Kinetic Dampening",
    description:
      "Integrated the 4.8 GW micro-torus cold fusion power plant. Validated 140 continuous operational hours in sub-zero atmospheric and deep-space vacuum chamber simulations.",
    status: "Completed",
    deliverables: [
      "Sub-Atomic Reactor Miniaturization To 18cm Diameter",
      "Magnetic Shielding Heat Shunt Field Tests",
      "Continuous Full-Power Static Firing for 336 Hours",
    ],
    telemetryCode: "NUC-02 // OPERATIONAL",
  },
  {
    id: "phase-3",
    stageNumber: "PHASE 03",
    timeframe: "Q4 2025 - Q1 2026",
    title: "Tactical Flight & Mesh Uplink",
    subtitle: "Mach 4.2 Vector Testing & Planetary Mesh Network",
    description:
      "Currently conducting supersonic atmospheric drop tests and low-orbit egress operations. Establishing quantum satellite relay connections across 14 orbital defence platforms.",
    status: "Current Deployment",
    deliverables: [
      "Mach 4.2 Vector Sprint Validation",
      "Orbital Atmospheric Drop Trials from 60,000m",
      "12,400 Global Nodes Successfully Synchronized",
    ],
    telemetryCode: "AERO-03 // IN-PROGRESS",
  },
  {
    id: "phase-4",
    stageNumber: "PHASE 04",
    timeframe: "Q2 2026 & BEYOND",
    title: "Autonomous Fleet Deployment",
    subtitle: "Global Whitelist Production & Sector 07 Active Duty",
    description:
      "Commencement of final mass-scale assembly for designated defense personnel and planetary security forces. Initial deployment to defense sectors 01 through 08 worldwide.",
    status: "Imminent",
    deliverables: [
      "First Cohort Pilot Certification & Deployment",
      "Orbital Rapid-Drop Pod Logistics Network",
      "Continuous Global Over-The-Air Telemetry Updates",
    ],
    telemetryCode: "DEP-04 // QUEUED",
  },
];

export const BENCHMARKS: BenchmarkItem[] = [
  {
    metric: "Neural Synaptic Latency",
    legacyVal: 48,
    legacyUnit: "ms",
    aetherisVal: 0.14,
    aetherisUnit: "ms",
    unit: "ms",
    advantage: "340x Faster",
    description: "Instantaneous physical action triggered at the exact speed of human thought.",
  },
  {
    metric: "Armor Tensile Strength",
    legacyVal: 18,
    legacyUnit: "GPa",
    aetherisVal: 142,
    aetherisUnit: "GPa",
    unit: "GPa",
    advantage: "7.8x Harder",
    description: "Boron-graphene crystalline lattice with molecular self-healing memory.",
  },
  {
    metric: "Continuous Operating Envelope",
    legacyVal: 8,
    legacyUnit: "hours",
    aetherisVal: 140,
    aetherisUnit: "hours",
    unit: "hours",
    advantage: "17.5x Longer",
    description: "Self-sustaining sub-atomic fusion generation requiring no external refueling.",
  },
  {
    metric: "Pilot Deceleration Compensation",
    legacyVal: 9,
    legacyUnit: "G",
    aetherisVal: 42,
    aetherisUnit: "G",
    unit: "G-Force",
    advantage: "4.6x Higher",
    description: "Localized micro-gravity displacement prevents blackouts during extreme maneuvers.",
  },
];

export const TELEMETRY_STATS = [
  {
    label: "Neural Latency",
    value: "0.14",
    suffix: "ms",
    subtext: "Sub-synaptic reflex response",
    accent: "crimson",
  },
  {
    label: "Synaptic Coherence",
    value: "99.98",
    suffix: "%",
    subtext: "Zero rejection rate across 10k+ hrs",
    accent: "cyan",
  },
  {
    label: "Peak Power Discharge",
    value: "4.8",
    suffix: "GW",
    subtext: "Cold fusion instantaneous yield",
    accent: "amber",
  },
  {
    label: "Active Synchronized Units",
    value: "14,250",
    suffix: "+",
    subtext: "Planetary orbital telemetry mesh",
    accent: "cyan",
  },
];
