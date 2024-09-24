import path from "path";
import fs from "fs/promises";

// Define the path where images are stored
const IMAGE_DIR = path.join(process.cwd(), "public/blogsImages");

// Function to delete an image
export async function deleteImage(
  imagePath: string,
): Promise<{ message?: string; error?: string }> {
  try {
    const fileName = path.basename(imagePath);
    const filePath = path.join(IMAGE_DIR, fileName);

    try {
      await fs.access(filePath);
    } catch (err) {
      return { error: "Image not found" };
    }

    await fs.unlink(filePath);

    return { message: "Image deleted successfully" };
  } catch (error) {
    console.error("Error deleting image:", error);
    return { error: "Failed to delete image" };
  }
}
