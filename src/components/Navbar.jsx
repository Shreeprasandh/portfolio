import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = ['home', 'about', 'projects', 'journey'];

  return (
    <nav className="w-full h-[69px] bg-[#1B1B1B] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-8">
        
        {/* Logo (Hamster Wheel Animation) */}
        <div 
          onClick={scrollToTop}
          className="cursor-pointer z-[60] flex items-center justify-center h-10 w-10 hover:scale-110 transition-transform duration-300"
          title="Back to top"
        >
          <div aria-label="Hamster running" role="img" className="wheel-and-hamster">
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
        </div>

        {/* Desktop Links - Untouched */}
        <div className="hidden md:flex items-center gap-[40px]">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'home' ? '#' : `#${link}`} 
              onClick={(e) => link === 'home' && (e.preventDefault(), scrollToTop())}
              className="text-[#D8D3CC] text-[16px] lowercase hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="bg-[#D8D3CC] text-[#1B1B1B] px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold">
            Contact me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden flex flex-col justify-center items-end gap-[6px] z-[60] w-8 h-8 cursor-pointer"
        >
          {/* Animated Hamburger Bars */}
          <span className={`h-[2px] bg-[#D8D3CC] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`}></span>
          <span className={`h-[2px] bg-[#D8D3CC] transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
          <span className={`h-[2px] bg-[#D8D3CC] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-2'}`}></span>
        </button>

        {/* Mobile Right Corner Pop-up */}
        <div className={`
          fixed top-[69px] right-6 w-[200px] bg-[#0F0F0F] border border-[#D8D3CC]/10 rounded-b-[16px] p-6 shadow-2xl transition-all duration-300 md:hidden
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}>
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={link === 'home' ? '#' : `#${link}`} 
                onClick={(e) => {
                  if (link === 'home') { e.preventDefault(); scrollToTop(); }
                  setIsOpen(false);
                }}
                className="text-[#D8D3CC] text-[18px] lowercase font-light tracking-wide hover:pl-2 transition-all"
              >
                {link}
              </a>
            ))}
            <div className="h-[1px] bg-[#D8D3CC]/10 my-2" />
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#D8D3CC] text-[#1B1B1B] py-3 rounded-[8px] text-[14px] font-semibold text-center"
            >
              Contact me
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;