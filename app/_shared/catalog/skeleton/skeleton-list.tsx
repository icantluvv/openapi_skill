import SkeletonCard from '@/_shared/catalog/skeleton/skeleton-card';

function SkeletonList() {
    return (
        <ul
            className={
                'mt-[40px] grid w-full grid-cols-1 place-content-stretch gap-[32px] md:grid-cols-3 xl:grid-cols-4'
            }
        >
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </ul>
    );
}

export default SkeletonList;
