import React from 'react';
import { StandardQuoteData } from '../types';
import { GlassCard } from './GlassCard';
import { 
  MapPin, 
  Calendar, 
  Hash, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface QuoteProps {
  data: StandardQuoteData;
}

export const Quote: React.FC<QuoteProps> = ({ data }) => {
  // Calculate totals
  const subtotal = data.items.reduce((acc, item) => acc + item.price, 0);
  const taxAmount = subtotal * data.taxRate;
  const total = subtotal + taxAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-slide-up">
      <GlassCard className="rounded-3xl p-8 md:p-12 relative group">
        {/* Decorative Orange Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        {/* Header Section */}
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-12 border-b border-white/5 pb-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              COTIZACIÓN
            </h1>
            <div className="flex items-center space-x-2 text-brand-orange">
              <span className="h-1 w-8 bg-brand-orange rounded-full"></span>
              <span className="text-sm font-medium tracking-widest uppercase">Servicios de Producción</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-right md:items-end">
            <div className="flex items-center space-x-3 text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Fecha</span>
              <div className="flex items-center text-white font-medium">
                <Calendar className="w-4 h-4 mr-2 text-brand-orange" />
                {data.metadata.date}
              </div>
            </div>
            <div className="flex items-center space-x-3 text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Cotización No.</span>
              <div className="flex items-center text-white font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                <Hash className="w-3 h-3 mr-2 text-brand-orange" />
                {data.metadata.number}
              </div>
            </div>
          </div>
        </header>

        {/* Client & Location Info */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-950/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Cliente</h3>
            <div className="text-2xl font-semibold text-white mb-1">{data.client.name}</div>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-transparent rounded-full"></div>
          </div>

          <div className="bg-zinc-950/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Ubicación de Producción</h3>
            <div className="flex items-start text-zinc-200">
              <MapPin className="w-5 h-5 mr-3 text-brand-orange shrink-0 mt-1" />
              <span className="leading-relaxed">{data.client.productionLocation}</span>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="relative z-10 mb-12">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="py-4 px-6 text-xs uppercase tracking-widest text-zinc-400 font-medium">Ítem</th>
                  <th className="py-4 px-6 text-xs uppercase tracking-widest text-zinc-400 font-medium w-1/2">Descripción</th>
                  <th className="py-4 px-6 text-xs uppercase tracking-widest text-zinc-400 font-medium text-right">Precio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.items.map((item, index) => (
                  <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 text-sm text-zinc-500 font-mono">{(index + 1).toString().padStart(2, '0')}</td>
                    <td className="py-5 px-6">
                      <div className="font-medium text-white text-lg">{item.description}</div>
                      {item.details && (
                        <div className="text-sm text-zinc-500 mt-1">{item.details}</div>
                      )}
                    </td>
                    <td className="py-5 px-6 text-right text-zinc-300 font-medium tabular-nums">
                      {formatCurrency(item.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financials */}
        <div className="relative z-10 flex justify-end mb-16">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex justify-between items-center text-zinc-400 pb-2">
              <span>Subtotal</span>
              <span className="font-medium text-white tabular-nums">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 pb-4 border-b border-white/10">
              <span>IVA ({(data.taxRate * 100).toFixed(0)}%)</span>
              <span className="font-medium text-white tabular-nums">{formatCurrency(taxAmount)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold text-white tracking-wide">TOTAL FINAL</span>
              <div className="text-3xl font-bold text-brand-orange tabular-nums tracking-tight">
                {formatCurrency(total)}
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="relative z-10 bg-zinc-950/50 rounded-2xl p-8 border border-white/5">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-5 h-5 text-brand-orange mr-3" />
            <h3 className="text-sm uppercase tracking-widest font-bold text-white">Términos y Condiciones</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400 leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 mr-2 text-zinc-600 shrink-0 mt-0.5" />
                <span>Esta cotización cubre únicamente el servicio de grabación en sitio especificado.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 mr-2 text-zinc-600 shrink-0 mt-0.5" />
                <span>La edición y post-producción del material se cotizarán por separado si son requeridas.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 mr-2 text-zinc-600 shrink-0 mt-0.5" />
                <span>Cualquier servicio o entregable no especificado se considerará trabajo adicional y se facturará por separado.</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 mr-2 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Horas Extra: Cualquier tiempo adicional requerido en sitio por el cliente se facturará a Q200 + IVA por hora o fracción.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 mr-2 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">El plazo para el pago del servicio es máximo 1 semana luego de haber entregado el material.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-16 flex flex-col items-center justify-center text-center border-t border-white/5 pt-8">
            <div className="flex items-center justify-center space-x-2 mb-4 opacity-80 hover:opacity-100 transition-opacity">
                 <div className="w-3 h-3 bg-brand-orange rounded-sm rotate-45"></div>
                 <span className="text-lg font-bold text-white tracking-tighter">ALEX CHAJÓN</span>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
            © 2025 Alex Chajón | Motion Graphics & Web Design
            </p>
            <p className="text-zinc-600 text-[10px] max-w-lg">
                Documento generado digitalmente. Válido sin firma autógrafa. 
                Gracias por su preferencia.
            </p>
        </footer>

      </GlassCard>
    </div>
  );
};