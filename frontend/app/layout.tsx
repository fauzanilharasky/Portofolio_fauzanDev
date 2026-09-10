import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fauzan Ilharasky | Full-Stack Developer',
  description: 'Portfolio of Fauzan Ilharasky, a full-stack developer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
