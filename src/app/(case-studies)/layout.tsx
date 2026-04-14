import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-base' });

export const metadata: Metadata = {
  title: 'Inspección de Sistema | Case Studies',
  description: 'Documentación estructural inmersiva',
};

// Layout Aislando el Sistema: Full Width, No Sidebar.
export default function CaseStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body style={{ overflow: 'auto', backgroundColor: '#0a0a0a' }}>
        
        {/* Navbar Flotante de Escape Minimalista */}
        <nav style={{ 
          position: 'sticky', 
          top: 0, 
          padding: '1.2rem 2rem', 
          background: 'rgba(10,10,10,0.85)', 
          backdropFilter: 'blur(10px)',
          zIndex: 1000, 
          borderBottom: '1px solid hsla(220, 20%, 20%, 0.5)'
        }}>
          <Link href="/" style={{ color: 'hsl(190, 80%, 60%)', fontWeight: '700', fontSize: '1rem', letterSpacing: '0.05em' }}>
            &larr; RETORNAR AL HUB CENTRAL
          </Link>
        </nav>

        {/* Contentido Libre de Restricciones */}
        <main className="case-study-fullscreen">
          {children}
        </main>

      </body>
    </html>
  );
}
