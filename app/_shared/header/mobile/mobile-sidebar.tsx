'use client';

import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

import MobileSidebarNav from '@/_shared/header/mobile/mobile-sidebar-nav';
import useMobileNavStore from '@/store/mobile-nav-store';

function MobileSidebar() {
    const { setShowMobileNav, showMobileNav } = useMobileNavStore();

    function toggleNav() {
        setShowMobileNav();
    }

    return (
        <aside
            className={`fixed z-[5000] flex size-full justify-end transition-all duration-[.3s] ${showMobileNav ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <Button className={'absolute top-0 z-[1] size-full'} onClick={toggleNav}></Button>
            <div
                className={`z-[2] flex size-full flex-col bg-[#313945] pb-[30px] pt-[12px] text-white md:w-[320px] md:py-[40px]`}
            >
                <div className="container flex w-full flex-1 flex-col items-center">
                    <div className="flex w-full items-center justify-between md:justify-end">
                        <Link className="relative h-[39px] w-[85px] md:hidden" href="/public">
                            <Image
                                alt="mobile navigation logo"
                                height={39}
                                src="/images/footer/footer_logo.png"
                                width={85}
                            ></Image>
                        </Link>
                        <Button className={'h-[40px] w-[40px]'} onClick={toggleNav}>
                            <Image
                                alt={'close mobile navigation'}
                                height={40}
                                src={'/images/header/close.svg'}
                                width={40}
                            ></Image>
                        </Button>
                    </div>

                    <MobileSidebarNav />
                </div>

                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col">
                        <Typography center variant="description">
                            Заказать по телефону
                        </Typography>
                        <Link href="tel:+7 (918) 432-65-87">
                            <Typography center variant="h4">
                                +7 (918) 432-65-87
                            </Typography>
                        </Link>

                        <Typography center variant="description">
                            Ежедневно с 9:00 до 23:00
                        </Typography>
                    </div>
                    <Button className="md:hidden" form="text" variant={'default'}>
                        <Typography className="font-bold" variant="p">
                            РУССКИЙ
                        </Typography>
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default MobileSidebar;
