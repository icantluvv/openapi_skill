import { Typography } from '@repo/core/typography';

import type { Product } from '~/lib/models/types';

import CardsList from '@/_shared/catalog/card/cards-list';
import getProducts from '~/lib/services/products/get-all-products';

async function ProductsWrapper() {
    const products: Product[] = await getProducts();

    if (products.length === 0) {
        return (
            <div className="mt-[40px] w-full">
                <Typography center variant={'accent'}>
                    Продукты не найдены
                </Typography>
            </div>
        );
    }

    return <CardsList products={products} />;
}

export default ProductsWrapper;
