/* eslint-disable @next/next/no-img-element */
'use client';

import useFetch from '@/hooks/useFetch';
import { authSchemaWithExpiry, spotifyArtist } from '@/lib/zod/spotify';
import { z } from 'zod';
import { useMemo } from 'react';
import SongCard from './SongCard';

const schema = z.object({ items: z.array(spotifyArtist) });

type TopArtistsProps = {
	auth: z.infer<typeof authSchemaWithExpiry>;
}

export default function TopArtists({ auth }: TopArtistsProps) {
	const requestData = useMemo(() => {
		return {
			headers: {
				Authorization: `Bearer ${auth.access_token}`,
			},
		};
	}, [auth]);
	const { loading, data: topArtists, error } = useFetch(
		schema,
		'https://api.spotify.com/v1/me/top/artists',
		requestData
	);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (typeof topArtists === 'undefined' || error) {
		return <p>There was an error fetching your data</p>;
	}

	return (
    <>
      {topArtists.items.map(artist => {
				return <SongCard key={artist.id} type="artist" artist={artist} />
      })}
    </>
	);
}
