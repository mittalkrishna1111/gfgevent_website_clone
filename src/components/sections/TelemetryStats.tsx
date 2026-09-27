"use client";

import React, { useEffect, useRef } from "react";
import { TELEMETRY_STATS } from "@/data/aetherisData";
import { Activity, Radio, Cpu, ShieldCheck } from "lucide-react";

export default function TelemetryStats() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Live Oscilloscope Waveform Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 160);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 800;
      height = canvas.height = canvas.offsetHeight || 160;
    };
    window.addEventListener("resize", handleResize);

    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      offset += 0.04;

      // Draw faint grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw live primary ECG/Synaptic wave (Crimson)
      ctx.beginPath();
      ctx.strokeStyle = "#ff2a55";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#ff2a55";
      ctx.shadowBlur = 12;

      for (let x = 0; x < width; x++) {
        const progress = x / width;
        const base = Math.sin(x * 0.02 + offset) * 15;
        // Periodic heartbeat spike
        const spikeTrigger = (x + offset * 80) % 240;
        let spike = 0;
        if (spikeTrigger > 100 && spikeTrigger < 130) {
          spike = Math.sin((spikeTrigger - 100) * (Math.PI / 30)) * 45;
        }

        const y = height / 2 + base + spike;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw secondary quantum coherence harmonic wave (Cyan)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);

      for (let x = 0; x < width; x += 2) {
        const y =
          height / 2 +
          Math.sin(x * 0.035 - offset * 1.5) * 18 +
          Math.cos(x * 0.015 + offset) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="telemetry"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#ff2a55] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a55]" />
            // 06 LIVE GLOBAL TELEMETRY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-4">
            PLANETARY METRICS IN <br />
            <span className="text-gradient-crimson">REAL-TIME SYNCHRONIZATION</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Continuous telemetry streaming from fourteen sub-orbital relay nodes and thousands of active field units deployed across key defensive sectors.
          </p>
        </div>

        {/* 4 Big Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TELEMETRY_STATS.map((stat, idx) => {
            const accentColor =
              stat.accent === "crimson"
                ? "#ff2a55"
                : stat.accent === "cyan"
                ? "#00f0ff"
                : "#f59e0b";

            return (
              <div
                key={stat.label}
                className="p-7 rounded-2xl glass-panel border border-white/10 card-beveled hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      SENSOR-0{idx + 1}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: accentColor,
                        boxShadow: `0 0 10px ${accentColor}`,
                      }}
                    />
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mb-2">
                    {stat.value}
                    <span className="text-xl sm:text-2xl ml-1" style={{ color: accentColor }}>
                      {stat.suffix}
                    </span>
                  </div>

                  <div className="text-sm font-bold font-mono text-white/90 mb-1">
                    {stat.label}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Oscilloscope Waveform Stream Visualizer */}
        <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 card-beveled">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ff2a55] animate-ping" />
              <span className="text-white/80 font-bold uppercase">
                SYNAPSE WAVEFORM FREQUENCY MONITOR // REAL-TIME
              </span>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span className="hidden sm:inline">SWEEP: 50ms/DIV</span>
              <span className="text-[#00f0ff]">LOCK: STABLE</span>
            </div>
          </div>

          <div className="relative w-full h-36 bg-black/40 rounded-xl overflow-hidden border border-white/5">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          <div className="flex flex-wrap items-center justify-between pt-4 mt-2 text-[11px] font-mono text-white/40">
            <span>INPUT: PILOT BIOMETRICS // CEREBELLAR INTEGRATION</span>
            <span>ERROR COEFFICIENT: 0.00002%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
