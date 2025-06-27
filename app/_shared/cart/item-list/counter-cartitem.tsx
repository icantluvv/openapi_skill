import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { useCartStore } from '@/store/cart/cart-store';

function CounterCartItem({ item }: CartItemProps) {
    const [lastItem, setLastItem] = useState<boolean>(true);
    const { updateQuantity } = useCartStore();

    const minusItem = useCallback(() => {
        if (item.quantity <= 1) {
            return;
        }

        updateQuantity(item.cartItemId, item.quantity - 1);

        if (item.quantity === 2) {
            setLastItem(true);
        } else {
            setLastItem(false);
        }
    }, [item.cartItemId, item.quantity, updateQuantity]);

    const plusItem = useCallback(() => {
        updateQuantity(item.cartItemId, item.quantity + 1);
        setLastItem(false);
    }, [item.cartItemId, item.quantity, updateQuantity]);

    return (
        <div className={'flex w-full justify-between md:justify-start md:gap-[67px]'}>
            <div className="flex items-center gap-[16px]">
                <Button
                    className={`h-[24px] w-[24px] ${lastItem ? 'bg-light-gray' : 'bg-dark-gray'}`}
                    form={'circle'}
                    onClick={minusItem}
                >
                    <Image alt={''} height={12} src={'/images/cart/minus.svg'} width={12}></Image>
                </Button>

                <div className={'rounded-sm border border-dark-gray px-[25px] py-[7px]'}>
                    <Typography className="text-[16px]" variant={'custom'}>
                        {item.quantity}
                    </Typography>
                </div>

                <Button
                    className="h-[24px] w-[24px] bg-dark-gray"
                    form={'circle'}
                    onClick={plusItem}
                >
                    <Image alt={''} height={12} src={'/images/cart/plus.svg'} width={12}></Image>
                </Button>
            </div>

            <div className={'flex min-w-[100px] items-end justify-end gap-[6px]'}>
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
