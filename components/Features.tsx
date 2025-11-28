import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Potencia tu Productora</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Herramientas diseñadas para el flujo moderno de trabajo, optimizadas para el crecimiento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Impacto Visual */}
        <GlassCard className="flex flex-col h-full !p-0 overflow-hidden group border-white/10 hover:border-brand-green/20">
          <div className="h-72 bg-white/[0.02] relative flex items-center justify-center overflow-hidden border-b border-white/5">
             {/* Abstract Node Graph Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
             
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-teal-600 shadow-[0_0_40px_rgba(74,222,128,0.2)] flex items-center justify-center z-20 relative"
                >
                   <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                   <div className="w-6 h-6 border-2 border-white rounded-md relative z-10" />
                </motion.div>
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path 
                    d="M 50% 50% L 25% 30%" 
                    className="stroke-white/10 stroke-[1.5]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 50% 50% L 75% 35%" 
                    className="stroke-white/10 stroke-[1.5]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                  <motion.path 
                    d="M 50% 50% L 40% 75%" 
                    className="stroke-white/10 stroke-[1.5]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </svg>

                {/* Satellite Nodes */}
                {[
                  { x: '-translate-x-32', y: '-translate-y-20', delay: 0.2 },
                  { x: 'translate-x-32', y: '-translate-y-16', delay: 0.3 },
                  { x: '-translate-x-12', y: 'translate-y-24', delay: 0.4 }
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pos.delay }}
                    className={`absolute w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-lg ${pos.x} ${pos.y}`}
                  >
                    <div className="w-3 h-3 bg-white/20 rounded-full" />
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-3">Impacto Visual Inmediato</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Moderniza la cara de la productora. Envía enlaces web interactivos que se ven increíbles en cualquier dispositivo.
            </p>
          </div>
        </GlassCard>

        {/* Feature 2: Cotiza en Minutos (Speed) */}
        <GlassCard className="flex flex-col h-full !p-0 overflow-hidden group border-white/10 hover:border-brand-green/20">
           <div className="h-72 bg-white/[0.02] relative flex items-center justify-center p-8 border-b border-white/5">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent opacity-50" />
             
             {/* Card UI */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               className="w-full max-w-[280px] bg-[#0A0A0A] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
             >
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/10 blur-2xl rounded-full pointer-events-none" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Status: Enviado</span>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
                
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white tracking-tight">Q 15,400</div>
                        <div className="text-xs text-gray-400 mt-1">Presupuesto #2049</div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                   </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                     <div className="flex justify-between text-[10px] text-gray-400">
                        <span>Generando PDF...</span>
                        <span className="text-brand-green font-bold">Done</span>
                     </div>
                     {/* Progress Bar */}
                     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: "0%" }}
                           whileInView={{ width: "100%" }}
                           transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                           className="h-full bg-brand-green shadow-[0_0_10px_#4ADE80]" 
                        />
                     </div>
                  </div>
                </div>
             </motion.div>
           </div>
           
           <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-3">Cotiza en Minutos</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              El cliente contrata al que responde primero. Usa plantillas para generar presupuestos complejos en segundos.
            </p>
          </div>
        </GlassCard>

        {/* Feature 3: Business Intelligence */}
        <GlassCard className="flex flex-col h-full !p-0 overflow-hidden group border-white/10 hover:border-brand-green/20">
           <div className="h-72 bg-white/[0.02] relative flex items-center justify-center border-b border-white/5">
              
              {/* Chart Container */}
              <div className="w-full h-full px-8 pt-12 flex flex-col justify-end pb-8 relative">
                 <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Crecimiento</div>
                        <div className="text-3xl font-bold text-white flex items-center gap-2">
                        +32.5% 
                        </div>
                    </div>
                    <span className="text-xs font-bold bg-brand-green text-black px-2 py-1 rounded">2024</span>
                 </div>

                 <div className="flex items-end justify-between gap-3 h-32">
                    {[35, 55, 45, 70, 60, 85, 95].map((height, i) => (
                        <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                        className="w-full bg-gradient-to-t from-brand-green/5 to-brand-green/40 border-t-2 border-brand-green/60 rounded-t-sm relative group-hover:bg-brand-green/20 transition-colors"
                        >
                        </motion.div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-3">Inteligencia de Negocio</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Deja de adivinar. El sistema te dice automáticamente qué clientes son los más rentables y dónde ajustar.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Features;