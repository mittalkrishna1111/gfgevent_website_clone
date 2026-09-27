"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Volume2,
  VolumeX,
  Radio,
  Menu,
  X,
  Sparkles,
  Zap,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

interface NavbarProps {
  currentFactionColor?: string;
}

export default function Navbar({
  currentFactionColor = "#e23636",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAmbientOn, setIsAmbientOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFX.playClick(660);
    }
  };

  const handleAmbientToggle = () => {
    soundFX.playClick(880);
    const active = soundFX.toggleAmbientDrone();
    setIsAmbientOn(active);
  };

  const navLinks = [
    { label: "FACTIONS", href: "#factions" },
    { label: "INFINITY TRACKS", href: "#tracks" },
    { label: "TIMELINE", href: "#timeline" },
    { label: "PRIZES", href: "#prizes" },
    { label: "COUNCIL", href: "#council" },
    { label: "JARVIS FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Marvel Cinematic Strip */}
      <div className="bg-red-700 text-white text-[10px] font-mono tracking-widest uppercase py-1 px-4 text-center font-bold flex items-center justify-center gap-2 shadow-sm border-b border-red-500/40">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-ping" />
        <span>GEEKSFORGEEKS STUDENT CHAPTER // BENNETT UNIVERSITY PRESENTS</span>
        <span className="hidden sm:inline text-red-200">|</span>
        <span className="hidden sm:inline text-amber-300">OCTOBER 16–18, 2026 • GREATER NOIDA</span>
      </div>

      {/* Main Glass HUD Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
        <div
          className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-300 ${
            isScrolled
              ? "bg-[#080c18]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "bg-[#0a0e1a]/60 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo / Chapter Shield Emblem */}
          <Link
            href="#"
            onClick={() => soundFX.playClick(580)}
            className="flex items-center gap-3 group"
          >
            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 font-black text-white text-xs tracking-tighter shadow-lg transition-transform group-hover:scale-105"
              style={{
                boxShadow: `0 0 16px ${currentFactionColor}60`,
                borderColor: currentFactionColor,
              }}
            >
              <span className="relative z-10 font-mono font-extrabold text-[13px] text-white">
                GFG
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                MULTIVERSE OF CODE &apos;26
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-tight">
                BENNETT UNIVERSITY CHAPTER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => soundFX.playClick(1000)}
                onClick={() => soundFX.playClick(800)}
                className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: currentFactionColor }}
                />
              </a>
            ))}
          </nav>

          {/* Actions: Audio Synthesizer Controls + Assemble Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Cosmic Sound Generator Toggle */}
            <button
              onClick={handleAmbientToggle}
              title={isAmbientOn ? "Stop Cosmic Audio Drone" : "Start Cosmic Audio Drone"}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                isAmbientOn
                  ? "bg-cyan-950/60 border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)] animate-pulse"
                  : "bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              <Radio className="h-3.5 w-3.5" />
              <span>{isAmbientOn ? "COSMIC HUM: ON" : "COSMIC HUM"}</span>
            </button>

            {/* Global Audio FX Mute / Unmute */}
            <button
              onClick={handleAudioToggle}
              title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
              className={`p-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                isMuted
                  ? "bg-red-950/40 border-red-500/40 text-red-400"
                  : "bg-zinc-900/60 border-white/10 text-zinc-300 hover:text-white hover:border-white/20"
              }`}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
            </button>

            {/* Assemble / Registration CTA */}
            <a
              href="#register"
              onClick={() => soundFX.playArcCharge()}
              className="relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 px-4 py-2 text-xs font-black tracking-widest text-white shadow-lg transition-all hover:scale-105 hover:shadow-red-500/30 active:scale-95 cursor-pointer uppercase font-mono"
            >
              <Zap className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              <span>ASSEMBLE</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleAudioToggle}
              className="p-2 rounded-lg border border-white/10 text-zinc-300"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
            </button>
            <button
              onClick={() => {
                soundFX.playClick(700);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg border border-white/10 text-zinc-200"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-xl bg-[#0a0e1a]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    soundFX.playClick(800);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white py-1.5 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleAmbientToggle}
                className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs font-mono text-zinc-300"
              >
                <Radio className="h-4 w-4" />
                <span>{isAmbientOn ? "STOP COSMIC HUM" : "START COSMIC HUM"}</span>
              </button>
              <a
                href="#register"
                onClick={() => {
                  soundFX.playArcCharge();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 py-2.5 text-xs font-black tracking-widest text-white uppercase font-mono shadow-lg"
              >
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>ASSEMBLE NOW // CLAIM BADGE</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
