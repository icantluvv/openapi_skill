import type { CartItemType } from '~/app/store/cart-store';

const DUPLICATE_DISCOUNT = 0.9;

function itemTotalWithDiscount(item: CartItemType): number {
    const baseTotal = item.price * item.quantity;

    return item.quantity >= 2 ? baseTotal * DUPLICATE_DISCOUNT : baseTotal;
}

export function updateTotalPrice(items: CartItemType[]) {
    return items.reduce((accumulator, item) => accumulator + itemTotalWithDiscount(item), 0);
}

export function addItemToCart(items: CartItemType[], newItem: CartItemType): CartItemType[] {
    const existingItem = items.find(item => item.id === newItem.id && item.size === newItem.size);

    if (existingItem) {
        return items.map(item =>
            item.id === newItem.id && item.size === newItem.size
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
        );
    }

    return [...items, newItem];
}

export function removeItemFromCart(items: CartItemType[], cartItemId: string): CartItemType[] {
    return items.filter(item => item.cartItemId !== cartItemId);
}

export function updateItemQuantity(
    items: CartItemType[],
    cartItemId: string,
    quantity: number
): CartItemType[] {
    return items.map(item => (item.cartItemId === cartItemId ? { ...item, quantity } : item));
}
