type Category = {
    id: number;
    image: string;
    title: string;
};

type CategoryProps = {
    categories: Category[] | null;
};

type ProductProps = {
    product: Product;
};
