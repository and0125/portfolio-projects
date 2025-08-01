/**
 * Using Middleware for protecting the route
 */

import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Middleware() {
  const session = await auth();

  return (
    <div>
      <main>
        <h1>Middleware</h1>
        {!session?.user ? (
          // unprotected response
          <p>You must be logged in to view this page</p>
        ) : (
          // protected response
          <p>Protected Route with Middleware</p>
        )}
      </main>
    </div>
  );
}
