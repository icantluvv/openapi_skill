'use client';
import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

import { useCart } from '@/store/cart-store';

const DEFAULT_OPTION: Option = {
    price: 0,
    size: 0,
};

function CardSizePicker({ product }: ProductProps) {
    const [selectedSize, setSelectedSize] = useState<Option>(product.options[0] ?? DEFAULT_OPTION);

    const handleSizeChange = (option: Option) => () => {
        setSelectedSize(option);
    };

    const { addCart } = useCart();

    function addToCart() {
        const CartItem = {
            product,
            quantity: 1,
        };

        addCart(CartItem);
    }

    return (
        <>
            <div className="flex w-[90%] rounded-sm bg-light-gray p-[2px]">
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

            <Typography center className="mt-[7px] text-[20px] font-bold" variant={'custom'}>
                от {selectedSize.price} руб.
            </Typography>

            <Button
                className="mt-[12px] w-[120px] py-[4px] md:w-full md:py-[14px]"
                onClick={addToCart}
                variant="primary"
            >
                Заказать
            </Button>
        </>
    );
}

export default CardSizePicker;
