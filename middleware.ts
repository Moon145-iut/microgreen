import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

const PUBLIC_PATHS = new Set([
  '/',
  '/login',
  '/register',
  '/verify-email',
  '/verify-email/pending',
]);

const PUBLIC_API_PATHS = new Set([
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/verify-email',
  '/api/auth/user',
]);

const isPublicPath = (path: string): boolean => {
  if (PUBLIC_PATHS.has(path)) return true;
  if (PUBLIC_API_PATHS.has(path)) return true;
  if (path.startsWith('/_next/')) return true;
  if (path.includes('.')) return true; // static files
  return false;
};


export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  const { pathname } = request.nextUrl;

  // Check if the path is public
if (isPublicPath(pathname)) {
  return NextResponse.next();
}


  // If there's no token and the path is protected, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Verify the token
    verify(token.value, process.env.JWT_SECRET || 'fallback-secret');
    return NextResponse.next();
  } catch (error) {
    // If token is invalid, clear it and redirect to login
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
