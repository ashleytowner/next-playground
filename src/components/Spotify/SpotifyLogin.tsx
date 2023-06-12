'use client';
import { authSchemaWithExpiry } from '@/lib/zod/spotify';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/spotify';

type SpotifyAuthProps = {
	url: string;
};

export default function SpotifyAuth({ url }: SpotifyAuthProps) {
	const [authData, setAuthData] =
		useState<z.infer<typeof authSchemaWithExpiry>>();

	const router = useRouter();

	useEffect(() => {
    getToken().then((token) => {
      setAuthData(token);
    })
	}, [setAuthData]);

	const handleClick = () => {
		router.push(url);
	};

	return (
		<>
			{!Boolean(authData) && (
				<button className="btn-primary" onClick={handleClick}>
					Sign In With Spotify
				</button>
			)}
		</>
	);
}
