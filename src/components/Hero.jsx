import React from 'react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
  const name = "SHREEPRASANDH ";
  const repeatedName = new Array(25).fill(name).join("");

  return (
    <div className="relative w-full h-[90vh] bg-[#1B1B1B] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Marquee - Responsive sizes for the background text */}
      <div className="absolute whitespace-nowrap flex select-none pointer-events-none">
        <div className="animate-marquee flex gap-4">
          <span className="text-[#D8D3CC] opacity-[0.04] text-[60px] md:text-[100px] font-bold uppercase tracking-[0.2em] font-serif">
            {repeatedName}
          </span>
          <span className="text-[#D8D3CC] opacity-[0.04] text-[60px] md:text-[100px] font-bold uppercase tracking-[0.2em] font-serif">
            {repeatedName}
          </span>
        </div>
      </div>

      {/* Main Content with Smooth Spring Entrance */}
      <Motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center px-6"
      >
        {/* Main Name Heading */}
        <Motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[#D8D3CC] text-[clamp(40px,10vw,100px)] font-bold font-serif leading-none tracking-[-2px] text-center"
        >
          SHREEPRASANDH
        </Motion.h1>
        
        {/* Subtitle - Optimized for Mobile */}
        <Motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-4 md:mt-6 text-[#D8D3CC] text-[10px] md:text-[14px] font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-center max-w-[280px] md:max-w-none"
        >
          Taming code, crafting experiences
        </Motion.p>
      </Motion.div>
    </div>
  );
};

export default Hero;