import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import { useCartStore } from '@/store/cart-store';

function CartHead() {
    const { setShowCart } = useCartStore();

    function handleCloseCart() {
        setShowCart();
    }

    return (
        <div className="flex items-center justify-between">
            <Typography variant="h3">Ваш заказ</Typography>

            <div className="absolute right-[10px] top-[10px] xl:right-[20px] xl:top-[20px]">
                <Button
                    className={
                        'relative h-[25px] w-[25px] hover:opacity-75 active:opacity-50 xl:h-[40px] xl:w-[40px]'
                    }
                    onClick={handleCloseCart}
                >
                    <Image
                        alt="Закрыть"
                        fill
                        objectFit={'cover'}
                        src="/images/svg/cart/closeblack.svg"
                    />
                </Button>
            </div>
        </div>
    );
}

export default CartHead;
