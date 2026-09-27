"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { soundFx } from "@/lib/sound";

export type ArcProtocol = "MARK LXXXV" | "HULKBUSTER" | "STEALTH OPS" | "TESSERACT OVERCLOCK";

interface ProtocolConfig {
  name: ArcProtocol;
  color: string;
  glow: string;
  speed: number;
  particles: number;
  label: string;
  status: string;
}

const PROTOCOLS: Record<ArcProtocol, ProtocolConfig> = {
  "MARK LXXXV": {
    name: "MARK LXXXV",
    color: "#e23636",
    glow: "rgba(226, 54, 54, 0.65)",
    speed: 1.6,
    particles: 140,
    label: "NANOTECH UNIBEAM ARMED",
    status: "ARC FLUX // 4.8 GW YIELD",
  },
  HULKBUSTER: {
    name: "HULKBUSTER",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.65)",
    speed: 0.9,
    particles: 90,
    label: "VERONICA SATELLITE LINK",
    status: "SEISMIC REACTION // 140 GPa",
  },
  "STEALTH OPS": {
    name: "STEALTH OPS",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.45)",
    speed: 0.7,
    particles: 60,
    label: "REFRACTIVE MANTLE ACTIVE",
    status: "RADAR SHADOW // 0.001 dBsm",
  },
  "TESSERACT OVERCLOCK": {
    name: "TESSERACT OVERCLOCK",
    color: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.65)",
    speed: 1.8,
    particles: 160,
    label: "ZERO-POINT SPACE STONE SYNC",
    status: "QUANTUM DELAY // 0.12 ms",
  },
};

const PROTOCOL_SUITS: Record<ArcProtocol, { image: string; name: string; tag: string }> = {
  "MARK LXXXV": {
    image: "/images/heroes/iron-man-85.png",
    name: "MARK LXXXV // NANOTECH",
    tag: "TITANIUM-GOLD NANOPARTICLE COMPOSITE",
  },
  HULKBUSTER: {
    image: "/images/heroes/hulkbuster.png",
    name: "MARK XLIV // HULKBUSTER",
    tag: "VERONICA ORBITAL SEISMIC FRAME",
  },
  "STEALTH OPS": {
    image: "/images/heroes/war-machine.png",
    name: "WAR MACHINE // TACTICAL",
    tag: "STARK-HAMMER VARIABLE ARTILLERY",
  },
  "TESSERACT OVERCLOCK": {
    image: "/images/heroes/iron-man-85.png",
    name: "TESSERACT CHARGED // MK-85",
    tag: "ZERO-POINT SPACE STONE MATRIX",
  },
};

