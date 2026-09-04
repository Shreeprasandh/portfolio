import React, { useEffect, useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader';
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects';
import CreativeEndeavors from './components/CreativeEndeavors';
import Journey from './components/Journey';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// Lazy load the heavy Contact component containing Three.js / WebGL
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [loadHeavyAssets, setLoadHeavyAssets] = useState(false);

  // Reset scroll position on every refresh/load
  useEffect(() => {
    window.scrollTo(0, 0);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Defer loading of heavy 3D assets/Three.js until idle or user interaction
  useEffect(() => {
    let timer;
    const triggerLoad = () => {
      setLoadHeavyAssets(true);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
    };

    // Load after 1.5s idle time
    timer = setTimeout(triggerLoad, 1500);

    // Or load immediately when user interacts
    window.addEventListener('scroll', triggerLoad, { passive: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
    };
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
      <CreativeEndeavors />
      <Journey />
      <Reviews />
      
      {/* Defer Contact component mounting to keep initial load lightweight */}
      {loadHeavyAssets ? (
        <Suspense fallback={<div className="h-[600px] bg-[#1B1B1B]" />}>
          <Contact />
        </Suspense>
      ) : (
        <div className="h-[600px] bg-[#1B1B1B]" />
      )}
      
      <Footer />
    </main>
  )
}

export default App