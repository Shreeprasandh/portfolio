import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stage 1: Wait for a short moment (600ms) to show the logo/curtain
    const timer = setTimeout(() => {
      setIsExiting(true); // Start the slide-up animation
    }, 600);

    // Stage 2: Remove from DOM completely after animation finishes (600ms + 800ms animation = 1400ms)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1400);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[999] flex items-center justify-center bg-[#D8D3CC] transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)]
        ${isExiting ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className={`
        flex flex-col items-center transition-all duration-700
        ${isExiting ? 'opacity-0 scale-95 -translate-y-10' : 'opacity-100 scale-100'}
      `}>
        <h1 className="text-[#1B1B1B] text-[12px] font-medium tracking-[0.5em] uppercase font-inter">
          KAIZZCER
        </h1>
      </div>
    </div>
  );
};

export default Preloader;