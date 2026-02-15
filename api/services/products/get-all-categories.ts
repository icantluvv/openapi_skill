import axios from 'axios';

import type { Category } from '~/api/models/types';

import { mockCategories } from '~/api/mocks/data';

async function getAllCategories(): Promise<Category[] | null> {
    const baseUrl = process.env.BACK_INTERNAL_URL;

    if (!baseUrl) {
        return mockCategories;
    }

    try {
        const response = await axios.get<Category[]>(`${baseUrl}/categories`);

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке категорий', error);

        return mockCategories;
    }
}

export default getAllCategories;
