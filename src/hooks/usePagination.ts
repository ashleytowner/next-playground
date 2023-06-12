"use client";
import { useState } from 'react';

export default function usePagination(initLimit?: number, initSkip?: number) {
  const [limit, setLimit] = useState(initLimit ?? 10);
  const [skip, setSkip] = useState(initSkip ?? 0);

  const setPagination = (newLimit: number, newSkip: number) => {
    setLimit(newLimit);
    setSkip(newSkip);
  }

  return {
    limit,
    skip,
    setPagination
  }
}
