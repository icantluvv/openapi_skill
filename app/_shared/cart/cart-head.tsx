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
        <div className="flex items-center justify-between xl:h-[40px]">
            <Typography variant="h3">Ваш заказ</Typography>
            <Button className={'hover:opacity-75 active:opacity-50'} onClick={handleCloseCart}>
                <Image
                    alt="Закрыть"
                    height={40}
                    sizes="(max-width: 768px) 25px, 40px"
                    src="/images/svg/close-black.svg"
                    width={40}
                />
            </Button>
        </div>
    );
}

export default CartHead;
