// root/pages/artikel/index.js

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Artikelübersicht</title>
            </Head>
            <h1>Artikelübersicht</h1>
            {
                ['1', '2', '3', '4', '5', '6'].map(path => {
                    return (
                        <div key={path}>
                            <img  
                                src={`/bilder/${path}.jpg`} 
                                alt='artikel'
                                width={600}
                                height={600}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

/* Beispiel für statischen Export - 'next export'
                            <Image  
                                src={`/bilder/${path}.jpg`} 
                                alt='artikel'
                                width={600}
                                height={600}
                            />
*/