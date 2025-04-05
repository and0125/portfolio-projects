// app/api/auth/authorize/route.js
import { NextResponse } from "next/server";
import { findUserById } from "@/lib/models/users"; // We might need this later for checking user session
import { generateRandomString } from "@/utils/generate-random-string"; // We'll create this utility

// In a real application, you would fetch client details from a database
const authorizedClients = {
  "your-client-id": {
    name: "Your Client Application",
    redirectUris: ["http://localhost:3000"], // Replace with your client's actual redirect URI
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const clientId = searchParams.get("client_id");
  const responseType = searchParams.get("response_type");
  const redirectUri = searchParams.get("redirect_uri");
  const scope = searchParams.get("scope"); // We'll handle scopes later
  const state = searchParams.get("state"); // For preventing CSRF

  // Validate the authorization request
  if (responseType !== "code") {
    return new NextResponse("Invalid response_type", { status: 400 });
  }

  if (!clientId) {
    return new NextResponse("Missing client_id", { status: 400 });
  }

  const client = authorizedClients[clientId];
  if (!client) {
    return new NextResponse("Invalid client_id", { status: 400 });
  }

  if (!redirectUri) {
    return new NextResponse("Missing redirect_uri", { status: 400 });
  }

  if (!client.redirectUris.includes(redirectUri)) {
    return new NextResponse("Invalid redirect_uri", { status: 400 });
  }

  if (!state) {
    return new NextResponse("Missing state", { status: 400 });
  }

  // At this point, the authorization request is valid.

  // In a real scenario, you would:
  // 1. Check if the user is authenticated. If not, you would redirect them to a login page
  //    (potentially storing the current authorization request details).
  // 2. Display a consent screen to the user, asking if they want to authorize the client
  //    application to access their data (based on the requested scope).
  // 3. Upon user consent, generate an authorization code.
  // 4. Store the authorization code in your database, associated with the user, client,
  //    redirect URI, scope, and state.
  // 5. Redirect the user back to the client's `redirect_uri` with the authorization code
  //    and the `state` parameter.

  // For this step, we will simulate user consent and directly generate and redirect.

  // Generate a unique authorization code
  const authorizationCode = generateRandomString(32);

  // In a real application, store this in the database!
  console.log("Generated Authorization Code:", authorizationCode);

  // Construct the redirect URL
  const redirectUrl = new URL(redirectUri);
  redirectUrl.searchParams.set("code", authorizationCode);
  redirectUrl.searchParams.set("state", state);

  // Redirect the user back to the client application
  return NextResponse.redirect(redirectUrl.toString(), { status: 302 });
}
