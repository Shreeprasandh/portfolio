import React from 'react';

const LogoMarquee = () => {
  const logos = [
    '/logos/loom.png',
    '/logos/linear.png',
    '/logos/vercel.png',
    '/logos/nvidia.png',
    '/logos/appwrite.png',
    '/logos/adobe.png',
    '/logos/hostinger.png',
    '/logos/docker.png',
    '/logos/adidas.png',
    '/logos/microsoft.png',
    '/logos/shopify.png',
  ];

  // Doubling the array ensures the loop is seamless
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#1B1B1B] py-8 md:py-14 overflow-hidden">
      <div className="relative flex items-center">
        {/* The Marquee Container 
            Mobile: gap-10
            Laptop: gap-20
        */}
        <div className="flex animate-marquee-fast whitespace-nowrap gap-10 md:gap-20 items-center">
          {doubledLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand Logo"
              /* Mobile: h-[20px] | Laptop: h-[28px] */
              className="h-[20px] md:h-[28px] w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-infinite 75s linear infinite;
        }
      `}} />
    </section>
  );
};

export default LogoMarquee;