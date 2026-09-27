"use client";

import React, { useEffect, useRef } from "react";

// Marvel Multiverse Vibrancy Spectrum
const MARVEL_SPECTRUM = [
  "#00f0ff", // Tesseract Cyan
  "#fbbf24", // Arc Reactor Gold
  "#e23636", // Stark Crimson
  "#10b981", // Time Stone Emerald
  "#a855f7", // Power Stone Purple
  "#f97316", // Soul Stone Orange
  "#38bdf8", // Sonic Sky
  "#ec4899", // Quantum Magenta
  "#06b6d4", // Electric Aqua
  "#f59e0b", // Amber Flare
];

function resolveOptionColor(el: HTMLElement | null, text: string): string {
  // 1. Direct explicit attribute from element or parent
  const explicit =
    el?.getAttribute("data-feature-color") ||
    el?.getAttribute("data-cursor-color") ||
    el?.closest("[data-feature-color]")?.getAttribute("data-feature-color") ||
    el?.closest("[data-cursor-color]")?.getAttribute("data-cursor-color");

  if (explicit && (explicit.startsWith("#") || explicit.startsWith("rgb"))) {
    return explicit;
  }

  // 2. Semantic keyword matching from option text & context
  const upper = text.toUpperCase();
  if (
    upper.includes("SPACE") ||
    upper.includes("CYAN") ||
    upper.includes("TESSERACT") ||
    upper.includes("SHIELD DENSITY") ||
    upper.includes("WIREFRAME")
  ) {
    return "#00f0ff";
  }
  if (
    upper.includes("TIME") ||
    upper.includes("EMERALD") ||
    upper.includes("TELEMETRY") ||
    upper.includes("WAKANDA") ||
    upper.includes("HULK")
  ) {
    return "#10b981";
  }
  if (
    upper.includes("REALITY") ||
    upper.includes("ASSEMBLE") ||
    upper.includes("PASS") ||
    upper.includes("MARK") ||
    upper.includes("CAPTAIN") ||
    upper.includes("BRIEFING")
  ) {
    return "#ef4444";
  }
  if (
    upper.includes("POWER") ||
    upper.includes("WAR MACHINE") ||
    upper.includes("PURPLE") ||
    upper.includes("OVERCLOCK")
  ) {
    return "#a855f7";
  }
  if (
    upper.includes("MIND") ||
    upper.includes("GOLD") ||
    upper.includes("TREASURY") ||
    upper.includes("PRIZE") ||
    upper.includes("CHAMPION") ||
    upper.includes("UNIBEAM") ||
    upper.includes("AUDIO") ||
    upper.includes("TIMELINE") ||
    upper.includes("TEASER")
  ) {
    return "#fbbf24";
  }
  if (upper.includes("SOUL") || upper.includes("ORANGE")) {
    return "#f97316";
  }
  if (upper.includes("STEALTH")) {
    return "#94a3b8";
  }
  if (upper.includes("DISCORD")) {
    return "#818cf8";
  }
  if (upper.includes("INSTAGRAM")) {
    return "#f43f5e";
  }
  if (upper.includes("LINKEDIN")) {
    return "#0ea5e9";
  }

  // 3. Fallback: Hash text to deterministically pick a distinct glowing color for every option
  let hash = 0;
  for (let i = 0; i < upper.length; i++) {
    hash = (hash << 5) - hash + upper.charCodeAt(i);
    hash |= 0;
  }
  const idx = Math.abs(hash) % MARVEL_SPECTRUM.length;
  return MARVEL_SPECTRUM[idx];
}

