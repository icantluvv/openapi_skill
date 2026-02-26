'use client';

import { Typography } from '@repo/core/typography';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import type { DeepNonNullable } from '@/types/utilities';
import type { Category, Option, Product } from '~/lib/models/types';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';
import CategoryImages from '@/_shared/catalog/card/category-images';

import { DEFAULT_OPTION, type PizzaSize, sizeToCssClass } from './constant';

type CardProps = {
    categories: Category[];
    product: Product;
};

const cardAnimate = { opacity: 1, rotateY: 0 };
const cardExit = {
    opacity: 0,
    rotateY: 180,
    transition: { duration: 0.6, ease: 'easeInOut' },
};
const cardStyle = { originX: 0.5, originY: 0.5, perspective: 1000 };

function Card({ categories, product }: DeepNonNullable<CardProps>) {
    const [isHovered, setIsHovered] = useState(false);

    const { description, image, options, title } = product;

    const initialOption: Option = options[0] ?? DEFAULT_OPTION;
    const [selectedOption, setSelectedOption] = useState<Option>(initialOption);

    function handleMouse() {
        setIsHovered(!isHovered);
    }

    return (
        <motion.li
            animate={cardAnimate}
            className="shadow-custom relative flex rounded-sm p-[2px] md:flex-col md:items-center md:p-[10px] md:pb-[40px] xl:p-[20px] xl:pb-[40px]"
            exit={cardExit}
            initial={false}
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
            style={cardStyle}
        >
            <CategoryImages categories={categories} isHovered={isHovered} />

            <div className="relative mr-[5px] mt-[8px] flex h-[100px] w-[100px] min-w-[100px] items-center justify-center md:mr-0 md:h-[210px] md:w-[210px] xl:h-[228px] xl:w-[228px]">
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
                    <Image alt={title} className="rounded-full object-contain" fill src={image} />
                </div>
            </div>

            <div className="my-[22px] flex flex-col gap-[4px] md:my-0 md:flex-1 md:justify-between md:gap-[8px] md:px-[10px] xl:gap-[9px]">
                <div className="flex flex-col xl:gap-[4px]">
                    <Typography
                        className={`${isHovered ? 'text-primary cursor-pointer' : 'text-black'} md:text-center`}
                        variant="h4"
                    >
                        {title}
                    </Typography>

                    <div className="">
                        <Typography
                            className="font-roboto text-shadow-text pr-[3.5px] text-[11px] md:text-center md:text-[12px]"
                            variant="custom"
                        >
                            {description}
                        </Typography>
                    </div>
                </div>

                <CardSizePicker
                    categories={categories}
                    product={product}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            </div>
        </motion.li>
    );
}

export default Card;
