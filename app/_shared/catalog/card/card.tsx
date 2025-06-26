import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';

function Card({ product }: ProductProps) {
    return (
        <li className="flex rounded-sm p-[4px] shadow-custom md:flex-col md:items-center md:p-[10px] md:pb-[40px] xl:p-[20px] xl:pb-[40px]">
            <div className="relative flex h-[100px] min-w-[100px] md:h-[220px] md:min-w-[220px] xl:h-[240px] xl:w-[240px] xl:min-w-[240px]">
                <Image alt={product.title} layout={'fill'} objectFit="cover" src={product.image} />
            </div>

            <div className="flex flex-col gap-[4px] md:flex-1 md:justify-between md:gap-[8px] md:px-[10px]">
                <div className="flex flex-col gap-[4px]">
                    <Typography className="md:text-center" variant="h4">
                        {product.title}
                    </Typography>
                    <Typography
                        className="font-roboto text-[11px] text-shadow-text md:text-center md:text-[12px]"
                        variant="custom"
                    >
                        {product.description}
                    </Typography>
                </div>

                <CardSizePicker product={product}></CardSizePicker>
            </div>
        </li>
    );
}

export default Card;
