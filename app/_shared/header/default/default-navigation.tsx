import DefaultNavigationElement from '@/_shared/header/default/default-navigation-element';

function DefaultNavigation() {
    return (
        <nav className="flex gap-[60px] text-white">
            <DefaultNavigationElement href={'/menu'} title={'меню'} />
            <DefaultNavigationElement href={'/about'} title={'о нас'} />
            <DefaultNavigationElement href={'/contacts'} title={'контакты'} />
        </nav>
    );
}

export default DefaultNavigation;
