import { Skeleton } from '@repo/core/skeleton';
import { Typography } from '@repo/core/typography';

function SkeletonCard() {
    return (
        <li className="flex flex-row items-start justify-between rounded-sm p-[12px] pb-[24px] shadow-custom md:flex-col md:items-center md:justify-start md:p-[24px] md:pb-[48px]">
            <div className="h-[100px] w-[100px] min-w-[100px] xl:h-[240px] xl:w-[240px]">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="flex flex-col items-center gap-[7px]">
                <Typography center variant="h4">
                    Загрузка...
                </Typography>
                <Typography center variant="description">
                    Загрузка...
                </Typography>
                <div className="flex rounded-sm bg-light-gray p-[5px]">
                    <Skeleton></Skeleton>
                </div>
                <Typography variant="accent">Загрузка...</Typography>
            </div>
            <div className="mt-3 h-[40px] w-full">
                <Skeleton className="h-full w-full"></Skeleton>
            </div>
        </li>
    );
}

export default SkeletonCard;
