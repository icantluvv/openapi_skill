import axios from 'axios';

import type { Product } from '~/api/models/types';

import { mockProducts } from '~/api/mocks/data';

async function getProducts(): Promise<Product[]> {
    try {
        const baseUrl = process.env.BACK_INTERNAL_URL;

        const response = await axios.get<Product[]>(
            `${baseUrl || 'http://localhost:3000'}/products`
        );

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке продуктов', error);

        return mockProducts;
    }
}

export default getProducts;
