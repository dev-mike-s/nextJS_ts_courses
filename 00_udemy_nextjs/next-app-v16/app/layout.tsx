//root/app/layout.tsx

// in v12 mit head dies kann hier nur noch als Objekt übergeben werden
// {children} als Wrapper.
// Mit Link passiert Next-Magie: Statt Neuladen (böses Flackern), 
// wird im Hintergrund nur der Inhalt {children} ausgetauscht. 

import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Willkommen zu Next v16',
  keywords: ['next.js', 'react'],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout ( {children} : LayoutProps) {
  return (
    <html lang="de">
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">

          <div className="container">
            
            <Link href="/" className="navbar-brand">
              Mein Shop
            </Link>

            <div className="navbar-nav">
              <Link href="/" className="nav-link">
                Home
              </Link>

              <Link href="/artikel" className="nav-link">
                Artikel
              </Link>

              <Link href="/benutzer" className="nav-link">
                Benutzer
              </Link>

              <Link href="/autos" className="nav-link">
                Autos
              </Link>
              </div>

          </div>

        </nav>
        
        <div className="container">
          {children}
        </div>

      </body>
    </html>
  );
}

/*
    <html lang="de">
      <body>
        <main className="container m-4">
          {children}
        </main>
      </body>
    </html>
*/