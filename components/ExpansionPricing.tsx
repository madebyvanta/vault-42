import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Check } from 'lucide-react';

const ExpansionPricing: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative z-10 bg-black/50">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        INVERSIÓN REQUERIDA
                    </h2>
                    <div className="h-1 w-24 bg-brand-green mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                    {/* Card 1: Portal de Modelos */}
                    <GlassCard className="h-full flex flex-col border-brand-green/40 bg-brand-green/[0.03]">

                        {/* Header */}
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                                Módulo Portal
                            </h3>
                            <p className="text-gray-400 font-medium text-sm">
                                Infraestructura completa para gestión de modelos.
                            </p>
                        </div>

                        {/* Details Divider */}
                        <div className="space-y-6 mb-10 flex-grow">

                            {/* Setup Fee */}
                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                <span className="font-medium text-gray-400">
                                    Setup Fee (Pago Único)
                                </span>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-white">
                                        Q 4,000
                                    </span>
                                </div>
                            </div>

                            {/* Mensualidad */}
                            <div className="flex justify-between items-center py-4 bg-white/5 px-4 rounded-lg border-none">
                                <span className="font-medium text-white">
                                    Mensualidad
                                </span>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-brand-green">
                                        Q 325 <span className="text-xs text-gray-500 font-normal">/ mes</span>
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Soporte Incluido:</p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green" /> Resolución problemas login</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green" /> Actualizaciones seguridad</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-brand-green" /> Respaldos diarios DB</li>
                                </ul>
                            </div>
                        </div>

                        {/* Total Area */}
                        <div className="mt-auto rounded-2xl p-6 text-center relative overflow-hidden bg-white text-black group">
                            <p className="text-xs font-bold tracking-widest mb-1 uppercase text-gray-500">
                                Total Inicial
                            </p>
                            <div className="text-4xl font-black tracking-tight">
                                Q 4,000
                            </div>
                            <p className="text-[10px] text-gray-400 mt-2">
                                *Incluye primer mes de soporte GRATIS
                            </p>
                        </div>
                    </GlassCard>

                    {/* Card 2: Batch Comp Cards */}
                    <GlassCard className="h-full flex flex-col border-white/10">

                        {/* Header */}
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                                Module Batch
                            </h3>
                            <p className="text-gray-400 font-medium text-sm">
                                Generador masivo de documentos PDF.
                            </p>
                        </div>

                        {/* Details Divider */}
                        <div className="space-y-6 mb-10 flex-grow">

                            {/* Setup Fee */}
                            <div className="flex justify-between items-center py-4 bg-white/5 px-4 rounded-lg border-none">
                                <span className="font-medium text-white">
                                    Setup Fee (Pago Único)
                                </span>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-white">
                                        Q 500
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Beneficios:</p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-white" /> Automatización completa</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-white" /> Sin límite de uso</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-white" /> Pago único de por vida</li>
                                </ul>
                            </div>
                        </div>

                        {/* Total Area */}
                        <div className="mt-auto rounded-2xl p-6 text-center relative overflow-hidden bg-white/5 border border-white/10">
                            <p className="text-xs font-bold tracking-widest mb-1 uppercase text-gray-400">
                                Total Único
                            </p>
                            <div className="text-4xl font-black tracking-tight text-white">
                                Q 500
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Explanatory Note */}
                <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        <span className="text-brand-green font-bold">Nota importante:</span> A diferencia de ACCESS, que es una herramienta interna con <span className="text-white font-medium">solo 1 usuario (login)</span>, este nuevo módulo es un <span className="text-white font-medium">portal público</span> diseñado para que cientos de personas externas (+300 modelos) <span className="text-white font-medium">realicen su propio login y registro</span> 24/7. Esto requiere monitoreo constante, soporte técnico especializado cuando olviden sus accesos y alta seguridad para cada envío de aplicación.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExpansionPricing;
