"use client";

import React from "react";
import { Download, Code2, Cpu, Sparkles, Layers, Terminal } from "lucide-react";

const SKILLS = [
  {
    category: "FRONTEND & CRAFT",
    items: ["Next.js 16 (App Router)", "React 19 (RSC)", "TypeScript", "Tailwind CSS v4", "Three.js & WebGL", "Framer Motion", "Lenis Physics"],
  },
  {
    category: "BACKEND & DISTRIBUTED",
    items: ["Node.js", "Python / FastAPI", "Java", "Supabase & PostgreSQL", "RLS Multi-Tenancy", "WebSockets & SSE", "Docker Containerization"],
  },
  {
    category: "SYSTEMS & HARDWARE",
    items: ["Embedded C++", "MicroPython", "Raspberry Pi & ESP32", "Hardware HID", "Linux Subsystems", "Git & CI/CD Pipelines"],
  },
];

const VALUES = [
  {
    num: "01",
    title: "Obsessed With First Principles",
    desc: "Constantly tearing down complex architectures, understanding what happens at the byte and AST level, and discarding artificial bloat.",
  },
  {
    num: "02",
    title: "AI as a Force Multiplier",
    desc: "Leveraging agentic swarms and modern LLMs not as a crutch, but as high-velocity cognitive leverage to build robust, production-grade tools.",
  },
  {
    num: "03",
    title: "Tactile Minimalism",
    desc: "Every pixel, transition curve, and byte of bandwidth must earn its place. Zero frivolous decoration, 100% mechanical intention.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-16 md:pr-24 border-b border-[var(--line)]"
    >
      <div className="tick top-10 left-6" />
      <div className="tick top-10 right-16 hidden md:block" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[var(--line)] pb-6 mb-12 gap-4">
        <div>
          <div className="hud-label text-[11px] text-[var(--muted)] mb-2">
            03 / ENGINEERING PHILOSOPHY
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-[var(--ink)]">
            Craft, Stack & Tenets
          </h2>
        </div>
        <p className="max-w-md text-sm text-[var(--muted)] font-mono text-left sm:text-right">
          A methodical approach to software engineering, balancing rapid prototype exploration with strict type safety.
        </p>
      </div>

      {/* Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {SKILLS.map((col) => (
          <div
            key={col.category}
            className="border border-[var(--line)] p-6 bg-[var(--bg-subtle)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-[var(--muted)]" />
                <span className="hud-label text-[10px] text-[var(--muted)]">
                  {col.category}
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--ink)] font-mono"
                  >
                    <span className="w-1 h-1 bg-[var(--line-strong)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Value Cards */}
      <div className="border-t border-[var(--line)] pt-12">
        <div className="hud-label text-[10px] text-[var(--muted)] mb-6">
          OPERATIONAL ETHOS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((val) => (
            <div
              key={val.num}
              className="border border-[var(--line)] p-6 bg-[var(--bg)] hover:border-[var(--line-strong)] transition-colors duration-200"
            >
              <span className="font-mono text-[12px] text-[var(--faint)] block mb-3">
                {val.num}
              </span>
              <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-2 tracking-tight">
                {val.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
