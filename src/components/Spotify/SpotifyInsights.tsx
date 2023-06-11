'use client';
import './SpotifyInsights.scss';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import TopTracks from './TopTracks';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Accordion from '../Accordion/Accordion';

export default function SpotifyInsights() {
  const [authData, setAuthData] =
    useState<z.infer<typeof authSchemaWithExpiry>>();

  useEffect(() => {
    const storageItem =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem('spotify_auth')
        : null;
    if (storageItem) {
      try {
        setAuthData(authSchemaWithExpiry.parse(JSON.parse(storageItem)));
      } catch {
        setAuthData(undefined);
      }
    }
  }, [setAuthData]);

  if (!authData) return null;

  return (
    <>
      <Accordion
        title="Top Tracks"
      >
        <TopTracks auth={authData} />
      </Accordion>
      <Accordion
        title="Recommendations"
      >
        <Recommendations auth={authData} />
      </Accordion>
    </>
  );
}
