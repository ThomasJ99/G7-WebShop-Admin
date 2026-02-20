import Header from "../components/header";
import type { ProductsResponse } from "./types";
import Table from "../components/table";
import Sidebar from "../components/sidebar";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  return (
    <main className="flex">
      <Sidebar />
      <div className="grow">
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
      </div>
    </main>
  );
}
