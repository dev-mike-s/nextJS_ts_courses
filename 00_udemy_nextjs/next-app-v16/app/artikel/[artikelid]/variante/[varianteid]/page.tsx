// root/app/artikel/[artikelid]/variante/[varianteid]/page.tsx

/* 
 * Der Server liest direkt die Parameter aus der URL, 
 * noch bevor das HTML an den Browser geschickt wird.
 * Da wir zwei dynamische Parameter haben, 
 * benennen wir die Ordner eindeutig ([artikelid] und [varianteid]).
 */

interface PageProps {
    params: Promise<{
        artikelid: string;
        varianteid: string;
    }>;
}

export default async function ArtikelVariante({ params }: PageProps) {
    const resolvedParams = await params; 
    return (
        <div>
            <h1>
                Die ID lautet {resolvedParams.artikelid} und für Variante {resolvedParams.varianteid}

            </h1>
        </div>
    );
}
