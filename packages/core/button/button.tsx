import type { ButtonHTMLAttributes, Ref } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';

import { cn } from '../cn';

const buttonVariants = cva(
    'inline-flex size-full cursor-pointer items-center justify-center rounded-md text-lg font-medium whitespace-nowrap ring-offset-background transition-all duration-[.3s] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
    {
        defaultVariants: {
            form: 'default',
            size: 'default',
            variant: 'default',
        },
        variants: {
            form: {
                circle: 'rounded-full',
                default: '',
                text: 'bg-transparent',
            },
            size: {
                default: '',
                lg: '',
                sm: '',
            },
            variant: {
                default: '',
                link: '',
                outline: '',
                primary:
                    'bg-primary px-[70px] py-[18px] text-primary-foreground hover:bg-primary-hover active:bg-primary-active',
                secondary: 'hover: rounded-full bg-light-gray font-bold text-black',
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
