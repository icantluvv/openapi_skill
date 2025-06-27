'use client';

import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';

function Card({ product }: ProductProps) {
    const [hoveredCard, setHoveredCard] = useState<null | number>(null);
    const categoryName = product.categories[1] ?? '';

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
                <div className="absolute top-2 left-2 h-[12px] w-[12px] md:top-5 md:left-5 md:h-[20px] md:w-[20px] xl:h-[24px] xl:w-[24px]">
                    <Image
                        alt="category"
                        className={`z-[10] transition-all duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-100 xl:opacity-0'}`}
                        layout="fill"
                        src={`/images/svg/mobile-sortbar/${categoryName}.svg`}
                    />
                </div>
            )}

            <div className="relative flex h-[100px] min-w-[100px] md:h-[220px] md:min-w-[220px] xl:h-[240px] xl:w-[240px] xl:min-w-[240px]">
                <Image alt={product.title} className="object-cover" fill src={product.image} />
            </div>

            <div className="my-[22px] flex flex-col gap-[4px] md:my-0 md:flex-1 md:justify-between md:gap-[8px] md:px-[10px]">
                <div className="flex flex-col gap-[4px]">
                    <Typography
                        className={` ${hoveredCard === product.id ? 'text-primary' : 'text-black'} md:text-center`}
                        variant="h4"
                    >
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
