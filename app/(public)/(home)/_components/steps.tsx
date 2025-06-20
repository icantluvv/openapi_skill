import { Typography } from '@repo/core/typography';
import Image from 'next/image';

function Steps() {
    return (
        <section className="flex w-full flex-col items-center gap-[26px] bg-cream py-[72px]">
            <Typography variant="h2">Доставка и оплата</Typography>

            <div className="container flex items-center justify-between gap-[32px]">
                <div className="flex items-center gap-[24px] rounded-sm bg-background px-[24px] py-[32px]">
                    <div className="h-[80px] w-[80px] min-w-[80px]">
                        <Image
                            alt={'headphones'}
                            height={80}
                            src={'/images/svg/headphones.svg'}
                            width={80}
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <Typography variant="h4">Заказ</Typography>
                        <Typography variant="p">
                            После оформления заказа мы свяжемся с вами для уточнения деталей.
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center gap-[24px] rounded-sm bg-background px-[24px] py-[32px]">
                    <div className="h-[80px] w-[80px] min-w-[80px]">
                        <Image
                            alt={'motocycle'}
                            height={80}
                            src={'/images/svg/motocycle.svg'}
                            width={80}
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <Typography variant="h4">Заказ</Typography>
                        <Typography variant="p">
                            После оформления заказа мы свяжемся с вами для уточнения деталей.
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center gap-[24px] rounded-sm bg-background px-[24px] py-[32px]">
                    <div className="h-[80px] w-[80px] min-w-[80px]">
                        <Image
                            alt={'paying'}
                            height={80}
                            src={'/images/svg/paying.svg'}
                            width={80}
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <Typography variant="h4">Заказ</Typography>
                        <Typography variant="p">
                            После оформления заказа мы свяжемся с вами для уточнения деталей.
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;
