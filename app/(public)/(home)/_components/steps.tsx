import { Typography } from '@repo/core/typography';

import Step from '@/_shared/step/step';

function Steps() {
    return (
        <section className="flex w-full flex-col items-center gap-[12px] bg-cream pt-[24px] pb-[40px] md:gap-[34px] md:pt-[50px] md:pb-[62px] xl:gap-[42px] xl:py-[80px]">
            <Typography center className={'leading-[35px]'} variant="h2">
                Доставка и оплата
            </Typography>

            <div className="container flex flex-col items-center justify-between gap-[12px] md:flex-row md:gap-[32px]">
                <Step
                    description="После оформления заказа мы свяжемся с вами для уточнения деталей."
                    src={'/images/svg/headphones.svg'}
                    title={'Заказ'}
                />
                <Step
                    description="Мы доставим вашу пиццу горячей. Бесплатная доставка по городу."
                    src={'/images/svg/motocycle.svg'}
                    title={'Доставка курьером'}
                />
                <Step
                    description="Оплатить можно наличными или картой курьеру. И золотом тоже можно."
                    src={'/images/svg/paying.svg'}
                    title={'Оплата'}
                />
            </div>
        </section>
    );
}

export default Steps;
