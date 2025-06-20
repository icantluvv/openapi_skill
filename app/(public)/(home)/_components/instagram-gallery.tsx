import { Typography } from '@repo/core/typography';

import InstagramPhotos from '@/(public)/(home)/_components/shared/instagram-image/instagram-photos';

function InstagramGallery() {
    return (
        <section className="flex w-full flex-col gap-[46px] bg-background">
            <div className="flex flex-col gap-[13px]">
                <Typography center variant="h2">
                    Следите за нами в Instagram
                </Typography>
                <Typography center className="text-shadow-text" variant="accent">
                    @pizzamenu
                </Typography>
            </div>
            <InstagramPhotos /> {/* This should be InstagramPhotos, not InstagramGallery */}
        </section>
    );
}

export default InstagramGallery;
