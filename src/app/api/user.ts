import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession(req, res);

  if (session) {
    const user = session.user;
    const email = user.email;
    console.log({ email });
    res.status(200).json({ email });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
}
