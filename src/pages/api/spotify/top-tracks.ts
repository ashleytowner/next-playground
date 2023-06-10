import { getTopTracks } from '@/lib/spotify';

export default async function getTopTracksHandler(_: any, res: any) {
  const response = await getTopTracks();
  const { items } = await response;

  // const tracks: any = items.slice(0, 10).map((track: any) => {
  //   return {
  //     artist: track.artists.join(', '),
  //     songUrl: track.external_urls.spotify,
  //     title: track.name,
  //   };
  // });

  return res.status(200).json({ items });
}
