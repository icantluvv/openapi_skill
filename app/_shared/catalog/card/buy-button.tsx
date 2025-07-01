import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

type BuyButtonProps = {
    action: () => void;
    price: number;
};

function BuyButton({ action, price }: BuyButtonProps) {
    const [isDisabled, setIsDisabled] = useState(false);

    function clickButton() {
        if (isDisabled) {
            return;
        }

        setIsDisabled(true);
        action();

        setTimeout(() => {
            setIsDisabled(false);
        }, 1000);
    }

    return (
        <Button
            className="mt-[8px] w-[120px] py-[4px] md:mt-0 md:w-full md:py-[8px] xl:py-[13px]"
            onClick={clickButton}
            variant={isDisabled ? 'disable' : 'primary'}
        >
            <Typography className={'md:hidden'} variant={'accent'}>
                {isDisabled ? 'Добавление' : `от ${price.toString()} руб.`}
            </Typography>
            <Typography className={'hidden text-[16px] md:block xl:text-[18px]'} variant={'custom'}>
                ЗАКАЗАТЬ
            </Typography>
        </Button>
    );
}

export default BuyButton;
