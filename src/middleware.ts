import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const user = await getSession(req, res);

  if (user && req.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
  }

  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(req.nextUrl.origin + "/auth");
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|cod.PNG|dashboard|auth|_next/image|favicon.ico).*)",
  ],
};
