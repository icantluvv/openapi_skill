type CartItem = {
    cartItemId: string;
    id: number;
    image: string;
    price: number;
    quantity: number;
    size: number;
    title: string;
};

type CartStore = {
    addItem: (item: CartItem) => void;
    clearCart: () => void;
    items: CartItem[];
    removeItem: (cartItemId: string) => void;
    setShowCart: () => void;
    showCart: boolean;
    totalPrice: number;
    updateQuantity: (cartItemId: string, quantity: number) => void;
};

type CartItemProps = {
    item: CartItem;
};
