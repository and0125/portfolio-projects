import React from "react";
import LoginGithub from "@/components/login-github";

export default function page() {
  return (
    <div className="w-full flex mt-20 justify-center">
      <section className="flex flex-col w-[400px]">
        <h1 className="text-3xl font-bold w-full text-center mb-6">Sign In</h1>
        {/* login form */}
        <LoginGithub />
      </section>
    </div>
  );
}
