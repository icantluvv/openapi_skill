'use client';

import { Button } from '@repo/core/button';
import { useHeaderScroll } from '#/hooks/use-header-scroll';
import Image from 'next/image';
import Link from 'next/link';

import DefaultNavigation from '@/_shared/header/default/default-navigation';
import HeaderAction from '@/_shared/header/header-action';
import { useCartStore } from '@/store/cart/cart-store';
import { useHeaderStore } from '@/store/header-store';

function DefaultHeader() {
    useHeaderScroll();
    const isScroll = useHeaderStore(state => state.isScroll);

    const { setShowCart } = useCartStore();

    return (
        <header
            className={`hidden w-full transition-all duration-[.3s] xl:block ${isScroll ? 'h-[60px] bg-white shadow-custom' : 'h-[176px]'} `}
        >
            <div className={`container flex h-full items-center justify-between`}>
                <Link href={'/'}>
                    <Image
                        alt={'header_logo'}
                        className={`${isScroll ? 'w-[68px]' : ''} transition-all duration-[.3s]`}
                        height={84}
                        src="/images/header/header_logo.png"
                        width={182}
                    />
                </Link>

                <DefaultNavigation />

                <div
                    className={`${isScroll ? 'h-[44px] justify-end' : 'h-[51px]'} flex gap-[100px] transition-all duration-[.3s]`}
                >
                    <Link href="tel:+7(918)432-65-87">
                        <HeaderAction
                            className={'items-center'}
                            description={'Ежедневно с 9:00 до 23:00'}
                            scrolledTitleSize={'18px'}
                            src={'/images/header/phone.png'}
                            title={'+7' + ' ' + ' (918) ' + ' ' + '432-65-87'}
                            titleSize={'24px'}
                        />
                    </Link>

                    <HeaderAction
                        action={setShowCart}
                        className={'relative items-end'}
                        description={'Итальянская и еще 2 пиццы'}
                        scrolledTitleSize={'14px'}
                        showCartCounter
                        src={'/images/header/cart.svg'}
                        title={'ВАШ ЗАКАЗ'}
                        titleSize={'18px'}
                    />
                </div>

                <div className={isScroll ? 'hidden' : 'block'}>
                    <Button className="h-[48px] w-[48px]" form="circle" variant="secondary">
                        EN
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default DefaultHeader;
