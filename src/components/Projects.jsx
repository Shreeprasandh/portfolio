import React, { useRef, useState } from 'react';
import { motion as Motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltImage = ({ src, alt, width, height, scaleMax = 1.035, maxTilt = 5 }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinates between -0.5 and 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for rotation and scale
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 280,
    damping: 24,
  });
  const scale = useSpring(isHovered ? scaleMax : 1, {
    stiffness: 280,
    damping: 24,
  });

  // Glare position
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalized position from center (-0.5 to 0.5)
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(normX);
    mouseY.set(normY);

    // Glare percentage
    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative cursor-pointer [perspective:1000px] z-0 hover:z-30"
    >
      <Motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className={`w-full h-full relative rounded-[8px] transition-shadow duration-500 ${
          isHovered 
            ? 'shadow-[0_20px_45px_rgba(0,0,0,0.8)] ring-1 ring-white/20' 
            : 'shadow-none ring-0'
        }`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-[8px] pointer-events-none select-none block"
        />

        {/* Specular Glare Sheen Overlay */}
        <div 
          className="absolute inset-0 rounded-[8px] pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
      </Motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1.5px] md:tracking-[-2px] text-center mb-16 md:mb-24">
          Personal Projects
        </h2>

        {/* =========================================
            MAIN SECTION: LynDesk & Side Projects
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] md:gap-[40px] mb-12 md:mb-20">
          
          {/* --- LEFT COLUMN: LynDesk --- */}
          <div className="lg:col-span-7 flex flex-col gap-[20px] md:gap-[30px] group">
            <div className="w-full aspect-[738/405] bg-[#0F0F0F] rounded-[8px] border border-white/5 relative">
              <TiltImage 
                src="/projects/lyndesk.png" 
                alt="LynDesk" 
                width="738"
                height="405"
                scaleMax={1.035}
                maxTilt={4}
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              
              {/* MOBILE TEXT */}
              <h3 className="lg:hidden text-[#D8D3CC] text-[22px] font-semibold leading-tight tracking-[-0.5px] group-hover:text-white transition-colors">
                LynDesk — Engineering Workstation & Portfolio Hub
              </h3>
              <p className="lg:hidden text-[#D8D3CC] text-[14px] leading-[22px] font-normal opacity-80">
                Bridging hackathon collaboration, competitive coding streaks, and AI study paths into verified developer portfolios.
              </p>

              {/* LAPTOP TEXT */}
              <h3 className="hidden lg:block text-[#D8D3CC] text-[34px] font-semibold leading-[44px] tracking-[-1px] group-hover:text-white transition-colors">
                LynDesk — All-in-One Engineering Workstation for Hackathons, AI Study & Portfolios
              </h3>
              <p className="hidden lg:block text-[#D8D3CC] text-[16px] leading-[28px] font-normal opacity-80">
                Built with Next.js 16, Supabase Realtime, and Gemini AI — bridging hackathon collaboration, competitive coding streaks, and AI study paths into verified developer portfolios for students, faculty, and recruiters.
              </p>
              
              {/* BUTTON */}
              <a 
                href="https://lyndesk.tech"
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
                id: 'rakthro', 
                mobileTitle: 'Rakthro', 
                desktopTitle: 'Rakthro — Medical coordination platform for donors, chronic care & logistics.', 
                img: '/projects/rakthro.png', 
                aspect: 'aspect-[462/273]' 
              },
              { 
                id: 'lumen', 
                mobileTitle: 'Lumen Point', 
                desktopTitle: 'Lumen Point — Decoding complex topics through intuitive visualization.', 
                img: '/projects/lumen.png', 
                aspect: 'aspect-[462/242]' 
              },
              { id: 'edgeai', mobileTitle: 'Federated Edge AI', img: '/projects/2.png', aspect: 'aspect-[305/160]', mobileOnly: true },
              { id: 'vanguardz', mobileTitle: 'VanguarDZ', img: '/projects/NEWIMAGE.png', aspect: 'aspect-[305/160]', mobileOnly: true }
            ].map((proj) => (
              <div 
                key={proj.id} 
                className={`flex flex-col gap-[8px] md:gap-[18px] group ${proj.mobileOnly ? 'lg:hidden' : ''}`}
              >
                {/* ASPECT RATIO FIX:
                   - Mobile: 'aspect-[462/273]' applied to ALL cards for perfect 2x2 alignment.
                   - Laptop: 'lg:${proj.aspect}' restores the specific height for each project.
                */}
                <div className={`w-full aspect-[462/273] lg:${proj.aspect} bg-[#0F0F0F] rounded-[8px] border border-white/5 relative`}>
                  <TiltImage 
                    src={proj.img} 
                    alt={proj.mobileTitle} 
                    width="462"
                    height="273"
                    scaleMax={1.05}
                    maxTilt={5}
                  />
                </div>
                
                {/* Mobile Title */}
                <h3 className="lg:hidden text-[#D8D3CC] text-[12px] font-medium leading-tight group-hover:text-white transition-colors">
                  {proj.mobileTitle}
                  {proj.id === 'vanguardz' && (
                    <a
                      href="https://vanguardz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-[1.5px] ml-1.5 bg-[#D8D3CC]/10 text-[#D8D3CC] border border-[#D8D3CC]/30 rounded-[4px] text-[11px] font-medium opacity-50 hover:opacity-100 hover:bg-[#D8D3CC] hover:text-black hover:border-transparent transition-all duration-300 align-middle cursor-pointer leading-none"
                    >
                      -&gt;play
                    </a>
                  )}
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
            { id: 'edgeai', title: 'Federated Edge AI — Aircraft health & tamper-proof records.', img: '/projects/2.png' },
            { id: 'evguard', title: 'EvGuard (UI) — Plan your drive, book your charge, power your ride.', img: '/projects/evguard.png' },
            { id: 'vanguardz', title: 'VanguarDZ — a co-op cyberpunk typing shooter.', img: '/projects/NEWIMAGE.png' }
          ].map((proj) => (
            <div key={proj.id} className="flex flex-col gap-[12px] group">
              <div className="w-full aspect-[305/150] bg-[#0F0F0F] rounded-[8px] border border-white/5 relative">
                <TiltImage 
                  src={proj.img} 
                  alt={proj.title} 
                  width="305"
                  height="150"
                  scaleMax={1.05}
                  maxTilt={5}
                />
              </div>
              <h3 className="text-[#D8D3CC] text-[15px] font-medium leading-[22px] group-hover:text-white transition-colors">
                {proj.title}
                {proj.id === 'vanguardz' && (
                  <a
                    href="https://vanguardz.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-[2px] ml-1.5 bg-[#D8D3CC]/10 text-[#D8D3CC] border border-[#D8D3CC]/30 rounded-[4px] text-[13px] font-medium opacity-50 hover:opacity-100 hover:bg-[#D8D3CC] hover:text-black hover:border-transparent transition-all duration-300 align-middle cursor-pointer leading-none"
                  >
                    -&gt;play
                  </a>
                )}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;