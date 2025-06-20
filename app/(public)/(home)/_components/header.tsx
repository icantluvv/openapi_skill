import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className="fixed top-0 z-[9000] w-full gap-[70px] bg-white py-[46px]">
            <div className="container flex max-w-[1312px] items-center justify-between">
                <Link href={'/public'}>
                    <Image
                        alt={'header_logo'}
                        height={84}
                        src="/images/header/header_logo.png"
                        width={128}
                    />
                </Link>

                <nav className="flex gap-[60px]">
                    <Link className="transition-colors hover:text-primary" href="/public#menu">
                        меню
                    </Link>
                    <Link href="/public#about">о нас</Link>
                    <Link href="/public#contacts">контакты</Link>
                </nav>

                <div className="flex gap-[70px]">
                    <div className="flex items-center gap-[12px]">
                        <div>
                            <Image
                                alt={'phone'}
                                height={40}
                                src="/images/header/phone.png"
                                width={40}
                            ></Image>
                        </div>
                        <div>
                            <Typography variant={'h4'}>+7(918)432-65-87</Typography>
                            <Typography variant={'p'}>Ежедневно с 9:00 до 23:00</Typography>
                        </div>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        <div>
                            <Image
                                alt={'phone'}
                                height={40}
                                src="/images/header/phone.png"
                                width={40}
                            ></Image>
                        </div>
                        <div>
                            <Typography variant={'h4'}>Ваш заказ</Typography>
                            <Typography variant={'p'}>Итальянская и еще 2 пиццы</Typography>
                        </div>
                    </div>

                    <Button size={'circle'} variant={'language'}>
                        EN
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
