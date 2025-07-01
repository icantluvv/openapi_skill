import { Typography } from '@repo/core/typography';
import { Suspense } from 'react';

import CategoryWrapper from '@/_shared/catalog/category-wrapper';
import ProductsWrapper from '@/_shared/catalog/product-wrapper';
import SkeletonList from '@/_shared/catalog/skeleton/skeleton-list';

function showSkeleton() {
    return <SkeletonList />;
}
function Catalog() {
    return (
        <section className={'container flex scroll-mt-[15vh] flex-col xl:mb-[100px]'} id={'menu'}>
            <Typography center variant={'h2'}>
                Выберите пиццу
            </Typography>

            <Suspense fallback={showSkeleton()}>
                <CategoryWrapper />
            </Suspense>

            <Suspense fallback={showSkeleton()}>
                <ProductsWrapper />
            </Suspense>
        </section>
    );
}

export default Catalog;
