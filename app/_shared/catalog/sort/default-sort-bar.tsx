'use client';

import type { Category } from '~/lib/models/types';

import SortButton from '@/_shared/catalog/sort/sort-button';
import { useSortStore } from '@/store/sort-bar-store';

function DefaultSortBar() {
    const { categories } = useSortStore();

    return (
        <div
            className={
                'mt-[18px] hidden items-center justify-center gap-[50px] md:flex xl:mt-[50px] xl:gap-[45px]'
            }
        >
            {categories.map((category: Category) => (
                <SortButton category={category} key={category.id} />
            ))}
        </div>
    );
}

export default DefaultSortBar;
