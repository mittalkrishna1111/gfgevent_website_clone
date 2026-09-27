"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  Layers,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { soundFx } from "@/lib/sound";

const ARMOR_IMAGES: Record<string, string> = {
  "mark-85": "/images/heroes/iron-man-85.png",
  hulkbuster: "/images/heroes/hulkbuster.png",
  "stealth-edge": "/images/heroes/iron-man-85.png",
  "war-machine": "/images/heroes/war-machine.png",
};

interface ArmorModel {
  id: string;
  name: string;
  code: string;
  role: string;
  tagline: string;
  description: string;
  themeColor: string;
  glowColor: string;
  accentColor: string;
  classType: string;
  specs: {
    armorRating: number;
    kineticSpeed: number;
    arcOutput: number;
    nanotechYield: number;
    shieldCapacity: string;
    peakThrust: string;
  };
  features: string[];
  hotspots: {
    id: string;
    title: string;
    desc: string;
    x: number;
    y: number;
    system: string;
  }[];
}

const STARK_ARMORS: ArmorModel[] = [
  {
    id: "mark-85",
    name: "Mark LXXXV Nanotech",
    code: "STARK // MK-85",
    role: "Flagship Nanoparticle Assault & Lightning Refocuser",
    tagline: "I am Iron Man.",
    description:
      "Crafted from gold-titanium nanoparticle matrix with instantaneous energy shielding, repulsor blade generation, and localized unibeam overcharge.",
    themeColor: "#e23636",
    glowColor: "rgba(226, 54, 54, 0.45)",
    accentColor: "#fbbf24",
    classType: "Assault Nanotech",
    specs: {
      armorRating: 92,
      kineticSpeed: 97,
      arcOutput: 99,
      nanotechYield: 98,
      shieldCapacity: "2,400 Terajoules",
      peakThrust: "Mach 4.5 Flight",
    },
    features: [
      "Sub-Dermal Nanoparticle Housing Matrix",
      "Back-Mounted Lightning Refocuser Wings",
      "Micro-Vascular Cold Fusion Energy Shunts",
      "Quantum Encrypted J.A.R.V.I.S. Uplink",
    ],
    hotspots: [
      {
        id: "unibeam",
        title: "Chest Arc Unibeam",
        desc: "New element core output focusing 4.8 GW directed energy blasts.",
        x: 50,
        y: 38,
        system: "Unibeam Cannon",
      },
      {
        id: "helmet",
        title: "Photonic HUD Visor",
        desc: "F.R.I.D.A.Y. tactical targeting and predictive multiversal combat simulation.",
        x: 50,
        y: 18,
        system: "Tactical HUD",
      },
      {
        id: "repulsor",
        title: "Nanotech Repulsor Palms",
        desc: "Variable-frequency concussive plasma burst emitters.",
        x: 22,
        y: 52,
        system: "Offensive Matrix",
      },
      {
        id: "thrusters",
        title: "Hypersonic Ion Thrusters",
        desc: "Mach 4.5 supersonic atmospheric and sub-orbital vector flight.",
        x: 50,
        y: 84,
        system: "Propulsion",
      },
    ],
  },
  {
    id: "hulkbuster",
    name: "Hulkbuster Ver. 2",
    code: "STARK // HB-02",
    role: "Heavy Siege & Orbital Kinetic Drop Fortress",
    tagline: "Heavy artillery deployed via Veronica satellite array.",
    description:
      "Multi-layered composite armor capable of absorbing planetary seismic shockwaves with pneumatic hydraulic jackhammers and localized impact dampeners.",
    themeColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.45)",
    accentColor: "#e23636",
    classType: "Heavy Siege",
    specs: {
      armorRating: 99,
      kineticSpeed: 68,
      arcOutput: 95,
      nanotechYield: 85,
      shieldCapacity: "6,200 Terajoules",
      peakThrust: "Mach 2.2 Thrust",
    },
    features: [
      "Autonomous Veronica Replacement Parts Orbiting",
      "Hydraulic Seismic Ground Anchor Clamps",
      "Twin High-Yield Micro-Missile Shoulder Racks",
      "Overlapping Localized Energy Forcefield",
    ],
    hotspots: [
      {
        id: "hb-chest",
        title: "Tri-Arc Reactor Core",
        desc: "Three coupled arc reactors generating massive torque.",
        x: 50,
        y: 36,
        system: "Tri-Core Power",
      },
      {
        id: "hb-gauntlet",
        title: "Pneumatic Jackhammer Fist",
        desc: "Delivers repetitive seismic kinetic impacts to breach heavy structures.",
        x: 24,
        y: 50,
        system: "Hydraulics",
      },
    ],
  },
  {
    id: "stealth-edge",
    name: "Stealth Bleeding Edge",
    code: "STARK // ST-09",
    role: "Sub-Visual Infiltration & Quantum Cloak",
    tagline: "Silent. Invisible. Unstoppable.",
    description:
      "Integrated with Wakandan vibranium weave and light-bending metamaterials to render the suit undetectable across radar, infrared, and sonic frequencies.",
    themeColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.45)",
    accentColor: "#67e8f9",
    classType: "Covert Ops",
    specs: {
      armorRating: 84,
      kineticSpeed: 99,
      arcOutput: 91,
      nanotechYield: 96,
      shieldCapacity: "1,600 Terajoules",
      peakThrust: "Mach 4.8 Silent",
    },
    features: [
      "Metamaterial Light-Bending Cloak",
      "Sonic Vibranium Noise Cancellation Shroud",
      "EMP Disruption Gauntlet Spikes",
      "Thermal Emission Dampeners",
    ],
    hotspots: [
      {
        id: "cloak-emitter",
        title: "Optical Refraction Emitter",
        desc: "Bends visible light spectrum around pilot frame.",
        x: 50,
        y: 35,
        system: "Stealth Matrix",
      },
    ],
  },
  {
    id: "war-machine",
    name: "War Machine Apex",
    code: "STARK-MIL // WM-04",
    role: "Heavy Ballistic Suppression & Air Defense",
    tagline: "Armed for total multiversal containment.",
    description:
      "Equipped with shoulder-mounted miniguns, bunker-buster missiles, and reinforced titanium-carbide plating for frontline battlefield air superiority.",
    themeColor: "#94a3b8",
    glowColor: "rgba(148, 163, 184, 0.45)",
    accentColor: "#e23636",
    classType: "Heavy Ballistic",
    specs: {
      armorRating: 95,
      kineticSpeed: 82,
      arcOutput: 90,
      nanotechYield: 78,
      shieldCapacity: "3,200 Terajoules",
      peakThrust: "Mach 3.2 Vector",
    },
    features: [
      "Shoulder-Mounted Minigun Turret",
      "Stark Ex-Wife Kinetic Micro-Missile",
      "Heavy Titanium-Carbide Plating",
      "Multi-Target Radar Guidance Array",
    ],
    hotspots: [
      {
        id: "minigun",
        title: "Rotary Minigun",
        desc: "Fires 6,000 rounds per minute guided by ocular tracking.",
        x: 32,
        y: 22,
        system: "Heavy Firepower",
      },
    ],
  },
];

