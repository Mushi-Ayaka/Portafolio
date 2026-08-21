import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { Sidebar } from '@/components/layout/Sidebar';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-base' });

export const metadata: Metadata = {
  title: 'Jonatan Baron | Software Engineer',
  description: 'Portafolio de Arquitectura y Código',
};

// Layout Original del Portafolio: Incorpora Sidebar de Contactos
export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body>
        <div className="portfolio-grid">
           <Sidebar />
           <main className="snap-container">
             {children}
           </main>
        </div>
      </body>
    </html>
  );
}
