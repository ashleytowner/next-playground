/* eslint-disable @next/next/no-img-element */
'use client';

import {
	authSchemaWithExpiry,
	spotifyArtist,
	spotifyTrack,
} from '@/lib/zod/spotify';
import { z } from 'zod';
import { useEffect, useMemo } from 'react';
import SongCard from './SongCard';
import Pagination from '../Pagination/Pagination';
import usePagination from '@/hooks/usePagination';
import useLazyFetch from '@/hooks/useLazyFetch';
import Link from 'next/link';

const schema = z.object({ items: z.array(spotifyTrack.or(spotifyArtist)) });

type TopTracksProps = {
	auth: z.infer<typeof authSchemaWithExpiry>;
	type: 'artists' | 'tracks';
};

export default function SpotifyTop({ auth, type }: TopTracksProps) {
	const { limit, skip, setPagination } = usePagination();

	const requestData = useMemo(() => {
		return {
			headers: {
				Authorization: `Bearer ${auth.access_token}`,
			},
		};
	}, [auth]);

	const { data: topEntities, error, doFetch, called } = useLazyFetch(schema);

	useEffect(() => {
		doFetch(
			`https://api.spotify.com/v1/me/top/${type}?limit=${limit}&offset=${skip}`,
			requestData
		);
	}, [limit, skip, doFetch, requestData, type]);

	if (!called) {
		return <p>Loading...</p>;
	}

	if (typeof topEntities === 'undefined' || error) {
		return (
			<p>
				There was an error fetching your data{' '}
				<Link href="/spotify/callback">Try Again</Link>
			</p>
		);
	}

	return (
		<>
			{topEntities.items.map((entity) => {
				const cardType = type === 'tracks' ? 'track' : 'artist';
				return (
					<SongCard
						key={entity.id}
						type={cardType}
						track={cardType === 'track' ? (entity as any) : undefined}
						artist={cardType === 'artist' ? (entity as any) : undefined}
					/>
				);
			})}
			<Pagination limit={limit} skip={skip} onChange={setPagination} />
		</>
	);
}
