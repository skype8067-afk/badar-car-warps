
import React from 'react';

const Hero: React.FC = () => {
  // Using the requested Streamable link for the hero background
  const embedUrl = `https://streamable.com/e/nn54yo?autoplay=1&muted=1&loop=1&controls=0`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Overlays to ensure text stays sharp and readable */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
        
        {/* Streamable Video Layer - Configured for Background Playback */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 contrast-110 pointer-events-none"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 Aspect Ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // Ensure coverage on all screens
              transform: 'translate(-50%, -50%) scale(1.1)', // Slight scale to hide edge artifacts
              border: 'none'
            }}
            allow="autoplay; fullscreen"
            title="Badar Hero Background Video"
          ></iframe>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <p className="text-white font-medium tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
            Premium Creative Agency • Established 2015
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight mb-8 drop-shadow-2xl text-white">
            Precision Design. <br />
            <span className="text-zinc-400">Flawless Finish.</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            From world-class vehicle wraps to full-scale brand identities, Badar delivers 
            over nine years of expertise in turning visions into visual masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-center hover:bg-zinc-200 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/20"
            >
              View Our Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-center hover:bg-white/10 transition-all transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
