export type Category = {
    id: number;
    image: string;
    title: string;
};

export type CategoryProps = {
    categories: Category[];
};

export type Gallery = {
    id: number;
    image: string;
};

export type GalleryProps = {
    gallery: Gallery[];
};

export type Option = {
    price: number;
    size: number;
};

export type Product = {
    categories: number[];
    description: string;
    id: number;
    image: string;
    options: Option[];
    title: string;
};

export type Promo = {
    description: string;
    id: string;
    image: string;
    title: string;
};

export type PromoProps = {
    promo: Promo;
};
