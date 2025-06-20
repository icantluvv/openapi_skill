import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="flex w-full justify-center bg-black py-[32px]">
            <div className="container flex w-full items-center justify-between">
                <div className="flex items-center gap-[100px]">
                    <Image
                        alt={'footer-logo'}
                        height={52}
                        src={'/images/footer/footer_logo.png'}
                        width={112}
                    ></Image>
                    <div>
                        <Typography className="text-white" variant="h4">
                            +7 (918) 432-65-87
                        </Typography>
                        <Typography className="text-white" variant="description">
                            Ежедневно с 9:00 до 23:00
                        </Typography>
                    </div>
                </div>

                <Link href={'/policy'}>
                    <Typography className="text-white" variant="description">
                        Политика конфиденциальности
                    </Typography>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
