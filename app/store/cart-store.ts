import { create } from 'zustand';

type CartStore = {
    setShowCart: () => void;
    showCart: boolean;
};

const useCartStore = create<CartStore>(set => ({
    setShowCart: () => {
        set(state => ({ showCart: !state.showCart }));
    },
    showCart: false,
}));

export default useCartStore;
