import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { mkdir, writeFile } from "fs/promises";

// Set the upload directory to 'public/blogsImages'
const UPLOAD_DIR = path.join(process.cwd(), "public/blogsImages");

export async function POST(req: NextRequest) {
  try {
    // Get the file from the FormData
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "No file found" }, { status: 400 });
    }

    // Generate a unique filename with extension
    const originalFilename = (file as any).name || "unknown";
    const extension = path.extname(originalFilename);
    const uid = crypto.randomUUID();
    const filename = `${uid}${extension}`;

    // Ensure the upload directory exists
    try {
      await fs.access(UPLOAD_DIR);
    } catch {
      await mkdir(UPLOAD_DIR, { recursive: true });
    }

    // Convert Blob to buffer and save it to the public directory
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(UPLOAD_DIR, filename);
    await writeFile(filePath, buffer);

    // Return the image path
    return NextResponse.json(
      { data: `/blogsImages/${filename}` },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json(
      { error: "Failed to process the file" },
      { status: 500 },
    );
  }
}
