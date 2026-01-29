import React from 'react';
import ExpansionHero from './ExpansionHero';
import ExpansionFeatures from './ExpansionFeatures';
import ExpansionPricing from './ExpansionPricing';

const ExpansionAccessQuote: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Fixed Background Elements specific to Quote Page */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[120px]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm">
                    <div className="font-bold text-xl tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-brand-green to-teal-500 rounded-lg flex items-center justify-center text-black font-black text-xs">
                            EA
                        </div>
                        <span>Cotización - Expansión Access</span>
                    </div>
                </nav>

                <ExpansionHero />
                <ExpansionFeatures />
                <ExpansionPricing />

                <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>2026 Cotización para Expansión Access. Valida por 15 días - Alex Chajon - Motion and software designer</p>
                </footer>
            </div>
        </div>
    );
};

export default ExpansionAccessQuote;
