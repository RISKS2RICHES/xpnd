import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const ParkrLogo = () => (
  <div className="flex items-center text-3xl md:text-5xl font-black tracking-tighter select-none">
    <span className="text-white">PARK</span>
    <span className="text-indigo-500">R</span>
  </div>
);

const XpndLogo = () => (
  <div className="flex items-center font-black text-xl md:text-2xl tracking-tighter select-none cursor-pointer">
    <span className="text-white">XP</span>
    <span className="text-cyan-400 mx-0.5">-</span>
    <span className="text-white">ND</span>
  </div>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const IconCpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const IconArrowRight = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
);

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const IconMegaphone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
);

const IconSmartphone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
);

const IconLayout = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
);

const Navbar = ({ setPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = (page) => 
    `cursor-pointer px-3 py-2 rounded-md text-xs md:text-sm font-medium transition-colors uppercase tracking-wide ${currentPage === page ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`;

  const handleNav = (pageName) => {
    setPage(pageName);
    setIsOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNav('home')}>
            <XpndLogo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleNav('about')} className={navClass('about')}>About</button>
              <button onClick={() => handleNav('services')} className={navClass('services')}>Services</button>
              <button onClick={() => handleNav('products')} className={navClass('products')}>Products</button>
              <button onClick={() => handleNav('work')} className={navClass('work')}>Work</button>
              <button onClick={() => handleNav('vision')} className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all">Contact</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button onClick={() => handleNav('about')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">About</button>
            <button onClick={() => handleNav('services')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">Services</button>
            <button onClick={() => handleNav('products')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">Products</button>
            <button onClick={() => handleNav('work')} className="text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">Work</button>
            <button onClick={() => handleNav('vision')} className="text-left text-cyan-400 font-black uppercase tracking-wide block px-3 py-2 rounded-md text-sm">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const PageLayout = ({ title, subtitle, children, setPage }: { title: string; subtitle?: string; children?: React.ReactNode, setPage: (page: string) => void }) => (
  <section className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen relative overflow-hidden">
     <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
     <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-20 border-b border-slate-800 pb-6 md:pb-10">
           <button 
             onClick={() => { setPage('home'); window.scrollTo(0,0); }}
             className="group flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-6 text-sm font-medium tracking-wide uppercase"
           >
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Home
           </button>
           <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white mb-4 md:mb-6 uppercase">
             {title}
           </h1>
           {subtitle && (
             <p className="text-sm md:text-xl text-slate-400 max-w-3xl leading-relaxed">
               {subtitle}
             </p>
           )}
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
        </div>
     </div>
  </section>
);

const Home = ({ setPage }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-48 md:pb-20 overflow-hidden flex flex-col justify-center -mt-16">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/20 rounded-full blur-[60px] md:blur-[100px]"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[60px] md:blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs md:text-sm font-bold tracking-wide uppercase mt-10 mb-6 md:mb-8 backdrop-blur-sm">
              Future Ready Engineering
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-4 md:mb-8 leading-tight">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">TOMORROW</span>
            </h1>
            <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              XPND Technologies builds high-performance, scalable digital experiences that drive growth and innovation.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center">
                <button onClick={() => setPage('vision')} className="px-5 py-2.5 md:px-6 md:py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-bold text-sm md:text-base transition-all shadow-lg shadow-cyan-500/25 w-full sm:w-auto">
                  Start Your Project
                </button>
                <button onClick={() => setPage('products')} className="px-5 py-2.5 md:px-6 md:py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-bold text-sm md:text-base transition-all w-full sm:w-auto">
                  Our Products
                </button>
                <a href="https://wa.me/447786804295" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-bold text-sm md:text-base transition-all shadow-lg shadow-cyan-500/25 w-full sm:w-auto flex items-center justify-center gap-2">
                   <IconWhatsApp />
                   WhatsApp
                </a>
            </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-8 md:py-16 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="text-cyan-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-2">Who We Are</div>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Precision in Every Pixel.</h2>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                XPND Softwares sits at the intersection of design and engineering. A collective of engineers, designers, and strategists obsessed with quality. We don't just write code; we architect digital ecosystems that scale.
              </p>
              <button onClick={() => { setPage('about'); window.scrollTo(0,0); }} className="text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all inline-flex items-center text-sm md:text-base group">
                EXPLORE MORE <IconArrowRight />
              </button>
            </div>
            <div className="relative mt-8 md:mt-0">
                 <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-2xl"></div>
                 <div className="grid grid-cols-2 gap-4 relative">
                    <div className="glass-card p-4 md:p-8 rounded-2xl border-slate-700 flex flex-col items-center justify-center aspect-square text-center">
                         <div className="text-3xl md:text-5xl font-black text-white mb-2">50+</div>
                         <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">Projects</div>
                    </div>
                    <div className="glass-card p-4 md:p-8 rounded-2xl border-slate-700 flex flex-col items-center justify-center aspect-square text-center translate-y-4 md:translate-y-8">
                         <div className="text-3xl md:text-5xl font-black text-white mb-2">100%</div>
                         <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">Success</div>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-8 md:py-16 border-t border-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4">
                <div className="max-w-2xl">
                    <div className="text-purple-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-2">Our Expertise</div>
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">Comprehensive Digital Solutions</h2>
                    <p className="text-slate-400 text-sm md:text-lg">From brand building to full-stack deployment, we cover every aspect of your digital journey.</p>
                </div>
                <button onClick={() => { setPage('services'); window.scrollTo(0,0); }} className="hidden md:inline-flex px-6 py-3 border border-slate-600 rounded-full text-white hover:bg-slate-800 transition-all font-bold text-sm tracking-wide">
                    EXPLORE MORE
                </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                    { title: "Web Development", icon: <IconCode />, desc: "High-performance sites." },
                    { title: "App Creation", icon: <IconSmartphone />, desc: "Native & cross-platform apps." },
                    { title: "AI Automations", icon: <IconCpu />, desc: "Intelligent workflows." }
                ].map((s, i) => (
                    <div key={i} onClick={() => { setPage('services'); window.scrollTo(0,0); }} className="glass-card p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all cursor-pointer group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                            {s.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{s.title}</h3>
                        <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-6">{s.desc}</p>
                        <div className="text-cyan-400 text-xs md:text-sm font-bold flex items-center">View Details <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div>
                    </div>
                ))}
            </div>
            <div className="mt-8 md:hidden text-center">
                 <button onClick={() => { setPage('services'); window.scrollTo(0,0); }} className="px-5 py-2.5 border border-slate-600 rounded-full text-white hover:bg-slate-800 transition-all font-bold text-xs tracking-wide">
                    EXPLORE MORE
                </button>
            </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="glass-card rounded-3xl p-6 md:p-16 relative overflow-hidden group cursor-pointer border border-slate-700 hover:border-indigo-500/50 transition-all duration-500" onClick={() => { setPage('products'); window.scrollTo(0,0); }}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
                    <div className="text-left max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] md:text-xs font-bold rounded-full mb-4 md:mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                            FLAGSHIP PRODUCT
                        </div>
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Find Your Spot with <span className="text-indigo-400">Parkr</span>.</h2>
                        <p className="text-slate-300 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                            We build our own ventures too. Parkr connects drivers with private parking spaces through a seamless, secure, and AI-verified ecosystem.
                        </p>
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-600/20 text-sm md:text-base">
                            EXPLORE PRODUCTS
                        </button>
                    </div>
                    
                    <div className="relative w-full max-w-xs md:max-w-md">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-3xl rounded-full"></div>
                        <div className="glass-card p-4 md:p-6 rounded-2xl border-slate-600 relative transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center justify-between mb-6 md:mb-8">
                                 <ParkrLogo />
                                 <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                 </div>
                             </div>
                             <div className="space-y-3">
                                 <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                 <div className="h-2 bg-slate-700 rounded w-full"></div>
                                 <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                             </div>
                             <div className="mt-6 md:mt-8 flex gap-3">
                                 <div className="h-8 md:h-10 w-full bg-indigo-600 rounded-lg opacity-80"></div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-8 md:py-16 border-t border-slate-800/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4">
                <div>
                    <div className="text-cyan-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-2">Selected Works</div>
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">Building The Extraordinary</h2>
                </div>
                <button onClick={() => { setPage('work'); window.scrollTo(0,0); }} className="text-white hover:text-cyan-400 font-bold flex items-center transition-colors text-sm md:text-base">
                     View All Projects <IconArrowRight />
                </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-8">
                 {/* Project 1 */}
                 <div onClick={() => { setPage('work'); window.scrollTo(0,0); }} className="group cursor-pointer">
                     <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden mb-4 md:mb-6 border border-slate-800 group-hover:border-red-500/50 transition-all relative">
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                ON<span className="text-cyan-500">-</span>TAPE<span className="text-cyan-500">.</span>
                             </h3>
                         </div>
                     </div>
                     <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">On-Tape Media</h4>
                     <p className="text-slate-400 text-sm md:text-base">Global Media Company</p>
                 </div>

                 {/* Project 2 */}
                 <div onClick={() => { setPage('work'); window.scrollTo(0,0); }} className="group cursor-pointer">
                     <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden mb-4 md:mb-6 border border-slate-800 group-hover:border-amber-500/50 transition-all relative">
                         <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                              <div className="text-slate-400 font-serif italic text-4xl md:text-6xl opacity-20">TC</div>
                         </div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <h3 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight">TONY CLARKE</h3>
                         </div>
                     </div>
                     <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">Tony Clarke</h4>
                     <p className="text-slate-400 text-sm md:text-base">Personal Brand & Thought Leadership</p>
                 </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
                <button onClick={() => { setPage('work'); window.scrollTo(0,0); }} className="px-6 py-3 md:px-8 md:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all inline-flex items-center shadow-lg text-sm md:text-base">
                    EXPLORE MORE WORK
                </button>
            </div>
         </div>
      </section>
    </div>
  );
};

