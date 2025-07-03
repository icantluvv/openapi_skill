import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import type { CartItemType } from '@/store/cart-store';

import DeleteItemButton from '@/_shared/cart/item-list/delete-item-button';

import CounterCartitem from './counter-cartitem';

type CartItemProps = {
    item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
    return (
        <div className="relative grid grid-flow-row grid-cols-[2fr,1fr] gap-2 px-[4px] py-[12px] md:grid-flow-col md:items-center md:justify-between md:py-[7.5px] xl:gap-0 xl:px-[7px]">
            <div className="relative flex items-center">
                <Image
                    alt={'category'}
                    className={'absolute top-[5px] left-0 z-[1000]'}
                    height={12}
                    src={item.categoryImage}
                    width={12}
                ></Image>

                <div className={'flex h-[100px] w-[100px] items-center justify-center'}>
                    <div className="relative h-[78px] w-[78px] min-w-[78px]">
                        <Image alt={'pizza'} layout="fill" src={item.image}></Image>
                    </div>
                </div>

                <div className={'flex flex-col gap-[4px]'}>
                    <Typography
                        className="font-alegreya text-[18px] font-extrabold"
                        variant={'custom'}
                    >
                        {item.title}
                    </Typography>
                    <Typography variant={'description'}>{item.size} см</Typography>
                </div>
            </div>

            <CounterCartitem item={item} />

            <DeleteItemButton cartItemId={item.cartItemId} />
        </div>
    );
}

export default CartItem;
