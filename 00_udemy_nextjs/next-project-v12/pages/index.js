/**
 * Startseite in v12 (Pages Router). Rendert Slider und Produktliste im klassischen Seitenaufbau.
 */
import Slider from "../komponenten/Slider";
import ProduktListe from "../komponenten/ProduktListe";

export default function HomePage() {
  console.log("[v12][home] render start");

  return (
    <div>
      <Slider />
      <ProduktListe />
    </div>
  );
}
