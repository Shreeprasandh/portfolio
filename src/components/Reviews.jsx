import React from 'react';

const ReviewCard = ({ stars, text, name, role, image }) => (
  <div className="flex flex-col items-start p-[30px] gap-[18px] bg-[#0F0F0F] border border-[#1C1C21] rounded-[12px] w-full transition-all hover:border-[#D8D3CC]/15 hover:translate-y-[-4px]">
    {/* Stars */}
    <div className="flex gap-[5px]">
      {[...Array(stars)].map((_, i) => (
        <svg key={i} width="20" height="18" viewBox="0 0 20 18" fill="#D8D3CC">
          <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
        </svg>
      ))}
    </div>

    {/* Testimonial Text */}
    <p className="text-[#D8D3CC] font-inter font-normal text-[18px] leading-[28px] opacity-90">
      {text}
    </p>

    {/* Person Details */}
    <div className="flex flex-row items-center gap-[10px] mt-auto pt-4">
      <img 
        src={image} 
        alt={name} 
        className="w-[46px] h-[46px] rounded-full object-cover border border-white/10" 
      />
      <div className="flex flex-col">
        <span className="text-[#D8D3CC] font-bold text-[16px] leading-[20px]">{name}</span>
        <span className="text-[#D8D3CC] font-normal text-[14px] leading-[18px] opacity-60">{role}</span>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const column1 = [
    { stars: 5, text: "When something is important enough, you do it even if the odds say you can't. I don't wait for permission - I build...", name: "Elon Musk", role: "CEO of SpaceX, Tesla, xAI", image: "/clients/client1.png" },
    { stars: 5, text: "Code is read much more often than it is written. Python is about clarity, not cleverness. Simplicity matters...", name: "Guido van Rossum", role: "Creator of Python", image: "/clients/client3.png" }
  ];

  const column2 = [
    { stars: 5, text: "You have to dream before your dreams can come true. Failure will never overtake me if my determination to succeed is strong enough...", name: "APJ Abdul Kalam", role: "Former President of India", image: "/clients/client2.png" },
    { stars: 5, text: "Wear your failure as a badge of honor. The impact you create is not measured by your title, but by your work...", name: "Sundar Pichai", role: "CEO of Google & Alphabet", image: "/clients/client5.png" }
  ];

  const column3 = [
    { stars: 5, text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose. Don't compare yourself with anyone...", name: "Bill Gates", role: "Co-Founder of Microsoft", image: "/clients/client4.png" },
    { stars: 5, text: "I'm not a perfectionist, but I like to feel that things are done well. Your love makes me strong. Your hate makes me unstoppable...", name: "Cristiano Ronaldo", role: "Professional Footballer", image: "/clients/client6.png" }
  ];

  return (
    <section id="reviews" className="w-full bg-[#1B1B1B] py-32 px-8">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[#D8D3CC] font-inter font-semibold text-[48px] leading-[58px] tracking-[-2px] text-center mb-[80px]">
          Inspiring Words
        </h2>

        {/* The Grid: Aligned to the top (items-start) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start w-full">
          <div className="flex flex-col gap-[20px]">
            {column1.map((rev, i) => <ReviewCard key={i} {...rev} />)}
          </div>
          
          {/* Middle Column Offset: Added margin-top to match the design staggered look */}
          <div className="flex flex-col gap-[20px] lg:mt-[70px]">
            {column2.map((rev, i) => <ReviewCard key={i} {...rev} />)}
          </div>
          
          <div className="flex flex-col gap-[20px]">
            {column3.map((rev, i) => <ReviewCard key={i} {...rev} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;