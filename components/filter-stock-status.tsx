"use client";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Product } from "../app/types";

interface Props {
  stock?: string;
}
export default function FilterStockStatus({stock}: {stock: Props}) {
  
  // Reads the current URL path name after hostname/...
  const searchParams = useSearchParams();

  
  console.log(stock);
  

  // Allows us to change the server value, meaning we can manipulate the URL
  const pathName = usePathname();

  // Gets the current url limit
  const router = useRouter();

  //   Allows the current selected category to be the one selected in our options
  const selectedFilter = searchParams.get("stock") || "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const value = event.target.value;

    //
    if (value) params.set("stock", value);
    else params.delete("stock");

    router.push(`${pathName}?${params}`);
  };

  return (
    <form className="">
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 ">
        <label htmlFor="categories" className="sr-only">
          Category
        </label>

        <select
          name="category-select"
          id="categories"
          value={selectedFilter}
          onChange={handleChange}
          className=""
        >
           <option value="">All status</option>
          
          {/* {stock.map((stocks) => (
            <option key={`category-select${stocks.id}`} value={stocks.id}>
              {stocks.availabilityStatus}
            </option> 
          ))} */}
           
        </select>
      </div>
      <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
        All status <ChevronDown className="w-4 h-4" />
      </button>
    </form>
  );
}
