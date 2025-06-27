import { Button } from '@repo/core/button';
import Image from 'next/image';

import type { DeepNonNullable } from '@/types/utilities';

function MobileSortBar({ categories }: DeepNonNullable<CategoryProps>) {
    return (
        <div
            className={
                'mt-[24px] flex items-center justify-center gap-[28px] md:hidden xl:mt-[55px]'
            }
        >
            {categories.map(category => (
                <Button className="w-[24px]" form={'default'} key={category.id} variant="default">
                    <Image alt={'all-pizzas'} height={24} src={category.image} width={24}></Image>
                </Button>
            ))}
        </div>
    );
}

export default MobileSortBar;
