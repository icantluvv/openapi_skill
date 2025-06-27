import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            addItem: item => {
                const existingItem = get().items.find(
                    index => index.id === item.id && index.size === item.size
                );
                const newItems = existingItem
                    ? get().items.map(index =>
                          index.id === item.id
                              ? { ...index, quantity: index.quantity + item.quantity }
                              : index
                      )
                    : [...get().items, item];

                const totalPrice = newItems.reduce(
                    (accumulator, index) => accumulator + index.price * index.quantity,
                    0
                );

                set({ items: newItems, totalPrice });
            },
            clearCart: () => {
                set({ items: [], totalPrice: 0 });
            },
            items: [],

            removeItem: cartItemId => {
                const newItems = get().items.filter(index => index.cartItemId !== cartItemId);
                const totalPrice = newItems.reduce(
                    (accumulator, index) => accumulator + index.price * index.quantity,
                    0
                );

                set({ items: newItems, totalPrice });
            },

            setShowCart: () => {
                set(state => ({ showCart: !state.showCart }));
            },

            showCart: false,

            totalPrice: 0,

            updateQuantity: (cartItemId: string, quantity) => {
                const newItems = get().items.map(index =>
                    index.cartItemId === cartItemId ? { ...index, quantity } : index
                );

                const totalPrice = newItems.reduce(
                    (accumulator, index) => accumulator + index.price * index.quantity,
                    0
                );

                set({ items: newItems, totalPrice });
            },
        }),
        {
            name: 'cart-storage', // ключ в localStorage
        }
    )
);
