import type { ProductsResponse } from "./types";
import Pagination from "../components/Pagination";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;

  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  return (
    <main>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <h2 key={product.id}>
            {product.title} - {product.category?.name}
          </h2>
        ))}
      </div>
      <Pagination page={page} pages={pages} limit={limit} total={total} />
    </main>
  );
}
