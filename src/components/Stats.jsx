import React, { useEffect, useState, useRef } from 'react';

const useCountUp = (end, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Use an "Ease Out" formula to make it slow down at the end
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
};

const StatCard = ({ number, label }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Detection for when the card is on screen
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
      className={`flex flex-col items-start justify-center p-[24px_30px] gap-[6px] w-full h-[130px] bg-[#0F0F0F] border border-[#1C1C21] rounded-[12px] transition-all duration-700 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-[#D8D3CC] font-bold text-[40px] leading-tight">
        {displayCount}{suffix}
      </h2>
      <p className="text-[#D8D3CC] text-[18px] opacity-70">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { number: "2+", label: "Years of Experience" },
    { number: "8+", label: "Real-world project" },
    { number: "150+", label: "Problem Solved" },
    { number: "100%", label: "Passion & Dedication" }
  ];

  return (
    <section className="w-full bg-[#1B1B1B] py-32 px-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;