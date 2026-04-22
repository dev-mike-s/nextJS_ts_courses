/**
 * TypeScript-Mongoose-Modell fuer Produkte in v16 mit Interface und Schema.
 */
import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IProdukt extends Document {
    name: string;
    beschreibung: string;
    kategorie: string;
    preis: number;
    url: string;
    bild: string;
    extras: {
        text: string;
        preis: number;
    }[];
}

const ProduktSchema = new Schema({
    name: { type: String, required: true, maxlength: 50 },
    beschreibung: { type: String, required: true, maxlength: 250 },
    kategorie: { type: String, required: true, maxlength: 30 },
    preis: { type: Number, required: true },
    url: { type: String, required: true, unique: true },
    bild: { type: String, required: true },
    extras: [{
        text: { type: String, required: true },
        preis: { type: Number, required: true }
    }]
}, { timestamps: true });

export default models.Produkt || model("Produkt", ProduktSchema);