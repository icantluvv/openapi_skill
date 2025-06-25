import { create } from 'zustand';

type OpenCartStore = {
    setShowCart: () => void;
    showCart: boolean;
};

const useCartStore = create<OpenCartStore>(set => ({
    setShowCart: () => {
        set(state => ({ showCart: !state.showCart }));
    },
    showCart: false,
}));

export default useCartStore;
