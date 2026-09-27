"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Clock,
  Sparkles,
  Zap,
  Brain,
  Heart,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { INFINITY_TRACKS, InfinityTrack } from "@/data/marvelEventData";
import { soundFx } from "@/lib/sound";

const STONE_ICON_MAP: Record<string, React.ElementType> = {
  Space: Globe,
  Time: Clock,
  Reality: Sparkles,
  Power: Zap,
  Mind: Brain,
  Soul: Heart,
};

const TRACK_HERO_IMAGES: Record<string, { image: string; heroName: string; patronRole: string }> = {
  space: {
    image: "/images/heroes/captain-america.jpg",
    heroName: "CAPTAIN AMERICA",
    patronRole: "Tesseract Spatial Vanguard",
  },
  mind: {
    image: "/images/heroes/iron-man-85.png",
    heroName: "IRON MAN // MARK 85",
    patronRole: "Synthetic Mind & Jarvis Core",
  },
  reality: {
    image: "/images/heroes/scarlet-witch.jpg",
    heroName: "SCARLET WITCH",
    patronRole: "Chaos Magic & Web3D Reality",
  },
  power: {
    image: "/images/heroes/thanos.png",
    heroName: "THANOS",
    patronRole: "Orb of Destruction & DevSecOps",
  },
  time: {
    image: "/images/heroes/doctor-strange.jpg",
    heroName: "DOCTOR STRANGE",
    patronRole: "Master of Time & Predictive Algos",
  },
  soul: {
    image: "/images/heroes/spider-man.jpg",
    heroName: "SPIDER-MAN",
    patronRole: "Empathetic Human Uplift & Assistive Tech",
  },
};

