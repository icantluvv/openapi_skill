import Link from 'next/link';

import InstagramPhotos from '@/_shared/instagram-image/instagram-photos';
import getGallery from '~/api/services/products/get-gallery';
// eslint-disable-next-line no-restricted-imports
import { Typography } from '~/packages/core/typography';

async function InstagramGallery() {
    const gallery = await getGallery();

    return (
        <section
            className="bg-background mt-[44px] flex w-full scroll-mt-[15vh] flex-col gap-[22px] md:mt-[17px] xl:mt-[20px] xl:gap-[46px]"
            id={'contact'}
        >
            <div className="container flex flex-col items-center gap-[4px] md:gap-[10px] xl:gap-[25px]">
                <Typography center className={'leading-[32px]'} variant="h2">
                    Следите за нами <br className={'md:hidden'} /> в Instagram
                </Typography>

                <Link
                    className={'hover:underline'}
                    href={
                        'https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIMCAIQIxgnGIAEGIoFMg0IAxAAGIMBGLEDGIAEMg0IBBAAGIMBGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjczNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
                    }
                >
                    <Typography
                        center
                        className="font-alegreya text-shadow-text text-[16px] font-extrabold md:text-[20px] xl:text-[24px]"
                        variant="custom"
                    >
                        @pizzamenu
                    </Typography>
                </Link>
            </div>
            <InstagramPhotos gallery={gallery} />
        </section>
    );
}

export default InstagramGallery;
