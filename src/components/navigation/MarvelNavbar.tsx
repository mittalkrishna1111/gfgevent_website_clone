"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { soundFx } from "@/lib/sound";

interface NavLink {
  label: string;
  href: string;
  code: string;
  color: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Briefing", href: "#protocol", code: "01", color: "#e23636" },
  { label: "Tracks", href: "#tracks", code: "02", color: "#00f0ff" },
  { label: "Timeline", href: "#timeline", code: "03", color: "#fbbf24" },
  { label: "Armory", href: "#configurator", code: "04", color: "#ef4444" },
  { label: "Treasury", href: "#prizes", code: "05", color: "#fbbf24" },
  { label: "Council", href: "#council", code: "06", color: "#e23636" },
  { label: "Telemetry", href: "#telemetry", code: "07", color: "#10b981" },
  { label: "FAQ", href: "#faq", code: "08", color: "#00f0ff" },
];

export default function MarvelNavbar() {
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

  useEffect(() => {
    const sync = setInterval(() => {
      if (soundFx.isMusicPlaying !== soundEnabled) {
        setSoundEnabled(soundFx.isMusicPlaying);
      }
    }, 400);
    return () => clearInterval(sync);
  }, [soundEnabled]);

  const handleToggleSound = () => {
    soundFx.playClick(950);
    const isPlaying = soundFx.toggleBgm();
    setSoundEnabled(isPlaying);
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
            ? "py-2.5 bg-[#04060d]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
            : "pt-0 pb-4 sm:pb-6 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top Mini Announcement Bar (collapses smoothly when scrolled) */}
        {!isScrolled && (
          <div className="w-full bg-gradient-to-r from-[#e23636]/90 via-[#ea580c]/90 to-[#e23636]/90 text-white text-[10px] font-mono tracking-widest py-1.5 px-4 text-center flex items-center justify-center gap-2 mb-3 shadow-md border-b border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
            <span className="font-bold">GEEKSFORGEEKS STUDENT CHAPTER // BENNETT UNIVERSITY</span>
            <span className="hidden md:inline">• MULTIVERSE OF CODE &apos;26 // 36H HACKATHON // ₹2,50,000+ BOUNTIES</span>
            <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] font-bold text-[#fbbf24] ml-2 shrink-0">
              NATIONAL INVITATIONAL
            </span>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Avengers "A" Emblem & Stark Industries */}
          <a
            href="#"
            data-cursor-text="AVENGERS HQ"
            data-feature-color="#e23636"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              soundFx.playPowerUp();
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            {/* Custom High-Tech Avengers "A" SVG Logo */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 44 44" className="w-full h-full fill-none transition-transform duration-300 group-hover:scale-110">
                <circle cx="22" cy="22" r="20" stroke="#e23636" strokeWidth="2" className="group-hover:stroke-[#fbbf24] transition-colors" />
                <circle cx="22" cy="22" r="16" stroke="rgba(251,191,36,0.3)" strokeWidth="1" strokeDasharray="4 2" />
                <path
                  d="M 22 7 L 11 35 L 17 35 L 20 27 L 27 27 L 28 35 L 34 35 L 25 7 Z M 21 16 L 25 23 L 19 23 Z"
                  fill="#ffffff"
                  className="group-hover:fill-[#fbbf24] transition-colors"
                />
                <path d="M 25 24 L 37 24" stroke="#e23636" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] sm:tracking-[0.2em] text-white font-mono flex items-center gap-1.5">
                AVENGERS <span className="text-[#e23636] font-extrabold">&apos;26</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-[#e23636]/20 text-[#e23636] border border-[#e23636]/40 font-semibold tracking-normal hidden xs:inline-block">
                  GFG BU
                </span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-white/50 -mt-0.5 uppercase hidden sm:block">
                Multiverse of Code // Bennett University
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3.5 py-1.5 glass-panel rounded-full border border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor-text={link.label.toUpperCase()}
                data-feature-color={link.color}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1 text-xs font-mono tracking-wider text-white/70 hover:text-white transition-all duration-200 rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="text-[10px] text-[#e23636] font-semibold opacity-70 group-hover:opacity-100">
                  {link.code}.
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* J.A.R.V.I.S. Background Score & SFX Toggle */}
            <button
              onClick={handleToggleSound}
              data-cursor-text={soundEnabled ? "PAUSE SCORE" : "PLAY SCORE"}
              data-feature-color="#fbbf24"
              className={`p-2 sm:px-3 sm:py-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2 text-xs font-mono hover:scale-105 active:scale-95 ${
                soundEnabled
                  ? "bg-[#fbbf24]/15 border-[#fbbf24]/50 text-[#fbbf24] shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
              title={soundEnabled ? "Marvel Background Score: ON" : "Marvel Background Score: OFF"}
            >
              {soundEnabled ? (
                <>
                  <div className="flex items-end gap-0.5 h-3.5">
                    <span className="w-1 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "100%", animationDuration: "0.6s" }} />
                    <span className="w-1 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "55%", animationDuration: "0.8s" }} />
                    <span className="w-1 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "85%", animationDuration: "0.5s" }} />
                  </div>
                  <span className="hidden sm:inline text-[10px] font-bold text-[#fbbf24]">SCORE ON</span>
                </>
              ) : (
                <>
                  <VolumeX size={16} />
                  <span className="hidden sm:inline text-[10px]">PLAY SCORE</span>
                </>
              )}
            </button>

            {/* Assemble / Registration CTA */}
            <a
              href="#register"
              data-cursor-text="ASSEMBLE"
              data-feature-color="#e23636"
              onClick={(e) => handleNavClick(e, "#register")}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 btn-clip bg-gradient-to-r from-[#e23636] via-[#ea580c] to-[#e23636] text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_25px_rgba(226,54,54,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>ASSEMBLE</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                soundFx.playClick(700);
              }}
              data-cursor-text="MENU"
              data-feature-color="#00f0ff"
              className="lg:hidden p-2 sm:p-2.5 rounded-lg glass-panel text-white/80 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#04060d]/95 backdrop-blur-2xl flex flex-col justify-between pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-mono tracking-widest text-[#e23636] mb-2 uppercase">
              // S.H.I.E.L.D. TACTICAL DIRECTORY
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor-text={link.label.toUpperCase()}
                data-feature-color={link.color}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-base sm:text-lg font-mono tracking-wider text-white hover:border-[#e23636]/40 hover:bg-white/[0.05] transition-all cursor-pointer active:scale-98"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs text-[#e23636] font-semibold">{link.code}</span>
                  {link.label}
                </span>
                <ArrowUpRight size={16} className="text-white/40" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
            <a
              href="#register"
              data-cursor-text="CLAIM PASS"
              data-feature-color="#e23636"
              onClick={(e) => handleNavClick(e, "#register")}
              className="w-full py-3.5 btn-clip-lg bg-[#e23636] text-white font-mono text-center font-bold tracking-widest text-sm active:scale-98"
            >
              CLAIM S.H.I.E.L.D. AGENT BADGE
            </a>
            <div className="text-center text-[10px] font-mono text-white/40">
              BENNETT UNIVERSITY CAMPUS // GREATER NOIDA
            </div>
          </div>
        </div>
      )}
    </>
  );
}
