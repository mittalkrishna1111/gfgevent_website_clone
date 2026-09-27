"use client";

import React from "react";
import { SPONSORS } from "@/data/marvelEventData";
import { Shield, Sparkles } from "lucide-react";

export default function MarvelSponsorsSection() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#03050a]/60 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 shrink-0 text-xs font-mono text-[#fbbf24] tracking-widest uppercase">
          <Sparkles size={14} className="text-[#fbbf24] animate-spin" style={{ animationDuration: "6s" }} />
          <span>ALLIED MULTIVERSE SPONSORS & HOSTS</span>
        </div>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
            {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                data-cursor-text={sponsor.name.toUpperCase()}
                data-feature-color="#00f0ff"
                className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-all cursor-pointer group shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]/60 group-hover:bg-[#00f0ff] group-hover:scale-125 transition-all" />
                <span className="font-bold tracking-wider text-white/80 group-hover:text-white">
                  {sponsor.name}
                </span>
                <span className="text-[10px] text-white/40 group-hover:text-[#fbbf24] transition-colors">
                  // {sponsor.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
