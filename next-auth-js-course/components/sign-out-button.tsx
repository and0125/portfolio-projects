"use client";

import { logout } from "@/lib/actions/auth";
import React from "react";

export default function SignOutButton() {
  return (
    <button onClick={() => logout()} className="hover:text-red-500">
      Sign Out
    </button>
  );
}
