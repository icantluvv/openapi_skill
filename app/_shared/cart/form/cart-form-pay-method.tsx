import { Button } from '@repo/core/button';
import { Checkbox } from '@repo/core/checkbox';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

import { useCartStore } from '@/store/cart/cart-store';
import { useOrderFormStore } from '@/store/order-form-store';

function CartFormPayMethod() {
    const [payMethod, setPayMethod] = useState<null | number>(null);

    const { items } = useCartStore();

    const chooseMethod = (id: number) => () => {
        setPayMethod(payMethod === id ? null : id); // Toggle if clicking the same one
    };

    const { fillForm } = useOrderFormStore();

    return (
        <>
            <div className="flex flex-col gap-[8px]">
                <Typography
                    className={'font-alegreya text-[18px] font-extrabold'}
                    variant={'custom'}
                >
                    Способ оплаты
                </Typography>

                <div className="flex items-center gap-[8px]">
                    <Checkbox checked={payMethod === 0} onClick={chooseMethod(0)} />
                    <Typography
                        className={'font-roboto text-[14px] xl:text-[16px]'}
                        variant={'custom'}
                    >
                        Оплата наличными или картой курьеру
                    </Typography>
                </div>

                <div className="flex items-center gap-[8px]">
                    <Checkbox checked={payMethod === 1} onClick={chooseMethod(1)} />
                    <Typography
                        className={'font-roboto text-[14px] xl:text-[16px]'}
                        variant={'custom'}
                    >
                        Оплата картой онлайн на сайте
                    </Typography>
                </div>
            </div>

            <div className={'md:max-w-[40vw] xl:max-w-[12.5vw]'}>
                <Button
                    className="w-full py-3"
                    type={
                        payMethod === null || !fillForm || items.length === 0 ? 'button' : 'submit'
                    }
                    variant={
                        payMethod === null || !fillForm || items.length === 0
                            ? 'disable'
                            : 'primary'
                    }
                >
                    Оформить заказ
                </Button>
            </div>
        </>
    );
}

export default CartFormPayMethod;
