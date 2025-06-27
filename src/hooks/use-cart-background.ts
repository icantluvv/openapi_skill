import { useEffect } from 'react';

import { useCartStore } from '@/store/cart/cart-store';

export const useCartBackground = () => {
    const { showCart } = useCartStore();

    useEffect(() => {
        document.body.style.overflow = showCart ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [showCart]);
};
