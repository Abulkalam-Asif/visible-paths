import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();

  try {
    // Remove the authentication cookie by setting it with an expired date
    cookieStore.set("AuthToken", "", {
      expires: new Date(0), // Set to the past to force removal
      httpOnly: true,
    });

    // Return a successful response
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error logging out:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
