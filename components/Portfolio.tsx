
import React, { useState, memo } from 'react';
import { PORTFOLIO } from '../constants.tsx';
import { WorkItem } from '../types.ts';
import { Play, Grid, ArrowRight, X } from 'lucide-react';

const PortfolioItem = memo(({ item, onOpenLightbox }: { item: WorkItem; onOpenLightbox: (url: string) => void }) => {
  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 1. Landing: Scroll to the contact section
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }

    // 2. Interaction: Attempt to open Tawk.to chat if available
    if ((window as any).Tawk_API && (window as any).Tawk_API.maximize) {
      (window as any).Tawk_API.maximize();
    }
  };

  return (
    <div 
      className={`group relative overflow-hidden bg-zinc-950 border border-zinc-900 transition-all duration-700 hover:border-zinc-700 ${
        item.collageImages ? 'w-full min-h-[500px] md:min-h-[700px]' : 'w-full h-[600px] md:h-[800px]'
      }`}
    >
      {item.vimeoId ? (
        /* High-impact Video Showcase Frame */
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
          <iframe
            key={item.vimeoId}
            src={`https://player.vimeo.com/video/${item.vimeoId}?muted=1&autoplay=1&loop=1&background=1&autopause=0&playsinline=1&api=1&dnt=1&quality=1080p`}
            className="absolute w-full h-full border-none pointer-events-none"
            style={{
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.15)',
              objectFit: 'cover'
            }}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title={item.title}
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10"></div>
        </div>
      ) : item.collageImages ? (
        /* Premium Responsive Gallery Showcase for Signature Collection */
        <div className={`grid gap-3 p-3 h-full min-h-[500px] md:min-h-[700px] bg-black ${
          item.collageImages.length === 1 ? 'grid-cols-1' : 
          item.collageImages.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 
          'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
        }`}>
           {/* Main Showcase Frame */}
           <div 
             className={`relative overflow-hidden group/img border border-zinc-900 cursor-zoom-in ${
               item.collageImages.length > 2 ? 'col-span-2 row-span-2 lg:col-span-3 lg:row-span-2' : ''
             }`}
             onClick={() => onOpenLightbox(item.collageImages![0])}
           >
              <img src={item.collageImages[0]} className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover/img:scale-110" alt="Main Showcase" />
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-all"></div>
           </div>
           
           {/* Grid Detail Frames (only if more than 1 image) */}
           {item.collageImages.slice(1).map((imgUrl, idx) => (
             <div 
               key={idx} 
               className={`relative overflow-hidden group/img border border-zinc-900 cursor-zoom-in ${
                 item.collageImages!.length > 2 ? 
                 (idx === 2 ? 'col-span-1 md:col-span-2' : idx === 5 ? 'md:col-span-2 lg:col-span-1' : 'aspect-square lg:aspect-auto') : 
                 'h-full'
               }`}
               onClick={() => onOpenLightbox(imgUrl)}
             >
                <img src={imgUrl} className="w-full h-full object-cover transition-all duration-700 hover:scale-110" alt={`Detail ${idx + 1}`} />
             </div>
           ))}
        </div>
      ) : (
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-1000 cursor-zoom-in"
          onClick={() => onOpenLightbox(item.image)}
        />
      )}
      
      {/* Contextual Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      
      <div className="absolute bottom-0 left-0 p-12 z-30 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            {item.vimeoId ? (
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-xl">
                <Play size={18} fill="currentColor" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-xl">
                <Grid size={18} />
              </div>
            )}
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">
              {item.category}
            </span>
          </div>
          <h3 className={`text-5xl md:text-7xl font-serif font-black tracking-tighter leading-none mb-2 ${item.id === 5 ? 'italic' : ''}`}>
            {item.title}
          </h3>
        </div>
        
        <button 
          onClick={handleEnquire}
          className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-all duration-300 pointer-events-auto"
        >
          Enquire Project
          <ArrowRight size={20} className="transform group-hover:translate-x-3 transition-transform" />
        </button>
      </div>
    </div>
  );
});

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setLightboxImage(url);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">Our Finest Work</h2>
            <p className="text-zinc-400 max-w-xl text-lg font-medium">
              Nine years of excellence, documented in every stitch, wrap, and pixel. 
              Behold the Badar standard.
            </p>
          </div>
          <button 
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all cursor-default"
          >
            Full Portfolio
          </button>
        </div>

        <div className="flex flex-col gap-16">
          {PORTFOLIO.map((item) => (
            <PortfolioItem key={item.id} item={item} onOpenLightbox={openLightbox} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Optimized for "Full" uncropped view */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-zinc-400 transition-colors bg-zinc-900/50 p-3 rounded-full z-[110]"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <img 
            src={lightboxImage} 
            alt="Expanded full view" 
            className="max-w-[95vw] max-h-[90vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm"
            style={{ imageRendering: 'auto' }}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
