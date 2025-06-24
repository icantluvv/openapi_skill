import { Typography } from '@repo/core/typography';

import Step from '@/_shared/step/step';

function Steps() {
    return (
        <section className="flex w-full flex-col items-center gap-[26px] bg-cream py-[24px] md:py-[42px] xl:py-[72px]">
            <Typography center variant="h2">
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
