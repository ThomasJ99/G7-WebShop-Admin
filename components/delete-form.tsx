"use client";

import { Trash } from "lucide-react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
// Add imports for deleting the product from the JSON

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    /* Submit button which will "delete" our form */
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer disabled:cursor-not-allowed"
    >
      <Trash className="text-red-600 w-6" />
    </button>
  );
}

export function DeleteForm({ id }: { id: string }) {
  return (
    // Action should be the deleteProduct function which handles the backend stuff, removing the form from the JSON.
    <Form action={""}>
      {/* We get the value and ID from our "hidden" input field */}
      <input hidden readOnly name="id" value={id} />
      <DeleteButton />
    </Form>
  );
}
