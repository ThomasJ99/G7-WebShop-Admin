import { Package, CircleCheckBig, TriangleAlert, CircleX } from "lucide-react";
import type { Product } from "../app/types";

interface Props {
  products: Product[];
}

export default function Stockoverview({ products }: Props) {
  const totalProducts = products.length;
  const inStock = products.filter(
    (p) => p.availabilityStatus === "In Stock",
  ).length;
  const limitedStock = products.filter(
    (p) => p.availabilityStatus === "Limited Stock",
  ).length;
  const outOfStock = products.filter(
    (p) => p.availabilityStatus === "Out of Stock",
  ).length;
  return (
    <section className="grid grid-cols-4 gap-6 my-8 pb-4 ">
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between border-2 border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Products</p>
          <p className="text-3xl font-bold text-gray-800">{totalProducts}</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3">
          <Package className="w-6 h-6 text-purple-500" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between border-2 border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">In stock</p>
          <p className="text-3xl font-bold text-gray-800">{inStock}</p>
        </div>
        <div className="bg-green-100 rounded-xl p-3">
          <CircleCheckBig className="w-6 h-6 text-green-700" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between border-2 border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Limited stock</p>
          <p className="text-3xl font-bold text-gray-800">{limitedStock}</p>
        </div>
        <div className="bg-orange-100 rounded-xl p-3">
          <TriangleAlert className="w-6 h-6 text-orange-400" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between border-2 border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Out of stock</p>
          <p className="text-3xl font-bold text-gray-800">{outOfStock}</p>
        </div>
        <div className="bg-red-100 rounded-xl p-3">
          <CircleX className="w-6 h-6 text-red-400" />
        </div>
      </div>
    </section>
  );
}
