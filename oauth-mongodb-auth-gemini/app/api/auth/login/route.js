// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import { findUserByEmail, comparePassword } from "@/lib/models/user";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide both email and password." },
        { status: 400 }
      );
    }

    const user = await findUserByEmail(email.toLowerCase());

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 }
      ); // Unauthorized
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 }
      ); // Unauthorized
    }

    // At this point, authentication is successful.
    // In a real OAuth 2.0 flow, we would now:
    // 1. Generate an authorization code.
    // 2. Store the authorization code (associated with the user and client).
    // 3. Redirect the user back to the client application with the authorization code.

    // For this step, we will simply return a success message and the user ID.
    // The actual OAuth 2.0 flow will be implemented in subsequent steps.
    return NextResponse.json(
      { message: "Login successful.", userId: user._id.toString() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "An error occurred during login." },
      { status: 500 }
    ); // Internal Server Error
  }
}
