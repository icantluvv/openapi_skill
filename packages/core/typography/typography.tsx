import type { ComponentProps, JSX, ReactNode, Ref } from 'react';

import { cva } from 'class-variance-authority';

export const typographyVariants = cva('text-balance', {
    defaultVariants: {
        variant: 'p',
    },
    variants: {
        center: {
            true: 'text-center',
        },
        color: {
            primary: 'text-foreground',
            secondary: 'text-slate-',
        },
        variant: {
            accent: 'text-[24px] font-normal',
            description: 'text-[12px] font-normal text-shadow-text',
            h1: 'text-[72px] font-bold',
            h2: 'text-[52px] font-bold',
            h3: 'text-[32px] font-semibold',
            h4: 'text-[24px] font-medium',
            p: 'text-[14px] font-normal',
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
    variant?: 'accent' | 'description' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
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
        variant === 'description' || variant === 'accent' ? 'p' : variant;

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
