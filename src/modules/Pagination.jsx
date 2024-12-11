"use client";
import { useEffect, useState } from "react";
import PaginationTemplate from "@/components/PaginationTemplate/PaginationTemplate";

import PaginationButton from "@/components/PaginationTemplate/PaginationButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ lengthData, pathname }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const [totalPages, setTotalPages] = useState(Math.ceil(lengthData / limit));

  const [offset, setOffset] = useState((currentPage - 1) * limit);
  const [endIndex, setEndIndex] = useState(offset + limit);

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  function handlePageChange(pageNumber) {
    const curOffset = (pageNumber - 1) * limit;
    setCurrentPage(pageNumber);
    setOffset(curOffset);
    const newEndIndex = curOffset + limit;
    setEndIndex(newEndIndex);

    const params = new URLSearchParams(searchParams);
    params.set("limit", limit);
    params.set("offset", curOffset);
    router.push(`${path}?${params.toString()}`);
  }

  const handleSetLimit = (e) => {
    const newLimit = Number(e.target.value);
    setLimit(newLimit);
    const newOffset = (currentPage - 1) * newLimit;
    setOffset(newOffset);
    const newEndIndex = newOffset + newLimit;
    setEndIndex(newEndIndex);
    const newTotalPages = Math.ceil(lengthData / newLimit);
    setTotalPages(newTotalPages);

    const params = new URLSearchParams(searchParams);
    params.set("limit", newLimit);
    params.set("offset", newOffset);

    router.push(`${path}?${params.toString()}`);
  };

  useEffect(() => {
    const queryLimit = searchParams.get("limit");
    const queryOffset = searchParams.get("offset");

    const newLimit = queryLimit ? parseInt(queryLimit) : 20;
    const newOffset = queryOffset ? parseInt(queryOffset) : 0;
    const pageNumber = parseInt(newOffset / newLimit) + 1;

    setLimit(newLimit);
    setOffset(newOffset);
    setCurrentPage(pageNumber);
  }, [searchParams]);

  const pageNumberButtons = () => {
    if (totalPages <= 6) {
      const buttons = Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (pageNumber) => {
          return (
            <PaginationButton
              key={pageNumber}
              index={pageNumber}
              currentPage={currentPage}
              onClick={() => handlePageChange(pageNumber)}
            />
          );
        }
      );
      return buttons;
    } else {
      if (currentPage <= 2 || currentPage >= totalPages - 1) {
        return (
          <>
            {[1, 2, 3].map((i) => (
              <PaginationButton
                key={i}
                index={i}
                disabled={i === currentPage}
                onClick={() => handlePageChange(i)}
                currentPage={currentPage}
              />
            ))}
            <div>...</div>
            {[totalPages - 2, totalPages - 1, totalPages].map((i) => (
              <PaginationButton
                key={i}
                index={i}
                disabled={i === currentPage}
                onClick={() => handlePageChange(i)}
                currentPage={currentPage}
              />
            ))}
          </>
        );
      } else if (3 <= currentPage <= totalPages - 2) {
        return (
          <>
            <PaginationButton
              index={1}
              currentPage={currentPage}
              onClick={() => handlePageChange(1)}
            />
            <div>...</div>
            {[currentPage - 1, currentPage, currentPage + 1].map((i) => (
              <PaginationButton
                index={i}
                onClick={() => handlePageChange(i)}
                currentPage={currentPage}
              />
            ))}
            <div>...</div>
            <PaginationButton
              index={totalPages}
              onClick={() => handlePageChange(totalPages)}
              currentPage={currentPage}
            />
          </>
        );
      }
    }
  };

  return (
    <PaginationTemplate
      value={limit}
      selectOnChange={(e) => handleSetLimit(e)}
      offset={offset}
      endIndex={endIndex}
      lengthData={lengthData}
      disabledPrevious={currentPage === 1}
      handlePrevious={() => handlePageChange(currentPage - 1)}
      pageNumberButtons={pageNumberButtons}
      disabledNext={currentPage === totalPages}
      handleNext={() => handlePageChange(currentPage + 1)}
    />
  );
};

export default Pagination;
