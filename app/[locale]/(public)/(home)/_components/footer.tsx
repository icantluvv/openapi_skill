import { Typography } from '@repo/core/typography';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="flex w-full justify-center bg-black py-[24px] xl:py-[32px]">
            <div className="container flex w-full flex-col items-center gap-[10px] md:flex-row md:justify-between md:gap-0">
                <div className="flex flex-col items-center gap-[25px] md:flex-row md:gap-[80px] xl:gap-[100px]">
                    <Link className="w-[79px] md:w-[90px] xl:w-[112px]" href={'/public'}>
                        <Image
                            alt={'footer-logo'}
                            height={52}
                            src={'/images/footer/footer_logo.png'}
                            width={112}
                        ></Image>
                    </Link>

                    <div className="flex flex-col items-center md:items-start">
                        <Link href="tel:+79184326587">
                            <Typography
                                className="font-alegreya text-[24px] font-extrabold tracking-wider text-white"
                                variant="custom"
                            >
                                +7 (918) 432-65-87
                            </Typography>
                        </Link>
                        <Typography className="text-white" variant="description">
                            Ежедневно с 9:00 до 23:00
                        </Typography>
                    </div>
                </div>

                <Link href={'/policy'}>
                    <Typography className="text-white hover:underline" variant="description">
                        Политика конфиденциальности
                    </Typography>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
