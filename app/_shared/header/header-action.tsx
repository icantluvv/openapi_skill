'use client';

import type { ComponentProps, ReactNode, Ref } from 'react';

import { Button } from '@repo/core/button';
import { cn } from '@repo/core/cn';
import { Typography } from '@repo/core/typography';
import { useHeaderScroll } from '#/hooks/use-header-scroll';
import Image from 'next/image';

import CartCounter from '@/_shared/header/cart-counter';
import { useHeaderStore } from '@/store/header-store';

type HeaderActionProps = {
    action?: () => void;
    children?: ReactNode;
    className?: string;
    description: string;
    ref?: Ref<HTMLDivElement>;
    scrolledTitleSize: string;
    showCartCounter?: boolean;
    src: string;
    title: string;
    titleSize: string;
} & ComponentProps<'div'>;

function HeaderAction({
    action,
    children,
    className,
    description,
    ref,
    scrolledTitleSize,
    showCartCounter = false,
    src,
    title,
    titleSize,
}: Readonly<HeaderActionProps>) {
    useHeaderScroll();
    const isScroll = useHeaderStore(state => state.isScroll);

    const buttonSize = isScroll ? 'h-[32px] w-[32px]' : 'h-[32px] w-[32px] md:h-[40px] md:w-[40px]';
    const titleClass = isScroll ? `text-[${scrolledTitleSize}]` : `text-[${titleSize}]`;

    return (
        <div className={cn('relative flex gap-3', className)} ref={ref}>
            <Button
                className={cn('relative', buttonSize)}
                form="default"
                onClick={action}
                variant="default"
            >
                {Boolean(showCartCounter) && <CartCounter />}
                <Image alt={title} fill objectFit="cover" src={src} />
            </Button>

            <div className="font-alegreya hidden flex-col font-black xl:flex">
                <Typography className={titleClass} variant="custom">
                    {title}
                </Typography>
                <Typography className="text-shadow-text" variant="description">
                    {description}
                </Typography>
            </div>

            {Boolean(children) && <div className="absolute">{children}</div>}
        </div>
    );
}

export default HeaderAction;
