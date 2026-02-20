import Header from '../components/header';
import type { ProductsResponse } from './types';
import Pagination from '../components/Pagination';
import Table from '../components/table';

const API_URL = 'http://localhost:4000';
const defaultLimit = '6';

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;

  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  return (
    <main>
      <Header />
      <Table />
      <Pagination page={page} pages={pages} limit={limit} total={total} />
    </main>
  );
}
