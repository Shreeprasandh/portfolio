import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1.5px] md:tracking-[-2px] text-center mb-16 md:mb-24">
          Personal Projects
        </h2>

        {/* =========================================
            MAIN SECTION: Rakthro & Side Projects
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] md:gap-[40px] mb-12 md:mb-20">
          
          {/* --- LEFT COLUMN: Rakthro --- */}
          <div className="lg:col-span-7 flex flex-col gap-[20px] md:gap-[30px] group">
            <div className="w-full aspect-[738/405] bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5 relative">
              <img 
                src="/projects/rakthro.png" 
                alt="Rakthro" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex flex-col gap-[15px]">
              
              {/* MOBILE TEXT */}
              <h3 className="lg:hidden text-[#D8D3CC] text-[22px] font-semibold leading-tight tracking-[-0.5px] group-hover:text-white transition-colors">
                Rakthro — Medical Coordination Platform
              </h3>
              <p className="lg:hidden text-[#D8D3CC] text-[14px] leading-[22px] font-normal opacity-80">
                Engineered with a reliable Java backend and streamlined CSV modules for healthcare logistics.
              </p>

              {/* LAPTOP TEXT */}
              <h3 className="hidden lg:block text-[#D8D3CC] text-[34px] font-semibold leading-[44px] tracking-[-1px] group-hover:text-white transition-colors">
                Rakthro — A Complete Medical Coordination Platform for Donors, Chronic Care & Hospitals
              </h3>
              <p className="hidden lg:block text-[#D8D3CC] text-[16px] leading-[28px] font-normal opacity-80">
                Engineered with a reliable Java backend and streamlined CSV modules handling donation cycles, disease-specific tracking, appointments, and admin operations — now transitioning into a scalable web-based solution.
              </p>
              
              {/* BUTTON */}
              <a 
                href="https://github.com/Shreeprasandh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit mr-auto lg:mr-0 lg:ml-auto px-5 lg:px-8 py-2 lg:py-3 bg-[#D8D3CC]/50 lg:bg-[#FFFFFF]/10 rounded-[6px] lg:rounded-[8px] text-[12px] lg:text-[14px] font-semibold text-black/50 lg:text-[#D8D3CC] hover:bg-[#D8D3CC] hover:text-black transition-all flex items-center justify-center cursor-pointer"
              >
                view more →
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Side Projects --- */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:flex lg:flex-col gap-[15px] md:gap-[40px]">
            {[
              { 
                id: 'evguard', 
                mobileTitle: 'EvGuard (UI)', 
                desktopTitle: 'EvGuard (UI) — Plan your drive, book your charge, power your ride.', 
                img: '/projects/evguard.png', 
                aspect: 'aspect-[462/273]' 
              },
              { 
                id: 'lumen', 
                mobileTitle: 'Lumen Point', 
                desktopTitle: 'Lumen Point — Decoding complex topics through intuitive visualization.', 
                img: '/projects/lumen.png', 
                aspect: 'aspect-[462/242]' 
              },
              { id: 'bloom', mobileTitle: 'Bloom & Blush', img: '/projects/bloom.png', aspect: 'aspect-[305/160]', mobileOnly: true },
              { id: 'hangman', mobileTitle: 'Hangman', img: '/projects/hangman.png', aspect: 'aspect-[305/160]', mobileOnly: true }
            ].map((proj) => (
              <div 
                key={proj.id} 
                className={`flex flex-col gap-[8px] md:gap-[18px] group ${proj.mobileOnly ? 'lg:hidden' : ''}`}
              >
                {/* ASPECT RATIO FIX:
                   - Mobile: 'aspect-[462/273]' applied to ALL cards for perfect 2x2 alignment.
                   - Laptop: 'lg:${proj.aspect}' restores the specific height for each project.
                */}
                <div className={`w-full aspect-[462/273] lg:${proj.aspect} bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5`}>
                  <img 
                    src={proj.img} 
                    alt={proj.mobileTitle} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                
                {/* Mobile Title */}
                <h3 className="lg:hidden text-[#D8D3CC] text-[12px] font-medium leading-tight group-hover:text-white transition-colors">
                  {proj.mobileTitle}
                </h3>
                
                {/* Desktop Title */}
                <h3 className="hidden lg:block text-[#D8D3CC] text-[20px] font-semibold leading-[28px] group-hover:text-white transition-colors">
                  {proj.desktopTitle}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            BOTTOM ROW (Desktop Only) - SMALLER
           ========================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-[30px] max-w-[900px] mx-auto pt-10 border-t border-white/5">
          {[
            { id: 'hangman', title: 'Hangman — a standalone puzzle game: delightfully simple.', img: '/projects/hangman.png' },
            { id: 'bloom', title: 'Bloom & Blush — e-commerce platform for women’s accessories.', img: '/projects/bloom.png' },
            { id: 'heallink', title: 'HealLink (UI) — Connecting patients to virtual doctors.', img: '/projects/heallink.png' }
          ].map((proj) => (
            <div key={proj.id} className="flex flex-col gap-[12px] group">
              <div className="w-full aspect-[305/150] bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
              <h3 className="text-[#D8D3CC] text-[15px] font-medium leading-[22px] group-hover:text-white transition-colors">
                {proj.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;