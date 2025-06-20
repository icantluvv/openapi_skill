import { Typography } from '@repo/core/typography';
import Image from 'next/image';

function Promo() {
    return (
        <section className="w-full bg-background">
            <div className="container flex gap-[32px]">
                <div className="flex flex-1">
                    <div>
                        <Image
                            alt={'event1'}
                            height={247}
                            src={'/images/promo/Event 1.png'}
                            width={416}
                        ></Image>
                    </div>
                    <div>
                        <Typography variant={'h4'}>Закажи 2 пиццы – 3-я в подарок</Typography>
                        <Typography variant={'description'}>
                            При заказе 2-х больших пицц – средняя пицца в подарок
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
