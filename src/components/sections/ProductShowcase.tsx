"use client";

import React, { useState } from "react";
import {
  Shield,
  Zap,
  Wind,
  Layers,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Target,
} from "lucide-react";
import { EXO_SUITS, ExoSuitVariant } from "@/data/aetherisData";
import { soundFx } from "@/lib/sound";

export default function ProductShowcase() {
  const [selectedSuitIndex, setSelectedSuitIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"armor" | "wireframe">("armor");
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  // Real-time telemetry slider state
  const [sliders, setSliders] = useState({
    powerYield: 85,
    kineticDampening: 90,
    thrusterOverclock: 75,
    coolingCycle: 80,
  });

  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [reservedSuccess, setReservedSuccess] = useState(false);
  const [pilotCallsign, setPilotCallsign] = useState("");

  const currentSuit: ExoSuitVariant = EXO_SUITS[selectedSuitIndex];

  const handleSelectSuit = (idx: number) => {
    setSelectedSuitIndex(idx);
    setSelectedHotspot(null);
    soundFx.playClick(idx === 0 ? 900 : idx === 1 ? 1200 : idx === 2 ? 1000 : 800);
  };

  const handlePrevSuit = () => {
    const prev = (selectedSuitIndex - 1 + EXO_SUITS.length) % EXO_SUITS.length;
    handleSelectSuit(prev);
  };

  const handleNextSuit = () => {
    const next = (selectedSuitIndex + 1) % EXO_SUITS.length;
    handleSelectSuit(next);
  };

  const handleSliderChange = (key: keyof typeof sliders, val: number) => {
    setSliders((prev) => ({ ...prev, [key]: val }));
    soundFx.playHover();
  };

  const handleHotspotClick = (id: string) => {
    setSelectedHotspot(selectedHotspot === id ? null : id);
    soundFx.playClick(1300);
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playConfirm();
    setReservedSuccess(true);
  };

  const activeSpotData = currentSuit.hotspots.find((h) => h.id === selectedHotspot);

  return (
    <section
      id="showcase"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Dynamic Background Light according to active suit theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-15 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${currentSuit.themeColor} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
              // 04 INTERACTIVE MODEL INSPECTION
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              EXO-FRAME CONFIGURATOR & <br />
              <span className="text-gradient-crimson">TACTICAL TELEMETRY</span>
            </h2>
          </div>

          {/* Suit Selection Buttons (Inspired by EV2's character carousel) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {EXO_SUITS.map((suit, idx) => (
              <button
                key={suit.id}
                onClick={() => handleSelectSuit(idx)}
                className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  selectedSuitIndex === idx
                    ? "bg-white/10 text-white border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] font-bold"
                    : "glass-panel text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: suit.themeColor }}
                />
                <span>{suit.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Suit Specs & Lore Readout (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-white/15 card-beveled">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                  {currentSuit.code}
                </span>
                <span
                  className="text-xs font-mono font-bold tracking-widest uppercase"
                  style={{ color: currentSuit.themeColor }}
                >
                  {currentSuit.classType}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-2">
                {currentSuit.name}
              </h3>
              <p
                className="text-xs font-mono italic mb-4"
                style={{ color: currentSuit.accentColor }}
              >
                &ldquo;{currentSuit.tagline}&rdquo;
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-sans mb-8">
                {currentSuit.description}
              </p>

              {/* Tactical Spec Bars */}
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Armor Integrity</span>
                    <span className="text-white font-bold">{currentSuit.specs.armorRating}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${currentSuit.specs.armorRating}%`,
                        backgroundColor: currentSuit.themeColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Kinetic Sprint Speed</span>
                    <span className="text-white font-bold">{currentSuit.specs.kineticSpeed}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${currentSuit.specs.kineticSpeed}%`,
                        backgroundColor: currentSuit.themeColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Synaptic Neural Sync</span>
                    <span className="text-white font-bold">{currentSuit.specs.synapticSync}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${currentSuit.specs.synapticSync}%`,
                        backgroundColor: currentSuit.themeColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/60">Energy Efficiency</span>
                    <span className="text-white font-bold">{currentSuit.specs.energyEfficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${currentSuit.specs.energyEfficiency}%`,
                        backgroundColor: currentSuit.themeColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Allocation Trigger */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block">SHIELD CAPACITY</span>
                  <span className="text-white font-bold">{currentSuit.specs.shieldCapacity}</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block">PEAK VECTOR</span>
                  <span className="text-white font-bold">{currentSuit.specs.peakThrust}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playPowerUp();
                  setReserveModalOpen(true);
                }}
                className="w-full py-3.5 btn-clip text-white font-mono text-xs font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center gap-2 hover:brightness-110"
                style={{
                  backgroundColor: currentSuit.themeColor,
                  boxShadow: `0 0 25px ${currentSuit.glowColor}`,
                }}
              >
                <span>REQUEST PILOT ALLOCATION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Center Column: Interactive 360/Schematic Canvas Display (5 Cols) */}
          <div className="lg:col-span-5 relative glass-panel rounded-2xl border border-white/15 p-6 flex flex-col items-center justify-between min-h-[520px] card-beveled overflow-hidden">
            {/* Top View Mode Switcher: Tactical Armor vs Wireframe Core */}
            <div className="w-full flex items-center justify-between z-20">
              <div className="flex items-center gap-2 p-1 rounded-full glass-panel border border-white/10 text-xs font-mono">
                <button
                  onClick={() => {
                    setViewMode("armor");
                    soundFx.playClick(900);
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    viewMode === "armor"
                      ? "bg-white/15 text-white font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  TACTICAL ARMOR
                </button>
                <button
                  onClick={() => {
                    setViewMode("wireframe");
                    soundFx.playClick(1200);
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    viewMode === "wireframe"
                      ? "bg-white/15 text-white font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  WIREFRAME CORE
                </button>
              </div>

              <span className="text-[10px] font-mono text-white/50 hidden sm:inline">
                INTERACTIVE DIAGNOSTICS
              </span>
            </div>

            {/* Interactive Visual Schematic with Hotspot Overlays */}
            <div className="relative w-full flex-1 flex items-center justify-center my-6">
              {/* High-tech SVG Blueprint Schematic representation */}
              <div className="relative w-72 h-96 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 320"
                  className={`w-full h-full transition-all duration-500 ${
                    viewMode === "wireframe" ? "filter drop-shadow-[0_0_15px_#00f0ff]" : ""
                  }`}
                >
                  {/* Cyber Grid Base Ring */}
                  <ellipse cx="100" cy="300" rx="70" ry="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <ellipse cx="100" cy="300" rx="40" ry="9" stroke={currentSuit.themeColor} strokeWidth="1.5" fill="none" />

                  {/* Suit Body Silhouette Lines */}
                  {/* Helmet */}
                  <path
                    d="M 85 45 C 85 30 115 30 115 45 L 120 70 L 100 80 L 80 70 Z"
                    fill={viewMode === "armor" ? "rgba(255,255,255,0.06)" : "transparent"}
                    stroke={viewMode === "armor" ? currentSuit.themeColor : "#00f0ff"}
                    strokeWidth={viewMode === "wireframe" ? "1" : "2"}
                    strokeDasharray={viewMode === "wireframe" ? "3 2" : "none"}
                  />
                  {/* Visor */}
                  <polygon
                    points="90,52 110,52 106,62 94,62"
                    fill={currentSuit.themeColor}
                    opacity="0.85"
                  />

                  {/* Torso & Core Chestplate */}
                  <path
                    d="M 70 85 L 130 85 L 140 140 L 115 170 L 85 170 L 60 140 Z"
                    fill={viewMode === "armor" ? "rgba(255,255,255,0.08)" : "transparent"}
                    stroke={viewMode === "armor" ? currentSuit.themeColor : "#00f0ff"}
                    strokeWidth={viewMode === "wireframe" ? "1" : "2"}
                    strokeDasharray={viewMode === "wireframe" ? "4 2" : "none"}
                  />
                  {/* Arc Reactor Centroid */}
                  <circle
                    cx="100"
                    cy="120"
                    r="12"
                    fill="none"
                    stroke={currentSuit.themeColor}
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <circle cx="100" cy="120" r="5" fill={currentSuit.themeColor} />

                  {/* Arms & Gauntlets */}
                  <path
                    d="M 68 88 L 45 130 L 40 185 L 52 185 L 60 140"
                    stroke={viewMode === "armor" ? "rgba(255,255,255,0.4)" : "#00f0ff"}
                    strokeWidth="1.8"
                    fill="none"
                  />
                  <path
                    d="M 132 88 L 155 130 L 160 185 L 148 185 L 140 140"
                    stroke={viewMode === "armor" ? "rgba(255,255,255,0.4)" : "#00f0ff"}
                    strokeWidth="1.8"
                    fill="none"
                  />

                  {/* Legs & Kinetic Greaves */}
                  <path
                    d="M 85 172 L 75 235 L 70 295 L 88 295 L 94 235 L 95 172"
                    stroke={viewMode === "armor" ? currentSuit.themeColor : "#00f0ff"}
                    strokeWidth={viewMode === "wireframe" ? "1" : "1.8"}
                    fill={viewMode === "armor" ? "rgba(255,255,255,0.04)" : "none"}
                  />
                  <path
                    d="M 115 172 L 125 235 L 130 295 L 112 295 L 106 235 L 105 172"
                    stroke={viewMode === "armor" ? currentSuit.themeColor : "#00f0ff"}
                    strokeWidth={viewMode === "wireframe" ? "1" : "1.8"}
                    fill={viewMode === "armor" ? "rgba(255,255,255,0.04)" : "none"}
                  />
                </svg>

                {/* Clickable Hotspot Target Nodes */}
                {currentSuit.hotspots.map((spot) => {
                  const isSpotActive = selectedHotspot === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => handleHotspotClick(spot.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      title={spot.title}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isSpotActive
                            ? "bg-white text-black scale-125 shadow-[0_0_20px_#ffffff]"
                            : "bg-[#030509]/80 border text-white hover:scale-110"
                        }`}
                        style={{
                          borderColor: currentSuit.themeColor,
                        }}
                      >
                        <Target size={12} className={isSpotActive ? "animate-spin" : ""} />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded bg-black/80 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        {spot.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Callout Card */}
              {activeSpotData && (
                <div className="absolute bottom-2 left-2 right-2 p-3.5 glass-panel-elevated rounded-xl border border-white/20 z-30 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#ff2a55] font-bold uppercase">
                      {activeSpotData.system}
                    </span>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="text-white/40 hover:text-white text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    {activeSpotData.title}
                  </div>
                  <div className="text-[11px] font-sans text-white/70 mt-1 leading-snug">
                    {activeSpotData.desc}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Quick Suit Navigators */}
            <div className="w-full flex items-center justify-between pt-4 border-t border-white/10 z-20">
              <button
                onClick={handlePrevSuit}
                className="px-3 py-1.5 btn-clip glass-panel hover:bg-white/10 text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft size={14} />
                <span>PREV UNIT</span>
              </button>

              <span className="text-xs font-mono text-white/50">
                0{selectedSuitIndex + 1} / 0{EXO_SUITS.length}
              </span>

              <button
                onClick={handleNextSuit}
                className="px-3 py-1.5 btn-clip glass-panel hover:bg-white/10 text-xs font-mono text-white flex items-center gap-1.5 cursor-pointer"
              >
                <span>NEXT UNIT</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Real-Time Parameter Sliders & Diagnostics (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 card-beveled">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6 uppercase tracking-wider">
                <Sliders size={14} className="text-[#00f0ff]" />
                <span>REAL-TIME KINETIC TUNING</span>
              </div>

              {/* Sliders Container */}
              <div className="flex flex-col gap-6">
                {/* 1. Power Output */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Fusion Overclock</span>
                    <span className="text-white font-bold">{sliders.powerYield}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={sliders.powerYield}
                    onChange={(e) => handleSliderChange("powerYield", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff2a55]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Output: {(4.8 * (sliders.powerYield / 100)).toFixed(2)} GW
                  </span>
                </div>

                {/* 2. Kinetic Dampening */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Kinetic Absorption</span>
                    <span className="text-white font-bold">{sliders.kineticDampening}%</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={sliders.kineticDampening}
                    onChange={(e) => handleSliderChange("kineticDampening", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Deflection: {(140 * (sliders.kineticDampening / 100)).toFixed(1)} GPa
                  </span>
                </div>

                {/* 3. Thruster Overclock */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Vector Thrust Limit</span>
                    <span className="text-white font-bold">{sliders.thrusterOverclock}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={sliders.thrusterOverclock}
                    onChange={(e) => handleSliderChange("thrusterOverclock", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Max Velocity: Mach {(4.2 * (sliders.thrusterOverclock / 100)).toFixed(2)}
                  </span>
                </div>

                {/* 4. Cooling Cycle */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-white/70">Cryo-Cooling Duty</span>
                    <span className="text-white font-bold">{sliders.coolingCycle}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={sliders.coolingCycle}
                    onChange={(e) => handleSliderChange("coolingCycle", Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff2a55]"
                  />
                  <span className="text-[10px] font-mono text-white/40 block mt-1">
                    Thermal Signature: &lt; 4.2 Kelvin
                  </span>
                </div>
              </div>
            </div>

            {/* Suit Loadout Features List */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <span className="text-[11px] font-mono text-white/50 tracking-wider uppercase block mb-3">
                INTEGRATED LOADOUT:
              </span>
              <div className="flex flex-col gap-2">
                {currentSuit.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs font-mono text-white/80">
                    <span className="text-[#ff2a55] font-bold">›</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation / Unit Reservation Modal */}
      {reserveModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setReserveModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg glass-panel-elevated rounded-2xl border border-white/20 p-6 sm:p-8 card-beveled shadow-[0_0_60px_rgba(255,42,85,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {reservedSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-2">
                  ALLOCATION REGISTERED
                </h3>
                <p className="text-sm font-mono text-white/70 mb-4">
                  Unit: <span className="text-[#ff2a55] font-bold">{currentSuit.name}</span> // Pilot Callsign:{" "}
                  <span className="text-[#00f0ff] font-bold">{pilotCallsign || "OPERATOR-7"}</span>
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/60 mb-6">
                  CLEARANCE TOKEN: ATH-{(Math.random() * 90000 + 10000).toFixed(0)}-NX
                </div>
                <button
                  onClick={() => {
                    setReserveModalOpen(false);
                    setReservedSuccess(false);
                  }}
                  className="px-6 py-2.5 btn-clip bg-[#ff2a55] text-white font-mono text-xs font-bold cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            ) : (
              <form onSubmit={handleReserveSubmit}>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono tracking-wider text-[#ff2a55] font-bold uppercase">
                    UNIT ALLOCATION REQUEST // {currentSuit.code}
                  </span>
                  <button
                    type="button"
                    onClick={() => setReserveModalOpen(false)}
                    className="text-white/40 hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      PILOT CALLSIGN / DESIGNATION
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. VANGUARD-ACTUAL"
                      value={pilotCallsign}
                      onChange={(e) => setPilotCallsign(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-[#ff2a55]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/70 block mb-1.5">
                      ENCRYPTED COMMS EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="pilot@defense.aetheris.org"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-[#ff2a55]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 btn-clip bg-gradient-to-r from-[#ff2a55] to-[#e11d48] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 cursor-pointer"
                >
                  TRANSMIT ALLOCATION RESERVATION
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
