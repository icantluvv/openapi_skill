'use client';

import Link from 'next/link';
import sc, { type CSSProperties } from 'styled-components';

const StyledLink = sc(Link)`
    position: relative;
    display: inline-flex;
    align-items: center;
    color: ${props => props.theme.colors.link.main};
    text-decoration: none;
    font-weight: 500;
    transition:
        color ${props => props.theme.transitions.normal},
        transform ${props => props.theme.transitions.normal};

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, ${props => props.theme.colors.link.main} 0%, ${props => props.theme.colors.link.hover} 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform ${props => props.theme.transitions.slow} ease-out;
    }

    &:hover {
        color: ${props => props.theme.colors.link.hover};
        transform: translateY(-1px);

        &::after {
            transform: scaleX(1);
        }
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.link.focus};
        outline-offset: 2px;
        border-radius: ${props => props.theme.borderRadius.sm};
    }

    &:visited {
        color: ${props => props.theme.colors.link.main};
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: 0.9rem;
    }
`;

type CustomLinkProps = {
    sx?: CSSProperties;
} & React.ComponentPropsWithoutRef<typeof Link>;

function CustomLink({ style, sx, ...props }: CustomLinkProps) {
    const mergedStyle = sx || style ? { ...sx, ...style } : undefined;

    return <StyledLink style={mergedStyle} {...props} />;
}

export default CustomLink;
