"use client";

import React, { useEffect, useRef, useState } from "react";
import { SIH_STATS } from "@/data/sihData";
import { TrendingUp, Award, Building2, Lightbulb, ShieldAlert, Cpu } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LiveStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    teams: 0,
    institutes: 0,
    problems: 0,
    patents: 0,
    startups: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly
          const duration = 2000;
          const startTime = performance.now();

          const updateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              teams: Math.floor(ease * SIH_STATS.teamsRegistered),
              institutes: Math.floor(ease * SIH_STATS.institutionsCount),
              problems: Math.floor(ease * SIH_STATS.problemStatements),
              patents: Math.floor(ease * SIH_STATS.patentsFiled),
              startups: Math.floor(ease * SIH_STATS.startupsIncubated),
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 bg-[#07080d] border-t border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>MEASURABLE IMPACT & SCALE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              FROM HACKATHON ROOMS <br className="hidden sm:inline" />
              <span className="text-gradient-saffron">TO NATIONAL DEPLOYMENTS</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            SIH is not a weekend toy project showcase. It is an institutionalized talent pipeline transforming raw collegiate engineering into deployed public intellectual property.
          </p>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-orange-500/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full pointer-events-none group-hover:bg-orange-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Lightbulb className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                +34% YOY GROWTH
              </span>
            </div>

            <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight">
              {counts.teams.toLocaleString()}+
            </div>
            <h3 className="text-base font-bold text-zinc-200 mt-2">STUDENT SQUADS REGISTERED</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Representing over 300,000 students across undergraduate, polytechnic, and post-graduate institutions from all 28 States and 8 Union Territories.
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                ALL STATES & UTs
              </span>
            </div>

            <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight">
              {counts.institutes.toLocaleString()}+
            </div>
            <h3 className="text-base font-bold text-zinc-200 mt-2">PARTICIPATING CAMPUSES</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              From premiere IITs, NITs, and IIITs to rural government engineering colleges, creating a level playing field for grassroot innovators.
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-cyan-500/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                65+ MINISTRIES
              </span>
            </div>

            <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight">
              {counts.problems.toLocaleString()}+
            </div>
            <h3 className="text-base font-bold text-zinc-200 mt-2">ACTIVE PROBLEM STATEMENTS</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Curated by senior technical directors from ISRO, DRDO, Ministry of Railways, CERT-In, and central state administrative departments.
            </p>
          </div>
        </div>

        {/* Secondary Sub-metrics Ribbon */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black font-mono text-emerald-400">
                {counts.patents}+
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Patents & IPR Filed</div>
            </div>
            <Award className="w-6 h-6 text-zinc-600" />
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black font-mono text-orange-400">
                {counts.startups}+
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Startups Incubated</div>
            </div>
            <TrendingUp className="w-6 h-6 text-zinc-600" />
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black font-mono text-white">
                {SIH_STATS.solutionDeploymentRate}%
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Ministry Pilot Trial Rate</div>
            </div>
            <Lightbulb className="w-6 h-6 text-zinc-600" />
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black font-mono text-cyan-400">
                {SIH_STATS.nodalCentersCount}
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Grand Finale Nodal Hubs</div>
            </div>
            <ShieldAlert className="w-6 h-6 text-zinc-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
