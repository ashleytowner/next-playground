'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import TopTracks from './TopTracks';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Tabs from '../Tabs/Tabs';
import TopArtists from './TopArtists';
import { getToken } from '@/lib/spotify';

export default function SpotifyInsights() {
	const [authData, setAuthData] =
		useState<z.infer<typeof authSchemaWithExpiry>>();

	useEffect(() => {
		getToken().then((token) => {
			setAuthData(token);
		});
	}, [setAuthData]);

	if (!authData) {
		return null;
	}

	const tabs = [
		{
			label: 'Top Tracks',
			content: <TopTracks auth={authData} />,
		},
		{
			label: 'Top Artists',
			content: <TopArtists auth={authData} />,
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
