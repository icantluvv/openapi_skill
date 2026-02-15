import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import Image from 'next/image';

type StepProps = {
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    src: string;
    title: string;
} & ComponentProps<'div'>;

function Step({ description, ref, src, title }: Readonly<StepProps>) {
    return (
        <div
            className={`bg-background shadow-custom xl:min-h-auto flex w-full flex-1 items-start gap-[14px] rounded-sm px-[14px] pb-[20px] pt-[10px] md:min-h-[208px] md:flex-col md:gap-[6px] md:px-[22px] md:pb-[40px] md:pt-[20px] xl:flex-row xl:items-center xl:gap-[24px] xl:px-[24px] xl:py-[28px]`}
            ref={ref}
        >
            <div className="my-1 h-[48px] w-[48px] min-w-[48px] md:h-[56px] md:w-[56px] md:min-w-[56px] xl:h-[80px] xl:w-[80px] xl:min-w-[80px]">
                <Image alt={title} height={80} src={src} width={80}></Image>
            </div>
            <div className="flex w-full flex-col gap-[2px] xl:gap-[6px]">
                <Typography variant="h4">{title}</Typography>
                <div className={'pr-[8px] md:pr-[6px]'}>
                    <Typography variant="description">{description}</Typography>
                </div>
            </div>
        </div>
    );
}

export default Step;
