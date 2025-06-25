import { Typography } from '@repo/core/typography';

import AddRemoveButtonItem from '@/_shared/cart/item-list/add-remove-button-item';

function CounterCartitem() {
    return (
        <div className={'flex items-center gap-[67px]'}>
            <div className="flex items-center gap-[16px]">
                <AddRemoveButtonItem action={'minus'}></AddRemoveButtonItem>
                <div className={'rounded-sm border border-dark-gray px-[25px] py-[7px]'}>
                    <Typography className="text-[16px]" variant={'custom'}>
                        1
                    </Typography>
                </div>
                <AddRemoveButtonItem action={'plus'}></AddRemoveButtonItem>
            </div>
            <div className={'flex items-end gap-[6px]'}>
                <Typography variant={'h4'}>699 </Typography>
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

export default CounterCartitem;
