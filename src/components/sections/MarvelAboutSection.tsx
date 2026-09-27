"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Cpu, Activity, ArrowRight, Zap, Radio, Sparkles } from "lucide-react";
import { soundFx } from "@/lib/sound";

const PILLARS = [
  {
    id: "stark-ai",
    num: "01",
    title: "Stark Autonomous AI & Agents",
    subtitle: "J.A.R.V.I.S. & F.R.I.D.A.Y. Protocol",
    desc: "Build next-generation autonomous agentic workflows, multi-modal LLM reasoning pipelines, and real-time computer vision heuristics capable of operating at Stark Industries caliber.",
    tag: "STARK AI",
    metric: "40+ Tbps",
    metricLabel: "Neural Bandwidth",
    icon: Cpu,
    accent: "#e23636",
    image: "/images/heroes/iron-man-85.png",
  },
  {
    id: "wakanda-tech",
    num: "02",
    title: "Vibranium Distributed Architecture",
    subtitle: "Decentralized Systems & Zero-Trust",
    desc: "Engineer fault-tolerant distributed infrastructure, zero-knowledge cryptographic safeguards, and high-throughput sovereign smart contracts that withstand multiversal DDoS attacks.",
    tag: "VIBRANIUM SEC",
    metric: "0.14 ms",
    metricLabel: "Consensus Latency",
    icon: Shield,
    accent: "#00f0ff",
    image: "/images/heroes/black-panther.jpg",
  },
  {
    id: "quantum-realm",
    num: "03",
    title: "Quantum Realm & Spatial Computing",
    subtitle: "Tesseract Multiverse Simulations",
    desc: "Push the boundaries of WebGL, WebXR spatial computing, generative 3D environments, and algorithmic quantum simulations that bridge physical campuses with virtual metaverses.",
    tag: "QUANTUM CORE",
    metric: "14M Ops/sec",
    metricLabel: "Spatial Calculations",
    icon: Radio,
    accent: "#fbbf24",
    image: "/images/heroes/doctor-strange.jpg",
  },
];

export default function MarvelAboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="protocol"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(226,54,54,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#e23636] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e23636]" />
            // 01 MISSION PROTOCOL & HACKATHON BRIEFING
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            THE DIGITAL MULTIVERSE <br />
            <span className="text-gradient-marvel">REQUIRES DEFENDERS.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Organized by the GeeksforGeeks Student Chapter at Bennett University, the Multiverse of
            Code gathers 1,200+ selected developers, designers, and innovators. Over 36 non-stop hours,
            teams engineer solutions across the 6 Infinity Stone tracks to claim glory, cash bounties,
            and Stark Expo recognition.
          </p>
        </div>

        {/* 3 Interactive Pillars (EV2 Glassmorphic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.id}
                data-cursor-text={pillar.tag}
                data-feature-color={pillar.accent}
                onClick={() => {
                  setActivePillar(idx);
                  soundFx.playClick(pillar.accent === "#e23636" ? 900 : 1100);
                }}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer card-beveled group hover:scale-[1.03] ${
                  isActive
                    ? "glass-panel-elevated border-[#e23636]/50 shadow-[0_0_40px_rgba(226,54,54,0.2)]"
                    : "glass-panel hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  {/* Pillar Marvel Hero Visual Banner */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top filter brightness-90 contrast-115 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/40 to-transparent" />
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_10px_#00f0ff] absolute animate-hologram-scan" />
                    </div>

                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80 font-bold uppercase tracking-wider">
                      {pillar.tag}
                    </div>

                    <div className="absolute top-2.5 right-2.5 text-2xl font-extrabold font-mono text-white/30">
                      {pillar.num}
                    </div>

                    <div
                      className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.accent}25`,
                        border: `1px solid ${pillar.accent}60`,
                      }}
                    >
                      <Icon size={18} style={{ color: pillar.accent }} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-mono text-white tracking-wide mb-2 group-hover:text-[#e23636] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 tracking-wider uppercase mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-sans mb-8">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                      {pillar.metricLabel}
                    </span>
                    <span className="text-xl font-bold font-mono" style={{ color: pillar.accent }}>
                      {pillar.metric}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#e23636] group-hover:bg-[#e23636]/10 transition-colors">
                    <ArrowRight size={14} className="text-white/60 group-hover:text-[#e23636]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bennett Campus Citadel Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-widest text-[#fbbf24] uppercase">
                BENNETT CAMPUS CITADEL PROTOCOL // ACTIVE
              </span>
              <span className="text-sm font-sans text-white/80">
                Full 36-hour offline hackathon hosted at Bennett University, Greater Noida. Air-conditioned hack bays, meals, red bull stations, and 24/7 mentor lounges included.
              </span>
            </div>
          </div>

          <a
            href="#tracks"
            data-cursor-text="INFINITY TRACKS"
            onClick={(e) => {
              e.preventDefault();
              soundFx.playClick();
              document.querySelector("#tracks")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-5 py-2.5 btn-clip glass-panel hover:bg-white/10 hover:scale-105 active:scale-95 text-xs font-mono tracking-wider text-white border border-white/15 flex items-center gap-2 cursor-pointer transition-all"
          >
            <span>EXPLORE INFINITY TRACKS</span>
            <ArrowRight size={14} className="text-[#e23636]" />
          </a>
        </div>
      </div>
    </section>
  );
}
