import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverEffect = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        bg-glass-surface backdrop-blur-xl
        border border-glass-border
        rounded-2xl p-6 shadow-2xl
        ${hoverEffect ? 'hover:border-brand-green/30 hover:bg-white/[0.05] transition-colors duration-300' : ''}
        ${className}
      `}
    >
      {/* Glossy gradient overlay top-left */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 blur-3xl rounded-full pointer-events-none" />
      
      {children}
    </motion.div>
  );
};