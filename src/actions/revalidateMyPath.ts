"use server";
import { revalidatePath } from "next/cache";

export default async function revalidateMyPath(path: string) {
  revalidatePath(path);
}
