import { z } from "zod";
import connectTODB from "@/config/moongoose";
import BlogModel  from "@/models/blog";
import mongoose from "mongoose";

// Define the schema for the content type
const ContentTypeSchema = z.object({
  _id: z.string().optional(),
  type: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
});

// Define the schema for the blog properties
const BlogPropsSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  coverImg: z.object({
    url: z.string().url({ message: "Invalid URL" }),
    key: z.string().min(1, "Key is required"),
    _id: z.string().optional(),
  }),
  content: z
    .array(ContentTypeSchema)
    .min(1, "Content must have at least one item"),
});

// Infer the BlogProps type from the schema
type BlogProps = z.infer<typeof BlogPropsSchema>;

// Function to add the blog to the database
export default async function addBlogToDb({
  heading,
  coverImg,
  content,
}: BlogProps): Promise<{ type: string; message: string }> {
  try {
    // Validate the incoming data using the schema
    BlogPropsSchema.parse({ heading, coverImg, content });

    // Connect to the database
    await connectTODB();

    // Check and assign an ObjectId to coverImg._id if it's not provided
    if (!coverImg._id) {
      coverImg._id = new mongoose.Types.ObjectId().toString();
    }

    content.map(contentItem => {
      contentItem._id = new mongoose.Types.ObjectId().toString();
    });

    const blog = new BlogModel({
      heading,
      coverImg,
      content,
    });

    // Save the blog document in the database
    await blog.save();

    return {
      type: "success",
      message: "Blog added successfully",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed:", error.errors);
      return {
        type: "error",
        message: "Validation error: " + error.errors,
      };
    } else {
      console.error("Failed to add blog:", error);
      return {
        type: "error",
        message: "Failed to add blog",
      };
    }
  }
}
