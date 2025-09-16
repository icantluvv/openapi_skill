'use client';

import type { ButtonHTMLAttributes, Ref } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';

import { cn } from '../cn';

const buttonVariants = cva(
    'font-alegreya ring-offset-background focus-visible:ring-ring focus-visible:outline-hidden inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-[16px] font-black transition-all duration-[.3s] focus-visible:ring-2 focus-visible:ring-offset-2 xl:text-[18px]',
    {
        defaultVariants: {
            form: 'default',
            variant: 'default',
        },
        variants: {
            form: {
                circle: 'rounded-full',
                default: '',
                text: '',
            },

            variant: {
                default: '',
                disable: 'bg-disable text-disable-font cursor-default rounded-sm',
                primary:
                    'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active rounded-sm',
                secondary:
                    'bg-light-gray hover:bg-primary-hover active:bg-primary-active rounded-full text-black hover:text-white',
            },
        },
    }
);

export type ButtonProps = {
    asChild?: boolean;
    loading?: boolean;
    ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

function Button({
    asChild = false,
    children,
    className,
    form,
    loading,
    ref,
    type,
    variant,
    ...props
}: Readonly<ButtonProps>) {
    if (asChild) {
        return <Slot {...props}>{children}</Slot>;
    }

    return (
        <button
            className={cn(buttonVariants({ className, form, variant }))}
            disabled={loading ?? props.disabled}
            ref={ref}
            type={type ?? 'button'}
            {...props}
        >
            {loading ? (
                <span className="mr-1 animate-spin">
                    <LoaderCircle />
                </span>
            ) : null}
            {children}
        </button>
    );
}

Button.displayName = 'Button';

export { Button, buttonVariants };
