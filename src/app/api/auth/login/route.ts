import { NextRequest, NextResponse } from "next/server";
import updateAuthToken from "@/actions/updateAuthTokenState";
import loginUserFromDB from "@/database/auth/loginUserFromDB";

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { username, password } = await req.json();

    // Check if username and password are provided
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 },
      );
    }
    // Login user and get response
    const response = await loginUserFromDB({ username, password });

    // Handle errors from loginUserFromDB
    if (response.type === "error") {
      return NextResponse.json({ message: response.message }, { status: 400 });
    }

    // Update auth token for the user
    await updateAuthToken({ uid: response.message });

    // Send success response
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (err) {
    // Log the error for debugging
    console.error("Login error:", err);

    // Send internal server error response
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
