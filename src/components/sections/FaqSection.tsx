"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-01");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Eligibility", "Teams & SPOC", "Grand Finale", "Hardware & Software"];

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    soundFx.playClick();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#090b11] border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span>KNOWLEDGE BASE & GUIDELINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
            FREQUENTLY ASKED <br />
            <span className="text-gradient-tricolor">QUESTIONS</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            Everything you need to know about team formulations, college SPOC authorization, hardware component budgets, travel reimbursements, and intellectual property.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/20"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-orange-500/40 bg-white/[0.04]" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-orange-400/80 shrink-0">
                      [{faq.category}]
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-sans">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-400 bg-orange-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 font-sans leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question about your college SPOC?</h4>
            <p className="text-xs text-zinc-400 font-mono mt-1">Our technical helpdesk operates 24/7 during submission windows.</p>
          </div>
          <a
            href="mailto:support@sih.gov.in"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Contact Helpdesk
          </a>
        </div>
      </div>
    </section>
  );
}
