import React from 'react';

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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Hamster Wheel Animation */}
        <div aria-label="Orange hamster running in a metal wheel" role="img" className="wheel-and-hamster mb-8">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-[#D8D3CC] text-[clamp(40px,10vw,100px)] font-bold font-serif leading-none tracking-[-2px] text-center">
          SHREEPRASANDH
        </h1>
        
        {/* Subtitle - Optimized for Mobile */}
        <p className="mt-4 md:mt-6 text-[#D8D3CC] opacity-60 text-[10px] md:text-[14px] font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-center max-w-[280px] md:max-w-none">
          Taming code, crafting experiences
        </p>
      </div>
    </div>
  );
};

export default Hero;