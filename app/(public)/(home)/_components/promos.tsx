import Promo from '@/_shared/promo/promo';

function Promos() {
    return (
        <section className="mt-[10px] mb-[50px] w-full bg-background xl:mb-[105px]">
            <div className="no-scrollbar container overflow-x-auto">
                <div className="flex w-max gap-[32px] md:w-full">
                    <Promo
                        description={'При заказе 2-х больших пицц – средняя пицца в подарок'}
                        src={'/images/promo/Event 1.png'}
                        title={'Закажи 2 пиццы – 3-я в подарок'}
                    />
                    <Promo
                        description={'Скидка на заказ от 3 000 рублей + напиток в подарок'}
                        src={'/images/promo/Event 2.png'}
                        title={'Напиток в подарок'}
                    />
                    <Promo
                        description={'Скидка новым клиентам!'}
                        src={'/images/promo/Event 3.png'}
                        title={'25% при первом заказе'}
                    />
                </div>
            </div>
        </section>
    );
}

export default Promos;
