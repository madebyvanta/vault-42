import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import QuotePage from './components/QuotePage';

const App: React.FC = () => {
  const [isQuotePage, setIsQuotePage] = useState(false);

  useEffect(() => {
    const checkPath = () => {
        // Simple routing logic for the "secret" link
        // This checks if the current URL path contains the secret key
        const path = window.location.pathname;
        if (path.includes('cotizacionplataformamac')) {
            setIsQuotePage(true);
        } else {
            setIsQuotePage(false);
        }
    };
    
    checkPath();
    
    // Listen for browser navigation (back/forward)
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  return (
    <main className="w-full bg-brand-dark selection:bg-brand-green selection:text-black font-sans min-h-screen">
      {isQuotePage ? <QuotePage /> : <Home />}
    </main>
  );
};

export default App;