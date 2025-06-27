import { Typography } from '@repo/core/typography';

import InstagramPhotos from '@/_shared/instagram-image/instagram-photos';
import getGallery from '~/api/services/products/get-gallery';

async function InstagramGallery() {
    const gallery = await getGallery();

    return (
        <section
            className="flex w-full scroll-mt-[100px] flex-col gap-[24px] bg-background xl:gap-[46px]"
            id={'contacts'}
        >
            <div className="container flex flex-col gap-[4px] xl:gap-[12px]">
                <Typography center variant="h2">
                    Следите за нами в Instagram
                </Typography>
                <Typography
                    center
                    className="font-alegreya font-extrabold text-shadow-text xl:hidden"
                    variant="custom"
                >
                    @pizzamenu
                </Typography>
            </div>
            <InstagramPhotos gallery={gallery} />
        </section>
    );
}

export default InstagramGallery;
