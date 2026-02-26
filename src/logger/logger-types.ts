export type LogLevel = 'debug' | 'error' | 'info' | 'warn';

export type LoggerConfig = {
    level: LogLevel;
    prefix: string;
};

export type LoggerApi = {
    debug: (message: string, data?: unknown) => void;
    error: (message: string, data?: unknown) => void;
    info: (message: string, data?: unknown) => void;
    log: (message: string, data?: unknown) => void;
    setConfig: (config: Partial<LoggerConfig>) => void;
    warn: (message: string, data?: unknown) => void;
};

const LEVEL_ORDER: LogLevel[] = ['debug', 'info', 'warn', 'error'];

export const levelOrder = (level: LogLevel): number => LEVEL_ORDER.indexOf(level);
