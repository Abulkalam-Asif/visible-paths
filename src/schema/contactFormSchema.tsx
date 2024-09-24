import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  subject: z.string().trim().min(1, "Subject is required"),
  contactNo: z.string().trim().min(1, "Contact number is required"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long"),
});
