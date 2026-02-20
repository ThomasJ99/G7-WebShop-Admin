import type { ProductsResponse } from '../app/types';

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
          <tr>
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
              <td>{product.title}</td>
              <td>{product.category?.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                {product.stock === 0
                  ? 'Out of stock'
                  : product.stock !== undefined && product.stock < 15
                    ? 'Limited stock'
                    : 'In stock'}
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
