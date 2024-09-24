import connectToDB from "@/config/moongoose"; // Adjust the import to your config path
import BlogModel from "@/models/blog"; // Adjust the import to your Blog model path
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (typeof q !== "string") {
    return NextResponse.json(
      {
        message: "Invalid query parameter",
      },
      { status: 400 },
    );
  }

  try {
    await connectToDB();

    // Perform a search on the blog title
    const blogs = await BlogModel.find({
      heading: { $regex: q, $options: "i" },
    });
    const formattedBlogs = await Promise.all(
      blogs.map(async blog => {
        const firstParagraph = await blog.content.find(
          (contentItem: any) => contentItem.type === "paragraph",
        );
        return {
          _id: blog._id.toString(),
          createdAt: blog.createdAt,
          heading: blog.heading,
          coverImg: blog.coverImg,
          paragraph: firstParagraph?.value || "",
        };
      }),
    );

    return NextResponse.json({ data: formattedBlogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 },
    );
  }
}
