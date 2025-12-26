import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '/icons/instagram.svg', link: 'https://www.instagram.com/shree_prasandh/' },
    { name: 'Facebook', icon: '/icons/facebook.svg', link: 'https://www.facebook.com/shreeprasandh.prasandh/' },
    { name: 'Github', icon: '/icons/githubfooter.svg', link: 'https://github.com/Shreeprasandh' }, 
    { name: 'X', icon: '/icons/x.svg', link: 'https://x.com/shreeprasandh/' },
    { name: 'Linkedin', icon: '/icons/linkedin.svg', link: 'https://www.linkedin.com/in/shreeprasandh-k/' },
  ];

  return (
    <footer className="w-full bg-[#1B1B1B] py-6 px-8 lg:px-[100px]">
      <div className="max-w-[1521px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Left Side: Contact Text */}
        <div className="flex justify-start order-2 md:order-1">
          <span className="text-[#D8D3CC] text-[16px] font-normal font-inter">
            Do contact me!
          </span>
        </div>

        {/* Center: Social Buttons */}
        <div className="flex justify-center items-center gap-[20px] order-1 md:order-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              // Removed bg-[#0F0F0F] to prevent it from bleeding through the edges
              className="w-[46px] h-[48px] rounded-[12px] flex items-center justify-center overflow-hidden transition-all duration-300 border border-transparent hover:border-[#D8D3CC]/20 hover:translate-y-[-3px]"
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                // Set to 102% width/height and min-w/h to force the image to overfill the container
                className="min-w-[102%] min-h-[102%] w-full h-full object-cover transition-transform duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Right Side: Copyright */}
        <div className="flex justify-end order-3">
          <span className="text-[#D8D3CC] text-[16px] font-normal font-inter opacity-60 text-right">
            © {currentYear} Shreeprasandh. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;