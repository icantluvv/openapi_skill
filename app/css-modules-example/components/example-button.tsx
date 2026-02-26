'use client';

import type { ButtonHTMLAttributes } from 'react';

import buttonUtilities from '../styles/button-utils.module.css';
import styles from './button.module.css';

type ButtonVariant = 'danger' | 'outline' | 'primary' | 'secondary' | 'success';
type ButtonSize = 'large' | 'medium' | 'small';

type ExampleButtonProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ExampleButton({
    children,
    className,
    disabled = false,
    fullWidth = false,
    loading = false,
    size = 'medium',
    variant = 'primary',
    ...props
}: ExampleButtonProps) {
    const buttonClasses = [
        styles.button,
        styles[variant],
        size !== 'medium' && styles[size],
        disabled && styles.disabled,
        fullWidth && buttonUtilities.fullWidth,
        loading && buttonUtilities.loading,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={buttonClasses} disabled={disabled} type="button" {...props}>
            {children}
        </button>
    );
}
