type Option = {
    price: number;
    size: number;
};

type Product = {
    description: string;
    id: number;
    image: string;
    options: Option[];
    title: string;
};

type Category = {
    id: number;
    image: string;
    title: string;
};

type CategoryProps = {
    categories: Category[] | null;
};
