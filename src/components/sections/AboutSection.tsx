"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";
import { Code2, Cpu, Check, Users, Sparkles, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"software" | "hardware">("software");

  const handleTabSwitch = (tab: "software" | "hardware") => {
    soundFx.playClick();
    setActiveTab(tab);
  };

  return (
    <section className="relative py-28 bg-[#090b11] overflow-hidden">
      {/* Background glow lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subheader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">
              <span>GENESIS & MISSION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans leading-[1.05]">
              CROWDSOURCING <br />
              <span className="text-zinc-400">SOLUTIONS FOR</span> <br />
              <span className="text-gradient-tricolor">NEW BHARAT</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 text-zinc-400 text-sm sm:text-base leading-relaxed">
            <p>
              Initiated by the <span className="text-zinc-200 font-semibold">Ministry of Education’s Innovation Cell (MIC)</span> and <span className="text-zinc-200 font-semibold">AICTE</span>, the Smart India Hackathon has evolved into the world’s largest nationwide open innovation platform.
            </p>
            <p>
              Rather than theoretical coding prompts, SIH provides students direct access to authentic operational bottlenecks faced by ministries, armed forces, municipal corporations, and national hospitals. Finalists are flown to nodal centers where they interact with the very officials who wrote the problem statements.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>6 Students / Team</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Award className="w-4 h-4 text-orange-400" />
                <span>₹1 Lakh / Problem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Track Interactive Comparison Panel */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                TWO SPECIALIZED EDITIONS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
                COMPARE HACKATHON EDITIONS
              </h3>
            </div>

            {/* Switcher Buttons */}
            <div className="flex items-center p-1 rounded-2xl bg-black/60 border border-white/10">
              <button
                onClick={() => handleTabSwitch("software")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeTab === "software"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black shadow-lg shadow-orange-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>SOFTWARE TRACK</span>
              </button>

              <button
                onClick={() => handleTabSwitch("hardware")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeTab === "hardware"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>HARDWARE TRACK</span>
              </button>
            </div>
          </div>

          {/* Animated Tab Body */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {activeTab === "software" ? (
              <>
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 font-mono text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>36-Hour Continuous Digital Marathon</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white">
                    Architecting Resilient Digital Infrastructure for 1.4 Billion Citizens
                  </h4>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Software edition squads are tasked with creating production-ready web and mobile services, edge neural networks, zero-knowledge cryptographic rails, and real-time public telemetry dashboards. Teams code non-stop through 3 continuous rounds of jury mentoring and stress-testing.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    {[
                      "Real-time edge computer vision",
                      "Distributed databases & blockchain",
                      "Gov-tech APIs & Bhashini integration",
                      "Cyber defense & threat intelligence",
                      "36-hour unbroken coding sprint",
                      "Evaluated on speed, scale & security",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      SOFTWARE TRACK METRICS
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Total Problem Statements</span>
                        <span className="text-white font-bold">320+</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Finale Sprint Duration</span>
                        <span className="text-orange-400 font-bold">36 Hours Continuous</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Cash Award Per Problem</span>
                        <span className="text-emerald-400 font-bold">₹1,00,000 INR</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Nodal Centers</span>
                        <span className="text-white font-bold">45 IITs / NITs / IIITs</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#problems"
                    className="w-full py-3 px-4 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Software Statements</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>5-Day Intense Physical Fabrication Lab</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white">
                    Machining, Soldering & Field Testing Physical Hardware
                  </h4>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    The Hardware Edition takes place over 5 grueling days in specialized state-of-the-art laboratory workshops. Squads build physical mechatronic systems, custom printed circuit boards (PCBs), biomedical telemetry rigs, agricultural drones, and clean energy storage modules.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    {[
                      "CNC machining & 3D printing access",
                      "₹25,000 component reimbursement",
                      "Automotive CAN & sensor telemetry",
                      "Field testing under real weather loads",
                      "5-day laboratory fabrication",
                      "Industry engineer on-site mentorship",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      HARDWARE TRACK METRICS
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Total Problem Statements</span>
                        <span className="text-white font-bold">165+</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Finale Sprint Duration</span>
                        <span className="text-emerald-400 font-bold">5 Days On-Site Lab</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Component Subsidy</span>
                        <span className="text-emerald-400 font-bold">₹25,000 / Team</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5 text-xs font-mono">
                        <span className="text-zinc-400">Cash Award Per Problem</span>
                        <span className="text-white font-bold">₹1,00,000 INR</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#problems"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Hardware Statements</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
