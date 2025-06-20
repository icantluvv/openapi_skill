import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

const featureVariants = cva('flex items-center gap-[16px] md:gap-[37px] xl:gap-[27px]', {
    defaultVariants: {
        align: 'left',
    },
    variants: {
        align: {
            left: 'flex-row',
            right: 'flex-row-reverse justify-start',
        },
    },
});

type FeatureProps = {
    align?: 'left' | 'right';
    alt?: string;
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    title: string;
    url: string;
} & ComponentProps<'div'>;

function Feature({
    align = 'left',
    className,
    description,
    ref,
    title,
    url,
}: Readonly<FeatureProps>) {
    return (
        <div className={featureVariants({ align, className })} ref={ref}>
            <div className="min-w-[80px] md:min-w-[251px] xl:min-w-[314px]">
                <Image alt={title} className="object-cover" height={314} src={url} width={314} />
            </div>
            <div className="flex max-w-[416px] flex-col gap-[4px] md:gap-[12px]">
                <Typography color="primary" variant="h3">
                    {title}
                </Typography>
                <Typography color="primary" variant="p">
                    {description}
                </Typography>
            </div>
        </div>
    );
}

export default Feature;
