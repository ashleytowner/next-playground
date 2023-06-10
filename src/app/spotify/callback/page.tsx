'use client';
import useFetch from '@/hooks/useFetch';
import { authSchema, authSchemaWithExpiry } from '@/lib/zod/spotify';
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

  const requestData = useMemo(() => {
    if (code) {
      return {
        method: 'POST',
        body: JSON.stringify({
          code,
        }),
      };
    } else {
      const storageItem = localStorage.getItem('spotify_auth');
      if (!storageItem) return undefined;
      const data = authSchemaWithExpiry.safeParse(JSON.stringify(storageItem));
      if (!data.success) return undefined;
      return {
        method: 'POST',
        body: JSON.stringify({
          refresh_token: data.data.refresh_token,
        })
      };
    }
  }, [code]);

  console.log('base_url', process.env.NEXT_PUBLIC_BASE_URL);

  const { data, loading, error } = useFetch(
    undefined,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/authorize`,
    requestData
  );

  useEffect(() => {
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
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (typeof data === 'undefined' || error) {
    return <p>There was an error fetching your data</p>;
  }

  return (
    <h1 className="dark:text-green-200 text-green-800">
      Successfully Authenticated With Spotify
      {(window.location.href = `/spotify`)}
    </h1>
  );
}
