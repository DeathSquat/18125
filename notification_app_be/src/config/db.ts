// src/config/db.ts — PostgreSQL connection pool with logging

import { Pool } from "pg";
import { createLogger } from "logging-middleware";

const dbLogger = createLogger(
  "backend",
  process.env.EVAL_AUTH_TOKEN,
  process.env.EVAL_API_BASE
);

export const dbPool = new Pool({
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432", 10),
  database: process.env.DB_NAME ?? "campus_notifications",
  user: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  max: parseInt(process.env.DB_POOL_MAX ?? "10", 10),
  min: parseInt(process.env.DB_POOL_MIN ?? "2", 10),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  ssl: false
});

dbPool.on("connect", () => {
  dbLogger.debug("db", "New DB connection established from pool");
});

dbPool.on("error", (err) => {
  dbLogger.fatal("db", `Unexpected DB pool error: ${err.message}`);
});

/** Verify DB connectivity on startup */
export async function verifyDbConnection(): Promise<void> {
  try {
    const client = await dbPool.connect();
    await client.query("SELECT 1");
    client.release();
    dbLogger.info("db", "PostgreSQL connection pool ready");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    dbLogger.warn("db", `PostgreSQL connection failed: ${msg}. Running in demo mode without database.`);
    // Don't throw error - allow server to start in demo mode
    console.log("⚠️  Running in demo mode - database features will be limited");
  }
}
