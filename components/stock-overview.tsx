import { Package2, CircleCheckBig, TriangleAlert, CircleX } from 'lucide-react';
import type { Product } from '../app/types';

interface Props {
  products: Product[];
}

export default function Stockoverview({ products }: Props) {
  const totalProducts = products.length;
  const inStock = products.filter((p) => p.availabilityStatus === 'In Stock').length;
  const lowStock = products.filter((p) => p.availabilityStatus === 'Low Stock').length;
  const outOfStock = products.filter((p) => p.availabilityStatus === 'Out of Stock').length;
  return (
    <section className="grid grid-cols-4 gap-6 my-8 ">
      <div className="bg-white rounded-2xl p-6 flex items-center justify-between border-2 border-gray-200">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Products</p>
          <p className="text-3xl font-bold text-gray-800">{totalProducts}</p>
        </div>
        <div className="bg-purple-200 rounded-xl p-3">
          <Package2 className="w-6 h-6 text-[#764994]" />
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
          <p className="text-sm text-gray-500 mb-1">Low stock</p>
          <p className="text-3xl font-bold text-gray-800">{lowStock}</p>
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
