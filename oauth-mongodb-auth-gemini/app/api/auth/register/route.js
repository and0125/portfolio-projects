// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/models/user";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide both email and password." },
        { status: 400 }
      );
    }

    // Basic email validation (you might want to use a more robust library)
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Basic password strength check (you might want more complex requirements)
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists." },
        { status: 409 }
      ); // Conflict
    }

    const userId = await createUser(email, password);

    return NextResponse.json(
      { message: "User registered successfully.", userId },
      { status: 201 }
    ); // Created
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "An error occurred during registration." },
      { status: 500 }
    ); // Internal Server Error
  }
}
