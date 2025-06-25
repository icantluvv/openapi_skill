'use client';

import type { ComponentProps, Ref } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '../cn';

type CheckboxProps = {
    ref?: Ref<typeof CheckboxPrimitive.Root>;
} & ComponentProps<typeof CheckboxPrimitive.Root>;

export function Checkbox({ className, ref, ...props }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            className={cn(
                'peer h-[20px] w-[20px] shrink-0 cursor-pointer rounded-full border border-checkbox-border transition-colors hover:border-checkbox-border-hover active:border-checkbox-border-active',
                className
            )}
            ref={ref}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn('flex items-center justify-center text-current')}
            >
                <div className={'h-[10px] w-[10px] rounded-full bg-primary'}></div>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
