import { getSession } from '@auth0/nextjs-auth0/edge';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  console.log('middleware');
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  console.log('pathname', pathname);
  const user = await getSession(req, res);

  if (user && pathname === '/auth') {
    return NextResponse.redirect(req.nextUrl.origin + '/tournaments');
  }
  if (user && pathname === '/') {
    return NextResponse.redirect(req.nextUrl.origin + '/tournaments');
  }

  if (user && pathname.startsWith('/api')) {
    const accessToken = user.accessToken;
    console.log('accessToken', accessToken);
    // Clone the request headers and add the JWT token
    const headers = new Headers(req.headers);
    headers.set('Authorization', `Bearer ${accessToken}`);
    // Forward the modified request with the new headers
    // In routes, we need to pass headers to fetch via
    // {Authorization: headers().get('Authorization') || '',}
    const modifiedReq = new Request(req.url, {
      method: req.method,
      headers: headers,
      body: req.body,
      redirect: 'manual',
    });
    return NextResponse.next({ request: modifiedReq });
  }

  if (!user && pathname !== '/') {
    if (pathname === '/auth') return res;
    else return NextResponse.redirect(req.nextUrl.origin + '/auth');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
