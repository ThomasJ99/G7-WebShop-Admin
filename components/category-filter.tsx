import { ChevronDown } from "lucide-react";
import { Category } from "../app/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function CategoryFilter() {
  // Reads the current URL path name after hostname/...
  const searchParams = useSearchParams();

  // Allows us to change the server value, meaning we can manipulate the URL
  const pathName = usePathname();

  // Gets the current url limit
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Click a category to change the url and show those products
  }

  return (
    <form className="">
      <label
        htmlFor="categories"
        className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600"
      >
        All categories <ChevronDown className="w-4 h-4" />
      </label>

      <select name="category-select" id="categories">
        <option value="">{/*Loop through all categories with .map, needs key, value*/}</option>
      </select>
    </form>
  );
}
