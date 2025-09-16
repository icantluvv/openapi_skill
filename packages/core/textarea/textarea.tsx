import type { Ref, TextareaHTMLAttributes } from 'react';

import { cn } from '../cn';

type TextareaProps = {
    ref?: Ref<HTMLTextAreaElement>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ref, ...props }: TextareaProps) {
    return (
        <textarea
            className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:outline-hidden flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props}
        />
    );
}

Textarea.displayName = 'Textarea';
