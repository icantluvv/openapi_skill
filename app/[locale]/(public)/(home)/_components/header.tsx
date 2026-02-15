import DefaultHeader from '@/_shared/header/default/default-header';
import MobileHeader from '@/_shared/header/mobile/mobile-header';

function Header() {
    return (
        <header className={'fixed left-0 top-0 z-[9000] w-full'}>
            <DefaultHeader />
            <MobileHeader />
        </header>
    );
}

export default Header;
