"use client";

import React, { useEffect } from "react";
import { X, Play, Volume2, VolumeX, ShieldCheck } from "lucide-react";
import { soundFx } from "@/lib/sound";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [muted, setMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl glass-panel-elevated rounded-xl border border-[#ff2a55]/40 overflow-hidden shadow-[0_0_60px_rgba(255,42,85,0.25)] card-beveled"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#06080e]/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a55] animate-ping" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
              CINEMATIC BRIEFING // PROJECT NEXUS-X DEPLOYMENT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setMuted(!muted);
                soundFx.playClick(600);
              }}
              className="p-1.5 text-white/60 hover:text-white transition-colors cursor-pointer rounded bg-white/5"
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick(400);
                onClose();
              }}
              className="p-1.5 text-white/60 hover:text-[#ff2a55] transition-colors cursor-pointer rounded bg-white/5"
              title="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {/* Animated Ambient HUD grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

          {/* Fallback interactive HTML5 video presentation */}
          <video
            autoPlay
            loop
            playsInline
            muted={muted}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-42998-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* HUD Overlays */}
          <div className="absolute top-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded border border-white/10 font-mono text-[10px] text-white/70">
            <div className="text-[#ff2a55] font-semibold">FEED: SEC-ORBITAL-07</div>
            <div>STATUS: ENCRYPTED SYNC</div>
            <div>RESOLUTION: 3840x2160 UHD</div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 bg-black/60 backdrop-blur-md rounded border border-white/10 font-mono text-[10px] text-white/70">
            <ShieldCheck size={14} className="text-[#00f0ff]" />
            <span>KINETIC TELEMETRY ACTIVE</span>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#06080e]/95 text-xs font-mono text-white/60">
          <div className="flex items-center gap-4">
            <span>BITRATE: 48 Mbps</span>
            <span className="hidden sm:inline">CODEC: Q-HEVC // LOSSLESS</span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick(500);
              onClose();
            }}
            className="px-4 py-1.5 btn-clip bg-[#ff2a55] text-white font-semibold hover:bg-[#ff426a] transition-colors cursor-pointer text-[11px]"
          >
            DISMISS BRIEFING
          </button>
        </div>
      </div>
    </div>
  );
}
