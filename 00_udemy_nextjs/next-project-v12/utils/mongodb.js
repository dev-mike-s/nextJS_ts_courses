//root/ utils/mongodb.js

/**
 * Global Caching Pattern:
 * In Next.js (besonders v12) sorgt der Hot-Reload in der Entwicklung dafür,
 * dass Dateien ständig neu eingelesen werden.
 * Würden wir einfach nur mongoose.connect aufrufen, hättest du nach jedem Speichern
 * einer Datei eine neue Verbindung. Durch das Speichern der Verbindung im global-Objekt
 * von Node.js bleibt sie über Re-builds hinweg bestehen.
 * Singleton-Ansatz:
 * Wir stellen sicher, dass nur eine einzige Instanz der Datenbankverbindung existiert.
 * Das schont die Ressourcen deines MongoDB-Servers (wichtig bei Atlas-Limits oder lokal unter Windows).
 * Promise-Handling:
 * Wir speichern nicht nur die fertige Verbindung (conn), sondern auch das promise.
 * Das verhindert "Race Conditions", falls dbConnect mehrmals fast gleichzeitig aufgerufen wird,
 * bevor die erste Verbindung aufgebaut wurde.
 * Verzicht auf dbDisconnect:
 * Wie besprochen, lassen wir die Verbindung offen, um die Latenz für den nächsten API-Request
 * niedrig zu halten (Connection Reuse).
 */

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;