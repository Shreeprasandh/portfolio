"use client";

import React from "react";
import { motion } from "framer-motion";
import { RollText } from "@/components/motion/RollText";
import { ThemeModeSwitch } from "@/components/ui/ThemeModeSwitch";
import { HeroOrbitTiles } from "@/components/canvas/HeroOrbitTiles";
import { FluidRevealCanvas } from "@/components/canvas/FluidRevealCanvas";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-3rem)] overflow-hidden border-b border-[var(--line)] flex flex-col justify-between"
    >
      {/* 1:1 Bleibtgleich Fluid Reveal System: Orbiting 3D Project Tiles + Interactive Liquid Mask */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <HeroOrbitTiles />
        <FluidRevealCanvas />
      </div>

      {/* Foreground Architectural Grid (z-10, sits cleanly on top of fluid reveal) */}
      <div className="relative z-10 w-full min-h-full py-16 px-6 md:px-12 lg:px-16 flex flex-col justify-between flex-1 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-12 w-full my-auto"
        >
          {/* Col 1-2: Role Badge & Active Indicator (Small pic removed) */}
          <div className="col-span-2 border-r border-[var(--line)] pr-4 flex flex-col justify-between min-h-[140px] pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                AVAILABLE / '26
              </span>
            </div>

            <div className="p1 text-[var(--ink)] mt-6 font-medium leading-snug">
              Full-Stack Engineer<br />
              &amp; Creative Technologist
            </div>
          </div>

          {/* Col 3-8: Origin Metadata & Giant Name Display */}
          <div className="col-span-2 md:col-span-4 lg:col-span-6 flex flex-col justify-between pointer-events-auto">
            <div className="flex items-center justify-between text-[13px] font-sans pb-4 border-b border-[var(--line)] md:border-b-0">
              <span className="text-[var(--muted)]">Based in Chennai, India</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--muted)]">Focus /</span>
                <RollText
                  text="Autonomous AI & Scalable Systems"
                  className="font-medium text-[var(--ink)]"
                />
              </div>
            </div>

            {/* Giant Title: Shreeprasandh K. with Interactive Hover Roll */}
            <div className="flex flex-col select-none pt-4">
              <h1 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
                <RollText text="Shreeprasandh" />
              </h1>
              <h1 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
                <RollText text="K." />
              </h1>
            </div>
          </div>

          {/* Row 2: Authentic Tagline & Engineering Manifesto */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 pt-8 pointer-events-auto">
            <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
              <RollText text="Taming code," />
              <br />
              <RollText text="crafting" />
              <br />
              <span className="text-[var(--muted)]">
                <RollText text="experiences." />
              </span>
            </h2>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-4 pt-8 flex flex-col justify-between pointer-events-auto">
            <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em] lg:pl-12">
              <RollText text="Logic-Driven" />
              <br />
              <RollText text="& Scalable" />
              <span className="block mt-2 font-normal text-[var(--muted)] text-[0.6em]">
                systems.
              </span>
            </h2>
          </div>

          {/* Row 3: Active Palette Mode + Sir's Authentic Bio Statement */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 pt-12 flex flex-col gap-6 pointer-events-auto">
            <div className="flex flex-col gap-2">
              <span className="p1 text-[var(--muted)] uppercase tracking-wider text-[11px] font-mono">
                ACTIVE PALETTE MODE
              </span>
              <ThemeModeSwitch />
            </div>

            <div className="pt-4">
              <div className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
                <RollText text="the best" />
              </div>
              <div className="h1 text-[var(--muted)] pl-8 md:pl-12 leading-[0.88] tracking-[-0.04em]">
                <RollText text="ideas deserve" />
                <br />
                <RollText text="execution." />
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-4 pt-12 flex flex-col justify-between lg:pl-12 pointer-events-auto">
            {/* Sir's Authentic Statement */}
            <div className="border-l-2 border-[var(--line-strong)] pl-6 py-2">
              <p className="p1 text-[var(--ink)] max-w-md leading-relaxed text-base md:text-lg font-normal">
                I’m Shreeprasandh K, focused on building clean, structured software.
                I enjoy solving problems through logic-driven development and creating
                systems that are simple, scalable, and intentional.
              </p>
            </div>

            {/* Quick Technical Specs Pills */}
            <div className="pt-8 flex flex-wrap gap-2 font-mono text-[11px] text-[var(--muted)]">
              {["Next.js 16", "React 19", "TypeScript", "Python", "Supabase", "Embedded / IoT"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-[var(--line)] bg-[var(--bg-subtle)] hover:border-[var(--line-strong)] hover:text-[var(--ink)] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Sub-Line */}
        <div className="w-full pt-8 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--muted)] pointer-events-auto">
          <span>© '26 SHREEPRASANDH K.</span>
          <span>CHENNAI, IN (UTC +5:30)</span>
        </div>
      </div>
    </section>
  );
}
