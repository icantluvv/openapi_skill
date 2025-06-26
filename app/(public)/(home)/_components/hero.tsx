import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

function Hero() {
    return (
        <section className="flex size-full flex-col justify-start bg-background md:mt-[185px] md:mb-[120px] md:flex-row-reverse lg:mt-[200px] xl:mt-[300px] xl:mb-[150px] 2xl:mt-[350px] 2xl:mb-[240px]">
            <Image
                alt={'pizza-hero'}
                className="absolute top-[125px] right-0"
                height={630}
                sizes="1007px"
                src={'/images/hero/pizza_hero.png'}
                width={1007}
            />
            <div className="container flex flex-col gap-[4px]">
                <Typography color={'primary'} variant={'h1'}>
                    Пицца на заказ
                </Typography>
                <Typography color={'primary'} variant="accent">
                    Бесплатная и быстрая доставка за час <br />в любое удобное для вас время
                </Typography>

                <div className="mt-[25px] w-full md:max-w-[304px]">
                    <Button className={'w-full py-[17px]'} form="default" variant="primary">
                        ВЫБРАТЬ ПИЦЦУ
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
