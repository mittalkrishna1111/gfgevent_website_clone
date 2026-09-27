"use client";

import React from "react";
import Image from "next/image";
import { ADVISORY_COUNCIL } from "@/data/marvelEventData";
import { ShieldCheck } from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function AdvisoryCouncil() {
  return (
    <section id="council" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>AVENGERS ADVISORY BOARD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          THE <span className="text-gradient-marvel">LIVING TRIBUNAL</span> &amp; MENTORS
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Learn directly from distinguished researchers, enterprise architects, and
          Bennett University professors guiding squads through midnight debugging
          and final stage pitches.
        </p>
      </div>

      {/* Council Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ADVISORY_COUNCIL.map((speaker, idx) => (
          <div
            key={idx}
            data-feature={speaker.codename.toUpperCase()}
            data-feature-color="#e23636"
            onMouseEnter={() => soundFX.playClick(900 + idx * 70)}
            className="group glass-panel rounded-2xl p-5 border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between cursor-default"
          >
            <div>
              {/* Photo & Clearance Badge */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-900">
                <Image
                  src={speaker.avatar}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-red-500/40 text-[9px] font-mono font-bold text-red-300 uppercase">
                  {speaker.verifiedBadge}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {speaker.codename}
                  </div>
                  <div className="text-base font-black text-white uppercase truncate">
                    {speaker.name}
                  </div>
                </div>
              </div>

              {/* Role & Affiliation */}
              <div className="text-xs font-semibold text-zinc-300 mb-1">
                {speaker.role}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 mb-3">
                {speaker.affiliation}
              </div>

              {/* Superpower Callout */}
              <div className="p-3 rounded-lg bg-black/60 border border-white/5 mb-4 text-[11px] text-zinc-300">
                <span className="font-mono text-amber-400 font-bold block mb-0.5 uppercase text-[9px]">
                  SUPERPOWER ARSENAL
                </span>
                {speaker.superpower}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
              {speaker.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
