import React from 'react';
import { Route, Switch } from 'wouter';
import { QuoteView } from './components/QuoteView';
import { PlanView } from './components/PlanView';
import { Landing } from './components/Landing';
import { QuoteData } from './types';

// Database of Quotes
const QUOTES: Record<string, QuoteData> = {
  // Original Production Quote
  'SP-2025-032': {
    type: 'standard',
    metadata: {
      number: 'SP-2025-032',
      date: '20 - Noviembre - 2025',
    },
    client: {
      name: 'Vaovao',
      productionLocation: 'Calz. Atanasio Tzul, Ciudad de Guatemala',
    },
    items: [
      {
        id: '1',
        description: 'Servicio de Grabación',
        details: 'Grabación de video y audio (2 horas) en locación.',
        price: 480.00
      },
      {
        id: '2',
        description: 'Logística y Movilización',
        details: 'Transporte de equipo (Ida y vuelta + Peaje + Ruta completa)',
        price: 350.00
      }
    ],
    taxRate: 0.05 // 5% IVA
  },

  // New Web Development Plans Quote
  'SP-WEB-PLANS': {
    type: 'plans',
    metadata: {
      number: 'SP-WEB-PLANS',
      date: '20 - Noviembre - 2025',
    },
    client: {
      name: 'Cliente Web',
      productionLocation: 'Remoto',
    },
    plans: [
      {
        title: 'Plan Mensual',
        marketValue: 45000,
        initialPayment: 4800,
        monthlyPayment: 650,
        maintenance: 250,
        totalFirstYear: 15600,
        subsequentText: 'Luego Q. 900 / mensuales',
        isRecommended: false
      },
      {
        title: 'Plan Lifetime',
        marketValue: 45000,
        initialPayment: 6000,
        deliveryPayment: 6000,
        monthlyPayment: 0,
        maintenance: 125,
        totalFirstYear: 12000,
        subsequentText: 'El mantenimiento de Q125 inicia a partir del 2º año.',
        // AQUI ESTA EL CAMBIO: Lo activamos para que el CSS lo detecte
        isRecommended: true 
      }
    ]
  }
};

const App: React.FC = () => {
  return (
    <Switch>
      {/* Root Route: Landing Page */}
      <Route path="/" component={Landing} />

      {/* Dynamic Route: Specific Quote */}
      <Route path="/:id">
        {(params) => {
          const quoteId = params.id;
          const data = QUOTES[quoteId];

          if (data) {
            // Determine which view to render based on data type
            if (data.type === 'plans') {
              return <PlanView data={data} />;
            } else {
              // Default to standard quote view (handling legacy data structure if needed, though we updated the type)
              return <QuoteView data={data} />;
            }
          } else {
            // 404 View
            return (
              <div className="min-h-screen w-full bg-black flex items-center justify-center text-zinc-500 font-sans flex-col">
                <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                <p className="mb-8">Cotización no encontrada.</p>
                <a href="/" className="px-6 py-2 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors text-sm">
                  Regresar al Inicio
                </a>
              </div>
            );
          }
        }}
      </Route>

      {/* Fallback for any other route */}
      <Route>
        <Landing />
      </Route>
    </Switch>
  );
};

export default App;