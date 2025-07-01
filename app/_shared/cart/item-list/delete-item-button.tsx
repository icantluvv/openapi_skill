import { Button } from '@repo/core/button';
import Image from 'next/image';

import { useCartStore } from '@/store/cart-store';

type DeleteItemButtonProps = {
    cartItemId: string;
};

function DeleteItemButton({ cartItemId }: DeleteItemButtonProps) {
    const { removeItem } = useCartStore();

    function deleteItem() {
        removeItem(cartItemId);
    }

    return (
        <Button
            className={'absolute top-0 right-0 hover:opacity-75 active:opacity-50'}
            onClick={deleteItem}
        >
            <Image
                alt={'delete_cartitem'}
                height={24}
                src={'/images/cart/delete_cartitem.svg'}
                width={24}
            ></Image>
        </Button>
    );
}

export default DeleteItemButton;
