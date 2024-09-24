import { BlogDetailsType } from "@/types";
export default async function getAllBlogsFromDbService(): Promise<
  BlogDetailsType[]
> {
  try {
    const response = await fetch("/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to get all blogs from db.`);
    }

    const data = (await response.json()) as BlogDetailsType[];
    return data;
  } catch (error) {
    console.error("Error getting all blogs from DB", error);
    throw error;
  }
}
