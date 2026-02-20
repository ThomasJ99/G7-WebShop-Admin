import { Package, CircleCheckBig, TriangleAlert, CircleX } from "lucide-react"

interface Props {
  totalProducts: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
}

export default function Stockoverview({ totalProducts, inStock, lowStock, outOfStock}: Props) {
  return (
 <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
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
  );
}
