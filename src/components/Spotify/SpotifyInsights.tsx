'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import TopTracks from './TopTracks';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Accordion from '../Accordion/Accordion';
import Tabs from '../Tabs/Tabs';
import TopArtists from './TopArtists';

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

	const tabs = [
		{
			label: 'Top Tracks',
			content: <TopTracks auth={authData} />,
		},
		{
			label: 'Top Artists',
			content: <TopArtists auth={authData} />
		},
		{
			label: 'Recommendations',
			content: <Recommendations auth={authData} />,
		},
	];

	return (
		<>
			<Tabs className="w-full mt-4" tabs={tabs} />
		</>
	);
}
