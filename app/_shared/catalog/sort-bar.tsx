import { Typography } from '@repo/core/typography';

import DefaultSortBar from '@/_shared/catalog/default-sort-bar';
import MobileSortBar from '@/_shared/catalog/mobile-sort-bar';
import getAllCategories from '~/api/services/products/get-all-categories';

async function SortBar() {
    const categories = await getAllCategories();

    if (!categories) {
        return (
            <Typography center variant={'accent'}>
                Ошибка
            </Typography>
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
