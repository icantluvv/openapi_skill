import { Typography } from '@repo/core/typography';
import Link from 'next/link';

import InstagramPhotos from '@/_shared/instagram-image/instagram-photos';
import getGallery from '~/api/services/products/get-gallery';

async function InstagramGallery() {
    const gallery = await getGallery();

    return (
        <section
            className="flex w-full scroll-mt-[15vh] flex-col gap-[24px] bg-background xl:gap-[46px]"
            id={'contact'}
        >
            <div className="container flex flex-col gap-[4px] xl:gap-[12px]">
                <Typography center variant="h2">
                    Следите за нами в Instagram
                </Typography>

                <Link
                    href={
                        'https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIMCAIQIxgnGIAEGIoFMg0IAxAAGIMBGLEDGIAEMg0IBBAAGIMBGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjczNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
                    }
                >
                    <Typography
                        center
                        className="font-alegreya text-[16px] font-extrabold text-shadow-text md:text-[20px] xl:text-[24px]"
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
