// import { auth } from '@workspace/auth/server';
import { getSessionCookie } from '@workspace/auth/utils';
// import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request.headers);
  // console.log('Session Cookie:', sessionCookie);

  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'], // Specify the routes the middleware applies to
};
