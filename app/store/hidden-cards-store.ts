import { create } from 'zustand';

type HiddenCardsStore = {
    addHiddenId: (id: number) => void;
    hiddenIds: Set<number>;
};

export const useHiddenCardsStore = create<HiddenCardsStore>(set => ({
    addHiddenId: id => {
        set(state => ({
            hiddenIds: new Set(state.hiddenIds).add(id),
        }));
    },
    hiddenIds: new Set<number>(),
}));
