import { getRecommendations } from '@/lib/spotify';
import { spotifyTrack } from '@/lib/zod/spotify';
import { NextApiResponse, NextApiRequest } from 'next';
import { z } from 'zod';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [status, responseData] = await getRecommendations();

  const schema = z.object({
    tracks: z.array(spotifyTrack),
  });

  const data = schema.parse(responseData);

  res.status(status).json(data);
}
