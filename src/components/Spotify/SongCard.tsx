/* eslint-disable react/jsx-no-undef */
import { spotifyArtist, spotifyTrack } from '@/lib/zod/spotify';
import { z } from 'zod';
import PlayableAlbumArt from './PlayableAlbumArt';
import { Disc3, Music, Music2, Play, TrendingUp, User } from 'lucide-react';

type SongCardProps =
  | {
    type: 'track';
    track: z.infer<typeof spotifyTrack>;
  }
  | {
    type: 'artist';
    artist: z.infer<typeof spotifyArtist>;
  };

export default function SongCard(props: SongCardProps) {
  const images =
    props.type === 'track' ? props.track.album.images : props.artist.images;
  const external_urls =
    props.type === 'track'
      ? props.track.external_urls
      : props.artist.external_urls;
  const name = props.type === 'track' ? props.track.name : props.artist.name;
  return (
    <div className="card mt-2 mb-2 relative grid grid-cols-1 justify-items-start sm:grid-cols-2/4/1 md:grid-cols-2/4/4/4/1 sm:justify-items-start md:items-center">
      <PlayableAlbumArt
        className="sm:row-span-3 md:row-span-1"
        src={images ? images[0].url : ''}
        url={external_urls.spotify}
      />
      <span className="flex sm:col-start-2 md:col-auto">
        {props.type === 'track' ? (
          <Music2 className="inline mr-2 sm:col-start-2" />
        ) : (
          <User className="inline mr-2 sm:col-start-2" />
        )}
        {name}
      </span>
      <span className="flex sm:col-start-2 md:col-auto">
        {props.type === 'track' ? (
          <Disc3 className="inline mr-2 sm:col-start-2" />
        ) : (
          <Music className="inline mr-2 sm:col-start-2" />
        )}
        {props.type === 'track'
          ? props.track.album.name
          : `${props.artist.genres?.slice(0, 3).join(', ')}${(props.artist.genres?.length || 0) > 3 ? ', ...' : ''
          }`}
      </span>
      <span className="flex sm:col-start-2 md:col-auto">
        {props.type === 'track' ? (
          <User className="inline mr-2" />
        ) : (
          <TrendingUp className="inline mr-2" />
        )}
        {props.type === 'track'
          ? props.track.artists.map((artist) => artist.name).join(', ')
          : `${props.artist.popularity}%`}
      </span>
      <a
        href={external_urls.spotify}
        target="_blank"
        className="absolute right-2 top-1/2 -translate-y-1/2 sm:translate-y-0 sm:static sm:col-start-3 sm:row-span-3 sm:row-start-1 sm:self-center md:col-start-5"
      >
        <Play />
      </a>
    </div>
  );
}
