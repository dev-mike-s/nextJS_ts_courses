//root/app/produkte/[url]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import dbConnect from '@/utils/mongodb';
import Produkt, {IProdukt} from '@/models/Produkt';
import {Model} from 'mongoose';

/** Dynamic Server Component:
 * Die Seite ist async, weil sie auf zwei Dinge wartet: Die Datenbank-Verbindung und die Auflösung der URL-Parameter.
 * Params Promise:
 * In Next.js 16 sind params ein Promise. Man muss sie await-en, bevor man auf url zugreifen kann.
 * Direct DB Access:
 * Wir brauchen keine API-Umwege mehr. Die Komponente greift direkt auf Mongoose zu.
 * No Hooks:
 * Da es eine Server Component ist, gibt es kein useRouter oder useEffect: Das spart Client-seitiges JavaScript.
 * Typsicherheit:
 * Durch den Cast auf Model<IProdukt> weiß TypeScript genau, welche Felder in
 * produkt existieren (z.B. dass extras ein Array ist).
 * Lean:
 * Wir nutzen .lean(), damit wir keine schweren Mongoose-Methoden mitschleppen, die React auf dem Weg
 * zum Browser sowieso nicht serialisieren kann.
 */

export default async function ProduktSeite({ params }: { params: Promise<{ url: string }> }) {
    await dbConnect();
    const { url } = await params;

    const produktModel = (Produkt as Model<IProdukt>);
    const produkt = await produktModel.findOne({ url }).lean();

    if (!produkt) {
        notFound();
    }

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="text-gray-500 hover:text-red-700 transition-colors mb-6 inline-block">
                ← zurück zur Übersicht
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={produkt.bild}
                        alt={produkt.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900">{produkt.name}</h1>
                        <p className="text-3xl font-bold text-red-700 mt-2">
                            {produkt.preis.toFixed(2)}€
                        </p>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed border-b pb-6">
                        {produkt.beschreibung}
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-800">Extras wählen</h3>
                        <div className="flex flex-col gap-3">
                            {produkt.extras && produkt.extras.map((extra, index) => (
                                <label key={index} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 accent-red-700" />
                                    <span className="group-hover:text-red-700 transition-colors flex-1">
                                    {extra.text}
                                </span>
                                    <span className="font-bold">+{extra.preis.toFixed(2)}€</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="w-20 p-3 border-2 border-gray-200 rounded-xl focus:border-red-700 outline-none"
                        />
                        <button className="flex-1 bg-red-700 hover:bg-red-800 text-white font-black py-4 rounded-2xl shadow-lg transition-all active:scale-95">
                            zum Warenkorb
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}