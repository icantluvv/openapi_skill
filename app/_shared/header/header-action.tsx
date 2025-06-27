import type { ComponentProps, ReactNode, Ref } from 'react';

import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useHeaderScroll } from '#/hooks/use-header-scroll';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

import CartCounter from '@/_shared/header/cart-counter';
import { useHeaderStore } from '@/store/header-store';

const headerActionVariants = cva('relative flex gap-[12px]');

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

    return (
        <div className={headerActionVariants({ className })} ref={ref}>
            <Button
                className={`relative ${isScroll ? 'h-[32px] w-[32px]' : 'h-[40px] w-[40px]'} `}
                form="default"
                onClick={action}
                variant="default"
            >
                {Boolean(showCartCounter) && <CartCounter />}

                <Image alt={title} fill objectFit="cover" src={src}></Image>
            </Button>
            <div className="font-alegreya hidden flex-col font-black xl:flex">
                <Typography
                    className={isScroll ? `text-[${scrolledTitleSize}]` : `text-[${titleSize}]`}
                    variant="custom"
                >
                    {title}
                </Typography>
                <Typography className="text-shadow-text" variant={'description'}>
                    {description}
                </Typography>
            </div>

            <div className="absolute">{children}</div>
        </div>
    );
}

export default HeaderAction;
