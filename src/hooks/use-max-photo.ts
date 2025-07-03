'use client';

import { useEffect, useState } from 'react';

function getMaxPhotosByWidth() {
    const width = window.innerWidth;

    if (width < 768) {
        return 4;
    }
    if (width < 1280) {
        return 6;
    }

    return 10;
}

function useMaxPhotos() {
    const [maxPhotos, setMaxPhotos] = useState(10);

    const makeNewMax = (newMaxPhotos: number) => {
        setMaxPhotos(previous => (previous === newMaxPhotos ? previous : newMaxPhotos));
    };

    useEffect(() => {
        function updateMaxPhotos() {
            const newMaxPhotos = getMaxPhotosByWidth();

            makeNewMax(newMaxPhotos);
        }

        updateMaxPhotos();
        window.addEventListener('resize', updateMaxPhotos);

        return () => {
            window.removeEventListener('resize', updateMaxPhotos);
        };
    }, []);

    return maxPhotos;
}
export default useMaxPhotos;
