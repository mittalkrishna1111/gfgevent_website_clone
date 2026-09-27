"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "hover" | "feature"
  >("default");
  const [featureName, setFeatureName] = useState<string>("");
  const [featureColor, setFeatureColor] = useState<string>("#00f0ff");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for explicit data-feature or data-cursor
      const featureElement = target.closest(
        "[data-feature], [data-cursor]"
      ) as HTMLElement | null;

      if (featureElement) {
        const feature =
          featureElement.getAttribute("data-feature") ||
          featureElement.getAttribute("data-cursor") ||
          "";

        const customColor =
          featureElement.getAttribute("data-feature-color") || "#00f0ff";

        if (feature) {
          setCursorVariant("feature");
          setFeatureName(feature);
          setFeatureColor(customColor);
          return;
        }
      }

      // Check general interactive elements
      const interactive = target.closest(
        "button, a, input, select, textarea"
      ) as HTMLElement | null;

      if (interactive) {
        const titleOrLabel =
          interactive.getAttribute("title") ||
          interactive.getAttribute("aria-label");

        if (titleOrLabel && titleOrLabel.length <= 20) {
          setCursorVariant("feature");
          setFeatureName(titleOrLabel);
          setFeatureColor("#fbbf24");
        } else {
          setCursorVariant("hover");
          setFeatureName("");
        }
      } else {
        setCursorVariant("default");
        setFeatureName("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Feature HUD Hologram Label */}
      <AnimatePresence>
        {cursorVariant === "feature" && featureName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.15 }}
            style={{
              left: mousePosition.x + 18,
              top: mousePosition.y - 36,
            }}
            className="fixed pointer-events-none z-50 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/90 border backdrop-blur-md shadow-2xl font-mono text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-ping"
              style={{ backgroundColor: featureColor }}
            />
            <span style={{ color: featureColor }}>FEATURE:</span>
            <span className="text-white">{featureName}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Reticle Cursor Body */}
      <motion.div
        className="rounded-full flex items-center justify-center font-mono backdrop-blur-[3px] select-none text-center relative"
        animate={{
          x:
            cursorVariant === "feature"
              ? mousePosition.x - 44
              : cursorVariant === "hover"
              ? mousePosition.x - 24
              : mousePosition.x - 8,
          y:
            cursorVariant === "feature"
              ? mousePosition.y - 44
              : cursorVariant === "hover"
              ? mousePosition.y - 24
              : mousePosition.y - 8,
          width:
            cursorVariant === "feature"
              ? 88
              : cursorVariant === "hover"
              ? 48
              : 16,
          height:
            cursorVariant === "feature"
              ? 88
              : cursorVariant === "hover"
              ? 48
              : 16,
          backgroundColor:
            cursorVariant === "feature"
              ? "rgba(4, 8, 20, 0.8)"
              : cursorVariant === "hover"
              ? "rgba(226, 54, 54, 0.25)"
              : "rgba(226, 54, 54, 0.9)",
          borderColor:
            cursorVariant === "feature"
              ? featureColor
              : cursorVariant === "hover"
              ? "rgba(251, 191, 36, 0.9)"
              : "rgba(255, 255, 255, 0.6)",
          borderWidth: cursorVariant === "feature" ? 2 : 1.5,
          boxShadow:
            cursorVariant === "feature"
              ? `0 0 25px ${featureColor}50, inset 0 0 15px ${featureColor}30`
              : cursorVariant === "hover"
              ? "0 0 18px rgba(251, 191, 36, 0.4)"
              : "0 0 10px rgba(226, 54, 54, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 28,
          mass: 0.4,
        }}
      >
        {/* Stark HUD Reticle Crosshairs when in Feature mode */}
        {cursorVariant === "feature" && (
          <>
            {/* Rotating Outer Tech Ring */}
            <div
              className="absolute inset-1 rounded-full border border-dashed opacity-40 animate-spin"
              style={{
                borderColor: featureColor,
                animationDuration: "9s",
              }}
            />

            {/* Inner Center Content */}
            <div className="flex flex-col items-center justify-center p-1 z-10">
              <span
                className="text-[9px] font-black uppercase tracking-wider leading-tight max-w-[76px] truncate"
                style={{ color: featureColor }}
              >
                {featureName}
              </span>
              <span className="text-[7px] text-zinc-400 font-mono tracking-widest uppercase">
                TARGET ACQUIRED
              </span>
            </div>

            {/* Corner Bracket Reticles */}
            <span
              className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2"
              style={{ borderColor: featureColor }}
            />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2"
              style={{ borderColor: featureColor }}
            />
            <span
              className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2"
              style={{ borderColor: featureColor }}
            />
            <span
              className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2"
              style={{ borderColor: featureColor }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
