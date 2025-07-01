import axios from 'axios';

async function getPromo(): Promise<Promo[]> {
    const baseUrl = process.env.BACK_INTERNAL_URL;

    if (!baseUrl) {
        console.error('BACK_INTERNAL_URL is not defined');

        return [];
    }

    try {
        const response = await axios.get<Promo[]>(`${baseUrl}/promo`);

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке продуктов', error);

        return [];
    }
}

export default getPromo;
