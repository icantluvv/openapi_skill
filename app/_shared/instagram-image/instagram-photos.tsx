'use client';

import useMaxPhotos from '#/hooks/use-max-photo';
import Image from 'next/image';

function InstagramPhotos({ gallery }: GalleryProps) {
    const maxPhotos = useMaxPhotos();

    return (
        <div className="grid w-full grid-cols-2 place-content-stretch md:grid-cols-3 xl:grid-cols-5">
            {gallery.slice(0, maxPhotos).map(photo => (
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
