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
    <section id="about" className="w-full bg-[#1B1B1B] py-32 px-8">
      <div className="max-w-[1158px] mx-auto flex flex-col gap-24">
        
        {/* About Me Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#D8D3CC] text-[50px] font-semibold tracking-[-2px]">About Me</h2>
          <p className="text-[#D8D3CC] text-[25px] font-light leading-[50px] tracking-[-1px] opacity-90 max-w-[1158px]">
            I’m Shreeprasandh K, a B.Tech IT student focused on building clean, structured software. 
            I enjoy solving problems through logic-driven development and creating systems that are 
            simple, scalable, and intentional. I’m continuously learning, experimenting, and refining 
            my skills to grow into a developer who values clarity over chaos and purpose over shortcuts.
          </p>
        </div>

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Education Column */}
          <div className="flex flex-col gap-10">
            <h2 className="text-[#D8D3CC] text-[50px] font-semibold tracking-[-2px]">Education</h2>
            
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#D8D3CC] text-[25px] font-light leading-tight">B.Tech in Information Technology</h3>
                <p className="text-[#D8D3CC] text-[20px] font-light opacity-70">Easwari Engineering College (SRM Group)</p>
                <p className="text-[#D8D3CC] text-[18px] font-light opacity-50 italic">2024 – Present</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[#D8D3CC] text-[25px] font-light leading-tight">Higher Secondary & Schooling</h3>
                <p className="text-[#D8D3CC] text-[20px] font-light opacity-70">Bharatiya Vidya Bhavan (BVB)</p>
                <p className="text-[#D8D3CC] text-[18px] font-light opacity-50 max-w-[500px]">
                  Strong academic foundation with a focus on computer science and problem-solving.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Column */}
        <div className="flex flex-col gap-10">
        <h2 className="text-[#D8D3CC] text-[50px] font-semibold tracking-[-2px]">Skills</h2>
        
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 max-w-[450px]">
            {skills.map((skill, index) => (
            <div 
                key={index}
                className="w-[60px] h-[60px] bg-black rounded-[8px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-help relative group border border-white/5 overflow-hidden"
            >
                {/* The Icon Image - Now filling the container */}
                <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                    e.target.style.display = 'none';
                    // Show text if image fails
                    e.target.nextSibling.style.display = 'flex';
                }}
                />
                
                {/* Fallback Text - Only visible if image fails */}
                <div className="hidden absolute inset-0 items-center justify-center bg-[#0F0F0F] z-0">
                <span className="text-[10px] text-white/40 font-bold uppercase">{skill.name}</span>
                </div>

                {/* Hover Name Overlay - Appears only on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-[10px] text-white font-bold tracking-wider uppercase">
                    {skill.name}
                </span>
                </div>
            </div>
            ))}
        </div>
        
        <p className="text-[#D8D3CC] text-[15px] font-light italic opacity-50 mt-4">
            "Some skills are under active development."
        </p>
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;