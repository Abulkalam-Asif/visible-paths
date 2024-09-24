import { z } from "zod";
import connectTODB from "@/config/moongoose";
import UserModel from "@/models/user";
import bcrypt from "bcrypt";

const UserSchema = z.object({
  username: z.string().min(1, "Invalid username or password"),
  password: z.string().min(4, "Invalid username or password"),
});

type UserType = z.infer<typeof UserSchema>;

export default async function loginUserFromDB({
  username,
  password,
}: UserType): Promise<{ type: string; message: string }> {
  try {
    await connectTODB();
    UserSchema.parse({ username, password });

    // Query the database for the user by username
    const user = await UserModel.findOne({ username });
    if (!user) {
      return {
        type: "error",
        message: "Invalid username or password.",
      };
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        type: "error",
        message: "Invalid username or password. Please try again!",
      };
    }

    return { type: "user", message: "hello" };
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("Validation failed", err.errors);
      return { type: "error", message: "Validation error" };
    }
    console.error("Error submitting form", err);
    return { type: "error", message: "Internal server error" };
  }
}
