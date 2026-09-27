"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { HERO_AVATARS, FACTIONS } from "@/data/marvelEventData";
import {
  Shield,
  QrCode,
  Sparkles,
  Download,
  CheckCircle,
  Copy,
  Cpu,
  User,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function ShieldBadgeGenerator() {
  const [agentName, setAgentName] = useState("Alex Parker");
  const [university, setUniversity] = useState("Bennett University");
  const [role, setRole] = useState("AI & Autonomous Systems");
  const [selectedAvatar, setSelectedAvatar] = useState(HERO_AVATARS[0]);
  const [selectedFactionId, setSelectedFactionId] = useState("stark");
  const [githubHandle, setGithubHandle] = useState("alex-parker-dev");
  const [isRegistered, setIsRegistered] = useState(false);
  const [ticketId, setTicketId] = useState("GFG-BU-8492-AVX");

  useEffect(() => {
    setTicketId(`GFG-BU-${Math.floor(1000 + Math.random() * 9000)}-AVX`);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playArcCharge();

    // Trigger Marvel chromatic confetti explosion
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e23636", "#fbbf24", "#00f0ff", "#10b981", "#a855f7"],
      });
    } catch {}

    setIsRegistered(true);
  };

  const handleAvatarSelect = (avatar: (typeof HERO_AVATARS)[0]) => {
    soundFX.playClick(720);
    setSelectedAvatar(avatar);
  };

  return (
    <section id="register" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
          <Shield className="h-3.5 w-3.5" />
          <span>S.H.I.E.L.D. RECRUITMENT TERMINAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          GENERATE YOUR <span className="text-gradient-marvel">CLEARANCE PASS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Fill your operative dossier to forge your official Multiverse Clearance
          Ticket. Free admission, meals, and overnight hacking access at Bennett
          University campus.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form Column */}
        <div className="lg:col-span-6 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
              <Terminal className="h-4 w-4" />
              <span>STARK TERMINAL // NEW APPLICANT DOSSIER</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">ENCRYPTION: 4096-BIT RSA</span>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1.5 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-red-400" />
                <span>Operative Full Name</span>
              </label>
              <input
                type="text"
                required
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="e.g. Tony Stark"
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors font-mono"
              />
            </div>

            {/* University */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1.5 flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-amber-400" />
                <span>University / Institute</span>
              </label>
              <input
                type="text"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="e.g. Bennett University"
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors font-mono"
              />
            </div>

            {/* Role & Specialization */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                <span>Technical Specialization</span>
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono"
              >
                <option value="AI & Autonomous Systems">AI &amp; Autonomous Multi-Agent Systems</option>
                <option value="Full-Stack Web3 & Security">Full-Stack Web3 &amp; Defensive Security</option>
                <option value="Cloud Architecture & DevOps">High-Performance Cloud &amp; DevOps</option>
                <option value="Spatial Computing & UI/UX">Spatial Computing, AR/VR &amp; UI/UX</option>
                <option value="Hardware IoT & Robotics">Vibranium Hardware, IoT &amp; Robotics</option>
                <option value="Algorithms & Quantum Computing">Algorithmic Optimization &amp; Quantum</option>
              </select>
            </div>

            {/* Faction Alignment */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-purple-400" />
                <span>Desired Avengers Protocol Alignment</span>
              </label>
              <select
                value={selectedFactionId}
                onChange={(e) => setSelectedFactionId(e.target.value)}
                className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors font-mono"
              >
                {FACTIONS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} ({f.alias})
                  </option>
                ))}
              </select>
            </div>

            {/* Marvel Hero Avatar Picker */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-2">
                Choose Hero Avatar Seal
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {HERO_AVATARS.map((avatar) => {
                  const isChosen = selectedAvatar.id === avatar.id;
                  return (
                    <button
                      type="button"
                      key={avatar.id}
                      data-feature={avatar.name.toUpperCase()}
                      data-feature-color={avatar.color}
                      onClick={() => handleAvatarSelect(avatar)}
                      className={`flex flex-col items-center p-2 rounded-xl border transition-all cursor-pointer ${
                        isChosen
                          ? "bg-white/15 border-red-500 shadow-[0_0_12px_rgba(226,54,54,0.4)] scale-105"
                          : "bg-black/40 border-white/10 hover:border-white/20 text-zinc-400"
                      }`}
                    >
                      <div
                        className="h-8 w-8 rounded-full flex items-center justify-center font-black text-xs text-white mb-1 shadow"
                        style={{ backgroundColor: avatar.color }}
                      >
                        {avatar.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-[10px] font-mono truncate w-full text-center text-zinc-200">
                        {avatar.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GitHub / Portfolio */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                <span>GitHub / Portfolio Tag</span>
              </label>
              <input
                type="text"
                value={githubHandle}
                onChange={(e) => setGithubHandle(e.target.value)}
                placeholder="github.com/your-username"
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white font-mono font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>CLAIM OFFICIAL CLEARANCE PASS</span>
            </button>
          </form>
        </div>

        {/* Right Live S.H.I.E.L.D. Badge Preview */}
        <div className="lg:col-span-6 flex flex-col items-center w-full">
          <div className="w-full max-w-md">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>LIVE HOLOGRAPHIC BADGE PREVIEW</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYNCHRONIZED
              </span>
            </div>

            {/* S.H.I.E.L.D. ID Card Element */}
            <div
              id="shield-pass-card"
              data-feature="SHIELD BADGE"
              data-feature-color="#e23636"
              className="relative rounded-2xl bg-gradient-to-b from-[#101424] via-[#090d18] to-[#04060d] border-2 border-red-500/50 p-6 sm:p-7 shadow-[0_0_50px_rgba(226,54,54,0.3)] overflow-hidden cursor-default"
            >
              {/* Card Holographic Watermark Shield */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <Shield className="h-56 w-56 text-white" />
              </div>

              {/* Pass Top Header */}
              <div className="flex items-center justify-between border-b border-red-500/30 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xs font-mono shadow-md">
                    GFG
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-red-400 font-bold uppercase">
                      S.H.I.E.L.D. CLEARANCE DIVISION
                    </div>
                    <div className="text-xs font-black text-white uppercase">
                      BENNETT UNIVERSITY SECTOR
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                    LVL 7 // OMEGA
                  </span>
                  <div className="text-[9px] font-mono text-zinc-500 mt-0.5">
                    {ticketId}
                  </div>
                </div>
              </div>

              {/* Middle Section: Avatar + Details */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-20 w-20 rounded-2xl flex flex-col items-center justify-center font-black text-white text-lg font-mono border-2 shadow-xl shrink-0"
                  style={{
                    backgroundColor: `${selectedAvatar.color}25`,
                    borderColor: selectedAvatar.color,
                    boxShadow: `0 0 20px ${selectedAvatar.color}40`,
                  }}
                >
                  <span>{selectedAvatar.name.slice(0, 2).toUpperCase()}</span>
                  <span className="text-[9px] font-mono font-normal opacity-80 mt-0.5">
                    HERO SEAL
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    OPERATIVE CALLSIGN
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white truncate uppercase">
                    {agentName || "UNKNOWN OPERATIVE"}
                  </h3>
                  <div className="text-xs font-mono text-amber-400 font-bold truncate">
                    {university || "Bennett University"}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-300 mt-1 truncate">
                    Track: {role}
                  </div>
                </div>
              </div>

              {/* Security Details Grid */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-black/70 border border-white/10 mb-5 text-[11px] font-mono">
                <div>
                  <span className="text-zinc-500 block text-[9px] uppercase">
                    HERO AVATAR
                  </span>
                  <span className="font-bold text-white">
                    {selectedAvatar.name} ({selectedAvatar.badge})
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] uppercase">
                    COORDINATES
                  </span>
                  <span className="font-bold text-cyan-400">BENNETT CAMPUS</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] uppercase">
                    DATE ALLOCATED
                  </span>
                  <span className="font-bold text-zinc-300">OCTOBER 16–18, 2026</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] uppercase">
                    HACKER HANDLE
                  </span>
                  <span className="font-bold text-zinc-300">@{githubHandle || "hacker"}</span>
                </div>
              </div>

              {/* Bottom Hologram Barcode & Verification */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <QrCode className="h-8 w-8 text-zinc-300" />
                  <div className="text-[9px] font-mono text-zinc-500 leading-tight">
                    AUTHENTICATED S.H.I.E.L.D. TICKET
                    <br />
                    GEEKSFORGEEKS BENNETT CHAPTER
                  </div>
                </div>
                <div className="h-6 w-28 bg-gradient-to-r from-red-600 via-amber-400 to-cyan-400 rounded-sm opacity-80" />
              </div>
            </div>

            {/* Post Registration Confirmation */}
            {isRegistered && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono animate-in fade-in duration-300">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>REGISTRATION SUCCESSFUL // S.H.I.E.L.D. PASS ISSUED!</span>
                </div>
                <p className="text-[11px] text-zinc-300 font-normal">
                  Your operative dossier has been synchronized with the GeeksforGeeks
                  Bennett Chapter database. Show this digital badge or your Pass ID at
                  the registration bay on Oct 16.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(ticketId);
                      soundFX.playClick(1000);
                      alert("Pass ID copied to clipboard: " + ticketId);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-[10px] font-bold cursor-pointer"
                  >
                    <Copy className="h-3 w-3" />
                    <span>COPY ID ({ticketId})</span>
                  </button>
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 text-white hover:bg-white/20 text-[10px] font-bold cursor-pointer"
                  >
                    <Download className="h-3 w-3" />
                    <span>PRINT PASS</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
