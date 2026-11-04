"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTiltX?: number;
  maxTiltY?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTiltX = 18,
  maxTiltY = 24,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for 3D rotation
  const springConfig = { stiffness: 260, damping: 22 };
  const rawX = useSpring(0, springConfig);
  const rawY = useSpring(0, springConfig);

  const rotateX = useTransform(rawY, [-1, 1], [maxTiltX, -maxTiltX]);
  const rotateY = useTransform(rawX, [-1, 1], [-maxTiltY, maxTiltY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (window._haptics?.trigger) window._haptics.trigger("selection");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
