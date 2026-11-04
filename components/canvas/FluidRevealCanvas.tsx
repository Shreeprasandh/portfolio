"use client";

import React, { useEffect, useRef } from "react";

export function FluidRevealCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; speed: number }>({
    x: -1000,
    y: -1000,
    active: false,
    speed: 0,
  });
  const lastPosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const getBgColor = () => {
      const style = getComputedStyle(document.body);
      const bg = style.getPropertyValue("--bg").trim();
      return bg || "#0a0a0c";
    };

    let currentColor = getBgColor();

    // Initial fill
    ctx.fillStyle = currentColor;
    ctx.fillRect(0, 0, width, height);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      currentColor = getBgColor();
      ctx.fillStyle = currentColor;
      ctx.fillRect(0, 0, width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        mouseRef.current = {
          x,
          y,
          active: true,
          speed: Math.min(dist, 50),
        };
        lastPosRef.current = { x, y };

        // Draw instant fluid droplet hole with destination-out
        const radius = Math.max(120, Math.min(200, 130 + dist * 1.5));
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, "rgba(0, 0, 0, 1)");
        grad.addColorStop(0.5, "rgba(0, 0, 0, 0.85)");
        grad.addColorStop(0.8, "rgba(0, 0, 0, 0.4)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        mouseRef.current.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Watch for theme changes on html or body
    const observer = new MutationObserver(() => {
      currentColor = getBgColor();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme-mode"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Decay loop: gently heals the fluid mask when idle
    const animate = () => {
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = currentColor;
      ctx.globalAlpha = 0.032; // Soft organic sealing rate
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
      style={{
        display: "block",
      }}
    />
  );
}
