import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Server, LifeBuoy, Database, Globe, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AccessContentProps {
    startAnimations: boolean;
}

const AccessContent: React.FC<AccessContentProps> = ({ startAnimations }) => {
    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate items with the class 'reveal-item'
            const items = gsap.utils.toArray('.reveal-item');

            if (!startAnimations) {
                gsap.set(items, { opacity: 0, y: 50 });
                return;
            }

            items.forEach((item: any) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, container);

        return () => ctx.revert();
    }, [startAnimations]);

    return (
        <div ref={container} className="relative z-10 w-full min-h-screen py-32 px-4 flex flex-col items-center gap-16">

            {/* Header / Title Section */}
            {/* Header / Title Section */}
            <div className="reveal-item text-center space-y-6 max-w-3xl flex flex-col items-center">
                <div className="w-[200px] md:w-[400px]">
                    <img
                        src="/access/logo_light.svg"
                        alt="ACCESS"
                        className="w-full h-full object-contain"
                    />
                </div>
                <p className="text-xl md:text-2xl text-purple-400 font-light tracking-[0.2em] uppercase">
                    By The One
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full mt-8" />
            </div>

            {/* INITIAL SETUP CARD */}
            <div className="reveal-item w-full max-w-4xl group">
                {/* Animated Gradient Border */}
                <div className="relative p-[1px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute inset-0 bg-purple-500/10 blur-3xl opacity-20" />

                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 text-reveal-container">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Setup Inicial</h2>
                                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold tracking-wide uppercase border border-purple-500/20">
                                    Pago Único
                                </span>
                            </div>
                            <div className="text-right flex flex-col items-end">
                                <span className="text-4xl md:text-5xl font-bold text-white flex items-center gap-1">
                                    $<Counter value={500} />
                                </span>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-400 text-lg"> USD</span>
                                    <span className="text-xs text-gray-500 font-light">+ IVA si se requiere factura</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-white/10 pt-8">
                            <p className="text-lg text-gray-300">
                                Instalación técnica completa y configuración de su nueva instancia.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FeatureItem icon={<Globe className="w-5 h-5" />} text="Configuración de Dominios" delay={0.1} />
                                <FeatureItem icon={<Database className="w-5 h-5" />} text="Base de Datos (Supabase)" delay={0.2} />
                                <FeatureItem icon={<Server className="w-5 h-5" />} text="Repositorio de Código" delay={0.3} />
                                <FeatureItem icon={<Smartphone className="w-5 h-5" />} text="Integración de Logos y Branding" delay={0.4} />
                                <FeatureItem icon={<Check className="w-5 h-5" />} text="Despliegue Inicial (Vercel)" delay={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MONTHLY PLAN CARD */}
            <div className="reveal-item w-full max-w-4xl">
                <div className="relative p-[1px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute inset-0 bg-teal-500/10 blur-3xl opacity-20" />

                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 text-reveal-container">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Mensualidad SaaS</h2>
                                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-500/20">
                                    Servicio Recurrente
                                </span>
                            </div>
                            <div className="text-right flex flex-col items-end">
                                <span className="text-4xl md:text-5xl font-bold text-white flex items-center gap-1">
                                    $<Counter value={100} />
                                </span>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-400 text-lg"> / mes</span>
                                    <span className="text-xs text-gray-500 font-light">+ IVA si se requiere factura</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-white/10 pt-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Desglose Mensual:</h3>

                            <CostBreakdownItem label="Mensualidad Base" price={40} delay={0.1} />
                            <CostBreakdownItem
                                label="Costo Operativo (Infraestructura)"
                                price={40}
                                description="Servidores, Base de Datos y Almacenamiento (10GB Gratis)"
                                delay={0.2}
                            />
                            <CostBreakdownItem label="Soporte y Mantenimiento" price={20} delay={0.3} />

                            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    <span className="text-white font-semibold">Nota:</span> Si se requiere modificar la app o agregar nuevas funciones, se evaluará la solicitud y se enviará una nueva cotización dependiendo del alcance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER NOTE */}
            <div className="reveal-item text-center text-gray-500 text-sm max-w-2xl mt-8 pb-12">
                <p>Full Responsive Design • High Performance • Secure Infrastructure</p>
                <div className="mt-8 flex justify-center gap-4">
                    <img src="/access/logo_light.svg" alt="The One" className="h-8 opacity-50" />
                </div>
            </div>

            <footer className="reveal-item w-full py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                <p>2026 Cotización para ACCESS By The One. Valida por 15 días - Alex Chajon - Motion and software designer</p>
            </footer>

            <style>{`
                @keyframes border-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-border-flow {
                    animation: border-flow 4s ease infinite;
                }
            `}</style>

        </div>
    );
};

const Counter = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to({ val: 0 }, {
                val: value,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 90%",
                },
                onUpdate: function () {
                    setDisplayValue(Math.floor(this.targets()[0].val));
                }
            });
        }, elementRef);
        return () => ctx.revert();
    }, [value]);

    return <span ref={elementRef} className="tabular-nums">{displayValue}</span>;
}

const FeatureItem = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => {
    const ref = useRef(null);
    useLayoutEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: delay,
                scrollTrigger: { trigger: ref.current, start: "top 95%" }
            }
        );
    }, [delay]);

    return (
        <div ref={ref} className="flex items-center gap-3 text-gray-300">
            <div className="p-2 rounded-lg bg-white/5 text-purple-400 border border-white/5 group-hover:bg-purple-500/20 group-hover:text-purple-200 transition-colors duration-500">
                {icon}
            </div>
            <span className="group-hover:text-white transition-colors duration-500">{text}</span>
        </div>
    );
};

const CostBreakdownItem = ({ label, price, description, delay }: { label: string, price: number, description?: string, delay: number }) => {
    const ref = useRef(null);
    useLayoutEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, x: 20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: delay,
                scrollTrigger: { trigger: ref.current, start: "top 95%" }
            }
        );
    }, [delay]);

    return (
        <div ref={ref} className="flex flex-col py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors duration-300">
            <div className="flex justify-between items-center w-full">
                <span className="text-gray-200 font-medium">{label}</span>
                <span className="text-brand-green font-mono font-bold flex items-center">
                    $<Counter value={price} />
                </span>
            </div>
            {description && <span className="text-xs text-gray-500 mt-1">{description}</span>}
        </div>
    );
};

export default AccessContent;
