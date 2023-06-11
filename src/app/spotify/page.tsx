import SpotifyInsights from '@/components/Spotify/SpotifyInsights';
import SpotifyAuth from '@/components/Spotify/SpotifyLogin';
import { getAuthorizationURL } from '@/lib/spotify';

export const metadata = {
	title: 'Spotify Insights',
	description: 'Spotify Insights'
}

export default async function SpotifyPage() {
	return (
		<>
			<h1>Spotify Insights</h1>
      <SpotifyAuth url={getAuthorizationURL()} />
      <SpotifyInsights client-only />
		</>
	);
}
