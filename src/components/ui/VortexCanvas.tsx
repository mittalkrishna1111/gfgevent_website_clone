"use client";

import React, { useEffect, useRef } from "react";

export default function VortexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 1200);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1200;
      height = canvas.height = canvas.offsetHeight || 600;
    };
    window.addEventListener("resize", handleResize);

    // Particle vortex stream
    const count = 280;
    const particles = Array.from({ length: count }, () => {
      const radius = Math.random() * (Math.min(width, height) * 0.45) + 30;
      const angle = Math.random() * Math.PI * 2;
      return {
        radius,
        baseRadius: radius,
        angle,
        speed: (Math.random() * 0.015 + 0.008) * (180 / (radius + 20)),
        size: Math.random() * 2 + 0.6,
        colorType: Math.random() > 0.4 ? "crimson" : "cyan",
        alpha: Math.random() * 0.7 + 0.3,
      };
    });

    let frame = 0;

    const render = () => {
      ctx.fillStyle = "rgba(3, 5, 9, 0.2)";
      ctx.fillRect(0, 0, width, height);
      frame++;

      const cx = width / 2;
      const cy = height / 2;

      // Central event horizon shadow
      const centerGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 90);
      centerGrad.addColorStop(0, "#010204");
      centerGrad.addColorStop(0.5, "rgba(255, 42, 85, 0.2)");
      centerGrad.addColorStop(1, "transparent");
      ctx.fillStyle = centerGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.fill();

      // Swirling spiral arms
      particles.forEach((p) => {
        p.angle += p.speed;
        // Subtle gravitational contraction/expansion
        p.radius -= 0.15;
        if (p.radius < 25) {
          p.radius = Math.min(width, height) * 0.45;
        }

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * (p.radius * 0.55);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);

        if (p.colorType === "crimson") {
          ctx.fillStyle = `rgba(255, 42, 85, ${p.alpha})`;
          ctx.shadowColor = "#ff2a55";
        } else {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
          ctx.shadowColor = "#00f0ff";
        }
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
