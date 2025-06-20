import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

const stepVariants = cva(
    'flex flex-1 items-center gap-[24px] rounded-sm bg-background px-[24px] py-[32px]'
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
            <div className="h-[80px] w-[80px] min-w-[80px]">
                <Image alt={title} height={80} src={src} width={80}></Image>
            </div>
            <div className="flex w-full flex-col gap-[6px]">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="description">{description}</Typography>
            </div>
        </div>
    );
}

export default Step;
