
import React from 'react';
import { CLIENTS } from '../constants.tsx';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-black border-b border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4">Trusted by Industry Leaders</h3>
        <p className="text-zinc-400 italic font-medium">"Widely recommended by professionals across all sectors for over nine years."</p>
      </div>
      <div className="flex overflow-hidden group">
        <div className="flex space-x-20 animate-marquee whitespace-nowrap py-10 items-center">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <span className="text-xl font-serif font-bold tracking-widest text-white uppercase">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;