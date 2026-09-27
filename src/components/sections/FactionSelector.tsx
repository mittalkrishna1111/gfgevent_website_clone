"use client";

import React from "react";
import { FACTIONS, Faction } from "@/data/marvelEventData";
import {
  ShieldAlert,
  Shield,
  Eye,
  Cpu,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

interface FactionSelectorProps {
  activeFaction: Faction;
  onSelectFaction: (faction: Faction) => void;
}

export default function FactionSelector({
  activeFaction,
  onSelectFaction,
}: FactionSelectorProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="h-6 w-6" />;
      case "Shield":
        return <Shield className="h-6 w-6" />;
      case "Eye":
        return <Eye className="h-6 w-6" />;
      case "Cpu":
        return <Cpu className="h-6 w-6" />;
      case "Zap":
        return <Zap className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  const handleFactionClick = (faction: Faction) => {
    soundFX.playFactionSurge(faction.soundFreq);
    onSelectFaction(faction);
  };

  return (
    <section id="factions" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
          <span>HERO FACTION ALLIANCE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          CHOOSE YOUR <span className="text-gradient-marvel">AVENGERS PROTOCOL</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Align your squad with one of the 5 Stark Multiverse divisions. Switching
          your faction recalibrates the visual HUD telemetry, audio resonance, and
          tailors your hackathon track recommendations.
        </p>
      </div>

      {/* Faction Selector Pill Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {FACTIONS.map((faction) => {
          const isSelected = activeFaction.id === faction.id;
          return (
            <button
              key={faction.id}
              data-feature={faction.alias.toUpperCase()}
              data-feature-color={faction.themeColor}
              onClick={() => handleFactionClick(faction)}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl border text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white/10 text-white shadow-2xl scale-105"
                  : "bg-[#0a0e1a]/60 text-zinc-400 border-white/10 hover:text-white hover:border-white/20 hover:scale-102"
              }`}
              style={{
                borderColor: isSelected ? faction.themeColor : undefined,
                boxShadow: isSelected ? `0 0 25px ${faction.glowColor}` : undefined,
              }}
            >
              <span style={{ color: faction.themeColor }}>
                {getIcon(faction.icon)}
              </span>
              <span>{faction.name}</span>
              {isSelected && (
                <CheckCircle2
                  className="h-4 w-4 ml-1"
                  style={{ color: faction.themeColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Faction Detail Dossier */}
      <div
        data-feature={activeFaction.alias.toUpperCase()}
        data-feature-color={activeFaction.themeColor}
        className="glass-panel-elevated rounded-2xl p-6 sm:p-10 border transition-all duration-500"
        style={{
          borderColor: activeFaction.themeColor,
          boxShadow: `0 0 35px ${activeFaction.glowColor}`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Icon & Identity */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              className="h-20 w-20 rounded-2xl flex items-center justify-center mb-4 border transition-transform duration-300 hover:scale-110"
              style={{
                backgroundColor: `${activeFaction.themeColor}15`,
                borderColor: activeFaction.themeColor,
                boxShadow: `0 0 25px ${activeFaction.glowColor}`,
                color: activeFaction.themeColor,
              }}
            >
              {getIcon(activeFaction.icon)}
            </div>

            <div
              className="text-xs font-mono font-bold tracking-widest uppercase mb-1"
              style={{ color: activeFaction.themeColor }}
            >
              {activeFaction.alias}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              {activeFaction.name}
            </h3>
            <div className="italic text-zinc-400 font-serif text-sm mb-4">
              &ldquo;{activeFaction.motto}&rdquo;
            </div>

            <a
              href="#register"
              onClick={() => soundFX.playArcCharge()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: activeFaction.themeColor }}
            >
              <Sparkles className="h-4 w-4" />
              <span>CLAIM PASS AS {activeFaction.name.toUpperCase()}</span>
            </a>
          </div>

          {/* Right Column: Mission Briefing & Tech Stacks */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div>
              <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                DOMAIN OPERATIONAL OBJECTIVE
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">
                {activeFaction.domain}
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {activeFaction.description}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-2">
                CORE TECHNICAL ARSENAL
              </div>
              <div className="flex flex-wrap gap-2">
                {activeFaction.techFocus.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-black/60 border border-white/10 text-zinc-200"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stark Security Status */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full animate-ping"
                  style={{ backgroundColor: activeFaction.themeColor }}
                />
                PROTOCOL STATUS: ACTIVATED &amp; DEPLOYED
              </span>
              <span className="text-zinc-400 font-bold">BENNETT S.H.I.E.L.D. CLEARANCE: LEVEL 7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
