"use client";
import { authSchemaWithExpiry } from "@/lib/zod/spotify";
import Button from "../Button/Button";

type SpotifyAuthProps = {
	url: string;
}

export default function SpotifyAuth({ url }: SpotifyAuthProps) {
	const handleClick = () => {
		window.location.href = url;
	}
	const authItem = localStorage.getItem('spotify_auth');
	if (!authItem) {
		return <Button variant="primary" onClick={handleClick}>Sign In With Spotify</Button>;
	}
	const parsedAuth = authSchemaWithExpiry.safeParse(JSON.parse(authItem));
	if (!parsedAuth.success) {
		return <Button variant="primary" onClick={handleClick}>Sign In With Spotify</Button>;
	}
	if (Date.now() > parsedAuth.data.exp) window.location.href = '/spotify/callback'
	return null;
}
