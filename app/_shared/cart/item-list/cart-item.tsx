import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import DeleteItemButton from '@/_shared/cart/item-list/delete-item-button';

import CounterCartitem from './counter-cartitem';

function CartItem({ item }: CartItemProps) {
    return (
        <div className="relative grid grid-flow-row grid-cols-[2fr,1fr] grid-rows-[120px] py-[12px] pr-[10px] md:grid-flow-col md:items-center md:justify-between md:py-0 xl:pr-[30px]">
            <div className="relative flex min-w-0 items-center gap-[4px]">
                <Image
                    alt={'category'}
                    className={'absolute top-0 left-0 z-[1000]'}
                    height={12}
                    src={`/images/svg/mobile-sortbar/${item.categoryImage}.svg`}
                    width={12}
                ></Image>
                <div className="relative h-[100px] w-[100px]">
                    <Image alt={'pizza'} layout="fill" src={item.image}></Image>
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
