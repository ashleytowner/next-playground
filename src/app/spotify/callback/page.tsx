'use client';
import useFetch from '@/hooks/useFetch';
import useLazyFetch from '@/hooks/useLazyFetch';
import { authSchema, authSchemaWithExpiry } from '@/lib/zod/spotify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SpotifyCallbackPage(props: {
  searchParams: { code: string };
}) {
  const { code } = props.searchParams;

  const router = useRouter();

  const { data, loading, error, called, doFetch } = useLazyFetch(authSchema);

  useEffect(() => {
    if (!code) {
      localStorage.removeItem('sfy_access_token');
      router.replace('/spotify');
      return;
    }
    try {
      doFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/authorize`, {
        method: 'POST',
        body: JSON.stringify({
          code,
        }),
      });
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
    }
  }, [code, doFetch, router]);

  useEffect(() => {
    if (called && !loading && !error && data) {
      localStorage.setItem(
        'sfy_access_token',
        JSON.stringify({ ...data, exp: data.expires_in * 1000 + Date.now() })
      );
      router.replace('/spotify');
    }
  });

  return (
    <>
      <p>loading {String(loading)}</p>
      <p>data {String(data)}</p>
      <p>error {String(error)}</p>
      <p>called {String(called)}</p>
      <p>code {String(code)}</p>
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
