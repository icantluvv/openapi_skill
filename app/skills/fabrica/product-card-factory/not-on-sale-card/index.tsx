import Image from 'next/image';

import type { Product } from '../types';

type NotOnSaleCardType = {
    product: Product;
};

function NotOnSaleCard({ product }: NotOnSaleCardType) {
    return (
        <div>
            <Image alt={product.name} src={product.image} />
            <h3>{product.name}</h3>
        </div>
    );
}

export default NotOnSaleCard;
