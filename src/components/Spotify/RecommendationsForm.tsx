'use client';

import { FormEvent, useState } from 'react';

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


export interface RecommendationsFormValues {
  target_danceability: number;
  target_acousticness: number;
  target_energy: number;
  target_instrumentalness: number;
  target_liveness: number;
  target_loudness: number;
  target_speechiness: number;
  target_popularity: number;
  seed_genre: string;
}

type RecommendationsFormProps = {
  onSubmit?: (e: RecommendationsFormValues) => void;
};

export default function RecommendationsForm({
  onSubmit,
}: RecommendationsFormProps) {
  const [liveDanceability, setDanceability] = useState(0.5);
  const [liveAcousticness, setAcousticness] = useState(0.5);
  const [liveEnergy, setEnergy] = useState(0.5);
  const [liveInstrumentalness, setInstrumentalness] = useState(0.5);
  const [liveLiveness, setLiveness] = useState(0.5);
  const [liveLoudness, setLoudness] = useState(0.5);
  const [liveSpeechiness, setSpeechiness] = useState(0.5);
  const [livePopularity, setPopularity] = useState(50);
  const [genre, setGenre] = useState('acoustic');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        target_danceability: liveDanceability,
        target_acousticness: liveAcousticness,
        target_energy: liveEnergy,
        target_instrumentalness: liveInstrumentalness,
        target_liveness: liveLiveness,
        target_loudness: liveLoudness,
        target_speechiness: liveSpeechiness,
        target_popularity: livePopularity,
        seed_genres: genre
      } as any);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-4 gap-4">
        <label htmlFor="danceability">Danceability</label>
        <input
          type="range"
          id="danceability"
          className="accent-secondary-500"
          value={liveDanceability}
          onChange={(e) => setDanceability(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="acousticness">Acousticness</label>
        <input
          type="range"
          id="acousticness"
          className="accent-secondary-500"
          value={liveAcousticness}
          onChange={(e) => setAcousticness(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="energy">Enenergy</label>
        <input
          type="range"
          id="energy"
          className="accent-secondary-500"
          value={liveEnergy}
          onChange={(e) => setEnergy(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="instrumentalness">Instrumentalness</label>
        <input
          type="range"
          id="instrumentalness"
          className="accent-secondary-500"
          value={liveInstrumentalness}
          onChange={(e) => setInstrumentalness(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="liveness">Liveness</label>
        <input
          type="range"
          id="liveness"
          className="accent-secondary-500"
          value={liveLiveness}
          onChange={(e) => setLiveness(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="loudness">Loudness</label>
        <input
          type="range"
          id="loudness"
          className="accent-secondary-500"
          value={liveLoudness}
          onChange={(e) => setLoudness(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
        <label htmlFor="popularity">Popularity</label>
        <input
          type="range"
          id="popularity"
          className="accent-secondary-500"
          value={livePopularity}
          onChange={(e) => setPopularity(e.target.valueAsNumber)}
          min={0}
          max={100}
          step={1}
        />
        <label htmlFor="speechiness">Speechiness</label>
        <input
          type="range"
          id="speechiness"
          className="accent-secondary-500"
          value={liveSpeechiness}
          onChange={(e) => setSpeechiness(e.target.valueAsNumber)}
          min={0}
          max={1}
          step={0.01}
        />
      </fieldset>
      <fieldset className="m-4">
        <label htmlFor="genre">Genre</label>
        <select
          id="genre"
          className="w-full"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </fieldset>
      <input type="submit" className="m-auto block" value="Get Recommendations" />
    </form>
  );
}
