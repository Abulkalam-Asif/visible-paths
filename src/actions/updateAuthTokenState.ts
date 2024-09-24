import { SignJWT } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const updateAuthToken = async (user: { uid: string }) => {
  const cookieStore = cookies();
  try {
    const token = await new SignJWT({ user })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(JWT_SECRET_KEY));

    cookieStore.set("AuthToken", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
    });
  } catch (error) {
    throw error;
  }
};

export default updateAuthToken;
