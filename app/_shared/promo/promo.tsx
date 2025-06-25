import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

const promoVariants = cva('flex w-[calc(100vw-2*var(--container-padding))] flex-col gap-[10px]');

type PromoProps = {
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    src: string;
    title: string;
} & ComponentProps<'div'>;

function Promo({ className, description, ref, src, title }: Readonly<PromoProps>) {
    return (
        <div className={promoVariants({ className })} ref={ref}>
            <div>
                <Image
                    alt={title}
                    className="rounded-sm object-cover"
                    height={247}
                    src={src}
                    width={416}
                ></Image>
            </div>
            <Typography variant={'h4'}>{title}</Typography>
            <Typography variant={'p'}>{description}</Typography>
        </div>
    );
}

export default Promo;
