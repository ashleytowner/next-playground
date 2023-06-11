/* eslint-disable @next/next/no-img-element */
'use client';

import useFetch from '@/hooks/useFetch';
import { authSchemaWithExpiry, spotifyTrack } from '@/lib/zod/spotify';
import { z } from 'zod';
import PlayableAlbumArt from './PlayableAlbumArt';
import { useMemo } from 'react';
import SongCard from './SongCard';

const schema = z.object({ items: z.array(spotifyTrack) });

type TopTracksProps = {
	auth: z.infer<typeof authSchemaWithExpiry>;
}

export default function TopTracks({ auth }: TopTracksProps) {
	const requestData = useMemo(() => {
		return {
			headers: {
				Authorization: `Bearer ${auth.access_token}`,
			},
		};
	}, [auth]);
	const { loading, data: topTracks, error } = useFetch(
		schema,
		'https://api.spotify.com/v1/me/top/tracks',
		requestData
	);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (typeof topTracks === 'undefined' || error) {
		return <p>There was an error fetching your data</p>;
	}

	return (
    <>
      {topTracks.items.map(track => {
        return <SongCard key={track.id} track={track} />
      })}
    </>
		// <table className="m-auto">
		// 	<thead>
		// 		<tr>
		// 			<th>Album Art</th>
		// 			<th>Song</th>
		// 			<th>Album</th>
		// 			<th>Artists</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		{topTracks.items.map((track) => (
		// 			<tr key={track.name}>
		// 				<td>
		// 					<PlayableAlbumArt
		// 						src={track.album.images[0].url}
		// 						url={track.external_urls.spotify}
		// 					/>
		// 				</td>
		// 				<td>{track.name}</td>
		// 				<td>{track.album.name}</td>
		// 				<td>{track.artists.map((artist) => artist.name).join(', ')}</td>
		// 			</tr>
		// 		))}
		// 	</tbody>
		// </table>
	);
}
