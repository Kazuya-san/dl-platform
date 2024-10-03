import { getSession } from '@auth0/nextjs-auth0';
import { headers } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  console.log('in gamertag api');
  const session = await getSession(req, NextResponse.next());
  const parsedReq = await req.json();
  const reqToSend = { ...parsedReq, userId: session?.user.sid };
  console.log(reqToSend);
  try {
    const response = await fetch(
      `${process.env.BACKEND_PROTOCOL}${process.env.BACKEND_DOMAIN}/api/v1/gamertag/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: headers().get('Authorization') || '',
        },
        body: JSON.stringify(reqToSend),
      },
    );

    const data = await response.json();
    console.log('Gamertag POST successful. Api response:', data);
    return new NextResponse(JSON.stringify(data), { status: response.status });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Next Internal Server Error' }),
      { status: 501 },
    );
  }
};
