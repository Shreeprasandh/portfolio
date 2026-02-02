import React from 'react';

const Journey = () => {
  const stages = [
    {
      title: "The Build Stage",
      date: "January 2024 - Present",
      feedback: "Shreeprasandh brought vision and technical skill to his projects, transforming ideas into fully functional systems. His work has been crucial in creating polished, scalable applications.",
      responsibilities: [
        "Developed complete applications like Rakthro, EV Guard & HealLink ,etc.",
        "Designed structured architectures with OOP, modules, and scalable components.",
        "Deployed, hosted, and managed codebases while planning long-term technical growth."
      ],
      icon: "/icons/stage-build.svg"
    },
    {
      title: "The Grind Stage",
      date: "June 2021 - December 2024",
      feedback: "Shreeprasandh's work during the Grind Phase was impressive. He tackled complex projects with focus, building robust systems while mastering core programming and development practices.",
      responsibilities: [
        "Built core knowledge in Java, DSA, Git, CLI structure, and file handling.",
        "Worked on academic + personal projects with discipline and consistency.",
        "Adopted clean coding habits, debugging workflows, and version control routines."
      ],
      icon: "/icons/stage-grind.svg"
    },
    {
      title: "The Spark Stage",
      date: "March 2020 - May 2021",
      feedback: "Shreeprasandh's early projects showed curiosity and dedication. He built small applications that were functional, well-structured, and demonstrated a strong grasp of programming fundamentals.",
      responsibilities: [
        "Explored the basics of web development — HTML, CSS, simple scripts.",
        "Learned foundational programming practices through small experiments.",
        "Developed early problem-solving habits by fixing errors and understanding logic."
      ],
      icon: "/icons/stage-spark.svg"
    }
  ];

  return (
    <section id="journey" className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Updated Title */}
        <h2 className="text-[#D8D3CC] text-[32px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px] mb-12 md:mb-[100px] text-left md:text-center">
          Dream & Journey
        </h2>

        <div className="relative">
          
          {/* THE LINE: 
              - Fixed at left-[24px] for Mobile
              - Fixed at left-[41.2%] for Laptop
              - Fades out at the bottom (Linear Gradient)
          */}
          <div 
            className="absolute left-[24px] lg:left-[41.2%] w-[1px] md:w-[2px] top-0 bottom-0 z-0"
            style={{
              background: 'linear-gradient(180deg, rgba(216, 211, 204, 0.2) 0%, rgba(27, 27, 27, 0) 100%)'
            }}
          />

          {stages.map((stage, index) => (
            <div key={index} className="relative flex flex-col lg:grid lg:grid-cols-[41.2%_1fr] mb-16 md:mb-40 w-full">
              
              {/* TIMELINE ICON */}
              <div className="absolute top-0 left-[24px] lg:left-[41.2%] -translate-x-1/2 z-10">
                <div className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] bg-white rounded-full flex items-center justify-center border-[4px] lg:border-[6px] border-[#1B1B1B] shadow-2xl">
                  <img src={stage.icon} alt="stage" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] object-contain" />
                </div>
              </div>

              {/* CONTENT WRAPPER */}
              <div className="pl-[60px] lg:pl-0 flex flex-col lg:contents">
                
                {/* 1. Header & Responsibilities (Right Side on Laptop) */}
                <div className="order-1 lg:order-2 lg:pl-20 pt-1 lg:pt-0">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-[#D8D3CC] text-[24px] md:text-[32px] font-semibold tracking-tight leading-tight">
                        {stage.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 opacity-60">
                        <span className="text-[14px] md:text-[18px]">📅 {stage.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h4 className="text-[#D8D3CC] italic text-[16px] md:text-[18px] opacity-70">Responsibilities</h4>
                      <ul className="flex flex-col gap-3">
                        {stage.responsibilities.map((item, i) => (
                          <li key={i} className="text-[#D8D3CC] text-[15px] md:text-[17px] opacity-90 leading-relaxed flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D8D3CC]/40 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. Stars & Feedback (Left Side on Laptop) */}
                <div className="order-2 lg:order-1 lg:pr-16 flex justify-end mt-6 lg:mt-0">
                  
                  {/* Clean Text Wrapper (No Box Styling) */}
                  <div className="w-full lg:max-w-[380px] flex flex-col gap-3 lg:text-right">
                    
                    {/* Stars - Aligned right on laptop for symmetry */}
                    <div className="flex gap-1 text-[#D8D3CC] opacity-90 lg:justify-end">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[14px] lg:text-sm">★</span>
                      ))}
                    </div>

                    {/* Feedback Text */}
                    <p className="text-[#D8D3CC] text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] opacity-70 lg:opacity-80 lg:italic font-light">
                      {stage.feedback}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;