// app/backend/db.server.js
//
// Single shared Prisma Client instance for the whole app. Import `prisma`
// from any backend module:
//
//   import { prisma } from "../db.server";       // from app/backend/routes/*.server.js
//   import { prisma } from "../../backend/db.server"; // from app/frontend/*
//
// Why the globalThis cache: Vite's dev server hot-reloads server modules on
// every file save. Without this, each reload would create a brand new
// PrismaClient (and a brand new Postgres connection pool) without closing
// the old one, and the DB connection limit gets exhausted within minutes of
// active development. In production this file is only ever loaded once, so
// the cache is a no-op there.



// import { PrismaClient } from "./generated/prisma/client.js";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// /** @type {{ __prisma__?: PrismaClient }} */
// const globalForPrisma = globalThis;

// export const prisma =
//   globalForPrisma.__prisma__ ??
//   new PrismaClient({
//     adapter,
//     log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.__prisma__ = prisma;
// }


import "dotenv/config";

import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg(process.env.DATABASE_URL);

export const prisma = new PrismaClient({ adapter });

export default prisma;