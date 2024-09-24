import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/blogs",
  "/about-us",
  "/request-demo",
  "/pricing",
  "/contact-us",
  "/solutions",
  "/our-team",
  "/privacy-policy",
  "/terms-of-service",
  "/api/auth/login",
  "/api/auth/logout",
];
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Add paths that start with /blogs as public routes
const isPublicRoute = (pathname: string) => {
  return PUBLIC_ROUTES.includes(pathname) || pathname.startsWith("/blogs");
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("AuthToken")?.value;
  const { pathname } = req.nextUrl;

  // Allowing API routes to bypass the middleware
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Ensuring JWT_SECRET_KEY is set
  if (
    !JWT_SECRET_KEY &&
    !PUBLIC_ROUTES.includes(pathname) &&
    pathname !== "/login"
  ) {
    console.error("JWT_SECRET_KEY is not set");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Bypassing authentication check for public routes
  if (isPublicRoute(pathname)) {
    // If the user is logged in, redirecting to the homepage from /login
    if (pathname === "/login" && token) {
      try {
        const { payload }: { payload: { user: { role: string } } } =
          await jwtVerify(token, new TextEncoder().encode(JWT_SECRET_KEY));
        // Only redirecting if the token is valid and user is authenticated
        if (payload.user) {
          return NextResponse.redirect(new URL("/admin", req.url));
        }
      } catch (err) {
        console.error("Error verifying token:", err);
        return NextResponse.next();
      }
    }
    // Allowing access to public routes if no token or if the token is invalid
    return NextResponse.next();
  }

  // For protected routes
  if (!token) {
    // Redirect to signin if no token is found for protected routes
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify token for protected routes
    const { payload }: { payload: { user: { role: string } } } =
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET_KEY));

    // Allow access if token is valid
    if (payload.user) {
      return NextResponse.next();
    }
  } catch (err) {
    console.error("Error verifying token:", err);
    // Redirect to signin if token is invalid
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: "/((?!.*\\.).*)" };
