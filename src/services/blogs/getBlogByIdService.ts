
export default async function getBlogByIdService(id: string) {
  try {
    const response = await fetch(`/api/blogs/${id}`);
    if (!response.ok) {
      const { error } = await response.json();
      return { error };
    }

    const responseJson = await response.json();
    return { data: responseJson.data };
  } catch (error) {
    return { error: "Internal server error" };
  }
}
