import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 'lifetime',
      name: 'PLAN LIFETIME',
      subtitle: 'Un solo pago. Es tuyo para siempre.',
      marketValue: 'VALOR EN MERCADO: Q 45,000',
      totalLabel: 'INVERSIÓN TOTAL ÚNICA',
      totalPrice: 'Q11,500',
      ctaText: 'Tu empresa es dueña del activo',
      isLifetime: true,
      details: [
        { label: 'Pago Inicial (Una sola vez)', value: 'Q5,750' },
        { label: 'Pago Final (Contra Entrega)', value: 'Q5,750' },
        { label: 'MENSUALIDAD', value: 'Q 0', highlight: true },
      ]
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 relative z-10 bg-black/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            MODALIDAD DE INVERSIÓN
          </h2>
          <div className="h-1 w-24 bg-brand-green mx-auto rounded-full" />
        </div>

        <div className="flex justify-center items-start">
          {plans.map((plan, index) => (
            <GlassCard 
              key={plan.id} 
              delay={0.2 + (index * 0.1)} 
              className={`h-full flex flex-col ${plan.isLifetime ? 'border-brand-green/40 bg-brand-green/[0.03]' : ''}`}
            >
              {/* Market Value Badge */}
              <div className="w-full bg-white/5 py-2 rounded-lg mb-8 text-center border border-white/5">
                <span className="text-xs font-bold text-gray-500 line-through tracking-widest uppercase">
                  {plan.marketValue}
                </span>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base">
                  {plan.subtitle}
                </p>
              </div>

              {/* Details Divider */}
              <div className="space-y-6 mb-10 flex-grow">
                {plan.details.map((detail, idx) => (
                  <div key={idx} className={`flex justify-between items-center py-4 border-b border-white/5 ${detail.highlight ? 'bg-white/5 px-4 rounded-lg border-none' : ''}`}>
                    <span className={`font-medium ${detail.highlight ? 'text-white' : 'text-gray-400'}`}>
                      {detail.label}
                    </span>
                    <div className="text-right">
                      <span className={`text-xl md:text-2xl font-bold ${detail.highlight ? 'text-brand-green' : 'text-white'}`}>
                        {detail.value}
                      </span>
                      {detail.subValue && (
                        <span className="text-sm text-gray-500 font-normal ml-1">
                          {detail.subValue}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total/CTA Area */}
              <div className={`mt-auto rounded-2xl p-8 text-center relative overflow-hidden group ${plan.isLifetime ? 'bg-white text-black' : 'bg-white/5 border border-white/10'}`}>
                {/* Decoration for Lifetime Card */}
                {plan.isLifetime && (
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                )}

                <p className={`text-xs font-bold tracking-widest mb-2 uppercase ${plan.isLifetime ? 'text-gray-500' : 'text-gray-400'}`}>
                  {plan.totalLabel}
                </p>
                
                <div className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                  {plan.totalPrice}
                </div>

                {plan.ctaText && (
                  <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                     <Check className="w-4 h-4 text-brand-green" />
                     {plan.ctaText}
                  </div>
                )}
                
                {plan.isLifetime && (
                  <p className="mt-6 text-[10px] text-gray-400">
                    *Mantenimiento (Q160/mes) se paga hasta el 2do año.
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;