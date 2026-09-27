"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Globe } from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function MarvelFooter() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFX.playRepulsorBlast();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020408] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6">
      {/* Background Comic Grid */}
      <div className="absolute inset-0 bg-comic-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand & Chapter Column */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center font-mono font-black text-sm text-white shadow-lg">
                GFG
              </div>
              <div>
                <h3 className="text-base font-black uppercase text-white tracking-wider">
                  AVENGERS: INITIATIVE &apos;26
                </h3>
                <p className="text-[11px] font-mono text-red-400 font-bold">
                  GEEKSFORGEEKS STUDENT CHAPTER • BENNETT UNIVERSITY
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
              The premier annual hackathon and technical symposium at Bennett University,
              Greater Noida. Bringing together 500+ builders, creators, and engineers
              to build the future across the multiverse.
            </p>

            <div className="flex items-center gap-4 text-zinc-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                title="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.geeksforgeeks.org"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 transition-colors"
                title="GeeksforGeeks"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              PROTOCOLS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <a href="#factions" className="hover:text-white transition-colors">
                  Hero Factions
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">
                  6 Infinity Tracks
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-white transition-colors">
                  TVA Sacred Timeline
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-white transition-colors">
                  Stark Treasury
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">
                  Claim Clearance Pass
                </a>
              </li>
            </ul>
          </div>

          {/* Bennett Campus Info */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              VENUE CITADEL
            </h4>
            <div className="text-xs font-mono text-zinc-400 space-y-1.5 leading-relaxed">
              <div className="text-white font-bold">Bennett University</div>
              <div>Times of India Group Institution</div>
              <div>Plot Nos 8, 11, TechZone 2</div>
              <div>Greater Noida, Uttar Pradesh 201310</div>
              <div className="text-amber-400 font-semibold pt-1">
                Coordinates: 28.4595° N, 77.5140° E
              </div>
            </div>
          </div>

          {/* Telemetry Clock & Scroll to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-right w-full md:w-auto">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">
                TELEMETRY CLOCK
              </div>
              <div className="text-xs font-mono font-bold text-emerald-400">
                {istTime || "SYNCING IST..."}
              </div>
              <div className="text-[9px] font-mono text-zinc-500 mt-0.5">
                BENNETT CAMPUS NODE
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="h-3.5 w-3.5 text-red-400" />
            </button>
          </div>
        </div>

        {/* Bottom Legal / Easter Egg Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © 2026 GeeksforGeeks Student Chapter, Bennett University. Designed for
            Junior Core Recruitment.
          </div>
          <div className="text-zinc-600 text-[10px]">
            Inspired by Marvel Entertainment &amp; Stark Industries. Non-profit
            educational initiative.
          </div>
        </div>
      </div>
    </footer>
  );
}
