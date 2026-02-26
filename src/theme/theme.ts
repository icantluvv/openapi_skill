export type Theme = {
    borderRadius: {
        lg: string;
        md: string;
        sm: string;
    };
    breakpoints: {
        mobile: string;
    };
    colors: {
        background: string;
        disabled: {
            bg: string;
            text: string;
        };
        error: {
            focus: string;
            hover: string;
            main: string;
        };
        foreground: string;
        link: {
            focus: string;
            hover: string;
            main: string;
        };
        primary: {
            active: string;
            focus: string;
            foreground: string;
            hover: string;
            main: string;
        };
    };
    shadows: {
        button: string;
        buttonError: string;
        buttonErrorHover: string;
        buttonHover: string;
    };
    transitions: {
        fast: string;
        normal: string;
        slow: string;
    };
};

export const lightTheme: Theme = {
    borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
    },
    breakpoints: {
        mobile: '640px',
    },
    colors: {
        background: 'hsl(0 0% 100%)',
        disabled: {
            bg: 'hsl(0, 0%, 86%)',
            text: 'hsl(0, 0%, 58%)',
        },
        error: {
            focus: '#f87171',
            hover: '#dc2626',
            main: '#ef4444',
        },
        foreground: 'hsl(0 0% 0%)',
        link: {
            focus: '#a78bfa',
            hover: '#8b5cf6',
            main: '#6366f1',
        },
        primary: {
            active: '#5b21b6',
            focus: '#a78bfa',
            foreground: 'hsl(0 0% 0%)',
            hover: '#8b5cf6',
            main: '#6366f1',
        },
    },
    shadows: {
        button: '0 8px 20px rgba(99, 102, 241, 0.4)',
        buttonError: '0 8px 20px rgba(239, 68, 68, 0.4)',
        buttonErrorHover: '0 8px 20px rgba(239, 68, 68, 0.5)',
        buttonHover: '0 8px 20px rgba(99, 102, 241, 0.5)',
    },
    transitions: {
        fast: '0.15s',
        normal: '0.2s',
        slow: '0.25s',
    },
};

export const darkTheme: Theme = {
    borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
    },
    breakpoints: {
        mobile: '640px',
    },
    colors: {
        background: 'hsl(0 0% 10%)',
        disabled: {
            bg: 'hsl(0, 0%, 30%)',
            text: 'hsl(0, 0%, 50%)',
        },
        error: {
            focus: '#fca5a5',
            hover: '#ef4444',
            main: '#dc2626',
        },
        foreground: 'hsl(0 0% 95%)',
        link: {
            focus: '#c4b5fd',
            hover: '#a78bfa',
            main: '#8b5cf6',
        },
        primary: {
            active: '#7c3aed',
            focus: '#c4b5fd',
            foreground: 'hsl(0 0% 100%)',
            hover: '#a78bfa',
            main: '#8b5cf6',
        },
    },
    shadows: {
        button: '0 8px 20px rgba(139, 92, 246, 0.5)',
        buttonError: '0 8px 20px rgba(220, 38, 38, 0.5)',
        buttonErrorHover: '0 8px 20px rgba(220, 38, 38, 0.6)',
        buttonHover: '0 8px 20px rgba(139, 92, 246, 0.6)',
    },
    transitions: {
        fast: '0.15s',
        normal: '0.2s',
        slow: '0.25s',
    },
};

export const theme = lightTheme;
