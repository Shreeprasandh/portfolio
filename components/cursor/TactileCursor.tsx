"use client";

import React, { useEffect, useState, useRef } from "react";

export function TactileCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let lastX = 0;
    let lastY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(Boolean(isClickable));
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    let rafId: number;
    const render = () => {
      // Lerp smoothing (0.18)
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      const vx = currentX - lastX;
      const vy = currentY - lastY;
      lastX = currentX;
      lastY = currentY;

      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx);

      // Clamp stretch scale
      const scaleX = Math.min(1.4, 1 + speed * 0.015);
      const scaleY = Math.max(0.7, 1 - speed * 0.012);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 pointer-events-none z-50 transition-opacity duration-200 hidden md:block ${
        isPointer ? "w-6 h-6 -ml-3 -mt-3 bg-white/20 border border-white" : "w-3 h-3 bg-white"
      } rounded-full mix-blend-difference`}
    />
  );
}
