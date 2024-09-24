export default async function uploadImageService(
  image: File,
): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append("file", image);

    // Upload the file and get the response
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get the error message from the response
      console.error(
        `Error uploading image: ${response.status} ${response.statusText} - ${errorText}`,
      );
      throw new Error(`Failed to upload image: ${response.statusText}`);
    }

    const responseJson = await response.json();

    if (typeof responseJson.data === "string") {
      return responseJson.data;
    } else {
      console.error("Unexpected response format:", responseJson.data);
      throw new Error("Invalid response format from image upload service.");
    }
  } catch (err) {
    console.error("Error uploading image:", err);
    throw new Error("Error uploading image. Please try again.");
  }
}
