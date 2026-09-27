"use client";

import React, { useState } from "react";
import { NODAL_CENTERS } from "@/data/sihData";
import { soundFx } from "@/lib/sound";
import { MapPin, Users, Radio, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NodalCenters() {
  const [selectedZone, setSelectedZone] = useState<string>("All");

  const zones = ["All", "North", "South", "West", "East", "Central"];

  const filteredCenters =
    selectedZone === "All"
      ? NODAL_CENTERS
      : NODAL_CENTERS.filter((c) => c.zone === selectedZone);

  return (
    <section id="nodal-centers" className="relative py-28 bg-[#090b11] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>NATIONWIDE PHYSICAL VENUES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
              75+ GRAND FINALE <br />
              <span className="text-gradient-tricolor">NODAL TECH HUBS</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Finalist squads are deployed to premier technical campuses nationwide, outfitted with high-bandwidth optical fibers, 24/7 rest pods, and direct satellite video feeds to New Delhi.
          </p>
        </div>

        {/* Zone Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 pr-2 border-r border-white/10 shrink-0">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>REGION:</span>
          </div>

          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => {
                soundFx.playClick();
                setSelectedZone(zone);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono shrink-0 transition-all ${
                selectedZone === zone
                  ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 border border-white/5"
              }`}
            >
              {zone} {zone !== "All" && "Zone"}
            </button>
          ))}
        </div>

        {/* Nodal Centers Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCenters.map((center) => (
              <motion.div
                layout
                key={center.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {center.zone.toUpperCase()} ZONE
                    </span>
                    {center.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
                        FLAGSHIP HUB
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{center.city}, {center.state}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors leading-snug">
                      {center.name}
                    </h3>
                  </div>

                  {/* Hosted Tracks */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      HOSTED TRACKS:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {center.tracksHosted.map((track) => (
                        <span
                          key={track}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300 border border-white/5"
                        >
                          {track.split("&")[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>~{center.teamsCount} Squads</span>
                  </span>

                  <span className="flex items-center gap-1 text-emerald-400">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>Live Ready</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