export default function StarkArcReactorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProtocol, setCurrentProtocol] = useState<ArcProtocol>("MARK LXXXV");
  const [displayMode, setDisplayMode] = useState<"suit" | "reactor">("suit");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 560);
    let height = (canvas.height = canvas.offsetHeight || 560);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 560;
      height = canvas.height = canvas.offsetHeight || 560;
    };
    window.addEventListener("resize", handleResize);

    // Particle arc stream
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

      const cfg = PROTOCOLS[currentProtocol];
      rotationAngle += 0.012 * cfg.speed;

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
      grad.addColorStop(0.35, "rgba(4, 6, 13, 0.4)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Concentric Magnetic Confinement Rings
      const rings = [
        { radius: 210, speed: -0.5, dash: [4, 12], width: 1.2, alpha: 0.3 },
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

        // High-tech Arc Reactor solenoid ticks
        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI) / 4;
          const nx = Math.cos(a) * ring.radius;
          const ny = Math.sin(a) * ring.radius;
          ctx.beginPath();
          ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = cfg.color;
          ctx.fill();
        }

        ctx.restore();
      });

      // 3. Orbiting Unibeam Energy Sparks
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

      // 4. Central Stark Arc Reactor Core (Triangular / Hexagonal Core)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotationAngle * 0.8);

      // Outer triangular core chassis (Mark 85 style)
      ctx.beginPath();
      const sides = 3;
      const coreR = 50 + Math.sin(rotationAngle * 3) * 3;
      for (let i = 0; i < sides; i++) {
        const a = (i * 2 * Math.PI) / sides - Math.PI / 2;
        const x = Math.cos(a) * coreR;
        const y = Math.sin(a) * coreR;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = cfg.color;
      ctx.fillStyle = "rgba(4, 6, 13, 0.85)";
      ctx.shadowBlur = 24;
      ctx.shadowColor = cfg.color;
      ctx.fill();
      ctx.stroke();

      // Inner inverted triangle
      ctx.beginPath();
      const innerR = 30;
      for (let i = 0; i < sides; i++) {
        const a = (i * 2 * Math.PI) / sides + Math.PI / 2;
        const x = Math.cos(a) * innerR;
        const y = Math.sin(a) * innerR;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "#fbbf24";
      ctx.stroke();

      // Pulsing Arc centroid (White-hot Unibeam)
      ctx.beginPath();
      const pulseR = 18 + Math.sin(rotationAngle * 4) * 4;
      ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = cfg.color;
      ctx.shadowBlur = 30;
      ctx.shadowColor = cfg.color;
      ctx.fill();

      // Center white core
      ctx.beginPath();
      ctx.arc(0, 0, pulseR * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      ctx.restore();

      // 5. Crosshair HUD lines
      ctx.strokeStyle = cfg.color;
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);

      ctx.beginPath();
      ctx.moveTo(centerX - 240, centerY);
      ctx.lineTo(centerX - 120, centerY);
      ctx.moveTo(centerX + 120, centerY);
      ctx.lineTo(centerX + 240, centerY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 240);
      ctx.lineTo(centerX, centerY - 120);
      ctx.moveTo(centerX, centerY + 120);
      ctx.lineTo(centerX, centerY + 240);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentProtocol, displayMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleSelectProtocol = (p: ArcProtocol) => {
    setCurrentProtocol(p);
    soundFx.playClick(p === "MARK LXXXV" ? 1100 : p === "TESSERACT OVERCLOCK" ? 1300 : 800);
  };

  const activeConfig = PROTOCOLS[currentProtocol];
  const currentSuit = PROTOCOL_SUITS[currentProtocol];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative flex flex-col items-center justify-center w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[580px] aspect-square select-none group"
    >
      {/* Mode Switcher: Holographic Suit Projection vs 3D Arc Reactor Core */}
      <div className="absolute -top-3 sm:-top-4 right-4 z-30 flex items-center p-1 rounded-full glass-panel border border-white/20 backdrop-blur-xl text-[10px] font-mono shadow-lg">
        <button
          onClick={() => {
            setDisplayMode("suit");
            soundFx.playClick(1100);
          }}
          data-cursor-text="HOLOGRAPH"
          data-feature-color="#e23636"
          className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
            displayMode === "suit"
              ? "bg-[#e23636] text-white font-bold shadow-[0_0_15px_rgba(226,54,54,0.6)]"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>SUIT PROJECTION</span>
        </button>
        <button
          onClick={() => {
            setDisplayMode("reactor");
            soundFx.playClick(900);
          }}
          data-cursor-text="ARC CORE"
          data-feature-color="#00f0ff"
          className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
            displayMode === "reactor"
              ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.6)]"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-900" />
          <span>ARC CORE 3D</span>
        </button>
      </div>

      {/* Main Viewport Content */}
      {displayMode === "suit" ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          {/* Holographic Glowing Platform Ring */}
          <div
            className="absolute bottom-10 w-48 sm:w-64 h-14 rounded-full blur-md pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse, ${activeConfig.glow} 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute bottom-12 w-44 sm:w-56 h-8 border rounded-full animate-spin pointer-events-none opacity-40"
            style={{ borderColor: activeConfig.color, animationDuration: "14s" }}
          />

          {/* Animated Photorealistic Marvel Hero Suit */}
          <div className="relative w-full h-full flex items-center justify-center animate-hero-float">
            <Image
              src={currentSuit.image}
              alt={currentSuit.name}
              width={340}
              height={460}
              priority
              className={`object-contain max-h-[340px] sm:max-h-[420px] transition-all duration-700 select-none pointer-events-none ${
                currentProtocol === "TESSERACT OVERCLOCK"
                  ? "filter drop-shadow-[0_0_40px_rgba(0,240,255,0.7)] hue-rotate-180 brightness-110"
                  : currentProtocol === "STEALTH OPS"
                  ? "filter drop-shadow-[0_0_35px_rgba(148,163,184,0.5)]"
                  : currentProtocol === "HULKBUSTER"
                  ? "filter drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]"
                  : "filter drop-shadow-[0_0_40px_rgba(226,54,54,0.6)]"
              }`}
            />

            {/* Pulsing Arc Reactor Chest Core Glow */}
            <div
              className="absolute w-7 h-7 rounded-full pointer-events-none animate-arc-glow flex items-center justify-center"
              style={{
                top: currentProtocol === "HULKBUSTER" ? "37%" : "34%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: activeConfig.color,
                boxShadow: `0 0 25px ${activeConfig.color}, inset 0 0 8px #ffffff`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
            </div>

            {/* Sweeping Holographic Scanline Laser Beam */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div
                className="w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_15px_#00f0ff] absolute animate-hologram-scan"
                style={{ opacity: 0.7 }}
              />
            </div>
          </div>

          {/* Bottom Suit Classification Pill */}
          <div className="absolute bottom-14 px-3.5 py-1 rounded-full glass-panel border border-white/10 text-[10px] font-mono tracking-wider text-white/90 flex items-center gap-2 backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeConfig.color }} />
            <span>{currentSuit.name}</span>
          </div>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair transition-transform duration-300 ease-out"
          style={{
            transform: isHovered
              ? `perspective(800px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
              : "none",
          }}
        />
      )}

      {/* Futuristic Corner HUD Brackets */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#e23636]/40 pointer-events-none group-hover:border-[#fbbf24] transition-colors" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#e23636]/40 pointer-events-none group-hover:border-[#fbbf24] transition-colors" />
      <div className="absolute bottom-16 left-2 w-8 h-8 border-b-2 border-l-2 border-[#e23636]/40 pointer-events-none group-hover:border-[#fbbf24] transition-colors" />
      <div className="absolute bottom-16 right-2 w-8 h-8 border-b-2 border-r-2 border-[#e23636]/40 pointer-events-none group-hover:border-[#fbbf24] transition-colors" />

      {/* Floating HUD Telemetry Readout */}
      <div className="absolute top-4 left-6 flex items-center gap-2 pointer-events-none text-[9px] sm:text-[10px] font-mono tracking-widest text-white/70">
        <span
          className="w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: activeConfig.color }}
        />
        <span className="truncate max-w-[200px] sm:max-w-none">J.A.R.V.I.S. // {activeConfig.status}</span>
      </div>

      <div className="absolute top-4 right-6 text-right pointer-events-none text-[9px] sm:text-[10px] font-mono tracking-widest text-white/50 hidden sm:block">
        <span>CORE: NEW ELEMENT // STARK-085</span>
      </div>

      {/* Interactive Armor Protocol Switcher */}
      <div className="absolute -bottom-2 sm:-bottom-3 z-20 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 glass-panel rounded-2xl sm:rounded-full border border-white/10 backdrop-blur-xl">
        {(Object.keys(PROTOCOLS) as ArcProtocol[]).map((proto) => {
          const isActive = currentProtocol === proto;
          const cfg = PROTOCOLS[proto];
          return (
            <button
              key={proto}
              data-cursor-text={proto}
              data-feature-color={cfg.color}
              onClick={() => handleSelectProtocol(proto)}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-mono tracking-wider transition-all duration-200 rounded-full flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 ${
                isActive
                  ? "bg-white/15 text-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
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
              {proto}
            </button>
          );
        })}
      </div>
    </div>
  );
}
