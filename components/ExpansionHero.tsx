import React from 'react';
import { motion } from 'framer-motion';

const ExpansionHero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-1.5 rounded-full border border-glass-border bg-white/5 backdrop-blur-md"
                >
                    <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">
                        Propuesta Expansión
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
                >
                    Expansión Access <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        Portal & Casting.
                    </span>
                </motion.h1>
            </div>

            {/* Grid Lines Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
        </section>
    );
};

export default ExpansionHero;
