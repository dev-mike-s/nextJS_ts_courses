// root/pages/autos/[[...params]].js

import {useRouter} from 'next/router';

/**
 * Beispiel für 'fetch all routes' bzw. "Optional Catch-all"
 * localhost:3000/autos/parameter1/parameter2/parameter3
 * localhost:3000/autos/tesla/30000
 * localhost:3000/autos
 */
export default function ID() {
    
    const router = useRouter();
    const {params = [] } = router.query;

    if (params.length === 2) {
        return (
            <div>
                <h1> Alle {params[0]} für unter {params[1]} Euro </h1>
            </div>
        );
    } else if (params.length === 1) {
        return <h1> Alle {params[0]} </h1>
    }
    return <h1> Autos </h1>
}