import '@total-typescript/ts-reset';
import 'styled-components';
import 'typed-query-selector/strict';

import type { Theme } from '../theme/theme';

declare module 'styled-components' {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- styled-components DefaultTheme augmentation */
    export interface DefaultTheme extends Theme {}
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };

    export default classes;
}
