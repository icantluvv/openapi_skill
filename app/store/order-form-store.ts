import { create } from 'zustand';

type OrderFormStore = {
    address: string;
    checkFormCompletion: () => boolean;
    fillForm: boolean;
    name: string;
    phone: string;
    setAddress: (address: string) => void;
    setName: (name: string) => void;
    setPhone: (phone: string) => void;
};

export const useOrderFormStore = create<OrderFormStore>((set, get) => ({
    address: '',
    checkFormCompletion: () => {
        const { address, name, phone } = get();

        return address.trim() !== '' && name.trim() !== '' && phone.trim() !== '';
    },
    fillForm: false,
    name: '',
    phone: '',
    setAddress: address => {
        set({ address });
        set({ fillForm: get().checkFormCompletion() });
    },
    setName: name => {
        set({ name });
        set({ fillForm: get().checkFormCompletion() });
    },
    setPhone: phone => {
        set({ phone });
        set({ fillForm: get().checkFormCompletion() });
    },
}));
