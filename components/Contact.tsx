
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-10">Start the <br /><span className="text-zinc-600">Conversation.</span></h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Our Studio</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    123 Design District, Suite 500<br />
                    Creative Hub, NY 10013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Email Us</h4>
                  <p className="text-zinc-400 text-lg">hello@badar.design</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Call Directly</h4>
                  <p className="text-zinc-400 text-lg">+1 (555) 0123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-zinc-900">
              <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-600 mb-6">Social Connection</h4>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-10 md:p-16 border border-zinc-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8">
                  <Check size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-serif font-black mb-4">Message Received.</h3>
                <p className="text-zinc-500 max-w-xs mx-auto">
                  Our team will review your enquiry and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input required type="text" className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input required type="email" className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Needed</label>
                  <select className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors appearance-none">
                    <option className="bg-black">Vehicle & Car Wraps</option>
                    <option className="bg-black">Storefront & Signage</option>
                    <option className="bg-black">Brand Identity</option>
                    <option className="bg-black">Web & Digital</option>
                    <option className="bg-black">Print & Marketing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Description</label>
                  <textarea required className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors min-h-[120px] resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-all">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
