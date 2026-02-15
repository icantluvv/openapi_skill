import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

import type { Category } from '~/api/models/types';

import { useSortStore } from '@/store/sort-bar-store';

type SortButtonProps = {
    category: Category;
};

function SortButton({ category }: SortButtonProps) {
    const { chooseCategory, chosenCategory } = useSortStore();
    const [mouseEnter, setMouseEnter] = useState<number>();

    function handleMouseEnter() {
        setMouseEnter(category.id);
    }

    function handleMouseLeave() {
        setMouseEnter(0);
    }

    function handleCategoryClick() {
        const newCategoryId = chosenCategory === category.id ? 0 : category.id;

        chooseCategory(newCategoryId);
    }

    return (
        <Button
            form={'text'}
            onClick={handleCategoryClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography
                className={`${chosenCategory === category.id ? 'text-primary' : 'text-black'} hover:text-primary-hover active:text-primary-active tracking-tight xl:tracking-wide`}
                variant={'custom'}
            >
                {category.title}
            </Typography>

            <Image
                alt={category.title}
                className={`absolute hidden transition-all xl:block ${
                    mouseEnter && category.id === mouseEnter
                        ? 'translate-y-[-35px] ' + 'opacity-100'
                        : 'opacity-0'
                }`}
                height={24}
                src={category.image}
                width={24}
            ></Image>
        </Button>
    );
}

export default SortButton;
