import { useEffect, useState } from 'react';

function useMaxPhotos() {
    const [maxPhotos, setMaxPhotos] = useState(10);

    useEffect(() => {
        function updateMaxPhotos() {
            const width = window.innerWidth;
            let newMaxPhotos = 10;

            if (width < 768) {
                newMaxPhotos = 4;
            } else if (width < 1280) {
                newMaxPhotos = 6;
            }

            setMaxPhotos(previous => {
                // Обновляем состояние только если значение изменилось
                if (previous !== newMaxPhotos) {
                    return newMaxPhotos;
                }

                return previous;
            });
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
