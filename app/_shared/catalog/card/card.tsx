import { Typography } from '@repo/core/typography';
import Image from 'next/image';

import CardSizePicker from '@/_shared/catalog/card/card-size-picker';

function Card({ product }: ProductProps) {
    return (
        <li className="flex gap-[4px] p-[4px] shadow-custom">
            <div className="relative flex h-[100px] min-w-[100px]">
                <Image alt={product.title} fill objectFit="cover" src={product.image} />
            </div>

            <div className="my-[18px] flex flex-col gap-[12px] md:gap-[4px]">
                <div className="">
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

                <Typography className="md:text-center" variant="description">
                    Размер, см
                </Typography>

                <CardSizePicker product={product}></CardSizePicker>
            </div>
        </li>
    );
}

export default Card;
