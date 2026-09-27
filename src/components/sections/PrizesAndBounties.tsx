"use client";

import React from "react";
import { PRIZE_TIERS } from "@/data/marvelEventData";
import {
  Trophy,
  Crown,
  Gift,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function PrizesAndBounties() {
  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
          <Trophy className="h-3.5 w-3.5" />
          <span>STARK INDUSTRIES TREASURY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          ₹2,50,000+ <span className="text-gradient-gold">BOUNTIES &amp; PERKS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          The Living Tribunal awards extraordinary valor. Claim cash grants, hand-forged
          Infinity trophies, cloud credits, and direct incubator funding at Bennett
          University.
        </p>
      </div>

      {/* Prize Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {PRIZE_TIERS.map((tier, idx) => {
          const isFeatured = tier.featured;
          return (
            <div
              key={idx}
              data-feature={tier.amount}
              data-feature-color={tier.stoneColor}
              onMouseEnter={() => soundFX.playClick(850 + idx * 80)}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default ${
                isFeatured
                  ? "bg-gradient-to-b from-[#221805] via-[#0d101a] to-[#070912] border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)] md:scale-105"
                  : "glass-panel border border-white/10 hover:border-white/30"
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-red-500 text-black font-black font-mono text-[10px] tracking-widest px-4 py-1 rounded-full uppercase shadow-lg flex items-center gap-1.5">
                  <Crown className="h-3 w-3 fill-black" />
                  APEX MULTIVERSE CHAMPION
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    {tier.rank}
                  </span>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded uppercase"
                    style={{
                      backgroundColor: `${tier.stoneColor}20`,
                      color: tier.stoneColor,
                      border: `1px solid ${tier.stoneColor}40`,
                    }}
                  >
                    {tier.stone}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase mb-2">
                  {tier.title}
                </h3>

                <div
                  className="text-3xl sm:text-4xl font-mono font-black mb-6"
                  style={{ color: tier.stoneColor }}
                >
                  {tier.amount}
                </div>

                <div className="space-y-2.5 mb-6">
                  {tier.perks.map((perk, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle
                        className="h-4 w-4 mt-0.5 shrink-0"
                        style={{ color: tier.stoneColor }}
                      />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>STARK TREASURY ALLOCATED</span>
                <Sparkles className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Swag & Perks Box for ALL Participants */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
            <Gift className="h-7 w-7" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white uppercase">
              UNIVERSAL PARTICIPATION SWAG ARSENAL
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Every assembled hacker receives an official Stark Expo T-Shirt,
              GeeksforGeeks discount vouchers, custom holographic S.H.I.E.L.D. stickers,
              and a verified Certificate of Multiverse Participation.
            </p>
          </div>
        </div>

        <a
          href="#register"
          onClick={() => soundFX.playArcCharge()}
          className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          CLAIM YOUR SWAG KIT
        </a>
      </div>
    </section>
  );
}
