import DefaultHeader from '@/_shared/header/default/default-header';
import MobileHeader from '@/_shared/header/mobile/mobile-header';

function Header() {
    return (
        <div className={'fixed top-0 left-0 z-[9000] w-full'}>
            <DefaultHeader />
            <MobileHeader />
        </div>
    );
}

export default Header;
