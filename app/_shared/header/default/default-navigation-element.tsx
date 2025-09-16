import { Typography } from '@repo/core/typography';
import { useHeaderScroll } from '#/hooks/use-header-scroll';
import Link from 'next/link';

import { useHeaderStore } from '@/store/header-store';

type NavigationElementProps = {
    href: `/${string}`;
    title: string;
};

function DefaultNavigationElement({ href, title }: NavigationElementProps) {
    useHeaderScroll();
    const isScroll = useHeaderStore(state => state.isScroll);

    return (
        <Link href={href}>
            <Typography
                className={`${isScroll ? 'text-[16px]' : 'text-[18px]'} hover:text-primary active:text-primary-active text-black`}
                variant="custom"
            >
                {title}
            </Typography>
        </Link>
    );
}

export default DefaultNavigationElement;
