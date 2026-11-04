"use client";

import React, { useState, useEffect } from "react";

const THEMES = [
  { id: "base", name: "Obsidian", color: "#0a0a0c", border: "#f5f4f0" },
  { id: "1", name: "Limestone", color: "#cebdb2", border: "#111111" },
  { id: "2", name: "Rust", color: "#ff633d", border: "#111111" },
  { id: "3", name: "Verdigris", color: "#919e44", border: "#111111" },
  { id: "4", name: "Concrete", color: "#bec1ca", border: "#111111" },
];

export function ThemeModeSwitch() {
  const [currentTheme, setCurrentTheme] = useState("base");

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("theme-mode");
      if (saved) {
        setTheme(saved);
      }
    } catch {}
  }, []);

  const setTheme = (mode: string) => {
    setCurrentTheme(mode);
    try {
      sessionStorage.setItem("theme-mode", mode);
      document.documentElement.setAttribute("data-theme-mode", mode);
    } catch {}
    if (window._haptics?.trigger) window._haptics.trigger("selection");
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      {THEMES.map((t) => {
        const isActive = currentTheme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            aria-label={`Switch to ${t.name} theme`}
            onClick={() => setTheme(t.id)}
            className={`w-7 h-7 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
              isActive ? "scale-110 ring-1 ring-white/60" : "opacity-80 hover:scale-105"
            }`}
            style={{
              backgroundColor: t.color,
              border: `1.5px solid ${t.border}`,
            }}
          />
        );
      })}
    </div>
  );
}
