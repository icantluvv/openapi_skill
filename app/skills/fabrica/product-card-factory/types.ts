export type ProductCategory = 'not_on_sale' | 'on_sale';

export type Product = {
    category: ProductCategory;
    description: string;
    image: string;
    name: string;
    price: number;
    title: string;
};
