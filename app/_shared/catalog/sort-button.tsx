import { Button } from '@repo/core/button';
import Image from 'next/image';

function SortButton() {
    return (
        <Button form={'default'} variant="default">
            <Image
                alt={'all-pizzas'}
                height={24}
                src={'/images/svg/mobile-sortbar/all.svg'}
                width={24}
            ></Image>
        </Button>
    );
}

export default SortButton;
