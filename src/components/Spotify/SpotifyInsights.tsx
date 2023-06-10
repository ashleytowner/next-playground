'use client';
import { authSchema } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import TopTracks from './TopTracks';
import { useMemo } from 'react';

export default function SpotifyInsights() {
  console.count('render');

  const authData = useMemo(() => {
    const storageItem = localStorage.getItem('spotify_auth');
    if (!storageItem) {
      return null
    }
    return authSchema.safeParse(JSON.parse(storageItem));
  }, []);

  if (authData === null || !authData.success) {
    return null;
  }

  return (
    <>
      <h2>Top Tracks</h2>
      <TopTracks auth={authData.data} />
      <h2>Recommendations</h2>
      <Recommendations auth={authData.data} />
    </>
  );
}