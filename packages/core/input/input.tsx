'use client';

import type { InputHTMLAttributes, Ref } from 'react';

import { cn } from '../cn';

export type InputProps = {
    ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ref, type, ...props }: InputProps) {
    return (
        <input
            className={cn(
                'placeholder:text-border-input-border w-full rounded-sm border p-[10px] text-[16px] transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden',
                'border-input-border',
                'hover:border-input-border-hover',
                'focus:border-input-border-focus',
                'active:border-black',
                'data-[invalid]:border-input-border-error',
                className
            )}
            ref={ref}
            type={type}
            {...props}
        />
    );
}

Input.displayName = 'Input';
