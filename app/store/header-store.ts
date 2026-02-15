import { create } from 'zustand';

type HeaderState = {
    isScroll: boolean;
    listenScroll: () => void;
    setIsScroll: (isScroll: boolean) => void;
};

export const useHeaderStore = create<HeaderState>(set => ({
    isScroll: false,

    listenScroll: () => {
        const handleScroll = () => {
            set({ isScroll: window.scrollY > 30 });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },

    setIsScroll: isScroll => {
        set({ isScroll });
    },
}));
