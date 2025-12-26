import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[#1B1B1B] py-32 px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <h2 className="text-[#D8D3CC] text-[50px] font-semibold tracking-[-2px] text-center mb-24">
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] mb-20">
          
          {/* Large Project with Pop Effect */}
          <div className="lg:col-span-7 flex flex-col gap-[30px] group">
            <div className="w-full aspect-[738/405] bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5 relative">
              <img 
                src="/projects/rakthro.png" 
                alt="Rakthro" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[#D8D3CC] text-[34px] font-semibold leading-[46px] tracking-[-1px] group-hover:text-white transition-colors">
                Rakthro — A Complete Medical Coordination Platform
              </h3>
              <p className="text-[#D8D3CC] text-[16px] leading-[32px] font-normal opacity-80">
                Engineered with a reliable Java backend and streamlined CSV modules...
              </p>
              
              {/* Updated Button to Link */}
              <a 
                href="https://github.com/Shreeprasandh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[250px] py-[10px] bg-[#D8D3CC]/50 rounded-[8px] text-[14px] font-semibold text-black/50 hover:bg-[#D8D3CC] hover:text-black transition-all flex items-center justify-center cursor-pointer"
              >
                view more →
              </a>
            </div>
          </div>

          {/* Side Projects with Pop Effect */}
          <div className="lg:col-span-5 flex flex-col gap-[40px]">
            {[
              { id: 'evguard', title: 'EvGuard (UI) — Plan your drive...', img: '/projects/evguard.png', aspect: 'aspect-[462/273]' },
              { id: 'lumen', title: 'Lumen Point — Decoding complex topics...', img: '/projects/lumen.png', aspect: 'aspect-[462/242]' }
            ].map((proj) => (
              <div key={proj.id} className="flex flex-col gap-[18px] group">
                <div className={`w-full ${proj.aspect} bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5`}>
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                <h3 className="text-[#D8D3CC] text-[22px] font-semibold leading-[30px] group-hover:text-white transition-colors">
                  {proj.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row with Pop Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] max-w-[1043px] mx-auto pt-10 border-t border-white/5">
          {[
            { id: 'hangman', title: 'Hangman — standalone puzzle game', img: '/projects/hangman.png' },
            { id: 'bloom', title: 'Bloom & Blush — e-commerce platform', img: '/projects/bloom.png' },
            { id: 'heallink', title: 'HealLink (UI) — Virtual doctors', img: '/projects/heallink.png' }
          ].map((proj) => (
            <div key={proj.id} className="flex flex-col gap-[18px] group">
              <div className="w-full aspect-[305/160] bg-[#0F0F0F] rounded-[8px] overflow-hidden border border-white/5">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
              <h3 className="text-[#D8D3CC] text-[18px] font-semibold leading-[30px] group-hover:text-white transition-colors">
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