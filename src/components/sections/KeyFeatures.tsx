"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Zap,
  Eye,
  Wind,
  Activity,
  Disc,
  ArrowRight,
  X,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { PRODUCT_FEATURES, ProductFeature } from "@/data/aetherisData";
import { soundFx } from "@/lib/sound";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldAlert,
  Zap,
  Eye,
  Wind,
  Activity,
  Disc,
};

export default function KeyFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<ProductFeature | null>(null);

  const handleInspect = (feature: ProductFeature) => {
    setSelectedFeature(feature);
    soundFx.playClick(feature.accent === "cyan" ? 1200 : feature.accent === "crimson" ? 950 : 800);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
    soundFx.playClick(500);
  };

  return (
    <section
      id="features"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden z-10"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(0,240,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(255,42,85,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#00f0ff] tracking-widest uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              // 02 SUBSYSTEM HARDWARE MATRIX
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              AUTONOMOUS DEFENSE <br />
              <span className="text-gradient-cyan">SUBSYSTEM SPECIFICATIONS</span>
            </h2>
          </div>

          <div className="text-sm font-mono text-white/50 max-w-sm">
            Click any subsystem node to inspect sub-component schematics, energy flow telemetry, and field parameters.
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.iconName] || Cpu;
            const accentColor =
              feature.accent === "crimson"
                ? "#ff2a55"
                : feature.accent === "cyan"
                ? "#00f0ff"
                : "#f59e0b";

            return (
              <div
                key={feature.id}
                onClick={() => handleInspect(feature)}
                className="relative flex flex-col justify-between p-7 rounded-2xl glass-panel hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer card-beveled group hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              >
                {/* Top Corner Index & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60 tracking-wider">
                      {feature.category}
                    </span>
                    <span className="text-2xl font-extrabold font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      {feature.index}
                    </span>
                  </div>

                  {/* Icon & Glow Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      border: `1px solid ${accentColor}40`,
                    }}
                  >
                    <Icon size={22} style={{ color: accentColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-mono text-white tracking-wide mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                    {feature.shortDesc}
                  </p>
                </div>

                {/* Bottom Telemetry Metric & Inspect Trigger */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/50 tracking-wider uppercase">
                      {feature.telemetryMetric}
                    </span>
                    <span
                      className="text-lg font-bold font-mono"
                      style={{ color: accentColor }}
                    >
                      {feature.telemetryValue}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                    <span>SCHEMATIC</span>
                    <ArrowRight size={12} style={{ color: accentColor }} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Deep Schematic Inspection Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl glass-panel-elevated rounded-2xl border border-white/20 p-6 sm:p-8 card-beveled shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                  {selectedFeature.index} // {selectedFeature.category}
                </span>
                <span className="text-xs font-mono text-[#ff2a55]">CLASSIFIED</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Title & Detailed Overview */}
            <h3 className="text-2xl font-bold font-mono text-white mb-3">
              {selectedFeature.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-sans mb-8">
              {selectedFeature.detailedDesc}
            </p>

            {/* Detailed Spec Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-8">
              {selectedFeature.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span className="text-base font-bold font-mono text-white mt-1">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Diagnostic Verification Status */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={16} />
                <span>BENCHMARK PASSED // LAB CALIBRATION LEVEL 5</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 btn-clip bg-[#ff2a55] text-white font-mono text-xs font-semibold cursor-pointer"
              >
                CLOSE READOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
