'use client';

import type { ComponentProps, Ref } from 'react';

import { Typography } from '@repo/core/typography';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Image from 'next/image';

const featureVariants = cva('flex gap-[16px] md:items-center md:gap-[42px] xl:gap-[30px]', {
    defaultVariants: {
        align: 'left',
    },
    variants: {
        align: {
            left: 'flex-row',
            right: 'justify-start md:flex-row-reverse',
        },
    },
});

const IMAGE_PARALLAX_OFFSET = 100;

const imageVariants = {
    hidden: { opacity: 0, y: IMAGE_PARALLAX_OFFSET },
    visible: { opacity: 1, y: 0 },
};

type FeatureProps = {
    align?: 'left' | 'right';
    className?: string;
    description: string;
    index?: number;
    ref?: Ref<HTMLDivElement>;
    title: string;
    url: string;
} & ComponentProps<'div'>;

function Feature({
    align = 'left',
    className,
    description,
    index = 0,
    ref,
    title,
    url,
}: Readonly<FeatureProps>) {
    return (
        <div className={featureVariants({ align, className })} ref={ref}>
            <div className="w-[80px] min-w-[80px] overflow-visible md:w-[243px] md:min-w-[243px] xl:min-w-[304px]">
                <motion.div
                    initial="hidden"
                    transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                        ease: 'easeOut',
                    }}
                    variants={imageVariants}
                    viewport={{ amount: 0.2, once: false }}
                    whileInView="visible"
                >
                    <Image
                        alt={title}
                        className="object-cover"
                        height={304}
                        src={url}
                        width={304}
                    />
                </motion.div>
            </div>
            <div className="flex flex-col gap-[4px] md:mb-[4px] md:max-w-[370px] md:gap-[13px] xl:mb-[0px] xl:max-w-[416px]">
                <Typography
                    className={'leading-[25px] md:leading-[32px] xl:leading-[40px]'}
                    color="primary"
                    variant="h3"
                >
                    {title}
                </Typography>
                <Typography color="primary" variant="p">
                    {description}
                </Typography>
            </div>
        </div>
    );
}

export default Feature;
