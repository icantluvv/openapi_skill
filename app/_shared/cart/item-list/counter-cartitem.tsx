import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useCallback } from 'react';

import { type CartItemType, useCartStore } from '@/store/cart-store';

type CartItemProps = {
    item: CartItemType;
};

function CounterCartItem({ item }: CartItemProps) {
    const { updateQuantity } = useCartStore();

    const minusItem = useCallback(() => {
        if (item.quantity <= 1) {
            return;
        }

        updateQuantity(item.cartItemId, item.quantity - 1);
    }, [item.cartItemId, item.quantity, updateQuantity]);

    const plusItem = useCallback(() => {
        updateQuantity(item.cartItemId, item.quantity + 1);
    }, [item.cartItemId, item.quantity, updateQuantity]);

    return (
        <div className={'flex w-full justify-between xl:justify-start xl:gap-[54px]'}>
            <div className="flex items-center gap-[8px]">
                <Button
                    className={`h-[18px] w-[18px] xl:h-[24px] xl:w-[24px] ${item.quantity === 1 ? 'bg-light-gray' : 'bg-dark-gray'}`}
                    form={'circle'}
                    onClick={minusItem}
                >
                    <Image
                        alt={''}
                        height={12}
                        src={'/images/svg/cart/minus.svg'}
                        width={12}
                    ></Image>
                </Button>

                <div
                    className={
                        'rounded-sm border border-dark-gray px-[18px] py-[4px] xl:px-[25px] xl:py-[7px]'
                    }
                >
                    <Typography className="text-[16px]" variant={'custom'}>
                        {item.quantity}
                    </Typography>
                </div>

                <Button
                    className="h-[18px] w-[18px] bg-dark-gray xl:h-[24px] xl:w-[24px]"
                    form={'circle'}
                    onClick={plusItem}
                >
                    <Image
                        alt={''}
                        height={12}
                        src={'/images/svg/cart/plus.svg'}
                        width={12}
                    ></Image>
                </Button>
            </div>

            <div className={'mr-[25px] flex min-w-[100px] items-center justify-end gap-[6px]'}>
                <Typography variant={'h4'}>{item.price * item.quantity} </Typography>
                <Typography
                    className={'font-alegreya text-[18px] font-extrabold'}
                    variant={'custom'}
                >
                    руб
                </Typography>
            </div>
        </div>
    );
}

export default CounterCartItem;
