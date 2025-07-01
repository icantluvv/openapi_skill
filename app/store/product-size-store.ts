import { create } from 'zustand';

type SelectedSizeStore = {
    selectedSizes: Record<number, Option>; // productId -> Option (price, size)
    setSelectedSize: (productId: number, option: Option) => void;
};

export const useProductSizeStore = create<SelectedSizeStore>(set => ({
    selectedSizes: {},
    setSelectedSize: (productId, option) => {
        set(state => ({
            selectedSizes: {
                ...state.selectedSizes,
                [productId]: option,
            },
        }));
    },
}));
