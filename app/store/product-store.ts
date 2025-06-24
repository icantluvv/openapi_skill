import { create } from 'zustand';

type ProductStore = {
    chosenSize: number;
    product: Product;
    selectSize: (index: number) => void;
    setProduct: (product: Product) => void;
};

export const createProductStore = (initialProduct: Product) =>
    create<ProductStore>(set => ({
        chosenSize: 0,
        product: initialProduct,
        selectSize: index => {
            set({ chosenSize: index });
        },
        setProduct: product => {
            set({ product });
        },
    }));
