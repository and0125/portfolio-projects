/**
 * File for the Database Client
 *
 * We add this here instead of in auth.ts
 * This creates a global variable for accessing the prisma client in any other file
 */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
