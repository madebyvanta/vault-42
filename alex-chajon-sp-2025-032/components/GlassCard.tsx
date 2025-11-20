import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-zinc-900/30 
      backdrop-blur-2xl 
      border border-white/10 
      shadow-2xl shadow-black/50
      ${className}
    `}>
      {/* Ambient noise texture overlay could go here, but keeping it clean with gradients */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
      {children}
    </div>
  );
};