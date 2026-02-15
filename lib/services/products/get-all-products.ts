import type { Product } from '../../models/types';

import { mockProducts } from '../../mocks/data';

function getProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts);
}

export default getProducts;
