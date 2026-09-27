"use client";

import React, { useState } from "react";
import { Sparkles, RotateCcw, AlertTriangle } from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function InfinityGauntletSnap() {
  const [isSnapped, setIsSnapped] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [dustedCount, setDustedCount] = useState(0);

  const handleThanosSnap = () => {
    if (isSnapping) return;
    setIsSnapping(true);
    soundFX.playThanosSnap();

    // Find random card elements to disintegrate
    const candidates = document.querySelectorAll(
      ".snap-target, .glass-panel, .glass-panel-elevated"
    );
    const toDust: Element[] = [];

    candidates.forEach((el, idx) => {
      // Dust roughly 50% of them
      if (idx % 2 === 0) {
        toDust.push(el);
      }
    });

    setDustedCount(toDust.length);

    // Apply disintegration class sequentially
    toDust.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("dusted-element");
      }, index * 80);
    });

    setTimeout(() => {
      setIsSnapped(true);
      setIsSnapping(false);
    }, toDust.length * 80 + 600);
  };

  const handleTimeStoneRewind = () => {
    soundFX.playTimeRewind();
    const dusted = document.querySelectorAll(".dusted-element");
    dusted.forEach((el) => {
      el.classList.remove("dusted-element");
      // Add brief green temporal rewind flash
      el.classList.add("ring-2", "ring-emerald-400", "transition-all", "duration-1000");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-emerald-400");
      }, 1200);
    });

    setIsSnapped(false);
    setDustedCount(0);
  };

  return (
    <>
      {/* Top Warning Banner when Snapped */}
      {isSnapped && (
        <div className="fixed top-16 left-0 right-0 z-50 flex items-center justify-between bg-gradient-to-r from-purple-950/95 via-red-950/95 to-black/95 px-6 py-3 border-y border-amber-500/40 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-500">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-400 animate-pulse" />
            <div className="text-xs sm:text-sm font-mono text-zinc-200">
              <span className="font-bold text-amber-400">THE BLIP OCCURRED:</span>{" "}
              {dustedCount} digital elements were reduced to cosmic dust across the multiverse.
            </div>
          </div>
          <button
            onClick={handleTimeStoneRewind}
            className="flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-1.5 text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 animate-spin-reverse" />
            <span>ACTIVATE TIME STONE REVERSE</span>
          </button>
        </div>
      )}

      {/* Floating Gauntlet Trigger */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <div className="absolute -top-10 right-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/90 border border-amber-500/40 text-[11px] font-mono text-amber-300 px-2.5 py-1 rounded shadow-xl">
          {isSnapped ? "Time Stone: Restore Multiverse" : "Thanos Snap // Disintegrate 50%"}
        </div>

        <button
          data-feature={isSnapped ? "TIME REVERSE" : "THANOS SNAP"}
          data-feature-color={isSnapped ? "#10b981" : "#fbbf24"}
          onClick={isSnapped ? handleTimeStoneRewind : handleThanosSnap}
          disabled={isSnapping}
          aria-label="Infinity Gauntlet Snap Easter Egg"
          className={`relative flex items-center justify-center h-14 w-14 rounded-full border-2 transition-all duration-300 shadow-2xl cursor-pointer ${
            isSnapped
              ? "bg-gradient-to-br from-emerald-900 to-black border-emerald-400 shadow-emerald-500/50 hover:scale-110 active:scale-95 animate-pulse"
              : "bg-gradient-to-br from-amber-600 via-amber-800 to-black border-amber-400 shadow-amber-500/40 hover:scale-110 active:scale-95"
          }`}
        >
          {/* Infinity Stones Ambient Ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: "12s" }}>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span className="absolute top-1/4 -right-1 h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            <span className="absolute bottom-1/4 -right-1 h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
            <span className="absolute bottom-1/4 -left-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span className="absolute top-1/4 -left-1 h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]" />
          </div>

          {isSnapped ? (
            <RotateCcw className="h-6 w-6 text-emerald-300" />
          ) : (
            <div className="relative">
              <Sparkles className="h-6 w-6 text-amber-300" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
