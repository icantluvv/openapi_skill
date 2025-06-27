'use client';

import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';

function Card({ product }: ProductProps) {
    const [hoveredCard, setHoveredCard] = useState<null | number>(null);
    const categoryName: string = product.categories[1] ?? '';

    function handleMouseEnter() {
        setHoveredCard(product.id);
    }

    function handleMouseLeave() {
        setHoveredCard(null);
    }

    return (
        <li
            className="relative flex rounded-sm p-[4px] shadow-custom md:flex-col md:items-center md:p-[10px] md:pb-[40px] xl:p-[20px] xl:pb-[40px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {Boolean(categoryName) && (
                <Image
                    alt="category"
                    className={`absolute top-5 left-5 z-[10] transition-all duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`}
                    height={24}
                    src={`/images/svg/mobile-sortbar/${categoryName}.svg`}
                    width={24}
                />
            )}

            <div className="relative flex h-[100px] min-w-[100px] md:h-[220px] md:min-w-[220px] xl:h-[240px] xl:w-[240px] xl:min-w-[240px]">
                <Image alt={product.title} className="object-cover" fill src={product.image} />
            </div>

            <div className="my-[22px] flex flex-col gap-[4px] md:my-0 md:flex-1 md:justify-between md:gap-[8px] md:px-[10px]">
                <div className="flex flex-col gap-[4px]">
                    <Typography className="md:text-center" variant="h4">
                        {product.title}
                    </Typography>
                    <Typography
                        className="font-roboto text-[11px] text-shadow-text md:text-center md:text-[12px]"
                        variant="custom"
                    >
                        {product.description}
                    </Typography>
                </div>

                <CardSizePicker product={product} />
            </div>
        </li>
    );
}

export default Card;
