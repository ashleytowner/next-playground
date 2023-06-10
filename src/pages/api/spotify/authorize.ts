import { getRefreshToken } from '@/lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

export default async function authorize(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodySchema = z.object({
    code: z.string()
  })

  const { code } = bodySchema.parse(JSON.parse(req.body));

  const [status, data] = await getRefreshToken(code);

  res.status(status).send(data);
}
