import axios from 'axios';

async function getProducts(): Promise<null | Product[]> {
    const baseUrl = process.env.BACK_INTERNAL_URL;

    if (!baseUrl) {
        console.error('BACK_INTERNAL_URL is not defined');

        return null;
    }

    try {
        const response = await axios.get<Product[]>(`${baseUrl}/products`);

        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке продуктов', error);

        return null;
    }
}

export default getProducts;
