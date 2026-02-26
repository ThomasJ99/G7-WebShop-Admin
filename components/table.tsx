'use client';
import { DeleteFormNew } from './delete-form';
import type { Product } from '../app/types';
import { SquarePen } from 'lucide-react';
import Image from 'next/image';
import ProductModal from './product-modal-add';
import { useState } from 'react';

interface Props {
  products: Product[];
}

export default function Table({ products }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  return (
    <>
      <table className="text-center overflow-hidden border-collapse bg-white w-full text-sm">
        <thead className="bg-gray-100 text-xs">
          <tr className="text-gray-500 border-b border-b-gray-200">
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b-gray-200 border-b">
              <td className="flex p-4">
                <div className="relative w-12.5 aspect-square">
                  <Image
                    className=" min-w-12.5 min-h-12.5"
                    src={product.thumbnail}
                    alt={product.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-start pl-2 flex flex-col">
                  <span className="font-bold">{product.title}</span>
                  <span className="text-gray-500">{product.sku}</span>
                </div>
              </td>
              <td className="p-4">{product.category?.name}</td>
              <td className="p-4">{product.price} kr</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                {product.stock === 0 ? (
                  <span className="text-red-700">Out of stock</span>
                ) : product.stock !== undefined && product.stock < 15 ? (
                  <span className="text-orange-400">Limited stock</span>
                ) : (
                  <span className="text-green-700">In stock</span>
                )}
              </td>
              <td className="p-4 w-24">
                <div className="flex px-2">
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsOpen(true);
                    }}
                    className="hover:cursor-pointer mr-3"
                  >
                    <SquarePen className="text-[#764994] w-5" />
                  </button>
                  <DeleteFormNew id={product.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={selectedProduct} />
    </>
  );
}
