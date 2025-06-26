import { Typography } from '@repo/core/typography';

import InstagramPhotos from '@/_shared/instagram-image/instagram-photos';

function InstagramGallery() {
    return (
        <section
            className="flex w-full scroll-mt-[100px] flex-col gap-[24px] bg-background xl:gap-[46px]"
            id={'contacts'}
        >
            <div className="container flex flex-col gap-[4px] xl:gap-[12px]">
                <Typography center variant="h2">
                    Следите за нами в Instagram
                </Typography>
                <Typography center className="text-shadow-text xl:hidden" variant="accent">
                    @pizzamenu
                </Typography>
            </div>
            <InstagramPhotos />
        </section>
    );
}

export default InstagramGallery;
