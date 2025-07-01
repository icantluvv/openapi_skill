'use client';

import { useMemo } from 'react';

import Card from '@/_shared/catalog/card/card';
import { useSortStore } from '@/store/sort-bar-store';

type CardsListProps = {
    products: Product[];
};

function CardsList({ products }: CardsListProps) {
    const { categories, chosenCategory } = useSortStore();

    const filteredProducts = useMemo(() => {
        if (!chosenCategory) {
            return products;
        }

        const catNumber = Number(chosenCategory);

        return products.filter(product => product.categories.includes(catNumber));
    }, [chosenCategory, products]);

    return (
        <ul className="mt-[40px] grid w-full grid-cols-1 place-content-stretch gap-[32px] md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => {
                const productCategories = categories.filter(cat =>
                    product.categories.includes(Number(cat.id))
                );

                return <Card categories={productCategories} key={product.id} product={product} />;
            })}
        </ul>
    );
}

export default CardsList;
