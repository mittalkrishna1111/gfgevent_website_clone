"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import TesseractVortexCanvas from "@/components/ui/TesseractVortexCanvas";
import { soundFx } from "@/lib/sound";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";

export default function MarvelCtaSection() {
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agentId, setAgentId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !teamName) return;

    soundFx.playConfirm();

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#e23636", "#fbbf24", "#00f0ff", "#ffffff"],
      });
    } catch {
      // Ignore
    }

    const genId = `SHIELD-${Math.floor(10000 + Math.random() * 90000)}-AVENGER`;
    setAgentId(genId);
    setIsSubmitted(true);
  };

  return (
    <section
      id="register"
      className="relative py-32 sm:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 border-t border-white/10"
    >
      <TesseractVortexCanvas />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(226,54,54,0.18)_0%,_transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e23636]/40 bg-[#e23636]/10 text-xs font-mono text-[#e23636] tracking-widest uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-[#e23636] animate-ping" />
          <span>S.H.I.E.L.D. PROTOCOL // NATIONAL REGISTRATION OPEN</span>
        </div>

        <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
          THE MULTIVERSE IS FRACTURING. <br />
          <span className="text-gradient-marvel drop-shadow-[0_0_40px_rgba(226,54,54,0.5)]">
            ASSEMBLE YOUR SQUAD.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
          Secure your team&apos;s spot at Bennett University Campus. Free registration, travel support,
          air-conditioned hack spaces, and ₹2,50,000+ in bounties await.
        </p>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 rounded-2xl glass-panel-elevated border border-emerald-500/40 card-beveled max-w-lg mx-auto shadow-[0_0_50px_rgba(16,185,129,0.2)] animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-2xl font-bold font-mono text-white mb-2">
              S.H.I.E.L.D. AGENT BADGE ISSUED
            </h3>
            <p className="text-sm font-sans text-white/70 mb-4">
              Welcome to the Avengers Initiative, <span className="text-white font-bold">{teamName}</span>! An encrypted invitation has been transmitted to <span className="text-[#fbbf24] font-mono">{email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-white/80 mb-6 flex flex-col gap-1">
              <span className="text-white/40 uppercase">OFFICIAL AGENT CLEARANCE ID</span>
              <span className="text-base text-[#fbbf24] font-bold tracking-widest">
                {agentId}
              </span>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setTeamName("");
                setEmail("");
                setCollege("");
              }}
              data-cursor-text="RESET FORM"
              data-feature-color="#fbbf24"
              className="px-6 py-2.5 btn-clip bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white font-mono text-xs tracking-wider transition-all cursor-pointer"
            >
              REGISTER ANOTHER TEAM
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto"
          >
            <div className="w-full sm:w-1/3">
              <input
                type="text"
                required
                data-cursor-text="TEAM NAME"
                data-feature-color="#00f0ff"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team Name..."
                className="w-full px-4 py-3.5 sm:py-4 rounded-xl glass-panel-elevated border border-white/20 text-white placeholder-white/40 font-mono text-base sm:text-sm focus:outline-none focus:border-[#e23636] transition-all"
              />
            </div>

            <div className="w-full sm:w-1/3">
              <input
                type="email"
                required
                data-cursor-text="EMAIL ADDR"
                data-feature-color="#00f0ff"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Leader Email..."
                className="w-full px-4 py-3.5 sm:py-4 rounded-xl glass-panel-elevated border border-white/20 text-white placeholder-white/40 font-mono text-base sm:text-sm focus:outline-none focus:border-[#e23636] transition-all"
              />
            </div>

            <button
              type="submit"
              data-cursor-text="CLAIM PASS"
              data-feature-color="#e23636"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 btn-clip-lg bg-gradient-to-r from-[#e23636] via-[#ea580c] to-[#e23636] text-white font-mono font-bold text-xs tracking-widest uppercase hover:brightness-110 hover:shadow-[0_0_35px_rgba(226,54,54,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>CLAIM PASS</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-6 mt-10 text-xs font-mono text-white/40">
          <span>BENNETT UNIVERSITY CAMPUS // GREATER NOIDA</span>
          <span className="hidden sm:inline">•</span>
          <span>GEEKSFORGEEKS STUDENT CHAPTER</span>
        </div>
      </div>
    </section>
  );
}
