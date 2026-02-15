'use client';

import { useMemo } from 'react';

import Card from '@/_shared/catalog/card/card';
import { useCartStore } from '@/store/cart-store';
import { useHiddenCardsStore } from '@/store/hidden-cards-store';
import { useSortStore } from '@/store/sort-bar-store';

type CardsListProps = {
    products: Product[];
};

function CardsList({ products }: CardsListProps) {
    const { categories, chosenCategory } = useSortStore();
    const { items } = useCartStore();
    const { hiddenIds } = useHiddenCardsStore();

    const productIdsWithDuplicate = useMemo(
        () => new Set(items.filter(item => item.quantity >= 2).map(item => item.id)),
        [items]
    );

    const filteredProducts = useMemo(() => {
        if (!chosenCategory) {
            return products;
        }

        const catNumber = Number(chosenCategory);

        return products.filter(product => product.categories.includes(catNumber));
    }, [chosenCategory, products]);

    const visibleProducts = useMemo(
        () => filteredProducts.filter(product => !hiddenIds.has(product.id)),
        [filteredProducts, hiddenIds]
    );

    return (
        <ul className="mt-[13px] grid w-full grid-cols-1 place-content-stretch gap-[5px] [perspective:1000px] md:mt-[40px] md:grid-cols-3 md:gap-[33px] xl:grid-cols-4">
            {visibleProducts.map(product => {
                const productCategories = categories.filter(cat =>
                    product.categories.includes(Number(cat.id))
                );
                const isRemoving = productIdsWithDuplicate.has(product.id);

                return (
                    <Card
                        categories={productCategories}
                        isRemoving={isRemoving}
                        key={product.id}
                        product={product}
                    />
                );
            })}
        </ul>
    );
}

export default CardsList;
