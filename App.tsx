import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import QuotePage from './components/QuotePage';
import ExpansionAccessQuote from './components/ExpansionAccessQuote';
import AccessQuote from './components/AccessQuote';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'quote_mac' | 'quote_expansion' | 'quote_access'>('home');

  useEffect(() => {
    const checkPath = () => {
      // Simple routing logic for the "secret" link
      // This checks if the current URL path contains the secret key
      const path = window.location.pathname;
      if (path.includes('cotizacionplataformamac')) {
        setPage('quote_mac');
      } else if (path.includes('cotizacionexpansion')) {
        setPage('quote_expansion');
      } else if (path.includes('cotizacionaccess')) {
        setPage('quote_access');
      } else {
        setPage('home');
      }
    };

    checkPath();

    // Listen for browser navigation (back/forward)
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  return (
    <main className="w-full bg-brand-dark selection:bg-brand-green selection:text-black font-sans min-h-screen">
      {page === 'quote_mac' && <QuotePage />}
      {page === 'quote_expansion' && <ExpansionAccessQuote />}
      {page === 'quote_access' && <AccessQuote />}
      {page === 'home' && <Home />}
    </main>
  );
};

export default App;