import { Input } from '@repo/core/input';
import { Typography } from '@repo/core/typography';

function CartFormContacts() {
    return (
        <div className={'flex flex-col gap-[8px]'}>
            <Typography className={'font-alegreya text-[18px] font-extrabold'} variant={'custom'}>
                Контакты
            </Typography>

            <div className={'flex w-full gap-[32px]'}>
                <Input placeholder={'Ваше имя'}></Input>
                <Input placeholder={'Телефон'}></Input>
            </div>

            <Input className="mt-[12px]" placeholder={'Адрес доставки'}></Input>
        </div>
    );
}

export default CartFormContacts;
