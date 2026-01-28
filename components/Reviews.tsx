
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';
import { Star, CheckCircle2, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-black border-y border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full mb-8">
              <CheckCircle2 size={16} className="text-yellow-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Verified Google Reviews</span>
            </div>
            
            <div className="flex flex-col items-center mb-8">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={32} fill="#FACC15" className="text-yellow-400" />
                    ))}
                </div>
                <h2 className="text-6xl md:text-8xl font-serif font-black mb-4">5.0</h2>
                <p className="text-zinc-500 text-xl font-medium tracking-wide">
                    Excellent rating based on 125+ customer recommendations
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-zinc-950 p-10 border border-zinc-900 rounded-2xl relative group hover:border-zinc-700 transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-600 transition-colors" size={40} />
                
                <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#FACC15" className="text-yellow-400" />
                    ))}
                </div>
                
                <p className="text-zinc-300 leading-relaxed mb-8 text-lg italic">
                    "{review.text}"
                </p>
                
                <div className="mt-auto">
                    <h4 className="font-bold text-white tracking-tight">{review.author}</h4>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
                href="https://www.google.com/search?q=Badar+Creative+Reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors group"
            >
                View all 125+ reviews on Google
                <span className="w-12 h-px bg-zinc-800 group-hover:bg-white transition-all"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;