import Header from '../components/header';
import type { Category, ProductsResponse } from './types';
import Table from '../components/table';
import Sidebar from '../components/sidebar';
import Stockoverview from '../components/StockOverview';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { ChevronDown } from 'lucide-react';
import CategoryFilter from '../components/category-filter';

const API_URL = 'http://localhost:4000';
const defaultLimit = '6';

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

  const categories: Category[] = await fetch(`${API_URL}/categories`).then((res) => res.json());

  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category${category ? `&categoryId=${category}` : ''}`,
  ).then((res) => res.json());

  // TODO: Put the fetch and totalproducts thing in 1 function to encapsulate or a new component
  const { products: allProducts }: ProductsResponse = await fetch(`${API_URL}/products`).then((res) => res.json());

  const totalProducts = allProducts.length;
  const inStock = allProducts.filter((p) => p.availabilityStatus === 'In Stock').length;
  const lowStock = allProducts.filter((p) => p.availabilityStatus === 'Low Stock').length;
  const outOfStock = allProducts.filter((p) => p.availabilityStatus === 'Out of Stock').length;

  return (
    <main className="flex bg-gray-100">
      <Sidebar />
      <div className="grow">
        <Header />
        <div className="mx-8">
          <Stockoverview totalProducts={totalProducts} inStock={inStock} lowStock={lowStock} outOfStock={outOfStock} />

          <div className="flex gap-3 mb-8 bg-white p-5 rounded-2xl border-2 border-gray-200 mx-8">
            <SearchBar />
            <CategoryFilter categories={categories} />

            <button className="flex items-center gap-8 bg-white border border-gray-400 rounded-md px-2 py-2 text-sm font-semibold text-nowrap">
              All status <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-3 bg-white border border-gray-400 rounded-md px-2 py-2 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>{' '}
              Filter
            </button>
          </div>
          <div className="border border-gray-300 mx-2 rounded-2xl overflow-hidden">
            <Table searchQuery={search ?? ''} products={products} />
            <Pagination page={page} pages={pages} limit={limit} total={total} />
          </div>
        </div>
      </div>
    </main>
  );
}
