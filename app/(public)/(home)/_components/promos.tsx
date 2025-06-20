import Promo from '@/(public)/(home)/_components/shared/promo/promo';

function Promos() {
    return (
        <section className="mt-[70px] mb-[110px] w-full bg-background">
            <div className="container flex gap-[32px]">
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
        </section>
    );
}

export default Promos;
