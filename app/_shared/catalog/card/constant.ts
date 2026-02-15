import type { Option } from '~/api/models/types';

export type PizzaSize = 20 | 30 | 40;

export const sizeToCssClass: Record<PizzaSize, string> = {
    20: 'w-[60px] md:w-[140px] xl:w-[150px] h-[60px] md:h-[140px] xl:h-[150px]',
    30: 'w-[73px] md:w-[155px] xl:w-[180px] h-[73px] md:h-[155px] xl:h-[180px]',
    40: 'w-[85px] md:w-[180px] xl:w-[200px] h-[85px] md:h-[190px] xl:h-[210px]',
};

export const DEFAULT_OPTION: Option = { price: 0, size: 20 };

export const DISCOUNT_TOAST_MESSAGE = 'Вы получили скидку 10%';
