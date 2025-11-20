import React, { useRef, useState } from 'react';
import { Quote } from './components/Quote';
import { QuoteData } from './types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Define data strictly based on the user's request
  const quoteData: QuoteData = {
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
  };

  const handleDownloadPdf = async () => {
    if (!quoteRef.current || isGenerating) return;

    setIsGenerating(true);
    
    try {
      // Small delay to ensure UI is ready if needed
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(quoteRef.current, {
        scale: 2, // Higher scale for better resolution
        useCORS: true,
        backgroundColor: '#000000', // Ensure dark background in PDF
        logging: false,
        onclone: (clonedDoc) => {
            // Enhance contrast for PDF version
            const element = clonedDoc.getElementById('quote-container');
            if (element) {
                // Remove animations to prevent capture artifacts
                element.style.animation = 'none';
                element.style.transform = 'none';
            }
            
            // Make the glass card look solid/cleaner in PDF since blur isn't supported well
            const glassCards = clonedDoc.querySelectorAll('.backdrop-blur-2xl');
            glassCards.forEach((card) => {
                (card as HTMLElement).style.backdropFilter = 'none';
                (card as HTMLElement).style.backgroundColor = 'rgba(10, 10, 10, 0.95)'; // Almost solid black
                (card as HTMLElement).style.border = '1px solid rgba(255, 255, 255, 0.2)';
            });
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 20; // Top padding

      // Calculate height in PDF
      const finalHeight = imgHeight * ratio;
      const finalWidth = imgWidth * ratio;

      pdf.addImage(imgData, 'PNG', imgX, imgY, finalWidth, finalHeight);
      pdf.save(`Cotizacion_${quoteData.metadata.number}_Vaovao.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor intente de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-zinc-100 font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
        
        {/* Moving light orb 1 */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        {/* Moving light orb 2 */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-orange-900/20 rounded-full blur-[150px]"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main Content Content */}
      <main className="relative z-10 py-10 flex flex-col items-center justify-center min-h-screen">
        
        {/* Printable Area Wrapper */}
        <div ref={quoteRef} id="quote-container" className="p-4 md:p-8 w-full max-w-4xl flex justify-center">
            <Quote data={quoteData} />
        </div>
        
        {/* Floating Action Button for PDF Download */}
        <div className="fixed bottom-8 right-8 animate-fade-in print:hidden z-50">
            <button 
                onClick={handleDownloadPdf}
                disabled={isGenerating}
                className={`
                    group
                    flex items-center justify-center
                    w-14 h-14 rounded-full
                    bg-zinc-900/80 border border-white/10
                    backdrop-blur-xl
                    hover:bg-brand-orange hover:border-brand-orange hover:scale-105
                    active:scale-95
                    transition-all duration-300
                    shadow-2xl shadow-black/50
                    cursor-pointer
                    ${isGenerating ? 'opacity-70 cursor-wait' : ''}
                `}
                title="Descargar PDF"
            >
                {isGenerating ? (
                    <Loader2 className="w-6 h-6 text-white animate-spin" />
                ) : (
                    <Download className="w-6 h-6 text-white group-hover:animate-bounce" />
                )}
            </button>
        </div>
      </main>
    </div>
  );
};

export default App;