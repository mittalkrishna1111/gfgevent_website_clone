"use client";

import React from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CosmicBackground from "@/components/ui/CosmicBackground";
import AetherisCursor from "@/components/ui/AetherisCursor";
import MarvelNavbar from "@/components/navigation/MarvelNavbar";
import MarvelHeroSection from "@/components/sections/MarvelHeroSection";
import MarvelSponsorsSection from "@/components/sections/MarvelSponsorsSection";
import MarvelAboutSection from "@/components/sections/MarvelAboutSection";
import InfinityTracksSection from "@/components/sections/InfinityTracksSection";
import SacredTimelineSection from "@/components/sections/SacredTimelineSection";
import StarkShowcaseSection from "@/components/sections/StarkShowcaseSection";
import StarkPrizesSection from "@/components/sections/StarkPrizesSection";
import MarvelCouncilSection from "@/components/sections/MarvelCouncilSection";
import MarvelTelemetrySection from "@/components/sections/MarvelTelemetrySection";
import MarvelFaqSection from "@/components/sections/MarvelFaqSection";
import MarvelCtaSection from "@/components/sections/MarvelCtaSection";
import MarvelFooterSection from "@/components/sections/MarvelFooterSection";
import MarvelMusicPlayer from "@/components/ui/MarvelMusicPlayer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#04060d] text-white selection:bg-[#e23636] selection:text-white overflow-hidden">
        {/* Deep Cosmic Starfield & Meteor Atmosphere */}
        <CosmicBackground />

        {/* Tactical Cybernetic Reticle Cursor with Real-Time Option Color Spectrum */}
        <AetherisCursor />

        {/* Sticky Glass Dock Marvel Navbar */}
        <MarvelNavbar />

        {/* Floating Marvel Cinematic Score Controller */}
        <MarvelMusicPlayer />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          {/* 1. Full-Screen Cinematic Marvel Hero */}
          <MarvelHeroSection />

          {/* 2. Multiverse Allied Sponsors & Host Marquee */}
          <MarvelSponsorsSection />

          {/* 3. Mission Protocol & Bennett Citadel Briefing */}
          <MarvelAboutSection />

          {/* 4. Six Infinity Stone Problem Statement Tracks */}
          <InfinityTracksSection />

          {/* 5. TVA Sacred Timeline Roadmap */}
          <SacredTimelineSection />

          {/* 6. Stark Industries Armory & 3D Suit Configurator */}
          <StarkShowcaseSection />

          {/* 7. Stark Expo Treasury & Hackathon Benchmark Matrix */}
          <StarkPrizesSection />

          {/* 8. S.H.I.E.L.D. Avengers Council: Mentors & Judges */}
          <MarvelCouncilSection />

          {/* 9. J.A.R.V.I.S. Telemetry & Live Arc Reactor Oscilloscope */}
          <MarvelTelemetrySection />

          {/* 10. Frequently Asked Questions & Guidelines */}
          <MarvelFaqSection />

          {/* 11. Tesseract Vortex CTA & S.H.I.E.L.D. Badge Registration */}
          <MarvelCtaSection />
        </main>

        {/* 12. Bennett University Campus & Avengers Citadel Footer */}
        <MarvelFooterSection />
      </div>
    </SmoothScrollProvider>
  );
}
