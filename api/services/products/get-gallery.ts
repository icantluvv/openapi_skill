import axios from 'axios';

import type { Gallery } from '~/api/models/types';

import { mockGallery } from '~/api/mocks/data';

async function getGallery(): Promise<Gallery[]> {
    const baseUrl = process.env.BACK_INTERNAL_URL;

    if (!baseUrl) {
        return mockGallery;
    }

    try {
        const response = await axios.get<Gallery[]>(`${baseUrl}/gallery`);

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке галереи', error);

        return mockGallery;
    }
}

export default getGallery;
