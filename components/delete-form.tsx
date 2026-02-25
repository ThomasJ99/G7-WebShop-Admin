"use client";

import { Loader, Trash } from "lucide-react";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { deleteProductNew } from "../lib/actions";
import toast from "react-hot-toast";

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
      {/* Three states here, normal is the trash icon showing, then on click the spinner shows, then back to trash */}
      {pending ? (
        <Loader className="w-5 opacity-20 animate-spin" aria-hidden="true" />
      ) : (
        <Trash className="text-red-600 w-5" aria-label="Delete button" />
      )}
      {/* For screen reader */}
      <span className="sr-only">{pending ? "Deleting..." : "Delete"}</span>
    </button>
  );
}

export function DeleteFormNew({ id }: { id: number }) {
  const clientAction = async () => {
    const res = await deleteProductNew(id);

    // Different popups from clicking the button
    if (!res) toast.error("Product not deleted...");
    else toast.success("Product successfully deleted!");
  };

  return (
    <Form action={clientAction}>
      <DeleteButton />
    </Form>
  );
}
