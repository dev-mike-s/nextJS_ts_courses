//root/app/bestellungen/[nr]/page.tsx

/**
 * Dynamische Bestellansicht
 * Nutzt Server-Side Params für die Bestellnummer
 */

import {notFound} from 'next/navigation'

export default async function BestellungPage( {params}: { params: Promise<{ nr:string}> })
{
    const {nr} = await params;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Info Table */}
            <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-lg border border-gray-50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Bestell Nr.</th>
                                    <th className="px-6 py-4 font-semibold">Kunde</th>
                                    <th className="px-6 py-4 font-semibold">Adresse</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            <tr className="text-gray-700">
                                <td className="px-6 py-6 font-mono font-bold text-primary">{nr}</td>
                                <td className="px-6 py-6 font-medium">Guybrush Threepwood</td>
                                <td className="px-6 py-6 text-gray-500">Monkey Island 1, Deep Jungle</td>
                                <td className="px-6 py-6">
                                    <div className="flex items-center gap-3 bg-green-50 text-green-700 px-4 py-2 rounded-full w-fit border border-green-100">
                                        <span className="text-sm font-bold uppercase tracking-wider">Zubereitung</span>
                                        <div className="w-4 h-4 border-2 border-green-700 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Status Card Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Bezahlung</h2>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 font-medium italic">Gesamtbetrag</span>
                            <span className="text-2xl font-black text-gray-900">5,49€</span>
                        </div>
                        <button disabled className="w-full bg-green-500/10 text-green-600 font-black py-4 rounded-2xl border-2 border-green-200 cursor-not-allowed uppercase tracking-widest text-sm">
                            ✓ Bezahlt
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}