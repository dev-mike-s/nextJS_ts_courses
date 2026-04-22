/**
 * Server-Komponente fuer Produktdaten aus MongoDB. Rendert die Liste direkt auf dem Server.
 */
import Image from "next/image";
import Link from "next/link";
import { Model } from "mongoose";
import dbConnect from "@/utils/mongodb";
import Produkt, { IProdukt } from "@/models/Produkt";

type LeanProdukt = {
  _id: string | { toString: () => string };
  name: string;
  beschreibung: string;
  preis: number;
  url: string;
  bild: string;
};

export default async function ProduktListe() {
  const conn = await dbConnect();
  console.log("[v16][produktliste] db connected", conn.connection.name);

  const produktModel = Produkt as Model<IProdukt>;
  const produkte = (await produktModel.find({}).lean()) as LeanProdukt[];

  console.log("[v16][produktliste] query status", { count: produkte.length });

  if (!Array.isArray(produkte) || produkte.length === 0) {
    console.error("[v16][produktliste] no products returned");
    return <div className="text-center p-10 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">Keine Produkte gefunden.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {produkte.map((produkt) => (
        <div key={typeof produkt._id === "string" ? produkt._id : produkt._id.toString()} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
          <Link href={`/produkte/${produkt.url}`} className="block relative h-64">
            <Image src={produkt.bild} alt={produkt.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </Link>
          <div className="p-5">
            <h3 className="text-xl font-bold flex justify-between items-center">
              {produkt.name}
              <span className="text-red-700 text-lg">{produkt.preis.toFixed(2)} EUR</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{produkt.beschreibung}</p>
            <button className="w-full mt-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-xl transition-colors">Zum Warenkorb</button>
          </div>
        </div>
      ))}
    </div>
  );
}
