import DefaultHeader from '@/_shared/header/default/default-header';
import MobileHeader from '@/_shared/header/mobile/mobile-header';

function Header() {
    return (
        <header className={'fixed top-0 left-0 z-[9000] w-full'}>
            <DefaultHeader />
            <MobileHeader />
        </header>
    );
}

export default Header;
