import { levelOrder, type LoggerApi, type LoggerConfig, type LogLevel } from './logger-types';

const isDevelopment = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

const defaultConfig: LoggerConfig = {
    level: isDevelopment ? 'debug' : 'info',
    prefix: '',
};

function shouldLog(minLevel: LogLevel, current: LogLevel): boolean {
    return levelOrder(current) >= levelOrder(minLevel);
}

function formatPayload(prefix: string, message: string, data?: unknown): void {
    const label = prefix ? `[${prefix}] ${message}` : message;

    if (data === undefined) {
        console.info(label);
    } else {
        console.info(label, data);
    }
}

function createLoggerInstance(config: LoggerConfig): LoggerApi {
    let state = { ...config };

    const log: LoggerApi['log'] = (message, data) => {
        formatPayload(state.prefix, message, data);
    };

    const debug: LoggerApi['debug'] = (message, data) => {
        if (shouldLog(state.level, 'debug')) {
            formatPayload(state.prefix, message, data);
        }
    };

    const info: LoggerApi['info'] = (message, data) => {
        if (shouldLog(state.level, 'info')) {
            formatPayload(state.prefix, message, data);
        }
    };

    const warn: LoggerApi['warn'] = (message, data) => {
        if (shouldLog(state.level, 'warn')) {
            console.warn(state.prefix ? `[${state.prefix}] ${message}` : message, data ?? '');
        }
    };

    const error: LoggerApi['error'] = (message, data) => {
        if (shouldLog(state.level, 'error')) {
            console.error(state.prefix ? `[${state.prefix}] ${message}` : message, data ?? '');
        }
    };

    const setConfig: LoggerApi['setConfig'] = next => {
        state = { ...state, ...next };
    };

    return { debug, error, info, log, setConfig, warn };
}

let instance: LoggerApi | null = null;

export function getLogger(): LoggerApi {
    instance = instance ?? createLoggerInstance(defaultConfig);

    return instance;
}

export function createLogger(config?: Partial<LoggerConfig>): LoggerApi {
    return createLoggerInstance({ ...defaultConfig, ...config });
}
