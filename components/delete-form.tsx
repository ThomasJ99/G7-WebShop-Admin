import Form from "next/form";
// Add imports for deleting the product from the JSON

export function DeleteForm( {id}: {id: string}) {
  return (
    // Action should be the deleteProduct function which handles the backend stuff, removing the form from the JSON.
    <Form action={""}>
      {/* We get the value and ID from our "hidden" input field */}
      <input type="text" />
      {/* Submit button which will "delete" our form */}
      <button type="submit">Delete</button>
    </Form>
  );
}
