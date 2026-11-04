"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const NAV_ITEMS = [
  { id: "hero", number: "01", label: "Overview", href: "#hero" },
  { id: "works", number: "02", label: "Selected Works", href: "#works" },
  { id: "awards", number: "03", label: "Awards & Accolades", href: "#awards" },
  { id: "creative", number: "04", label: "Creative Endeavors", href: "#creative" },
  { id: "contact", number: "05", label: "Transmit / Connect", href: "#contact" },
];

export function RightNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (window._haptics?.trigger) {
      window._haptics.trigger("selection");
    }
    const target = document.querySelector(href);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target as HTMLElement, { offset: -20 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Floating HUD Menu Trigger */}
      <header className="fixed top-0 right-0 left-0 z-40 h-14 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md flex items-center justify-between px-6 md:pr-16">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-2.5 h-2.5 bg-[var(--ink)] transition-transform duration-200 group-hover:scale-125" />
          <span className="font-mono text-[13px] tracking-[0.2em] uppercase font-bold text-[var(--ink)]">
            SHREEPRASANDH K
          </span>
          <span className="hidden sm:inline-block hud-label text-[10px] text-[var(--muted)] border-l border-[var(--line)] pl-3">
            v2.0 / SYSTEM
          </span>
        </a>

        <div className="flex items-center gap-2">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 mr-4 hud-label text-[10px] text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR INVENTIONS</span>
          </div>

          {/* Trigger Button: Inverted Block on Hover */}
          <button
            type="button"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={() => {
              setIsOpen(!isOpen);
              if (window._haptics?.trigger) window._haptics.trigger("selection");
            }}
            className="flex items-center justify-center w-10 h-10 border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] transition-colors duration-150 hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] cursor-pointer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Slide-in Drawer from Right */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1], // Emil Kowalski out-expo standard
            }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm border-l border-[var(--line)] bg-[var(--bg-subtle)]/98 backdrop-blur-xl flex flex-col justify-between p-8 md:pr-14"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-6">
              <span className="hud-label text-[11px] text-[var(--muted)]">NAVIGATION INDEX</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center border border-[var(--line)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 my-auto py-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="group flex items-baseline justify-between p-3 border border-transparent hover:border-[var(--line)] hover:bg-[var(--bg)] transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-[var(--faint)] group-hover:text-[var(--ink)] transition-colors">
                      {item.number}
                    </span>
                    <span className="font-display text-2xl font-medium tracking-tight text-[var(--ink)] group-hover:translate-x-1 transition-transform duration-150">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>

            {/* Bottom Section: Resume & Social Links */}
            <div className="border-t border-[var(--line)] pt-6 flex flex-col gap-4">
              <a
                href="/shreeprasandh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-11 border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--ink)] hud-label text-[11px] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] transition-colors duration-150"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>EXAMINE RESUME (PDF)</span>
              </a>

              <div className="flex items-center justify-between text-[var(--muted)] text-[12px] pt-2">
                <a
                  href="https://github.com/Shreeprasandh"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--ink)] flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shreeprasandh-k/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--ink)] flex items-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/shreeprasandh/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--ink)] flex items-center gap-1.5 transition-colors"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  <span>X.com</span>
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
