'use client';

import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

import type { DeepNonNullable } from '@/types/utilities';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';
import CategoryImages from '@/_shared/catalog/card/category-images';

type CardProps = {
    categories: Category[];
    product: Product;
};

type PizzaSize = 20 | 30 | 40;

const DEFAULT_OPTION: Option = { price: 0, size: 20 };

const sizeToCssClass: Record<PizzaSize, string> = {
    20: 'w-[60px] md:w-[140px] xl:w-[150px] h-[60px] md:h-[140px] xl:h-[150px]',
    30: 'w-[73px] md:w-[155px] xl:w-[180px] h-[73px] md:h-[155px] xl:h-[180px]',
    40: 'w-[85px] md:w-[180px] xl:w-[200px] h-[85px] md:h-[190px] xl:h-[210px]',
};

function Card({ categories, product }: DeepNonNullable<CardProps>) {
    const [isHovered, setIsHovered] = useState(false);

    const [selectedOption, setSelectedOption] = useState<Option>(
        product.options[0] ?? DEFAULT_OPTION
    );

    function handleMouse() {
        setIsHovered(!isHovered);
    }

    return (
        <li
            className="relative flex rounded-sm p-[4px] shadow-custom md:flex-col md:items-center md:p-[10px] md:pb-[40px] xl:p-[20px] xl:pb-[40px]"
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
        >
            <CategoryImages categories={categories} isHovered={isHovered} />

            <div className="relative mr-[10px] flex h-[100px] w-[100px] min-w-[100px] items-center justify-center md:mr-0 md:h-[215px] md:w-[215px] xl:h-[240px] xl:w-[240px]">
                <Image
                    alt="pizza-background"
                    className={'w-[85px] md:w-[180px] xl:w-[200px]'}
                    height={220}
                    src="/images/svg/pizza_back.svg"
                    width={220}
                />
                <div
                    className={`absolute transition-all duration-[.3s] ${sizeToCssClass[selectedOption.size as PizzaSize]}`}
                >
                    <Image
                        alt={product.title}
                        className="rounded-full object-contain"
                        fill
                        src={product.image}
                    />
                </div>
            </div>

            <div className="my-[22px] flex flex-col gap-[4px] md:my-0 md:flex-1 md:justify-between md:gap-[8px] md:px-[10px]">
                <div className="flex flex-col gap-[4px]">
                    <Typography
                        className={`${isHovered ? 'cursor-pointer text-primary' : 'text-black'} md:text-center`}
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

                <CardSizePicker
                    categories={categories}
                    product={product}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            </div>
        </li>
    );
}

export default Card;
