"use client";

import React, { useEffect, useRef } from "react";

interface MultiverseCanvasProps {
  primaryColor?: string;
  secondaryColor?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  colorType: "primary" | "secondary" | "white";
}

export default function MultiverseCanvas({
  primaryColor = "#e23636",
  secondaryColor = "#fbbf24",
}: MultiverseCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 140,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const types: ("primary" | "secondary" | "white")[] = [
          "primary",
          "primary",
          "secondary",
          "white",
        ];
        const colorType = types[Math.floor(Math.random() * types.length)];
        const size = Math.random() * 2.2 + 0.8;
        const baseAlpha = Math.random() * 0.6 + 0.2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size,
          baseAlpha,
          alpha: baseAlpha,
          colorType,
        });
      }
    };

    initParticles();

    let frame = 0;

    const render = () => {
      frame++;
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle cosmic nebula radial glow at mouse position
      if (mouse.active) {
        const nebulaGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          10,
          mouse.x,
          mouse.y,
          320
        );
        nebulaGrad.addColorStop(0, primaryColor + "18");
        nebulaGrad.addColorStop(0.5, secondaryColor + "0a");
        nebulaGrad.addColorStop(1, "transparent");
        ctx.fillStyle = nebulaGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Cosmic drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gravity / warp effect
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.active) {
          const force = (1 - dist / mouse.radius) * 1.5;
          const angle = Math.atan2(dy, dx);
          // Swirling spiral effect
          p.x += Math.cos(angle + Math.PI / 2) * force * 1.2;
          p.y += Math.sin(angle + Math.PI / 2) * force * 1.2;
        }

        // Twinkle
        p.alpha = p.baseAlpha + Math.sin(frame * 0.03 + i) * 0.15;
        p.alpha = Math.max(0.1, Math.min(1, p.alpha));

        let fillCol = "#ffffff";
        if (p.colorType === "primary") fillCol = primaryColor;
        else if (p.colorType === "secondary") fillCol = secondaryColor;

        ctx.fillStyle = fillCol;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle multiverse web lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 95) {
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = (1 - dist2 / 95) * 0.18;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [primaryColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-1000"
    />
  );
}
