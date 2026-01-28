
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { Play, Grid, ArrowRight, X } from 'lucide-react';

const Portfolio: React.FC = () => {
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
          <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all">
            Full Portfolio
          </a>
        </div>

        <div className="flex flex-col gap-16">
          {PORTFOLIO.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-zinc-950 border border-zinc-900 transition-all duration-700 hover:border-zinc-700 ${
                item.collageImages ? 'w-full min-h-[700px]' : 'w-full h-[600px] md:h-[800px]'
              }`}
            >
              {item.vimeoId ? (
                /* High-impact Video Showcase Frame */
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                  <iframe
                    src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&quality=1080p&dnt=1&transparent=1`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      border: 'none',
                      transform: 'translate(-50%, -50%) scale(1.1)'
                    }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={item.title}
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10"></div>
                </div>
              ) : item.collageImages ? (
                /* Premium Framed Bento Gallery Showcase */
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3 h-full min-h-[700px] bg-black">
                   {/* Main Showcase Frame */}
                   <div 
                     className="col-span-2 row-span-2 lg:col-span-3 lg:row-span-2 relative overflow-hidden group/img border border-zinc-900 cursor-pointer"
                     onClick={() => openLightbox(item.collageImages![0])}
                   >
                      <img src={item.collageImages[0]} className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover/img:scale-110" alt="Main Showcase" />
                      <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-all"></div>
                   </div>
                   
                   {/* Grid Detail Frames */}
                   {item.collageImages.slice(1).map((imgUrl, idx) => (
                     <div 
                       key={idx} 
                       className={`relative overflow-hidden group/img border border-zinc-900 aspect-square lg:aspect-auto cursor-pointer ${
                         idx === 2 ? 'col-span-1 md:col-span-2' : idx === 5 ? 'md:col-span-2 lg:col-span-1' : ''
                       }`}
                       onClick={() => openLightbox(imgUrl)}
                     >
                        <img src={imgUrl} className="w-full h-full object-cover transition-all duration-700 hover:scale-110" alt={`Detail ${idx + 1}`} />
                     </div>
                   ))}
                </div>
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-1000 cursor-pointer"
                  onClick={() => openLightbox(item.image)}
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
                  <h3 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-none mb-2">{item.title}</h3>
                </div>
                
                <div className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-all duration-300">
                  Enquire Project
                  <ArrowRight size={20} className="transform group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-zinc-400 transition-colors bg-zinc-900/50 p-3 rounded-full"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
