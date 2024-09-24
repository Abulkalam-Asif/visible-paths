import { z } from "zod";
import { AddEditBlogInputType } from "@/types";

const ContentTypeSchema = z.object({
  type: z.string(),
  value: z.union([
    z.string().trim().min(1, "Please fill all the fields"),
    z
      .array(z.string().trim().min(1, "Please fill all the fields"))
      .nonempty("List cannot be empty"),
  ]),
});

const BlogPropsSchema = z.object({
  heading: z.string().trim().min(1, "Heading is required"),
  coverImg: z.object({
    url: z.string().url({ message: "Invalid URL" }),
    key: z.string().min(1, "Key is required"),
  }),
  content: z
    .array(ContentTypeSchema)
    .min(1, "Please add some content to the blog"),
});

export default async function addBlogToDbService({
  heading,
  coverImg,
  content,
}: AddEditBlogInputType) {
  try {
    // Validate input using Zod schema
    BlogPropsSchema.parse({ heading, coverImg, content });

    // Send the form data to the server
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading,
        coverImg: coverImg,
        content,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Failed to add blog: ${response.status} ${response.statusText} - ${errorText}`,
      );
      // throw new Error(`Failed to add blog: ${response.statusText}`);
      return {
        type: "error",
        message: errorText,
        data: [],
      };
    }

    // Return the response data
    const data = await response.json();

    // Validate response structure if needed
    if (typeof data === "object" && data !== null) {
      return {
        type: "success",
        message: "Blog added successfully",
      };
    } else {
      console.error("Unexpected response format:", data);
      return {
        type: "error",
        message: "Unexpected response format",
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed: ", error.errors);
      return {
        type: "error",
        message: "Validation error: " + error.errors,
      };
    } else {
      console.error("Error adding the blog: ", error);
      return {
        type: "error",
        message: "Failed to add blog",
      };
    }
  }
}
