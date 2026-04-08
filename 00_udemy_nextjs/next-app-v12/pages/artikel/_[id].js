// root/pages/artikel/_[id].js

//Beispiel für dynamisches Page Routing
//Nur ein Übergabe-Parameter wird abgefangen

import {useRouter} from 'next/router';

export default function ID() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <div>
            <h1>Die ID lautet {id} </h1>
        </div>
    )
}