export default function AetherisCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorContentRef = useRef<HTMLDivElement>(null);
  const cursorFeatureTextRef = useRef<HTMLSpanElement>(null);
  const cursorTagRef = useRef<HTMLDivElement>(null);
  const cursorTagNameRef = useRef<HTMLSpanElement>(null);
  const cursorTagPingRef = useRef<HTMLSpanElement>(null);
  const cursorTagPrefixRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable only on touchscreens without mouse
    if (window.matchMedia("(pointer: coarse) and (hover: none)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorContent = cursorContentRef.current;
    const cursorFeatureText = cursorFeatureTextRef.current;
    const cursorTag = cursorTagRef.current;
    const cursorTagName = cursorTagNameRef.current;
    const cursorTagPing = cursorTagPingRef.current;
    const cursorTagPrefix = cursorTagPrefixRef.current;

    if (!cursor || !cursorTag) return;

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
      }

      // Move cursor and tag simultaneously in real time
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      cursorTag.style.left = e.clientX + 22 + "px";
      cursorTag.style.top = e.clientY - 36 + "px";
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const featEl = target.closest(
        "[data-cursor-text], [data-feature], .card-beveled"
      ) as HTMLElement | null;

      if (featEl) {
        let featName =
          featEl.getAttribute("data-cursor-text") ||
          featEl.getAttribute("data-feature") ||
          "";

        if (!featName) {
          const title = featEl.getAttribute("title");
          if (title && title.length < 24) {
            featName = title;
          } else {
            const aria = featEl.getAttribute("aria-label");
            if (aria) {
              featName = aria;
            } else {
              const text = (featEl.innerText || "").trim().split("\n")[0];
              if (text && text.length <= 18) {
                featName = text;
              } else {
                featName = "SYSTEM";
              }
            }
          }
        }

        featName = featName.replace(/[›✕✓•→←]/g, "").trim().toUpperCase();
        if (featName.length > 14) {
          featName = featName.slice(0, 12) + "..";
        }

        // Dynamically resolve the unique color for this specific option
        const color = resolveOptionColor(featEl, featName);

        cursor.style.width = "88px";
        cursor.style.height = "88px";
        cursor.style.backgroundColor = "rgba(4, 8, 20, 0.88)";
        cursor.style.borderColor = color;
        cursor.style.borderWidth = "2px";
        cursor.style.boxShadow = `0 0 32px ${color}75, inset 0 0 16px ${color}35`;

        if (cursorContent && cursorFeatureText) {
          cursorContent.classList.remove("hidden");
          cursorContent.classList.add("flex");
          cursorFeatureText.innerText = featName;
          cursorFeatureText.style.color = color;
        }

        if (cursorTag && cursorTagName) {
          cursorTag.classList.remove("hidden");
          cursorTag.classList.add("flex");
          cursorTagName.innerText = featName;
          cursorTag.style.borderColor = color;
          cursorTag.style.boxShadow = `0 0 25px ${color}50`;
        }

        if (cursorTagPing) {
          cursorTagPing.style.backgroundColor = color;
        }

        if (cursorTagPrefix) {
          cursorTagPrefix.style.color = color;
        }
      } else {
        const btn = target.closest(
          "button, a, select, input, [role='button'], .cursor-pointer"
        ) as HTMLElement | null;

        if (btn) {
          const btnText = (
            btn.getAttribute("data-cursor-text") ||
            btn.getAttribute("aria-label") ||
            btn.innerText ||
            "ENGAGE"
          ).trim();
          const btnColor = resolveOptionColor(btn, btnText);

          cursor.style.width = "48px";
          cursor.style.height = "48px";
          cursor.style.backgroundColor = `${btnColor}25`;
          cursor.style.borderColor = btnColor;
          cursor.style.borderWidth = "1.5px";
          cursor.style.boxShadow = `0 0 18px ${btnColor}55`;
        } else {
          cursor.style.width = "16px";
          cursor.style.height = "16px";
          cursor.style.backgroundColor = "rgba(226, 54, 54, 0.9)";
          cursor.style.borderColor = "rgba(255, 255, 255, 0.6)";
          cursor.style.borderWidth = "1px";
          cursor.style.boxShadow = "0 0 10px rgba(226, 54, 54, 0.6)";
        }

        if (cursorContent) {
          cursorContent.classList.add("hidden");
          cursorContent.classList.remove("flex");
        }
        if (cursorTag) {
          cursorTag.classList.add("hidden");
          cursorTag.classList.remove("flex");
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
      if (cursorTag) {
        cursorTag.classList.add("hidden");
        cursorTag.classList.remove("flex");
      }
    };

    const handleMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="hidden md:block select-none pointer-events-none">
      {/* Stark HUD Reticle Cursor (Dynamic Option Colors) */}
      <div
        id="custom-cursor"
        ref={cursorRef}
        style={{ opacity: 0, width: "16px", height: "16px" }}
        className="rounded-full bg-red-600/90 border border-white/60 shadow-[0_0_10px_rgba(226,54,54,0.7)] flex flex-col items-center justify-center font-mono pointer-events-none fixed z-[9999]"
      >
        <div
          id="cursor-content"
          ref={cursorContentRef}
          className="hidden flex-col items-center justify-center p-1 text-center"
        >
          <span
            id="cursor-feature-text"
            ref={cursorFeatureTextRef}
            className="text-[9px] font-black uppercase tracking-wider text-cyan-300 leading-tight"
          />
          <span className="text-[7px] text-zinc-400 tracking-widest uppercase">
            TARGET ACQUIRED
          </span>
        </div>
      </div>

      {/* Floating Holographic Cursor Tag (Dynamic Option Colors) */}
      <div
        id="cursor-tag"
        ref={cursorTagRef}
        className="fixed pointer-events-none z-[10000] hidden items-center gap-1.5 px-3 py-1 rounded-md bg-black/90 border border-cyan-400 text-cyan-300 font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-md"
      >
        <span
          ref={cursorTagPingRef}
          className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"
        />
        <span ref={cursorTagPrefixRef}>FEATURE:</span>
        <span id="cursor-tag-name" ref={cursorTagNameRef} className="text-white" />
      </div>
    </div>
  );
}