export default function StarkShowcaseSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"armor" | "wireframe">("armor");
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const [sliders, setSliders] = useState({
    repulsorPower: 90,
    unibeamYield: 85,
    shieldDensity: 92,
    jarvisOverclock: 88,
  });

  const [badgeModalOpen, setBadgeModalOpen] = useState(false);
  const [badgeSuccess, setBadgeSuccess] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [collegeName, setCollegeName] = useState("");

  const currentArmor = STARK_ARMORS[selectedIdx];

  const handleSelectArmor = (idx: number) => {
    setSelectedIdx(idx);
    setSelectedHotspot(null);
    soundFx.playClick(idx === 0 ? 1100 : idx === 1 ? 900 : idx === 2 ? 1200 : 800);
  };

  const handlePrev = () => {
    const prev = (selectedIdx - 1 + STARK_ARMORS.length) % STARK_ARMORS.length;
    handleSelectArmor(prev);
  };

  const handleNext = () => {
    const next = (selectedIdx + 1) % STARK_ARMORS.length;
    handleSelectArmor(next);
  };

  const handleSliderChange = (key: keyof typeof sliders, val: number) => {
    setSliders((prev) => ({ ...prev, [key]: val }));
    if (val % 10 === 0) {
      soundFx.playHover();
    }
  };

  // Dynamic specs reactive to live tuning sliders
  const calculatedArmorRating = Math.min(
    100,
    Math.round(currentArmor.specs.armorRating * (0.8 + (sliders.shieldDensity / 100) * 0.2))
  );
  const calculatedKineticSpeed = Math.min(
    100,
    Math.round(currentArmor.specs.kineticSpeed * (0.8 + (sliders.repulsorPower / 100) * 0.2))
  );
  const calculatedArcOutput = Math.min(
    100,
    Math.round(currentArmor.specs.arcOutput * (0.7 + (sliders.unibeamYield / 100) * 0.3))
  );

  const handleHotspotClick = (id: string) => {
    setSelectedHotspot(selectedHotspot === id ? null : id);
    soundFx.playClick(1300);
  };

  const handleBadgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playConfirm();
    setBadgeSuccess(true);
  };

  const activeSpot = currentArmor.hotspots.find((h) => h.id === selectedHotspot);

  return (
    <section
      id="configurator"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-15 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${currentArmor.themeColor} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#e23636] tracking-widest uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e23636]" />
              // 04 STARK ARMORY & CONFIGURATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              STARK INDUSTRIES ARMORY & <br />
              <span className="text-gradient-marvel">AVENGER PROTOCOLS</span>
            </h2>
          </div>

          {/* Armor Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {STARK_ARMORS.map((armor, idx) => (
              <button
                key={armor.id}
                data-cursor-text={armor.name}
                data-feature-color={armor.themeColor}
                onClick={() => handleSelectArmor(idx)}
                className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 hover:scale-105 active:scale-95 ${
                  selectedIdx === idx
                    ? "bg-white/10 text-white border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] font-bold"
                    : "glass-panel text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: armor.themeColor }}
                />
                <span>{armor.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workstation 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Armor Specs & Lore */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-white/15 card-beveled">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                  {currentArmor.code}
                </span>
                <span
                  className="text-xs font-mono font-bold tracking-widest uppercase"
                  style={{ color: currentArmor.accentColor }}
                >
                  {currentArmor.classType}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-2">
                {currentArmor.name}
              </h3>
              <p
                className="text-xs font-mono italic mb-4"
                style={{ color: currentArmor.accentColor }}
              >
                &ldquo;{currentArmor.tagline}&rdquo;
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-sans mb-8">
                {currentArmor.description}
              </p>

              {/* Spec Bars (Dynamically reactive to live tuning sliders) */}
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Armor Plating Rating</span>
                    <span className="text-white font-bold">{calculatedArmorRating}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${calculatedArmorRating}%`,
                        backgroundColor: currentArmor.themeColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Repulsor Velocity</span>
                    <span className="text-white font-bold">{calculatedKineticSpeed}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${calculatedKineticSpeed}%`,
                        backgroundColor: currentArmor.themeColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Arc Reactor Discharge</span>
                    <span className="text-white font-bold">{calculatedArcOutput}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${calculatedArcOutput}%`,
                        backgroundColor: currentArmor.themeColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block">SHIELD CAPACITY</span>
                  <span className="text-white font-bold">{currentArmor.specs.shieldCapacity}</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block">PEAK THRUST</span>
                  <span className="text-white font-bold">{currentArmor.specs.peakThrust}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playPowerUp();
                  setBadgeModalOpen(true);
                }}
                data-cursor-text="CLAIM PASS"
                className="w-full py-3.5 btn-clip text-white font-mono text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center gap-2 hover:brightness-110 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: currentArmor.themeColor,
                  boxShadow: `0 0 25px ${currentArmor.glowColor}`,
                }}
              >
                <span>CLAIM S.H.I.E.L.D. AGENT PASS</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Center Column: Interactive Armor Schematic Viewport */}
          <div className="lg:col-span-5 relative glass-panel rounded-2xl border border-white/15 p-6 flex flex-col items-center justify-between min-h-[520px] card-beveled overflow-hidden">
            {/* View Mode Toggle */}
            <div className="w-full flex items-center justify-between z-20">
              <div className="flex items-center gap-2 p-1 rounded-full glass-panel border border-white/10 text-xs font-mono">
                <button
                  onClick={() => {
                    setViewMode("armor");
                    soundFx.playClick(900);
                  }}
                  data-cursor-text="ARMOR VIEW"
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    viewMode === "armor"
                      ? "bg-white/15 text-white font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  NANOTECH ARMOR
                </button>
                <button
                  onClick={() => {
                    setViewMode("wireframe");
                    soundFx.playClick(1200);
                  }}
                  data-cursor-text="WIREFRAME"
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    viewMode === "wireframe"
                      ? "bg-white/15 text-white font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  ARC REACTOR CORE
                </button>
              </div>

              <span className="text-[10px] font-mono text-white/50 hidden sm:inline">
                J.A.R.V.I.S. DIAGNOSTICS
              </span>
            </div>

            {/* Suit Schematic Display or Arc Reactor Blueprint */}
            <div className="relative w-full flex-1 flex items-center justify-center my-4 min-h-[460px]">
              {viewMode === "armor" ? (
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[460px] flex items-center justify-center">
                  {/* Holographic Glowing Platform Ring (Reactive to shieldDensity and jarvisOverclock sliders) */}
                  <div
                    className="absolute -bottom-6 w-64 h-16 rounded-full blur-md pointer-events-none transition-all duration-500"
                    style={{
                      background: `radial-gradient(ellipse, ${currentArmor.glowColor} 0%, transparent 70%)`,
                      opacity: 0.3 + (sliders.shieldDensity / 100) * 0.7,
                    }}
                  />
                  <div
                    className="absolute -bottom-4 w-56 h-10 border rounded-full animate-spin pointer-events-none opacity-50"
                    style={{
                      borderColor: currentArmor.themeColor,
                      animationDuration: `${24 - (sliders.jarvisOverclock / 100) * 16}s`,
                    }}
                  />

                  {/* Animated Photorealistic Marvel Armor Character Render (Synchronized with Hotspots) */}
                  <div className="relative w-full h-full flex items-center justify-center animate-hero-float">
                    <Image
                      src={ARMOR_IMAGES[currentArmor.id] || "/images/heroes/iron-man-85.png"}
                      alt={currentArmor.name}
                      width={340}
                      height={460}
                      priority
                      className={`object-contain max-h-[420px] w-auto h-auto transition-all duration-700 select-none pointer-events-none ${
                        currentArmor.id === "stealth-edge"
                          ? "filter brightness-75 contrast-135 drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                          : currentArmor.id === "war-machine"
                          ? "filter drop-shadow-[0_0_35px_rgba(148,163,184,0.5)]"
                          : currentArmor.id === "hulkbuster"
                          ? "filter drop-shadow-[0_0_40px_rgba(251,191,36,0.55)]"
                          : "filter drop-shadow-[0_0_35px_rgba(226,54,54,0.5)]"
                      }`}
                    />

                    {/* Pulsing Arc Reactor Chest Core Glow (Dynamically scaled by unibeamYield slider) */}
                    <div
                      className="absolute w-8 h-8 rounded-full pointer-events-none animate-arc-glow flex items-center justify-center transition-transform duration-300"
                      style={{
                        top: currentArmor.id === "hulkbuster" ? "36%" : "33%",
                        left: "50%",
                        transform: `translate(-50%, -50%) scale(${0.75 + (sliders.unibeamYield / 100) * 0.5})`,
                        backgroundColor: "rgba(0, 240, 255, 0.4)",
                        boxShadow: `0 0 ${16 + (sliders.unibeamYield / 100) * 24}px #00f0ff, inset 0 0 10px #ffffff`,
                      }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
                    </div>

                    {/* Sweeping Holographic Scanline Laser Beam */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_15px_#00f0ff] absolute animate-hologram-scan opacity-60" />
                    </div>

                    {/* Hotspot Target Nodes (Inside floating container for pixel-perfect motion sync) */}
                    {currentArmor.hotspots.map((spot) => {
                      const isSpotActive = selectedHotspot === spot.id;
                      return (
                        <button
                          key={spot.id}
                          data-cursor-text={spot.title}
                          data-feature-color={currentArmor.themeColor}
                          onClick={() => handleHotspotClick(spot.id)}
                          className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer hover:scale-125 transition-transform"
                          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                          title={spot.title}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                              isSpotActive
                                ? "bg-white text-black scale-125 shadow-[0_0_20px_#ffffff]"
                                : "bg-[#04060d]/85 border text-white hover:scale-110"
                            }`}
                            style={{ borderColor: currentArmor.themeColor }}
                          >
                            <Target size={12} className={isSpotActive ? "animate-spin" : ""} />
                          </div>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded bg-black/90 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {spot.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Arc Reactor Core 3D Blueprint Schematic View */
                <div className="relative w-full h-[460px] flex flex-col items-center justify-center p-4">
                  {/* Cybernetic Grid & Angle Crosshairs */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-25 rounded-xl pointer-events-none" />

                  {/* Concentric Rotating Magnetic Blueprint Rings */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none">
                    <div
                      className="absolute inset-0 border-2 border-dashed border-[#00f0ff]/50 rounded-full animate-spin pointer-events-none"
                      style={{ animationDuration: "35s" }}
                    />
                    <div
                      className="absolute inset-4 border border-[#00f0ff]/30 rounded-full animate-spin pointer-events-none"
                      style={{ animationDuration: "20s", animationDirection: "reverse" }}
                    />
                    <div className="absolute inset-10 border border-[#fbbf24]/40 rounded-full pointer-events-none" />

                    {/* 10 Electromagnetic Stator Coils */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3.5 h-9 bg-gradient-to-b from-[#00f0ff] to-[#fbbf24] rounded-sm shadow-[0_0_12px_#00f0ff] pointer-events-none"
                        style={{
                          transform: `rotate(${i * 36}deg) translateY(-110px)`,
                          opacity: 0.85,
                        }}
                      />
                    ))}

                    {/* Central Palladium / New Element Core */}
                    <div className="w-24 h-24 rounded-full border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_40px_#00f0ff] bg-black/70 relative animate-pulse">
                      <div className="w-16 h-16 rounded-full border border-white/60 flex items-center justify-center shadow-[inset_0_0_15px_#00f0ff]">
                        <div className="w-8 h-8 rounded-full bg-white shadow-[0_0_20px_#ffffff,0_0_35px_#00f0ff]" />
                      </div>
                    </div>

                    {/* Crosshair Laser Lines */}
                    <div className="absolute w-full h-[1px] bg-[#00f0ff]/30 pointer-events-none" />
                    <div className="absolute h-full w-[1px] bg-[#00f0ff]/30 pointer-events-none" />

                    {/* Degree Indicators */}
                    <span className="absolute top-1 text-[8px] font-mono text-[#00f0ff]/70">000° N</span>
                    <span className="absolute right-1 text-[8px] font-mono text-[#00f0ff]/70">090° E</span>
                    <span className="absolute bottom-1 text-[8px] font-mono text-[#00f0ff]/70">180° S</span>
                    <span className="absolute left-1 text-[8px] font-mono text-[#00f0ff]/70">270° W</span>
                  </div>

                  {/* Core Diagnostic Telemetry Readouts */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-6 z-10 text-[10px] font-mono">
                    <div className="p-2 rounded bg-black/60 border border-[#00f0ff]/30">
                      <span className="text-white/50 block">FLUX FREQUENCY</span>
                      <span className="text-[#00f0ff] font-bold">
                        {(4.2 + (sliders.unibeamYield / 100) * 0.8).toFixed(2)} GHz // SYNC
                      </span>
                    </div>
                    <div className="p-2 rounded bg-black/60 border border-[#00f0ff]/30">
                      <span className="text-white/50 block">TOROIDAL FIELD</span>
                      <span className="text-[#fbbf24] font-bold">
                        {(120 + (sliders.shieldDensity / 100) * 40).toFixed(0)} TESLA // STABLE
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Active Hotspot Detail Card (Positioned safely above bottom navigators) */}
              {activeSpot && (
                <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 p-4 glass-panel-elevated rounded-xl border border-white/20 z-40 animate-in fade-in slide-in-from-bottom-2 duration-150 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{ color: currentArmor.themeColor }}
                    >
                      {activeSpot.system} // SUB-SYSTEM
                    </span>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      data-cursor-text="CLOSE"
                      className="text-white/50 hover:text-white text-xs cursor-pointer hover:scale-110 p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-sm font-mono font-bold text-white">
                    {activeSpot.title}
                  </div>
                  <div className="text-xs font-sans text-white/80 mt-1 leading-snug">
                    {activeSpot.desc}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Navigators */}
            <div className="w-full flex items-center justify-between pt-4 border-t border-white/10 z-20">
              <button
                onClick={handlePrev}
                data-cursor-text="PREV ARMOR"
                className="px-3 py-1.5 btn-clip glass-panel hover:bg-white/10 hover:scale-105 active:scale-95 text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <ChevronLeft size={14} />
                <span>PREV ARMOR</span>
              </button>

              <span className="text-xs font-mono text-white/50">
                0{selectedIdx + 1} / 0{STARK_ARMORS.length}
              </span>

              <button
                onClick={handleNext}
                data-cursor-text="NEXT ARMOR"
                className="px-3 py-1.5 btn-clip glass-panel hover:bg-white/10 hover:scale-105 active:scale-95 text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <span>NEXT ARMOR</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Real-Time Sliders & Integrated Loadout */}
          <div className="lg:col-span-3 flex flex-col justify-between glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 card-beveled">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6 uppercase tracking-wider">
                <Sliders size={14} className="text-[#fbbf24]" />
                <span>J.A.R.V.I.S. ARMOR TUNING</span>
              </div>

              <div className="flex flex-col gap-6">
                <div data-cursor-text="REPULSOR">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Repulsor Intensity</span>
                    <span className="text-white font-bold">{sliders.repulsorPower}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={sliders.repulsorPower}
                    onChange={(e) => handleSliderChange("repulsorPower", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e23636]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Concussive Force: {(120 * (sliders.repulsorPower / 100)).toFixed(1)} kN
                  </span>
                </div>

                <div data-cursor-text="UNIBEAM">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Unibeam Overcharge</span>
                    <span className="text-white font-bold">{sliders.unibeamYield}%</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={sliders.unibeamYield}
                    onChange={(e) => handleSliderChange("unibeamYield", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fbbf24]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Yield: {(4.8 * (sliders.unibeamYield / 100)).toFixed(2)} GW
                  </span>
                </div>

                <div data-cursor-text="SHIELD DENSITY">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Vibranium Shield Density</span>
                    <span className="text-white font-bold">{sliders.shieldDensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={sliders.shieldDensity}
                    onChange={(e) => handleSliderChange("shieldDensity", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Absorption: {(2400 * (sliders.shieldDensity / 100)).toFixed(0)} Terajoules
                  </span>
                </div>

                <div data-cursor-text="OVERCLOCK">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">J.A.R.V.I.S. Core Overclock</span>
                    <span className="text-white font-bold">{sliders.jarvisOverclock}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={sliders.jarvisOverclock}
                    onChange={(e) => handleSliderChange("jarvisOverclock", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e23636]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Simulation Rate: 14M Scenarios/sec
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <span className="text-[11px] font-mono text-white/50 tracking-wider uppercase block mb-3">
                INTEGRATED STARK ARSENAL:
              </span>
              <div className="flex flex-col gap-2">
                {currentArmor.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs font-mono text-white/80">
                    <span className="text-[#fbbf24] font-bold">›</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* S.H.I.E.L.D. Badge Generator Modal */}
      {badgeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setBadgeModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-panel-elevated rounded-2xl border border-white/20 p-6 sm:p-8 card-beveled shadow-[0_0_60px_rgba(226,54,54,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            {badgeSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-2">
                  S.H.I.E.L.D. CLEARANCE GRANTED
                </h3>
                <p className="text-sm font-mono text-white/70 mb-4">
                  Agent: <span className="text-[#fbbf24] font-bold">{agentName || "OPERATOR-7"}</span> // College:{" "}
                  <span className="text-[#00f0ff] font-bold">{collegeName || "BENNETT UNIVERSITY"}</span>
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/60 mb-6">
                  AGENT PASS TOKEN: SHIELD-{(Math.random() * 90000 + 10000).toFixed(0)}-AVENGER
                </div>
                <button
                  onClick={() => {
                    setBadgeModalOpen(false);
                    setBadgeSuccess(false);
                  }}
                  data-cursor-text="DISMISS"
                  className="px-6 py-2.5 btn-clip bg-[#e23636] hover:scale-105 active:scale-95 text-white font-mono text-xs font-bold cursor-pointer transition-all"
                >
                  DISMISS
                </button>
              </div>
            ) : (
              <form onSubmit={handleBadgeSubmit}>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono tracking-wider text-[#e23636] font-bold uppercase">
                    S.H.I.E.L.D. AGENT PROTOCOL // {currentArmor.code}
                  </span>
                  <button
                    type="button"
                    onClick={() => setBadgeModalOpen(false)}
                    data-cursor-text="CLOSE"
                    className="text-white/40 hover:text-white cursor-pointer hover:scale-110"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      AGENT NAME / CALLSIGN
                    </label>
                    <input
                      type="text"
                      required
                      data-cursor-text="AGENT NAME"
                      placeholder="e.g. Tony Stark / Agent Romanoff"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-base sm:text-sm focus:outline-none focus:border-[#e23636]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      COLLEGE / INSTITUTION
                    </label>
                    <input
                      type="text"
                      required
                      data-cursor-text="COLLEGE"
                      placeholder="e.g. Bennett University, Greater Noida"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-base sm:text-sm focus:outline-none focus:border-[#e23636]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  data-cursor-text="AUTHORIZE"
                  className="w-full py-3.5 btn-clip bg-gradient-to-r from-[#e23636] via-[#ea580c] to-[#e23636] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer transition-all"
                >
                  AUTHORIZE S.H.I.E.L.D. PASS
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
