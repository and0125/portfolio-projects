import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

// Specify which routes the middleware applies to
export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Use more flexible path checking with startsWith
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  // Get the session cookie directly from request
  const sessionCookie = request.cookies.get("session")?.value;

  // Only attempt to decrypt if cookie exists
  let session = null;
  if (sessionCookie) {
    try {
      session = await decrypt(sessionCookie);
    } catch (error) {
      console.error("Session decryption error:", error);
      // Invalid session, proceed as if no session
    }
  }

  // Check for protected routes when not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Check for public routes when authenticated
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
