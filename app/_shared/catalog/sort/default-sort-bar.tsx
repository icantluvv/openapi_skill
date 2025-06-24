'use client';
import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import { useState } from 'react';

function DefaultSortBar({ categories }: CategoryProps) {
    const [chooseCategory, setChooseCategory] = useState<number>(0);

    const [mouseEnter, setMouseEnter] = useState<number>();

    function setCategory(categoryId: number) {
        setChooseCategory(categoryId);
    }

    const handleMouseEnter = (id: number) => () => {
        setMouseEnter(id);
    };

    return (
        <div
            className={
                'mt-[24px] hidden items-center justify-center gap-[40px] md:flex xl:mt-[55px]'
            }
        >
            {categories?.map(category => (
                <Button
                    form={'text'}
                    key={category.id}
                    /* eslint-disable-next-line react-perf/jsx-no-new-function-as-prop */
                    onClick={() => {
                        setCategory(category.id);
                    }}
                    onMouseEnter={handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseEnter(0)}
                >
                    <Typography
                        className={`${chooseCategory === category.id ? 'text-primary' : 'text-black'} hover:text-primary-hover active:text-primary-active`}
                        variant={'custom'}
                    >
                        {category.title}
                    </Typography>
                    <Image
                        alt={category.title}
                        className={`absolute hidden transition-all xl:block ${mouseEnter && category.id === mouseEnter ? 'translate-y-[-35px] opacity-100' : 'opacity-0'}`}
                        height={24}
                        src={category.image}
                        width={24}
                    ></Image>
                </Button>
            ))}
        </div>
    );
}

export default DefaultSortBar;
