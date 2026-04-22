/**
 * Seed-Route in v16. Importiert lokale Produktdaten in MongoDB fuer schnelle Tests.
 */
import { NextResponse } from "next/server";
import dbConnect from "@/utils/mongodb";
import Produkt from "@/models/Produkt";
import jsondb from "@/jsondb/produkte";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reset = searchParams.get("reset");

  console.log("[v16][seed] request params", { reset });

  try {
    await dbConnect();

    if (reset === "true") {
      await Produkt.deleteMany({});
      console.log("[v16][seed] collection reset complete");
    }

    const source = Array.isArray(jsondb.produkte) ? jsondb.produkte : [];

    if (source.length === 0) {
      console.error("[v16][seed] no seed data available");
      return NextResponse.json({ success: false, message: "No seed data" }, { status: 400 });
    }

    const prepared = source.map((item: any) => ({ ...item, extras: item.extras ?? [] })) as any;
    const inserted = await Produkt.insertMany(prepared as any);

    console.log("[v16][seed] response status", 200, "inserted", inserted.length);

    return NextResponse.json(
      {
        success: true,
        inserted: inserted.length,
        message: "Seed import completed",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[v16][seed] response status", 500, error?.message || error);

    return NextResponse.json(
      {
        success: false,
        message: "Seed import failed",
        error: error?.message || "unknown error",
      },
      { status: 500 }
    );
  }
}

