/**
 * File for the Authentication Client
 */

import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            password: true,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
});
