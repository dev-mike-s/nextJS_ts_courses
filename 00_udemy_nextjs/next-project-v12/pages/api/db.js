/**
 * API-Route zum Initialisieren der Produktdaten in v12. Verbindet zur DB und schreibt Demo-Daten.
 */
import dbConnect from '../../utils/mongodb'
import jsondb from '../../jsondb/produkte'
import Produkt from '../../models/Produkt'

export default async function handler(req, res) {
    try {
        await dbConnect();

    await Produkt.deleteMany();
    await Produkt.insertMany(jsondb.produkte);
    const produkte = await Produkt.find();

    res.send(produkte);
    } catch (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}