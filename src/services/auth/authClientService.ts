import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(1, "Invalid username or password"),
  password: z.string().min(4, "Invalid username or password"),
});

type UserType = z.infer<typeof UserSchema>;

export default async function authClientService({
  username,
  password,
}: UserType): Promise<{ type: string; message: string }> {
  try {
    // Validate input
    UserSchema.parse({ username, password });
    // Make API request
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Extract error details if available
      return {
        type: "error",
        message: errorData.message || "Invalid username or password",
      };
    }

    // Parse success response if needed
    const responseData = await response.json();
    return { type: "success", message: "Login successful" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation error
      return {
        type: "error",
        message:
          "Validation error: " + error.errors.map(e => e.message).join(", "),
      };
    }

    // Return generic or network error
    console.error("Error during authentication:", error);
    return { type: "error", message: "An unexpected error occurred" };
  }
}
