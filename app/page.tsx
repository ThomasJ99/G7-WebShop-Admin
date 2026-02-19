import type { ProductsResponse } from "./types";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  // console.log(products);

  return (
    <main>
      <header className="flex justify-between container mx-2">
        <div>
          <h2 className="text-2xl font-bold">Product management</h2>
          <span className="text-black/70">Manage your store inventory</span>
        </div>

        <button className="bg-purple-700 px-5 my-3 text-white rounded-sm hover:bg-purple-800 active:bg-purple-900">
          + Add product
        </button>
      </header>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <h2 key={product.id}>
            {product.title} - {product.category?.name}
          </h2>
        ))}
      </div>
    </main>
  );
}
