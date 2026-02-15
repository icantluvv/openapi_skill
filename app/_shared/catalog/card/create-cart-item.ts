import type { CartItemType } from '~/app/store/cart-store';
import type { Option, Product } from '~/lib/models/types';

export function createCartItem(
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
