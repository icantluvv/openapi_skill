import { Typography } from '@repo/core/typography';

function DefaultSortBar({ categories }: CategoryProps) {
    return (
        <div
            className={
                'mt-[24px] hidden items-center justify-center gap-[40px] md:flex xl:mt-[55px]'
            }
        >
            {categories?.map(category => (
                <Typography key={category.id}>{category.title}</Typography>
            ))}
        </div>
    );
}

export default DefaultSortBar;
