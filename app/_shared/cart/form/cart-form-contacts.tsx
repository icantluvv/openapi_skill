import type { ChangeEvent } from 'react';

import { Input } from '@repo/core/input';
import { Typography } from '@repo/core/typography';

import { useOrderFormStore } from '@/store/order-form-store';

const changeData = (setter: (value: string) => void) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };
};

function CartFormContacts() {
    const { address, name, phone, setAddress, setName, setPhone } = useOrderFormStore();

    return (
        <div className={'flex flex-col gap-[8px]'}>
            <Typography className={'font-alegreya text-[18px] font-extrabold'} variant={'custom'}>
                Контакты
            </Typography>

            <div className={'flex w-full gap-[12px] xl:gap-[32px]'}>
                <Input
                    onChange={changeData(setName)}
                    placeholder={'Ваше имя'}
                    required
                    value={name}
                />
                <Input
                    onChange={changeData(setPhone)}
                    placeholder={'Телефон'}
                    required
                    value={phone}
                />
            </div>

            <Input
                className="mt-[8px] xl:mt-[12px]"
                onChange={changeData(setAddress)}
                placeholder={'Адрес доставки'}
                required
                value={address}
            />
        </div>
    );
}

export default CartFormContacts;
