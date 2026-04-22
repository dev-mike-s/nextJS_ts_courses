/**
 * MongoDB-Verbindung fuer v16 mit globalem Cache, damit Verbindungen stabil bleiben.
 */
import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("[v16][mongodb] missing MONGODB_URI");
  throw new Error("Missing MONGODB_URI");
}

const globalCache = global as typeof globalThis & { mongooseCache?: MongooseCache };

if (!globalCache.mongooseCache) {
  globalCache.mongooseCache = { conn: null, promise: null };
}

export default async function dbConnect() {
  const cache = globalCache.mongooseCache as MongooseCache;

  if (cache.conn) {
    console.log("[v16][mongodb] reuse existing connection");
    return cache.conn;
  }

  if (!cache.promise) {
    console.log("[v16][mongodb] creating new connection promise");
    cache.promise = mongoose.connect(MONGODB_URI!, { bufferCommands: false });
  }

  try {
    cache.conn = await cache.promise;
    console.log("[v16][mongodb] connection established", cache.conn.connection.name);
    return cache.conn;
  } catch (error) {
    cache.promise = null;
    console.error("[v16][mongodb] connection failed", error);
    throw error;
  }
}

