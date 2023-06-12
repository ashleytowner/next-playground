import SpotifyInsights from '@/components/Spotify/SpotifyInsights';
import SpotifyAuth from '@/components/Spotify/SpotifyLogin';
import { getAuthorizationURL } from '@/lib/spotify';
import { Info } from 'lucide-react';

export const metadata = {
	title: 'Spotify Insights',
	description: 'Spotify Insights',
};

export default async function SpotifyPage() {
	return (
		<div className="spotify">
			<div>
				<h1 className="inline mr-3">Spotify Insights</h1>
				<div className="card bg-cyan-400 dark:bg-cyan-600 border-cyan-600 dark:border-cyan-800 inline-flex gap-3 p-1 pl-3 pr-3">
					<Info /> Spotify Insights is in &quot;development mode&quot; and as
					such, may not allow you to sign in properly
				</div>
			</div>
			<p>Get information about your top songs & get recommendations</p>
			<SpotifyAuth url={getAuthorizationURL()} />
			<SpotifyInsights client-only />
		</div>
	);
}
