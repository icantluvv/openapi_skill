import type { Promo } from '../../models/types';

import { mockPromos } from '../../mocks/data';

function getPromo(): Promise<Promo[]> {
    return Promise.resolve(mockPromos);
}

export default getPromo;
