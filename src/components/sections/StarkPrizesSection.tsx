"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRIZE_TIERS, PrizeTier } from "@/data/marvelEventData";
import { Trophy, Award, Gift, Sparkles, CheckCircle2 } from "lucide-react";
import { soundFx } from "@/lib/sound";

const PRIZE_HERO_ASSETS: Record<number, { image: string; tag: string }> = {
  0: { image: "/images/heroes/infinity-gauntlet.jpg", tag: "ALL 6 INFINITY STONES // TROPHY" },
  1: { image: "/images/heroes/captain-america.jpg", tag: "VIBRANIUM SHIELD // RUNNER-UP" },
  2: { image: "/images/heroes/thor.jpg", tag: "STORMBREAKER MJOLNIR // 3RD PODIUM" },
  3: { image: "/images/heroes/scarlet-witch.jpg", tag: "CHAOS MAGIC // ALL-WOMEN SQUAD" },
  4: { image: "/images/heroes/spider-man.jpg", tag: "WEB-SLINGER // ROOKIE CITATION" },
  5: { image: "/images/heroes/black-panther.jpg", tag: "WAKANDAN VIBRANIUM HARDWARE" },
};

const BENCHMARKS_HACKATHON = [
  {
    metric: "Total Cash Bounty Pool",
    legacyVal: 50000,
    legacyUnit: "₹50k",
    starkVal: 250000,
    starkUnit: "₹2,50,000+",
    advantage: "5x Higher",
    description: "Direct cash rewards deposited straight to winning team bank accounts with zero deductions.",
  },
  {
    metric: "Continuous Hacking Duration",
    legacyVal: 24,
    legacyUnit: "24 hrs",
    starkVal: 36,
    starkUnit: "36 hrs",
    advantage: "1.5x Longer",
    description: "Extended build window allowing deep-learning training, complex distributed testing, and hardware prototyping.",
  },
  {
    metric: "On-Campus Hospitality & Meals",
    legacyVal: 2,
    legacyUnit: "Basic snacks",
    starkVal: 6,
    starkUnit: "Full meals + Red Bull",
    advantage: "100% Free",
    description: "Bennett University provides 6 chef-prepared buffet meals, unlimited midnight energy drinks, and resting pods.",
  },
  {
    metric: "Industry Mentors & Judges",
    legacyVal: 8,
    legacyUnit: "8 mentors",
    starkVal: 40,
    starkUnit: "40+ FAANG Mentors",
    advantage: "5x More Guidance",
    description: "Direct code reviews and architecture consulting from engineers at Google, Microsoft, Amazon, and GeeksforGeeks.",
  },
];

export default function StarkPrizesSection() {
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section
      id="prizes"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#fbbf24] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
            // 05 STARK TREASURY & BOUNTIES
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            STARK EXPO TREASURY & <br />
            <span className="text-gradient-gold">₹2,50,000+ PRIZE POOL</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Tony Stark’s treasury has been opened. Compete for massive cash rewards, paid internship fast-tracks,
            official GeeksforGeeks merchandise, and multiversal trophies.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {PRIZE_TIERS.map((tier, idx) => {
            const isFirst = idx === 0;
            const asset = PRIZE_HERO_ASSETS[idx];

            return (
              <div
                key={`${tier.rank}-${tier.title}`}
                data-cursor-text={tier.rank === "SPECIAL CATEGORY" ? "SPECIAL PRIZE" : tier.rank}
                data-feature-color={tier.stoneColor}
                onClick={() => {
                  setActiveTier(idx);
                  soundFx.playClick(isFirst ? 1300 : 900);
                }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer card-beveled flex flex-col justify-between group hover:scale-[1.03] ${
                  isFirst
                    ? "glass-panel-elevated border-[#fbbf24] shadow-[0_0_45px_rgba(251,191,36,0.25)] scale-[1.03]"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Hero Artifact Banner */}
                  {asset && (
                    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                      <Image
                        src={asset.image}
                        alt={tier.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top filter brightness-90 contrast-115 group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/40 to-transparent" />
                      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent shadow-[0_0_10px_#fbbf24] absolute animate-hologram-scan" />
                      </div>
                      <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#fbbf24] font-semibold tracking-wider">
                        {asset.tag}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full font-bold"
                      style={{
                        backgroundColor: `${tier.stoneColor}20`,
                        color: tier.stoneColor,
                        border: `1px solid ${tier.stoneColor}40`,
                      }}
                    >
                      {tier.rank}
                    </span>
                    <Trophy
                      size={20}
                      style={{ color: tier.stoneColor }}
                      className={isFirst ? "animate-bounce" : ""}
                    />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
                    {tier.amount}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-white/90 mb-4">
                    {tier.title}
                  </h3>

                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    {tier.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs font-mono text-white/70">
                        <CheckCircle2 size={14} className="text-[#fbbf24] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benchmark Matrix vs Standard Hackathons */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 card-beveled">
          <div className="text-xs font-mono text-[#fbbf24] tracking-wider uppercase mb-6 flex items-center gap-2">
            <Sparkles size={16} />
            <span>HACKATHON EXPERIENCE BENCHMARK: MULTIVERSE OF CODE VS STANDARD COLLEGIATE HACKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENCHMARKS_HACKATHON.map((b) => (
              <div
                key={b.metric}
                data-cursor-text={b.advantage}
                data-feature-color="#fbbf24"
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 flex flex-col justify-between hover:scale-[1.02] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-white/60">{b.metric}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                    {b.advantage}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-mono font-bold text-white mb-2">
                  <span className="text-white/40">{b.legacyUnit}</span>
                  <span className="text-[#fbbf24]">{b.starkUnit}</span>
                </div>
                <p className="text-[11px] font-sans text-white/60 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
