import {
  handleAuth,
  handleLogin,
  handleCallback,
  Session,
} from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const url = new URL(
    req.url as string,
    `http://${(req as unknown as NextApiRequest).headers.host}`,
  );

  const appUrl = new URL(process.env.AUTH0_REDIRECT_URI as string);
  const host = `${appUrl.protocol}//${appUrl.host}`;

  const connection = url.searchParams.get('connection');
  const error = url.searchParams.get('error');

  console.log('Connection parameter:', host, connection);
  console.log('Error parameter:', error);

  if (error === 'access_denied') {
    return NextResponse.redirect(new URL('/auth?error=access_denied', host));
  }

  return handleAuth({
    login: handleLogin({
      authorizationParams: {
        connection: connection || 'google-oauth2',
        audience: process.env.AUTH0_AUDIENCE,
        // scope: 'openid profile email',
        // redirect_uri: process.env.AUTH0_REDIRECT_URI,
      },
    }),
    callback: handleCallback({
      afterCallback: (req: NextRequest, session: Session) => {
        if (url.searchParams.get('error') === 'access_denied') {
          return NextResponse.redirect(
            new URL('/auth?error=access_denied', host),
          );
        }
        return session;
      },
    }),
  })(req, res);
};
