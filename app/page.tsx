import Stockoverview from "../components/StockOverview";
import type { ProductsResponse } from "./types";
import { Package, CircleCheckBig, TriangleAlert, CircleX } from "lucide-react"

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  const { products: allProducts }: ProductsResponse = await fetch(
    `${API_URL}/products`,
  ). then((res) => res.json());

  const totalProducts = allProducts.length;
  const inStock = allProducts.filter((p) => p.availabilityStatus === "In Stock").length;
  const lowStock = allProducts.filter((p) => p.availabilityStatus === "Low Stock").length;
  const outOfStock = allProducts.filter((p) => p.availabilityStatus === "Out of Stock").length;

  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <Stockoverview
      totalProducts={totalProducts}
      inStock={inStock}
      lowStock={lowStock}
      outOfStock={outOfStock}
      />
      </main>
  );
}
