'use client';

import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

type ProductProps = {
    product: Product;
};

function Card({ product }: ProductProps) {
    const [selectedSize, setSelectedSize] = useState<null | Option>(product.options[0] ?? null);

    const handleSizeChange = (option: Option) => () => {
        setSelectedSize(option);
    };

    return (
        <li className="flex gap-[4px] p-[4px] shadow-custom">
            <div className="relative flex h-[100px] min-w-[100px]">
                <Image alt={product.title} fill objectFit="cover" src={product.image} />
            </div>

            <div className="my-[18px] flex flex-col gap-[4px]">
                <div className="">
                    <Typography className="md:text-center" variant="h4">
                        {product.title}
                    </Typography>
                    <Typography className="text-shadow-text md:text-center" variant="description">
                        {product.description}
                    </Typography>
                </div>

                <Typography className="md:text-center" variant="description">
                    Размер, см
                </Typography>

                <div className="flex w-[90%] rounded-sm bg-light-gray p-[2px]">
                    {product.options.map(option => (
                        <Button
                            className={`flex-1 rounded-xs py-[5px] ${
                                selectedSize && selectedSize.size === option.size ? 'bg-white' : ''
                            }`}
                            form="default"
                            key={option.size}
                            onClick={handleSizeChange(option)}
                            variant="default"
                        >
                            <Typography
                                className={
                                    selectedSize && selectedSize.size === option.size
                                        ? ''
                                        : 'text-shadow-text'
                                }
                                variant="description"
                            >
                                {option.size}
                            </Typography>
                        </Button>
                    ))}
                </div>

                <div className={'hidden md:block'}>
                    {selectedSize ? (
                        <Typography center variant="h4">
                            от {selectedSize.price} руб.
                        </Typography>
                    ) : (
                        <Typography center variant="h4">
                            Размер не выбран
                        </Typography>
                    )}
                </div>

                <Button className="py-[14px]" variant="primary">
                    Заказать
                </Button>
            </div>
        </li>
    );
}

export default Card;
