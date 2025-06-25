'use client';
import { Button } from '@repo/core/button';
import Image from 'next/image';
import Link from 'next/link';

import HeaderAction from '@/_shared/header/header-action';
import MobileSidebar from '@/_shared/header/mobile/mobile-sidebar';
import useMobileNavStore from '@/store/mobile-nav-store';
import useCartStore from '@/store/open-cart-store';

function MobileHeader() {
    const { setShowCart } = useCartStore();
    const { setShowMobileNav } = useMobileNavStore();

    return (
        <div className="xl:hidden">
            <MobileSidebar />

            <header className={`h-[64px] w-full bg-white md:h-[120px]`}>
                <div className="container flex h-full items-center justify-between">
                    <Link className="w-[85px] md:w-[130px]" href={'/'}>
                        <Image
                            alt={'header_logo'}
                            height={84}
                            src="/images/header/header_logo.png"
                            width={182}
                        />
                    </Link>

                    <div className="flex items-center gap-[16px] md:gap-[32px]">
                        <HeaderAction
                            description={'Ежедневно с 9:00 до 23:00'}
                            scrolledTitleSize={'18px'}
                            src={'/images/header/phone.png'}
                            title={'+7 (918) 432-65-87'}
                            titleSize={'24px'}
                        ></HeaderAction>

                        <HeaderAction
                            action={setShowCart}
                            description={'Итальянская и еще 2 пиццы'}
                            scrolledTitleSize={'14px'}
                            src={'/images/header/cart.svg'}
                            title={'ВАШ ЗАКАЗ'}
                            titleSize={'18px'}
                        ></HeaderAction>
                        <Button
                            className="hidden h-[48px] w-[48px] md:block"
                            form="circle"
                            variant="secondary"
                        >
                            EN
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
            </header>
        </div>
    );
}

export default MobileHeader;
