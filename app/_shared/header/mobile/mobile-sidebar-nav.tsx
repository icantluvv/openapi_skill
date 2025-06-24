import { Typography } from '@repo/core/typography';

function MobileSidebarNav() {
    return (
        <nav className="flex w-[60%] flex-1 flex-col items-center justify-center gap-[24px] md:mt-[10svh] md:justify-start">
            <Typography center variant="h4">
                МЕНЮ
            </Typography>
            <div className="h-[1px] w-full bg-black"></div>
            <Typography center variant="h4">
                О НАС
            </Typography>
            <div className="h-[1px] w-full bg-black"></div>

            <Typography center variant="h4">
                КОНТАКТЫ
            </Typography>
        </nav>
    );
}

export default MobileSidebarNav;
