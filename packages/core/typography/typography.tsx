import type { ComponentProps, JSX, ReactNode, Ref } from 'react';

import { cva } from 'class-variance-authority';

export const typographyVariants = cva('transition-all', {
    defaultVariants: {
        variant: 'p',
    },
    variants: {
        center: {
            true: 'text-center',
        },
        color: {
            primary: 'text-foreground',
            secondary: 'text-slate-400',
        },
        variant: {
            accent: 'font-roboto text-[16px] font-normal md:text-[18px] xl:text-[24px]',
            custom: '',
            description: 'font-roboto text-[12px] font-normal',
            h1: 'font-alegreya text-[40px] font-black md:text-[52px] xl:text-[72px]',
            h2: 'font-alegreya text-[28px] font-black md:text-[40px] xl:text-[52px]',
            h3: 'font-alegreya text-[20px] font-extrabold md:text-[24px] xl:text-[32px]',
            h4: 'font-alegreya text-[18px] font-extrabold md:text-[20px] xl:text-[24px]',
            p: 'font-roboto text-[12px] font-normal xl:text-[14px]',
            span: '',
        },
    },
});

type TypographyProps = {
    center?: boolean;
    children: ReactNode;
    className?: string;
    color?: 'primary' | 'secondary';
    ref?: Ref<HTMLParagraphElement>;
    variant?: 'accent' | 'custom' | 'description' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
} & ComponentProps<'p'>;

export function Typography({
    center,
    children,
    className = '',
    color,
    ref,
    variant = 'p',
    ...props
}: TypographyProps) {
    const Component: keyof JSX.IntrinsicElements =
        variant === 'custom' || variant === 'description' || variant === 'accent' ? 'p' : variant;

    return (
        <Component
            ref={ref}
            {...props}
            className={typographyVariants({ center, className, color, variant })}
        >
            {children}
        </Component>
    );
}

Typography.displayName = 'Typography';
