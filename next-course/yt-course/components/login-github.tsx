"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { login } from "@/actions/auth";

export default function LoginGithub() {
  return (
    <div
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
      onClick={() => login("github")}
    >
      <FaGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
}
