"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Activity, Radio, Sparkles } from "lucide-react";
import { SACRED_TIMELINE, TimelineEvent } from "@/data/marvelEventData";
import { soundFx } from "@/lib/sound";

export default function SacredTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentEvent: TimelineEvent = SACRED_TIMELINE[activeIndex];

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    soundFx.playClick(idx > activeIndex ? 1100 : 800);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % SACRED_TIMELINE.length;
    handleSelect(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + SACRED_TIMELINE.length) % SACRED_TIMELINE.length;
    handleSelect(prevIdx);
  };

  return (
    <section
      id="timeline"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,_rgba(251,191,36,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#fbbf24] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
            // 03 TVA SACRED TIMELINE ROADMAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            THE SACRED TIMELINE OF <br />
            <span className="text-gradient-gold">AVENGERS INITIATIVE &apos;26</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Monitored by the Time Variance Authority and Bennett University Hackathon Directorate.
            Ensure your team reaches each chronological checkpoint without timeline deviation.
          </p>
        </div>

        {/* S-Curved Flow Line */}
        <div className="relative mb-14">
          <div className="hidden md:block relative w-full h-24 mb-6">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 40 Q 275 -10 500 40 T 950 40"
                stroke="rgba(251, 191, 36, 0.2)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 50 40 Q 275 -10 500 40 T 950 40"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeDasharray="1000"
                strokeDashoffset={1000 - ((activeIndex + 1) / SACRED_TIMELINE.length) * 1000}
                className="transition-all duration-700 ease-out"
              />
            </svg>
          </div>

          {/* Milestone Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-20">
            {SACRED_TIMELINE.map((event, idx) => {
              const isSelected = activeIndex === idx;
              const phaseColors = ["#00f0ff", "#fbbf24", "#10b981", "#ef4444"];
              const phaseColor = phaseColors[idx % phaseColors.length];

              return (
                <button
                  key={event.phase}
                  data-cursor-text={event.phase}
                  data-feature-color={phaseColor}
                  onClick={() => handleSelect(idx)}
                  className={`relative flex flex-col items-center sm:items-start p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left hover:scale-105 active:scale-95 ${
                    isSelected
                      ? "bg-[#fbbf24]/10 border-[#fbbf24] shadow-[0_0_25px_rgba(251,191,36,0.3)] scale-[1.02]"
                      : "glass-panel border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      {event.date}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isSelected
                          ? "bg-[#fbbf24] animate-ping"
                          : event.status === "completed"
                          ? "bg-emerald-400"
                          : "bg-white/30"
                      }`}
                    />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-[#fbbf24]">
                    {event.phase}
                  </span>
                  <span className="text-sm font-bold font-mono text-white mt-1 line-clamp-1">
                    {event.title}
                  </span>
                  <span className="text-[10px] font-mono text-white/50 mt-1 uppercase">
                    {event.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="glass-panel-elevated rounded-2xl border border-white/15 p-6 sm:p-10 card-beveled relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/40 text-xs font-mono font-bold tracking-wider">
                  {currentEvent.phase} // {currentEvent.date}
                </span>

                <span
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold flex items-center gap-1.5 ${
                    currentEvent.status === "active"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 animate-pulse"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  <Activity size={12} />
                  <span className="uppercase">{currentEvent.status}</span>
                </span>

                <span className="text-xs font-mono text-white/40">{currentEvent.codename}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-2">
                {currentEvent.title}
              </h3>
              <div className="text-sm font-mono text-[#fbbf24] mb-4">
                LOCATION: {currentEvent.location} // TIME: {currentEvent.time}
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans mb-6">
                {currentEvent.description}
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 w-fit">
                TIMELINE BADGE: <span className="text-[#fbbf24] font-bold">{currentEvent.badge}</span>
              </div>
            </div>

            {/* TVA Radar Display & Controls */}
            <div className="flex flex-col items-center lg:items-end gap-6 shrink-0">
              <div className="w-56 h-56 rounded-2xl glass-panel border border-white/10 flex flex-col items-center justify-center p-6 text-center relative">
                <div className="absolute inset-0 bg-cyber-grid opacity-25 rounded-2xl" />
                <div className="relative w-28 h-28 rounded-full border border-[#fbbf24]/30 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full border border-[#fbbf24]/60 flex items-center justify-center animate-spin"
                    style={{ animationDuration: "14s" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                  </div>
                  <Clock size={24} className="text-white/60 absolute" />
                </div>
                <span className="text-[10px] font-mono text-white/60 mt-4 tracking-wider uppercase">
                  TVA VARIANCE DETECTOR
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                  TIMELINE PRESERVED
                </span>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  data-cursor-text="PREV PHASE"
                  data-feature-color="#fbbf24"
                  className="p-3 btn-clip glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-[#fbbf24] hover:scale-110 active:scale-90 transition-all cursor-pointer"
                  title="Previous Milestone"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="text-xs font-mono text-white/60 px-3">
                  0{activeIndex + 1} / 0{SACRED_TIMELINE.length}
                </div>
                <button
                  onClick={handleNext}
                  data-cursor-text="NEXT PHASE"
                  data-feature-color="#fbbf24"
                  className="p-3 btn-clip glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-[#fbbf24] hover:scale-110 active:scale-90 transition-all cursor-pointer"
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
