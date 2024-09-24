import { NextRequest, NextResponse } from "next/server";
import getAllBlogsFromDb from "@/database/blogs/getAllBlogs";
import addBlogToDb from "@/database/blogs/addBlogToDb";
import deleteBlogFromDB from "@/database/blogs/deleteBlogFromDB";

export async function POST(req: NextRequest) {
  try {
    const { heading, coverImg, content } = await req.json();

    if (!heading || !coverImg || !content) {
      return NextResponse.json(
        { error: "Missing required fields: heading, coverImg, or content" },
        { status: 400 },
      );
    }
    // Add blog to the database
    const response = await addBlogToDb({ heading, coverImg, content });
    if (response.type === "error") {
      return NextResponse.json({ error: response.message }, { status: 400 });
    }

    if (response.type === "success") {
      return NextResponse.json({ message: response.message }, { status: 201 });
    }
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Fetch all blogs from the database
    const blogs = await getAllBlogsFromDb();
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Missing required field: id" },
        { status: 400 },
      );
    }

    // Delete blog from the database
    const response = await deleteBlogFromDB(id);
    if (response.type === "error") {
      return NextResponse.json({ error: response.message }, { status: 400 });
    }

    if (response.type === "success") {
      return NextResponse.json({ message: response.message }, { status: 200 });
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
