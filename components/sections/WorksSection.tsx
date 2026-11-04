"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/motion/TiltCard";
import { RollText } from "@/components/motion/RollText";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  spec: string;
  metric: string;
  href: string;
  github?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "sentia",
    number: "01",
    title: "Sentia Health",
    category: "AI & Clinical Diagnostics",
    year: "'26",
    spec: "Next.js 16 / Python / Supabase",
    metric: "99.4% Inference Reliability",
    href: "https://sentia-health.vercel.app",
    github: "https://github.com/Shreeprasandh",
    image: "/projects/sentia.png",
  },
  {
    id: "indupulse",
    number: "02",
    title: "InduPulse",
    category: "Edge IoT Vibration Telemetry",
    year: "'26",
    spec: "Embedded C++ / ESP32 / TimesFM",
    metric: "<15ms Telemetry Latency",
    href: "https://github.com/Shreeprasandh",
    github: "https://github.com/Shreeprasandh",
    image: "/projects/indupulse.png",
  },
  {
    id: "ghost-hid",
    number: "03",
    title: "Ghost-HID",
    category: "Hardware Stealth USB Interface",
    year: "'25",
    spec: "CircuitPython / RP2040 / MicroPython",
    metric: "Zero OS Driver Detection",
    href: "https://github.com/Shreeprasandh",
    github: "https://github.com/Shreeprasandh",
    image: "/projects/ghost-hid.png",
  },
  {
    id: "aether",
    number: "04",
    title: "Aether Fleet",
    category: "Autonomous Multi-Agent Engine",
    year: "'26",
    spec: "TypeScript / Docker / LangGraph",
    metric: "12 Parallel Subagents DAG",
    href: "https://github.com/Shreeprasandh",
    github: "https://github.com/Shreeprasandh",
    image: "/projects/aether.png",
  },
];

export function WorksSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="works"
      className="relative w-full py-24 px-6 md:px-12 lg:px-16 border-b border-[var(--line)]"
    >
      {/* Bleibtgleich Heading Bar: Work / 24-26 + All Works */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between border-b border-[var(--line)] pb-8 mb-12 gap-4">
        <div className="flex items-baseline gap-6">
          <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
            Work
          </h2>
          <span className="h1 text-[var(--muted)] leading-[0.88] tracking-[-0.04em]">
            24-26
          </span>
        </div>

        <a
          href="https://github.com/Shreeprasandh"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2"
        >
          <RollText
            text="All Repertory (GitHub)"
            className="text-lg font-medium text-[var(--ink)] border-b border-[var(--line-strong)]"
          />
          <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* 2-Column 3D Tilt Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        {PROJECTS.map((project) => {
          const isHovered = hoveredId === project.id;
          return (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <TiltCard className="w-full flex flex-col cursor-pointer group">
                <div
                  onMouseEnter={() => {
                    setHoveredId(project.id);
                    if (window._haptics?.trigger) window._haptics.trigger("selection");
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative w-full aspect-[16/11] bg-[var(--bg-subtle)] border border-[var(--line)] overflow-hidden flex items-center justify-center transition-colors duration-200 hover:border-[var(--line-strong)]"
                >
                {/* Visual Project Backdrop / Content */}
                <div className="p-8 w-full h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[11px] font-mono text-[var(--muted)]">
                    <span className="px-2 py-0.5 border border-[var(--line)] bg-[var(--bg)]">
                      {project.number}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <div className="my-auto text-center">
                    <h3 className="h2 text-[var(--ink)] leading-[0.85] tracking-[-0.03em] transition-transform duration-300 group-hover:scale-105">
                      <RollText text={project.title} />
                    </h3>
                    <p className="p1 text-[var(--muted)] mt-2">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-[var(--faint)]">
                    <span>{project.spec}</span>
                    <span className="text-[var(--ink)] font-semibold">{project.metric}</span>
                  </div>
                </div>

                {/* Bleibtgleich Work Action Pill Button (Slides Up on Hover) */}
                <motion.div
                  initial={false}
                  animate={{
                    bottom: isHovered ? "1.25rem" : "-2.5rem",
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1], // Emil Kowalski out-expo
                  }}
                  className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                >
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--ink)] text-[var(--invert-fg)] font-sans text-[12px] font-semibold tracking-wide shadow-xl">
                    <span>EXPLORE SYSTEM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </a>
          );
        })}
      </div>
    </section>
  );
}
