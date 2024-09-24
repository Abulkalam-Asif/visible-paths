import connectTODB from "@/config/moongoose";
import BlogModel from "@/models/blog";
import { BlogDetailsType } from "@/types";

export default async function getBlogById(id: string): Promise<any | null> {
  try {
    await connectTODB();

    // Find the blog by its ID
    const blog = await BlogModel.findById(id);
    if (!blog) return null;

    // Since content is already stored directly, no need to populate it from other models

    const coverImg = blog.coverImg
      ? {
          ...blog.coverImg,
          _id: blog.coverImg._id?.toString() || "", // Convert ObjectId to string or fallback to empty string
        }
      : null;

    const populatedBlog = {
      _id: blog._id.toString(),
      createdAt: blog.createdAt,
      heading: blog.heading,
      coverImg: coverImg,
      content: blog.content, // content is already in the correct format
    };
    return populatedBlog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
