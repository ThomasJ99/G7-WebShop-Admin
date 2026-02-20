import type { ProductsResponse } from '../app/types';
import Image from 'next/image';

interface Props {
  searchQuery?: string;
}

export default async function Table({ searchQuery = "" }: Props) {
  const API_URL = 'http://localhost:4000';
  const defaultLimit = '6';
  const data: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());
  const filtered = data.products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
          {filtered.map((product) => (
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
              <td>
                <button>✏️</button>
                <button>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
