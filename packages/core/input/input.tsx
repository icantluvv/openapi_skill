'use client';

import type { InputHTMLAttributes, RefObject } from 'react';

import MaskedInput from 'react-text-mask';

import { cn } from '../cn';

type InputProps = {
    className?: string;
    mask?: string;
    ref?: RefObject<HTMLInputElement>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'>;

export function Input({ className, mask, ref, type = 'text', ...props }: InputProps) {
    const inputClassName = cn(
        'placeholder:text-border-input-border focus-visible:ring-ring focus-visible:outline-hidden w-full rounded-sm border p-[10px] text-[16px] transition-colors focus-visible:ring-2',
        'border-input-border',
        'hover:border-input-border-hover',
        'focus:border-input-border-focus',
        'active:border-black',
        'data-[invalid]:border-input-border-error font-roboto',
        className
    );

    if (mask) {
        return (
            <MaskedInput
                className={inputClassName}
                guide={false}
                mask={[
                    '+',
                    '7',
                    ' ',
                    '(',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                ]}
                placeholder="+7 (___) ___-__-__"
                type="tel"
                {...props}
            />
        );
    }

    return <input className={inputClassName} ref={ref} type={type} {...props} />;
}

Input.displayName = 'Input';
