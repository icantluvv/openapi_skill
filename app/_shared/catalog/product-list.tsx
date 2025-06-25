import { Typography } from '@repo/core/typography';

import Card from '@/_shared/catalog/card/card';
import getProducts from '~/api/services/products/get-all-products';

async function ProductsList() {
    const products = await getProducts();

    if (!products) {
        return (
            <div className="mt-[40px] w-full">
                <Typography center variant={'accent'}>
                    Продукты не найдены
                </Typography>
            </div>
        );
    }

    return (
        <ul
            className={
                'mt-[40px] grid w-full grid-cols-1 place-content-stretch gap-[32px] md:grid-cols-3 xl:grid-cols-4'
            }
        >
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </ul>
    );
}

export default ProductsList;
