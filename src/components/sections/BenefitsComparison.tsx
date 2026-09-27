"use client";

import React, { useState } from "react";
import { BENCHMARKS, BenchmarkItem } from "@/data/aetherisData";
import { ShieldCheck, Zap, TrendingUp, Cpu, Award } from "lucide-react";
import { soundFx } from "@/lib/sound";

export default function BenefitsComparison() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section
      id="benchmarks"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,42,85,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#00f0ff] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            // 05 KINETIC BENCHMARK VALIDATION
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            MEASURABLE SUPREMACY <br />
            <span className="text-gradient-cyan">AGAINST CONVENTIONAL ARMOR</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Military laboratories evaluated AETHERIS Nexus-X against fourth-generation titanium-hydraulic
            exoskeletons across extreme ballistic, kinetic, and sustained flight parameters.
          </p>
        </div>

        {/* Benchmark Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BENCHMARKS.map((item, idx) => {
            const isSelected = activeItem === idx;

            return (
              <div
                key={item.metric}
                onClick={() => {
                  setActiveItem(idx);
                  soundFx.playClick(1000);
                }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer card-beveled flex flex-col justify-between ${
                  isSelected
                    ? "glass-panel-elevated border-[#00f0ff]/50 shadow-[0_0_35px_rgba(0,240,255,0.15)]"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                      PARAMETER 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[#00f0ff] text-xs font-mono font-bold tracking-wider">
                      {item.advantage}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Comparative Visual Bars */}
                <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                  {/* Legacy Metric */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-white/50">Conventional Exo-Frames</span>
                      <span className="text-white/60">
                        {item.legacyVal} {item.legacyUnit}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/20 rounded-full"
                        style={{
                          width: `${Math.min(100, Math.max(15, (item.legacyVal / (item.legacyVal + item.aetherisVal)) * 100))}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Aetheris Nexus-X Metric */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#00f0ff] font-bold">AETHERIS Nexus-X</span>
                      <span className="text-[#00f0ff] font-bold">
                        {item.aetherisVal} {item.aetherisUnit}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#06b6d4] rounded-full shadow-[0_0_15px_#00f0ff]"
                        style={{
                          width: "98%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certification Assurance Pill */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <Award size={18} className="text-[#f59e0b]" />
            <span className="text-white/80">
              OFFICIAL LABORATORY CERTIFICATION: STANAG 4569 LEVEL 6 COMPLIANCE VERIFIED
            </span>
          </div>
          <span className="text-[#00f0ff]">AUDITED BY AEROSPACE DEFENSE DIVISION</span>
        </div>
      </div>
    </section>
  );
}
