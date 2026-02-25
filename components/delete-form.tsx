"use client";

import { Trash } from "lucide-react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { deleteProduct } from "../lib/actions";

function DeleteButton() {
  // We deconstruct pending(bool) out of formstatus, if not we could use const status and we could do status.pending
  const { pending } = useFormStatus();
  return (
    /* Submit button which will "delete" our form */
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer disabled:cursor-not-allowed"
    >
      <Trash className="text-red-600 w-6" />
      {/* Delete later - is for testing */}
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export function DeleteForm({ id }: { id: string }) {
  return (
    // Action should be the deleteProduct function which handles the backend stuff, removing the product from the JSON.
    <Form action={deleteProduct}>
      {/* We get the value and ID from our "hidden" input field */}
      <input hidden readOnly name="id" value={id} />
      <DeleteButton />
    </Form>
  );
}
