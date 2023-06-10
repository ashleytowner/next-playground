import { useEffect, useState } from 'react';

export default function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      return fetch(url).then(async (res) => {
        const jsonData = await res.json();
        setData(jsonData as T);
        setLoading(false);
      });
    }
    fetchData();
  }, [setLoading, setData, url]);

  return { data, loading };
}
