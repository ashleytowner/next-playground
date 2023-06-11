'use client';
import useFetch from '@/hooks/useFetch';
import { authSchema, authSchemaWithExpiry } from '@/lib/zod/spotify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { z } from 'zod';

function calculateExpiry(inSeconds: number) {
  return Date.now() + inSeconds * 1000;
}

export default function SpotifyCallbackPage(props: unknown) {
  const schema = z.object({
    searchParams: z.object({
      code: z.string().optional(),
    }),
  });
  const { searchParams } = schema.parse(props);
  const { code } = searchParams;

  const router = useRouter();

  const requestData = useMemo(() => {
    if (code) {
      return {
        method: 'POST',
        body: JSON.stringify({
          code,
        }),
      };
    } else {
      const storageItem =
        typeof localStorage !== 'undefined'
          ? localStorage.getItem('spotify_auth')
          : null;

      if (!storageItem) return undefined;
      const data = authSchemaWithExpiry.safeParse(JSON.stringify(storageItem));
      if (!data.success) return undefined;
      return {
        method: 'POST',
        body: JSON.stringify({
          refresh_token: data.data.refresh_token,
        }),
      };
    }
  }, [code]);

  const { data, loading, error } = useFetch(
    undefined,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/authorize`,
    requestData
  );

  useEffect(() => {
    if (error) {
			localStorage.removeItem('spotify_auth');
		}
    if (typeof localStorage === 'undefined') return;
    const tokenData = authSchema.safeParse(data);
    if (tokenData.success) {
      localStorage.setItem(
        'spotify_auth',
        JSON.stringify({
          ...tokenData.data,
          exp: calculateExpiry(tokenData.data.expires_in),
        })
      );
    } else {
      localStorage.removeItem('spotify_auth');
    }
  }, [data, error]);

  useEffect(() => {
    if (!loading && Boolean(data) && !error) {
      router.push('/spotify');
    }
  }, [loading, data, error, router]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && Boolean(data) && !error && (
        <h1 className="dark:text-green-200 text-green-800">
          Successfully Authenticated With Spotify
        </h1>
      )}
      {!loading && (typeof data === 'undefined' || error) && (
        <p className="text-red-500">
          There was an error fetching your data.{' '}
          <Link href="/spotify">Try again</Link>
        </p>
      )}
    </>
  );
}
