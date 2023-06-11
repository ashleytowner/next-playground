/* eslint-disable react/jsx-no-undef */
import { spotifyTrack } from "@/lib/zod/spotify"
import { z } from "zod"
import PlayableAlbumArt from "./PlayableAlbumArt";
import { Disc3, Music2, Play, User } from "lucide-react";

type SongCardProps = {
  track: z.infer<typeof spotifyTrack>;
}

export default function SongCard(props: SongCardProps) {
  const { track } = props;
  return (
    <div className="card mt-2 mb-2 relative grid grid-cols-5/1 justify-items-center sm:grid-cols-2/4/1 md:grid-cols-2/4/4/4/1 sm:justify-items-start md:items-center">
      <PlayableAlbumArt className="sm:row-span-3 md:row-span-1" src={props.track.album.images[0].url} url={props.track.external_urls.spotify} />
      <span><Music2 className="inline mr-2 sm:col-start-2" />{track.name}</span>
      <span><Disc3 className="inline mr-2 sm:col-start-2" />{track.album.name}</span>
      <span><User className="inline mr-2 sm:col-start-2" />{track.artists.map(artist => artist.name).join(', ')}</span>
      <a href={track.external_urls.spotify} target="_blank" className="row-span-3 row-start-1 col-start-2 sm:col-start-3 md:col-start-5 self-center sm:justify-self-end"><Play /></a>
    </div>
  )
}
