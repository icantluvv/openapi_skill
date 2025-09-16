import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line no-restricted-imports
import { Button } from '~/packages/core/button';
// eslint-disable-next-line no-restricted-imports
import { Typography } from '~/packages/core/typography';

function Hero() {
    const t = useTranslations('HomePage');

    return (
        <section className="bg-background mt-[57px] flex size-full flex-col items-center justify-start overflow-hidden md:mb-[112px] md:mt-[165px] md:flex-row-reverse lg:mt-[200px] xl:mb-[150px] xl:mt-[300px] 2xl:mb-[280px] 2xl:mt-[322px]">
            <div className="relative flex w-[100vw] justify-end md:absolute md:right-[-8.5%] md:mt-[18px] md:max-w-[60.5vw] xl:right-0 xl:max-w-[53vw] 2xl:mt-[25px]">
                <Image
                    alt={'pizza-hero'}
                    className=""
                    height={630}
                    src={'/images/hero/pizza_hero.png'}
                    width={1007}
                />
            </div>

            <div className="container mt-[10px] flex w-full flex-col gap-[4px] md:mt-0">
                <Typography color={'primary'} variant={'h1'}>
                    {t('title')}
                </Typography>

                <div className={'max-w-full'}>
                    <Typography color={'primary'} variant="accent">
                        Бесплатная и быстрая доставка за час <br className={'hidden md:block'} /> в
                        любое удобное для вас время
                    </Typography>
                </div>
                <div className="mt-[10px] w-full md:mt-[20px] md:max-w-[304px] xl:mt-[25px]">
                    <Link href={'/public#menu'}>
                        <Button
                            className={'w-full py-[12px] md:py-[17px]'}
                            form="default"
                            variant="primary"
                        >
                            <Typography variant={'button'}>ВЫБРАТЬ ПИЦЦУ</Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
