import type { Promo } from '~/api/models/types';

import { mockPromos } from '~/api/mocks/data';

function getPromo(): Promise<Promo[]> {
    return Promise.resolve(mockPromos);
}

export default getPromo;
