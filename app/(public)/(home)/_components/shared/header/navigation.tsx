import NavigationElement from '@/(public)/(home)/_components/shared/header/navigation-element';

function Navigation() {
    return (
        <nav className="flex items-center gap-[60px]">
            <NavigationElement href={'/menu'} title={'меню'} />
            <NavigationElement href={'/about'} title={'о нас'} />
            <NavigationElement href={'/contacts'} title={'контакты'} />
        </nav>
    );
}

export default Navigation;
