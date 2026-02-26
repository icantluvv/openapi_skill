import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Toaster } from '@repo/core/sonner';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Alegreya, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { routing } from '~/i18n/routing';

import { cn } from '../../src/utils/cn';
import ThemeProvider from '../styled_component/theme-provider';

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

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html
            className={`${alegreya.variable} ${roboto.variable}`}
            lang="ru"
            suppressHydrationWarning
        >
            <body className={cn('font-sans antialiased')}>
                <ThemeProvider>
                    <NuqsAdapter>
                        <main className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden antialiased">
                            <NextIntlClientProvider>{children}</NextIntlClientProvider>
                        </main>
                        <Toaster />
                    </NuqsAdapter>
                </ThemeProvider>
            </body>
        </html>
    );
}
