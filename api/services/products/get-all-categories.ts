import type { Category } from '~/api/models/types';

import { mockCategories } from '~/api/mocks/data';

function getAllCategories(): Promise<Category[] | null> {
    return Promise.resolve(mockCategories);
}

export default getAllCategories;
