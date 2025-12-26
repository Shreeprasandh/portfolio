import React from 'react';

const ValueCards = () => {
  const cards = [
    {
      icon: '/icons/learning.svg',
      title: 'Obsessed With Learning',
      text: 'Reliable Communication. Keeping you updated at every step to ensure transparency and clarity.'
    },
    {
      icon: '/icons/ai.svg',
      title: 'AI-Driven Problem Solver',
      text: 'I use AI as a tool — not a shortcut — to think faster, build smarter, and create cleaner solutions.'
    },
    {
      icon: '/icons/growth.svg',
      title: 'Growth-Focused Developer',
      text: 'Every project I build teaches me something new, and I carry those lessons into the next thing I create.'
    }
  ];

  return (
    <section className="w-full bg-[#1B1B1B] py-20 px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-[15px]">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="group flex flex-col items-start p-[24px] gap-[16px] w-full md:w-[400px] h-[250px] bg-[#0F0F0F] border border-[#0F0F0F] rounded-[12px] transition-all duration-300 hover:border-[#D8D3CC]/20 hover:translate-y-[-5px]"
          >
            {/* Icon Container */}
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <img 
                src={card.icon} 
                alt={card.title} 
                className="w-[35px] h-[35px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[4px] self-stretch">
              <h3 className="text-[#D8D3CC] font-inter font-semibold text-[24px] leading-[36px] flex items-center">
                {card.title}
              </h3>
              <p className="text-[#D8D3CC] font-inter font-normal text-[18px] leading-[32px] opacity-70">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueCards;