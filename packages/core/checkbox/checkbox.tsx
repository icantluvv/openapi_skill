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
                'border-checkbox-border hover:border-checkbox-border-hover active:border-checkbox-border-active peer h-[14px] w-[14px] shrink-0 cursor-pointer rounded-full border transition-colors xl:h-[20px] xl:w-[20px]',
                className
            )}
            ref={ref}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn('flex items-center justify-center text-current')}
            >
                <div className={'bg-primary h-[10px] w-[10px] rounded-full'}></div>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
