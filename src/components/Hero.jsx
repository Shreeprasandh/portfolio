import React from 'react';

const Hero = () => {
  const name = "SHREEPRASANDH ";
  const repeatedName = new Array(25).fill(name).join("");

  return (
    <div className="relative w-full h-[90vh] bg-[#1B1B1B] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Marquee - Ultra Slow & Subtle */}
      <div className="absolute whitespace-nowrap flex select-none pointer-events-none">
        <div className="animate-marquee flex gap-4">
          <span className="text-[#D8D3CC] opacity-[0.04] text-[100px] font-bold uppercase tracking-[0.2em] font-serif">
            {repeatedName}
          </span>
          <span className="text-[#D8D3CC] opacity-[0.04] text-[100px] font-bold uppercase tracking-[0.2em] font-serif">
            {repeatedName}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[#D8D3CC] text-[clamp(40px,10vw,100px)] font-bold font-serif leading-none tracking-[-2px] text-center">
          SHREEPRASANDH
        </h1>
        <p className="mt-6 text-[#D8D3CC] opacity-60 text-[14px] font-light tracking-[0.4em] uppercase text-center">
          Taming code, crafting experiences
        </p>
      </div>
    </div>
  );
};

export default Hero;