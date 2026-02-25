"use server";
// Folder will handle our CRUD info like Create, Read, Update and Delete
// For now it will have delete and hopefully update later

import { revalidatePath } from "next/cache";
import { API_URL } from "./config";

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string;

  // Fetch for specific products by id
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });  

  // Error check if we dont delete our product - could add a toaster here perhaps(Would need to change the way I handle DeleteForm for that )
  if (!res) throw new Error("Failed to delete product");

  revalidatePath("");
}
