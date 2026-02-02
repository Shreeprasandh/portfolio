import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'JS', icon: '/icons/js.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'OpenAI', icon: '/icons/openai.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'C', icon: '/icons/c.svg' },
    { name: 'C++', icon: '/icons/cpp.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Vibe', icon: '/icons/vibe.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'CSV', icon: '/icons/csv.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ];

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
            
            {/* Fixed 5-Column Grid for both Mobile and Laptop */}
            <div className="grid grid-cols-5 gap-3 md:gap-4 w-full max-w-[280px] md:max-w-[450px]">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-black rounded-[8px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 relative group border border-white/5 overflow-hidden"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-[7px] md:text-[10px] text-white font-bold tracking-wider uppercase text-center">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-[#D8D3CC] text-[13px] md:text-[15px] font-light italic opacity-50 mt-2">
              "Some skills are under active development."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;