export default function InfinityTracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<InfinityTrack | null>(null);

  const handleInspect = (track: InfinityTrack) => {
    setSelectedTrack(track);
    soundFx.playClick(1050);
  };

  const handleClose = () => {
    setSelectedTrack(null);
    soundFx.playClick(500);
  };

  return (
    <section
      id="tracks"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(0,240,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(226,54,54,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#fbbf24] tracking-widest uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
              // 02 SIX INFINITY STONE TRACKS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              HARNESS THE POWER OF <br />
              <span className="text-gradient-marvel">THE SIX INFINITY STONES</span>
            </h2>
          </div>

          <div className="text-sm font-mono text-white/50 max-w-sm">
            Select any stone track to inspect problem statements, target tech stacks, and track-specific Stark bounties.
          </div>
        </div>

        {/* 6 Infinity Stone Cards Grid with Realistic Marvel Hero Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFINITY_TRACKS.map((track) => {
            const Icon = STONE_ICON_MAP[track.stone.replace(" Stone", "")] || Sparkles;
            const heroKey = track.stone.replace(" Stone", "").toLowerCase();
            const heroData = TRACK_HERO_IMAGES[heroKey] || TRACK_HERO_IMAGES.space;

            return (
              <div
                key={track.id}
                data-cursor-text={`${track.stone}`}
                data-feature-color={track.stoneColor}
                onClick={() => handleInspect(track)}
                className="relative flex flex-col justify-between p-6 rounded-2xl glass-panel hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer card-beveled group hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Cinematic Marvel Hero Patron Banner */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                    <Image
                      src={heroData.image}
                      alt={heroData.heroName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top filter brightness-90 contrast-115 group-hover:scale-110 group-hover:brightness-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                    {/* Sweeping Holographic Scanline Laser */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_12px_#00f0ff] absolute animate-hologram-scan" />
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider backdrop-blur-md shadow-lg"
                        style={{
                          backgroundColor: `${track.stoneColor}25`,
                          color: track.stoneColor,
                          border: `1px solid ${track.stoneColor}60`,
                        }}
                      >
                        {track.stone}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#fbbf24] font-semibold">
                      BOUNTY {track.bounty}
                    </div>

                    {/* Bottom Hero & Icon Info */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-white/60 tracking-widest uppercase">
                          PATRON GUARDIAN
                        </span>
                        <span className="text-xs font-mono font-bold text-white tracking-wider drop-shadow-md">
                          {heroData.heroName}
                        </span>
                      </div>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${track.stoneColor}25`,
                          border: `1px solid ${track.stoneColor}60`,
                        }}
                      >
                        <Icon size={16} style={{ color: track.stoneColor }} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-mono text-white tracking-wide mb-2 group-hover:text-white transition-colors">
                    {track.title}
                  </h3>
                  <div
                    className="text-xs font-mono mb-3 uppercase tracking-wider font-semibold"
                    style={{ color: track.stoneColor }}
                  >
                    {track.domain}
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                {/* Bottom Tech Tags & Inspect Trigger */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {track.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                    <span>VIEW</span>
                    <ArrowRight size={12} style={{ color: track.stoneColor }} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Track Problem Statements & Bounties Modal */}
      {selectedTrack && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel-elevated rounded-2xl border border-white/20 p-5 sm:p-8 card-beveled shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono px-3 py-1 rounded font-bold uppercase"
                  style={{
                    backgroundColor: `${selectedTrack.stoneColor}20`,
                    color: selectedTrack.stoneColor,
                    border: `1px solid ${selectedTrack.stoneColor}50`,
                  }}
                >
                  {selectedTrack.stone} TRACK
                </span>
                <span className="text-xs font-mono text-[#fbbf24] font-semibold">
                  BOUNTY: {selectedTrack.bounty}
                </span>
              </div>
              <button
                onClick={handleClose}
                data-cursor-text="CLOSE"
                className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer hover:scale-110 active:scale-95"
              >
                <X size={18} />
              </button>
            </div>

            {/* Patron Hero Hologram Dossier Header */}
            {(() => {
              const heroKey = selectedTrack.stone.replace(" Stone", "").toLowerCase();
              const heroData = TRACK_HERO_IMAGES[heroKey] || TRACK_HERO_IMAGES.space;
              return (
                <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden mb-6 border border-white/15">
                  <Image
                    src={heroData.image}
                    alt={heroData.heroName}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover object-top filter brightness-95 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/50 to-transparent" />

                  {/* Hologram Scan */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_12px_#00f0ff] absolute animate-hologram-scan" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest uppercase text-white/60 mb-0.5">
                        PATRON AVENGERS GUARDIAN // S.H.I.E.L.D. DOSSIER
                      </div>
                      <div className="text-base sm:text-lg font-bold font-mono text-white">
                        {heroData.heroName}
                      </div>
                      <div className="text-xs font-mono" style={{ color: selectedTrack.stoneColor }}>
                        {heroData.patronRole}
                      </div>
                    </div>
                    <div
                      className="px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md"
                      style={{
                        backgroundColor: `${selectedTrack.stoneColor}25`,
                        color: selectedTrack.stoneColor,
                        borderColor: `${selectedTrack.stoneColor}60`,
                      }}
                    >
                      {selectedTrack.stone}
                    </div>
                  </div>
                </div>
              );
            })()}

            <h3 className="text-2xl font-bold font-mono text-white mb-2">
              {selectedTrack.title}
            </h3>
            <p className="text-xs font-mono italic text-[#fbbf24] mb-4">
              &ldquo;{selectedTrack.tagline}&rdquo;
            </p>
            <p className="text-sm text-white/80 leading-relaxed font-sans mb-6">
              {selectedTrack.description}
            </p>

            {/* Sample Problems */}
            <div className="mb-6">
              <div className="text-xs font-mono text-white/50 tracking-wider uppercase mb-3">
                SAMPLE PROBLEM STATEMENTS:
              </div>
              <div className="flex flex-col gap-2.5">
                {selectedTrack.sampleProblems.map((prob, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs sm:text-sm font-sans text-white/90"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: selectedTrack.stoneColor }}
                    />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="text-xs font-mono text-white/50 tracking-wider uppercase mb-2">
                RECOMMENDED TECH STACK:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedTrack.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
              <span className="text-emerald-400 text-[11px] sm:text-xs">BENNETT CAMPUS LAB HARDWARE PROVIDED</span>
              <button
                onClick={handleClose}
                data-cursor-text="DISMISS"
                className="px-5 py-2.5 btn-clip bg-[#e23636] hover:bg-[#e23636]/90 hover:scale-105 active:scale-95 text-white font-mono text-xs font-semibold cursor-pointer transition-all"
              >
                CLOSE BRIEFING
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
