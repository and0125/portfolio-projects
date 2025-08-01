import React from "react";
import Link from "next/link";

export default function Navbar() {
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
          <Link href="/sign-in" className="font-bold">
            <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
              Login
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
