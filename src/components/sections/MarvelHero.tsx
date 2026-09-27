"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Terminal,
  Trophy,
  Users,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

interface MarvelHeroProps {
  currentFactionColor?: string;
}

export default function MarvelHero({
  currentFactionColor = "#e23636",
}: MarvelHeroProps) {
  // Live Countdown to October 16, 2026 09:00 AM IST
  const targetDate = new Date("2026-10-16T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center text-center overflow-hidden px-4 sm:px-6">
      {/* Background Marvel Comic Halftone Texture & Hex Grid */}
      <div className="absolute inset-0 bg-hex-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-comic-dots opacity-40 pointer-events-none" />

      {/* Atmospheric Radial Light Beam */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[140px] pointer-events-none transition-all duration-700 opacity-30"
        style={{
          background: `radial-gradient(circle, ${currentFactionColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Protocol Pill with Bennett Coordinates */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0e1a]/90 border border-white/15 text-xs font-mono text-zinc-300 shadow-xl mb-6 backdrop-blur-md">
          <span
            className="h-2 w-2 rounded-full animate-ping"
            style={{ backgroundColor: currentFactionColor }}
          />
          <span className="text-red-400 font-bold uppercase tracking-wider">
            STARK EXPO &apos;26
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300">BENNETT UNIVERSITY CHAPTER</span>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400 hidden sm:inline">28.4595° N, 77.5140° E</span>
        </div>

        {/* Main Cinematic Title */}
        <div className="relative mb-4">
          <div className="text-xs sm:text-sm font-mono font-black tracking-[0.35em] text-red-500 uppercase mb-2">
            AVENGERS: INITIATIVE PROTOCOL
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white">
            <span className="block text-white text-shadow-comic">
              MULTIVERSE
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-600 transition-all duration-500"
              style={{
                textShadow: `0 0 40px ${currentFactionColor}60`,
              }}
            >
              OF CODE 2026
            </span>
          </h1>
        </div>

        {/* Cinematic Subheadline */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
          Earth&apos;s Mightiest Geeks assemble at{" "}
          <strong className="text-white font-semibold">Bennett University</strong> to
          defend the digital realm. 36 hours of non-stop coding, neural multi-agent AI,
          cyber warfare defenses, and multiversal innovation.
        </p>

        {/* Live Countdown Timer HUD */}
        <div
          data-feature="COUNTDOWN"
          data-feature-color="#fbbf24"
          className="w-full max-w-2xl mb-10 p-4 sm:p-5 rounded-2xl bg-[#0a0e1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Clock className="h-3.5 w-3.5" />
              T-MINUS COUNTDOWN TO INITIATIVE ASSEMBLE
            </span>
            <span className="text-zinc-500 hidden sm:inline">OCTOBER 16, 2026 • 09:00 IST</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/5"
              >
                <span
                  className="text-2xl sm:text-4xl font-mono font-black text-white tracking-tight"
                  style={{ textShadow: `0 0 15px ${currentFactionColor}80` }}
                >
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 font-semibold mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#register"
            data-feature="ASSEMBLE SQUAD"
            data-feature-color="#e23636"
            onClick={() => soundFX.playArcCharge()}
            className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-600 px-8 py-4 text-sm font-black tracking-widest text-white uppercase shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(226,54,54,0.6)] active:scale-95 cursor-pointer font-mono"
          >
            <Sparkles className="h-5 w-5 text-amber-200 transition-transform group-hover:rotate-12" />
            <span>ASSEMBLE SQUAD // GET BADGE</span>
            <div className="absolute inset-0 rounded-xl border border-white/30 pointer-events-none" />
          </a>

          <a
            href="#tracks"
            data-feature="INFINITY TRACKS"
            data-feature-color="#00f0ff"
            onClick={() => soundFX.playRepulsorBlast()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0a0e1a]/80 hover:bg-[#111827] px-6 py-4 text-sm font-bold tracking-wider text-zinc-200 border border-white/15 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-300 active:scale-95 cursor-pointer font-mono"
          >
            <ShieldAlert className="h-4 w-4 text-cyan-400" />
            <span>EXPLORE 6 INFINITY TRACKS</span>
          </a>

          <a
            href="#timeline"
            data-feature="TVA TIMELINE"
            data-feature-color="#fbbf24"
            onClick={() => soundFX.playClick(900)}
            className="inline-flex items-center gap-2 rounded-xl bg-transparent hover:bg-white/5 px-5 py-4 text-xs font-mono font-semibold tracking-wider text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <Terminal className="h-4 w-4 text-amber-400" />
            <span>TVA TIMELINE</span>
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          <div
            data-feature="BOUNTY VAULT"
            data-feature-color="#fbbf24"
            className="glass-panel p-4 rounded-xl text-left border border-white/10 hover:border-amber-500/40 transition-all cursor-default"
          >
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-[10px] font-mono tracking-wider font-bold">BOUNTY VAULT</span>
              <Trophy className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              ₹2,50,000+
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Cash + Cloud Grants</div>
          </div>

          <div
            data-feature="36H SPRINT"
            data-feature-color="#00f0ff"
            className="glass-panel p-4 rounded-xl text-left border border-white/10 hover:border-cyan-500/40 transition-all cursor-default"
          >
            <div className="flex items-center justify-between text-cyan-400 mb-1">
              <span className="text-[10px] font-mono tracking-wider font-bold">HACK DURATION</span>
              <Clock className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              36 HOURS
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Non-Stop Sprint</div>
          </div>

          <div
            data-feature="500+ HACKERS"
            data-feature-color="#a855f7"
            className="glass-panel p-4 rounded-xl text-left border border-white/10 hover:border-purple-500/40 transition-all cursor-default"
          >
            <div className="flex items-center justify-between text-purple-400 mb-1">
              <span className="text-[10px] font-mono tracking-wider font-bold">CAPACITY</span>
              <Users className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              500+ HACKERS
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">100+ Shortlisted Squads</div>
          </div>

          <div
            data-feature="BENNETT UNIV"
            data-feature-color="#ef4444"
            className="glass-panel p-4 rounded-xl text-left border border-white/10 hover:border-red-500/40 transition-all cursor-default"
          >
            <div className="flex items-center justify-between text-red-400 mb-1">
              <span className="text-[10px] font-mono tracking-wider font-bold">LOCATION</span>
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              BENNETT UNIV
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Greater Noida, Delhi NCR</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
          <span>SCROLL TO INITIALIZE PROTOCOL</span>
          <ChevronDown className="h-4 w-4 animate-bounce mt-1 text-red-500" />
        </div>
      </div>
    </section>
  );
}
