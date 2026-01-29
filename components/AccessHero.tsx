import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface AccessHeroProps {
    onComplete: () => void;
    onFadeStart?: () => void;
}

const AccessHero: React.FC<AccessHeroProps> = ({ onComplete, onFadeStart }) => {
    const comp = useRef<HTMLDivElement>(null);
    const [hidden, setHidden] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setHidden(true);
                    onComplete();
                }
            });

            // Initial State
            gsap.set("#access-group", { opacity: 0, scale: 0.8, filter: "blur(10px)" });

            // Animation Sequence
            tl.to("#access-group", {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "power2.out"
            })
                .to("#access-group", {
                    opacity: 0,
                    scale: 1.1,
                    filter: "blur(20px)",
                    duration: 1,
                    ease: "power2.in",
                    delay: 0.5
                })
                .call(() => {
                    if (onFadeStart) onFadeStart();
                })
                .to(comp.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.inOut"
                });

        }, comp);

        return () => ctx.revert();
    }, [onComplete, onFadeStart]);

    if (hidden) return null;

    return (
        <div ref={comp} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div id="access-group" className="flex flex-col items-center gap-4">
                <div className="w-[200px] md:w-[300px]">
                    <img
                        src="/access/logo_light.svg"
                        alt="ACCESS"
                        className="w-full h-full object-contain"
                    />
                </div>
                <p className="text-white text-xs md:text-sm font-light tracking-[0.3em] uppercase">
                    By The One
                </p>
            </div>
        </div>
    );
};

export default AccessHero;
