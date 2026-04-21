import Image from 'next/image';
import Link from 'next/link';
import jsondb from '@/jsondb/produkte';
import {notFound} from 'next/navigation';

export default async function ProduktSeite({ params }: { params: Promise<{ url: string }> }) {

    const { url } = await params;
    const produkt = jsondb.produkte.find((p)=> p.url === url);
    if (!produkt) {
        notFound();
    }
    return (
        <div className="max-w-6xl mx-auto py-10">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors mb-6 inline-block">
                ← zurück zur Übersicht
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={produkt.bild}
                        alt={produkt.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900">{produkt.name}</h1>
                            <p className="text-3xl font-bold text-primary mt-2">
                                {produkt.preis.toFixed(2)}€
                            </p>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed border-b pb-6">
                        {produkt.beschreibung}
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-800">
                            Extras wählen
                        </h3>
                        <div className="flex flex-col gap-3"
                        >
                            <label className="flex items-center gap-3 cursor-pointer group"
                            >
                                <input type="checkbox" className="w-5 h-5 accent-primary"
                                />
                                <span className="group-hover: text-primary transition-colors">
                                    Extra Portion Pommes
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="w-20 p-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none"
                        />
                        <button className="flex-1 bg-primary hover:bg-yellow-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-yellow-200 transition-all active:scale-95">
                            zum Warenkorb
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}