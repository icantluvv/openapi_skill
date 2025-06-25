import { useEffect } from 'react';

import useCartStore from '@/store/open-cart-store';

export const useCartBackground = () => {
    const { showCart } = useCartStore();

    useEffect(() => {
        document.body.style.overflow = showCart ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [showCart]);
};
