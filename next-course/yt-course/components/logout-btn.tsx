"use client";

import React from "react";
import Link from "next/link";
import { logout } from "@/actions/auth";

export default function LogoutBtn() {
  return (
    <div onClick={() => logout()}>
      <Link href="/sign-in" className="font-bold">
        <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
          Logout
        </div>
      </Link>
    </div>
  );
}
