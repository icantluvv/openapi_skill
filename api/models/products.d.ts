type Option = {
    price: number;
    size: number;
};

type Product = {
    categories: string[];
    description: string;
    id: number;
    image: string;
    options: Option[];
    title: string;
};
