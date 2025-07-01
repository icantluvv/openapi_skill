import { Typography } from '@repo/core/typography';
import Link from 'next/link';

import useMobileNavStore from '@/store/mobile-nav-store';

function MobileSidebarNav() {
    const { setShowMobileNav } = useMobileNavStore();

    function closeMobileNav() {
        setShowMobileNav();
    }

    return (
        <nav className="flex w-[60%] flex-1 flex-col items-center justify-center gap-[24px] md:mt-[10svh] md:justify-start">
            <Link href={'/#menu'} onClick={closeMobileNav}>
                <Typography center variant="h4">
                    МЕНЮ
                </Typography>
            </Link>
            <div className="h-[1px] w-full bg-black"></div>

            <Link href={'/#about'} onClick={closeMobileNav}>
                <Typography center variant="h4">
                    О НАС
                </Typography>
            </Link>

            <div className="h-[1px] w-full bg-black"></div>

            <Link href={'/#contact'} onClick={closeMobileNav}>
                <Typography center variant="h4">
                    КОНТАКТЫ
                </Typography>
            </Link>
        </nav>
    );
}

export default MobileSidebarNav;
