import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '../globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-base' });

export const metadata: Metadata = {
  title: 'CV - Jonatan Baron',
  description: 'Currículum Vitae de Jonatan Baron',
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body style={{ backgroundColor: '#fff', color: '#000' }}>
        {children}
      </body>
    </html>
  );
}
