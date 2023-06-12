"use client";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination";

export default function PaginationDemo() {
  const { skip, limit, setPagination } = usePagination();
  return <Pagination skip={skip} limit={limit} onChange={setPagination} />
}
