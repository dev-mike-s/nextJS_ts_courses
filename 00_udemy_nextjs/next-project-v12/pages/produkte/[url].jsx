/**
 * Dynamische Produktdetailseite in v12. Liest den URL-Parameter und sucht das passende Produkt.
 */
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button } from "react-bootstrap";
import jsondb from "../../jsondb/produkte";

export default function Produktseite() {
  const router = useRouter();
  const { url } = router.query;

  console.log("[v12][produkt-detail] router.query", router.query);

  if (!url || typeof url !== "string") {
    console.error("[v12][produkt-detail] invalid url parameter", url);
    return <h2>Parameter fehlt oder ist ungueltig.</h2>;
  }

  const produkt = jsondb.produkte.find((item) => item.url === url);

  if (!produkt) {
    console.error("[v12][produkt-detail] product not found", url);
    return <h2>Produkt nicht vorhanden</h2>;
  }

  return (
    <div>
      <div>
        <Link href="/">
          <a className="text-dark">zurueck zur Uebersicht</a>
        </Link>
      </div>

      <div className="row row-cols-2 mt-2">
        <div>
          <Image className="rounded-3" src={produkt.bild} alt={produkt.name} width={600} height={600} layout="responsive" />
        </div>

        <div>
          <h1>{produkt.name}</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 className="text-danger">{produkt.preis} EUR</h2>
            </ListGroup.Item>

            <ListGroup.Item>{produkt.beschreibung}</ListGroup.Item>

            <ListGroup.Item>
              Extras: doppelt <input className="form-check-input me-2" type="checkbox" /> extra Pommes <input className="form-check-input me-2" type="checkbox" />
            </ListGroup.Item>

            <ListGroup.Item>
              <input className="form-control w-50" type="number" placeholder="1" min="1" />
            </ListGroup.Item>

            <ListGroup.Item>
              <div className="row shadow">
                <Button variant="danger">Zum Warenkorb</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
