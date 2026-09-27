"use client";

import React, { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Deep space stars
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.008 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }));

    // Dynamic meteors (inspired by EV2 meteors section)
    const meteors: {
      x: number;
      y: number;
      length: number;
      speed: number;
      alpha: number;
      angle: number;
    }[] = [];

    const spawnMeteor = () => {
      if (meteors.length < 3 && Math.random() < 0.015) {
        meteors.push({
          x: Math.random() * width + 200,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 90 + 50,
          speed: Math.random() * 8 + 6,
          alpha: 1,
          angle: (135 * Math.PI) / 180,
        });
      }
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // 1. Draw Twinkling Stars
      stars.forEach((star) => {
        star.phase += star.speed;
        const currentAlpha =
          star.alpha * (0.6 + 0.4 * Math.sin(star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      });

      // 2. Spawn and update Meteors
      spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x -= Math.cos(m.angle - Math.PI / 2) * m.speed;
        m.y += Math.sin(m.angle - Math.PI / 2) * m.speed;
        m.alpha -= 0.012;

        if (m.alpha <= 0 || m.x < -100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const headX = m.x;
        const headY = m.y;
        const tailX = m.x + Math.cos(m.angle - Math.PI / 2) * m.length;
        const tailY = m.y - Math.sin(m.angle - Math.PI / 2) * m.length;

        const grad = ctx.createLinearGradient(headX, headY, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 42, 85, ${m.alpha})`);
        grad.addColorStop(0.3, `rgba(255, 255, 255, ${m.alpha * 0.8})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Starfield & Meteor Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Ambient Gradient Rim Lights */}
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,42,85,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] right-[-10%] w-[750px] h-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,240,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,42,85,0.05)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      {/* Cybernetic Scanline Overlay */}
      <div className="absolute inset-0 scanline opacity-30" />
    </div>
  );
}
