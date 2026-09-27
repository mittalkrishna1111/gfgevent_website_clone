"use client";

import React, { useState } from "react";
import { TIMELINE_PHASES } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import { Calendar, CheckCircle2, Clock, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TimelineRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(1); // Step 02 is Active

  const handleStepClick = (index: number) => {
    soundFx.playClick();
    setActiveStep(index);
  };

  return (
    <section id="roadmap" className="relative py-28 bg-[#07080d] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>THE ROAD TO THE FINALE // 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              HACKATHON LIFECYCLE <br />
              <span className="text-gradient-tricolor">& KEY MILESTONES</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            From internal campus rounds to the nationwide 36-hour physical hackathon. Understand every evaluation checkpoint to secure your squad&apos;s spot.
          </p>
        </div>

        {/* Interactive Milestone Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {TIMELINE_PHASES.map((phase, idx) => {
            const isCurrent = idx === activeStep;
            const isCompleted = phase.status === "Completed";
            const isActivePhase = phase.status === "Active";

            return (
              <button
                key={phase.step}
                onClick={() => handleStepClick(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isCurrent
                    ? "glass-panel-elevated border-orange-500/60 shadow-lg shadow-orange-500/10 scale-[1.02]"
                    : "glass-panel border-white/10 hover:border-white/20 opacity-75 hover:opacity-100"
                }`}
              >
                {/* Active Indicator bar */}
                {isCurrent && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400" />
                )}

                <div className="flex items-center justify-between mb-2 font-mono">
                  <span className="text-2xl font-black text-white">
                    {phase.step}
                  </span>
                  {isCompleted ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      DONE
                    </span>
                  ) : isActivePhase ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 animate-pulse">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                      UPCOMING
                    </span>
                  )}
                </div>

                <div className="text-xs font-bold text-zinc-200 line-clamp-1 font-sans">
                  {phase.title}
                </div>

                <div className="text-[11px] font-mono text-zinc-400 mt-1">
                  {phase.dateRange.split("–")[0].trim()}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Spotlight */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden"
        >
          {/* Subtle gradient corner accent */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-orange-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-bold">
                  PHASE {TIMELINE_PHASES[activeStep].step}
                </span>

                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>{TIMELINE_PHASES[activeStep].dateRange}</span>
                </span>

                {TIMELINE_PHASES[activeStep].status === "Active" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>Current Submission Window</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight font-sans">
                {TIMELINE_PHASES[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {TIMELINE_PHASES[activeStep].description}
              </p>

              {/* Action notice */}
              {TIMELINE_PHASES[activeStep].status === "Active" ? (
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-orange-200">
                    <span className="font-bold">Important Notice:</span> College SPOCs must upload the standardized SIH technical deck and team roster before October 25, 2026. Late submissions will not be reviewed by ministry evaluators.
                  </div>
                </div>
              ) : null}
            </div>

            {/* Right Col: Key Deliverables & Checkpoints */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>PHASE CRITERIA & DELIVERABLES</span>
                </div>

                <div className="space-y-4">
                  {TIMELINE_PHASES[activeStep].deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  Step {activeStep + 1} of {TIMELINE_PHASES.length}
                </span>

                <button
                  onClick={() => {
                    const next = (activeStep + 1) % TIMELINE_PHASES.length;
                    handleStepClick(next);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-white transition-colors"
                >
                  <span>Next Milestone</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
