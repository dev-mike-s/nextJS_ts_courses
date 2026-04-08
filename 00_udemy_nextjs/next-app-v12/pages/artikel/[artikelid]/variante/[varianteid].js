// root/pages/artikel/[artikelid]/variante/[varianteid].js

/**
 * Beispiel für dynamisches Page Routing:
 * client-Hook 'useRouter'
 * Nachteil: Kann unnötig kompliziert werden und kann beim Laden 
 * erstmal leer sein, bis der Router im Browser die ID ausgelesen hatte.
 * Besser: Autos mit 'fetch all routes'
 * 
 * http://localhost:3000/artikel/42/variante/2
 * http://localhost:3000/artikel/{42}/variante/{2} Platzhalter
 */

import { useRouter } from "next/router";

export default function ID() {
    const router = useRouter();
    const {artikelid, varianteid} = router.query;

    return (
        <div>
            <h1>Die ID lautet {artikelid} und für Variante {varianteid} </h1>
        </div>
    )
}