import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

const stepVariants = cva(
    'flex flex-1 items-start gap-[12px] rounded-sm bg-background p-[14px] shadow-custom md:min-h-[208px] md:flex-col xl:min-h-auto xl:flex-row xl:items-center xl:gap-[24px] xl:px-[24px] xl:py-[32px]'
);

type StepProps = {
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    src: string;
    title: string;
} & ComponentProps<'div'>;

function Step({ className, description, ref, src, title }: Readonly<StepProps>) {
    return (
        <div className={stepVariants({ className })} ref={ref}>
            <div className="h-[48px] w-[48px] md:h-[55px] md:w-[55px] xl:h-[80px] xl:w-[80px] xl:min-w-[80px]">
                <Image alt={title} height={80} src={src} width={80}></Image>
            </div>
            <div className="flex w-full flex-col gap-[4px] xl:gap-[6px]">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="description">{description}</Typography>
            </div>
        </div>
    );
}

export default Step;
