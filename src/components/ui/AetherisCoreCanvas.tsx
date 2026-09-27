"use client";

import React, { useEffect, useRef, useState } from "react";
import { soundFx } from "@/lib/sound";

export type CoreMode = "OVERDRIVE" | "STEALTH" | "HYPER-FLUX" | "DEFENSE";

interface CoreModeConfig {
  name: CoreMode;
  color: string;
  glow: string;
  speed: number;
  particles: number;
  label: string;
  status: string;
}

const MODES: Record<CoreMode, CoreModeConfig> = {
  OVERDRIVE: {
    name: "OVERDRIVE",
    color: "#ff2a55",
    glow: "rgba(255, 42, 85, 0.6)",
    speed: 1.8,
    particles: 140,
    label: "MAXIMUM KINETIC YIELD",
    status: "CRITICAL FLUX // 4.8 GW",
  },
  STEALTH: {
    name: "STEALTH",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.4)",
    speed: 0.6,
    particles: 60,
    label: "REFRACTIVE MANTLE ACTIVE",
    status: "THERMAL SIGNATURE // < 3K",
  },
  "HYPER-FLUX": {
    name: "HYPER-FLUX",
    color: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.6)",
    speed: 1.4,
    particles: 160,
    label: "QUANTUM COMPLIANCE SYNC",
    status: "SYNAPSE LINK // 0.12ms",
  },
  DEFENSE: {
    name: "DEFENSE",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.6)",
    speed: 0.9,
    particles: 100,
    label: "AEGIS SHIELD PROJECTION",
    status: "LATTICE HARDENED // 140 GPa",
  },
};

