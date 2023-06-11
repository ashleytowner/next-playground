'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { z } from 'zod';

type SpotifyAuthProps = {
	url: string;
};

export default function SpotifyAuth({ url }: SpotifyAuthProps) {
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

	useEffect(() => {
		if (authData && authData.exp < Date.now()) {
			window.location.href = '/spotify/callback';
		}
	}, [authData]);

	const handleClick = () => {
		window.location.href = url;
	};

	return (
		<>
			{!Boolean(authData) && (
				<Button variant="primary" onClick={handleClick}>
					Sign In With Spotify
				</Button>
			)}
		</>
	);
}
