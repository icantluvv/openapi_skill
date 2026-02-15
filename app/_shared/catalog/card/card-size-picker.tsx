import { toast } from '@repo/core/sonner';
import { Typography } from '@repo/core/typography';

import type { Category, Option, Product } from '~/lib/models/types';

import BuyButton from '@/_shared/catalog/card/buy-button';
import { useCartStore } from '@/store/cart-store';

import { DISCOUNT_TOAST_MESSAGE } from './constant';
import { createCartItem } from './create-cart-item';
import SizeOptionButton from './size-option-button';

type ProductProps = {
    categories: Category[];
    product: Product;
    selectedOption: Option;
    setSelectedOption: (option: Option) => void;
};

function CardSizePicker({ categories, product, selectedOption, setSelectedOption }: ProductProps) {
    const { addItem, items } = useCartStore();

    const categoryImage = categories[1]?.image ?? '';

    function addToCart() {
        const cartItem = createCartItem(product, selectedOption, categoryImage);
        const existingItem = items.find(
            item => item.id === cartItem.id && item.size === cartItem.size
        );
        const willBeDuplicate = Boolean(existingItem && existingItem.quantity === 1);

        addItem(cartItem);

        if (willBeDuplicate) {
            toast.success(DISCOUNT_TOAST_MESSAGE);
        }
    }

    return (
        <div className="flex flex-col gap-[12px] md:items-center xl:gap-[4px]">
            <div className={'flex w-full flex-col items-start gap-[4px] md:items-center'}>
                <div className={'w-full'}>
                    <Typography className="text-start md:text-center" variant="description">
                        Размер, см
                    </Typography>
                </div>

                <div className="bg-light-gray flex w-[90%] rounded-sm p-[2px] xl:max-w-[182px]">
                    {product.options.map(option => (
                        <SizeOptionButton
                            key={option.size}
                            onClick={setSelectedOption}
                            option={option}
                            selectedSize={selectedOption.size}
                        />
                    ))}
                </div>
            </div>

            <div className={'flex w-full flex-col gap-[11px] xl:gap-[10px]'}>
                <Typography
                    center
                    className="hidden text-[20px] font-bold md:block xl:text-[24px]"
                    variant="custom"
                >
                    от {selectedOption.price} руб.
                </Typography>

                <BuyButton action={addToCart} price={selectedOption.price} />
            </div>
        </div>
    );
}

export default CardSizePicker;
