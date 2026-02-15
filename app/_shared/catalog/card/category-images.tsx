import Image from 'next/image';

import type { Category } from '~/lib/models/types';

function CategoryImages({ categories, isHovered }: { categories: Category[]; isHovered: boolean }) {
    return (
        <div className="absolute left-2 top-[14px] flex flex-col gap-2 md:left-3 md:top-3 md:h-[20px] md:w-[20px] xl:h-[24px] xl:w-[24px]">
            {categories.slice(1).map(category => (
                <div
                    className="relative h-[12px] min-h-[12px] w-[12px] md:h-[24px] md:min-h-[24px] md:w-[24px] xl:h-[24px] xl:min-h-[24px] xl:w-[24px]"
                    key={category.id}
                >
                    <Image
                        alt={category.title}
                        className={`z-[10] transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-100 xl:opacity-0'
                        }`}
                        layout="fill"
                        src={category.image}
                    />
                </div>
            ))}
        </div>
    );
}

export default CategoryImages;
