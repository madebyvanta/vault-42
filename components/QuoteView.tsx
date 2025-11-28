import React, { useRef, useState } from 'react';
import { Quote } from './Quote';
import { QuoteData, StandardQuoteData } from '../types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

interface QuoteViewProps {
  data: QuoteData; // Accepts the union, but we cast or check inside
}

export const QuoteView: React.FC<QuoteViewProps> = ({ data }) => {
  // Type Guard: We expect standard data here, but for safety in the unified component:
  const standardData = data as StandardQuoteData; 
  
  const quoteRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    if (!quoteRef.current || isGenerating) return;

    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(quoteRef.current, {
        scale: 2, 
        useCORS: true,
        backgroundColor: '#000000', 
        logging: false,
        onclone: (clonedDoc) => {
            const element = clonedDoc.getElementById('quote-container');
            if (element) {
                element.style.animation = 'none';
                element.style.transform = 'none';
            }
            const glassCards = clonedDoc.querySelectorAll('.backdrop-blur-2xl');
            glassCards.forEach((card) => {
                (card as HTMLElement).style.backdropFilter = 'none';
                (card as HTMLElement).style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
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
      const imgY = 20;

      const finalHeight = imgHeight * ratio;
      const finalWidth = imgWidth * ratio;

      pdf.addImage(imgData, 'PNG', imgX, imgY, finalWidth, finalHeight);
      pdf.save(`Cotizacion_${standardData.metadata.number}.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor intente de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-zinc-100 font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-orange-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="fixed top-8 left-8 z-50 print:hidden opacity-0 hover:opacity-100 transition-opacity">
        <Link href="/">
            <button className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/5 hover:border-brand-orange text-zinc-400 hover:text-brand-orange transition-colors">
                <ArrowLeft className="w-5 h-5" />
            </button>
        </Link>
      </div>

      <main className="relative z-10 py-10 flex flex-col items-center justify-center min-h-screen">
        <div ref={quoteRef} id="quote-container" className="p-4 md:p-8 w-full max-w-4xl flex justify-center">
            {/* Ensure we pass the correct data type to the inner component */}
            <Quote data={standardData} />
        </div>
        
        <div className="fixed bottom-8 right-8 animate-fade-in print:hidden z-50">
            <button 
                onClick={handleDownloadPdf}
                disabled={isGenerating}
                className={`
                    group flex items-center justify-center w-14 h-14 rounded-full
                    bg-zinc-900/80 border border-white/10 backdrop-blur-xl
                    hover:bg-brand-orange hover:border-brand-orange hover:scale-105
                    active:scale-95 transition-all duration-300 shadow-2xl shadow-black/50
                    cursor-pointer ${isGenerating ? 'opacity-70 cursor-wait' : ''}
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