import { getTopTracks } from '@/lib/spotify';
import { spotifyTrack } from '@/lib/zod/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

export default async function getTopTracksHandler(req: NextApiRequest, res: NextApiResponse) {
  const [status, response] = await getTopTracks();

  const schema = z.object({
    items: z.array(spotifyTrack)
  })

  const data = schema.parse(response);

  res.status(status).json(data)
}
