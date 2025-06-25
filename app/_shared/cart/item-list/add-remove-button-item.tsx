import { Button } from '@repo/core/button';
import Image from 'next/image';

type AddRemoveButtonItemProps = {
    action: string;
};

function AddRemoveButtonItem({ action }: AddRemoveButtonItemProps) {
    return (
        <Button className="h-[24px] w-[24px] bg-dark-gray" form={'circle'}>
            <Image
                alt={''}
                height={12}
                src={action === 'plus' ? '/images/cart/plus.svg' : '/images/cart/minus.svg'}
                width={12}
            ></Image>
        </Button>
    );
}

export default AddRemoveButtonItem;
