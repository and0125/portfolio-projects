"use client";

import { login } from "@/lib/actions/auth";
import React from "react";

export default function SignInButton() {
  return (
    <button onClick={() => login()} className="hover:text-red-500">
      Sign In with Github
    </button>
  );
}
