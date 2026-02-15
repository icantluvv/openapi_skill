import type { Product } from '~/api/models/types';

import { mockProducts } from '~/api/mocks/data';

function getProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts);
}

export default getProducts;
