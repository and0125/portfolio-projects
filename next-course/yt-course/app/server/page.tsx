/**
 * Using Middleware for protecting the route
 */

import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Middleware() {
  const session = await auth();
  if (!session?.user) {
    console.log("You must be logged in to view this page");
    // would add like a toast display here or something to alert the user to login
    redirect("/");
  }

  return (
    <div>
      <main>
        <h1>Middleware</h1>
        <p>Protected Route with Server</p>
      </main>
    </div>
  );
}
