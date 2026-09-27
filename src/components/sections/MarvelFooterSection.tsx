"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Shield, ExternalLink } from "lucide-react";
import { soundFx } from "@/lib/sound";

export default function MarvelFooterSection() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST");
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
    <footer className="relative bg-[#030408] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Logo, Status & Clock */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-panel border border-[#e23636]/40 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#e23636] shadow-[0_0_12px_#e23636]" />
            </div>
            <div>
              <span className="text-xl font-bold font-mono tracking-[0.2em] text-white">
                AVENGERS <span className="text-[#e23636] font-extrabold">&apos;26</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">
                GFG Student Chapter // Bennett University
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>S.H.I.E.L.D. CLEARANCE: LEVEL 07 NOMINAL</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/10 text-white/80 font-bold">
              {istTime || "12:00:00 IST"}
            </div>
          </div>
        </div>

        {/* Middle Tier: Categorized Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#e23636] uppercase block mb-4">
              01 // HACKATHON
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#protocol" data-cursor-text="PROTOCOL" data-feature-color="#e23636" className="hover:text-white transition-colors">
                  Mission Protocol
                </a>
              </li>
              <li>
                <a href="#tracks" data-cursor-text="TRACKS" data-feature-color="#00f0ff" className="hover:text-white transition-colors">
                  6 Infinity Tracks
                </a>
              </li>
              <li>
                <a href="#timeline" data-cursor-text="TIMELINE" data-feature-color="#10b981" className="hover:text-white transition-colors">
                  TVA Sacred Timeline
                </a>
              </li>
              <li>
                <a href="#configurator" data-cursor-text="STARK ARMORY" data-feature-color="#e23636" className="hover:text-white transition-colors">
                  Stark Armory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#fbbf24] uppercase block mb-4">
              02 // BENNETT CITADEL
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#prizes" data-cursor-text="TREASURY" data-feature-color="#fbbf24" className="hover:text-white transition-colors">
                  Stark Treasury & Bounties
                </a>
              </li>
              <li>
                <a href="#telemetry" data-cursor-text="TELEMETRY" data-feature-color="#00f0ff" className="hover:text-white transition-colors">
                  Campus Telemetry
                </a>
              </li>
              <li>
                <span className="text-white/30 cursor-not-allowed">
                  Campus Navigation & Map
                </span>
              </li>
              <li>
                <span className="text-white/30 cursor-not-allowed">
                  Travel Grants & Bus Routes
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase block mb-4">
              03 // REGISTRATION
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li>
                <a href="#register" data-cursor-text="CLAIM PASS" data-feature-color="#e23636" className="hover:text-white transition-colors">
                  Claim S.H.I.E.L.D. Badge
                </a>
              </li>
              <li>
                <span data-cursor-text="TEAM RULES" data-feature-color="#fbbf24" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Team Formation Rules
                </span>
              </li>
              <li>
                <span data-cursor-text="CONDUCT" data-feature-color="#10b981" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Code of Conduct
                </span>
              </li>
              <li>
                <span data-cursor-text="FAQ" data-feature-color="#00f0ff" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Hackathon FAQ
                </span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase block mb-4">
              04 // COMMUNITY
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-white/60">
              <li data-cursor-text="INSTAGRAM" data-feature-color="#f43f5e" className="flex items-center gap-1.5 hover:text-white cursor-pointer hover:translate-x-1 transition-transform">
                <span>GFG Bennett Instagram</span>
                <ExternalLink size={12} />
              </li>
              <li data-cursor-text="DISCORD" data-feature-color="#818cf8" className="flex items-center gap-1.5 hover:text-white cursor-pointer hover:translate-x-1 transition-transform">
                <span>GeeksforGeeks Chapter Discord</span>
                <ExternalLink size={12} />
              </li>
              <li data-cursor-text="LINKEDIN" data-feature-color="#0ea5e9" className="flex items-center gap-1.5 hover:text-white cursor-pointer hover:translate-x-1 transition-transform">
                <span>LinkedIn Network</span>
                <ExternalLink size={12} />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} GEEKSFORGEEKS STUDENT CHAPTER, BENNETT UNIVERSITY. AVENGERS: INITIATIVE &apos;26 // ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={handleBackToTop}
            data-cursor-text="TOP OF PAGE"
            data-feature-color="#e23636"
            className="p-3 btn-clip glass-panel hover:bg-white/10 text-white flex items-center gap-2 cursor-pointer transition-all border border-white/10 hover:border-[#e23636] hover:scale-105 active:scale-95"
            title="Return to top"
          >
            <span className="text-[11px] font-bold">ASCEND TO SURFACE</span>
            <ArrowUp size={14} className="text-[#e23636]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
