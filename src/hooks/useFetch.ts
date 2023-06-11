import { useEffect, useState } from 'react';
import { ZodSchema, z } from 'zod';

export default function useFetch<S extends ZodSchema = any>(
  schema: S | undefined,
  input: Parameters<(typeof fetch)>[0],
  init?: Parameters<(typeof fetch)>[1]
): { data: z.infer<S> | undefined; loading: boolean; error: boolean; } {
  const [data, setData] = useState<z.infer<S> | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      return fetch(input, init).then(async (res) => {
        const jsonData = await res.json();
        if (!res.ok) {
          setError(true);
          setData(jsonData);
          return;
        }
        if (schema) {
          const result = schema.safeParse(jsonData);
          if (!result.success) {
            setData(undefined);
            setError(true);
          } else {
            setData(result.data);
          }
        } else {
          setData(jsonData);
        }
      }).catch(e => {
          console.error(e);
          setError(true);
      }).finally(() => setLoading(false));
    }
    fetchData();
  }, [setLoading, setData, init, input, schema]);

  return { data, loading, error };
}
