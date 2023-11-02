import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';
import { cookies } from 'next/headers';

export const config = {
  matcher: ['/dashboard/:path*', '/login']
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const secretKey = process.env.USER_JWT_KEY;
  if (!secretKey) {
    throw new Error('USER_JWT_KEY is required');
  }

  const userJWT = cookies().get('user')?.value;

  if (!userJWT && req.nextUrl.pathname !== '/login') {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    return NextResponse.redirect(redirectUrl);
  }

  let user: any;
  try {
    user = await jose.jwtVerify(
      userJWT || '',
      new TextEncoder().encode(secretKey)
    );
    if (!user.payload.id) {
      throw new Error('User cannot be decoded');
    }
  } catch (error) {
    console.log(error);
  }

  if (!user && req.nextUrl.pathname !== '/login') {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    return NextResponse.redirect(redirectUrl);
  } else if (user && req.nextUrl.pathname === '/login') {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/dashboard';
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}
