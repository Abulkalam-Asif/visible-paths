import { z } from "zod";

export const requestDemoFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  company: z.string().trim().min(1, "Company is required"),
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  phone: z.string().trim().min(1, "Phone is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  state: z
    .string()
    .trim()
    .min(1, "Select a state")
    .refine(val => val !== "" && val !== "- - Select an Option - -", {
      message: "Select a state",
    }),
  zipCode: z.string().trim().min(1, "Zip code is required"),
  info: z.string().trim().min(1, "Info is required"),
});
