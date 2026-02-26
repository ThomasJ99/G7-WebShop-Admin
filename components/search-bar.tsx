"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", e.target.value);
    params.delete("page");
    router.replace(`?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2 flex-1 bg-white border border-gray-400 rounded-md px-2 py-1">
      <Search className="w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search products..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={handleSearch}
        className="outline-none w-full"
      />
    </div>
  );
}
