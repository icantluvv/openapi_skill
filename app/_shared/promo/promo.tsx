import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import Image from 'next/image';

type PromoProps = {
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    src: string;
    title: string;
} & ComponentProps<'div'>;

function Promo({ description, ref, src, title }: Readonly<PromoProps>) {
    return (
        <div
            className={
                'flex w-[calc(100vw-2*var(--container-padding))] flex-col gap-[10px] md:gap-[8px] xl:gap-[10px]'
            }
            ref={ref}
        >
            <div>
                <Image
                    alt={title}
                    className="w-full rounded-sm object-cover"
                    height={247}
                    src={src}
                    width={416}
                ></Image>
            </div>

            <div className={'mt-[4px] max-w-[60vw] md:max-w-[85%]'}>
                <Typography className={'leading-6'} variant={'h4_promo'}>
                    {title}
                </Typography>
            </div>

            <div className={'max-w-[85vw] xl:mt-2'}>
                <Typography className={'text-sm'} variant={'custom'}>
                    {description}
                </Typography>
            </div>
        </div>
    );
}

export default Promo;
