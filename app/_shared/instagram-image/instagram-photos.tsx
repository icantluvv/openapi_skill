'use client';

import useMaxPhotos from '#/hooks/use-max-photo';
import Image from 'next/image';

import type { Gallery, GalleryProps } from '~/api/models/types';

function InstagramPhotos({ gallery }: GalleryProps) {
    const maxPhotos = useMaxPhotos();
    const list: Gallery[] = Array.isArray(gallery) ? gallery : [];

    return (
        <div className="grid w-full grid-cols-2 place-content-stretch md:grid-cols-3 xl:grid-cols-5">
            {list.slice(0, maxPhotos).map((photo: Gallery) => (
                <Image
                    alt="Instagram post"
                    className="h-full w-full object-cover"
                    height={384}
                    key={photo.id}
                    src={photo.image}
                    width={384}
                />
            ))}
        </div>
    );
}

export default InstagramPhotos;
