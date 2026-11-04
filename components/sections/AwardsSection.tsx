"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Terminal, Orbit, Shield, Sparkles } from "lucide-react";
import { RollText } from "@/components/motion/RollText";

interface HobbyItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
}

const HOBBY_ITEMS: HobbyItem[] = [
  {
    id: "aether-swarm",
    year: "'26",
    title: "Aether Fleet Engine",
    subtitle: "Autonomous Multi-Agent Swarm DAG",
    tag: "Internal Fleet / TS & Python",
    description: "High-throughput parallel agent execution engine with dynamic topological task decomposition, live streaming telemetry, and sovereign priority overrides.",
    icon: <Orbit className="w-5 h-5 text-[var(--ink)]" />,
  },
  {
    id: "luna-protocol",
    year: "'26",
    title: "Luna Protocol & Customizations",
    subtitle: "20-MCP Sovereign AI Substrate",
    tag: "Personal AI Infrastructure",
    description: "Our comprehensive AI pairing architecture: The Five Monks strategic advisory council, The Seven Shadows security defense grid, and The Elders System One reasoning engine.",
    icon: <Sparkles className="w-5 h-5 text-[var(--ink)]" />,
  },
  {
    id: "ghost-hid",
    year: "'25",
    title: "Ghost-HID Hardware Implant",
    subtitle: "RP2040 Stealth USB Keystroke Injector",
    tag: "Embedded Hardware / RP2040",
    description: "Hardware USB keystroke injection testbed featuring custom CircuitPython payloads, zero OS driver detection, and microsecond keyboard emulation.",
    icon: <Cpu className="w-5 h-5 text-[var(--ink)]" />,
  },
  {
    id: "ch3oh-sim",
    year: "'25",
    title: "CH3OH Molecular Dynamic Simulator",
    subtitle: "Interactive WebGL Atomic Bond Physics",
    tag: "Computational Chemistry",
    description: "Interactive real-time 3D simulation of methanol molecular vibrations, covalent bond harmonic oscillation, and spatial charge distribution.",
    icon: <Shield className="w-5 h-5 text-[var(--ink)]" />,
  },
  {
    id: "leetie-terminal",
    year: "'25",
    title: "Leetie Algorithm Terminal",
    subtitle: "Visual Algorithmic Pattern Trainer",
    tag: "Interactive Developer Tool",
    description: "Interactive data structures and algorithm trainer featuring animated memory layouts, graph traversal traces, and time-complexity benchmarks.",
    image: "/creative/leetie-screenshot.png",
    icon: <Terminal className="w-5 h-5 text-[var(--ink)]" />,
  },
];

export function AwardsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="awards"
      className="relative w-full py-24 px-6 md:px-12 lg:px-16 border-b border-[var(--line)]"
    >
      {/* Bleibtgleich Asymmetric Header Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 border-b border-[var(--line)] pb-12 mb-12">
        <div className="col-span-2">
          <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
            <RollText text="Hobby" />
          </h2>
        </div>
        <div className="col-span-1">
          <h2 className="h1 text-[var(--muted)] leading-[0.88] tracking-[-0.04em]">
            &amp;
          </h2>
        </div>
        <div className="col-span-2 md:col-span-3 lg:col-span-5">
          <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
            <RollText text="Experiments" />
          </h2>
          <p className="p1 text-[var(--muted)] mt-4 max-w-lg font-normal">
            Bespoke tools, autonomous agents, and hardware experiments crafted
            for our own workflows, research, and personal engineering curiosity.
          </p>
        </div>
      </div>

      {/* Bleibtgleich Master List with Interactive Floating Popup Previews */}
      <div className="w-full flex flex-col border-t border-[var(--line)]">
        {HOBBY_ITEMS.map((item, index) => {
          const isHovered = hoveredId === item.id;
          return (
            <div
              key={item.id}
              onMouseEnter={() => {
                setHoveredId(item.id);
                if (window._haptics?.trigger) window._haptics.trigger("selection");
              }}
              onMouseLeave={() => setHoveredId(null)}
              className="relative border-b border-[var(--line)] py-6 px-3 transition-colors duration-200 hover:bg-[var(--bg-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
            >
              {/* Left: Year & Title */}
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-xs text-[var(--faint)] w-8">
                  {item.year}
                </span>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <RollText
                      text={item.title}
                      className="font-sans text-xl md:text-2xl font-medium text-[var(--ink)] tracking-tight group-hover:text-[var(--ink)]"
                    />
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="text-[13px] text-[var(--muted)] font-sans mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Right: Technical Tag */}
              <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-[11px] text-[var(--faint)]">
                <span className="px-2.5 py-1 border border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] group-hover:border-[var(--line-strong)] group-hover:text-[var(--ink)] transition-colors">
                  {item.tag}
                </span>
                <span className="text-[var(--muted)] font-sans text-xs">
                  0{index + 1}
                </span>
              </div>

              {/* 1:1 Bleibtgleich Floating Certificate/Screenshot Popup on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.94 }}
                    animate={{ opacity: 1, y: -70, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1], // Emil Kowalski out-expo
                    }}
                    className="absolute left-1/3 md:left-1/2 -top-8 z-40 pointer-events-none w-72 md:w-80 p-4 bg-[var(--bg)] border border-[var(--line-strong)] shadow-[0_16px_36px_rgba(0,0,0,0.45)] backdrop-blur-md rounded-none"
                  >
                    {item.image ? (
                      <div className="w-full h-36 overflow-hidden border border-[var(--line)] mb-3 bg-[var(--bg-sunken)]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-24 border border-[var(--line)] mb-3 bg-[var(--bg-subtle)] flex items-center justify-center p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 border border-[var(--line)] bg-[var(--bg)]">
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                              SYSTEM PREVIEW
                            </span>
                            <span className="font-mono text-[11px] font-bold text-[var(--ink)]">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-[12px] text-[var(--muted)] font-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-[var(--line)] flex justify-between items-center text-[10px] font-mono text-[var(--faint)]">
                      <span>INTERNAL / LAB</span>
                      <span className="text-[var(--ink)] font-semibold">EXPERIMENTAL</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
