'use client';
/* eslint-disable @next/next/no-img-element */
import useFetch from '@/hooks/useFetch';
import { authSchemaWithExpiry, spotifyTrack } from '@/lib/zod/spotify';
import { z } from 'zod';
import PlayableAlbumArt from './PlayableAlbumArt';
import { useMemo, useState } from 'react';
import SongCard from './SongCard';

const schema = z.object({ tracks: z.array(spotifyTrack) });

type RecommendationsProps = {
  auth: z.infer<typeof authSchemaWithExpiry>;
};

const genres = [
  'acoustic',
  'afrobeat',
  'alt-rock',
  'alternative',
  'ambient',
  'anime',
  'black-metal',
  'bluegrass',
  'blues',
  'bossanova',
  'brazil',
  'breakbeat',
  'british',
  'cantopop',
  'chicago-house',
  'children',
  'chill',
  'classical',
  'club',
  'comedy',
  'country',
  'dance',
  'dancehall',
  'death-metal',
  'deep-house',
  'detroit-techno',
  'disco',
  'disney',
  'drum-and-bass',
  'dub',
  'dubstep',
  'edm',
  'electro',
  'electronic',
  'emo',
  'folk',
  'forro',
  'french',
  'funk',
  'garage',
  'german',
  'gospel',
  'goth',
  'grindcore',
  'groove',
  'grunge',
  'guitar',
  'happy',
  'hard-rock',
  'hardcore',
  'hardstyle',
  'heavy-metal',
  'hip-hop',
  'holidays',
  'honky-tonk',
  'house',
  'idm',
  'indian',
  'indie',
  'indie-pop',
  'industrial',
  'iranian',
  'j-dance',
  'j-idol',
  'j-pop',
  'j-rock',
  'jazz',
  'k-pop',
  'kids',
  'latin',
  'latino',
  'malay',
  'mandopop',
  'metal',
  'metal-misc',
  'metalcore',
  'minimal-techno',
  'movies',
  'mpb',
  'new-age',
  'new-release',
  'opera',
  'pagode',
  'party',
  'philippines-opm',
  'piano',
  'pop',
  'pop-film',
  'post-dubstep',
  'power-pop',
  'progressive-house',
  'psych-rock',
  'punk',
  'punk-rock',
  'r-n-b',
  'rainy-day',
  'reggae',
  'reggaeton',
  'road-trip',
  'rock',
  'rock-n-roll',
  'rockabilly',
  'romance',
  'sad',
  'salsa',
  'samba',
  'sertanejo',
  'show-tunes',
  'singer-songwriter',
  'ska',
  'sleep',
  'songwriter',
  'soul',
  'soundtracks',
  'spanish',
  'study',
  'summer',
  'swedish',
  'synth-pop',
  'tango',
  'techno',
  'trance',
  'trip-hop',
  'turkish',
  'work-out',
  'world-music',
];

export default function Recommendations({ auth }: RecommendationsProps) {
  const [genre, setGenre] = useState('acoustic');

  const requestData = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
      },
    };
  }, [auth]);

  const {
    loading,
    data: recommendations,
    error,
  } = useFetch(
    schema,
    `https://api.spotify.com/v1/recommendations?seed_genres=${genre}`,
    requestData
  );

  if (loading && !recommendations) {
    return <p>Loading...</p>;
  }

  if (typeof recommendations === 'undefined' || error) {
    return <p>There was an error fetching your data</p>;
  }

  return (
    <>
      <label htmlFor="genre">Genre</label>
      <select id="genre" className="w-full" onChange={(e) => { setGenre(e.target.value) }}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {recommendations?.tracks.map((track) => (
        <SongCard key={track.id} track={track} />        
      ))}
    </>
  );
}
