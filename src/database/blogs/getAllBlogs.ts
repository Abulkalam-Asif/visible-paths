import { BlogDataType } from "@/types";
import connectTODB from "@/config/moongoose";
import BlogModel from "@/models/blog";
import { ObjectId } from "mongoose";

interface ContentItem {
  type: string;
  value: string;
}

export default async function getAllBlogs(): Promise<BlogDataType[]> {
  try {
    await connectTODB(); // Connect to the database

    // Fetch all blogs
    const blogs = await BlogModel.find({}).lean(); // Using .lean() to get plain JavaScript objects

    // Format the blogs to include only required fields
    const formattedBlogs = blogs.map(blog => {
      const content: ContentItem[] = Array.isArray(blog.content)
        ? blog.content
        : [];

      // Find the first paragraph in the content
      const firstParagraph = content.find(
        (contentItem: ContentItem) => contentItem.type === "paragraph",
      );

      // Manually convert the coverImg._id to a string if it exists
      const coverImg = blog.coverImg
        ? {
            ...blog.coverImg,
            _id: blog.coverImg._id?.toString() || "", // Convert ObjectId to string or fallback to empty string
          }
        : null;

      return {
        _id: (blog._id as ObjectId).toString(), // Convert _id to string
        createdAt: blog.createdAt,
        heading: blog.heading,
        coverImg: coverImg, // Include the converted coverImg
        paragraph: firstParagraph?.value || "", // Extract paragraph content or default to an empty string
      };
    });

    return formattedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
