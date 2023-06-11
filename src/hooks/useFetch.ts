import { ZodSchema } from 'zod';
import useLazyFetch from './useLazyFetch';
import { useEffect } from 'react';

export default function useFetch<S extends ZodSchema = any>(
  schema: S,
  input: Parameters<typeof fetch>[0],
  init?: Parameters<typeof fetch>[1]
) {
  const { data, loading, error, doFetch } = useLazyFetch(schema);
  useEffect(() => {
    doFetch(input, init);
  }, [input, init, doFetch]);
  return { data, loading, error };
}
