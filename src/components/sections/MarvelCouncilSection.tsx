"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ADVISORY_COUNCIL, SpeakerJudge } from "@/data/marvelEventData";
import { Shield, Award, Sparkles, CheckCircle2, Terminal } from "lucide-react";
import { soundFx } from "@/lib/sound";

export default function MarvelCouncilSection() {
  const [activeCouncil, setActiveCouncil] = useState<number | null>(null);

  const councilColors = ["#e23636", "#10b981", "#ef4444", "#fbbf24"];

  return (
    <section
      id="council"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(226,54,54,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#e23636] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e23636] animate-ping" />
            // 07 S.H.I.E.L.D. AVENGERS COUNCIL // MENTORS & JUDGES
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-6">
            GUIDED BY INDUSTRY TITANS & <br />
            <span className="text-gradient-marvel">ACADEMIC PIONEERS</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            Direct architecture reviews, code mentoring, and final stage evaluations conducted by engineers
            from Google DeepMind, open-source maintainers, and Bennett University Computer Science faculty.
          </p>
        </div>

        {/* 4 Mentor / Judge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVISORY_COUNCIL.map((judge, idx) => {
            const cardColor = councilColors[idx % councilColors.length];
            const isHovered = activeCouncil === idx;

            return (
              <div
                key={judge.name}
                data-cursor-text={judge.codename.split(" ")[0]}
                data-feature-color={cardColor}
                onMouseEnter={() => setActiveCouncil(idx)}
                onMouseLeave={() => setActiveCouncil(null)}
                onClick={() => soundFx.playClick(1000 + idx * 100)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 card-beveled flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "glass-panel-elevated scale-[1.03]"
                    : "glass-panel border-white/10 hover:border-white/25"
                }`}
                style={{
                  borderColor: isHovered ? cardColor : undefined,
                  boxShadow: isHovered ? `0 0 35px ${cardColor}30` : undefined,
                }}
              >
                <div>
                  {/* Photo & Verified Clearance Level Badge */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-white/30 transition-all">
                    <Image
                      src={judge.avatar}
                      alt={judge.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-mono text-[#fbbf24] font-bold tracking-wider uppercase">
                      {judge.verifiedBadge}
                    </div>

                    <div
                      className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase"
                      style={{
                        backgroundColor: `${cardColor}25`,
                        color: cardColor,
                        border: `1px solid ${cardColor}50`,
                      }}
                    >
                      {judge.codename}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold font-mono text-white mb-1 group-hover:text-[#fbbf24] transition-colors">
                    {judge.name}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mb-3">
                    {judge.role} // <span className="text-white/80">{judge.affiliation}</span>
                  </div>

                  {/* Superpower Description */}
                  <p className="text-xs font-sans text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {judge.superpower}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {judge.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60 group-hover:border-white/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
