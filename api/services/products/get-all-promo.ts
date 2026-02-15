import axios from 'axios';

import type { Promo } from '~/api/models/types';

import { mockPromos } from '~/api/mocks/data';

async function getPromo(): Promise<Promo[]> {
    try {
        const baseUrl = process.env.BACK_INTERNAL_URL;

        const response = await axios.get<Promo[]>(`${baseUrl || 'http://localhost:3000'}/promo`);

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке промо', error);

        return mockPromos;
    }
}

export default getPromo;
