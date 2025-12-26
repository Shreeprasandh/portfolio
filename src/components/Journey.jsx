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
    <section id="journey" className="w-full bg-[#1B1B1B] py-32 px-8 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        <h2 className="text-[#D8D3CC] text-[48px] font-semibold tracking-[-2px] mb-[100px] text-center">
          Dream & Journey
        </h2>

        <div className="relative">
          
          {/* THE LINE: Positioned exactly at the 41.2% mark to match icons */}
            <div 
            className="absolute left-[41.2%] w-[2px] top-0 bottom-0 hidden lg:block"
            style={{
                background: 'linear-gradient(180deg, rgba(182, 217, 159, 0.375) 0%, rgba(219, 224, 159, 0.375) 25%, rgba(224, 214, 175, 0.375) 50%, rgba(234, 200, 151, 0.375) 75%, rgba(27, 27, 27, 0) 100%)'
            }}
            />

          {stages.map((stage, index) => (
            <div key={index} className="relative grid grid-cols-1 lg:grid-cols-[41.2%_1fr] mb-40 w-full items-start">
              
              {/* LEFT SIDE: Review Box (Fits in the 41.2% column) */}
              <div className="lg:pr-16 flex justify-end">
                <div className="w-full max-w-[380px] bg-[#0F0F0F] border border-[#1C1C21] rounded-[12px] p-6 flex flex-col gap-4 shadow-xl">
                  <div className="flex gap-1 text-[#D8D3CC]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#D8D3CC] text-[16px] leading-[26px] opacity-80 italic font-light">
                    "{stage.feedback}"
                  </p>
                </div>
              </div>

              {/* CENTER ICON: Absolute positioned to sit ON the line at 41.2% */}
              <div className="absolute left-[41.2%] -translate-x-1/2 z-10 hidden lg:block">
                <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border-[6px] border-[#1B1B1B] shadow-2xl">
                  <img src={stage.icon} alt="stage" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>

              {/* RIGHT SIDE: Details (Takes up the remaining 1fr column) */}
              <div className="lg:pl-20 mt-24 lg:mt-0">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-[#D8D3CC] text-[32px] font-semibold tracking-tight">{stage.title}</h3>
                    <div className="flex items-center gap-2 mt-2 opacity-60">
                       <span className="text-[18px]">📅 {stage.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-[#D8D3CC] italic text-[18px] opacity-70">Responsibilities</h4>
                    <ul className="flex flex-col gap-3">
                      {stage.responsibilities.map((item, i) => (
                        <li key={i} className="text-[#D8D3CC] text-[17px] opacity-90 leading-relaxed flex items-start gap-3">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D8D3CC]/40 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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