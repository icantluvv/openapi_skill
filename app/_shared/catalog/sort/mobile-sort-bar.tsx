'use client';

import { Button } from '@repo/core/button';
import Image from 'next/image';

import type { Category } from '~/api/models/types';

import { useSortStore } from '@/store/sort-bar-store';

function MobileSortBar() {
    const { categories, chooseCategory, chosenCategory } = useSortStore();

    const handleCategoryClick = (categoryId: number) => () => {
        const newCategoryId = chosenCategory === categoryId ? 0 : categoryId;

        chooseCategory(newCategoryId);
    };

    return (
        <div
            className={
                'mt-[20px] flex items-center justify-center gap-[28px] md:hidden xl:mt-[55px]'
            }
        >
            {categories.map((category: Category) => (
                <Button
                    className="w-[24px]"
                    form={'default'}
                    key={category.id}
                    onClick={handleCategoryClick(category.id)}
                    variant="default"
                >
                    <Image alt={'all-pizzas'} height={24} src={category.image} width={24}></Image>
                </Button>
            ))}
        </div>
    );
}

export default MobileSortBar;
