import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
        <section className="mt-[60px] flex size-full flex-col items-center justify-start overflow-hidden bg-background md:mt-[160px] md:mb-[115px] md:flex-row-reverse lg:mt-[200px] xl:mt-[300px] xl:mb-[150px] 2xl:mt-[325px] 2xl:mb-[280px]">
            <div className="relative flex w-[100vw] justify-end md:absolute md:right-[-8.5%] md:mt-[25px] md:max-w-[60.5vw] xl:right-0 xl:max-w-[53vw] 2xl:mt-[25px]">
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

                <div className="mt-[25px] w-full md:mt-[20px] md:max-w-[304px]">
                    <Link href={'/#menu'}>
                        <Button className={'w-full py-[17px]'} form="default" variant="primary">
                            <Typography variant={'button'}>ВЫБРАТЬ ПИЦЦУ</Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
