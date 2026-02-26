import Image from 'next/image';

import type { Product } from '../types';

type OnSaleCardType = {
    product: Product;
};

function OnSaleCard({ product }: OnSaleCardType) {
    return (
        <button type="button">
            <Image alt={product.name} src={product.image} />

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </button>
    );
}

export default OnSaleCard;
