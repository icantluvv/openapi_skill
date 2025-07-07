import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { cn } from '#/utils/cn';
import { Alegreya, Roboto } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const roboto = Roboto({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['300', '400', '500', '700'],
});

const alegreya = Alegreya({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-alegreya',
    weight: ['400', '700', '800', '900'],
});

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export const revalidate = false;
// false | 0 | number

export const fetchCache = 'auto';
// 'auto' | 'default-cache' | 'only-cache' | 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'

export const experimental_ppr = false;
// true | false

export const runtime = 'nodejs';

export const metadata: Metadata = {
    description: 'Default starter for projects',
    title: 'Next Starter',
};

export type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            className={`${alegreya.variable} ${roboto.variable}`}
            lang="ru"
            suppressHydrationWarning
        >
            <body className={cn('font-sans antialiased')}>
                <NuqsAdapter>
                    <main className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-background antialiased">
                        {children}
                    </main>
                </NuqsAdapter>
            </body>
        </html>
    );
}
