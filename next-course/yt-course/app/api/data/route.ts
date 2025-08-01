import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const GET = auth(function GET(request) {
  if (request.auth) return NextResponse.json(request.auth);
  return NextResponse.json({
    message: "You must be logged in to view this data",
    status: 401,
  });
});
