"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronDown, Filter } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", e.target.value);
    router.replace(`?${params.toString()}`);
  }

  return (
    <div className="flex gap-3 mb-6">
      <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          defaultValue={searchParams.get("search") ?? ""}
          onChange={handleSearch}
          className="flex-1 outline-none text-sm text-gray-700"
        />
      </div>
      <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
        All categories <ChevronDown className="w-4 h-4" />
      </button>
      <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
        All status <ChevronDown className="w-4 h-4" />
      </button>
      <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
        <Filter className="w-4 h-4" /> Filter
      </button>
    </div>
  );
}