import { Typography } from '@repo/core/typography';
import { Suspense } from 'react';

import ProductsList from '@/_shared/catalog/product-list';
import SkeletonList from '@/_shared/catalog/skeleton/skeleton-list';
import SortBar from '@/_shared/catalog/sort/sort-bar';

function showSkeleton() {
    return <SkeletonList />;
}
function Catalog() {
    return (
        <section className={'container mb-[100px] flex flex-col'}>
            <Typography center variant={'h2'}>
                Выберите пиццу
            </Typography>

            <Suspense fallback={showSkeleton()}>
                <SortBar></SortBar>
            </Suspense>

            <Suspense fallback={showSkeleton()}>
                <ProductsList />
            </Suspense>
        </section>
    );
}

export default Catalog;
