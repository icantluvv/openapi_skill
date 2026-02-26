'use client';

import { useMedia } from '#/hooks/use-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type ParallaxProps = {
    children: ReactNode;
    className?: string;
    offset?: number;
};

export default function Parallax({ children, className = '', offset = 50 }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const gtLaptop = useMedia();
    const effectiveOffset = gtLaptop ? 0 : offset;

    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 0.5], [-effectiveOffset, 0]);

    return (
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        <motion.div className={className} ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
}
