import TopTracks from '@/components/Spotify/TopTracks';
import { getAuthorizationURL } from '@/lib/spotify';

export const metadata = {
	title: 'Spotify Insights',
	description: 'Spotify Insights'
}

export default async function SpotifyPage() {
	return (
		<>
			<h1>Spotify Insights</h1>
			<p>
				To authorize with spotify, click{' '}
				<a href={getAuthorizationURL()}>this link</a>
			</p>
			<h2>Top Tracks</h2>
			<TopTracks />
			<h2>Recommendations</h2>
		</>
	);
}
