"use client";

import React, { useEffect, useState } from "react";

export function StickyFooter() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const maxScroll = Math.max(1, docH - winH);
      const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / maxScroll) * 100)));
      setScrollCount(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative w-full border-t border-[var(--line)] bg-[var(--bg)] pt-20 pb-8 px-6 md:px-12 lg:px-16 overflow-hidden flex flex-col justify-between">
      {/* Scroll Counter Top Center */}
      <div className="flex justify-center mb-12">
        <span className="font-mono text-[12px] text-[var(--faint)] tracking-widest">
          {scrollCount}% ARCHIVE EXPLORED
        </span>
      </div>

      {/* Split Giant Name Banner */}
      <div className="flex items-center justify-between select-none opacity-25 hover:opacity-100 transition-opacity duration-300">
        <div className="h1 text-[var(--ink)] leading-[0.8] tracking-[-0.05em] uppercase">
          shree
        </div>
        <div className="h1 text-[var(--ink)] leading-[0.8] tracking-[-0.05em] uppercase text-right">
          prasandh
        </div>
      </div>

      {/* Meta Bar */}
      <div className="w-full pt-8 mt-12 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[var(--muted)] gap-3">
        <span>'26 © SHREEPRASANDH K. ALL RIGHTS RESERVED.</span>
        <span>ARCHITECTED WITH TACTILE PRECISION</span>
      </div>
    </footer>
  );
}
