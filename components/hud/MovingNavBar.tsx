"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeModeSwitch } from "@/components/ui/ThemeModeSwitch";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Intro", href: "#hero" },
  { id: "works", label: "Works", href: "#works" },
  { id: "awards", label: "Hobby", href: "#awards" },
  { id: "creative", label: "Creative", href: "#creative" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function MovingNavBar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const winH = window.innerHeight;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= winH * 0.45 && rect.bottom >= winH * 0.15) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);

    if (window._haptics?.trigger) window._haptics.trigger("selection");
    setIsMobileMenuOpen(false);

    if (targetEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(targetEl, { duration: 1.0 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full h-12 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md transition-colors duration-300">
      <div className="flex h-full items-stretch justify-between w-full">
        {/* Left: Brand Monogram / Coordinates */}
        <div className="flex items-stretch">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center border-r border-[var(--line)] px-5 hover:opacity-75 transition-opacity"
          >
            <span className="font-mono text-[12px] font-bold text-[var(--ink)] tracking-wider">
              SK <span className="text-[var(--muted)] font-normal">// '26</span>
            </span>
          </a>

          {/* Desktop Moving Nav Menu */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-stretch">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group flex h-full items-center px-2 font-mono text-[11px] uppercase tracking-wider select-none"
                >
                  <span
                    className={`flex items-center gap-1.5 px-2.5 py-1 transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--invert-bg)] text-[var(--invert-fg)] font-bold shadow-sm"
                        : "text-[var(--muted)] hover:text-[var(--ink)] group-hover:bg-[var(--line)]"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: Theme Mode Switch + Resume CTA */}
        <div className="flex items-stretch">
          {/* 5-Theme Switcher Pill */}
          <div className="hidden sm:flex items-center px-4 border-l border-[var(--line)]">
            <ThemeModeSwitch />
          </div>

          {/* Resume Download CTA */}
          <a
            href="/shreeprasandh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-l border-[var(--line)] px-5 bg-[var(--invert-bg)] text-[var(--invert-fg)] font-mono text-[11px] font-bold uppercase tracking-widest hover:opacity-85 transition-opacity select-none"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex md:hidden items-center justify-center w-12 border-l border-[var(--line)] text-[var(--ink)] hover:bg-[var(--line)] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-12 left-0 right-0 bg-[var(--bg)] border-b border-[var(--line)] p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between py-2.5 px-3 font-mono text-sm uppercase tracking-wider ${
                    isActive
                      ? "bg-[var(--invert-bg)] text-[var(--invert-fg)] font-bold"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] opacity-60">
                    0{NAV_ITEMS.indexOf(item) + 1}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase">Theme Mode</span>
            <ThemeModeSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
