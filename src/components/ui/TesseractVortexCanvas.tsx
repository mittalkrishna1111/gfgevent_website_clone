"use client";

import React, { useEffect, useRef } from "react";

export default function TesseractVortexCanvas() {
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

    const count = 300;
    const particles = Array.from({ length: count }, () => {
      const radius = Math.random() * (Math.min(width, height) * 0.45) + 30;
      const angle = Math.random() * Math.PI * 2;
      return {
        radius,
        baseRadius: radius,
        angle,
        speed: (Math.random() * 0.015 + 0.008) * (180 / (radius + 20)),
        size: Math.random() * 2.2 + 0.6,
        colorType: Math.random() > 0.45 ? "tesseract" : "reality",
        alpha: Math.random() * 0.7 + 0.3,
      };
    });

    const render = () => {
      ctx.fillStyle = "rgba(4, 6, 13, 0.22)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Event horizon core glow
      const centerGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 95);
      centerGrad.addColorStop(0, "#010206");
      centerGrad.addColorStop(0.5, "rgba(226, 54, 54, 0.25)");
      centerGrad.addColorStop(0.8, "rgba(0, 240, 255, 0.15)");
      centerGrad.addColorStop(1, "transparent");
      ctx.fillStyle = centerGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 95, 0, Math.PI * 2);
      ctx.fill();

      // Swirling particles
      particles.forEach((p) => {
        p.angle += p.speed;
        p.radius -= 0.16;
        if (p.radius < 25) {
          p.radius = Math.min(width, height) * 0.45;
        }

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * (p.radius * 0.55);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);

        if (p.colorType === "tesseract") {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
          ctx.shadowColor = "#00f0ff";
        } else {
          ctx.fillStyle = `rgba(226, 54, 54, ${p.alpha})`;
          ctx.shadowColor = "#e23636";
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
