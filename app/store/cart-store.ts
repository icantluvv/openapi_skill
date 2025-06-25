import { create } from 'zustand';

type CartItem = {
    product: Product;
    quantity: number;
};

type CartState = {
    addCart: (item: CartItem) => void;
    cart: CartItem[];
    count: number;
    removeCart: (id: number) => void;
};

export const useCart = create<CartState>(set => ({
    addCart: item => {
        set(state => {
            const existingItem = state.cart.find(
                cartItem => cartItem.product.id === item.product.id
            );

            if (existingItem) {
                return {
                    cart: state.cart.map(cartItem =>
                        cartItem.product.id === item.product.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                    count: state.count + 1,
                };
            }

            return {
                cart: [...state.cart, { ...item, quantity: 1 }],
                count: state.count + 1,
            };
        });
    },
    cart: [],

    count: 0,

    removeCart: id => {
        set(state => {
            const existingItem = state.cart.find(item => item.product.id === id);

            if (existingItem && existingItem.quantity > 1) {
                return {
                    cart: state.cart.map(cartItem =>
                        cartItem.product.id === id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    ),
                    count: state.count - 1,
                };
            }

            return {
                cart: state.cart.filter(item => item.product.id !== id),
                count: state.count - 1,
            };
        });
    },
}));
