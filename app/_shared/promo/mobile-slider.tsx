'use client';

import { useCallback, useRef, useState } from 'react';

import Promo from '@/_shared/promo/promo';

type MobileSliderProps = {
    items: Promo[];
};

function MobileSlider({ items }: MobileSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                {items.map((item, index) => (
                    <div className="w-full flex-none snap-center" data-index={index} key={item.id}>
                        <Promo description={item.description} src={item.image} title={item.title} />
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {items.map((item, index) => (
                    <div
                        className={`h-2 w-2 rounded-full transition-colors ${
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
