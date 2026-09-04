import React, { useEffect, useState, useRef } from 'react';

const useCountUp = (end, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Smooth cubic deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startAnimation]);

  return count;
};

const StatCard = ({ number, label }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericValue = parseInt(number);
  const suffix = number.replace(/[0-9]/g, '');
  const displayCount = useCountUp(numericValue, 2000, hasAnimated);

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-start justify-center p-[20px_24px] md:p-[24px_30px] gap-[4px] md:gap-[6px] w-full h-[110px] md:h-[130px] bg-[#0F0F0F] border border-[#1C1C21] rounded-[12px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#D8D3CC]/20 hover:translate-y-[-2px] ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className="text-[#D8D3CC] font-bold text-[32px] md:text-[40px] leading-tight">
        {displayCount}{suffix}
      </h2>
      <p className="text-[#D8D3CC] text-[14px] md:text-[18px] opacity-70">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { number: "2+", label: "Years of Expertise/Study" },
    { number: "8+", label: "Real-world projects" },
    { number: "150+", label: "Problems Solved" },
    { number: "100%", label: "Passion & Dedication" }
  ];

  return (
    <section className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8">
      {/* Grid Logic:
          - grid-cols-2: Mobile (2x2)
          - lg:grid-cols-4: Laptop (keeps your original layout)
      */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px]">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;