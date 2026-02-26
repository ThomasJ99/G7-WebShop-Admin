'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  page: number;
  pages: number;
  limit: number;
  total: number;
}

export default function Pagination({ page, pages, limit, total }: PaginationProps) {
  const searchParams = useSearchParams();
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  function buildPageUrl(pageNum: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(pageNum));
    return `/?${params.toString()}`;
  }

  // Build the array of page numbers to display (max 3 around current page)
  const pageNumbers: number[] = [];
  const maxVisible = 3;
  let start = Math.max(1, page - Math.floor(maxVisible / 2));
  const end = Math.min(pages, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <p className="text-sm text-gray-600">
        Showing {from} to {to} of {total} products
      </p>

      <nav className="flex items-center gap-1">
        <Link
          href={page > 1 ? buildPageUrl(page - 1) : '#'}
          className={`rounded-md border border-gray-300 px-3 py-1.5 text-sm ${
            page <= 1 ? 'pointer-events-none text-gray-300' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </Link>

        {pageNumbers.map((num) => (
          <Link
            key={num}
            href={buildPageUrl(num)}
            className={`rounded-md px-3 py-1.5 text-sm ${
              num === page ? 'bg-[#764994] text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {num}
          </Link>
        ))}

        <Link
          href={page < pages ? buildPageUrl(page + 1) : '#'}
          className={`rounded-md border border-gray-300 px-3 py-1.5 text-sm ${
            page >= pages ? 'pointer-events-none text-gray-300' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
}
