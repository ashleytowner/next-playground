import { useEffect } from 'react';

export default function useDebounce(fn: () => void, delay: number) {
  useEffect(() => {
    const timer = setTimeout(fn, delay);
    return () => clearTimeout(timer);
  });
}
