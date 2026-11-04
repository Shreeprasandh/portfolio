"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

const SECTIONS = [
  { id: "hero", label: "INTRO", num: "01" },
  { id: "works", label: "WORKS", num: "02" },
  { id: "awards", label: "HOBBY", num: "03" },
  { id: "creative", label: "CREATIVE", num: "04" },
  { id: "contact", label: "TRANSMIT", num: "05" },
];

export function PrecisionRuler() {
  const [percent, setPercent] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isDragging = useRef<boolean>(false);
  const railRef = useRef<HTMLDivElement>(null);
  const [railHeight, setRailHeight] = useState<number>(800);

  // 3-digit strings [hundreds, tens, ones]
  const hundreds = Math.min(1, Math.floor(percent / 100));
  const tens = Math.floor((percent % 100) / 10);
  const ones = Math.floor(percent % 10);

  // Update scroll percentage and active section
  const handleScroll = useCallback(() => {
    const docH = document.documentElement.scrollHeight;
    const winH = window.innerHeight;
    const maxScroll = Math.max(1, docH - winH);
    const scrollY = window.scrollY;
    const progress = Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100)));
    setPercent(progress);

    // Section detection
    for (const sec of SECTIONS) {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= winH * 0.45 && rect.bottom >= winH * 0.15) {
          setActiveSection(sec.id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const updateHeight = () => {
      if (railRef.current) {
        setRailHeight(railRef.current.clientHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, [handleScroll]);

  // Scrub click or drag
  const scrollToPercent = (frac: number) => {
    const clamped = Math.max(0, Math.min(1, frac));
    const docH = document.documentElement.scrollHeight;
    const winH = window.innerHeight;
    const targetScroll = clamped * (docH - winH);

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { immediate: false, duration: 0.8 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }

    if (window._haptics?.trigger) {
      window._haptics.trigger("selection");
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    isDragging.current = true;
    if (railRef.current) {
      const rect = railRef.current.getBoundingClientRect();
      const frac = (e.clientY - rect.top) / rect.height;
      scrollToPercent(frac);
    }
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !railRef.current) return;
    const rect = railRef.current.getBoundingClientRect();
    const frac = (e.clientY - rect.top) / rect.height;
    scrollToPercent(frac);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Generate 21 CAD tick markers (every 5% from 0 to 100)
  const tickMarkers = Array.from({ length: 21 }, (_, i) => ({
    pct: i * 5,
    isMajor: i % 2 === 0, // 0, 10, 20, 30, ... 100
  }));

  // Needle vertical position in pixels
  const needlePx = (percent / 100) * (railHeight - 32) + 16;

  return (
    <aside
      aria-label="ArtCraft Precision Technical Scale Rail"
      className="fixed right-0 top-0 bottom-0 z-40 w-[60px] hidden lg:flex flex-col select-none pointer-events-auto border-l border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md transition-colors duration-300"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        isDragging.current = false;
      }}
    >
      {/* Top Header Label */}
      <div className="h-12 border-b border-[var(--line)] flex items-center justify-center">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
          CAD
        </span>
      </div>

      {/* Interactive Ruler Rail */}
      <div
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative flex-1 w-full cursor-ns-resize overflow-hidden"
      >
        {/* Continuous CAD Ticks */}
        {tickMarkers.map((tick) => {
          const topPercent = tick.pct;
          return (
            <div
              key={tick.pct}
              className="absolute right-0 flex items-center pointer-events-none"
              style={{ top: `${topPercent}%`, transform: "translateY(-50%)" }}
            >
              {tick.isMajor && (
                <span className="mr-1.5 font-mono text-[8px] text-[var(--faint)] opacity-80 tracking-tighter">
                  {tick.pct.toString().padStart(2, "0")}
                </span>
              )}
              <span
                className={`block bg-[var(--ink)] transition-opacity ${
                  tick.isMajor
                    ? "w-4 h-[1px] opacity-70"
                    : "w-2 h-[1px] opacity-30"
                }`}
              />
            </div>
          );
        })}

        {/* Traveling Needle & Rolling Digital Odometer */}
        <div
          className="absolute inset-x-0 pointer-events-none z-30 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${needlePx}px, 0)`,
          }}
        >
          {/* Accent Line Across Rail */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[var(--ink)] shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

          {/* Odometer Display Block (Traveling along needle) */}
          <div className="absolute right-2 top-2 flex flex-col items-end">
            <div className="flex items-center font-mono text-[9px] font-bold text-[var(--ink)] leading-none tracking-widest bg-[var(--bg)]/90 px-1 py-0.5 border border-[var(--line-strong)] shadow-sm">
              <span className="ruler-digits h-[11px] overflow-hidden flex">
                {/* Hundreds Column */}
                <span
                  className="ruler-digit-col"
                  style={{ transform: `translateY(-${hundreds * 11}px)` }}
                >
                  {[0, 1].map((d) => (
                    <span key={d} className="h-[11px] leading-[11px] block">{d}</span>
                  ))}
                </span>
                {/* Tens Column */}
                <span
                  className="ruler-digit-col"
                  style={{ transform: `translateY(-${tens * 11}px)` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                    <span key={d} className="h-[11px] leading-[11px] block">{d}</span>
                  ))}
                </span>
                {/* Ones Column */}
                <span
                  className="ruler-digit-col"
                  style={{ transform: `translateY(-${ones * 11}px)` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                    <span key={d} className="h-[11px] leading-[11px] block">{d}</span>
                  ))}
                </span>
              </span>
              <span className="text-[7px] text-[var(--muted)] ml-0.5">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Index Riding Indicator */}
      <div className="h-14 border-t border-[var(--line)] flex flex-col items-center justify-center px-1">
        <span className="font-mono text-[8px] text-[var(--faint)] tracking-widest uppercase">
          ZONE
        </span>
        <span className="font-mono text-[10px] font-bold text-[var(--ink)] mt-0.5">
          {SECTIONS.find((s) => s.id === activeSection)?.num || "01"}
        </span>
      </div>
    </aside>
  );
}
