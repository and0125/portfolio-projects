import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";
import LogoutBtn from "@/components/logout-btn";

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
          <Link href="/middleware" className="font-bold">
            Middleware
          </Link>
          <Link href="/server" className="font-bold">
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
            <div className="flex gap-x-5 items-center">
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name || ""}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                )}
              </div>
              <LogoutBtn />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
