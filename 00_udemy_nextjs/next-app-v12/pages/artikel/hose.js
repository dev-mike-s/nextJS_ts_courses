// root/pages/artikel/hose.js

import Image from 'next/image'
import hose1 from '../../public/bilder/1.jpg'

export default function Home() {
    return (
        <div className="card">
            <h1>Hose</h1>
            <img
                src={hose1} 
                alt='artikel'
                width={600}
                height={600}
            />
        </div>
    )
}

/* Beispiel für statischen Export - 'next export'
            <img
                src={hose1} 
                placeholder='blur'
                blurDataURL = 'loading-logo'
                priority='true'
                alt='artikel'
                width={600}
                height={600}
            />
*/