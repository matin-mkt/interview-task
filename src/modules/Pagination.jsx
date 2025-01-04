'use server';

import Link from 'next/link';
import React from 'react';

export const Pagination = async (props) => {
  const { offset = 0, totalPages } = props; // Use offset directly
  const currentPage = Math.floor(offset / 20) + 1; // Derive currentPage from offset

  const getPagesToShow = () => {
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const pages = getPagesToShow();
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
	<div className="flex items-center justify-center space-x-6 text-black dark:text-white">
	{/* Previous Button */}
	{hasPrevious && (
	  <Link
		href={`?offset=${(currentPage - 2) * 20}`}
		className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
	  >
		Previous
	  </Link>
	)}

	{/* Page Links */}
	<nav
	  aria-label="Pagination"
	  className="relative z-0 inline-flex -space-x-px rounded-md"
	>
	  {pages.map((p) => (
		<Link
		  key={p}
		  href={`?offset=${(p - 1) * 20}`}
		  className={`px-3 py-1 rounded-md ${
			p === currentPage
			  ? 'bg-blue-500 text-white dark:bg-blue-600'
			  : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
		  } hover:bg-gray-300 dark:hover:bg-gray-600`}
		>
		  {p}
		</Link>
	  ))}
	</nav>

	{/* Next Button */}
	{hasNext && (
	  <Link
		href={`?offset=${currentPage * 20}`}
		className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
	  >
		Next
	  </Link>
	)}
  </div>
  );
};
