
import React from 'react';

const Hero: React.FC = () => {
  // Video ID extracted from https://vimeo.com/1159068755
  const videoId = '1159068755';
  
  /**
   * Vimeo Background Video Parameters:
   * - background=1: Hides all UI, autoplays, loops, and mutes.
   * - quality=1080p: Ensures high definition.
   */
  const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&quality=1080p&dnt=1`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 
            Refined Professional Overlays 
            We use a subtle vignette and a bottom fade rather than flat black layers
            to ensure the video content "pops" through the dark aesthetic.
        */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
        
        {/* 
            Vimeo Player Container
            The video is now more visible (opacity-80) and we removed the 
            heavy grayscale/low-brightness filters that were hiding the details.
        */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 contrast-110"
            style={{
              width: '100vw',
              height: '56.25vw', /* 16:9 Aspect Ratio */
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%) scale(1.1)', 
              border: 'none'
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Badar Brand Showcase"
          ></iframe>
        </div>
      </div>
      
      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <p className="text-white font-medium tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
            Premium Creative Agency • Established 2015
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight mb-8 drop-shadow-2xl">
            Precision Design. <br />
            <span className="text-zinc-400">Flawless Finish.</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            From world-class vehicle wraps to full-scale brand identities, Badar delivers 
            over nine years of expertise in turning visions into visual masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#portfolio" 
              className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-center hover:bg-zinc-200 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/20"
            >
              View Our Portfolio
            </a>
            <a 
              href="#services" 
              className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-center hover:bg-white/10 transition-all transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
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
