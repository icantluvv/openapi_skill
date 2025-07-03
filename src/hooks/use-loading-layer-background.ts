'use client';

import { useEffect, useState } from 'react';

export const useLoadingLayerBackground = (duration = 1000) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = '';
            document.body.style.position = '';
        }, duration);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
            document.body.style.position = '';
        };
    }, [duration]);

    return isLoading;
};
