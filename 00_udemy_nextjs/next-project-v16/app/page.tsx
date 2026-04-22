/**
 * Startseite in v16 als Server Component. Kombiniert Slider und Produktliste.
 */
import Slider from "../components/Slider";
import ProduktListe from "../components/ProduktListe";

export default function HomePage() {
  return (
    <section className="py-8">
      <Slider />
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Hungrig? <span className="text-red-700">Liefermax</span> regelt.
        </h1>
        <p className="mt-4 text-lg text-gray-600">Dein moderner Lieferservice, frisch und schnell.</p>
      </div>
      <div className="mt-16">
        <ProduktListe />
      </div>
    </section>
  );
}
