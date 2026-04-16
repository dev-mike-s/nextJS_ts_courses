//root/pages/produkte/[url].jsx

import {useRouter} from 'next/router';
import jsondb from '../../jsondb/produkte';
import Link from 'next/link';
import Image from 'next/image';
import {ListGroup, Button, ListGroupItem} from 'react-bootstrap';

export default function Produktseite() {

    const router = useRouter();
    const {url} = router.query;
    const produkt = jsondb.produkte.find((a) => a.url === url);

    if (!produkt) {
        return (
            <div>
                <h2>
                    Produkt nicht vorhanden
                </h2>
            </div>
        )
    }

    return(
        <div>
            <div>
                <Link href="/">
                    <a className="text-dark">
                        ← zurück zur Übersicht
                    </a>
                </Link>
            </div>

            <div className="row row-cols-2 mt-2">
                <div>
                    <Image
                        className="rounded-3"
                        src={produkt.bild}
                        alt="produkt.name"
                        width={600}
                        height={600}
                        layout="responsive"
                    />
                </div>

                <div>
                    <h1>
                        {produkt.name}
                    </h1>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h2 className="text-danger">{produkt.preis}€
                            </h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {produkt.beschreibung}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Extras:
                            doppelt <input className="form-check-input me-2" type="checkbox" />
                            extra Pommes <input className="form-check-input me-2" type="checkbox" />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <input
                                className="form-control w-50"
                                type="number"
                                placeholder="1"
                                min="1"
                            >
                            </input>
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
    )
}