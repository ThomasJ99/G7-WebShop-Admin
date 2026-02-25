"use server";
// File will handle our CRUD info like Create, Read, Update and Delete
// For now it will have delete and hopefully update later

import { revalidatePath } from "next/cache";
import { API_URL } from "./config";

export async function deleteProductNew(id: number) {
  // Delete specific products by id
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  // Error check if we dont delete our product
  if (!res.ok) return false;

  revalidatePath("");
  return true
}
