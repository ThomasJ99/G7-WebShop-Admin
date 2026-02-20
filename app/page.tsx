import Stockoverview from "../components/StockOverview";
import Header from '../components/header';
import type { ProductsResponse } from './types';
import Pagination from '../components/Pagination';
import Table from '../components/table';

const API_URL = 'http://localhost:4000';
const defaultLimit = '6';

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;

  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  const { products: allProducts }: ProductsResponse = await fetch(
    `${API_URL}/products`,
  ). then((res) => res.json());

  const totalProducts = allProducts.length;
  const inStock = allProducts.filter((p) => p.availabilityStatus === "In Stock").length;
  const lowStock = allProducts.filter((p) => p.availabilityStatus === "Low Stock").length;
  const outOfStock = allProducts.filter((p) => p.availabilityStatus === "Out of Stock").length;

  return (
    <main>
      <Header />
        <h2 className="text-2xl font-bold mb-6">Products</h2>
      <Stockoverview
      totalProducts={totalProducts}
      inStock={inStock}
      lowStock={lowStock}
      outOfStock={outOfStock}
      />
      <Table />
      <Pagination page={page} pages={pages} limit={limit} total={total} />
    </main>
  );
}
