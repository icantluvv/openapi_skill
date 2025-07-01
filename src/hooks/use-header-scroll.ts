import { useEffect } from 'react';

import { useHeaderStore } from '@/store/header-store';

export const useHeaderScroll = () => {
    const setIsScroll = useHeaderStore(state => state.setIsScroll);

    useEffect(() => {
        function handleScroll() {
            setIsScroll(window.scrollY > 100);
        }

        function checkWidthAndBind() {
            if (window.innerWidth >= 1280) {
                window.addEventListener('scroll', handleScroll);
                handleScroll();
            } else {
                setIsScroll(false);
            }
        }

        checkWidthAndBind();

        function handleResize() {
            window.removeEventListener('scroll', handleScroll);
            checkWidthAndBind();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsScroll]);
};
