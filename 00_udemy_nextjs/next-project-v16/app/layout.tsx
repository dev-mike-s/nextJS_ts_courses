//root/app/layout.tsx

/**
 * Alles, was global ist in Layout.tsx (zb CSS, Provider, Navigation).
 * Server Component: Da kein 'use client' steht, wird dieses Layout nur auf dem 
 * Server gerendert = SEO-freundlicher.
 * Typing: 'children' muss vom Typ 'React.ReactNode' sein (alles was react rendern kann).
 * v12 vs. v16:
 * Root Layout ersetzt _app.js und _document.js sowie z.B. <Head> und 
 * Metadaten werden zentral exportiert. 
 */

import './globals.css';
import type {Metadata} from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Liefermax - Dein moderner Lieferservice', 
    description: 'Dein Lieferservice v16',
};

export default function RootLayout( {children}: { children: React.ReactNode} ) {
  return (
    <html lang="de">
        <body className="antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow max-w-7xl mx-auto px-4 w-full">
            {children}
          </main>
          <Footer />
        </body>
    </html>
  );
}
