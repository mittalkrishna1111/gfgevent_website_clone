"use client";

import React, { useEffect, useRef, useState } from "react";
import { soundFx } from "@/lib/sound";
import { ArrowRight, Code2, Cpu, Sparkles, Terminal, Shield, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [selectedTrack, setSelectedTrack] = useState<"software" | "hardware">("software");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered reveal of hero elements
      gsap.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from(".hero-cta-group", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".hero-preview-card", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProblems = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playClick();
    const el = document.querySelector("#problems");
    if (el) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: Element, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToRoadmap = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playClick();
    const el = document.querySelector("#roadmap");
    if (el) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: Element, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic ambient gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-orange-500/15 blur-[128px] animate-pulse-subtle" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Kicker badge */}
        <div className="hero-badge flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 backdrop-blur-md text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-zinc-200">SMART INDIA HACKATHON 2026</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400">STAGE 02 IS LIVE</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>Govt of India Endorsed</span>
          </div>
        </div>

        {/* Hero Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase font-sans"
            >
              <div className="overflow-hidden">
                <span className="hero-line block text-zinc-300">
                  THE CRUCIBLE OF
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-line block text-gradient-tricolor drop-shadow-[0_0_35px_rgba(255,119,34,0.2)]">
                  1.4 BILLION MINDS
                </span>
              </div>
            </h1>

            <p className="hero-desc mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
              India&apos;s apex open innovation engine. Over <span className="text-zinc-100 font-semibold">50,000+ collegiate squads</span> engineer nation-scale software and hardware prototypes for 65+ Ministries, PSUs, and state governance frameworks.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#problems"
                onClick={scrollToProblems}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <span>Explore Problem Statements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#roadmap"
                onClick={scrollToRoadmap}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider backdrop-blur-sm transition-colors"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Hackathon Roadmap</span>
              </a>

              <button
                onClick={() => {
                  soundFx.playBeep(520, 0.08);
                  setVideoModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-zinc-400 hover:text-white font-mono text-xs transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 text-orange-400 fill-orange-400 ml-0.5" />
                </div>
                <span>Watch Recap</span>
              </button>
            </div>
          </div>

          {/* Dual-Track Quick Selector Card */}
          <div className="lg:col-span-4 hero-preview-card">
            <div className="glass-panel-elevated rounded-2xl p-5 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top tricolor accent line */}
              <div className="absolute top-0 inset-x-0 h-1 tricolor-glow-banner" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                    CHOOSE YOUR BATTLEGROUND
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">2026 EDITION</span>
              </div>

              {/* Track Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mt-4 p-1 rounded-xl bg-black/40 border border-white/5">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedTrack("software");
                  }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                    selectedTrack === "software"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 border border-orange-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>SOFTWARE</span>
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedTrack("hardware");
                  }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                    selectedTrack === "hardware"
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>HARDWARE</span>
                </button>
              </div>

              {/* Dynamic Track Specs Content */}
              <div className="mt-4 space-y-3">
                {selectedTrack === "software" ? (
                  <motion.div
                    key="software"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white font-sans">36 HOURS</span>
                      <span className="text-xs font-mono text-orange-400 font-semibold">NON-STOP CODE</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Build full-stack digital architectures, computer vision pipelines, zero-knowledge verification, and AI copilots on live edge networks.
                    </p>
                    <ul className="space-y-1.5 pt-1 text-xs text-zinc-300 font-mono">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>320+ Software Problem Statements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>AWS Compute Credits & AI Sandbox</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>₹1,00,000 Cash Prize Per Problem</span>
                      </li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hardware"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-white font-sans">5 DAYS</span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">ON-SITE LAB SPRINT</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Solder, fabricate, and test physical prototypes for robotics, smart grids, medical telemetry devices, and agricultural drones.
                    </p>
                    <ul className="space-y-1.5 pt-1 text-xs text-zinc-300 font-mono">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>165+ Physical Hardware Challenges</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>₹25,000 Component Subsidies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>FabLab & Maker Space Access</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Roster: 6 Students / Team</span>
                <span className="text-emerald-400 font-medium">Min 1 Female Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom live stats summary bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">52,400+</span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">Collegiate Squads</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">485+</span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">Ministry Problem Statements</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">₹2.5 Cr+</span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">Prize & Seed Grants</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">75+</span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">Nodal Tech Centers</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl glass-panel-elevated rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-sm text-zinc-200">
                <Play className="w-4 h-4 text-orange-400" />
                <span>Smart India Hackathon // Official Highlights</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-2.5 py-1 rounded bg-white/10 text-zinc-300 hover:text-white font-mono text-xs"
              >
                ESC / CLOSE
              </button>
            </div>

            <div className="mt-4 aspect-video rounded-xl bg-zinc-900 overflow-hidden relative flex items-center justify-center border border-white/10">
              {/* Simulated cinematic preview */}
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-7 h-7 text-orange-400 fill-orange-400 ml-1" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">36 Hours of Relentless Coding</h4>
                <p className="text-sm text-zinc-400 max-w-md mx-auto mb-4">
                  From IIT Delhi to NIT Trichy, watch how 1,500 finalist squads engineered deployable technology solutions for India.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Official broadcast archived on Doordarshan & MIC
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
