import { Typography } from '@repo/core/typography';

import CardsList from '@/_shared/catalog/card/cards-list';
import getProducts from '~/api/services/products/get-all-products';

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
