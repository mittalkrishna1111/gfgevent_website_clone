"use client";

import React from "react";
import { SPONSORS } from "@/data/marvelEventData";
import { MapPin, Shield, Building2 } from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function MultiverseAllies() {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
          <Shield className="h-3.5 w-3.5" />
          <span>COLLABORATIVE ALLIANCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          MULTIVERSE ALLIES &amp; <span className="text-gradient-marvel">SPONSORS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Powered by industry leaders, developer communities, and the visionary
          faculty of Bennett University (Times of India Group).
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {SPONSORS.map((s, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFX.playClick(950 + idx * 40)}
            className="glass-panel p-5 rounded-xl border border-white/10 hover:border-red-500/40 transition-all flex flex-col items-center justify-center text-center group cursor-default"
          >
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
              {s.tier}
            </div>
            <div className="text-base font-black text-white group-hover:text-red-400 transition-colors uppercase">
              {s.name}
            </div>
            <div className="text-[10px] font-mono text-zinc-400 mt-1">
              {s.domain}
            </div>
          </div>
        ))}
      </div>

      {/* Bennett University Host Campus Spotlight */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-10 border border-white/10 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-2">
              <Building2 className="h-4 w-4" />
              <span>THE HOST CITADEL // GREATER NOIDA</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
              BENNETT UNIVERSITY (THE TIMES GROUP)
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Spread across a 68-acre world-class campus in TechZone 2, Greater Noida,
              Bennett University houses India&apos;s premier AI &amp; High-Performance
              Supercomputing facilities, maker labs, and collaborative student spaces.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <MapPin className="h-4 w-4 text-red-400" />
                Plot Nos 8, 11, TechZone 2, Greater Noida, UP 201310
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-cyan-400 font-bold">1 Gbps Fiber Wi-Fi</span>
              <span className="text-zinc-600">|</span>
              <span className="text-amber-400 font-bold">24/7 Hacker Lounge</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 p-5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase border-b border-white/10 pb-2">
              HOST DIRECTIVES &amp; ACCESS
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-zinc-500">Metro Connectivity:</span>
              <span className="text-white">Pari Chowk / Alpha 1 Metro</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-zinc-500">Security Gate:</span>
              <span className="text-white">Gate 1 // Multiverse Pass Check</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-500">Organizing Body:</span>
              <span className="text-red-400 font-bold">GeeksforGeeks Student Chapter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
