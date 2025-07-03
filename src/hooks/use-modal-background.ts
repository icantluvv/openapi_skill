import { useEffect } from 'react';

import { useCartStore } from '@/store/cart-store';
import useMobileNavStore from '@/store/mobile-nav-store';

export const useModalBackground = () => {
    const { showCart } = useCartStore();
    const { showMobileNav } = useMobileNavStore();

    useEffect(() => {
        document.body.style.overflow = showCart || showMobileNav ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [showCart, showMobileNav]);
};
