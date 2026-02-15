import type { Category } from '../../models/types';

import { mockCategories } from '../../mocks/data';

function getAllCategories(): Promise<Category[] | null> {
    return Promise.resolve(mockCategories);
}

export default getAllCategories;