const IconUsers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const AboutPage = ({ setPage }) => {
  return (
    <PageLayout 
        title="We are XPND." 
        subtitle="A collective of engineers, designers, and strategists obsessed with quality. Founded on the belief that software should be both beautiful and powerful."
        setPage={setPage}
    >
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-4 md:space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                    XPND Softwares sits at the intersection of design and engineering. We do not merely write code; we architect digital ecosystems that scale. Our philosophy is simple: precision in every pixel, robustness in every line of code.
                </p>
                <p>
                    From high-conversion landing pages to complex mobile applications and AI-driven infrastructures, our team brings a wealth of experience from top-tier tech companies to every project we touch. We are your technical partner in a digital-first world.
                </p>
                <div className="pt-4 md:pt-8 grid grid-cols-2 gap-4 md:gap-8">
                     <div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">Projects Delivered</div>
                     </div>
                     <div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">Client Satisfaction</div>
                     </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { title: 'Speed', desc: 'Optimised for maximum performance.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                    { title: 'Secure', desc: 'Enterprise-grade security standards.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { title: 'Quality', desc: 'Pixel-perfect design execution.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                    { title: 'Scale', desc: 'Architectures built for growth.', color: 'text-green-400', bg: 'bg-green-500/10' }
                ].map((item, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all">
                        <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} mb-4 font-bold`}>
                           {item.title[0]}
                        </div>
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </PageLayout>
  );
};

const ServicesPage = ({ setPage }) => {
    const services = [
        {
          title: "Brand Building",
          desc: "We craft unique brand identities that resonate. From logo design to tone of voice, we ensure your brand stands out in a crowded digital landscape.",
          icon: <IconMegaphone />,
          features: ["Logo & Identity", "Brand Strategy", "Visual Language", "Tone of Voice"]
        },
        {
          title: "Social Media Marketing",
          desc: "Strategic content creation and community engagement to grow your presence. We manage your socials so you can focus on your business.",
          icon: <IconUsers />,
          features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Growth"]
        },
        {
          title: "CRM Creation & Management",
          desc: "Comprehensive CRM integration for superior data collection, organisation, and customer relationship management. Own your data and understand your users.",
          icon: <IconDatabase />,
          features: ["HubSpot/Salesforce", "Custom Dashboards", "Data Migration", "Automation Pipelines"]
        },
        {
          title: "Website Development",
          desc: "Bespoke, high-performance websites designed for conversion. We build fast, secure, and SEO-optimised sites that drive results.",
          icon: <IconCode />,
          features: ["Next.js & React", "SEO Optimisation", "CMS Integration", "Performance Tuning"]
        },
        {
          title: "AI Automations",
          desc: "Deploy intelligent AI receptionists and automated workflows to streamline operations and enhance efficiency. Reduce overheads and improve customer response times.",
          icon: <IconCpu />,
          features: ["Voice Agents", "Chatbots", "Workflow Automation", "Data Processing"]
        },
        {
          title: "App Creation & Deployment",
          desc: "Native and cross-platform mobile applications built for scale. We handle everything from design to App Store deployment.",
          icon: <IconSmartphone />,
          features: ["iOS & Android", "React Native", "App Store Optimization", "Cloud Infrastructure"]
        }
    ];

    return (
        <PageLayout
            title="Our Capabilities"
            subtitle="We provide end-to-end digital solutions that transform businesses. From the first line of code to the final deployment, we ensure excellence."
            setPage={setPage}
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <div key={index} className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col h-full">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                            {service.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{service.title}</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                            {service.desc}
                        </p>
                        <div className="space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-slate-800/50">
                            {service.features.map((feat, i) => (
                                <div key={i} className="flex items-center text-xs md:text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                                    {feat}
                                </div>
                            ))}
                        </div>
                         <a 
                           href="https://wa.me/447786804295" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="mt-6 w-full py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-bold text-center transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                         >
                           Contact Now <IconWhatsApp />
                         </a>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};

const ProductsPage = ({ setPage }) => {
    return (
        <PageLayout
            title="Our Products"
            subtitle="Beyond client services, we incubate and launch our own digital ventures. We build what we believe in."
            setPage={setPage}
        >
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group relative">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                    <div className="px-3 py-1 md:px-4 md:py-1.5 bg-slate-900/50 backdrop-blur-md border border-slate-600 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-cyan-400">
                        Flagship Product
                    </div>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden order-2 md:order-1">
                        <div className="mb-6 md:mb-8 relative z-10 flex flex-wrap items-center gap-4">
                            <div className="inline-block p-3 md:p-4 bg-black/40 rounded-xl backdrop-blur-sm border border-white/10">
                                <ParkrLogo />
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Find Your Spot</h3>
                        <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg">
                            Search, book, and park in minutes directly from your mobile device. Our mobile platform connects Parkees (hosts) with Parkers (drivers) through a seamless, secure, and AI-verified ecosystem.
                        </p>
                        
                        <div className="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-base md:text-lg">Map Search</h4>
                                    <p className="text-slate-400 text-xs md:text-sm">Browse thousands of private driveways and garages on our interactive real-time map.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-base md:text-lg">Secure Payments</h4>
                                    <p className="text-slate-400 text-xs md:text-sm">Instant confirmation and secure payments through Apple Pay or Google Pay.</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://parkr.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition-colors group-hover:translate-x-2 duration-300 text-sm md:text-base">
                            Get The App <IconArrowRight />
                        </a>
                    </div>
                    
                    <div className="bg-slate-800 relative h-[400px] md:h-auto overflow-hidden group flex items-center justify-center order-1 md:order-2">
                        {/* Abstract background */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                        
                        {/* Mockup UI Elements - Centered Phone */}
                        <div className="relative z-10 w-56 md:w-72 aspect-[9/19] bg-slate-900 border-[8px] border-slate-700 rounded-[3rem] shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                            <div className="bg-slate-800 h-full w-full relative">
                                <div className="absolute inset-0 bg-slate-700 opacity-50">
                                    <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-slate-600/30"></div>
                                    <div className="absolute top-0 bottom-0 right-1/4 w-4 bg-slate-600/30"></div>
                                    <div className="absolute left-0 right-0 top-1/4 h-3 bg-slate-600/30"></div>
                                </div>
                                
                                {/* Status Bar */}
                                <div className="absolute top-0 w-full h-8 flex justify-between items-center px-6">
                                    <div className="text-[10px] text-white font-bold">9:41</div>
                                    <div className="flex gap-1"><div className="w-4 h-2 bg-white rounded-sm"></div></div>
                                </div>

                                {/* Search Bar */}
                                <div className="absolute top-10 left-4 right-4 h-12 bg-slate-600/90 rounded-xl mb-4 backdrop-blur-md border border-white/10 flex items-center px-4 gap-3 shadow-lg">
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-400"></div>
                                    <div className="flex-1"><div className="h-2 w-24 bg-slate-400/50 rounded-full"></div></div>
                                </div>

                                {/* Pins */}
                                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="bg-indigo-500 h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 animate-bounce relative z-10 border-2 border-white">
                                        <span className="text-white font-bold text-xs">P</span>
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 blur-sm rounded-full"></div>
                                </div>

                                {/* Bottom Card */}
                                <div className="absolute bottom-0 left-0 w-full bg-slate-800 rounded-t-3xl p-5 border-t border-slate-600 shadow-2xl z-20">
                                    <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-4"></div>
                                    <div className="h-12 w-full bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/20">Reserve Spot</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const WorkPage = ({ setPage }) => {
  return (
    <PageLayout
        title="Featured Work"
        subtitle="A selection of our recent projects. We take pride in delivering excellence for our clients."
        setPage={setPage}
    >
        <div className="flex flex-col gap-12 md:gap-20">
            {/* ON-TAPE */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 group hover:border-blue-700/50 transition-colors duration-500 relative">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                    <div className="px-3 py-1 md:px-4 md:py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">
                        Client Project
                    </div>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="px-8 pb-8 pt-20 md:p-16 flex flex-col justify-center bg-zinc-950 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-transparent to-transparent"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="h-3 w-3 rounded-full bg-blue-600 animate-pulse"></div>
                                <span className="font-mono text-xs text-blue-500 uppercase tracking-[0.2em]">Media Company</span>
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tighter">
                                ON<span className="text-blue-600">-</span>TAPE<span className="text-blue-600">.</span>
                            </h3>
                            
                            <p className="text-zinc-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                                A comprehensive brand overhaul for On-Tape, a music production media company dedicated to artist development. We crafted their entire identity from the ground up—defining the logo, brand palette, and building a high-performance website to showcase their vision.
                            </p>

                            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-zinc-300 font-mono text-xs md:text-sm">
                                <li className="flex items-center gap-3"><span className="text-blue-600">+</span> High-Bandwidth Video Streaming</li>
                                <li className="flex items-center gap-3"><span className="text-blue-600">+</span> Custom CMS for Media Assets</li>
                                <li className="flex items-center gap-3"><span className="text-blue-600">+</span> Brutalist UI Design System</li>
                            </ul>

                            <a href="https://ontapemedia.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-zinc-200 transition-colors max-w-max">
                                Visit Site <IconArrowRight />
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-900 relative h-[300px] md:h-auto overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full opacity-50"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>
                        </div>
                        
                        <div className="w-[85%] aspect-video bg-black rounded-lg shadow-2xl border border-zinc-700 overflow-hidden transform group-hover:scale-105 transition-transform duration-700 relative z-10">
                            <div className="h-6 md:h-8 bg-zinc-800 border-b border-zinc-700 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col items-center justify-center h-full relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black"></div>
                                <div className="relative z-10 text-center">
                                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mix-blend-difference mb-2">RAW<span className="text-outline text-transparent stroke-white stroke-1">CUTS</span></h1>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-stripes-zinc opacity-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TONY CLARKE */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 group hover:border-slate-500/30 transition-colors duration-500 relative">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                    <div className="px-3 py-1 md:px-4 md:py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">
                        Client Project
                    </div>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="bg-slate-900 relative h-[300px] md:h-auto overflow-hidden flex items-center justify-center order-2 md:order-1">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310159-5b5f22693851?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                        
                        <div className="w-[85%] aspect-video bg-slate-100 rounded-lg shadow-2xl border border-slate-300 overflow-hidden transform group-hover:scale-105 transition-transform duration-700 relative z-10">
                            <div className="h-6 md:h-8 bg-slate-200 border-b border-slate-300 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-400"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-400"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-400"></div>
                                <div className="ml-2 md:ml-4 flex-1 h-4 md:h-5 bg-white rounded text-[8px] md:text-[10px] text-slate-500 flex items-center px-2 font-mono">tony-clarke.com</div>
                            </div>
                            <div className="p-4 md:p-8 flex flex-col items-start justify-center h-full relative bg-white text-slate-900">
                                <div className="w-full h-full p-2 md:p-4 flex gap-4">
                                    <div className="w-1/3 h-full bg-slate-300 rounded-sm"></div>
                                    <div className="flex-1 flex flex-col gap-2 md:gap-3">
                                        <div className="h-6 md:h-8 w-3/4 bg-slate-900 mb-2"></div>
                                        <div className="h-1.5 md:h-2 w-full bg-slate-300"></div>
                                        <div className="h-1.5 md:h-2 w-full bg-slate-300"></div>
                                        <div className="h-1.5 md:h-2 w-2/3 bg-slate-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 pb-8 pt-20 md:p-16 flex flex-col justify-center bg-zinc-950 relative overflow-hidden order-1 md:order-2">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-slate-600 via-transparent to-transparent"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="h-3 w-3 rounded-full bg-slate-500"></div>
                                <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">Personal Brand</span>
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6">
                                TONY CLARKE
                            </h3>
                            
                            <p className="text-zinc-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                                A bespoke digital sanctuary for thought leadership. We crafted a sophisticated platform that allows Tony to curate stories, publish blogs, and share professional insights with an engaged audience.
                            </p>

                            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-zinc-300 font-mono text-xs md:text-sm">
                                <li className="flex items-center gap-3"><span className="text-slate-400">+</span> Editorial Layout Engine</li>
                                <li className="flex items-center gap-3"><span className="text-slate-400">+</span> Integrated Newsletter Automation</li>
                                <li className="flex items-center gap-3"><span className="text-slate-400">+</span> Responsive Typography System</li>
                            </ul>

                            <div className="flex flex-wrap gap-3 md:gap-4">
                                <a href="https://tony-clarke.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-zinc-200 transition-colors">
                                    Visit Site <IconArrowRight />
                                </a>
                                <a href="https://tony-clarke.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-slate-600 text-slate-400 font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-slate-800/30 transition-colors">
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
  );
};

const VisionPage = ({ setPage }) => {
  const [formState, setFormState] = useState({ name: '', email: '', type: 'Website', vision: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Project Vision*\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Project Type:* ${formState.type}\n*Vision:* ${formState.vision}`;
    const whatsappUrl = `https://wa.me/447786804295?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <PageLayout
        title="Contact"
        subtitle="Tell us about your project. We'll analyse it and get back to you with a quote."
        setPage={setPage}
    >
        <div className="max-w-4xl mx-auto">
            {/* Direct Contact Options */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                <a href="mailto:operations@xp-nd.com" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                         <IconMail />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                        <p className="text-slate-400 text-sm mb-2">For general inquiries and detailed briefs.</p>
                        <span className="text-cyan-400 font-mono text-sm group-hover:underline">operations@xp-nd.com</span>
                    </div>
                </a>

                <a href="https://wa.me/447786804295" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                         <div className="text-green-400"><IconWhatsApp /></div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
                        <p className="text-slate-400 text-sm mb-2">Fastest response time for quick questions.</p>
                        <span className="text-green-400 font-mono text-sm group-hover:underline">+44 7786 804295</span>
                    </div>
                </a>
            </div>

            <div className="glass-card p-6 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Submit Your Vision</h2>
                    
                    {submitted ? (
                    <div className="text-center py-12 md:py-16 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Vision Received!</h3>
                        <p className="text-slate-400 text-sm md:text-base">Thank you for contacting XPND Softwares. We will be in touch shortly.</p>
                        <button 
                        onClick={() => { setSubmitted(false); setFormState({name: '', email: '', type: 'Website', vision: ''})}}
                        className="mt-6 md:mt-8 text-cyan-400 hover:text-cyan-300 font-medium text-sm md:text-base"
                        >
                        Submit another project
                        </button>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Your Name</label>
                            <input 
                            required
                            type="text" 
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email Address</label>
                            <input 
                            required
                            type="email" 
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Project Type</label>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            {['Website', 'Mobile App', 'Full Brand'].map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setFormState({...formState, type})}
                                className={`py-2 md:py-3 px-2 md:px-4 rounded-lg border text-xs md:text-sm font-medium transition-all ${
                                formState.type === type 
                                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                                    : 'bg-slate-950/50 border-slate-700 text-slate-400 hover:border-slate-500'
                                }`}
                            >
                                {type}
                            </button>
                            ))}
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">The Vision</label>
                        <textarea 
                            required
                            rows={5}
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                            placeholder="Describe your project, goals, and any specific requirements..."
                            value={formState.vision}
                            onChange={(e) => setFormState({...formState, vision: e.target.value})}
                        ></textarea>
                        </div>

                        <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 md:py-4 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all text-sm md:text-base"
                        >
                        Get Your Quote
                        </button>
                    </form>
                    )}
                </div>
            </div>
        </div>
    </PageLayout>
  );
};

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div onClick={() => { setPage('home'); window.scrollTo(0,0); }} className="cursor-pointer">
            <XpndLogo />
          </div>
          <div className="text-slate-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} XPND Softwares. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0,0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main>
        {currentPage === 'home' && <Home setPage={setPage} />}
        {currentPage === 'about' && <AboutPage setPage={setPage} />}
        {currentPage === 'services' && <ServicesPage setPage={setPage} />}
        {currentPage === 'products' && <ProductsPage setPage={setPage} />}
        {currentPage === 'work' && <WorkPage setPage={setPage} />}
        {currentPage === 'vision' && <VisionPage setPage={setPage} />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);