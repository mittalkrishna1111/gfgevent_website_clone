"use client";

import React, { useState } from "react";
import { EVENT_FAQS } from "@/data/marvelEventData";
import { Terminal, ChevronDown } from "lucide-react";
import { soundFX } from "@/lib/audio";

export default function JarvisFaq() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const categories = ["All", "Eligibility", "Logistics", "Bennett Campus", "Hacking"];

  const filteredFaqs =
    categoryFilter === "All"
      ? EVENT_FAQS
      : EVENT_FAQS.filter((f) => f.protocolCategory === categoryFilter);

  const toggleFaq = (id: string) => {
    soundFX.playClick(850);
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>STARK J.A.R.V.I.S. KNOWLEDGE CORE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          FREQUENTLY ASKED <span className="text-gradient-cyan">PROTOCOLS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Have queries about campus arrival, hacker equipment, team formations, or
          eligibility? Consult the J.A.R.V.I.S. event neural bank below.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFX.playClick(700);
              setCategoryFilter(cat);
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
              categoryFilter === cat
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105"
                : "bg-[#0a0e1a] text-zinc-400 border border-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = activeFaqId === faq.id;
          return (
            <div
              key={faq.id}
              data-feature="JARVIS QUERY"
              data-feature-color="#00f0ff"
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                isOpen
                  ? "bg-[#0c1222] border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                  : "glass-panel border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 text-xs font-bold">
                    &gt; QUERY:
                  </span>
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-cyan-400" : "text-zinc-400"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans animate-in fade-in duration-200">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-black/50 border border-white/5 font-mono">
                    <span className="text-cyan-400 text-xs font-bold shrink-0">
                      J.A.R.V.I.S. RESPONSE:
                    </span>
                    <span className="text-zinc-200">{faq.answer}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
