"use client";

import React, { useEffect, useRef, useState } from "react";

interface OrbitCard {
  id: string;
  title: string;
  category: string;
  image: string;
}

const ORBIT_CARDS: OrbitCard[] = [
  {
    id: "sentia",
    title: "Sentia Health",
    category: "AI Diagnostics",
    image: "/projects/lumen.png",
  },
  {
    id: "indupulse",
    title: "InduPulse",
    category: "Edge IoT Vibration",
    image: "/projects/bloom.png",
  },
  {
    id: "ghost-hid",
    title: "Ghost-HID",
    category: "Hardware Stealth USB",
    image: "/projects/heallink.png",
  },
  {
    id: "aether",
    title: "Aether Fleet",
    category: "Autonomous Multi-Agent",
    image: "/projects/evguard.png",
  },
  {
    id: "leetie",
    title: "Leetie Terminal",
    category: "Algorithmic Systems",
    image: "/creative/leetie-screenshot.png",
  },
];

export function HeroOrbitTiles() {
  const [angle, setAngle] = useState(0);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const mouseVelocity = useRef(0);
  const lastMouseX = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - lastMouseX.current;
      lastMouseX.current = e.clientX;
      mouseVelocity.current = deltaX * 0.003;
      targetAngle.current += mouseVelocity.current;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Ambient continuous rotation + mouse drag inertia
      targetAngle.current += 0.15 * dt;
      currentAngle.current += (targetAngle.current - currentAngle.current) * 0.08;
      setAngle(currentAngle.current);

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const totalCards = ORBIT_CARDS.length;
  const radiusX = 380; // horizontal orbital radius in px
  const radiusY = 48;  // vertical orbital radius in px

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {ORBIT_CARDS.map((card, index) => {
          // Angle for each card
          const cardAngle = angle + (index * (2 * Math.PI)) / totalCards;
          const cos = Math.cos(cardAngle);
          const sin = Math.sin(cardAngle);

          // Position along elliptical path
          const x = cos * radiusX;
          const y = sin * radiusY;

          // Depth: sin(cardAngle) mapped from -1 (back) to 1 (front)
          const depth = (sin + 1) / 2; // 0 to 1
          const scale = 0.52 + depth * 0.48; // 0.52 to 1.0
          const opacity = 0.35 + depth * 0.65; // 0.35 to 1.0
          const blur = (1 - depth) * 9; // 9px blur in back, 0px in front
          const brightness = 0.45 + depth * 0.55;
          const zIndex = Math.round(depth * 100);

          return (
            <div
              key={card.id}
              className="absolute will-change-transform transition-opacity duration-150 flex items-center justify-center"
              style={{
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                zIndex,
                filter: `blur(${blur.toFixed(1)}px) brightness(${brightness.toFixed(2)})`,
                opacity,
              }}
            >
              <div className="w-[360px] md:w-[440px] aspect-[16/10] bg-[var(--bg-sunken)] border border-[var(--line-strong)] shadow-[0_24px_50px_rgba(0,0,0,0.6)] overflow-hidden relative rounded-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-sunken)]/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full font-mono text-[11px]">
                    <span className="text-[var(--ink)] font-bold">{card.title}</span>
                    <span className="text-[var(--muted)]">{card.category}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
