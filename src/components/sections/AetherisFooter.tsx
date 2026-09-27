"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Shield, Radio, Terminal, ExternalLink, Globe } from "lucide-react";
import { soundFx } from "@/lib/sound";

export default function AetherisFooter() {
  const [utcTime, setUtcTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    soundFx.playPowerUp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020306] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Brand, Clock & System Status */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="w-10 h-10 rounded-xl glass-panel border border-[#ff2a55]/40 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#ff2a55] shadow-[0_0_12px_#ff2a55]" />
            </div>
            <div>
              <span className="text-xl font-bold font-mono tracking-[0.2em] text-white">
                AETHERIS
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">
                Autonomous Neural Kinetics // Division 07
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>DEFENSE PROTOCOL: LEVEL 05 NOMINAL</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/10 text-white/80 font-bold">
              {utcTime || "12:00:00 UTC"}
            </div>
          </div>
        </div>

        {/* Middle Tier: Categorized Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff2a55] uppercase block mb-4">
              01 // PLATFORM
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview & Philosophy
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Subsystem Matrix
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Deployment Pipeline
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Suit Configurator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase block mb-4">
              02 // ENGINEERING
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#benchmarks" className="hover:text-white transition-colors">
                  Lab Benchmarks
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-white transition-colors">
                  Telemetry Oscilloscope
                </a>
              </li>
              <li>
                <span className="text-white/30 cursor-not-allowed">
                  Cryogenic Nodes (Classified)
                </span>
              </li>
              <li>
                <span className="text-white/30 cursor-not-allowed">
                  Orbital Relay API
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#f59e0b] uppercase block mb-4">
              03 // GOVERNANCE
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Pilot Whitelist
                </a>
              </li>
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Sector Security Terms
                </span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Biometric Privacy Codex
                </span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Export Compliance
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase block mb-4">
              04 // SECURE COMMS
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <span>Satellite Comms Node 07</span>
                <ExternalLink size={12} />
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <span>Encrypted Matrix Relay</span>
                <ExternalLink size={12} />
              </li>
              <li className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                <span>Dispatch Channel</span>
                <ExternalLink size={12} />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Security Clearance, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} AETHERIS DYNAMICS // ALL RIGHTS RESERVED UNDER PLANETARY DEFENSE PROTOCOL.
          </div>

          <button
            onClick={handleBackToTop}
            className="p-3 btn-clip glass-panel hover:bg-white/10 text-white flex items-center gap-2 cursor-pointer transition-all border border-white/10 hover:border-[#ff2a55]"
            title="Return to orbital top"
          >
            <span className="text-[11px] font-bold">ASCEND TO SURFACE</span>
            <ArrowUp size={14} className="text-[#ff2a55]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
