'use client';
/* eslint-disable @next/next/no-img-element */
import { authSchemaWithExpiry, spotifyTrack } from '@/lib/zod/spotify';
import { z } from 'zod';
import { useEffect, useMemo, useState } from 'react';
import SongCard from './SongCard';
import RecommendationsForm, {
  RecommendationsFormValues,
} from './RecommendationsForm';
import useLazyFetch from '@/hooks/useLazyFetch';

const schema = z.object({ tracks: z.array(spotifyTrack) });

type RecommendationsProps = {
  auth: z.infer<typeof authSchemaWithExpiry>;
};

export default function Recommendations({ auth }: RecommendationsProps) {
  const [settings, setSettings] = useState<Partial<RecommendationsFormValues>>(
    {}
  );

  const query = new URLSearchParams(
    Object.fromEntries(
      Object.entries(settings).map(([key, value]) => [key, value.toString()])
    )
  ).toString();

  const requestData = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
      },
    };
  }, [auth]);

  const {
    loading,
    data: recommendations,
    error,
    called,
    doFetch,
  } = useLazyFetch(schema);

  console.log('Rendered');

  useEffect(() => {
    if (!query) return;
    doFetch(`https://api.spotify.com/v1/recommendations?${query}`, requestData);
  }, [query, requestData, doFetch]);

  const handleChange = (e: RecommendationsFormValues) => {
    setSettings(e);
    console.log(e);
  };

  return (
    <>
      <RecommendationsForm onSubmit={handleChange} />
      {loading && !recommendations && <p>Loading...</p>}
      {error && <p>There was an error fetching your data</p>}
      {(called || !loading) && !error &&
        recommendations?.tracks.map((track) => (
          <SongCard key={track.id} track={track} />
        ))}
    </>
  );
}
