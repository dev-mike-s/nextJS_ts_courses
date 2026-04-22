/**
 * Root-Layout in v16. Definiert globale Struktur mit Navigation, Main-Bereich und Footer.
 */
import "./globals.css";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Liefermax v16",
  description: "Modern App Router stack with MongoDB and Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow max-w-7xl mx-auto px-4 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
