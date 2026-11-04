"use client";

import { useEffect } from "react";

const FAVICON_MODES: Record<string, string> = {
  hero: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0c"/><circle cx="16" cy="16" r="6" fill="#f5f4f0"/></svg>`,
  works: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0c"/><rect x="8" y="8" width="16" height="16" fill="#f5f4f0"/></svg>`,
  about: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0c"/><polygon points="16,8 24,24 8,24" fill="#f5f4f0"/></svg>`,
  creative: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0c"/><path d="M16 6 L22 16 L16 26 L10 16 Z" fill="#f5f4f0"/></svg>`,
  contact: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0c"/><circle cx="16" cy="16" r="8" fill="none" stroke="#f5f4f0" stroke-width="3"/></svg>`,
};

export function DynamicFavicon() {
  useEffect(() => {
    const setFavicon = (mode: string) => {
      const svg = FAVICON_MODES[mode] || FAVICON_MODES.hero;
      const encoded = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

      let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = encoded;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFavicon(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return null;
}
