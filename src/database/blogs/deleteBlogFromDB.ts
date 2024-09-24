import connectTODB from "@/config/moongoose";
import BlogModel from "@/models/blog";
import { deleteImage } from "./deleteImage"; // Import the deleteImage function
import { UTApi } from "uploadthing/server";
export default async function deleteBlogFromDB(id: string): Promise<{
  type: string;
  message: string;
}> {
  try {
    // Connect to the database
    await connectTODB();

    // Find the blog by its ID
    const existingBlog = await BlogModel.findById(id);

    if (!existingBlog) {
      throw new Error("Blog not found");
    }

    // Delete the associated cover image
    const utapi = new UTApi();

    const coverImgKey = existingBlog.coverImg.key;
    const res = await utapi.deleteFiles(coverImgKey);

    // Remove the blog itself
    await BlogModel.findByIdAndDelete(id);

    return {
      type: "success",
      message: "Blog and associated image deleted successfully",
    };
  } catch (error) {
    console.error("Failed to delete blog:", error);
    return {
      type: "error",
      message: "Failed to delete blog",
    };
  }
}
