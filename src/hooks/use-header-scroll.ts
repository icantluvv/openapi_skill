import { useEffect } from 'react';

import { useHeaderStore } from '@/store/header-store';

export const useHeaderScroll = () => {
    const setIsScroll = useHeaderStore(state => state.setIsScroll);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsScroll]);
};
