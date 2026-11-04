"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface RollTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
  stagger?: number;
}

export function RollText({
  text,
  className = "",
  as: Component = "span",
  stagger = 0.015,
}: RollTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const words = text.split(" ");

  return (
    <Component
      onMouseEnter={() => {
        setIsHovered(true);
        if (window._haptics?.trigger) window._haptics.trigger("selection");
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-wrap items-baseline gap-x-[0.28em] cursor-pointer select-none transition-colors duration-200 ${className}`}
    >
      {words.map((word, wordIndex) => {
        const chars = Array.from(word);
        return (
          <span
            key={`word-${wordIndex}`}
            className="relative inline-flex overflow-hidden leading-tight"
          >
            {/* Primary Row (Slides Up on Hover) */}
            <span className="inline-flex">
              {chars.map((char, charIndex) => {
                const totalIndex = wordIndex * 5 + charIndex;
                return (
                  <motion.span
                    key={`c1-${wordIndex}-${charIndex}`}
                    initial={false}
                    animate={{ y: isHovered ? "-100%" : "0%" }}
                    transition={{
                      duration: 0.32,
                      ease: [0.16, 1, 0.3, 1], // Emil Kowalski out-expo
                      delay: totalIndex * stagger,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>

            {/* Duplicate Inverted Row (Slides in from Bottom) */}
            <span
              aria-hidden="true"
              className="absolute inset-0 inline-flex pointer-events-none"
            >
              {chars.map((char, charIndex) => {
                const totalIndex = wordIndex * 5 + charIndex;
                return (
                  <motion.span
                    key={`c2-${wordIndex}-${charIndex}`}
                    initial={false}
                    animate={{ y: isHovered ? "0%" : "100%" }}
                    transition={{
                      duration: 0.32,
                      ease: [0.16, 1, 0.3, 1],
                      delay: totalIndex * stagger,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
