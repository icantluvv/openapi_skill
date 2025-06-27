import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

function Hero() {
    return (
        <section className="mt-[60px] flex size-full flex-col items-center justify-start overflow-hidden bg-background md:mt-[185px] md:mb-[120px] md:flex-row-reverse lg:mt-[200px] xl:mt-[300px] xl:mb-[150px] 2xl:mt-[350px] 2xl:mb-[240px]">
            <div className="relative flex w-[100vw] justify-end md:absolute md:right-[-10vw] md:max-w-[60.5vw] xl:right-0 xl:max-w-[53vw]">
                <Image
                    alt={'pizza-hero'}
                    className=""
                    height={630}
                    src={'/images/hero/pizza_hero.png'}
                    width={1007}
                />
            </div>
            <div className="container flex w-full flex-col gap-[4px]">
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
