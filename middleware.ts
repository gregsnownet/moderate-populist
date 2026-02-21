import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Force HTTPS in production (Amplify handles this, but belt and suspenders)
  if (
    process.env.NODE_ENV === 'production' &&
    url.protocol === 'http:' &&
    !url.hostname.includes('localhost')
  ) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, { status: 301 });
  }

  // Redirect www to non-www (canonical domain)
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(url, { status: 301 });
  }

  // Remove trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.svg|robots.txt|sitemap.xml|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp)).*)',
  ],
};
