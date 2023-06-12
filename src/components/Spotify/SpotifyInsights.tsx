'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Recommendations from './Recommendations';
import SpotifyTop from './TopTracks';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Tabs from '../Tabs/Tabs';
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
			content: <SpotifyTop key="toptracks" type={'tracks'} auth={authData} />,
		},
		{
			label: 'Top Artists',
			content: <SpotifyTop key="topartists" type="artists" auth={authData} />,
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
