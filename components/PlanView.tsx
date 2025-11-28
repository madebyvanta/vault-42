import React, { useRef } from 'react';
import { PlanQuoteData } from '../types';
import { GlassCard } from './GlassCard';
import { Calendar, Hash, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

interface PlanViewProps {
  data: PlanQuoteData;
}

export const PlanView: React.FC<PlanViewProps> = ({ data }) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen w-full bg-black text-zinc-100 font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[100px]"></div>
      </div>

       {/* Navigation */}
       <div className="fixed top-8 left-8 z-50 print:hidden opacity-0 hover:opacity-100 transition-opacity">
        <Link href="/">
            <button className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/5 hover:border-brand-orange text-zinc-400 hover:text-brand-orange transition-colors">
                <ArrowLeft className="w-5 h-5" />
            </button>
        </Link>
      </div>

      <main className="relative z-10 py-10 flex flex-col items-center justify-center min-h-screen">
        
        {/* Render Container */}
        <div ref={quoteRef} id="plan-container" className="p-4 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
            
            {/* Header */}
            <div className="w-full mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-2">Propuesta Mac EstudiOS</h1>
                    <p className="text-zinc-500 uppercase tracking-widest text-sm">Desarrollo & Implementación</p>
                </div>
                <div className="flex gap-6 text-sm text-zinc-400 mt-4 md:mt-0">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-brand-orange"/> {data.metadata.date}</div>
                    <div className="flex items-center"><Hash className="w-4 h-4 mr-2 text-brand-orange"/> {data.metadata.number}</div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {data.plans.map((plan, idx) => {
                    const highlightTotal = plan.totalFirstYear === 15600 || plan.totalFirstYear === 12000;
                    return (
                    <GlassCard 
                        key={idx} 
                        className={`
                            p-8 flex flex-col relative rounded-3xl transition-all duration-500
                            ${plan.isRecommended 
                                // ESTILOS PARA LA TARJETA RESALTADA (Sin etiqueta, pero más brillante)
                                ? 'border-brand-orange bg-zinc-900/60 transform md:-translate-y-4 shadow-[0_0_50px_-10px_rgba(255,77,0,0.25)] ring-1 ring-brand-orange/20' 
                                // ESTILOS PARA LA TARJETA NORMAL
                                : 'border-white/5 hover:border-white/10 bg-zinc-900/20'}
                        `}
                    >
                        {/* AQUI SE ELIMINÓ LA ETIQUETA "MEJOR OPCIÓN" */}

                        {/* Title & Market Value */}
                        <div className="text-center mb-8">
                            <h2 className={`text-2xl font-bold mb-2 ${plan.isRecommended ? 'text-white' : 'text-zinc-300'}`}>{plan.title}</h2>
                            <div className="text-zinc-500 text-sm">
                                Valor en mercado: <span className="line-through decoration-brand-orange/50 decoration-2">{formatCurrency(plan.marketValue)}</span>
                            </div>
                        </div>

                        {/* Pricing Details */}
                        <div className="space-y-6 flex-grow">
                            
                            {/* Initial */}
                            <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                                <span className="text-zinc-400">Pago Inicial (Implementación) (1 sola vez)</span>
                                <span className="text-xl font-medium text-white">{formatCurrency(plan.initialPayment)}</span>
                            </div>

                            {/* Monthly/Recurring */}
                            <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                                <span className="text-zinc-400">Mensualidad Recurrente</span>
                                <span className={`text-xl font-medium ${plan.monthlyPayment === 0 ? 'text-green-400' : 'text-white'}`}>
                                    {plan.monthlyPayment === 0 ? 'Q. 0 / mes' : `${formatCurrency(plan.monthlyPayment)} / mes`}
                                </span>
                            </div>

                            {/* Maintenance */}
                            <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                                <span className="text-zinc-400">Mantenimiento (mensual)</span>
                                <div className="text-right">
                                    {plan.maintenance === 125 ? (
                                        <>
                                            <span className="text-sm font-medium text-white opacity-60 block">{formatCurrency(plan.maintenance)}</span>
                                            <span className="text-xs text-zinc-500 block">(a partir del 2º año)</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-xl font-medium text-white block">{formatCurrency(plan.maintenance)}</span>
                                            {/* Aquí sí dejamos el texto de ahorro si es recomendado, para enfatizar valor */}
                                            {plan.isRecommended && <span className="text-xs text-brand-orange font-bold">(-50% AHORRO)</span>}
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Delivery Payment (Lifetime only) */}
                            {plan.deliveryPayment && (
                                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-4">
                                    <span className="text-zinc-400">Pago final (Contra Entrega) (1 sola vez)</span>
                                    <span className="text-xl font-medium text-white">{formatCurrency(plan.deliveryPayment)}</span>
                                </div>
                            )}

                        </div>

                        {/* Totals */}
                        <div className={`mt-8 pt-8 border-t text-center ${plan.isRecommended ? 'border-brand-orange/30' : 'border-white/20'}`}>
                            <div className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Total 1er Año</div>
                            <div className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${highlightTotal ? 'text-brand-orange' : 'text-white'}`}>
                                {formatCurrency(plan.totalFirstYear)}
                            </div>
                            <div className="inline-block bg-white/5 rounded-lg px-4 py-2 text-sm text-zinc-300">
                                {plan.subsequentText}
                            </div>
                        </div>

                    </GlassCard>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="mt-16 text-center opacity-50">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Propuesta válida por 15 días &bull; Alex Chajón
                </p>
            </div>
        </div>

      </main>
    </div>
  );
};