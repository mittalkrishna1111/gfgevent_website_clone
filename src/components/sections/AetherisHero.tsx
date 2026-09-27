"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Shield, Zap, Sparkles, Terminal } from "lucide-react";
import AetherisCoreCanvas from "@/components/ui/AetherisCoreCanvas";
import VideoModal from "@/components/ui/VideoModal";
import { soundFx } from "@/lib/sound";

export default function AetherisHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    soundFx.playClick(600);
    setVideoOpen(true);
  };

  const handleCtaClick = () => {
    soundFx.playPowerUp();
    const ctaSection = document.querySelector("#cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Visual Ambient Background Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(255,42,85,0.12)_0%,_transparent_65%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.08)_0%,_transparent_65%)] pointer-events-none blur-3xl" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto">
        {/* Left Column: Headlines & Callouts */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          {/* Classification Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#ff2a55] animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
              SECURITY STRATUM 07 // NEXUS-X PROTOTYPE DEPLOYED
            </span>
          </div>

          {/* Hero Main Headline (Inspired by EV2's bold large typography) */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-mono text-white leading-[1.08] mb-6">
            SYNCHRONIZE <br />
            <span className="text-gradient-crimson drop-shadow-[0_0_35px_rgba(255,42,85,0.4)]">
              HUMAN WILL.
            </span>
            <br />
            DEFEND TOMORROW.
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base xl:text-lg text-white/70 max-w-xl font-sans leading-relaxed mb-8">
            Step into the next evolution of kinetic warfare and planetary defense. AETHERIS unites
            zero-latency synaptic neural links with a self-repairing biomorphic graphene armor
            lattice and sub-atomic cold fusion propulsion.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            {/* Primary Button with Polygon Clip-Path */}
            <button
              onClick={handleCtaClick}
              className="px-7 py-4 btn-clip-lg bg-gradient-to-r from-[#ff2a55] via-[#ff3b68] to-[#e11d48] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 hover:shadow-[0_0_35px_rgba(255,42,85,0.6)] active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>CLAIM ALLOCATION</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Watch Video Button (EV2-style clipped button) */}
            <button
              onClick={handleOpenVideo}
              className="px-6 py-4 btn-clip-lg glass-panel hover:bg-white/10 text-white font-mono text-xs tracking-widest uppercase border border-white/15 hover:border-[#00f0ff]/50 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#ff2a55]/20 border border-[#ff2a55] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff2a55] transition-all">
                <Play size={10} className="fill-white text-white ml-0.5" />
              </div>
              <span className="group-hover:text-[#00f0ff] transition-colors">
                WATCH CINEMATIC
              </span>
            </button>
          </div>

          {/* Quick Metrics Trust Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-6 border-t border-white/10 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">0.14<span className="text-xs text-[#ff2a55]">ms</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Synaptic Link</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">4.8<span className="text-xs text-[#00f0ff]">GW</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Fusion Yield</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">Mach <span className="text-[#f59e0b]">4.2</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Sprint Thrust</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visually Impressive Central Core Element */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative z-20">
          <AetherisCoreCanvas />
        </div>
      </div>

      {/* Hero Bottom Live Telemetry Ticker */}
      <div className="max-w-7xl mx-auto w-full pt-8 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/50">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            TELEMETRY: SATELLITE CONSTELLATION ONLINE
          </span>
          <span className="hidden sm:inline">ORBITAL ALTITUDE: 420.8 KM</span>
        </div>
        <div className="flex items-center gap-6">
          <span>PILOT COHERENCE: 99.98%</span>
          <span className="text-[#ff2a55] font-semibold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      {/* Video Modal Triggered from CTA */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
