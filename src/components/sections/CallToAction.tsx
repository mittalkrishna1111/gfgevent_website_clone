"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import VortexCanvas from "@/components/ui/VortexCanvas";
import { soundFx } from "@/lib/sound";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Send } from "lucide-react";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [callsign, setCallsign] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clearanceId, setClearanceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    soundFx.playConfirm();

    // Trigger futuristic celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff2a55", "#00f0ff", "#f59e0b", "#ffffff"],
      });
    } catch {
      // Ignore if confetti fails
    }

    const genId = `ATH-${Math.floor(10000 + Math.random() * 90000)}-NX`;
    setClearanceId(genId);
    setIsSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="relative py-32 sm:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 border-t border-white/10"
    >
      {/* Background Interactive Gravitational Vortex Canvas (Inspired by EV2's black hole visual) */}
      <VortexCanvas />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(255,42,85,0.18)_0%,_transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-20">
        {/* Top Classification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff2a55]/40 bg-[#ff2a55]/10 text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff2a55] animate-ping" />
          <span>PHASE 04 RECRUITMENT PROTOCOL // ACTIVE</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
          THE TRANSITION HAS BEGUN. <br />
          <span className="text-gradient-crimson drop-shadow-[0_0_40px_rgba(255,42,85,0.5)]">
            SECURE YOUR ALLOCATION.
          </span>
        </h2>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
          Initial pilot synchronization begins in Q2 2026. Whitelist registration provides priority
          access to custom-molded graphene chassis fittings, neural bus calibration, and sub-orbital
          trial flights.
        </p>

        {/* Interactive Whitelist Form */}
        {isSubmitted ? (
          <div className="p-8 sm:p-10 rounded-2xl glass-panel-elevated border border-emerald-500/40 card-beveled max-w-lg mx-auto shadow-[0_0_50px_rgba(16,185,129,0.2)] animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-2xl font-bold font-mono text-white mb-2">
              SECURITY CLEARANCE ISSUED
            </h3>
            <p className="text-sm font-sans text-white/70 mb-6">
              Welcome to the Aetheris defense cohort. An encrypted quantum briefing pack has been
              dispatched to <span className="text-white font-mono font-bold">{email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-white/80 mb-6 flex flex-col gap-1">
              <span className="text-white/40 uppercase">ASSIGNED PILOT TOKEN</span>
              <span className="text-base text-[#00f0ff] font-bold tracking-widest">
                {clearanceId}
              </span>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
                setCallsign("");
              }}
              className="px-6 py-2.5 btn-clip bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors cursor-pointer"
            >
              REGISTER ANOTHER UNIT
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <div className="w-full sm:flex-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter pilot comms email..."
                className="w-full px-5 py-4 rounded-xl glass-panel-elevated border border-white/20 text-white placeholder-white/40 font-mono text-sm focus:outline-none focus:border-[#ff2a55] focus:shadow-[0_0_25px_rgba(255,42,85,0.4)] transition-all"
              />
            </div>

            {/* EV2-Style Angled Polygon Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 btn-clip-lg bg-gradient-to-r from-[#ff2a55] to-[#e11d48] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 hover:shadow-[0_0_35px_rgba(255,42,85,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>REQUEST ACCESS</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Security Policy Note */}
        <div className="flex items-center justify-center gap-6 mt-10 text-xs font-mono text-white/40">
          <span>ENCRYPTION: 4096-BIT QUANTUM LATTICE</span>
          <span className="hidden sm:inline">•</span>
          <span>NO SPAM // STRICT PROTOCOL ONLY</span>
        </div>
      </div>
    </section>
  );
}
