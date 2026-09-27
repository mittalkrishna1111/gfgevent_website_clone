"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Shield, Zap, Sparkles, Terminal } from "lucide-react";
import StarkArcReactorCanvas from "@/components/ui/StarkArcReactorCanvas";
import VideoModal from "@/components/ui/VideoModal";
import { soundFx } from "@/lib/sound";

export default function MarvelHeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    soundFx.playClick(600);
    setVideoOpen(true);
  };

  const handleCtaClick = () => {
    soundFx.playPowerUp();
    const ctaSection = document.querySelector("#register");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Visual Ambient Background Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle_at_center,_rgba(226,54,54,0.12)_0%,_transparent_65%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 right-[-10%] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.08)_0%,_transparent_65%)] pointer-events-none blur-3xl" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto">
        {/* Left Column: Headlines & Callouts */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          {/* Classification Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#e23636] animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
              STARK EXPO &apos;26 // GFG STUDENT CHAPTER BENNETT UNIVERSITY
            </span>
          </div>

          {/* Hero Main Headline (Inspired by EV2's bold typography + MCU Vibe) */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-mono text-white leading-[1.08] mb-6">
            EARTH&apos;S MIGHTIEST <br />
            <span className="text-gradient-marvel drop-shadow-[0_0_35px_rgba(226,54,54,0.45)]">
              GEEKS ASSEMBLE.
            </span>
            <br />
            DEFEND THE MULTIVERSE.
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base xl:text-lg text-white/70 max-w-xl font-sans leading-relaxed mb-8">
            The multiverse timeline is fracturing. GeeksforGeeks Student Chapter Bennett University
            invites the nation&apos;s elite coders, AI researchers, and builders for a 36-hour hackathon
            at Bennett University Campus with ₹2,50,000+ in bounties, Stark internships, and multiverse challenges.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            {/* Primary Button with Polygon Clip-Path */}
            <button
              onClick={handleCtaClick}
              data-cursor-text="ASSEMBLE NOW"
              data-feature-color="#e23636"
              className="px-7 py-4 btn-clip-lg bg-gradient-to-r from-[#e23636] via-[#ea580c] to-[#e23636] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 hover:shadow-[0_0_35px_rgba(226,54,54,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <span>ASSEMBLE TEAM</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Watch Video Button */}
            <button
              onClick={handleOpenVideo}
              data-cursor-text="PLAY TEASER"
              data-feature-color="#fbbf24"
              className="px-6 py-4 btn-clip-lg glass-panel hover:bg-white/10 text-white font-mono text-xs tracking-widest uppercase border border-white/15 hover:border-[#fbbf24]/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#e23636]/20 border border-[#e23636] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e23636] transition-all">
                <Play size={10} className="fill-white text-white ml-0.5" />
              </div>
              <span className="group-hover:text-[#fbbf24] transition-colors">
                STARK EXPO TEASER
              </span>
            </button>
          </div>

          {/* Quick Metrics Trust Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-6 border-t border-white/10 w-full max-w-lg">
            <div
              data-cursor-text="₹2.5L PRIZES"
              data-feature-color="#fbbf24"
              className="flex flex-col cursor-pointer p-2 rounded-lg hover:bg-white/[0.03] hover:scale-105 transition-all"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">₹2.5L<span className="text-xs text-[#fbbf24]">+</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Prize Treasury</span>
            </div>
            <div
              data-cursor-text="36H MARATHON"
              data-feature-color="#e23636"
              className="flex flex-col cursor-pointer p-2 rounded-lg hover:bg-white/[0.03] hover:scale-105 transition-all"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">36<span className="text-xs text-[#e23636]">HRS</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Non-Stop Hack</span>
            </div>
            <div
              data-cursor-text="1200+ HACKERS"
              data-feature-color="#00f0ff"
              className="flex flex-col cursor-pointer p-2 rounded-lg hover:bg-white/[0.03] hover:scale-105 transition-all"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">1,200<span className="text-xs text-[#00f0ff]">+</span></span>
              <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase mt-0.5">Hackers Assembled</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visually Impressive Central Arc Reactor Element */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative z-20">
          <StarkArcReactorCanvas />
        </div>
      </div>

      {/* Hero Bottom Event Key Highlights Strip */}
      <div className="max-w-7xl mx-auto w-full pt-8 mt-6 border-t border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-4">
          <div
            data-cursor-text="OCT 16-18"
            data-feature-color="#fbbf24"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-[#fbbf24]/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">EVENT TIMELINE</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#fbbf24] mt-0.5">OCT 16 - 18, 2026</span>
          </div>

          <div
            data-cursor-text="36 HOURS"
            data-feature-color="#e23636"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-[#e23636]/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">FORMAT</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-white mt-0.5">36H OFFLINE HACK</span>
          </div>

          <div
            data-cursor-text="CAMPUS VENUE"
            data-feature-color="#00f0ff"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-[#00f0ff]/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">VENUE LOCATION</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#00f0ff] mt-0.5">BENNETT CITADEL, NOIDA</span>
          </div>

          <div
            data-cursor-text="BOUNTIES"
            data-feature-color="#fbbf24"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-[#fbbf24]/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">CASH BOUNTY</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#fbbf24] mt-0.5">₹2,50,000+ POOL</span>
          </div>

          <div
            data-cursor-text="ZERO COST"
            data-feature-color="#10b981"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-emerald-500/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">ENTRY & STAY</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 mt-0.5">100% FREE + MEALS</span>
          </div>

          <div
            data-cursor-text="SQUAD SIZE"
            data-feature-color="#a855f7"
            className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col cursor-pointer hover:border-purple-500/40 transition-all"
          >
            <span className="text-[10px] font-mono text-white/50 uppercase">TEAM COMPOSITION</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-purple-400 mt-0.5">2 - 4 HEROES / SQUAD</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/40 pt-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ORGANIZED BY: GEEKSFORGEEKS STUDENT CHAPTER, BENNETT UNIVERSITY
            </span>
            <span className="hidden sm:inline">COORDINATES: 28.4506° N, 77.5842° E</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">NATIONAL LEVEL COLLEGIATE INVITATIONAL</span>
            <span className="text-[#e23636] font-semibold">REGISTRATIONS VERIFIED LIVE</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
