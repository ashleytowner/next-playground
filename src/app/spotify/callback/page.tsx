'use client';
import useFetch from '@/hooks/useFetch';
import { authSchema } from '@/lib/zod/spotify';
import { useEffect, useMemo } from 'react';
import { z } from 'zod';

function calculateExpiry(inSeconds: number) {
  return Date.now() + inSeconds * 1000;
}

export default function SpotifyCallbackPage(props: unknown) {
  const schema = z.object({
    searchParams: z.object({
      code: z.string(),
    }),
  });
  const { searchParams } = schema.parse(props);
  const { code } = searchParams;
  const requestData = useMemo(() => {
    return {
      method: 'POST',
      body: JSON.stringify({
        code,
      }),
    };
  }, [code]);

  const { data, loading, error } = useFetch(
    undefined,
    `${process.env.BASE_URL}/api/spotify/authorize`,
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
      {(window.location.href = '/spotify')}
    </h1>
  );
}
