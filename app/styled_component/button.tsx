'use client';

import {
    type ComponentPropsWithoutRef,
    type CSSProperties,
    type MouseEvent,
    useCallback,
} from 'react';
import sc, { keyframes } from 'styled-components';

import { useThemeContext } from './theme-provider';

const fadeInKeyframes = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const BaseButton = sc.button`
    position: relative;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary.foreground};
    background: linear-gradient(135deg, ${props => props.theme.colors.primary.main} 0%, ${props => props.theme.colors.primary.hover} 100%);
    border: none;
    border-radius: ${props => props.theme.borderRadius.md};
    cursor: pointer;
    overflow: hidden;
    animation: ${fadeInKeyframes} ${props => props.theme.transitions.normal} ease-out;
    transition:
        transform ${props => props.theme.transitions.normal},
        box-shadow ${props => props.theme.transitions.normal};

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
        opacity: 0;
        transition: opacity ${props => props.theme.transitions.normal};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.4);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform ${props => props.theme.transitions.slow} ease-out;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.shadows.button};

        &::before {
            opacity: 1;
        }

        &::after {
            transform: scaleX(1);
        }
    }

    &:active {
        transform: translateY(0);

        &::after {
            transform: scaleX(0.8);
        }
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.primary.focus};
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;

        &:hover {
            box-shadow: none;

            &::before,
            &::after {
                opacity: 0;
                transform: scaleX(0);
            }
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
`;

const ErrorButton = sc(BaseButton)`
    background: linear-gradient(135deg, ${props => props.theme.colors.error.main} 0%, ${props => props.theme.colors.error.hover} 100%);

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.shadows.buttonError};

        &::before {
            opacity: 1;
        }

        &::after {
            transform: scaleX(1);
        }
    }

    &:focus-visible {
        outline-color: ${props => props.theme.colors.error.focus};
    }
`;

type ButtonProps = {
    sx?: CSSProperties;
    toggleTheme?: boolean;
} & ComponentPropsWithoutRef<'button'>;

function Button({ onClick, style, sx, toggleTheme, ...props }: ButtonProps) {
    const themeContext = useThemeContext();
    const mergedStyle = sx || style ? { ...sx, ...style } : undefined;

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (toggleTheme) {
                themeContext.toggleTheme();
            }
            onClick?.(event);
        },
        [onClick, themeContext, toggleTheme]
    );

    return <BaseButton onClick={handleClick} style={mergedStyle} {...props} />;
}

type ErrorButtonProps = {
    sx?: CSSProperties;
    toggleTheme?: boolean;
} & ComponentPropsWithoutRef<'button'>;

function ErrorButtonComponent({ onClick, style, sx, toggleTheme, ...props }: ErrorButtonProps) {
    const themeContext = useThemeContext();
    const mergedStyle = sx || style ? { ...sx, ...style } : undefined;

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (toggleTheme) {
                themeContext.toggleTheme();
            }
            onClick?.(event);
        },
        [onClick, themeContext, toggleTheme]
    );

    return <ErrorButton onClick={handleClick} style={mergedStyle} {...props} />;
}

export { Button, ErrorButton, ErrorButtonComponent };
