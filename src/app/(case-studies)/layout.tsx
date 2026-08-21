import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-base' });

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
    <html lang="es" className={spaceGrotesk.variable}>
       <body style={{ overflow: 'auto', backgroundColor: '#ffffff' }}>
         
          {/* Navbar Flotante de Escape Minimalista */}
          <nav style={{ 
            position: 'sticky', 
            top: 0, 
            padding: '1.1rem 2rem', 
            background: 'rgba(248,250,252,0.82)', 
            backdropFilter: 'blur(10px)',
            zIndex: 1000, 
            borderBottom: '1px solid rgba(15,23,42,0.10)'
          }}>
             <Link href="/#proyectos" style={{ color: '#334155', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.05em' }}>
              &larr; VOLVER A CASOS DE ESTUDIO
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
