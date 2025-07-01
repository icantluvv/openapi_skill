import { create } from 'zustand';

type MobileNavStore = {
    setShowMobileNav: () => void;
    showMobileNav: boolean;
};

const useMobileNavStore = create<MobileNavStore>(set => ({
    setShowMobileNav: () => {
        set(state => ({ showMobileNav: !state.showMobileNav }));
    },
    showMobileNav: false,
}));

export default useMobileNavStore;
