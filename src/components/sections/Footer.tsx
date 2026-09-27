"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/sound";
import confetti from "canvas-confetti";
import { ArrowUp, Mail, CheckCircle2, Shield } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    soundFx.playBeep(880, 0.1, "triangle");
    setSubscribed(true);

    // Trigger celebratory agency confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.85 },
        colors: ["#ff7722", "#ffffff", "#10b981", "#38bdf8"],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    soundFx.playClick();
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#050609] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow banner */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-gradient-to-t from-orange-500/10 via-emerald-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & Live Time Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                NEW DELHI HQ // LIVE TELEMETRY
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {istTime ? `${istTime} IST` : "SYNCING..."}
            </div>

            <p className="text-xs text-zinc-400 font-mono leading-relaxed max-w-md">
              Synchronized with the National Informatics Centre (NIC) and AICTE central server mesh for real-time submission tracking.
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2">
              DISPATCH & ANNOUNCEMENTS
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Receive notifications when new problem statements or nodal center slots are confirmed.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter college or student email address..."
                className="w-full pl-4 pr-32 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-zinc-200 placeholder-zinc-500 text-xs font-mono focus:outline-none focus:border-orange-500 transition-colors"
              />

              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SUBSCRIBED</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>SUBSCRIBE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-xs font-mono">
          <div>
            <div className="text-zinc-200 font-bold uppercase tracking-wider mb-4">
              HACKATHON TRACKS
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#problems" className="hover:text-orange-400 transition-colors">Software Edition (36H)</a></li>
              <li><a href="#problems" className="hover:text-orange-400 transition-colors">Hardware Edition (5D)</a></li>
              <li><a href="#themes" className="hover:text-orange-400 transition-colors">AI & Smart Automation</a></li>
              <li><a href="#themes" className="hover:text-orange-400 transition-colors">Clean Tech & EVs</a></li>
              <li><a href="#themes" className="hover:text-orange-400 transition-colors">Defence & Space Systems</a></li>
            </ul>
          </div>

          <div>
            <div className="text-zinc-200 font-bold uppercase tracking-wider mb-4">
              GOVERNANCE & SPOC
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#roadmap" className="hover:text-orange-400 transition-colors">SPOC Nomination Portal</a></li>
              <li><a href="#roadmap" className="hover:text-orange-400 transition-colors">Internal College Protocol</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Mandatory Female Roster</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Travel Reimbursements</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">IP Rights Framework</a></li>
            </ul>
          </div>

          <div>
            <div className="text-zinc-200 font-bold uppercase tracking-wider mb-4">
              NODAL NETWORK
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="#nodal-centers" className="hover:text-orange-400 transition-colors">IIT Delhi Hub</a></li>
              <li><a href="#nodal-centers" className="hover:text-orange-400 transition-colors">IIT Bombay Hub</a></li>
              <li><a href="#nodal-centers" className="hover:text-orange-400 transition-colors">NIT Trichy Hub</a></li>
              <li><a href="#nodal-centers" className="hover:text-orange-400 transition-colors">COEP Pune Hub</a></li>
              <li><a href="#nodal-centers" className="hover:text-orange-400 transition-colors">View All 75+ Venues</a></li>
            </ul>
          </div>

          <div>
            <div className="text-zinc-200 font-bold uppercase tracking-wider mb-4">
              ORGANIZING BODIES
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li><a href="https://www.education.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ministry of Education</a></li>
              <li><a href="https://www.aicte-india.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">AICTE Apex Statutory</a></li>
              <li><a href="https://mic.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Innovation Cell (MIC)</a></li>
              <li><a href="https://www.isro.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ISRO Space Partner</a></li>
              <li><a href="https://www.drdo.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">DRDO Defence Partner</a></li>
            </ul>
          </div>
        </div>

        {/* Big Editorial Wordmark */}
        <div className="pt-12 pb-8 overflow-hidden text-center select-none">
          <span className="block text-4xl sm:text-7xl md:text-8xl xl:text-9xl font-black text-white/5 tracking-tighter uppercase font-sans">
            SMART INDIA HACKATHON
          </span>
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Shield className="w-4 h-4 text-orange-400" />
            <span>Smart India Hackathon (SIH) 2026 • Government of India Initiative</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400 flex items-center gap-1">
              Crafted for India&apos;s innovators
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
