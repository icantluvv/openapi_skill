import { Typography } from '@repo/core/typography';

import SortBar from '@/_shared/catalog/sort/sort-bar';
import getAllCategories from '~/api/services/products/get-all-categories';

async function CategoryWrapper() {
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

    return <SortBar categories={categories} />;
}

export default CategoryWrapper;
