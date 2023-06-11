'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import TopTracks from './TopTracks';
import { useEffect, useState } from 'react';
import { z } from 'zod';

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
			<h2>Top Tracks</h2>
			<TopTracks auth={authData} />
			<h2>Recommendations</h2>
			<Recommendations auth={authData} />
		</>
	);
}
