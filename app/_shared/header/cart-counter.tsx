import { Typography } from '@repo/core/typography';

import { useCartStore } from '@/store/cart-store';

function CartCounter() {
    const { items } = useCartStore();

    const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (totalItems === 0) {
        return null;
    }

    return (
        <div
            className={
                'absolute top-[-10px] right-[-10px] z-[1000] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary'
            }
        >
            <Typography
                className={'font-roboto text-[11px] text-primary-foreground'}
                variant={'custom'}
            >
                {totalItems > 99 ? '99+' : totalItems}
            </Typography>
        </div>
    );
}

export default CartCounter;