export default function AetherisCoreCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMode, setCurrentMode] = useState<CoreMode>("OVERDRIVE");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth || 560);
    let height = (canvas.height = canvas.offsetHeight || 560);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 560;
      height = canvas.height = canvas.offsetHeight || 560;
    };
    window.addEventListener("resize", handleResize);

    // Particle cloud initialization
    const particles = Array.from({ length: 140 }, () => ({
      x: (Math.random() - 0.5) * width * 0.8,
      y: (Math.random() - 0.5) * height * 0.8,
      z: Math.random() * 400 - 200,
      radius: Math.random() * 2 + 0.8,
      speedZ: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
      angle: Math.random() * Math.PI * 2,
      orbitRadius: Math.random() * 160 + 60,
      orbitSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let rotationAngle = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cfg = MODES[currentMode];
      rotationAngle += 0.012 * cfg.speed;

      // Smooth parallax tilt towards cursor
      currentTiltX += (targetTiltX - currentTiltX) * 0.06;
      currentTiltY += (targetTiltY - currentTiltY) * 0.06;

      const centerX = width / 2 + currentTiltX * 24;
      const centerY = height / 2 + currentTiltY * 24;

      // 1. Ambient Glow Backing
      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        width * 0.45
      );
      grad.addColorStop(0, cfg.glow);
      grad.addColorStop(0.4, "rgba(3, 5, 9, 0.4)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Outer Rotating Concentric Rings with Segmented Dashes
      const rings = [
        { radius: 210, speed: -0.6, dash: [4, 12], width: 1.2, alpha: 0.3 },
        { radius: 175, speed: 0.8, dash: [14, 28, 4, 14], width: 1.5, alpha: 0.5 },
        { radius: 140, speed: -1.2, dash: [40, 20], width: 2, alpha: 0.7 },
        { radius: 105, speed: 1.5, dash: [8, 12], width: 1.8, alpha: 0.85 },
        { radius: 75, speed: -2.0, dash: [24, 12, 6, 12], width: 2.2, alpha: 0.95 },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotationAngle * ring.speed);

        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.setLineDash(ring.dash);
        ctx.lineWidth = ring.width;
        ctx.strokeStyle = cfg.color;
        ctx.globalAlpha = ring.alpha;
        ctx.stroke();

        // High-tech ring tick nodes
        for (let i = 0; i < 4; i++) {
          const a = (i * Math.PI) / 2;
          const nx = Math.cos(a) * ring.radius;
          const ny = Math.sin(a) * ring.radius;
          ctx.beginPath();
          ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = cfg.color;
          ctx.fill();
        }

        ctx.restore();
      });

      // 3. 3D Particle Swarm Orbiting Core
      particles.slice(0, cfg.particles).forEach((p) => {
        p.angle += p.orbitSpeed * cfg.speed;
        p.z += p.speedZ * cfg.speed;
        if (p.z > 200) p.z = -200;
        if (p.z < -200) p.z = 200;

        const fov = 350;
        const scale = fov / (fov + p.z);
        const px = centerX + Math.cos(p.angle) * p.orbitRadius * scale;
        const py = centerY + Math.sin(p.angle) * (p.orbitRadius * 0.45) * scale;

        ctx.beginPath();
        ctx.arc(px, py, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = cfg.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(0.9, (p.z + 200) / 400));
        ctx.shadowBlur = 8;
        ctx.shadowColor = cfg.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Central Reactor Core (Hexagonal Micro-Torus)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotationAngle * 0.8);

      // Inner polygon
      ctx.beginPath();
      const sides = 6;
      const coreR = 45 + Math.sin(rotationAngle * 3) * 3;
      for (let i = 0; i < sides; i++) {
        const a = (i * 2 * Math.PI) / sides;
        const x = Math.cos(a) * coreR;
        const y = Math.sin(a) * coreR;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = cfg.color;
      ctx.fillStyle = "rgba(4, 6, 12, 0.85)";
      ctx.shadowBlur = 24;
      ctx.shadowColor = cfg.color;
      ctx.fill();
      ctx.stroke();

      // Pulsing energy centroid
      ctx.beginPath();
      const pulseR = 18 + Math.sin(rotationAngle * 4) * 4;
      ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = cfg.color;
      ctx.shadowBlur = 30;
      ctx.shadowColor = cfg.color;
      ctx.fill();

      // Core white-hot spark
      ctx.beginPath();
      ctx.arc(0, 0, pulseR * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      ctx.restore();

      // 5. Crosshair HUD lines
      ctx.strokeStyle = cfg.color;
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);

      // Horizontal HUD line
      ctx.beginPath();
      ctx.moveTo(centerX - 240, centerY);
      ctx.lineTo(centerX - 120, centerY);
      ctx.moveTo(centerX + 120, centerY);
      ctx.lineTo(centerX + 240, centerY);
      ctx.stroke();

      // Vertical HUD line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 240);
      ctx.lineTo(centerX, centerY - 120);
      ctx.moveTo(centerX, centerY + 120);
      ctx.lineTo(centerX, centerY + 240);
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleSelectMode = (mode: CoreMode) => {
    setCurrentMode(mode);
    soundFx.playClick(mode === "OVERDRIVE" ? 1100 : mode === "HYPER-FLUX" ? 1300 : 800);
  };

  const activeModeConfig = MODES[currentMode];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative flex flex-col items-center justify-center w-full max-w-[580px] aspect-square select-none group"
    >
      {/* Canvas Viewport */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `perspective(800px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
            : "none",
        }}
      />

      {/* Futuristic Corner HUD Brackets */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/20 pointer-events-none group-hover:border-[#ff2a55] transition-colors" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/20 pointer-events-none group-hover:border-[#ff2a55] transition-colors" />
      <div className="absolute bottom-16 left-2 w-8 h-8 border-b-2 border-l-2 border-white/20 pointer-events-none group-hover:border-[#ff2a55] transition-colors" />
      <div className="absolute bottom-16 right-2 w-8 h-8 border-b-2 border-r-2 border-white/20 pointer-events-none group-hover:border-[#ff2a55] transition-colors" />

      {/* Floating HUD Telemetry Readout */}
      <div className="absolute top-4 left-6 flex items-center gap-2 pointer-events-none text-[10px] font-mono tracking-widest text-white/60">
        <span
          className="w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: activeModeConfig.color }}
        />
        <span>REACTOR STATUS // {activeModeConfig.status}</span>
      </div>

      <div className="absolute top-4 right-6 text-right pointer-events-none text-[10px] font-mono tracking-widest text-white/50">
        <span>FREQ: 142.8 THz</span>
      </div>

      {/* Interactive Mode Protocol Selector */}
      <div className="absolute -bottom-2 z-20 flex flex-wrap items-center justify-center gap-1.5 p-1.5 glass-panel rounded-full border border-white/10 backdrop-blur-xl">
        {(Object.keys(MODES) as CoreMode[]).map((mode) => {
          const isActive = currentMode === mode;
          const cfg = MODES[mode];
          return (
            <button
              key={mode}
              onClick={() => handleSelectMode(mode)}
              className={`px-3 py-1 text-[11px] font-mono tracking-wider transition-all duration-200 rounded-full flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-white/10 text-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full transition-transform"
                style={{
                  backgroundColor: cfg.color,
                  transform: isActive ? "scale(1.4)" : "scale(1)",
                  boxShadow: isActive ? `0 0 8px ${cfg.color}` : "none",
                }}
              />
              {mode}
            </button>
          );
        })}
      </div>
    </div>
  );
}
