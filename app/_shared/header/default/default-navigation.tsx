import DefaultNavigationElement from '@/_shared/header/default/default-navigation-element';

function DefaultNavigation() {
    return (
        <nav className="font-alegreya flex gap-[65px] font-black text-white">
            <DefaultNavigationElement href={'/#menu'} title={'МЕНЮ'} />
            <DefaultNavigationElement href={'/#about'} title={'О НАС'} />
            <DefaultNavigationElement href={'/#contacts'} title={'КОНТАКТЫ'} />
        </nav>
    );
}

export default DefaultNavigation;
