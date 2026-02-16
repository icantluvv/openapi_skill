'use client';

import { Typography } from '@repo/core/typography';
import { useMedia } from '#/hooks/use-responsive';
import { cva } from 'class-variance-authority';
import { motion, type MotionValue, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { type ComponentProps, type Ref, useMemo } from 'react';

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

const SEGMENT_BOUNDS: [number, number][] = [
    [0, 0.35],
    [0.2, 0.5],
    [0.4, 0.63],
];

type FeatureProps = {
    align?: 'left' | 'right';
    alt?: string;
    className?: string;
    count?: number;
    description: string;
    index?: number;
    ref?: Ref<HTMLDivElement>;
    scrollYProgress?: MotionValue<number>;
    title: string;
    url: string;
} & ComponentProps<'div'>;

function Feature({
    align = 'left',
    className,
    count = 1,
    description,
    index = 0,
    ref,
    scrollYProgress,
    title,
    url,
}: Readonly<FeatureProps>) {
    const isMobile = useMedia();
    const defaultProgress = useMotionValue(1);
    const progress = scrollYProgress ?? defaultProgress;
    const parallaxOffset = isMobile ? 0 : IMAGE_PARALLAX_OFFSET;
    const [segmentStart, segmentEnd] = SEGMENT_BOUNDS[index] ?? [
        index / count,
        (index + 1) / count,
    ];
    const segmentProgress = useTransform(progress, [0, segmentStart, segmentEnd, 1], [0, 0, 1, 1]);
    const imageY = useTransform(segmentProgress, [0, 1], [parallaxOffset, 0]);
    const imageStyle = useMemo(() => ({ y: imageY }), [imageY]);

    return (
        <div className={featureVariants({ align, className })} ref={ref}>
            <div className="w-[80px] min-w-[80px] md:w-[243px] md:min-w-[243px] xl:min-w-[304px]">
                <motion.div style={imageStyle}>
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
