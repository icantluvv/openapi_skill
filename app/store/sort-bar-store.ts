import { create } from 'zustand';

type SortStore = {
    categories: Category[];
    chooseCategory: (categoryId: number) => void;
    chosenCategory: number;
    setCategories: (categories: Category[]) => void;
};

export const useSortStore = create<SortStore>(set => ({
    categories: [],
    chooseCategory: categoryId => {
        set({ chosenCategory: categoryId });
    },
    chosenCategory: 1,
    setCategories: categories => {
        set({ categories });
    },
}));
