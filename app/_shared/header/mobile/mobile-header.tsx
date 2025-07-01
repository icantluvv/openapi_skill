'use client';
import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

import HeaderAction from '@/_shared/header/header-action';
import MobileSidebar from '@/_shared/header/mobile/mobile-sidebar';
import { useCartStore } from '@/store/cart-store';
import useMobileNavStore from '@/store/mobile-nav-store';

function MobileHeader() {
    const { setShowCart } = useCartStore();
    const { setShowMobileNav } = useMobileNavStore();

    return (
        <div className="xl:hidden">
            <MobileSidebar />

            <div className={`h-[64px] w-full bg-white md:h-[120px]`}>
                <div className="flex h-full items-center justify-between px-[30px]">
                    <Link className="w-[85px] md:w-[130px]" href={'/'}>
                        <Image
                            alt={'header_logo'}
                            height={84}
                            src="/images/header/header_logo.png"
                            width={182}
                        />
                    </Link>

                    <div className="flex items-center gap-[16px] md:gap-[32px]">
                        <Link href="tel:+7(918)432-65-87">
                            <HeaderAction
                                description={'Ежедневно с 9:00 до 23:00'}
                                scrolledTitleSize={'18px'}
                                src={'/images/header/phone.png'}
                                title={'+7 (918) 432-65-87'}
                                titleSize={'24px'}
                            />
                        </Link>

                        <HeaderAction
                            action={setShowCart}
                            description={'Итальянская и еще 2 пиццы'}
                            scrolledTitleSize={'14px'}
                            showCartCounter
                            src={'/images/header/cart.svg'}
                            title={'ВАШ ЗАКАЗ'}
                            titleSize={'18px'}
                        ></HeaderAction>

                        <Button
                            className="ml-[38px] hidden h-[48px] w-[48px] md:block"
                            form="circle"
                            variant="secondary"
                        >
                            <Typography variant={'button'}>EN</Typography>
                        </Button>

                        <Button
                            className="relative flex h-[40px] w-[40px]"
                            form={'default'}
                            onClick={setShowMobileNav}
                            variant="default"
                        >
                            <Image
                                alt={'burger'}
                                fill
                                objectFit="cover"
                                src={'/images/header/burger.svg'}
                            ></Image>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;
