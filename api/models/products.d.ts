type Option = {
    price: number;
    size: number;
};

type Product = {
    categories: number[];
    description: string;
    id: number;
    image: string;
    options: Option[];
    title: string;
};
