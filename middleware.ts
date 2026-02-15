import type { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import { routing } from '~/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export const config = {
    matcher: [
        `/((?!api|trpc|_next/static|_next/image|_next/webpack-hmr|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)`,
    ],
};

export function middleware(request: NextRequest) {
    const response = intlMiddleware(request);

    response.headers.set('x-url', request.url);

    return response;
}
