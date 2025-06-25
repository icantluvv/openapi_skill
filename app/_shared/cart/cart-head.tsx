import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import useCartStore from '@/store/open-cart-store';

function CartHead() {
    const { setShowCart } = useCartStore();

    function handleCloseCart() {
        setShowCart();
    }

    return (
        <div className="flex h-[40px] items-center justify-between">
            <Typography variant="h3">Ваш заказ</Typography>
            <Button className={'hover:opacity-75 active:opacity-50'} onClick={handleCloseCart}>
                <Image alt="Закрыть" height={40} src="/images/svg/close-black.svg" width={40} />
            </Button>
        </div>
    );
}

export default CartHead;
