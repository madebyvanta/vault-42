import React from 'react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-6 flex justify-center">
            {/* Logo Mark */}
            <div className="w-12 h-12 border border-brand-orange/30 rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-orange rounded-sm"></div>
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          ALEX CHAJÓN
        </h1>
        
        <div className="flex items-center justify-center space-x-3 text-brand-orange/80 mb-8">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-orange"></span>
            <p className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-zinc-400">
              Motion Graphics & Web Design
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-orange"></span>
        </div>
      </div>

      {/* Footer / Status */}
      <div className="absolute bottom-8 text-zinc-700 text-[10px] uppercase tracking-widest">
        Portfolio 2025 &bull; All Rights Reserved
      </div>
    </div>
  );
};