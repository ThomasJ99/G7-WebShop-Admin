'use client';
import { DeleteFormNew } from "./delete-form";
import type { Product } from '../app/types';
import { Trash, SquarePen } from 'lucide-react';
import Image from 'next/image';
import ProductModal from './product-modal';
import { useState } from 'react';

interface Props {
  searchQuery?: string;
  products: Product[];
}

export default function Table({ searchQuery = '', products }: Props) {
  const filtered = products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  return (
    <>
      <table className="text-center overflow-hidden bg-white w-full text-sm">
        <thead className="bg-gray-100 text-xs">
          <tr className="text-gray-500 border-b border-gray-900 border-b-gray-300">
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((product) => (
            <tr key={product.id} className="">
              <td className="flex">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={50}
                  height={50}
                ></Image>
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
              <td className="w-24">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsOpen(true);
                  }}
                  className="pr-3 hover:cursor-pointer"
                >
                  <SquarePen className="text-purple-700 w-5" />
                </button>
                <DeleteFormNew id={product.id} />
                <button className="hover:cursor-pointer">
                  <Trash className="text-red-600 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={selectedProduct} />
    </>
  );
}
