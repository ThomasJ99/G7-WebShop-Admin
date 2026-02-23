import Header from "../components/header";
import type { Category, ProductsResponse } from "./types";
import Table from "../components/table";
import Sidebar from "../components/sidebar";
import Stockoverview from "../components/StockOverview";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { ChevronDown, Filter } from "lucide-react";
import CategoryFilter from "../components/category-filter";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}) {
  const { page: pageParam, search, category } = await searchParams;
  const currentPage = Number(pageParam) || 1;

  const categories: Category[] = await fetch(`${API_URL}/categories`).then(
    (res) => res.json(),
  );

  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category${category ? `&categoryId=${category}` : ""}`,
  ).then((res) => res.json());

  // TODO: Put the fetch and totalproducts thing in 1 function to encapsulate or a new component
  const { products: allProducts }: ProductsResponse = await fetch(
    `${API_URL}/products`,
  ).then((res) => res.json());

  const totalProducts = products.length;
  const inStock = allProducts.filter(
    (p) => p.availabilityStatus === "In Stock",
  ).length;
  const lowStock = allProducts.filter(
    (p) => p.availabilityStatus === "Low Stock",
  ).length;
  const outOfStock = allProducts.filter(
    (p) => p.availabilityStatus === "Out of Stock",
  ).length;

  return (
    <main className="flex">
      <Sidebar />
      <div className="grow">
        <Header />
        <Stockoverview
          totalProducts={totalProducts}
          inStock={inStock}
          lowStock={lowStock}
          outOfStock={outOfStock}
        />

        <div className="flex gap-3 mb-6 mx-4">
          <SearchBar />
          <CategoryFilter categories={categories} />

          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
            All status <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        <Table searchQuery={search ?? ""} />
        <Pagination page={page} pages={pages} limit={limit} total={total} />
      </div>
    </main>
  );
}
