"use client";

import React, { useState } from "react";
import { Shield, Cpu, Activity, ArrowRight, Eye, Radio, Sparkles } from "lucide-react";
import { soundFx } from "@/lib/sound";

const PILLARS = [
  {
    id: "synapse",
    num: "01",
    title: "Zero-Latency Synaptic Bridging",
    subtitle: "Biological & Machine Confluence",
    desc: "A sub-dermal graphene weave fuses pilot neuromuscular impulse receptors with the exosuit's synthetic spinal bus in 0.14 milliseconds. The suit acts not as hardware you pilot, but as an unbroken biological extension of your own skeletal frame.",
    tag: "NEURAL BUS",
    metric: "0.14 ms",
    metricLabel: "Synaptic Delay",
    icon: Cpu,
    accent: "#ff2a55",
  },
  {
    id: "lattice",
    num: "02",
    title: "Self-Healing Biomorphic Lattice",
    subtitle: "Molecular Memory & Kinetic Absorption",
    desc: "Crafted from alternating layers of single-crystal graphene and shear-thickening non-Newtonian polymers. Hyper-velocity impacts are dispersed across millions of microscopic honeycomb cells, while micro-vascular resin channels instantly seal structural fissures.",
    tag: "ARMOR MATRIX",
    metric: "140 GPa",
    metricLabel: "Tensile Threshold",
    icon: Shield,
    accent: "#00f0ff",
  },
  {
    id: "quantum-ai",
    num: "03",
    title: "Deep-Space Predictive Telemetry",
    subtitle: "Autonomous Orbital Mesh AI",
    desc: "Tethered directly to fourteen planetary orbital sensor arrays, the suit's cryogenic quantum co-processor analyzes millions of kinetic threat trajectories simultaneously, projecting predictive evasion firing paths onto the operator's ocular HUD before impacts materialize.",
    tag: "ORBITAL TELEMETRY",
    metric: "14M Ops/sec",
    metricLabel: "Threat Calculations",
    icon: Radio,
    accent: "#f59e0b",
  },
];

export default function AboutProduct() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="overview"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Background Atmosphere & Floating Fog */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(255,42,85,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,240,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
            // 01 ARCHITECTURAL OVERVIEW
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            ENGINEERED FOR THE <br />
            <span className="text-gradient-crimson">NEXT STRATUM OF SURVIVAL.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            When standard defense armaments crumble against hyper-velocity orbital kinetic
            threats, conventional human reflex times fall short. AETHERIS Nexus-X merges
            cutting-edge biomechanics with sub-atomic energy architecture to build an autonomous
            bastion between humanity and the hostile unknown.
          </p>
        </div>

        {/* 3 Interactive Pillars (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  setActivePillar(idx);
                  soundFx.playClick(pillar.accent === "#ff2a55" ? 900 : 1100);
                }}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer card-beveled group ${
                  isActive
                    ? "glass-panel-elevated border-[#ff2a55]/50 shadow-[0_0_40px_rgba(255,42,85,0.2)]"
                    : "glass-panel hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Tactical Top Tag & Numeric Identifier */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70 tracking-wider">
                      {pillar.tag}
                    </span>
                    <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${pillar.accent}15`,
                      border: `1px solid ${pillar.accent}40`,
                    }}
                  >
                    <Icon size={24} style={{ color: pillar.accent }} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-mono text-white tracking-wide mb-2 group-hover:text-[#ff2a55] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 tracking-wider uppercase mb-4">
                    {pillar.subtitle}
                  </div>

                  {/* Body description */}
                  <p className="text-sm text-white/70 leading-relaxed font-sans mb-8">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Metric Readout */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                      {pillar.metricLabel}
                    </span>
                    <span
                      className="text-xl font-bold font-mono"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.metric}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff2a55] group-hover:bg-[#ff2a55]/10 transition-colors">
                    <ArrowRight size={14} className="text-white/60 group-hover:text-[#ff2a55]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactical Sub-banner with Live Scanline & Quote */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-widest text-[#00f0ff] uppercase">
                BIOLOGICAL INTEGRITY ASSURANCE // VALIDATED
              </span>
              <span className="text-sm font-sans text-white/80">
                100% pilot retention in active Mach 4+ high-G combat deployments. Zero synaptic rejection observed.
              </span>
            </div>
          </div>

          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              soundFx.playClick();
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-5 py-2.5 btn-clip glass-panel hover:bg-white/10 text-xs font-mono tracking-wider text-white border border-white/15 flex items-center gap-2 cursor-pointer"
          >
            <span>INSPECT SUBSYSTEMS</span>
            <ArrowRight size={14} className="text-[#ff2a55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
