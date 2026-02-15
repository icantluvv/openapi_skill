import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    updateTotalPrice,
} from '~/src/utils/cart';

export type CartItemType = {
    cartItemId: string;
    categoryImage: string;
    id: number;
    image: string;
    price: number;
    quantity: number;
    size: number;
    title: string;
};

type CartStore = {
    addItem: (item: CartItemType) => void;
    clearCart: () => void;
    items: CartItemType[];
    removeItem: (cartItemId: string) => void;
    setShowCart: () => void;
    showCart: boolean;
    totalPrice: number;
    updateQuantity: (cartItemId: string, quantity: number) => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            addItem: item => {
                const newItems = addItemToCart(get().items, item);

                set({ items: newItems, totalPrice: updateTotalPrice(newItems) });
            },

            clearCart: () => {
                set({ items: [], totalPrice: 0 });
            },

            items: [],

            removeItem: cartItemId => {
                const newItems = removeItemFromCart(get().items, cartItemId);

                set({ items: newItems, totalPrice: updateTotalPrice(newItems) });
            },

            setShowCart: () => {
                set(state => ({ showCart: !state.showCart }));
            },

            showCart: false,

            totalPrice: 0,

            updateQuantity: (cartItemId, quantity) => {
                const newItems = updateItemQuantity(get().items, cartItemId, quantity);

                set({ items: newItems, totalPrice: updateTotalPrice(newItems) });
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
