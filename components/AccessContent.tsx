import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Server, LifeBuoy, Database, Globe, Smartphone, Lock, Share2, TrendingUp, Users, Cloud, ShieldCheck, Gift, Palette, Zap, Sparkles } from 'lucide-react';

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

            {/* BASIC MENSUAL PLAN CARD */}
            <div className="reveal-item w-full max-w-4xl group">
                {/* Animated Gradient Border */}
                <div className="relative p-[1px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute inset-0 bg-purple-500/10 blur-3xl opacity-20" />

                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 text-reveal-container">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Basic Mensual</h2>
                                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold tracking-wide uppercase border border-purple-500/20">
                                    Suscripción Mensual
                                </span>
                            </div>
                            <div className="text-right flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-white">$<Counter value={120} /></span>
                                    <span className="text-gray-400 text-lg">/mes</span>
                                </div>
                                <div className="mt-2 text-right">
                                    <span className="text-sm text-purple-400 font-semibold">+ $<Counter value={500} /> Setup Inicial</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-white/10 pt-8">
                            <p className="text-lg text-gray-300 font-medium">
                                Plan ideal para comenzar con todas las herramientas esenciales.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <FeatureItem icon={<Lock className="w-5 h-5" />} text="Acceso Privado: Usuario y Contraseña" delay={0.1} />
                                <FeatureItem icon={<Share2 className="w-5 h-5" />} text="Envío de Castings y Aprobación vía Link" delay={0.2} />
                                <FeatureItem icon={<TrendingUp className="w-5 h-5" />} text="Ranking de Mejores Modelos" delay={0.3} />
                                <FeatureItem icon={<Users className="w-5 h-5" />} text="Administración: Talento, Proyectos y Clientes" delay={0.4} />
                            </div>

                            <div className="h-px w-full bg-white/10 my-8" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <FeatureItem icon={<Cloud className="w-5 h-5" />} text="Funcionamiento 24/7 en la nube" delay={0.5} />
                                <FeatureItem icon={<ShieldCheck className="w-5 h-5" />} text="Protección y Seguridad de Datos" delay={0.6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ANNUAL PLAN CARD */}
            <div className="reveal-item w-full max-w-4xl">
                <div className="relative p-[1px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute inset-0 bg-teal-500/10 blur-3xl opacity-20" />

                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 text-reveal-container">
                            <div>
                                <div className="mb-4">
                                    <span className="bg-teal-500 text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        Recomendado
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">Plan Anual</h2>
                                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-500/20">
                                    Suscripción Anual
                                </span>
                            </div>
                            <div className="text-right flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-white">$<Counter value={1300} /></span>
                                    <span className="text-gray-400 text-lg">/año</span>
                                </div>
                                <div className="mt-2 text-right">
                                    <span className="text-sm text-teal-400 font-bold uppercase tracking-wider">Instalación GRATIS</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-white/10 pt-8">
                            <p className="text-lg text-gray-300 font-medium">
                                Máximo valor y todos los beneficios premium incluidos.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <FeatureItem icon={<Check className="w-5 h-5" />} text="Todo lo del Plan Mensual" delay={0.1} />
                                <FeatureItem icon={<Gift className="w-5 h-5" />} text="Módulo de Cumpleaños (Exclusivo)" delay={0.2} />
                            </div>

                            <div className="h-px w-full bg-white/10 my-8" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <FeatureItem icon={<LifeBuoy className="w-5 h-5" />} text="Prioridad en Soporte Técnico" delay={0.3} />
                                <FeatureItem icon={<Palette className="w-5 h-5" />} text="Mejoras Continuas de Diseño Visual (UI)" delay={0.4} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* SUPPLEMENTAL CARDS GRID */}
            <div className="reveal-item w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
                {/* WEB MANAGEMENT KIT */}
                <div className="relative p-[1px] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-purple-500/10 transition-colors duration-500" />
                    <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/5 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Kit Gestión Web</h3>
                                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Módulo Extra</span>
                            </div>
                            <Globe className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="space-y-2 flex-grow">
                            <SmallFeatureItem text="Control total de visibilidad pública" />
                            <SmallFeatureItem text="Buscador y filtros de talentos" />
                            <SmallFeatureItem text="Switch encendido/apagado rápido" />
                            <SmallFeatureItem text="Gestión de portafolios web" />
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/5">
                            <span className="text-[10px] text-gray-500 italic">Cotización por aparte</span>
                        </div>
                    </div>
                </div>

                {/* DATA ONBOARDING SERVICE */}
                <div className="relative p-[1px] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-teal-500/10 transition-colors duration-500" />
                    <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/5 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Carga de Datos</h3>
                                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">Servicio de Onboarding</span>
                            </div>
                            <Zap className="w-5 h-5 text-yellow-500 animate-pulse-zap" />
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            ¿No tienes tiempo? Nosotros lo hacemos por ti.<br /><br />
                            Subimos todo tu material fotográfico y configuramos los datos y las fotografías de tus modelos para que no tengas que invertir tiempo en eso.
                        </p>
                        <div className="mt-auto pt-3 border-t border-white/5">
                            <span className="text-[10px] text-gray-500 italic">Consultar disponibilidad</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CUSTOMIZATION BENTO CARD (FULL WIDTH) */}
            <div className="reveal-item w-full max-w-4xl mt-6">
                <div className="relative p-[1px] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-teal-500/20 to-purple-500/20 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/5 flex flex-col md:flex-row items-center gap-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 border border-white/10">
                            <Sparkles className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Totalmente Personalizable</h3>
                            <p className="text-gray-400 leading-relaxed">
                                El sistema se puede adaptar 100% al flujo de trabajo personalizado de la agencia. En programación no hay nada imposible; cualquier idea que necesites se puede automatizar a tu medida.
                            </p>
                        </div>
                        <div className="hidden md:block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-medium">
                            Infinite Possibilities
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
                @keyframes pulse-zap {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); filter: drop-shadow(0 0 10px #f59e0b); }
                }
                .animate-pulse-zap {
                    animation: pulse-zap 1.5s ease-in-out infinite;
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

const SmallFeatureItem = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2 text-gray-400">
            <Check className="w-3 h-3 text-brand-green" />
            <span className="text-xs">{text}</span>
        </div>
    );
};

export default AccessContent;
