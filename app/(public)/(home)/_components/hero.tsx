import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="container mt-[176px] flex size-full h-[630px] items-center justify-start bg-background">
            <div className="flex flex-col gap-[12px]">
                <Typography color={'primary'} variant={'h1'}>
                    Пицца на заказ
                </Typography>
                <Typography color={'primary'} variant="accent">
                    Бесплатная и быстрая доставка за час <br />в любое удобное для вас время
                </Typography>

                <div className="mt-[20px]">
                    <Button size={'default'} variant={'default'}>
                        Выбрать пиццу
                    </Button>
                </div>
            </div>
            <Image
                alt={'pizza-hero'}
                className="absolute right-0"
                height={630}
                src={'/images/hero/pizza_hero.png'}
                width={1007}
            />
        </section>
    );
}
