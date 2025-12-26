import React from 'react';

const Navbar = () => {
  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="w-full h-[69px] bg-[#1B1B1B] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-8">
        
        {/* Logo - Clickable to go to top */}
        <div 
          onClick={scrollToTop}
          className="text-[#D8D3CC] text-[20px] font-bold italic tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
        >
          SP
        </div>

        {/* Right Side Group - Links and Button */}
        <div className="flex items-center gap-[40px]">
          <div className="hidden md:flex items-center gap-[40px]">
            {['home', 'about', 'projects', 'journey'].map((link) => (
              <a 
                key={link} 
                href={link === 'home' ? '#' : `#${link}`} 
                onClick={(e) => {
                  if (link === 'home') {
                    e.preventDefault(); // Stop the default # jump
                    scrollToTop();      // Run the smooth scroll
                  }
                }}
                className="text-[#D8D3CC] text-[16px] font-normal lowercase hover:opacity-60 transition-opacity cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>

          <a 
            href="#contact"
            className="bg-[#D8D3CC] text-[#1B1B1B] px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold hover:bg-white transition-colors cursor-pointer inline-block"
          >
            Contact me
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;