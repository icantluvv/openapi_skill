'use client';

import useMaxPhotos from '#/hooks/use-max-photo';
import Image from 'next/image';

import InstagramPhotosArray from '@/_shared/instagram-image/instagram-photos-array';

function InstagramPhotos() {
    const maxPhotos = useMaxPhotos();

    return (
        <div className="grid w-full grid-cols-2 place-content-stretch md:grid-cols-3 xl:grid-cols-5">
            {InstagramPhotosArray.slice(0, maxPhotos).map(photo => (
                <Image
                    alt="Instagram post"
                    className="h-full w-full object-cover"
                    height={384}
                    key={photo.id}
                    src={photo.url}
                    width={384}
                />
            ))}
        </div>
    );
}

export default InstagramPhotos;
