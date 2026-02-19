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
       <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-200">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Products</p>
            <p className="text-2xl font-bold text-gray-800">{totalProducts}</p>
          </div>
          <div className="bg-purple-100 rounded-xl p-3">
            <Package className="w-6 h-6 text-purple-500" />
          </div>
       </div>
        <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-200">
          <div>
            <p className="text-sm text-gray-500 mb-1">In stock</p>
            <p className="text-2xl font-bold text-gray-800">{inStock}</p>
          </div>
          <div className="bg-green-500 rounded-xl p-3">
            <CircleCheckBig className="w-6 h-6 text-green-700" />
          </div>
       </div>
        <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-200">
          <div>
            <p className="text-sm text-gray-500 mb-1">Low stock</p>
            <p className="text-2xl font-bold text-gray-800">{lowStock}</p>
          </div>
          <div className="bg-orange-100 rounded-xl p-3">
            <TriangleAlert className="w-6 h-6 text-orange-400" />
          </div>
       </div>
        <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-200">
          <div>
            <p className="text-sm text-gray-500 mb-1">Out of stock</p>
            <p className="text-2xl font-bold text-gray-800">{outOfStock}</p>
          </div>
          <div className="bg-red-100 rounded-xl p-3">
            <CircleX className="w-6 h-6 text-red-400" />
          </div>
       </div>
      </div>
    </main>
  );
}

       
