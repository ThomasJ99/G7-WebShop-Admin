import Link from "next/link";

interface PaginationProps {
  page: number;
  pages: number;
  limit: number;
  total: number;
}

export default function Pagination({ page, pages, limit, total }: PaginationProps) {
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

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
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
      <p className="text-sm text-gray-600">
        Showing {from} to {to} of {total} products
      </p>

      <nav className="flex items-center gap-1">
        <Link
          href={page > 1 ? `/?page=${page - 1}` : "#"}
          className={`rounded border border-gray-300 px-3 py-1.5 text-sm ${
            page <= 1
              ? "pointer-events-none text-gray-300"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          Previous
        </Link>

        {pageNumbers.map((num) => (
          <Link
            key={num}
            href={`/?page=${num}`}
            className={`rounded px-3 py-1.5 text-sm ${
              num === page
                ? "bg-purple-700 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {num}
          </Link>
        ))}

        <Link
          href={page < pages ? `/?page=${page + 1}` : "#"}
          className={`rounded border border-gray-300 px-3 py-1.5 text-sm ${
            page >= pages
              ? "pointer-events-none text-gray-300"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
}
