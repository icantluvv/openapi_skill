import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

import { useCartStore } from '@/store/cart/cart-store';

const DEFAULT_OPTION: Option = {
    price: 0,
    size: 0,
};

function CardSizePicker({ product }: ProductProps) {
    const [selectedSize, setSelectedSize] = useState<Option>(product.options[0] ?? DEFAULT_OPTION);

    const handleSizeChange = (option: Option) => () => {
        setSelectedSize(option);
    };

    const { addItem } = useCartStore();

    function addToCart() {
        const CartItem = {
            cartItemId: `${product.id.toString()}_${selectedSize.size.toString()}`,
            id: product.id,
            image: product.image,
            price: selectedSize.price,
            quantity: 1,
            size: selectedSize.size,
            title: product.title,
        };

        addItem(CartItem);
    }

    return (
        <div className={'flex flex-col gap-[4px] md:items-center'}>
            <Typography className="md:text-center" variant="description">
                Размер, см
            </Typography>

            <div className="flex w-[90%] rounded-sm bg-light-gray p-[2px] xl:max-w-[182px]">
                {product.options.map(option => (
                    <Button
                        className={`flex-1 rounded-xs py-[5px] ${
                            selectedSize.size === option.size ? 'bg-white' : ''
                        }`}
                        form="default"
                        key={option.size}
                        onClick={handleSizeChange(option)}
                        variant="default"
                    >
                        <Typography
                            className={selectedSize.size === option.size ? '' : 'text-shadow-text'}
                            variant="description"
                        >
                            {option.size}
                        </Typography>
                    </Button>
                ))}
            </div>

            <Typography center className="hidden text-[24px] font-bold md:block" variant={'custom'}>
                от {selectedSize.price} руб.
            </Typography>

            <Button
                className="w-[120px] py-[4px] md:w-full md:py-[8px] xl:py-[13px]"
                onClick={addToCart}
                variant="primary"
            >
                <Typography className={'md:hidden'} variant={'accent'}>
                    от {selectedSize.price} руб.
                </Typography>
                <Typography className={'hidden text-[18px] md:block'} variant={'custom'}>
                    ЗАКАЗАТЬ
                </Typography>
            </Button>
        </div>
    );
}

export default CardSizePicker;
