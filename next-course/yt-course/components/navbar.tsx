import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav>
      <div className="flex justify-between items-center my-4 border-b-2 border-gray-300">
        {/* home button */}
        <div>
          <Link href="/" className="font-bold">
            Home
          </Link>
        </div>

        {/* Links */}
        <div className="flex items-center gap-x-5 my-4 ">
          <Link href="/" className="font-bold">
            Middleware
          </Link>
          <Link href="/" className="font-bold">
            Server
          </Link>
        </div>

        {/* login button */}
        <div>
          {!session?.user ? (
            // logged out view
            <Link href="/sign-in" className="font-bold">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                Login
              </div>
            </Link>
          ) : (
            // Logged in view
            <div>
              {session?.user?.name && session?.user?.image && (
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  src={session?.user?.image || ""}
                  alt={`${session?.user?.name}'s avatar`}
                />
              )}
              <Link href="/sign-in" className="font-bold">
                <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                  Logout
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
