'use client';

import { createContext, type ReactNode, use, useCallback, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme, type Theme } from '../../src/theme/theme';

type ThemeMode = 'dark' | 'light';

type ThemeContextType = {
    mounted: boolean;
    theme: Theme;
    themeMode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
    const context = use(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }

    return context;
}

type ThemeProviderProps = {
    children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
    const [themeMode, setThemeMode] = useState<ThemeMode>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme-mode');

        if (saved === 'dark' || saved === 'light') {
            setThemeMode(saved);
        } else if (globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches) {
            setThemeMode('dark');
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme-mode', themeMode);
        }
    }, [themeMode, mounted]);

    const theme = themeMode === 'dark' ? darkTheme : lightTheme;

    const toggleTheme = useCallback(() => {
        setThemeMode(previous => (previous === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext value={{ mounted, theme, themeMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext>
    );
}

export default ThemeProvider;
