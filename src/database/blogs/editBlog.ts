import { z } from "zod";
import connectTODB from "@/config/moongoose";
import BlogModel from "@/models/blog";
import mongoose from "mongoose";

const ContentTypeSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.union([
    z.string().trim().min(1, "Please fill all the fields"), // for title and paragraph
    z
      .array(z.string().trim().min(1, "Please fill all the fields"))
      .nonempty("List cannot be empty"), // for list of strings
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

export default async function editBlog({
  id,
  heading,
  coverImg,
  content,
}: {
  id: string;
  heading: string;
  coverImg: {
    url: string;
    key: string;
    _id: mongoose.Types.ObjectId;
  };
  content: { type: string; value: string | string[] }[];
}) {
  try {
    // Validate the incoming data
    BlogPropsSchema.parse({ heading, coverImg, content });

    // Connect to the database
    await connectTODB();

    // Fetch the existing blog by its ID
    const existingBlog = await BlogModel.findById(id);

    if (!existingBlog) {
      throw new Error("Blog not found");
    }
    coverImg._id = new mongoose.Types.ObjectId();

    // Update the blog document
    existingBlog.heading = heading;
    existingBlog.coverImg = coverImg;
    existingBlog.content = content.map(item => ({
      type: item.type,
      value: item.value,
    }));

    // Save the updated blog
    await existingBlog.save();

    return existingBlog._id;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed:", error.errors);
    } else {
      console.error("Failed to update blog:", error);
    }
    throw error;
  }
}
