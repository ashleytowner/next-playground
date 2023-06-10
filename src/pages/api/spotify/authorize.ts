import { getRefreshToken, refresh } from '@/lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

export default async function authorize(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bodySchema = z
    .object({
      code: z.string(),
    })
    .or(
      z.object({
        refresh_token: z.string(),
      })
    );

  const body = bodySchema.parse(JSON.parse(req.body));

  let status: number;
  let data: any;

  if ('code' in body) {
    [status, data] = await getRefreshToken(body.code);
  } else {
    [status, data] = await refresh(body.refresh_token);
  }


  res.status(status).send(data);
}
