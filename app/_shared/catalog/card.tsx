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

    return (
        <li className="flex flex-row items-start justify-between rounded-sm p-[12px] pb-[24px] shadow-custom md:flex-col md:items-center md:justify-start md:p-[24px] md:pb-[48px]">
            <div className="relative h-[100px] w-[100px] min-w-[100px] xl:h-[240px] xl:w-[240px]">
                <Image alt={product.title} fill objectFit="cover" src={product.image} />
            </div>
            <div className="flex flex-col items-center gap-[7px]">
                <div className="flex min-h-[115px] flex-col gap-[7px]">
                    <Typography center variant="h4">
                        {product.title}
                    </Typography>
                    <Typography center variant="description">
                        {product.description}
                    </Typography>
                </div>

                <div className="flex gap-[5px] rounded-sm bg-light-gray p-[3px]">
                    {product.options.map(option => (
                        <Button
                            className={`rounded-xs px-[25px] py-[5px] ${
                                selectedSize && selectedSize.size === option.size ? 'bg-white' : ''
                            }`}
                            key={option.size}
                            /* eslint-disable-next-line react-perf/jsx-no-new-function-as-prop */
                            onClick={() => {
                                setSelectedSize(option);
                            }}
                        >
                            <Typography variant="p">{option.size}</Typography>
                        </Button>
                    ))}
                </div>

                <Typography center variant="description">
                    Размер, см
                </Typography>

                {selectedSize ? (
                    <Typography center variant="h4">
                        от {selectedSize.price} руб.
                    </Typography>
                ) : (
                    <Typography center variant="h4">
                        Размер не выбран
                    </Typography>
                )}

                <Button variant="primary">Заказать</Button>
            </div>
        </li>
    );
}

export default Card;
