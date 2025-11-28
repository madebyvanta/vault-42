import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Subtle Background for Home */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 text-center px-4 space-y-6">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="mb-8"
        >
             {/* Abstract Logo / Avatar Placeholder */}
             <div className="w-24 h-24 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl group cursor-default">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-white to-gray-500 group-hover:scale-110 transition-transform duration-300">A</span>
             </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
        >
          Alex Chajón
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative inline-block"
        >
           <div className="absolute inset-0 bg-brand-green/20 blur-xl opacity-50" />
           <p className="relative text-xl md:text-3xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-teal-200 to-brand-green">
             Motion Graphics & Web Developer
           </p>
        </motion.div>

        {/* Optional decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-1 bg-white/10 mx-auto mt-12 rounded-full"
        />
      </div>
    </section>
  );
};

export default Home;