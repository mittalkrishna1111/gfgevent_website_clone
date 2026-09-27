"use client";

import React, { useState } from "react";
import { SACRED_TIMELINE } from "@/data/marvelEventData";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function SacredTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const handlePhaseClick = (index: number) => {
    soundFX.playClick(600 + index * 100);
    setActivePhaseIndex(index);
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
          <Clock className="h-3.5 w-3.5" />
          <span>TVA TEMPORAL LOOM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          THE <span className="text-gradient-gold">SACRED TIMELINE</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          From the initial registration spark to the Living Tribunal judgment at
          Bennett University. Follow each epoch on the temporal loom without creating
          nexus branch events.
        </p>
      </div>

      {/* Horizontal Phase Nav for Desktop */}
      <div className="flex overflow-x-auto pb-4 gap-3 mb-10 no-scrollbar justify-start md:justify-center">
        {SACRED_TIMELINE.map((item, idx) => {
          const isSelected = activePhaseIndex === idx;
          return (
            <button
              key={idx}
              data-feature={item.codename.toUpperCase()}
              data-feature-color="#fbbf24"
              onClick={() => handlePhaseClick(idx)}
              className={`flex flex-col items-start p-3 sm:p-4 rounded-xl border text-left min-w-[200px] transition-all cursor-pointer ${
                isSelected
                  ? "bg-amber-950/40 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.25)] scale-102"
                  : "bg-[#0a0e1a] border-white/10 hover:border-white/20 text-zinc-400"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[10px] font-mono font-bold text-amber-400">
                  {item.phase}
                </span>
                {item.status === "active" ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                ) : (
                  <span className="text-[10px] font-mono text-zinc-500">PENDING</span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase truncate w-full">
                {item.codename}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-1">
                {item.date}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Spotlight Card */}
      {(() => {
        const current = SACRED_TIMELINE[activePhaseIndex];
        return (
          <div className="glass-panel-elevated rounded-2xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="h-44 w-44 text-amber-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-mono font-black mb-3">
                    {current.phase} {"//"} {current.codename}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2">
                    {current.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                    <CheckCircle className="h-4 w-4" />
                    <span>STATUS: {current.badge.toUpperCase()}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-400" />
                    <span>DATE: {current.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    <span>TIMESTAMP: {current.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <span>LOCATION: {current.location}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-center gap-4">
                <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                  MISSION BRIEFING &amp; PROTOCOL CHECKPOINTS
                </div>
                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
                  {current.description}
                </p>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 mt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold mb-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>TVA TEMPORAL DIRECTIVE</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    All participants must have their S.H.I.E.L.D. Multiverse Clearance
                    Badges active before in-person gate arrival at Bennett University.
                    No branch timeline tampering allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
