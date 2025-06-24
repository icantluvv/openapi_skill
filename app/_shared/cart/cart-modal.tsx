'use client';

import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';

import useCartStore from '@/store/cart-store';

function CartModal() {
    const { setShowCart, showCart } = useCartStore();

    function handleCloseCart() {
        setShowCart();
    }

    return (
        <>
            {Boolean(showCart) && (
                <div className="fixed z-[9999] flex size-full items-center justify-center bg-black/90">
                    <div className="flex flex-col gap-[24px] bg-background p-[30px]">
                        <Typography center variant={'h3'}>
                            Ваш заказ
                        </Typography>
                        <Button onClick={handleCloseCart}>X</Button>
                        <div className="h-[352px] w-[148px]"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartModal;
