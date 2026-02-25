import type { Product } from '../app/types';
import { Trash, SquarePen } from 'lucide-react';
import Image from 'next/image';

interface Props {
  searchQuery?: string;
  products: Product[];
}

export default async function Table({ searchQuery = '', products }: Props) {
  return (
    <>
      <table className="text-center">
        <thead>
          <tr className="text-gray-500">
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="">
              <td className="flex">
                <Image src={product.thumbnail} alt={product.title} width={50} height={50}></Image>
                <div className="text-start pl-2 flex flex-col">
                  <span className="font-bold">{product.title}</span>
                  <span className="text-gray-500">{product.sku}</span>
                </div>
              </td>
              <td>{product.category?.name}</td>
              <td>{product.price} kr</td>
              <td>{product.stock}</td>
              <td>
                {product.stock === 0 ? (
                  <span className="text-red-700">Out of stock</span>
                ) : product.stock !== undefined && product.stock < 15 ? (
                  <span className="text-yellow-500">Limited stock</span>
                ) : (
                  <span className="text-green-700">In stock</span>
                )}
              </td>
              <td className="">
                <button className="pr-3">
                  <SquarePen className="text-purple-700 w-6" />
                </button>
                <button>
                  <Trash className="text-red-600 w-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
