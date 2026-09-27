"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Activity, Radio, ArrowRight } from "lucide-react";
import { ROADMAP_STAGES, RoadmapStage } from "@/data/aetherisData";
import { soundFx } from "@/lib/sound";

export default function HowItWorks() {
  const [activeStageIndex, setActiveStageIndex] = useState(2); // Start at current deployment

  const currentStage: RoadmapStage = ROADMAP_STAGES[activeStageIndex];

  const handleSelectStage = (idx: number) => {
    setActiveStageIndex(idx);
    soundFx.playClick(idx > activeStageIndex ? 1100 : 800);
  };

  const handleNext = () => {
    const nextIdx = (activeStageIndex + 1) % ROADMAP_STAGES.length;
    handleSelectStage(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeStageIndex - 1 + ROADMAP_STAGES.length) % ROADMAP_STAGES.length;
    handleSelectStage(prevIdx);
  };

  return (
    <section
      id="architecture"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(255,42,85,0.05)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
            // 03 DEPLOYMENT PIPELINE & ROADMAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            THE JOURNEY TO <br />
            <span className="text-gradient-crimson">PLANETARY SYNCHRONIZATION</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            From molecular synaptic DNA binding to global autonomous defense fleet operations.
            Follow the trajectory of milestones powering the AETHERIS Nexus-X rollout.
          </p>
        </div>

        {/* Interactive Curved S-Line Roadmap Track (Inspired by EV2's signature roadmap-frame) */}
        <div className="relative mb-14">
          {/* Decorative SVG Flow Line (Visible on md+) */}
          <div className="hidden md:block relative w-full h-24 mb-6">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 40 Q 275 -10 500 40 T 950 40"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 50 40 Q 275 -10 500 40 T 950 40"
                stroke="#ff2a55"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset={1000 - ((activeStageIndex + 1) / ROADMAP_STAGES.length) * 1000}
                className="transition-all duration-700 ease-out"
              />
            </svg>
          </div>

          {/* Milestone Step Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-20">
            {ROADMAP_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelectStage(idx)}
                  className={`relative flex flex-col items-center sm:items-start p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? "bg-[#ff2a55]/10 border-[#ff2a55] shadow-[0_0_25px_rgba(255,42,85,0.3)] scale-[1.02]"
                      : isPast
                      ? "glass-panel border-white/20 hover:border-white/40"
                      : "glass-panel opacity-60 hover:opacity-100 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      {stage.timeframe}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isSelected
                          ? "bg-[#ff2a55] animate-ping"
                          : isPast
                          ? "bg-emerald-400"
                          : "bg-white/30"
                      }`}
                    />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-[#ff2a55]">
                    {stage.stageNumber}
                  </span>
                  <span className="text-sm font-bold font-mono text-white mt-1 line-clamp-1">
                    {stage.title}
                  </span>
                  <span className="text-[10px] font-mono text-white/50 mt-1 uppercase">
                    {stage.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card (EV2 Roadmap Viewport) */}
        <div className="glass-panel-elevated rounded-2xl border border-white/15 p-6 sm:p-10 card-beveled relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Stage Detailed Info */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded bg-[#ff2a55]/20 text-[#ff2a55] border border-[#ff2a55]/40 text-xs font-mono font-bold tracking-wider">
                  {currentStage.stageNumber} // {currentStage.timeframe}
                </span>

                <span
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold flex items-center gap-1.5 ${
                    currentStage.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                      : currentStage.status === "Current Deployment"
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 animate-pulse"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  <Activity size={12} />
                  <span>{currentStage.status}</span>
                </span>

                <span className="text-xs font-mono text-white/40">{currentStage.telemetryCode}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-2">
                {currentStage.title}
              </h3>
              <div className="text-sm font-mono text-[#00f0ff] mb-4">
                {currentStage.subtitle}
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans mb-8">
                {currentStage.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="flex flex-col gap-2.5">
                <div className="text-xs font-mono text-white/50 tracking-wider uppercase mb-1">
                  Key Technical Deliverables:
                </div>
                {currentStage.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-white/80">
                    <CheckCircle2 size={16} className="text-[#ff2a55] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Visual HUD / Tactical Controls */}
            <div className="flex flex-col items-center lg:items-end gap-6 shrink-0">
              {/* Tactical Diagnostic Radar Plate */}
              <div className="w-56 h-56 rounded-2xl glass-panel border border-white/10 flex flex-col items-center justify-center p-6 text-center relative">
                <div className="absolute inset-0 bg-cyber-grid opacity-25 rounded-2xl" />
                <div className="relative w-28 h-28 rounded-full border border-white/15 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-[#ff2a55]/40 flex items-center justify-center animate-spin" style={{ animationDuration: "14s" }}>
                    <div className="w-3 h-3 rounded-full bg-[#ff2a55]" />
                  </div>
                  <Radio size={24} className="text-white/60 absolute" />
                </div>
                <span className="text-[10px] font-mono text-white/60 mt-4 tracking-wider uppercase">
                  ACTIVE SECTOR GRID 07
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                  TELEMETRY VERIFIED
                </span>
              </div>

              {/* Prev / Next Tactical Arrows (EV2-style clipped controls) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 btn-clip glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-[#ff2a55] transition-all cursor-pointer"
                  title="Previous Milestone"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="text-xs font-mono text-white/60 px-3">
                  0{activeStageIndex + 1} / 0{ROADMAP_STAGES.length}
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 btn-clip glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-[#ff2a55] transition-all cursor-pointer"
                  title="Next Milestone"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
