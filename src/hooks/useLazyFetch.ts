import { useMemo, useState } from 'react';
import { ZodSchema, z } from 'zod';

export default function useLazyFetch<S extends ZodSchema = any>(
  schema: S | undefined
): {
  data: z.infer<S> | undefined;
  loading: boolean;
  error: boolean;
  called: boolean;
  doFetch: (
    input: Parameters<typeof fetch>[0],
    init?: Parameters<typeof fetch>[1]
  ) => void;
} {
  const [data, setData] = useState<z.infer<S> | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [called, setCalled] = useState(false);

  const doFetch = useMemo(() => {
    return (
      input: Parameters<typeof fetch>[0],
      init: Parameters<typeof fetch>[1]
    ) => {
      setCalled(true);
      setLoading(true);
      setError(false);
      fetch(input, init)
        .then(async (res) => {
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
        })
        .catch((e) => {
          console.error(e);
          setError(true);
        })
        .finally(() => setLoading(false));
    };
  }, [setLoading, setData, schema, setCalled, setError]);

  return { data, loading, error, called, doFetch };
}
