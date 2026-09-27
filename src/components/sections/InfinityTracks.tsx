"use client";

import React, { useState } from "react";
import { INFINITY_TRACKS, InfinityTrack } from "@/data/marvelEventData";
import {
  Sparkles,
  ChevronRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function InfinityTracks() {
  const [selectedTrack, setSelectedTrack] = useState<InfinityTrack | null>(null);
  const [filterStone, setFilterStone] = useState<string>("All");

  const filteredTracks =
    filterStone === "All"
      ? INFINITY_TRACKS
      : INFINITY_TRACKS.filter((t) => t.stone.includes(filterStone));

  const handleTrackCardClick = (track: InfinityTrack) => {
    soundFX.playClick(920);
    setSelectedTrack(track);
  };

  return (
    <section id="tracks" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>FLAGSHIP HACKATHON TRACKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          THE 6 <span className="text-gradient-cyan">INFINITY STONE TRACKS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Each track corresponds to a primordial cosmic entity. Choose your quest,
          solve high-impact challenges for India and the global developer landscape,
          and claim cash bounties totaling ₹2,50,000+.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {["All", "Space", "Mind", "Time", "Reality", "Power", "Soul"].map((stone) => {
          const isSelected = filterStone === stone;
          return (
            <button
              key={stone}
              onClick={() => {
                soundFX.playClick(750);
                setFilterStone(stone);
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                isSelected
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/40 scale-105"
                  : "bg-[#0a0e1a] text-zinc-400 border border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {stone === "All" ? "ALL 6 STONES" : `${stone} Stone`}
            </button>
          );
        })}
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            data-feature={track.stone.toUpperCase()}
            data-feature-color={track.stoneColor}
            onClick={() => handleTrackCardClick(track)}
            className="group relative glass-panel rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
            style={{
              borderColor: `${track.stoneColor}30`,
            }}
          >
            {/* Top Stone Glow Accent */}
            <div
              className="absolute -top-1 left-8 right-8 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                backgroundColor: track.stoneColor,
                boxShadow: `0 0 12px ${track.stoneColor}`,
              }}
            />

            <div>
              {/* Header: Stone Name + Bounty */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: `${track.stoneColor}15`,
                    color: track.stoneColor,
                    border: `1px solid ${track.stoneColor}40`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full animate-ping"
                    style={{ backgroundColor: track.stoneColor }}
                  />
                  {track.stone}
                </span>

                <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                  BOUNTY {track.bounty}
                </span>
              </div>

              {/* Title & Domain */}
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                {track.domain}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                {track.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                {track.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {track.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Problem Statements Trigger */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>VIEW PROBLEM STATEMENTS</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dossier for Selected Track */}
      {selectedTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-[#0a0e1a] rounded-2xl border p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              borderColor: selectedTrack.stoneColor,
              boxShadow: `0 0 40px ${selectedTrack.stoneGlow}`,
            }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded inline-block mb-2"
                  style={{
                    backgroundColor: `${selectedTrack.stoneColor}20`,
                    color: selectedTrack.stoneColor,
                  }}
                >
                  {selectedTrack.stone} PROTOCOL BRIEF
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedTrack.title}
                </h3>
                <div className="text-xs font-mono text-amber-400 mt-1 font-bold">
                  TRACK BOUNTY POOL: {selectedTrack.bounty} + CLOUD COMMENDATIONS
                </div>
              </div>
              <button
                onClick={() => setSelectedTrack(null)}
                className="text-zinc-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-sm font-mono"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedTrack.description}
            </p>

            {/* Sample Problem Statements */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-3">
                MISSION PROBLEM STATEMENTS
              </h4>
              <div className="space-y-3">
                {selectedTrack.sampleProblems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-black/60 border border-white/10"
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 shrink-0"
                      style={{ color: selectedTrack.stoneColor }}
                    />
                    <div className="text-xs sm:text-sm text-zinc-200 font-normal">
                      {prob}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Tech Arsenal */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-2">
                RECOMMENDED TECH ARSENAL
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTrack.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-white"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-500">
                BENNETT UNIVERSITY VENUE LABS ALLOCATED
              </span>
              <a
                href="#register"
                onClick={() => {
                  soundFX.playArcCharge();
                  setSelectedTrack(null);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: selectedTrack.stoneColor }}
              >
                <span>REGISTER FOR THIS TRACK</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
