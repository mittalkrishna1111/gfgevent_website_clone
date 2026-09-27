"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Shield, Cpu } from "lucide-react";
import { soundFx } from "@/lib/sound";

interface NavLink {
  label: string;
  href: string;
  code: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview", code: "01" },
  { label: "Systems", href: "#features", code: "02" },
  { label: "How It Works", href: "#architecture", code: "03" },
  { label: "Showcase", href: "#showcase", code: "04" },
  { label: "Benchmarks", href: "#benchmarks", code: "05" },
  { label: "Telemetry", href: "#telemetry", code: "06" },
];

export default function AetherisNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const state = soundFx.toggle();
    setSoundEnabled(state);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick(880);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#030509]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              soundFx.playPowerUp();
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Custom High-Tech Geometric SVG Logo (Inspired by EV2's angular logo) */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 44 44"
                className="w-full h-full fill-none transition-transform duration-300 group-hover:scale-105"
              >
                <polygon
                  points="22,2 42,12 42,32 22,42 2,32 2,12"
                  stroke="#ff2a55"
                  strokeWidth="1.8"
                  className="group-hover:stroke-[#00f0ff] transition-colors"
                />
                <polygon
                  points="22,8 36,16 36,28 22,36 8,28 8,16"
                  fill="rgba(255,42,85,0.15)"
                  stroke="#ff2a55"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />
                <circle cx="22" cy="22" r="4" fill="#ff2a55" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-[0.25em] text-white font-mono flex items-center gap-1.5">
                AETHERIS
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ff2a55]/20 text-[#ff2a55] border border-[#ff2a55]/40 font-semibold tracking-normal">
                  v3.4
                </span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/50 -mt-0.5 uppercase">
                Autonomous Neural Kinetics
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 glass-panel rounded-full border border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1 text-xs font-mono tracking-wider text-white/70 hover:text-white transition-all duration-200 rounded-full hover:bg-white/10 flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="text-[10px] text-[#ff2a55] font-semibold opacity-70 group-hover:opacity-100">
                  {link.code}.
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-3">
            {/* Audio Micro-Interaction SFX Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2 text-xs font-mono ${
                soundEnabled
                  ? "bg-[#ff2a55]/15 border-[#ff2a55]/50 text-[#ff2a55] shadow-[0_0_15px_rgba(255,42,85,0.3)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
              title={soundEnabled ? "Audio Effects: ON" : "Audio Effects: OFF"}
            >
              {soundEnabled ? (
                <>
                  <Volume2 size={16} />
                  <span className="hidden sm:inline text-[10px] font-bold">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX size={16} />
                  <span className="hidden sm:inline text-[10px]">SFX OFF</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, "#cta")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-clip bg-gradient-to-r from-[#ff2a55] to-[#e11d48] text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,42,85,0.5)] transition-all cursor-pointer"
            >
              <span>INITIALIZE</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                soundFx.playClick(700);
              }}
              className="lg:hidden p-2.5 rounded-lg glass-panel text-white/80 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#030509]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono tracking-widest text-[#ff2a55] mb-2 uppercase">
              // TACTICAL SYSTEM DIRECTORY
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-lg font-mono tracking-wider text-white hover:border-[#ff2a55]/40 hover:bg-white/[0.05] transition-all cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs text-[#ff2a55] font-semibold">{link.code}</span>
                  {link.label}
                </span>
                <ArrowUpRight size={16} className="text-white/40" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, "#cta")}
              className="w-full py-3.5 btn-clip-lg bg-[#ff2a55] text-white font-mono text-center font-bold tracking-widest text-sm"
            >
              REQUEST ALLOCATION ACCESS
            </a>
            <div className="text-center text-[10px] font-mono text-white/40">
              STATUS: NOMINAL // SECTOR 07 ONLINE
            </div>
          </div>
        </div>
      )}
    </>
  );
}
