import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader';
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects';
import LogoMarquee from './components/LogoMarquee';
import ValueCards from './components/ValueCards';
import Journey from './components/Journey';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Reset scroll position on every refresh/load
  useEffect(() => {
    // Manually scroll to the top coordinates
    window.scrollTo(0, 0);

    // Disable the browser's default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#1B1B1B] relative">
      {/* The Preloader acts as a "curtain" while the page resets to the top */}
      <Preloader /> 
      
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <LogoMarquee />
      <ValueCards />
      <Journey />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App