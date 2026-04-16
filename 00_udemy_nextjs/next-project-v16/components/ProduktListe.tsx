//root/components/ProduktListe.tsx

import Image from 'next/image';
import Link from 'next/link';
import jsondb from '@/jsondb/produkte';

export default function ProduktListe() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">

            {jsondb.produkte.map((produkt) => (

                <div key={produkt.name} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
                    <Link
                        href={`/produkte/${produkt.url}`}
                        className="block relative h-64" >
                        <Image
                            src={produkt.bild}
                            alt={produkt.name}
                            fill
                            className="object-cover" />
                    </Link>
                    <div className="p-5">
                        <h3 className="text-xl font-bold flex justify-between items-center">
                            {produkt.name}
                            <span className="text-primary text-lg">
                                {produkt.preis.toFixed(2)}€
                            </span>
                        </h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                            {produkt.beschreibung}
                        </p>
                    <button className="w-full mt-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-xl transition-colors">
                        Zum Warenkorb
                    </button>
                    </div>

                </div>
            ))}
        </div>
    );
}