import type { Category, Gallery, Product, Promo } from '../models/types';

export const mockPromos: Promo[] = [
    {
        description: 'При заказе 2-х больших пицц – средняя пицца в подарок',
        id: '1',
        image: '/images/promo/Event 1.png',
        title: 'Закажи 2 пиццы – 3-я в подарок',
    },
    {
        description: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
        id: '2',
        image: '/images/promo/Event 2.png',
        title: 'Напиток в подарок',
    },
    {
        description: 'Скидка новым клиентам!',
        id: '3',
        image: '/images/promo/Event 3.png',
        title: '25% при первом заказе',
    },
];

export const mockCategories: Category[] = [
    { id: 1, image: '/images/svg/mobile-sortbar/all.svg', title: 'ВСЕ' },
    { id: 2, image: '/images/svg/mobile-sortbar/pepper.svg', title: 'ОСТРЫЕ' },
    { id: 3, image: '/images/svg/mobile-sortbar/meat.svg', title: 'МЯСНЫЕ' },
    { id: 4, image: '/images/svg/mobile-sortbar/cheese.svg', title: 'СЫРНЫЕ' },
    { id: 5, image: '/images/svg/mobile-sortbar/vegan.svg', title: 'ВЕГАНСКИЕ' },
];

export const mockProducts: Product[] = [
    {
        categories: [1, 2, 3],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 1,
        image: '/images/catalog/pizza1.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Итальянская',
    },
    {
        categories: [1, 3],
        description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
        id: 2,
        image: '/images/catalog/pizza2.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Маргарита',
    },
    {
        categories: [1, 3],
        description: 'Циплёнок (маленькая кура), оливки, моцарелла, соус барбекю',
        id: 3,
        image: '/images/catalog/pizza3.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Барбекю',
    },
    {
        categories: [1, 5],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 4,
        image: '/images/catalog/pizza4.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Вегетарианская',
    },
    {
        categories: [1, 3],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 5,
        image: '/images/catalog/pizza5.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Мясная',
    },
    {
        categories: [1, 5],
        description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
        id: 6,
        image: '/images/catalog/pizza6.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Овощная',
    },
    {
        categories: [1, 3],
        description: 'Цыплёнок (маленькая кура), оливки, моцарелла, соус барбекю',
        id: 7,
        image: '/images/catalog/pizza7.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Римская',
    },
    {
        categories: [1, 5],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 8,
        image: '/images/catalog/pizza8.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'С грибами',
    },
    {
        categories: [1, 4],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 9,
        image: '/images/catalog/pizza9.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Сырная',
    },
    {
        categories: [1, 4],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 10,
        image: '/images/catalog/pizza10.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Четыре сыра',
    },
    {
        categories: [1, 2, 3],
        description: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
        id: 11,
        image: '/images/catalog/pizza11.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Пепперони Фреш с томатами',
    },
    {
        categories: [1, 3, 4],
        description: 'Томат, шампиньоны, сыр, оливки, чили, соус, тесто, базилик',
        id: 12,
        image: '/images/catalog/pizza12.png',
        options: [
            { price: 699, size: 20 },
            { price: 799, size: 30 },
            { price: 899, size: 40 },
        ],
        title: 'Ветчина и сыр',
    },
];

export const mockGallery: Gallery[] = [
    { id: 1, image: '/images/instagram/inst01.png' },
    { id: 2, image: '/images/instagram/inst02.png' },
    { id: 3, image: '/images/instagram/inst03.png' },
    { id: 4, image: '/images/instagram/inst04.png' },
    { id: 5, image: '/images/instagram/inst05.png' },
    { id: 6, image: '/images/instagram/inst06.png' },
    { id: 7, image: '/images/instagram/inst07.png' },
    { id: 8, image: '/images/instagram/inst08.png' },
    { id: 9, image: '/images/instagram/inst09.png' },
    { id: 10, image: '/images/instagram/inst10.png' },
];
