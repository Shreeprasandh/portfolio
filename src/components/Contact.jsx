import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import emailjs from '@emailjs/browser';

// Component to load and display your 3D desk model
const Model = () => {
  const { scene } = useGLTF('/models/desk.glb');
  return <primitive object={scene} scale={1.5} />;
};

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Credentials provided by the user
    emailjs.sendForm(
      'service_e6a0yeb', 
      'template_qdn52p8', 
      form.current, 
      'PoaQ_eCrZFqUFIAod'
    )
    .then(() => {
        alert("Message sent successfully! I'll get back to you soon.");
        e.target.reset(); // Clears all form fields after success
    }, (error) => {
        alert("Oops! Something went wrong. Please try again.");
        console.log("EmailJS Error:", error.text);
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="w-full bg-[#1B1B1B] py-32 px-8">
      <div className="max-w-[1263px] mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-[#D8D3CC] text-[48px] font-semibold tracking-[-2px] text-center mb-[48px]">
          Get in Touch – Let’s Connect
        </h2>

        <div className="flex flex-col lg:flex-row gap-[56px] items-stretch">
          
          {/* Form Side */}
          <form 
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-[545px] bg-[#0F0F0F] border border-[#0F0F0F] rounded-[12px] p-[40px_30px] flex flex-col gap-[30px]"
          >
            
            {/* Name Input - Matches {{name}} in EmailJS Dashboard */}
            <div className="flex flex-col gap-2">
              <label className="text-[#D8D3CC] text-[16px] font-normal">Your name</label>
              <input 
                name="name" 
                required
                type="text" 
                placeholder="What’s your good name?" 
                className="w-full h-[54px] bg-[#1B1B1B] rounded-[6px] px-4 text-[#D8D3CC] border border-transparent focus:border-[#D8D3CC]/30 outline-none transition-all placeholder:text-[#D8D3CC]/40"
              />
            </div>

            {/* Email Input - Matches {{email}} in EmailJS Dashboard */}
            <div className="flex flex-col gap-2">
              <label className="text-[#D8D3CC] text-[16px] font-normal">Your email</label>
              <input 
                name="email" 
                required
                type="email" 
                placeholder="What’s your email address?" 
                className="w-full h-[54px] bg-[#1B1B1B] rounded-[6px] px-4 text-[#D8D3CC] border border-transparent focus:border-[#D8D3CC]/30 outline-none transition-all placeholder:text-[#D8D3CC]/40"
              />
            </div>

            {/* Message Input - Matches {{message}} in EmailJS Dashboard */}
            <div className="flex flex-col gap-2">
              <label className="text-[#D8D3CC] text-[16px] font-normal">Your message</label>
              <textarea 
                name="message" 
                required
                placeholder="How can I help you?" 
                rows="4"
                className="w-full bg-[#1B1B1B] rounded-[6px] p-4 text-[#D8D3CC] border border-transparent focus:border-[#D8D3CC]/30 outline-none transition-all resize-none placeholder:text-[#D8D3CC]/40"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSending}
              className="w-full h-[52px] bg-[#D8D3CC] rounded-[8px] flex items-center justify-center gap-2 text-[#0F0F0F] font-semibold text-[16px] hover:bg-white transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send message'} 
              {!isSending && <span>→</span>}
            </button>
          </form>

          {/* 3D Model Side */}
          <div className="flex-1 min-h-[400px] lg:min-h-auto bg-[#0F0F0F]/30 rounded-[20px] overflow-hidden relative">
            <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.5} contactShadow={false}>
                  <Model />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Suspense>
            </Canvas>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;