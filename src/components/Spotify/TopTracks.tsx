/* eslint-disable @next/next/no-img-element */
'use client';

import useFetch from '@/hooks/useFetch';

export default function TopTracks() {
	const { loading, data: topTracks } = useFetch(
		'http://localhost:3000/api/spotify/top-tracks'
	);
	if (loading) {
		return <p>Loading...</p>
	}
	return (
		<div>
			{topTracks.items.map((track: any) => {
				return (
					<div className="flex gap-5 m-2 items-center" key={track.id}>
						{track.album.images?.[0] && (
							<img
								alt="track image"
								src={track.album.images[0].url}
								width={50}
								height={50}
							/>
						)}
						<span>{track.name}</span>
						<span>
							{track.artists.map((artist: any) => artist.name).join(' ')}
						</span>
					</div>
				);
			})}
		</div>
	);
}
