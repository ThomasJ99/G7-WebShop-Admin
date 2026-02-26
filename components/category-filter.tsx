"use client";

import { Category } from "../app/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function CategoryFilter({
  categories,
}: {
  categories: Category[];
}) {
  // Reads the current URL path name after hostname/...
  const searchParams = useSearchParams();

  // Allows us to change the server value, meaning we can manipulate the URL
  const pathName = usePathname();

  // Gets the current url limit
  const router = useRouter();

  //   Allows the current selected category to be the one selected in our options
  const selectedCategory = searchParams.get("category") || "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const value = event.target.value;

    //
    if (value) params.set("category", value);
    else params.delete("category");

    router.push(`${pathName}?${params}`);
  };

  return (
    <form className="">
      <div className="flex items-center gap-2 bg-white border border-gray-400 rounded-md px-2 py-2 text-sm font-semibold ">
        <label htmlFor="categories" className="sr-only">
          Category
        </label>

        <select
          name="category-select"
          id="categories"
          value={selectedCategory}
          onChange={handleChange}
          className=""
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={`category-select${category.id}`} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
