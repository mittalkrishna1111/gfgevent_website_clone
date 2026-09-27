"use client";

import React, { useState, useMemo } from "react";
import { PROBLEM_STATEMENTS, ProblemStatement, THEME_DOMAINS } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import {
  Search,
  Code2,
  Cpu,
  Building2,
  Copy,
  Check,
  X,
  ExternalLink,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  initialDomain?: string;
}

export default function ProblemStatementsExplorer({ initialDomain }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Software" | "Hardware">("All");
  const [selectedComplexity, setSelectedComplexity] = useState<string>("All");
  const [userSelectedDomain, setUserSelectedDomain] = useState<string | null>(null);
  const [activeModalPS, setActiveModalPS] = useState<ProblemStatement | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Derived selected domain without effect setState cascading renders
  const selectedDomain = userSelectedDomain ?? (initialDomain || "All");

  const filteredPS = useMemo(() => {
    return PROBLEM_STATEMENTS.filter((ps) => {
      const matchesSearch =
        ps.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ps.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || ps.category === selectedCategory;

      const matchesComplexity =
        selectedComplexity === "All" || ps.complexity === selectedComplexity;

      const matchesDomain =
        selectedDomain === "All" || ps.domain === selectedDomain;

      return matchesSearch && matchesCategory && matchesComplexity && matchesDomain;
    });
  }, [searchQuery, selectedCategory, selectedComplexity, selectedDomain]);

  const handleCopyCode = (code: string) => {
    soundFx.playBeep(700, 0.04);
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const openModal = (ps: ProblemStatement) => {
    soundFx.playClick();
    setActiveModalPS(ps);
  };

  const closeModal = () => {
    setActiveModalPS(null);
  };

  return (
    <section id="problems" className="relative py-28 bg-[#090b11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>OFFICIAL PROBLEM STATEMENT REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              SOLVE NATION-SCALE <br />
              <span className="text-gradient-saffron">CHALLENGES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">
              Showing <span className="text-white font-bold">{filteredPS.length}</span> of {PROBLEM_STATEMENTS.length} featured statements
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 mb-8 space-y-4">
          {/* Top Search & Category Switch */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, tech, ministry or PS code (e.g. ISRO, YOLO, SIH1601)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-zinc-200 placeholder-zinc-500 text-xs font-mono focus:outline-none focus:border-orange-500/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 text-zinc-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="lg:col-span-3 flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
              {(["All", "Software", "Hardware"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Complexity Filter */}
            <div className="lg:col-span-3 flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
              {["All", "Beginner", "Intermediate", "Advanced"].map((comp) => (
                <button
                  key={comp}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedComplexity(comp);
                  }}
                  className={`flex-1 py-2 text-[11px] font-mono rounded-lg transition-all ${
                    selectedComplexity === comp
                      ? "bg-orange-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {comp === "Intermediate" ? "Inter" : comp}
                </button>
              ))}
            </div>
          </div>

          {/* Domain Dropdown Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs font-mono">
            <span className="text-zinc-500 mr-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Domain:
            </span>
            <button
              onClick={() => {
                soundFx.playClick();
                setUserSelectedDomain("All");
              }}
              className={`px-3 py-1 rounded-lg transition-all ${
                selectedDomain === "All"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-white/5 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All Domains
            </button>
            {THEME_DOMAINS.map((domain) => (
              <button
                key={domain.id}
                onClick={() => {
                  soundFx.playClick();
                  setUserSelectedDomain(domain.title);
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedDomain === domain.title
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-white/5 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {domain.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Problem Statements Cards Grid */}
        {filteredPS.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border border-white/10">
            <p className="text-zinc-400 font-mono text-sm">
              No problem statements matched your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedComplexity("All");
                setUserSelectedDomain("All");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPS.map((ps) => (
              <div
                key={ps.id}
                className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/10 text-zinc-200 border border-white/10">
                        {ps.code}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          ps.category === "Software"
                            ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                            : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        }`}
                      >
                        {ps.category === "Software" ? (
                          <Code2 className="w-3 h-3" />
                        ) : (
                          <Cpu className="w-3 h-3" />
                        )}
                        {ps.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5">
                        {ps.complexity}
                      </span>
                      <button
                        onClick={() => handleCopyCode(ps.code)}
                        title="Copy PS Code"
                        className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                      >
                        {copiedCode === ps.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Ministry / Org */}
                  <div className="flex items-center gap-1.5 text-xs text-orange-400/90 font-mono mt-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{ps.organization}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-orange-400 transition-colors leading-snug">
                    {ps.title}
                  </h3>

                  {/* Description preview */}
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed line-clamp-3">
                    {ps.description}
                  </p>
                </div>

                {/* Bottom Tech Stack & Action */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[68%]">
                    {ps.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {ps.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-zinc-500">
                        +{ps.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openModal(ps)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>View Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PS Detail Modal */}
      <AnimatePresence>
        {activeModalPS && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl"
            >
              {/* Top Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/10">
                    {activeModalPS.code}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      activeModalPS.category === "Software"
                        ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    }`}
                  >
                    {activeModalPS.category.toUpperCase()} EDITION
                  </span>
                  <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-lg bg-white/5">
                    {activeModalPS.complexity}
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Ministry & Domain */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>{activeModalPS.organization}</span>
                </div>
                <span>•</span>
                <div>Domain: <span className="text-zinc-200">{activeModalPS.domain}</span></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mt-3 leading-snug">
                {activeModalPS.title}
              </h3>

              {/* Problem Description */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                    PROBLEM BACKGROUND & CONTEXT
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {activeModalPS.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-2">
                    EXPECTED DELIVERABLES & BENCHMARKS
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {activeModalPS.expectedOutput}
                  </p>
                </div>

                {/* Recommended Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    SUGGESTED TECHNOLOGIES & TOOLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPS.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handleCopyCode(activeModalPS.code)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 font-mono text-xs transition-colors"
                >
                  {copiedCode === activeModalPS.code ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied Code to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy PS Code: {activeModalPS.code}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href="#roadmap"
                    onClick={() => {
                      closeModal();
                      const el = document.querySelector("#roadmap");
                      if (el) {
                        const lenis = (window as unknown as { __lenis?: { scrollTo: (target: Element, opts?: object) => void } }).__lenis;
                        if (lenis) {
                          lenis.scrollTo(el, { offset: -80 });
                        }
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20"
                  >
                    <span>Submission Roadmap</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
