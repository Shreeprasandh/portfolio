import React from 'react';

const About = () => {
  const row1 = [
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'JS', icon: '/icons/js.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.webp' },
    { name: 'Figma', icon: '/icons/figma.svg' },
  ];

  const row2 = [
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'Node JS', icon: '/icons/javascript-nodejs-logo-27.png' },
    { name: 'Git', icon: '/icons/github.svg' },
  ];

  const vibeSkill = { name: 'Vibe', icon: '/icons/vibe.svg' };

  return (
    <section id="about" className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-[1158px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* About Me Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1px] md:tracking-[-2px]">
            About Me
          </h2>
          <p className="text-[#D8D3CC] text-[18px] md:text-[25px] font-light leading-[32px] md:leading-[50px] tracking-[-0.5px] md:tracking-[-1px] opacity-90">
            I’m Shreeprasandh K, a B.Tech IT student focused on building clean, structured software. 
            I enjoy solving problems through logic-driven development and creating systems that are 
            simple, scalable, and intentional. I’m continuously learning, experimenting, and refining 
            my skills to grow into a developer.
          </p>
          <div className="mt-4">
            <a 
              href="/shreeprasandh_resume.pdf" 
              download="shreeprasandh_resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8D3CC] text-[#D8D3CC] rounded-full hover:bg-[#D8D3CC] hover:text-[#1B1B1B] transition-all duration-300 font-medium text-[16px] md:text-[18px]"
            >
              <span>Resume</span> 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Education Column */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1px] md:tracking-[-2px]">
              Education
            </h2>
            
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#D8D3CC] text-[20px] md:text-[25px] font-light leading-tight">B.Tech in Information Technology</h3>
                <p className="text-[#D8D3CC] text-[16px] md:text-[20px] font-light opacity-70">Easwari Engineering College (SRM Group)</p>
                <p className="text-[#D8D3CC] text-[14px] md:text-[18px] font-light opacity-50 italic">2024 – Present</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[#D8D3CC] text-[20px] md:text-[25px] font-light leading-tight">Higher Secondary & Schooling</h3>
                <p className="text-[#D8D3CC] text-[16px] md:text-[20px] font-light opacity-70">Bharatiya Vidya Bhavan (BVB)</p>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1px] md:tracking-[-2px]">
              Skills
            </h2>
            
            <div className="flex flex-col gap-3 md:gap-4 w-full">
              {/* Row 1: HTML, CSS, JS, TypeScript, Figma */}
              <div className="flex flex-wrap items-center gap-x-6 md:gap-x-9 gap-y-3 md:gap-y-4">
                {row1.map((skill, index) => (
                  <div 
                    key={index}
                    className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-black rounded-[8px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 relative group border border-white/5 overflow-hidden flex-shrink-0"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full z-10 transition-transform duration-500 group-hover:scale-110 ${
                        skill.name === 'TypeScript'
                          ? 'object-contain p-2.5 md:p-3'
                          : skill.name === 'Node JS'
                          ? 'object-contain p-0.5 md:p-1'
                          : skill.icon.endsWith('.png') || skill.icon.endsWith('.webp')
                          ? 'object-contain p-1.5 md:p-2'
                          : 'object-cover'
                      }`}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-0.5">
                      <span className={`text-white font-bold uppercase text-center leading-none whitespace-nowrap ${
                        skill.name.length > 8 
                          ? 'text-[5.5px] md:text-[8px] tracking-tight' 
                          : skill.name.length > 5 
                          ? 'text-[6.5px] md:text-[9px] tracking-normal' 
                          : 'text-[7px] md:text-[10px] tracking-wider'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Java, React, Tailwind, Node JS, Git */}
              <div className="flex flex-wrap items-center gap-x-6 md:gap-x-9 gap-y-3 md:gap-y-4">
                {row2.map((skill, index) => (
                  <div 
                    key={index}
                    className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-black rounded-[8px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 relative group border border-white/5 overflow-hidden flex-shrink-0"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full z-10 transition-transform duration-500 group-hover:scale-110 ${
                        skill.name === 'TypeScript'
                          ? 'object-contain p-2.5 md:p-3'
                          : skill.name === 'Node JS'
                          ? 'object-contain p-0.5 md:p-1'
                          : skill.icon.endsWith('.png') || skill.icon.endsWith('.webp')
                          ? 'object-contain p-1.5 md:p-2'
                          : 'object-cover'
                      }`}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-0.5">
                      <span className={`text-white font-bold uppercase text-center leading-none whitespace-nowrap ${
                        skill.name.length > 8 
                          ? 'text-[5.5px] md:text-[8px] tracking-tight' 
                          : skill.name.length > 5 
                          ? 'text-[6.5px] md:text-[9px] tracking-normal' 
                          : 'text-[7px] md:text-[10px] tracking-wider'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3: Vibe icon + Text */}
              <div className="flex items-center gap-x-6 md:gap-x-9">
                <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-black rounded-[8px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 relative group border border-white/5 overflow-hidden flex-shrink-0">
                  <img 
                    src={vibeSkill.icon} 
                    alt={vibeSkill.name} 
                    className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-0.5">
                    <span className="text-[7px] md:text-[10px] text-white font-bold tracking-wider uppercase text-center">
                      {vibeSkill.name}
                    </span>
                  </div>
                </div>

                <p className="text-[#D8D3CC] text-[13px] md:text-[15px] font-light italic opacity-50">
                  "Some skills are under active development lol."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;