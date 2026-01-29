import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'framer-motion';
import { Users, FileText, CheckCircle, Smartphone } from 'lucide-react';

const ExpansionFeatures: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Módulos Incluidos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Module 1: Portal de Modelos */}
                <GlassCard className="flex flex-col h-full !p-0 overflow-hidden group border-white/10 hover:border-brand-green/20">
                    <div className="h-64 bg-white/[0.02] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green border border-brand-green/30">
                                <Users size={32} />
                            </div>
                            <div className="text-white font-bold text-lg">Portal de Modelos</div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Gestión de Talento</h3>
                        <ul className="space-y-3">
                            {[
                                "Creación de usuarios y login seguro de usuarios",
                                "URLs privadas para aplicación de modelos",
                                "Gestión desde cualquier dispositivo (aplicar o no aplicar)",
                                "Rastreo de links enviados, aperturas por modelos y estadísticas de aceptación/rechazo",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </GlassCard>

                {/* Module 2: Batch Comp Cards */}
                <GlassCard className="flex flex-col h-full !p-0 overflow-hidden group border-white/10 hover:border-brand-green/20">
                    <div className="h-64 bg-white/[0.02] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/5 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/30">
                                <FileText size={32} />
                            </div>
                            <div className="text-white font-bold text-lg">Batch Comp Cards</div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Automatización de Compcards para impresiones múltiples</h3>
                        <ul className="space-y-3">
                            {[
                                "Selección múltiple de talentos",
                                "Imposición doble cara inteligente",
                                "Formatos listos para impresión o envío"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default ExpansionFeatures;
