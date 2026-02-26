import type { Product } from './types';

import NotOnSaleCard from './not-on-sale-card';
import OnSaleCard from './on-sale-card';

type ProductCardFabricaType = {
    product: Product;
};

function ProductCardFabrica({ product }: ProductCardFabricaType) {
    const { category } = product;

    switch (category) {
        case 'not_on_sale': {
            return <NotOnSaleCard product={product} />;
        }
        case 'on_sale': {
            return <OnSaleCard product={product} />;
        }
    }
}

export default ProductCardFabrica;
