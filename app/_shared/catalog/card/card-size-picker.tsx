import { Typography } from '@repo/core/typography';

import BuyButton from '@/_shared/catalog/card/buy-button';
import { type CartItemType, useCartStore } from '@/store/cart-store';

import SizeOptionButton from './size-option-button';

type ProductProps = {
    categories: Category[];
    product: Product;
    selectedOption: Option;
    setSelectedOption: (option: Option) => void;
};

function createCartItem(
    product: Product,
    selectedOption: Option,
    categoryImage: string
): CartItemType {
    return {
        cartItemId: `${product.id.toString()}_${selectedOption.size.toString()}`,
        categoryImage,
        id: product.id,
        image: product.image,
        price: selectedOption.price,
        quantity: 1,
        size: selectedOption.size,
        title: product.title,
    };
}

function CardSizePicker({ categories, product, selectedOption, setSelectedOption }: ProductProps) {
    const { addItem } = useCartStore();

    const categoryImage = categories[1]?.image ?? '';

    function addToCart() {
        const cartItem = createCartItem(product, selectedOption, categoryImage);

        addItem(cartItem);
    }

    return (
        <div className="flex flex-col gap-[12px] md:items-center xl:gap-[4px]">
            <div className={'flex w-full flex-col items-start gap-[4px] md:items-center'}>
                <div className={'w-full'}>
                    <Typography className="text-start md:text-center" variant="description">
                        Размер, см
                    </Typography>
                </div>

                <div className="flex w-[90%] rounded-sm bg-light-gray p-[2px] xl:max-w-[182px]">
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
