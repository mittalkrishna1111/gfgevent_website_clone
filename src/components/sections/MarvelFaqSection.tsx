"use client";

import React, { useState } from "react";
import { EVENT_FAQS, FaqItem } from "@/data/marvelEventData";
import { soundFx } from "@/lib/sound";
import { ChevronDown, HelpCircle, MessageSquareCode, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MarvelFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Eligibility", "Logistics", "Hacking", "Bennett Campus"];

  const filteredFaqs =
    selectedCategory === "All"
      ? EVENT_FAQS
      : EVENT_FAQS.filter((f) => f.protocolCategory === selectedCategory);

  const toggleAccordion = (id: string) => {
    soundFx.playClick(950);
    setOpenId(openId === id ? null : id);
  };

  const categoryColorMap: Record<string, string> = {
    Eligibility: "#00f0ff",
    Logistics: "#fbbf24",
    Hacking: "#e23636",
    "Bennett Campus": "#10b981",
  };

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#03050a]/40 overflow-hidden z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#fbbf24] tracking-widest uppercase mb-4">
            <HelpCircle size={14} className="text-[#fbbf24]" />
            <span>// 08 S.H.I.E.L.D. TACTICAL DIRECTIVE // FAQS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight mb-4">
            FREQUENTLY ASKED <br />
            <span className="text-gradient-marvel">PROTOCOL QUESTIONS</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Everything you need to know about team eligibility, Bennett University campus accommodation,
            free catering, hardware components, and intellectual property.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                data-cursor-text={cat.toUpperCase()}
                data-feature-color={categoryColorMap[cat] || "#fbbf24"}
                onClick={() => {
                  soundFx.playClick(1050);
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-white/15 text-white font-bold border border-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    : "glass-panel text-white/60 hover:text-white border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const catColor = categoryColorMap[faq.protocolCategory] || "#e23636";

            return (
              <div
                key={faq.id}
                data-cursor-text={faq.protocolCategory.toUpperCase()}
                data-feature-color={catColor}
                className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden card-beveled ${
                  isOpen
                    ? "border-white/25 bg-white/[0.04]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded font-bold shrink-0"
                      style={{
                        backgroundColor: `${catColor}15`,
                        color: catColor,
                        border: `1px solid ${catColor}40`,
                      }}
                    >
                      {faq.protocolCategory}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-[#fbbf24] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#fbbf24] bg-[#fbbf24]/10" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-white/70 font-sans leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Helpdesk Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-white/15 card-beveled flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#e23636]/15 border border-[#e23636]/40 flex items-center justify-center shrink-0">
              <MessageSquareCode size={22} className="text-[#e23636]" />
            </div>
            <div>
              <h4 className="text-base font-bold font-mono text-white">Have a specific question about your squad?</h4>
              <p className="text-xs text-white/60 font-sans mt-0.5">
                Our GeeksforGeeks Bennett Chapter student leads respond within minutes on Discord and Instagram.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="DISCORD HELP"
            data-feature-color="#818cf8"
            className="px-6 py-3 btn-clip bg-[#818cf8]/15 border border-[#818cf8]/40 hover:bg-[#818cf8]/25 text-[#818cf8] hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>JOIN GFG DISCORD</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
