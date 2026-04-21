//root/app/warenkorb/page.tsx

/**
 * Warenkorb-Ansicht
 * Nutzt 'sticky' Position für die Gesamtsumme, damit sie beim scrollen sichtbar bleibt.
 *
 * v12: Ersetzt Bootstrap Table durch sauberes Tailwind-Grid
 * Der CloseButton wird durch ein einfaches, gestyltes Button-Element ersetzt.
 */

import Image from "next/image";
import Link from "next/link";

export default function WarenkorbPage() {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Linke Seite: Artikelliste (3/4 Breite) */}
            <div className="lg:col-span-3 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200 text-gray-400 text-sm uppercase tracking-wider">
                            <th className="py-4 font-medium">Bild</th>
                            <th className="py-4 font-medium">Name</th>
                            <th className="py-4 font-medium">Extras</th>
                            <th className="py-4 font-medium">Menge</th>
                            <th className="py-4 font-medium">Betrag</th>
                            <th className="py-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Beispiel-Item 1 */}
                        <tr className="group">
                            <td className="py-4">
                                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                                    <Image src="/bilder/produkte/cola.jpg"
                                           alt="cola"
                                           fill
                                           className="object-cover"
                                    />
                                </div>
                            </td>
                            <td className="py-4 font-bold text-gray-800">Cola</td>
                            <td className="py-4 text-gray-500 text-sm italic">doppelt</td>
                            <td className="py-4 text-center font-medium">1</td>
                            <td className="py-4 font-bold">1,99€</td>
                            <td className="py-4 text-right">
                                <button className="p-2 hover:bg-medium">1</button>
                            </td>
                            <td className="py-4 font-bold">3,50€</td>
                            <td className="py-4 text-right">
                                <button className="p-2 hover:bg-red-50 text-red-500 rounde-red-50 text-red-500 rounded-lg transition-colors">
                                    ✕
                                </button>
                            </td>
                        </tr>
                        {/* Beispiel-Item 2 */}
                        <tr className="group">
                            <td className="py-4">
                                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                                    <Image src="/bilder/produkte/pommes.jpg" alt="pommes" fill className="object-cover" />
                                </div>
                            </td>
                            <td className="py-4 font-bold text-gray-800">Pommes</td>
                            <td className="py-4 text-gray-500 text-sm italic">doppelt</td>
                            <td className="py-4 text-center font-medium">1</td>
                            <td className="py-4 font-bold">3,50€</td>
                            <td className="py-4 text-right">
                                <button className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors">
                                    ✕
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Rechte Seite: Kasse/Summe (1/4 Breite) */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
                    <h2 className="text-xl font-bold mb-4 border-b pb-4 text-gray-800">Gesamt</h2>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-500 font-medium">Zwischensumme:</span>
                        <span className="text-2xl font-black text-primary">5,49€</span>
                    </div>
                    <Link href="/bestellungen/123" className="block w-full">
                        <button className="w-full bg-primary hover:bg-yellow-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-yellow-100 active:scale-95">
                            ZUR KASSE
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}