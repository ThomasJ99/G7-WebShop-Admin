import { ChevronDown } from "lucide-react";
import { Category } from "../app/types";

export default function CategoryFilter() {
  return (
    <form className="">
      <label
        htmlFor="categories"
        className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-red-400 active:bg-red-900"
      >
        All categories <ChevronDown className="w-4 h-4" />
      </label>
      <select name="category-select" id="categories">
        <option value=""></option>
      </select>
    </form>
    // <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-red-400 active:bg-red-900">
    //   All categories <ChevronDown className="w-4 h-4" />

    // </button>
  );
}
