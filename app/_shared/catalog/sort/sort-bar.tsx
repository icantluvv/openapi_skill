import { Typography } from '@repo/core/typography';

import DefaultSortBar from '@/_shared/catalog/sort/default-sort-bar';
import MobileSortBar from '@/_shared/catalog/sort/mobile-sort-bar';
import getAllCategories from '~/api/services/products/get-all-categories';

async function SortBar() {
    const categories = await getAllCategories();

    if (!categories) {
        return (
            <div className="">
                <Typography center variant="h4">
                    Ошибка
                </Typography>
            </div>
        );
    }

    return (
        <>
            <DefaultSortBar categories={categories} />
            <MobileSortBar categories={categories} />
        </>
    );
}

export default SortBar;
