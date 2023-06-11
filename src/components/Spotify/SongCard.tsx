/* eslint-disable react/jsx-no-undef */
import { spotifyTrack } from '@/lib/zod/spotify';
import { z } from 'zod';
import PlayableAlbumArt from './PlayableAlbumArt';
import { Disc3, Music2, Play, User } from 'lucide-react';

type SongCardProps = {
	track: z.infer<typeof spotifyTrack>;
};

export default function SongCard(props: SongCardProps) {
	const { track } = props;
	return (
		<div className="card mt-2 mb-2 relative grid grid-cols-1 justify-items-start sm:grid-cols-2/4/1 md:grid-cols-2/4/4/4/1 sm:justify-items-start md:items-center">
			<PlayableAlbumArt
				className="sm:row-span-3 md:row-span-1"
				src={props.track.album.images[0].url}
				url={props.track.external_urls.spotify}
			/>
			<span className="flex sm:col-start-2 md:col-auto">
				<Music2 className="inline mr-2 sm:col-start-2" />
				{track.name}
			</span>
			<span className="flex sm:col-start-2 md:col-auto">
				<Disc3 className="inline mr-2 sm:col-start-2" />
				{track.album.name}
			</span>
			<span className="flex sm:col-start-2 md:col-auto">
				<User className="inline mr-2" />
				{track.artists.map((artist) => artist.name).join(', ')}
			</span>
			<a
				href={track.external_urls.spotify}
				target="_blank"
				className="absolute right-2 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:static sm:col-start-3 sm:row-span-3 sm:row-start-1 sm:self-center md:col-start-5"
			>
				<Play />
			</a>
		</div>
	);
}
