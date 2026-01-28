
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Vehicle & Car Wraps',
    description: ''
  });

  // Video ID: 1159091703
  const videoId = '1159091703';
  const embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&playsinline=1&dnt=1`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwo1ums9xPcTHip0ixRHKAZe4sdwDUqV3Bf-L_Ruwv0QLmdcbqQxiDIZsaYAhbG-C5qbg/exec';

    try {
      const params = new URLSearchParams();
      params.append('fullName', formData.fullName);
      params.append('email', formData.email);
      params.append('service', formData.service);
      params.append('description', formData.description);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ 
          fullName: '', 
          email: '', 
          service: 'Vehicle & Car Wraps', 
          description: '' 
        });
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a connection error. Please try again or email hello@badar.design directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden min-h-[900px] flex items-center bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
        
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            loading="eager"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 contrast-110"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%) scale(1.05)', 
              border: 'none'
            }}
            allow="autoplay; fullscreen"
            title="Contact Background"
          ></iframe>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-6 bg-white/10 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 leading-tight">
              Start the <br />
              <span className="text-zinc-500">Conversation.</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 border border-white/20 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-500 backdrop-blur-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400 mb-2">Our Studio Location</h4>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    123 Design District, Suite 500<br />
                    Creative Hub, NY 10013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 border border-white/20 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-500 backdrop-blur-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400 mb-2">Email Our Team</h4>
                  <p className="text-white text-2xl font-serif font-bold italic underline decoration-zinc-700 hover:decoration-white transition-all cursor-pointer">
                    hello@badar.design
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 border border-white/20 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-500 backdrop-blur-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400 mb-2">Call Directly</h4>
                  <p className="text-white text-2xl font-serif font-bold">+1 (555) 0123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/20">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-6">Join our digital ecosystem</h4>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <button 
                    key={i}
                    className="p-4 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-3xl p-8 md:p-14 border border-white/20 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                  <Check size={48} className="text-black" />
                </div>
                <h3 className="text-4xl font-serif font-black mb-4">Brief Received.</h3>
                <p className="text-zinc-400 max-w-xs mx-auto text-lg leading-relaxed">
                  The Badar team will analyze your project vision and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-black">Project Enquiry</h3>
                  <p className="text-zinc-400 text-sm">Tell us about your brand vision and surface requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input 
                      required 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text" 
                      className="bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700" 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Services Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option className="bg-zinc-900 text-white">Vehicle & Car Wraps</option>
                    <option className="bg-zinc-900 text-white">Storefront Signage & Shop Graphics</option>
                    <option className="bg-zinc-900 text-white">Brand Identity & Logo Design</option>
                    <option className="bg-zinc-900 text-white">Digital / Web / App Design</option>
                    <option className="bg-zinc-900 text-white">Marketing & Packaging Design</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Project Description & Vision</label>
                  <textarea 
                    required 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors min-h-[140px] resize-none placeholder:text-zinc-700" 
                    placeholder="Describe your project vision..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-zinc-200 transition-all transform active:scale-95 shadow-xl shadow-white/5 disabled:bg-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Submit Project Brief'
                  )}
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
