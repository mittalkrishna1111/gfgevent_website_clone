"use client";

import React, { useState } from "react";
import { THEME_DOMAINS, ThemeDomain } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import {
  Cpu,
  Leaf,
  Activity,
  Sprout,
  ShieldCheck,
  Globe,
  Zap,
  Radio,
  Coins,
  ArrowRight,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemesGridProps {
  onSelectDomain?: (domainTitle: string) => void;
}

export default function ThemesGrid({ onSelectDomain }: ThemesGridProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterCategories = [
    "All",
    "AI & Software",
    "Hardware & Green",
    "Defence & Space",
    "Civic Tech",
  ];

  const filteredThemes =
    selectedFilter === "All"
      ? THEME_DOMAINS
      : THEME_DOMAINS.filter((t) => t.categoryTag === selectedFilter);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-emerald-400" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case "Sprout":
        return <Sprout className="w-6 h-6 text-lime-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case "Radio":
        return <Radio className="w-6 h-6 text-orange-400" />;
      case "Coins":
        return <Coins className="w-6 h-6 text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-orange-400" />;
    }
  };

  const handleCardClick = (domain: ThemeDomain) => {
    soundFx.playBeep(600, 0.05);
    if (onSelectDomain) {
      onSelectDomain(domain.title);
    }
    const el = document.querySelector("#problems");
    if (el) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: Element, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="themes" className="relative py-28 bg-[#07080d] overflow-hidden">
      {/* Glow aura */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>THEMATIC TRACKS // 2026 EDITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              SOLVING CHALLENGES <br />
              <span className="text-gradient-silver">ACROSS 10 CRITICAL DOMAINS</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Every problem statement maps directly to a high-priority national development sector. Filter by domain to discover where your team&apos;s technical capabilities align.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 pr-2 border-r border-white/10 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>

          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedFilter(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono shrink-0 transition-all ${
                selectedFilter === cat
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredThemes.map((theme) => (
              <motion.div
                layout
                key={theme.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(theme)}
                className="group relative glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-black"
              >
                {/* Subtle top gradient glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      {getDomainIcon(theme.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {theme.problemsCount} PS
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors font-sans mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                    {theme.description}
                  </p>
                </div>

                {/* Bottom Tech Pills & CTA */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {theme.highlightTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span className="text-[11px] uppercase tracking-wider text-orange-400">
                      FILTER PROBLEMS
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-orange-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
