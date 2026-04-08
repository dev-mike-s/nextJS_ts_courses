// root/app/autos/[[...params]]/page.tsx

/* Ohne useRouter, wir sind auf dem Server, wir lesen die 
 * Parameter direkt aus den Server-Props aus.
 * Wenn keine Parameter in der URL sind (z.B. nur /autos), 
 * setzen wir ein leeres Array als Fallback.
 */
interface PageProps {
    params: Promise<{ params?: string[] }>; // can be undefined
}

export default async function AutosPage( {params}: PageProps) {

    const resolvedParams = await params;
    const urlParams = resolvedParams.params || []

    if (urlParams.length === 2) {
        return (
            <div>
                <h1>Alle {urlParams[0]} für unter {urlParams[1]} Euro</h1>
            </div>
        );
    }
    if (urlParams.length === 1) {
        return <h1>Alle {urlParams[0]}</h1>;
    }
    return <h1>Autos</h1>;
}