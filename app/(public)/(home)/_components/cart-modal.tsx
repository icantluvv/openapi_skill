'use client';

import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useModalBackground } from '#/hooks/use-modal-background';

import CartHead from '@/_shared/cart/cart-head';
import CartForm from '@/_shared/cart/form/cart-form';
import CartItem from '@/_shared/cart/item-list/cart-item';
import { useCartStore } from '@/store/cart-store';

function CartModal() {
    const { items, setShowCart, showCart, totalPrice } = useCartStore();

    useModalBackground();
    if (!showCart) {
        return null;
    }

    function closeCart() {
        setShowCart();
    }

    return (
        <div className="no-scrollbar fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/90 pt-[calc(50px+env(safe-area-inset-top))] pb-[50px] xl:pt-[calc(100px+env(safe-area-inset-top))] xl:pb-[100px]">
            <Button className={'absolute z-[9000] size-full'} onClick={closeCart} />
            <div className="z-[10000] flex w-[90vw] flex-col gap-[20px] overflow-x-hidden overflow-y-auto bg-background px-[15px] py-[25] xl:w-full xl:max-w-[70vw] xl:gap-[35px] xl:px-[30px] xl:py-[50px] 2xl:max-w-[36.4vw]">
                <CartHead />

                <div className="flex flex-col gap-[8px]">
                    <div className="no-scrollbar max-h-[40vh] overflow-x-hidden overflow-y-auto border-y border-light-gray xl:max-h-[32.5vh]">
                        <div className="divide-y-1 divide-light-gray">
                            {items.map(item => (
                                <CartItem item={item} key={item.cartItemId} />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-end justify-end">
                        <Typography
                            className={
                                'font-alegreya mr-[20px] text-[16px] font-extrabold xl:text-[18px]'
                            }
                            variant="custom"
                        >
                            Сумма заказа
                        </Typography>
                        <Typography variant="h3">{totalPrice}</Typography>
                        <Typography
                            className={'font-alegreya text-[16px] font-extrabold xl:text-[18px]'}
                            variant="custom"
                        >
                            руб
                        </Typography>
                    </div>

                    <CartForm></CartForm>
                </div>

                <Typography className={'text-shadow-text'} variant={'description'}>
                    Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности
                </Typography>
            </div>
        </div>
    );
}

export default CartModal;
