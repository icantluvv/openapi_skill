import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import DeleteItemButton from '@/_shared/cart/item-list/delete-item-button';

import CounterCartitem from './counter-cartitem';

function CartItem() {
    return (
        <div className="relative grid grid-flow-row grid-cols-[2fr,1fr] grid-rows-[120px] py-[12px] pr-[10px] md:grid-flow-col md:items-center md:justify-between md:py-0 xl:pr-[30px]">
            <div className="flex min-w-0 items-center gap-[4px]">
                <div className="relative h-[100px] w-[100px]">
                    <Image alt={'pizza'} layout="fill" src={'/images/catalog/pizza1.png'}></Image>
                </div>
                <div className={'flex flex-col gap-[4px]'}>
                    <Typography
                        className="font-alegreya text-[18px] font-extrabold"
                        variant={'custom'}
                    >
                        Итальянская
                    </Typography>
                    <Typography variant={'description'}>30см</Typography>
                </div>
            </div>

            <CounterCartitem />

            <DeleteItemButton />
        </div>
    );
}

export default CartItem;
