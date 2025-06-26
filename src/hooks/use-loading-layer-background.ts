'use client';

import { useEffect, useState } from 'react';

export const useLoadingLayerBackground = (duration = 1000) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Блокируем скролл
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Разблокируем скролл после завершения
            document.body.style.overflow = '';
            document.body.style.position = '';
        }, duration);

        return () => {
            clearTimeout(timer);
            // На всякий случай разблокируем при размонтировании
            document.body.style.overflow = '';
            document.body.style.position = '';
        };
    }, [duration]);

    return isLoading;
};
