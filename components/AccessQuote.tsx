import React, { useState, useEffect, useCallback } from 'react';
import AccessHero from './AccessHero';
import AccessContent from './AccessContent';

const AccessQuote: React.FC = () => {
    const [introFinished, setIntroFinished] = useState(false);
    const [startContentAnim, setStartContentAnim] = useState(false);

    // Lock scroll during intro
    useEffect(() => {
        if (!introFinished) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [introFinished]);

    const handleFadeStart = useCallback(() => {
        setStartContentAnim(true);
        // Optional: unlock scroll slightly earlier? No, wait for complete fade for better UX?
        // Let's keep unlock at onComplete (introFinished)
    }, []);

    const handleIntroComplete = useCallback(() => {
        setIntroFinished(true);
    }, []);

    return (
        <main className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">

            {/* INTRO OVERLAY */}
            <AccessHero
                onFadeStart={handleFadeStart}
                onComplete={handleIntroComplete}
            />

            {/* MAIN CONTENT - Always rendered so it can prep animations */}

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <AccessContent startAnimations={startContentAnim} />
        </main>
    );
};

export default AccessQuote;
