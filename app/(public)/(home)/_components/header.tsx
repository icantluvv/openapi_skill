'use client';

import { Button } from '@repo/core/button';
import { useHeaderScroll } from '#/hooks/use-header-scroll';
import Image from 'next/image';
import Link from 'next/link';

import HeaderAction from '@/(public)/(home)/_components/shared/header/header-action';
import Navigation from '@/(public)/(home)/_components/shared/header/navigation';
import { useHeaderStore } from '@/store/header-store';

function Header() {
    useHeaderScroll();
    const isScroll = useHeaderStore(state => state.isScroll);

    return (
        <header
            className={`fixed top-0 z-[9000] w-full transition-all duration-[.3s] ${isScroll ? 'h-[60px] bg-white shadow-custom' : 'h-[176px]'} `}
        >
            <div className="container flex h-full items-center justify-between">
                <Link href={'/'}>
                    <Image
                        alt={'header_logo'}
                        className={`${isScroll ? 'w-[68px]' : ''} transition-all duration-[.3s]`}
                        height={84}
                        src="/images/header/header_logo.png"
                        width={182}
                    />
                </Link>

                <Navigation />

                <div className="flex gap-[70px]">
                    <HeaderAction
                        description={'Ежедневно с 9:00 до 23:00'}
                        scrolledTitleSize={'18px'}
                        src={'/images/header/phone.png'}
                        title={'+7 (918) 432-65-87'}
                        titleSize={'24px'}
                    />

                    <HeaderAction
                        description={'Итальянская и еще 2 пиццы'}
                        scrolledTitleSize={'14px'}
                        src={'/images/header/cart.svg'}
                        title={'ВАШ ЗАКАЗ'}
                        titleSize={'18px'}
                    />
                </div>

                <Button className={isScroll ? 'hidden' : 'block'} form="circle" variant="secondary">
                    EN
                </Button>
            </div>
        </header>
    );
}

export default Header;
