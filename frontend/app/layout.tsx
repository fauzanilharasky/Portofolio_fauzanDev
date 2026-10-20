import type { Metadata } from 'next';
import ScrollReveal from './components/ScrollReveal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fauzan Ilharasky | Full-Stack Developer',
  description: 'Portfolio of Fauzan Ilharasky, a full-stack developer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
