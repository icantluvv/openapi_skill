'use client';

import { useCallback, useRef, useState } from 'react';

import type { Promo as PromoType } from '~/lib/models/types';

import Promo from '@/_shared/promo/promo';

type MobileSliderProps = {
    items: PromoType[];
};

function MobileSlider({ items }: MobileSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const list: PromoType[] = Array.isArray(items) ? items : [];

    const handleScroll = useCallback(() => {
        if (!containerRef.current) {
            return;
        }

        const { clientWidth, scrollLeft } = containerRef.current;
        const newIndex = Math.round(scrollLeft / clientWidth);

        setCurrentIndex(newIndex);
    }, []);

    return (
        <div className="relative md:hidden">
            <div
                className="no-scrollbar container flex w-full snap-x snap-mandatory gap-[5vw] overflow-x-auto"
                onScroll={handleScroll}
                ref={containerRef}
            >
                {list.map((item, index) => (
                    <div className="w-full flex-none snap-center" data-index={index} key={item.id}>
                        <Promo description={item.description} src={item.image} title={item.title} />
                    </div>
                ))}
            </div>

            <div className="mt-[20px] flex justify-center gap-2">
                {list.map((item, index) => (
                    <div
                        className={`h-[12px] w-[12px] rounded-full transition-colors ${
                            currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default MobileSlider;
