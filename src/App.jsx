import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ParallaxShowcase from './components/ParallaxShowcase';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0b12] font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div id="showcase">
          <ParallaxShowcase />
        </div>
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-xs text-white/50 backdrop-blur-xl">
        © {new Date().getFullYear()} ChatDokter. For educational purposes only. Not a substitute for professional medical advice.
      </footer>
    </div>
  );
};

export default App;
