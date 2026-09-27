"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/sound";
import { Play, Pause, Volume2, VolumeX, Music, Radio } from "lucide-react";

export default function MarvelMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Sync state if toggled from navbar
    const interval = setInterval(() => {
      if (soundFx.isMusicPlaying !== isPlaying) {
        setIsPlaying(soundFx.isMusicPlaying);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleToggle = () => {
    soundFx.playClick(1000);
    const state = soundFx.toggleBgm();
    setIsPlaying(state);
  };

  return (
    <div
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 transition-all duration-300"
      data-cursor-text={isPlaying ? "PAUSE SCORE" : "PLAY SCORE"}
      data-feature-color="#fbbf24"
    >
      <div
        className={`glass-panel-elevated rounded-2xl border transition-all duration-300 p-2 sm:p-2.5 flex items-center gap-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)] card-beveled ${
          isPlaying
            ? "border-[#fbbf24]/50 shadow-[0_0_25px_rgba(251,191,36,0.25)] bg-[#04060d]/90"
            : "border-white/15 bg-[#04060d]/80 hover:border-white/30"
        }`}
      >
        {/* Play / Pause Interactive Button */}
        <button
          onClick={handleToggle}
          aria-label={isPlaying ? "Pause Background Music" : "Play Background Music"}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? "bg-[#fbbf24] text-black shadow-[0_0_15px_#fbbf24]"
              : "bg-[#e23636] hover:bg-[#ef4444] text-white hover:scale-105"
          }`}
        >
          {isPlaying ? (
            <Pause size={16} className="fill-black" />
          ) : (
            <Play size={16} className="fill-white ml-0.5" />
          )}
        </button>

        {/* Track Info & Equalizer */}
        <div className="flex flex-col pr-2">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                isPlaying ? "text-[#fbbf24]" : "text-white/80"
              }`}
            >
              {isPlaying ? "MARVEL SCORE: PLAYING" : "MARVEL BACKGROUND SCORE"}
            </span>

            {/* Equalizer Visualizer Bars */}
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "100%", animationDuration: "0.6s" }} />
                <span className="w-0.5 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "50%", animationDuration: "0.8s" }} />
                <span className="w-0.5 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "75%", animationDuration: "0.5s" }} />
                <span className="w-0.5 bg-[#fbbf24] rounded-full animate-bounce" style={{ height: "30%", animationDuration: "0.9s" }} />
              </div>
            )}
          </div>

          <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase">
            {isPlaying ? "AVENGERS MULTIVERSE SUITE // 55HZ PAD" : "CLICK TO ENGAGE IMMERSIVE AUDIO"}
          </span>
        </div>
      </div>
    </div>
  );
}
