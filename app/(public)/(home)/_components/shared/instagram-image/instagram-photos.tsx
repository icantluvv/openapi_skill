import Image from 'next/image';

import InstagramPhotosArray from './instagram-photos-array';

function InstagramPhotos() {
    return (
        <div className="grid w-full grid-cols-5 place-content-stretch">
            {InstagramPhotosArray.map(photo => (
                <Image
                    alt={`Instagram post`}
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
