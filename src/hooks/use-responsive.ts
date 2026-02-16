import { useMedia as useMediaQuery } from 'react-use';

export function useDesktopMediaQuery() {
    return useMediaQuery('(min-width: 1280px)', false);
}

export function useLaptopMediaQuery() {
    return useMediaQuery('(min-width: 1024px)', false);
}

export function useMobileMediaQuery() {
    return useMediaQuery('(min-width: 320px)', true);
}

export function useTabletMediaQuery() {
    return useMediaQuery('(min-width: 768px)', false);
}

/** true — мобилка (max-width: 1023px), false — ПК */
export function useMedia() {
    return useMediaQuery('(max-width: 1023px)', true);
}

export function useBreakpoints() {
    const gtMobile = useMobileMediaQuery();
    const gtTablet = useTabletMediaQuery();
    const gtLaptop = useLaptopMediaQuery();
    const gtDesktop = useDesktopMediaQuery();

    return {
        gtDesktop,
        gtLaptop,
        gtMobile,
        gtTablet,
    };
}
