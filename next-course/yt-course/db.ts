/**
 * File for the Database Client
 * 
 * We add this here instead of in auth.ts
 * This creates a global variable for accessing the prisma client in any other file
 */

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;
