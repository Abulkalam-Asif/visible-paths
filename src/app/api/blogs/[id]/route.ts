import deleteBlog from "@/database/blogs/deleteBlogFromDB";
import editBlog from "@/database/blogs/editBlog";
import getBlogById from "@/database/blogs/getBlogById";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const blog = await getBlogById(id);
    if (!blog) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }

    return NextResponse.json({ data: blog }, { status: 200 });
  } catch (error) {
    console.error("Failed to get blog by id: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const { heading, coverImg, content } = await req.json();
    if (!heading || !coverImg || !content) {
      return NextResponse.json(
        { error: "Missing required fields: heading, coverImg, or content" },
        { status: 400 },
      );
    }

    // Add blog to the database
    await editBlog({ id, heading, coverImg, content });

    return NextResponse.json(
      { message: "Blog updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    // Delete blog from the database
    await deleteBlog(id);

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
