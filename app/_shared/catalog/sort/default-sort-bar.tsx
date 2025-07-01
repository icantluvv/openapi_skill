'use client';

import SortButton from '@/_shared/catalog/sort/sort-button';
import { useSortStore } from '@/store/sort-bar-store';

function DefaultSortBar() {
    const { categories } = useSortStore();

    return (
        <div
            className={
                'mt-[20px] hidden items-center justify-center gap-[50px] md:flex xl:mt-[24px] xl:mt-[50px] xl:gap-[45px]'
            }
        >
            {categories.map(category => (
                <SortButton category={category} key={category.id} />
            ))}
        </div>
    );
}

export default DefaultSortBar;
