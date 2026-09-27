"use client";

import React, { useState } from "react";
import { PARTNERS_ORGS } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import { ShieldCheck, Building, Cpu, Award, Sparkles } from "lucide-react";

export default function PartnersSponsors() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Organizing Body", "Ministry", "Technology Partner"];

  const filteredPartners =
    selectedCategory === "All"
      ? PARTNERS_ORGS
      : PARTNERS_ORGS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Organizing Body":
        return <Award className="w-5 h-5 text-orange-400" />;
      case "Ministry":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "Technology Partner":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Building className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#07080d] border-t border-white/5 overflow-hidden">
      {/* Marquee ticker */}
      <div className="border-t border-b border-white/5 py-4 bg-black/40 overflow-hidden mb-20 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07080d] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07080d] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...PARTNERS_ORGS, ...PARTNERS_ORGS].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 text-zinc-400 text-xs font-mono uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-zinc-200 font-bold">{partner.name}</span>
              <span className="text-zinc-600">[{partner.badge}]</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>ECOSYSTEM & STAKEHOLDERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              ORGANIZED BY MINISTRIES <br />
              <span className="text-gradient-silver">& BACKED BY TECH LEADERS</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            The largest joint public-private engineering alliance in India, connecting apex statutory bodies with enterprise hyperscalers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex items-start gap-4 group hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getCategoryIcon(partner.category)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                    {partner.badge}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {partner.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-2 group-hover:text-orange-400 transition-colors font-sans">
                  {partner.name}
                </h3>

                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
