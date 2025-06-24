import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';

function Hero() {
    return (
        <section className="mt-[70px] mb-[60px] flex size-full flex-col items-center justify-start bg-background md:mt-[185px] md:mb-[120px] md:flex-row-reverse lg:mt-[200px] xl:mt-[300px] xl:mb-[150px] 2xl:mt-[350px] 2xl:mb-[240px]">
            <Image
                alt={'pizza-hero'}
                className="relative w-[100vw] md:absolute md:right-[-10%] md:w-[60vw] xl:right-0 xl:w-[1007px]"
                height={630}
                src={'/images/hero/pizza_hero.png'}
                width={1007}
            />
            <div className="container flex flex-col gap-[12px]">
                <Typography color={'primary'} variant={'h1'}>
                    Пицца на заказ
                </Typography>
                <Typography color={'primary'} variant="accent">
                    Бесплатная и быстрая доставка за час <br />в любое удобное для вас время
                </Typography>

                <div className="mt-[20px] w-full md:max-w-[304px]">
                    <Button className={'w-full py-[18px]'} form="default" variant="primary">
                        Выбрать пиццу
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
