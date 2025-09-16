import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    return {
        locale,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,unicorn/no-await-expression-member
        messages: (await import(`../public/locales/${locale}/language.json`)).default,
    };
});
